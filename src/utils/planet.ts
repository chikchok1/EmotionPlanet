import { EMOTION_BY_ID } from "../data/emotions";
import { PLANETS } from "../data/planets";
import type { EmotionId, EmotionRecord } from "../types";

export const getCurrentStage = (recordCount: number) => {
  if (recordCount < 7) return 1;
  if (recordCount < 21) return 2;
  return 3;
};

export const getStageLabel = (stage: number) => {
  if (stage === 1) return "새싹 행성";
  if (stage === 2) return "성장 행성";
  return "완성 행성";
};

export const countEmotions = (records: EmotionRecord[]) =>
  records.reduce<Record<EmotionId, number>>(
    (acc, record) => {
      acc[record.emotion] += 1;
      return acc;
    },
    { joy: 0, calm: 0, excited: 0, tired: 0, sad: 0, angry: 0 }
  );

export const getEmotionSummary = (records: EmotionRecord[]) =>
  Object.entries(countEmotions(records))
    .map(([emotion, count]) => ({
      emotion: EMOTION_BY_ID[emotion as EmotionId],
      count
    }))
    .filter((item) => item.count > 0)
    .sort((a, b) => b.count - a.count);

export const getSafePlanet = (planetIndex: number) => PLANETS[Math.min(planetIndex, PLANETS.length - 1)];

export const formatDisplayDate = (date = new Date()) => {
  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(
    date.getDate()
  ).padStart(2, "0")} (${weekdays[date.getDay()]})`;
};
