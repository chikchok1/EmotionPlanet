import type { Accessory, AccessoryCategory, Rarity } from "../types";

export const ACCESSORY_SPRITE = "/figma-assets/f2b72c5b-d180-4f2d-bd67-a54563d6758c.png";
export const ACCESSORY_GRID = { columns: 8, rows: 8 };

export const CATEGORY_LABELS: Record<AccessoryCategory, string> = {
  hat: "장식",
  face: "스티커",
  ring: "이펙트",
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
  "face",
  "ring",
  "background"
];

export const ACCESSORIES: Accessory[] = [
  { id: "crown", name: "별빛 쿠션", category: "hat", price: 100, col: 0, row: 0, rarity: "rare" },
  { id: "witch-hat", name: "달빛 스탠드", category: "hat", price: 80, col: 1, row: 0, rarity: "common" },
  { id: "astronaut", name: "미니 위성", category: "hat", price: 150, col: 2, row: 0, rarity: "epic" },
  { id: "sprout", name: "우주 화분", category: "hat", price: 60, col: 3, row: 0, rarity: "common" },
  { id: "cat-ears", name: "별자리 풍선", category: "hat", price: 70, col: 4, row: 0, rarity: "common" },
  { id: "star-band", name: "기록 깃발", category: "hat", price: 50, col: 5, row: 0, rarity: "common" },
  { id: "bow-hat", name: "몽글 구름", category: "hat", price: 60, col: 6, row: 0, rarity: "common" },
  { id: "night-cap", name: "수면 달조명", category: "hat", price: 40, col: 7, row: 0, rarity: "common" },
  { id: "space-cap", name: "미니 로켓", category: "hat", price: 80, col: 0, row: 1, rarity: "rare" },
  { id: "sunglasses", name: "반짝 별 스티커", category: "face", price: 70, col: 0, row: 2, rarity: "common" },
  { id: "star-glasses", name: "하트 스티커", category: "face", price: 80, col: 1, row: 2, rarity: "rare" },
  { id: "face-mask", name: "구름 스티커", category: "face", price: 40, col: 3, row: 2, rarity: "common" },
  { id: "crystal-glasses", name: "크리스탈 스티커", category: "face", price: 90, col: 5, row: 2, rarity: "rare" },
  { id: "aqua-nebula-effect", name: "시안 성운 이펙트", category: "ring", price: 100, col: 1, row: 5, rarity: "rare" },
  { id: "gold-star-effect", name: "황금 별빛 이펙트", category: "ring", price: 120, col: 0, row: 5, rarity: "epic" },
  { id: "violet-galaxy-effect", name: "보라 은하 이펙트", category: "ring", price: 150, col: 3, row: 5, rarity: "epic" },
  { id: "aurora-leaf-effect", name: "오로라 잎새 이펙트", category: "ring", price: 130, col: 5, row: 5, rarity: "rare" },
  { id: "meteor-spark-effect", name: "유성 반짝 이펙트", category: "ring", price: 160, col: 2, row: 5, rarity: "legendary" },
  { id: "heart-dream-effect", name: "하트 드림 이펙트", category: "ring", price: 140, col: 7, row: 5, rarity: "epic" },
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

export const LEGACY_ACCESSORY_ID_MAP: Record<string, string> = {
  "plain-ring": "aqua-nebula-effect",
  "glow-ring": "aqua-nebula-effect",
  "heart-ring": "heart-dream-effect",
  "star-ring": "gold-star-effect",
  "rainbow-ring": "violet-galaxy-effect",
  satellite: "meteor-spark-effect"
};

export const ACCESSORY_IMAGE_BY_ID = Object.fromEntries(
  ACCESSORIES
    .filter((accessory) => accessory.category !== "background")
    .map((accessory) => [
      accessory.id,
      accessory.category === "ring"
        ? `/figma-assets/accessory_effects/${accessory.id}.png`
        : `/figma-assets/accessory_items/${accessory.id}.png`
    ])
) as Record<string, string>;
