/**
 * UUID 행성 파일을 planet_image 폴더의 이미지로 덮어쓰기
 * 사용법: node scripts/replace-planet-uuid.mjs
 */

import { copyFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const ASSET_DIR = join(ROOT, 'public', 'figma-assets');
const PLANET_DIR = join(ASSET_DIR, 'planet_image');

// UUID파일명 → planet_image 파일명 매핑 (태양 제외)
const MAP = [
  { uuid: '25-3-compressed_v3-1.png',                    src: 'mercury.png'  },
  { uuid: 'af45c682-e77a-41e4-83f8-22db2d745fa2.png',    src: 'venus.png'    },
  { uuid: '6ab7871e-7d6d-44a6-a2db-b51b9cb0df19.png',    src: 'earth.png'    },
  { uuid: '3a9fd7bc-7063-4e7a-b663-6fe85f5b0c20.png',    src: 'Mars.png'     },
  { uuid: '927a2cb4-0d70-4fd0-973a-9c9d9b69f608.png',    src: 'Jupiter.png'  },
  { uuid: 'daf5cddc-11cf-4178-be0e-552b957f86f3.png',    src: 'Saturn.png'   },
  { uuid: '8483f02a-32f0-4329-953f-691cb00c1d47.png',    src: 'Uranus.png'   },
  { uuid: '472a5467-3bce-465b-bfb1-857cbcec71d8.png',    src: 'neptune.png'  },
];

console.log('🪐 UUID 행성 파일 교체 시작...\n');

for (const { uuid, src } of MAP) {
  const srcPath = join(PLANET_DIR, src);
  const dstPath = join(ASSET_DIR, uuid);

  if (!existsSync(srcPath)) {
    console.error(`❌ 소스 없음: planet_image/${src}`);
    continue;
  }

  copyFileSync(srcPath, dstPath);
  console.log(`✅ ${uuid.slice(0, 8)}... ← planet_image/${src}`);
}

console.log('\n🎉 완료! 브라우저를 새로고침하세요.');
