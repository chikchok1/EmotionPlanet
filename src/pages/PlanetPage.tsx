import { ACCESSORY_BY_ID, ACCESSORY_CATEGORIES, CATEGORY_LABELS } from "../data/accessories";
import { EMOTIONS, EMOTION_BY_ID } from "../data/emotions";
import { PLANETS } from "../data/planets";
import { AccessorySprite } from "../components/planet/AccessorySprite";
import { PlanetAvatar } from "../components/planet/PlanetAvatar";
import { PlanetProgress } from "../components/planet/PlanetProgress";
import { useEmotionPlanet } from "../state/EmotionPlanetProvider";
import type { AccessoryCategory, RoutePath } from "../types";
import { getCurrentStage, getEmotionSummary, getStageLabel } from "../utils/planet";

type PlanetPageProps = {
  navigate: (path: RoutePath) => void;
};

export function PlanetPage({ navigate }: PlanetPageProps) {
  const { state, getDominantEmotion, getPlanetRecords } = useEmotionPlanet();
  const planet = PLANETS[state.currentPlanetIndex];
  const planetRecords = getPlanetRecords(state.currentPlanetIndex);
  const dominantEmotion = getDominantEmotion(planetRecords);
  const dominant = EMOTION_BY_ID[dominantEmotion];
  const stage = getCurrentStage(state.currentPlanetRecords);
  const emotionSummary = getEmotionSummary(planetRecords);

  return (
    <div className="screen-stack planet-screen">
      <header className="top-bar">
        <div>
          <h1 className="screen-title" style={{ color: planet.color }}>
            {planet.name}
          </h1>
          <p className="screen-subtitle">
            STAGE {stage} — {getStageLabel(stage)}
          </p>
        </div>
        <div className="point-pill">
          <span>★</span>
          <strong>{state.points.toLocaleString()}</strong>
        </div>
      </header>

      <section className="planet-showcase">
        <PlanetAvatar
          planet={planet}
          emotion={dominantEmotion}
          equipped={state.equippedAccessories}
          size={210}
          animate
        />
      </section>

      <PlanetProgress planet={planet} current={state.currentPlanetRecords} />

      <section className="panel">
        <div className="section-heading">
          <h2>이번 행성 감정</h2>
          <p>{planetRecords.length}개 기록 중</p>
        </div>
        <div className="dominant-emotion">
          <span>{dominant.emoji}</span>
          <div>
            <strong style={{ color: dominant.color }}>대표 감정: {dominant.name}</strong>
            <p>{dominant.description}</p>
          </div>
        </div>
        <div className="emotion-chip-row">
          {emotionSummary.map(({ emotion, count }) => (
            <span
              className="emotion-chip"
              key={emotion.id}
              style={{ background: emotion.bgColor, borderColor: emotion.borderColor, color: emotion.color }}
            >
              {emotion.emoji} {count}
            </span>
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="panel-row panel-row-spaced">
          <span className="pixel-label">장착 아이템</span>
          <button className="mini-button" type="button" onClick={() => navigate("/customize")}>
            꾸미기
          </button>
        </div>
        <div className="slot-row">
          {ACCESSORY_CATEGORIES.map((category) => (
            <AccessorySlot
              key={category}
              category={category}
              accessoryId={state.equippedAccessories[category]}
              onClick={() => navigate("/customize")}
            />
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="section-heading">
          <h2>최근 기록</h2>
          <p>최근 7개 감정 기록</p>
        </div>
        <div className="record-list">
          {[...state.records].reverse().slice(0, 7).map((record) => {
            const emotion = EMOTION_BY_ID[record.emotion];
            return (
              <div
                className="record-item"
                key={record.id}
                style={{ background: emotion.bgColor, borderColor: `${emotion.borderColor}55` }}
              >
                <span>{emotion.emoji}</span>
                <div>
                  <strong style={{ color: emotion.color }}>{emotion.name}</strong>
                  {record.comment ? <p>{record.comment}</p> : null}
                </div>
                <time>{record.date.slice(5)}</time>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function AccessorySlot({
  category,
  accessoryId,
  onClick
}: {
  category: AccessoryCategory;
  accessoryId: string | null;
  onClick: () => void;
}) {
  const accessory = accessoryId ? ACCESSORY_BY_ID[accessoryId] : null;

  return (
    <button className="accessory-slot" type="button" onClick={onClick}>
      <div className={`accessory-slot-icon${accessory ? " filled" : ""}`}>
        {accessory ? <AccessorySprite id={accessory.id} size={40} /> : <span>+</span>}
      </div>
      <span>{CATEGORY_LABELS[category]}</span>
    </button>
  );
}
