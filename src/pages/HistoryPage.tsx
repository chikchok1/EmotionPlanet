import { useState } from "react";
import { EMOTION_BY_ID } from "../data/emotions";
import { PLANETS } from "../data/planets";
import { useEmotionPlanet } from "../state/EmotionPlanetProvider";
import { getEmotionSummary } from "../utils/planet";
import type { EmotionRecord } from "../types";

export function HistoryPage() {
  const { state, getPlanetRecords } = useEmotionPlanet();
  const totalPoints = state.records.reduce((sum, r) => sum + r.points, 0);

  // 기록이 1개 이상 있는 행성만, 가장 최근 기록 날짜 기준 내림차순 정렬
  const activePlanets = PLANETS
    .map((planet, index) => {
      const records = getPlanetRecords(index);
      return { planet, index, records };
    })
    .filter(({ index, records }) =>
      records.length > 0 && index <= state.currentPlanetIndex
    )
    .sort((a, b) => {
      const latestA = a.records[a.records.length - 1]?.date ?? "";
      const latestB = b.records[b.records.length - 1]?.date ?? "";
      return latestB.localeCompare(latestA);
    });

  return (
    <div className="screen-stack history-screen">
      <header className="section-heading">
        <h1 className="screen-title">감정 기록</h1>
        <p>나의 감정 흐름과 성장 기록</p>
      </header>

      <section className="stats-grid">
        <StatCard label="총 기록" value={state.records.length} />
        <StatCard label="포인트" value={totalPoints} />
        <StatCard label="연속 기록" value={state.currentStreak} />
      </section>

      <div className="pixel-label" style={{ marginTop: 6 }}>행성별 기록</div>

      {activePlanets.length === 0 && (
        <div className="empty-state">
          <span>🪐</span>
          <p>아직 기록이 없어요. 첫 감정을 기록해보세요!</p>
        </div>
      )}

      {activePlanets.map(({ planet, index, records }) => (
        <PlanetRecordCard
          key={planet.id}
          planet={planet}
          planetIndex={index}
          records={records}
          isCurrentPlanet={index === state.currentPlanetIndex}
        />
      ))}
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="stat-card">
      <strong>{value.toLocaleString()}</strong>
      <span>{label}</span>
    </div>
  );
}

function PlanetRecordCard({
  planet,
  planetIndex,
  records,
  isCurrentPlanet
}: {
  planet: (typeof PLANETS)[number];
  planetIndex: number;
  records: EmotionRecord[];
  isCurrentPlanet: boolean;
}) {
  const [open, setOpen] = useState(planetIndex === 0);
  const emotionSummary = getEmotionSummary(records);
  const latestDate = records[records.length - 1]?.date.slice(5) ?? "";
  const progress = Math.min(records.length / planet.recordsNeeded, 1);
  const isCompleted = !isCurrentPlanet;

  return (
    <div className="planet-record-card">
      {/* 헤더 */}
      <button
        className="planet-record-header"
        type="button"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div
          className="planet-record-orb"
          style={{ background: `${planet.color}18`, borderColor: `${planet.color}33` }}
        >
          <img
            src={planet.planetImage}
            alt={planet.name}
            className="planet-record-orb-img"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
        <div className="planet-record-info">
          <span className="planet-record-name">{planet.name}</span>
          <span className="planet-record-meta">
            {isCompleted ? "완성 " : ""}{records.length}회 기록 · {latestDate}
          </span>
        </div>
        <div className="planet-record-right">
          <span
            className="planet-record-badge"
            style={{
              color: planet.color,
              borderColor: `${planet.color}44`,
              background: `${planet.color}12`
            }}
          >
            {isCompleted ? "완성" : `${records.length} / ${planet.recordsNeeded}`}
          </span>
          <span className={`planet-record-chevron${open ? " open" : ""}`}>▾</span>
        </div>
      </button>

      {/* 프로그레스 바 */}
      <div className="planet-record-progress-track">
        <div
          className="planet-record-progress-fill"
          style={{ width: `${progress * 100}%`, background: planet.color }}
        />
      </div>

      {/* 감정 요약 칩 */}
      <div className="planet-record-emotion-chips">
        {emotionSummary.map(({ emotion, count }) => (
          <span
            key={emotion.id}
            className="planet-record-chip"
            style={{
              color: emotion.color,
              borderColor: `${emotion.color}44`,
              background: `${emotion.color}12`
            }}
          >
            {emotion.name} {count}
          </span>
        ))}
      </div>

      {/* 기록 목록 (토글) */}
      {open && (
        <div className="planet-record-list">
          {[...records].reverse().map((record) => {
            const emotion = EMOTION_BY_ID[record.emotion];
            return (
              <div
                key={record.id}
                className="planet-record-row"
                style={{ borderLeftColor: emotion.color }}
              >
                <div className="planet-record-row-info">
                  <span className="planet-record-row-emotion" style={{ color: emotion.color }}>
                    {emotion.name}
                  </span>
                  {record.comment ? (
                    <p className="planet-record-row-comment">{record.comment}</p>
                  ) : null}
                </div>
                <time className="planet-record-row-date">{record.date.slice(5)}</time>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
