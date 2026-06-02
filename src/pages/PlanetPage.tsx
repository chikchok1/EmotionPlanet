import { ACCESSORY_BY_ID, ACCESSORY_CATEGORIES, CATEGORY_LABELS } from "../data/accessories";
import { EMOTION_BY_ID } from "../data/emotions";
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
  const { state, getDominantEmotion, getPlanetRecords, viewingPlanetIndex, setViewingPlanet } = useEmotionPlanet();
  const planet = PLANETS[viewingPlanetIndex];
  const isViewingCurrent = viewingPlanetIndex === state.currentPlanetIndex;
  const completedPlanet = state.completedPlanets.find((p) => p.planetIndex === viewingPlanetIndex);
  const planetRecords = getPlanetRecords(viewingPlanetIndex);
  const dominantEmotion = getDominantEmotion(planetRecords);
  const dominant = EMOTION_BY_ID[dominantEmotion];
  const stage = getCurrentStage(isViewingCurrent ? state.currentPlanetRecords : planet.recordsNeeded);
  const emotionSummary = getEmotionSummary(planetRecords);
  const equippedToShow = isViewingCurrent ? state.equippedAccessories : (completedPlanet?.equippedAccessories ?? state.equippedAccessories);
  const recordCountToShow = isViewingCurrent ? state.currentPlanetRecords : (completedPlanet?.recordCount ?? 0);

  return (
    <div className="screen-stack planet-screen">
      {/* ── 이전 행성 보는 중일 때 배너 ── */}
      {!isViewingCurrent && (
        <div
          style={{
            background: "rgba(124,92,252,0.15)",
            border: "1px solid rgba(124,92,252,0.4)",
            borderRadius: "0.75rem",
            padding: "0.6rem 1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.5rem",
            fontSize: "0.85rem",
            marginBottom: "0.5rem",
          }}
        >
          <span style={{ opacity: 0.85 }}>🔍 {planet.name} 행성 보는 중</span>
          <button
            type="button"
            className="mini-button"
            onClick={() => {
              setViewingPlanet(state.currentPlanetIndex);
            }}
          >
            현재 행성으로
          </button>
        </div>
      )}
      {/* ── 상단 바 ── */}
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
          <span>⭐</span>
          {state.points.toLocaleString()}pt
        </div>
      </header>

      {/* ── 행성 쇼케이스 ── */}
      <section className="planet-showcase-hero">
        <div
          className="planet-showcase-glow"
          style={{
            background: `radial-gradient(ellipse at 50% 60%, ${planet.glowColor}55 0%, transparent 68%)`,
          }}
        />
        <PlanetAvatar
          planet={planet}
          emotion={dominantEmotion}
          equipped={equippedToShow}
          size={210}
          animate
        />
      </section>

      {/* ── 성장 진행도 ── */}
      <PlanetProgress planet={planet} current={recordCountToShow} />

      {/* ── 대표 감정 ── */}
      <section className="panel">
        <div className="section-heading">
          <h2>이번 행성 감정</h2>
          <p>{planetRecords.length}개 기록 중</p>
        </div>

        <div className="dominant-emotion-card" style={{ borderColor: `${dominant.color}44`, background: dominant.bgColor }}>
          {/* 이모지 대신 행성 이미지 */}
          <div className="dominant-emotion-planet-thumb">
            <img
              src={dominant.planetImage}
              alt={dominant.name}
              className="dominant-emotion-planet-img"
              onError={(e) => {
                const t = e.currentTarget as HTMLImageElement;
                t.style.display = "none";
                const fb = t.nextElementSibling as HTMLElement;
                if (fb) fb.style.display = "flex";
              }}
            />
            <span className="dominant-emotion-planet-fallback" style={{ display: "none" }}>
              {dominant.emoji}
            </span>
          </div>
          <div className="dominant-emotion-info">
            <strong style={{ color: dominant.color }}>대표 감정: {dominant.name}</strong>
            <p>{dominant.description}</p>
          </div>
        </div>

        {/* 감정 칩도 행성 이미지 썸네일로 */}
        <div className="emotion-chip-row">
          {emotionSummary.map(({ emotion, count }) => (
            <div
              className="emotion-planet-chip"
              key={emotion.id}
              style={{
                background: emotion.bgColor,
                borderColor: emotion.borderColor,
                color: emotion.color,
              }}
            >
              <img
                src={emotion.planetImage}
                alt={emotion.name}
                className="emotion-planet-chip-img"
                onError={(e) => {
                  const t = e.currentTarget as HTMLImageElement;
                  t.style.display = "none";
                  const fb = t.nextElementSibling as HTMLElement;
                  if (fb) fb.style.display = "inline";
                }}
              />
              <span className="emotion-planet-chip-fallback" style={{ display: "none" }}>{emotion.emoji}</span>
              <span className="emotion-planet-chip-count">{count}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 장착 아이템 ── */}
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
              accessoryId={equippedToShow[category]}
              onClick={() => navigate("/customize")}
            />
          ))}
        </div>
      </section>

      {/* ── 최근 기록 ── */}
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
                style={{ "--record-accent": emotion.color } as React.CSSProperties}
              >
                {/* 이모지 대신 행성 이미지 썸네일 */}
                <div className="record-planet-thumb">
                  <img
                    src={emotion.planetImage}
                    alt={emotion.name}
                    className="record-planet-img"
                    onError={(e) => {
                      const t = e.currentTarget as HTMLImageElement;
                      t.style.display = "none";
                      const fb = t.nextElementSibling as HTMLElement;
                      if (fb) fb.style.display = "flex";
                    }}
                  />
                  <span className="record-planet-fallback" style={{ display: "none" }}>
                    {emotion.emoji}
                  </span>
                </div>
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
  onClick,
}: {
  category: AccessoryCategory;
  accessoryId: string | null;
  onClick: () => void;
}) {
  const accessory = accessoryId ? ACCESSORY_BY_ID[accessoryId] : null;

  return (
    <button
      className="accessory-slot"
      type="button"
      onClick={onClick}
    >
      <div className={`accessory-slot-icon${accessory ? " filled" : ""}`}>
        {accessory ? <AccessorySprite id={accessory.id} size={40} /> : <span>+</span>}
      </div>
      <span>{CATEGORY_LABELS[category]}</span>
    </button>
  );
}
