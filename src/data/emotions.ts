import type { Emotion, EmotionId } from "../types";

const face = (filename: string) => `/figma-assets/planet_face_expression_layers_clean/${filename}`;

export const EMOTIONS: Emotion[] = [
  {
    id: "joy",
    name: "기쁨",
    emoji: "😊",
    color: "#F5C842",
    bgColor: "#1A1200",
    borderColor: "#F5C842",
    points: 30,
    description: "행복하고 즐거운 하루!",
    faceImage: face("01_happy_smile.png")
  },
  {
    id: "calm",
    name: "평온",
    emoji: "😌",
    color: "#34D399",
    bgColor: "#001A0D",
    borderColor: "#10B981",
    points: 20,
    description: "차분하고 평화로운 하루",
    faceImage: face("03_calm_closed_eye_smile.png")
  },
  {
    id: "excited",
    name: "설렘",
    emoji: "🤩",
    color: "#B080FF",
    bgColor: "#0D0020",
    borderColor: "#9060E0",
    points: 30,
    description: "두근두근 설레는 하루!",
    faceImage: face("02_big_excited_smile.png")
  },
  {
    id: "tired",
    name: "피곤",
    emoji: "😴",
    color: "#9CA3AF",
    bgColor: "#111318",
    borderColor: "#6B7280",
    points: 15,
    description: "힘들지만 수고했어요",
    faceImage: face("09_tired.png")
  },
  {
    id: "sad",
    name: "슬픔",
    emoji: "😢",
    color: "#60A5FA",
    bgColor: "#00061A",
    borderColor: "#3B82F6",
    points: 15,
    description: "괜찮아요, 내일은 더 나을 거예요",
    faceImage: face("05_sad_crying.png")
  },
  {
    id: "angry",
    name: "화남",
    emoji: "😠",
    color: "#FF6B6B",
    bgColor: "#1A0000",
    borderColor: "#EF4444",
    points: 20,
    description: "화가 났군요, 잠깐 쉬어가요",
    faceImage: face("06_angry.png")
  }
];

export const EMOTION_BY_ID = Object.fromEntries(
  EMOTIONS.map((emotion) => [emotion.id, emotion])
) as Record<EmotionId, Emotion>;
