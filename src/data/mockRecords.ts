import { EMOTIONS } from "./emotions";
import type { EmotionId, EmotionPlanetState, EmotionRecord, EquippedAccessories } from "../types";

export const EMPTY_EQUIPPED: EquippedAccessories = {
  hat: null,
  face: null,
  ring: null,
  background: null
};

const mockComments = [
  "오늘도 수고했어!",
  "좋은 하루였어",
  "피곤하지만 뿌듯해",
  "내일은 더 잘 할 수 있어",
  "소소한 행복",
  "커피 한 잔의 여유",
  "운동하고 기분 좋아",
  "친구들이랑 즐거운 하루",
  "독서로 마음 충전",
  "맛있는 거 먹었다",
  "일이 잘 됐어",
  "조금 지쳐있어...",
  "새로운 도전!",
  "하늘이 예뻤어",
  "별을 봤어"
];

const randomSeed = (value: number) => {
  const seed = Math.sin(value + 1) * 10000;
  return seed - Math.floor(seed);
};

export const formatDateKey = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const generateMockRecords = (): EmotionRecord[] => {
  const emotionIds: EmotionId[] = ["joy", "calm", "excited", "tired", "sad", "angry"];
  const weights = [0.25, 0.2, 0.2, 0.15, 0.12, 0.08];
  const records: EmotionRecord[] = [];
  const startDate = new Date(2026, 1, 9);
  const endDate = new Date(2026, 4, 4);
  let dayOffset = 0;
  let recordIndex = 0;

  while (records.length < 75) {
    const date = new Date(startDate.getTime() + dayOffset * 86400000);
    if (date > endDate) break;

    dayOffset += 1;
    if (randomSeed(dayOffset * 7) < 0.15) continue;

    const roll = randomSeed(recordIndex * 13 + 7);
    let cumulative = 0;
    let emotionIndex = 0;
    for (let i = 0; i < weights.length; i += 1) {
      cumulative += weights[i];
      if (roll < cumulative) {
        emotionIndex = i;
        break;
      }
    }

    const emotionId = emotionIds[emotionIndex];
    const emotion = EMOTIONS.find((item) => item.id === emotionId)!;
    const commentIndex = Math.floor(randomSeed(recordIndex * 17 + 3) * mockComments.length);
    const hasComment = randomSeed(recordIndex * 5) > 0.3;
    records.push({
      id: `mock-${recordIndex}`,
      date: formatDateKey(date),
      emotion: emotionId,
      comment: hasComment ? mockComments[commentIndex] : "",
      points: emotion.points
    });
    recordIndex += 1;
  }

  return records;
};

export const calculateStreak = (records: EmotionRecord[], today = new Date()) => {
  const dates = new Set(records.map((record) => record.date));
  let streak = 0;
  let cursor = new Date(today);

  while (dates.has(formatDateKey(cursor))) {
    streak += 1;
    cursor = new Date(cursor.getTime() - 86400000);
  }

  return streak;
};

export const createInitialState = (): EmotionPlanetState => {
  return {
    points: 0,
    lastAdRewardDate: null,
    currentStreak: 0,
    longestStreak: 0,
    records: [],
    completedPlanets: [],
    currentPlanetIndex: 0,
    currentPlanetRecords: 0,
    ownedAccessories: [],
    equippedAccessories: { ...EMPTY_EQUIPPED }
  };
};
