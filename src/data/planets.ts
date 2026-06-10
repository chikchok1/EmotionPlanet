import type { Planet } from "../types";

const asset = (filename: string) => `/figma-assets/${filename}`;
const planetImage = (filename: string) => asset(`planet_image/${filename}`);
const emotionPlanet = (planetId: Planet["id"], emotionId: keyof NonNullable<Planet["emotionImages"]>) =>
  asset(`emotion_planets/${planetId}_${emotionId}.png`);
const emotionPlanets = (planetId: Planet["id"]): NonNullable<Planet["emotionImages"]> => ({
  joy: emotionPlanet(planetId, "joy"),
  calm: emotionPlanet(planetId, "calm"),
  excited: emotionPlanet(planetId, "excited"),
  tired: emotionPlanet(planetId, "tired"),
  sad: emotionPlanet(planetId, "sad"),
  angry: emotionPlanet(planetId, "angry")
});

export const PLANETS: Planet[] = [
  {
    id: "mercury",
    name: "수성",
    color: "#B0B8C8",
    glowColor: "#8890A0",
    auraColor: "#2A2C3A",
    recordsNeeded: 7,
    description: "태양에 가장 가까운 작은 행성",
    baseImage: asset("mercury_base.png"),
    effectImage: asset("mercury_effect_glow.png"),
    planetImage: planetImage("mercury.png"),
    emotionImages: emotionPlanets("mercury")
  },
  {
    id: "venus",
    name: "금성",
    color: "#F5C842",
    glowColor: "#D9A820",
    auraColor: "#2A2010",
    recordsNeeded: 14,
    description: "황금빛으로 빛나는 아름다운 행성",
    baseImage: asset("venus_base.png"),
    effectImage: asset("venus_effect_glow.png"),
    planetImage: planetImage("venus.png"),
    emotionImages: emotionPlanets("venus")
  },
  {
    id: "earth",
    name: "지구",
    color: "#4AAFFF",
    glowColor: "#1E7FD8",
    auraColor: "#08152A",
    recordsNeeded: 21,
    description: "생명이 가득한 파란 행성",
    baseImage: asset("earth_base.png"),
    effectImage: asset("earth_effect_sparkles.png"),
    planetImage: planetImage("earth.png"),
    emotionImages: emotionPlanets("earth")
  },
  {
    id: "mars",
    name: "화성",
    color: "#FF6B50",
    glowColor: "#D04030",
    auraColor: "#1E0800",
    recordsNeeded: 30,
    description: "붉은 대지의 신비로운 행성",
    baseImage: asset("mars_base.png"),
    effectImage: asset("mars_effect_glow.png"),
    planetImage: planetImage("Mars.png"),
    emotionImages: emotionPlanets("mars")
  },
  {
    id: "jupiter",
    name: "목성",
    color: "#E8A060",
    glowColor: "#C07830",
    auraColor: "#1E1000",
    recordsNeeded: 35,
    description: "태양계에서 가장 거대한 행성",
    baseImage: asset("jupiter_base.png"),
    effectImage: asset("jupiter_effect_glow.png"),
    planetImage: planetImage("Jupiter.png"),
    emotionImages: emotionPlanets("jupiter")
  },
  {
    id: "saturn",
    name: "토성",
    color: "#F5C842",
    glowColor: "#D9A820",
    auraColor: "#1A1000",
    recordsNeeded: 40,
    description: "아름다운 고리를 가진 행성",
    baseImage: asset("saturn_base.png"),
    effectImage: asset("saturn_effect_glow.png"),
    planetImage: planetImage("Saturn.png"),
    emotionImages: emotionPlanets("saturn")
  },
  {
    id: "uranus",
    name: "천왕성",
    color: "#50E0E0",
    glowColor: "#10A8A8",
    auraColor: "#001A1A",
    recordsNeeded: 45,
    description: "신비로운 청록빛 행성",
    baseImage: asset("uranus_base.png"),
    effectImage: asset("uranus_effect_glow.png"),
    planetImage: planetImage("Uranus.png"),
    emotionImages: emotionPlanets("uranus")
  },
  {
    id: "neptune",
    name: "해왕성",
    color: "#4060FF",
    glowColor: "#1030D0",
    auraColor: "#000820",
    recordsNeeded: 50,
    description: "가장 멀리 있는 깊은 파란 행성",
    baseImage: asset("neptune_base.png"),
    effectImage: asset("neptune_effect_glow.png"),
    planetImage: planetImage("neptune.png"),
    emotionImages: emotionPlanets("neptune")
  },
  {
    id: "pluto",
    name: "명왕성",
    color: "#D8C4B0",
    glowColor: "#9A7B68",
    auraColor: "#181018",
    recordsNeeded: 60,
    description: "작지만 차분하게 빛나는 외곽 행성",
    baseImage: asset("pluto_base.png"),
    effectImage: asset("pluto_effect_glow.png"),
    planetImage: planetImage("Pluto.png"),
    emotionImages: emotionPlanets("pluto")
  }
];
