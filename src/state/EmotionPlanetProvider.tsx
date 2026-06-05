import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";
import { ACCESSORY_BY_ID, LEGACY_ACCESSORY_ID_MAP } from "../data/accessories";
import { EMOTION_BY_ID } from "../data/emotions";
import { EMPTY_EQUIPPED, createInitialState, formatDateKey } from "../data/mockRecords";
import { PLANETS } from "../data/planets";
import { getPlanetRecordRange } from "../utils/planet";
import type {
  AccessoryCategory,
  EmotionId,
  EmotionPlanetState,
  EmotionRecord,
  EquippedAccessories
} from "../types";

const STORAGE_KEY = "emotionPlanet_v3";

type EmotionPlanetContextValue = {
  state: EmotionPlanetState;
  viewingPlanetIndex: number;
  setViewingPlanet: (index: number) => void;
  hasRecordedToday: () => boolean;
  getTodayRecord: () => EmotionRecord | null;
  getDominantEmotion: (records?: EmotionRecord[]) => EmotionId;
  getPlanetRecords: (planetIndex: number) => EmotionRecord[];
  recordEmotion: (emotion: EmotionId, comment: string) => boolean;
  purchaseAccessory: (accessoryId: string) => boolean;
  equipAccessory: (accessoryId: string, category: AccessoryCategory) => void;
  unequipAccessory: (category: AccessoryCategory) => void;
  equipAccessoryForPlanet: (planetIndex: number, accessoryId: string, category: AccessoryCategory) => void;
  unequipAccessoryForPlanet: (planetIndex: number, category: AccessoryCategory) => void;
  getEquippedForPlanet: (planetIndex: number) => EquippedAccessories;
};

const EmotionPlanetContext = createContext<EmotionPlanetContextValue | null>(null);

const normalizeAccessoryId = (id: string | null | undefined) =>
  id ? (LEGACY_ACCESSORY_ID_MAP[id] ?? id) : null;

const normalizeKnownAccessoryId = (id: string | null | undefined) => {
  const normalizedId = normalizeAccessoryId(id);
  return normalizedId && ACCESSORY_BY_ID[normalizedId] ? normalizedId : null;
};

const normalizeEquipped = (value?: Partial<EquippedAccessories> | null): EquippedAccessories => {
  const next = {
    ...EMPTY_EQUIPPED,
    ...(value ?? {})
  };

  return {
    hat: normalizeKnownAccessoryId(next.hat),
    face: normalizeKnownAccessoryId(next.face),
    ring: normalizeKnownAccessoryId(next.ring),
    background: normalizeKnownAccessoryId(next.background)
  };
};

const normalizeOwnedAccessories = (value: unknown, fallback: string[]) => {
  const source = Array.isArray(value) ? value : fallback;
  return Array.from(
    new Set(
      source
        .map((id) => normalizeKnownAccessoryId(typeof id === "string" ? id : null))
        .filter((id): id is string => Boolean(id))
    )
  );
};

const numberOr = (value: unknown, fallback: number) =>
  typeof value === "number" && Number.isFinite(value) ? value : fallback;

const normalizeState = (value: Partial<EmotionPlanetState>): EmotionPlanetState => {
  const fallback = createInitialState();
  const currentPlanetIndex = Math.min(
    Math.max(numberOr(value.currentPlanetIndex, fallback.currentPlanetIndex), 0),
    PLANETS.length - 1
  );
  const currentPlanetRecords = Math.min(
    numberOr(value.currentPlanetRecords, fallback.currentPlanetRecords),
    PLANETS[currentPlanetIndex].recordsNeeded
  );

  return {
    ...fallback,
    ...value,
    points: numberOr(value.points, fallback.points),
    currentStreak: numberOr(value.currentStreak, fallback.currentStreak),
    longestStreak: numberOr(value.longestStreak, fallback.longestStreak),
    currentPlanetIndex,
    currentPlanetRecords,
    records: Array.isArray(value.records) ? value.records : fallback.records,
    completedPlanets: Array.isArray(value.completedPlanets)
      ? value.completedPlanets.map((planet) => {
          const completedPlanetIndex = Math.min(Math.max(planet.planetIndex, 0), PLANETS.length - 1);
          const completedPlanet = PLANETS[completedPlanetIndex];

          return {
            ...planet,
            planetIndex: completedPlanetIndex,
            recordCount: Math.min(numberOr(planet.recordCount, completedPlanet.recordsNeeded), completedPlanet.recordsNeeded),
            equippedAccessories: normalizeEquipped(planet.equippedAccessories)
          };
        })
      : fallback.completedPlanets,
    ownedAccessories: normalizeOwnedAccessories(value.ownedAccessories, fallback.ownedAccessories),
    equippedAccessories: normalizeEquipped(value.equippedAccessories)
  };
};

const loadInitialState = () => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) return normalizeState(JSON.parse(raw) as EmotionPlanetState);
  } catch {
    // Ignore broken local storage and fall back to seeded demo data.
  }

  return createInitialState();
};

export function EmotionPlanetProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<EmotionPlanetState>(loadInitialState);
  const [viewingPlanetIndex, setViewingPlanetIndex] = useState<number>(
    () => loadInitialState().currentPlanetIndex
  );

  // 현재 키우는 행성이 바뀌면 (행성 완성 시) 뷰도 자동으로 따라감
  useEffect(() => {
    setViewingPlanetIndex(state.currentPlanetIndex);
  }, [state.currentPlanetIndex]);

  const setViewingPlanet = useCallback((index: number) => {
    setViewingPlanetIndex(index);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const getPlanetRecords = useCallback(
    (planetIndex: number) => {
      const { start, end } = getPlanetRecordRange(planetIndex);
      const visibleEnd =
        planetIndex === state.currentPlanetIndex
          ? Math.min(end, start + state.currentPlanetRecords)
          : end;

      return state.records.slice(start, visibleEnd);
    },
    [state.currentPlanetIndex, state.currentPlanetRecords, state.records]
  );

  const getDominantEmotion = useCallback((records: EmotionRecord[] = state.records): EmotionId => {
    if (records.length === 0) return "calm";

    const counts = records.reduce<Record<EmotionId, number>>(
      (acc, record) => {
        acc[record.emotion] += 1;
        return acc;
      },
      { joy: 0, calm: 0, excited: 0, tired: 0, sad: 0, angry: 0 }
    );

    return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0] as EmotionId;
  }, [state.records]);

  const getTodayRecord = useCallback(() => {
    const today = formatDateKey(new Date());
    return state.records.find((record) => record.date === today) ?? null;
  }, [state.records]);

  const hasRecordedToday = useCallback(() => getTodayRecord() !== null, [getTodayRecord]);

  const recordEmotion = useCallback(
    (emotionId: EmotionId, comment: string) => {
      if (hasRecordedToday()) return false;

      const emotion = EMOTION_BY_ID[emotionId];
      const today = formatDateKey(new Date());

      setState((previous) => {
        const nextRecord: EmotionRecord = {
          id: `rec-${Date.now()}`,
          date: today,
          emotion: emotionId,
          comment,
          points: emotion.points
        };
        const records = [...previous.records, nextRecord];
        const dateSet = new Set(records.map((record) => record.date));
        let streak = 1;
        let cursor = new Date(new Date(today).getTime() - 86400000);

        while (dateSet.has(formatDateKey(cursor))) {
          streak += 1;
          cursor = new Date(cursor.getTime() - 86400000);
        }

        const planet = PLANETS[previous.currentPlanetIndex];
        const nextPlanetRecords = previous.currentPlanetRecords + 1;
        const isCompleted = nextPlanetRecords >= planet.recordsNeeded;
        const { start, end } = getPlanetRecordRange(previous.currentPlanetIndex);
        const currentPlanetRecords = records.slice(start, end);
        const dominantEmotion = getDominantEmotion(currentPlanetRecords);

        const baseState: EmotionPlanetState = {
          ...previous,
          records,
          points: previous.points + emotion.points,
          currentStreak: streak,
          longestStreak: Math.max(previous.longestStreak, streak),
          currentPlanetRecords: isCompleted ? 0 : nextPlanetRecords
        };

        if (!isCompleted) return baseState;

        return {
          ...baseState,
          completedPlanets: [
            ...previous.completedPlanets,
            {
              planetIndex: previous.currentPlanetIndex,
              completedDate: today,
              recordCount: planet.recordsNeeded,
              dominantEmotion,
              equippedAccessories: { ...previous.equippedAccessories }
            }
          ],
          currentPlanetIndex: Math.min(previous.currentPlanetIndex + 1, PLANETS.length - 1),
          equippedAccessories: { ...EMPTY_EQUIPPED }
        };
      });

      return true;
    },
    [getDominantEmotion, hasRecordedToday]
  );

  const purchaseAccessory = useCallback(
    (accessoryId: string) => {
      const accessory = ACCESSORY_BY_ID[accessoryId];
      if (!accessory || state.ownedAccessories.includes(accessoryId) || state.points < accessory.price) {
        return false;
      }

      setState((previous) => ({
        ...previous,
        points: previous.points - accessory.price,
        ownedAccessories: [...previous.ownedAccessories, accessoryId]
      }));
      return true;
    },
    [state.ownedAccessories, state.points]
  );

  const equipAccessory = useCallback((accessoryId: string, category: AccessoryCategory) => {
    setState((previous) => ({
      ...previous,
      equippedAccessories: {
        ...previous.equippedAccessories,
        [category]: accessoryId
      }
    }));
  }, []);

  const unequipAccessory = useCallback((category: AccessoryCategory) => {
    setState((previous) => ({
      ...previous,
      equippedAccessories: {
        ...previous.equippedAccessories,
        [category]: null
      }
    }));
  }, []);

  // 완성된 이전 행성의 꾸미기 요소 수정
  const equipAccessoryForPlanet = useCallback((planetIndex: number, accessoryId: string, category: AccessoryCategory) => {
    setState((previous) => ({
      ...previous,
      completedPlanets: previous.completedPlanets.map((p) =>
        p.planetIndex === planetIndex
          ? { ...p, equippedAccessories: { ...p.equippedAccessories, [category]: accessoryId } }
          : p
      )
    }));
  }, []);

  const unequipAccessoryForPlanet = useCallback((planetIndex: number, category: AccessoryCategory) => {
    setState((previous) => ({
      ...previous,
      completedPlanets: previous.completedPlanets.map((p) =>
        p.planetIndex === planetIndex
          ? { ...p, equippedAccessories: { ...p.equippedAccessories, [category]: null } }
          : p
      )
    }));
  }, []);

  const getEquippedForPlanet = useCallback((planetIndex: number): EquippedAccessories => {
    if (planetIndex === state.currentPlanetIndex) return state.equippedAccessories;
    const completed = state.completedPlanets.find((p) => p.planetIndex === planetIndex);
    return completed?.equippedAccessories ?? EMPTY_EQUIPPED;
  }, [state.currentPlanetIndex, state.equippedAccessories, state.completedPlanets]);

  const value = useMemo(
    () => ({
      state,
      viewingPlanetIndex,
      setViewingPlanet,
      hasRecordedToday,
      getTodayRecord,
      getDominantEmotion,
      getPlanetRecords,
      recordEmotion,
      purchaseAccessory,
      equipAccessory,
      unequipAccessory,
      equipAccessoryForPlanet,
      unequipAccessoryForPlanet,
      getEquippedForPlanet
    }),
    [
      state,
      viewingPlanetIndex,
      setViewingPlanet,
      hasRecordedToday,
      getTodayRecord,
      getDominantEmotion,
      getPlanetRecords,
      recordEmotion,
      purchaseAccessory,
      equipAccessory,
      unequipAccessory,
      equipAccessoryForPlanet,
      unequipAccessoryForPlanet,
      getEquippedForPlanet
    ]
  );

  return <EmotionPlanetContext.Provider value={value}>{children}</EmotionPlanetContext.Provider>;
}

export const useEmotionPlanet = () => {
  const context = useContext(EmotionPlanetContext);
  if (!context) {
    throw new Error("useEmotionPlanet must be used inside EmotionPlanetProvider");
  }
  return context;
};
