export type PlanetId =
  | "mercury"
  | "venus"
  | "earth"
  | "mars"
  | "jupiter"
  | "saturn"
  | "uranus"
  | "neptune"
  | "pluto";

export type EmotionId = "joy" | "calm" | "excited" | "tired" | "sad" | "angry";

export type AccessoryCategory = "hat" | "shoes" | "face" | "ring" | "background";

export type Rarity = "common" | "rare" | "epic" | "legendary";

export type EquippedAccessories = Record<AccessoryCategory, string | null>;

export type Planet = {
  id: PlanetId;
  name: string;
  color: string;
  glowColor: string;
  auraColor: string;
  recordsNeeded: number;
  description: string;
  baseImage: string;
  planetImage: string;
  effectImage?: string;
};

export type Emotion = {
  id: EmotionId;
  name: string;
  emoji: string;
  color: string;
  bgColor: string;
  borderColor: string;
  points: number;
  description: string;
  faceImage: string;
  planetImage: string;
};

export type Accessory = {
  id: string;
  name: string;
  category: AccessoryCategory;
  price: number;
  col: number;
  row: number;
  rarity: Rarity;
};

export type EmotionRecord = {
  id: string;
  date: string;
  emotion: EmotionId;
  comment: string;
  points: number;
};

export type CompletedPlanet = {
  planetIndex: number;
  completedDate: string;
  recordCount: number;
  dominantEmotion: EmotionId;
  equippedAccessories: EquippedAccessories;
};

export type EmotionPlanetState = {
  points: number;
  currentStreak: number;
  longestStreak: number;
  records: EmotionRecord[];
  completedPlanets: CompletedPlanet[];
  currentPlanetIndex: number;
  currentPlanetRecords: number;
  ownedAccessories: string[];
  equippedAccessories: EquippedAccessories;
};

export type RoutePath = "/" | "/planet" | "/universe" | "/history" | "/shop" | "/customize";
