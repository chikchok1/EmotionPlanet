import type { Accessory, AccessoryCategory, Rarity } from "../types";

export const ACCESSORY_SPRITE = "/figma-assets/f2b72c5b-d180-4f2d-bd67-a54563d6758c.png";
export const ACCESSORY_GRID = { columns: 8, rows: 8 };

export const CATEGORY_LABELS: Record<AccessoryCategory, string> = {
  hat: "모자",
  shoes: "신발",
  face: "얼굴",
  ring: "링",
  background: "배경"
};

export const RARITY_COLORS: Record<Rarity, string> = {
  common: "#9CA3AF",
  rare: "#60A5FA",
  epic: "#B080FF",
  legendary: "#F5C842"
};

export const RARITY_LABELS: Record<Rarity, string> = {
  common: "COMMON",
  rare: "RARE",
  epic: "EPIC",
  legendary: "LEGEND"
};

export const ACCESSORY_CATEGORIES: AccessoryCategory[] = [
  "hat",
  "shoes",
  "face",
  "ring",
  "background"
];

export const ACCESSORIES: Accessory[] = [
  { id: "crown", name: "왕관", category: "hat", price: 100, col: 0, row: 0, rarity: "rare" },
  { id: "witch-hat", name: "마녀 모자", category: "hat", price: 80, col: 1, row: 0, rarity: "common" },
  { id: "astronaut", name: "우주 헬멧", category: "hat", price: 150, col: 2, row: 0, rarity: "epic" },
  { id: "sprout", name: "새싹 모자", category: "hat", price: 60, col: 3, row: 0, rarity: "common" },
  { id: "cat-ears", name: "고양이 귀", category: "hat", price: 70, col: 4, row: 0, rarity: "common" },
  { id: "star-band", name: "별 머리띠", category: "hat", price: 50, col: 5, row: 0, rarity: "common" },
  { id: "bow-hat", name: "리본 모자", category: "hat", price: 60, col: 6, row: 0, rarity: "common" },
  { id: "night-cap", name: "잠자리 모자", category: "hat", price: 40, col: 7, row: 0, rarity: "common" },
  { id: "space-cap", name: "우주 야구모자", category: "hat", price: 80, col: 0, row: 1, rarity: "rare" },
  { id: "sneakers", name: "빨간 운동화", category: "shoes", price: 60, col: 1, row: 1, rarity: "common" },
  { id: "boots", name: "갈색 부츠", category: "shoes", price: 80, col: 2, row: 1, rarity: "common" },
  { id: "rocket-boots", name: "로켓 부츠", category: "shoes", price: 120, col: 3, row: 1, rarity: "epic" },
  { id: "cloud-shoes", name: "구름 신발", category: "shoes", price: 90, col: 4, row: 1, rarity: "rare" },
  { id: "star-shoes", name: "별 슬리퍼", category: "shoes", price: 50, col: 5, row: 1, rarity: "common" },
  { id: "blue-shoes", name: "파란 신발", category: "shoes", price: 60, col: 6, row: 1, rarity: "common" },
  { id: "winged-shoes", name: "날개 신발", category: "shoes", price: 130, col: 7, row: 1, rarity: "epic" },
  { id: "sunglasses", name: "선글라스", category: "face", price: 70, col: 0, row: 2, rarity: "common" },
  { id: "star-glasses", name: "별 안경", category: "face", price: 80, col: 1, row: 2, rarity: "rare" },
  { id: "face-mask", name: "마스크", category: "face", price: 40, col: 3, row: 2, rarity: "common" },
  { id: "crystal-glasses", name: "수정 안경", category: "face", price: 90, col: 5, row: 2, rarity: "rare" },
  { id: "plain-ring", name: "기본 링", category: "ring", price: 50, col: 0, row: 4, rarity: "common" },
  { id: "glow-ring", name: "빛나는 링", category: "ring", price: 100, col: 1, row: 4, rarity: "rare" },
  { id: "heart-ring", name: "하트 링", category: "ring", price: 80, col: 2, row: 4, rarity: "common" },
  { id: "star-ring", name: "별 링", category: "ring", price: 80, col: 3, row: 4, rarity: "common" },
  { id: "rainbow-ring", name: "무지개 링", category: "ring", price: 120, col: 4, row: 4, rarity: "rare" },
  { id: "satellite", name: "위성", category: "ring", price: 200, col: 7, row: 4, rarity: "legendary" },
  { id: "classic-deep-bg", name: "클래식 심우주 배경", category: "background", price: 100, col: 0, row: 6, rarity: "common" },
  { id: "purple-galaxy-bg", name: "보라 은하 배경", category: "background", price: 140, col: 1, row: 6, rarity: "epic" },
  { id: "cyan-nebula-bg", name: "시안 성운 배경", category: "background", price: 130, col: 2, row: 6, rarity: "rare" },
  { id: "green-aurora-bg", name: "녹색 오로라 배경", category: "background", price: 140, col: 3, row: 6, rarity: "epic" },
  { id: "red-mars-bg", name: "화성의 밤 배경", category: "background", price: 120, col: 4, row: 6, rarity: "rare" },
  { id: "golden-star-bg", name: "황금 별밭 배경", category: "background", price: 150, col: 5, row: 6, rarity: "epic" },
  { id: "pink-dream-bg", name: "핑크 드림 배경", category: "background", price: 130, col: 6, row: 6, rarity: "rare" },
  { id: "blue-crystal-bg", name: "블루 크리스탈 배경", category: "background", price: 160, col: 7, row: 6, rarity: "legendary" },
  { id: "meteor-shower-bg", name: "유성우 배경", category: "background", price: 170, col: 0, row: 7, rarity: "legendary" },
  { id: "moon-bg", name: "달밤 배경", category: "background", price: 110, col: 1, row: 7, rarity: "rare" },
  { id: "cosmic-vortex-bg", name: "코스믹 소용돌이 배경", category: "background", price: 180, col: 2, row: 7, rarity: "legendary" },
  { id: "distant-planets-bg", name: "먼 행성 배경", category: "background", price: 160, col: 3, row: 7, rarity: "epic" }
];

export const ACCESSORY_BY_ID = Object.fromEntries(
  ACCESSORIES.map((accessory) => [accessory.id, accessory])
) as Record<string, Accessory>;
