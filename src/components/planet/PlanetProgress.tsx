import type { Planet } from "../../types";
import { getCurrentStage } from "../../utils/planet";

type PlanetProgressProps = {
  planet: Planet;
  current: number;
};

const MILESTONES = [
  { day: 7,  label: "새싹",   icon: "🌱" },
  { day: 21, label: "성장",   icon: "🌿" },
  { day: 30, label: "완성",   icon: "🌟" },
];

export function PlanetProgress({ planet, current }: PlanetProgressProps) {
  const stage = getCurrentStage(current);
  const progress = Math.min(100, Math.round((current / planet.recordsNeeded) * 100));

  return (
    <section className="panel planet-progress-panel">
      {/* 헤더 */}
      <div className="pp-header">
        <span className="pixel-label">GROWTH PROGRESS</span>
        <span className="pixel-value" style={{ color: planet.color }}>
          {current} <span style={{ color: "var(--t3)" }}>/ {planet.recordsNeeded}일</span>
        </span>
      </div>

      {/* 프로그레스 바 + 마일스톤 틱 */}
      <div className="pp-track-wrap">
        <div className="progress-track">
          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
              background: `linear-gradient(90deg, ${planet.glowColor}, ${planet.color}, rgba(255,255,255,0.35))`,
            }}
          />
        </div>
        {MILESTONES.map(({ day }) => (
          <div
            key={day}
            className={`pp-tick ${current >= day ? "pp-tick-reached" : ""}`}
            style={{
              left: `${Math.round((day / planet.recordsNeeded) * 100)}%`,
              background: current >= day ? planet.color : "rgba(255,255,255,0.15)",
            }}
          />
        ))}
      </div>

      {/* 마일스톤 뱃지 행 */}
      <div className="pp-milestones">
        {MILESTONES.map(({ day, label, icon }) => {
          const reached = current >= day;
          return (
            <div
              key={day}
              className={`pp-milestone ${reached ? "pp-milestone-reached" : ""}`}
              style={
                reached
                  ? {
                      borderColor: `${planet.color}55`,
                      background: `${planet.glowColor}22`,
                      color: planet.color,
                    }
                  : undefined
              }
            >
              <span className="pp-milestone-icon">{reached ? icon : "○"}</span>
              <span className="pp-milestone-day">{day}일</span>
              <span className="pp-milestone-label">{label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
