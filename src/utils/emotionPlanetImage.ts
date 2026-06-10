import type { EmotionId, Planet } from "../types";

export const getEmotionPlanetImage = (planet: Planet | undefined, emotionId: EmotionId, fallback: string) =>
  planet?.emotionImages?.[emotionId] ?? fallback;
