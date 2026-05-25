import type { Planet } from "../../types";
import { getCurrentStage } from "../../utils/planet";

type PlanetProgressProps = {
  planet: Planet;
  current: number;
};

export function PlanetProgress({ planet, current }: PlanetProgressProps) {
  const stage = getCurrentStage(current);
  const progress = Math.min(100, Math.round((current / planet.recordsNeeded) * 100));

  return (
    <section className="panel planet-progress-panel">
      <div className="panel-row">
        <span className="pixel-label">GROWTH PROGRESS</span>
        <span className="pixel-value" style={{ color: planet.color }}>
          {current} / {planet.recordsNeeded}
        </span>
      </div>
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
            background: `linear-gradient(90deg, ${planet.glowColor}, ${planet.color}, rgba(255,255,255,0.4))`
          }}
        />
      </div>
      <div className="stage-markers">
        {[1, 2, 3].map((item) => (
          <div className="stage-marker" key={item}>
            <span
              className="stage-dot"
              style={{ background: stage >= item ? planet.color : "#2D3580" }}
            />
            <span style={{ color: stage >= item ? planet.color : "#4B5080" }}>
              {item === 1 ? "7일" : item === 2 ? "21일" : "30일"}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
