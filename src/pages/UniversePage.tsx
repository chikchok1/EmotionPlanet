import { useState } from "react";
import { PLANETS } from "../data/planets";
import { PlanetAvatar } from "../components/planet/PlanetAvatar";
import { PlanetCard } from "../components/planet/PlanetCard";
import { useEmotionPlanet } from "../state/EmotionPlanetProvider";
import type { EquippedAccessories, Planet } from "../types";

const emptyEquipped: EquippedAccessories = {
  hat: null,
  shoes: null,
  face: null,
  ring: null,
  background: null
};

export function UniversePage() {
  const { state, getDominantEmotion, getPlanetRecords } = useEmotionPlanet();
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);

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
                onClick={() => setSelectedPlanet(planet)}
              />
            );
          })}
        </div>
      </section>

      {selectedPlanet ? (
        <div className="modal-backdrop" onClick={() => setSelectedPlanet(null)}>
          <section className="planet-modal" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => setSelectedPlanet(null)}>
              ×
            </button>
            <PlanetAvatar planet={selectedPlanet} emotion="calm" size={180} />
            <h2 style={{ color: selectedPlanet.color }}>{selectedPlanet.name}</h2>
            <p>{selectedPlanet.description}</p>
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
