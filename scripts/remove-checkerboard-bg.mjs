/**
 * 체커보드 배경 제거 스크립트 (Node.js 버전)
 * 사용법: node scripts/remove-checkerboard-bg.mjs
 */

import { createCanvas, loadImage } from 'canvas';
import { existsSync, mkdirSync, copyFileSync, readdirSync, statSync } from 'fs';
import { join, dirname, relative } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const ASSET_DIR = join(ROOT, 'public', 'figma-assets');
const BACKUP_DIR = join(ROOT, 'public', 'figma-assets-original');

/**
 * 체커보드 픽셀 판별
 * - 순수 흰색/밝은 회색: 체커보드로 판정
 * - 채도가 있는 색(달 표면 회색 포함): 보호
 * @param {number} r @param {number} g @param {number} b @param {number} a
 * @param {boolean} protect - true면 더 엄격하게 판별 (밝은 콘텐츠 보호)
 */
function isCheckerPixel(r, g, b, a, protect = false) {
  if (a < 200) return false; // 이미 투명한 픽셀 스킵
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  const diff = max - min;
  const threshold = protect ? 220 : 150; // 보호 모드: 더 밝은 것만 제거
  return min >= threshold && diff <= 30;
}

async function removeCheckerboard(filePath, backupPath, protect = false) {
  // 백업
  if (!existsSync(backupPath)) {
    copyFileSync(filePath, backupPath);
  }

  const img = await loadImage(backupPath);
  const { width, height } = img;

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);

  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data; // RGBA 배열
  const visited = new Uint8Array(width * height);

  const index = (x, y) => y * width + x;

  const queue = [];

  function addIfBackground(x, y) {
  const idx = index(x, y);
  if (visited[idx]) return;
  const p = idx * 4;
  const r = data[p], g = data[p + 1], b = data[p + 2], a = data[p + 3];
  if (isCheckerPixel(r, g, b, a, protect)) {
      visited[idx] = 1;
      queue.push([x, y]);
    }
  }

  // 가장자리에서 BFS 시작
  for (let x = 0; x < width; x++) {
    addIfBackground(x, 0);
    addIfBackground(x, height - 1);
  }
  for (let y = 0; y < height; y++) {
    addIfBackground(0, y);
    addIfBackground(width - 1, y);
  }

  // BFS flood fill
  let head = 0;
  while (head < queue.length) {
    const [x, y] = queue[head++];
    if (x > 0) addIfBackground(x - 1, y);
    if (x + 1 < width) addIfBackground(x + 1, y);
    if (y > 0) addIfBackground(x, y - 1);
    if (y + 1 < height) addIfBackground(x, y + 1);
  }

  // 감지된 픽셀을 투명하게
  let cleared = 0;
  for (let i = 0; i < width * height; i++) {
    if (visited[i]) {
      data[i * 4 + 3] = 0; // alpha = 0
      cleared++;
    }
  }

  ctx.putImageData(imageData, 0, 0);

  // PNG로 저장
  const { writeFileSync } = await import('fs');
  const buffer = canvas.toBuffer('image/png');
  writeFileSync(filePath, buffer);

  return cleared;
}

async function main() {
  // canvas 패키지 확인
  try {
    await import('canvas');
  } catch {
    console.error('❌ canvas 패키지가 없습니다. 아래 명령어로 설치하세요:');
    console.error('   npm install canvas');
    process.exit(1);
  }

  if (!existsSync(BACKUP_DIR)) {
    mkdirSync(BACKUP_DIR, { recursive: true });
    console.log(`📁 백업 폴더 생성: ${BACKUP_DIR}`);
  }

  // 재귀적으로 PNG 파일 수집
  function collectPngs(dir) {
    const results = [];
    for (const entry of readdirSync(dir)) {
      const fullPath = join(dir, entry);
      if (statSync(fullPath).isDirectory()) {
        results.push(...collectPngs(fullPath));
      } else if (entry.endsWith('.png')) {
        results.push(fullPath);
      }
    }
    return results;
  }

  const filePaths = collectPngs(ASSET_DIR);

  if (filePaths.length === 0) {
    console.log('⚠️  PNG 파일이 없습니다.');
    return;
  }

  console.log(`🌍 ${filePaths.length}개 PNG 파일 처리 시작...\n`);

  // 밝은 콘텐츠가 많은 파일은 보호 모드로 처리
  const PROTECT_PATTERNS = ['glow', 'effect_light', 'overlay'];

  for (const filePath of filePaths) {
    const relPath = relative(ASSET_DIR, filePath);
    const backupPath = join(BACKUP_DIR, relPath);
    // 백업 폴더 내 하위 디렉토리도 생성
    mkdirSync(dirname(backupPath), { recursive: true });
    const protect = PROTECT_PATTERNS.some(p => relPath.includes(p));
    try {
      const cleared = await removeCheckerboard(filePath, backupPath, protect);
      if (protect) process.stdout.write('🛡️  (보호모드) ');
      console.log(`✅ ${relPath}: ${cleared.toLocaleString()}개 픽셀 투명화 완료`);
    } catch (err) {
      console.error(`❌ ${relPath}: 오류 발생 - ${err.message}`);
    }
  }

  console.log('\n🎉 완료! 브라우저를 새로고침해서 확인하세요.');
}

main();
