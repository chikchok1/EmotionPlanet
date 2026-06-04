import { ACCESSORY_CATEGORIES } from "../data/accessories";
import type { AccessoryCategory } from "../types";

const ACCESSORY_CATEGORY_KEY = "emotionPlanet_accessoryCategory";

export const rememberAccessoryCategory = (category: AccessoryCategory) => {
  window.sessionStorage.setItem(ACCESSORY_CATEGORY_KEY, category);
};

export const getRememberedAccessoryCategory = (): AccessoryCategory => {
  const stored = window.sessionStorage.getItem(ACCESSORY_CATEGORY_KEY);
  return ACCESSORY_CATEGORIES.includes(stored as AccessoryCategory) ? (stored as AccessoryCategory) : "hat";
};
