import { useState } from "react";
import { PLANETS } from "../data/planets";
import { PlanetAvatar } from "../components/planet/PlanetAvatar";
import { PlanetCard } from "../components/planet/PlanetCard";
import { useEmotionPlanet } from "../state/EmotionPlanetProvider";
import type { EmotionId, EquippedAccessories, Planet, RoutePath } from "../types";

const emptyEquipped: EquippedAccessories = {
  hat: null,
  face: null,
  ring: null,
  background: null
};

type UniversePageProps = {
  navigate: (path: RoutePath) => void;
};

type ModalInfo = {
  planet: Planet;
  planetIndex: number;
  isCompleted: boolean;
  isCurrent: boolean;
  isLocked: boolean;
  recordCount: number;
  emotion: EmotionId;
  equipped: EquippedAccessories;
};

export function UniversePage({ navigate }: UniversePageProps) {
  const { state, getDominantEmotion, getPlanetRecords, setViewingPlanet } = useEmotionPlanet();
  const [modalInfo, setModalInfo] = useState<ModalInfo | null>(null);

  const handlePlanetClick = (planet: Planet, index: number) => {
    const completed = state.completedPlanets.find((item) => item.planetIndex === index);
    const isCurrent = index === state.currentPlanetIndex;
    const isLocked = index > state.currentPlanetIndex;
    const records = completed?.recordCount ?? (isCurrent ? state.currentPlanetRecords : 0);
    const planetRecords = getPlanetRecords(index);
    const emotion = completed?.dominantEmotion ?? (planetRecords.length ? getDominantEmotion(planetRecords) : "calm");
    const equipped = completed?.equippedAccessories ?? (isCurrent ? state.equippedAccessories : emptyEquipped);

    setModalInfo({ planet, planetIndex: index, isCompleted: Boolean(completed), isCurrent, isLocked, recordCount: records, emotion, equipped });
  };

  const handleSelectPlanet = (index: number) => {
    setViewingPlanet(index);
    setModalInfo(null);
    navigate("/planet");
  };

  return (
    <div className="screen-stack universe-screen">
      <header className="section-heading">
        <h1 className="screen-title">나의 우주 🌌</h1>
        <p>
          {state.completedPlanets.length}개 행성 완성 · {state.currentStreak}일 연속 기록
        </p>
      </header>

      <section className="stats-grid">
        <StatCard label="완성" value={state.completedPlanets.length} />
        <StatCard label="총 기록" value={state.records.length} />
        <StatCard label="최장 스트릭" value={state.longestStreak} />
      </section>

      <section className="panel">
        <div className="section-heading">
          <h2>태양계 컬렉션</h2>
          <p>행성을 눌러 상세 정보를 볼 수 있어요</p>
        </div>
        <div className="planet-grid">
          {PLANETS.map((planet, index) => {
            const completed = state.completedPlanets.find((item) => item.planetIndex === index);
            const isCurrent = index === state.currentPlanetIndex;
            const isLocked = index > state.currentPlanetIndex;
            const records = completed?.recordCount ?? (isCurrent ? state.currentPlanetRecords : 0);
            const planetRecords = getPlanetRecords(index);
            const emotion = completed?.dominantEmotion ?? (planetRecords.length ? getDominantEmotion(planetRecords) : "calm");
            const equipped = completed?.equippedAccessories ?? (isCurrent ? state.equippedAccessories : emptyEquipped);

            return (
              <PlanetCard
                key={planet.id}
                planet={planet}
                recordCount={records}
                isCompleted={Boolean(completed)}
                isCurrent={isCurrent}
                isLocked={isLocked}
                emotion={emotion}
                equipped={equipped}
                onClick={() => handlePlanetClick(planet, index)}
              />
            );
          })}
        </div>
      </section>

      {modalInfo ? (
        <div className="modal-backdrop" onClick={() => setModalInfo(null)}>
          <section className="planet-modal" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => setModalInfo(null)}>
              ×
            </button>
            <PlanetAvatar
              planet={modalInfo.planet}
              emotion={modalInfo.emotion}
              equipped={modalInfo.isLocked ? emptyEquipped : modalInfo.equipped}
              size={180}
              muted={modalInfo.isLocked}
            />
            <h2 style={{ color: modalInfo.planet.color }}>{modalInfo.planet.name}</h2>
            <p>{modalInfo.planet.description}</p>

            {!modalInfo.isLocked && (
              <p style={{ fontSize: "0.85rem", opacity: 0.7, marginTop: "0.25rem" }}>
                {modalInfo.recordCount} / {modalInfo.planet.recordsNeeded}일 기록
                {modalInfo.isCompleted && " ✔️ 완성"}
              </p>
            )}

            {!modalInfo.isLocked && (
              <button
                className="done-cta"
                type="button"
                style={{ marginTop: "1rem", width: "100%" }}
                onClick={() => handleSelectPlanet(modalInfo.planetIndex)}
              >
                {modalInfo.isCurrent ? "🌍 현재 행성 보러가기" : "🔍 이 행성 선택하기"}
              </button>
            )}

            {modalInfo.isLocked && (
              <p style={{ marginTop: "1rem", opacity: 0.5, fontSize: "0.85rem" }}>
                앞 행성을 완성해야 해제됩니다
              </p>
            )}
          </section>
        </div>
      ) : null}
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="stat-card">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}
