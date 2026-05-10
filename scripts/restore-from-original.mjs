/**
 * figma-assets-original → figma-assets 복원 스크립트
 * 사용법: node scripts/restore-from-original.mjs
 *
 * remove-checkerboard-bg.mjs 실행 전 원본(투명 배경)이
 * figma-assets-original에 백업되어 있을 때 사용.
 */

import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync } from 'fs';
import { join, dirname, relative } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const ASSET_DIR = join(ROOT, 'public', 'figma-assets');
const BACKUP_DIR = join(ROOT, 'public', 'figma-assets-original');

function collectFiles(dir, baseDir = dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      results.push(...collectFiles(fullPath, baseDir));
    } else if (entry.endsWith('.png')) {
      results.push(relative(baseDir, fullPath));
    }
  }
  return results;
}

const files = collectFiles(BACKUP_DIR);

if (files.length === 0) {
  console.log('⚠️  figma-assets-original에 PNG 파일이 없습니다.');
  process.exit(0);
}

console.log(`🔄 ${files.length}개 파일을 original → figma-assets로 복원합니다...\n`);

let ok = 0, skip = 0;
for (const relPath of files) {
  const src = join(BACKUP_DIR, relPath);
  const dst = join(ASSET_DIR, relPath);

  // 대상 폴더 없으면 생성
  mkdirSync(dirname(dst), { recursive: true });

  copyFileSync(src, dst);
  console.log(`✅ ${relPath}`);
  ok++;
}

console.log(`\n🎉 완료! ${ok}개 복원됨. 브라우저를 새로고침하세요.`);
