/**
 * 픽셀아트 지구를 우리가 만든 레이어 지구 PNG로 교체하는 스크립트
 * 사용법: node scripts/swap-planet-images.mjs
 */

import { copyFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const ASSETS = join(ROOT, 'public', 'figma-assets');

// Figma 번들에서 각 행성에 사용되는 UUID 파일명
const PLANET_MAP = {
  earth:   '6ab7871e-7d6d-44a6-a2db-b51b9cb0df19.png',
  mars:    '3a9fd7bc-7063-4e7a-b663-6fe85f5b0c20.png',
  jupiter: '927a2cb4-0d70-4fd0-973a-9c9d9b69f608.png',
  saturn:  'daf5cddc-11cf-4178-be0e-552b957f86f3.png',
  uranus:  '8483f02a-32f0-4329-953f-691cb00c1d47.png',
  neptune: '472a5467-3bce-465b-bfb1-857cbcec71d8.png',
  mercury: 'af45c682-e77a-41e4-83f8-22db2d745fa2.png',
  venus:   '25-3-compressed_v3-1.png', // 금성은 이미 다른 파일명
};

// 교체할 행성 목록 (우리가 만든 PNG가 있는 것들)
const SWAPS = [
  { from: 'earth_base.png',   to: PLANET_MAP.earth,   name: '지구' },
  { from: 'mars_base.png',    to: PLANET_MAP.mars,    name: '화성' },
  { from: 'jupiter_base.png', to: PLANET_MAP.jupiter, name: '목성' },
  { from: 'saturn_base.png',  to: PLANET_MAP.saturn,  name: '토성' },
  { from: 'uranus_base.png',  to: PLANET_MAP.uranus,  name: '천왕성' },
  { from: 'neptune_base.png', to: PLANET_MAP.neptune, name: '해왕성' },
  { from: 'mercury_base.png', to: PLANET_MAP.mercury, name: '수성' },
];

console.log('🪐 행성 이미지 교체 시작...\n');

let success = 0;
for (const { from, to, name } of SWAPS) {
  const src = join(ASSETS, from);
  const dst = join(ASSETS, to);

  if (!existsSync(src)) {
    console.log(`⚠️  ${name}: ${from} 파일 없음, 건너뜀`);
    continue;
  }

  try {
    copyFileSync(src, dst);
    console.log(`✅ ${name}: ${from} → ${to}`);
    success++;
  } catch (err) {
    console.error(`❌ ${name}: 오류 - ${err.message}`);
  }
}

console.log(`\n🎉 완료! ${success}개 행성 이미지 교체됨`);
console.log('브라우저를 새로고침하면 변경사항이 적용됩니다.');
