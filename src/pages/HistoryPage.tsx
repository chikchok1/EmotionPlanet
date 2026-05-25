import { EMOTIONS, EMOTION_BY_ID } from "../data/emotions";
import { useEmotionPlanet } from "../state/EmotionPlanetProvider";
import { countEmotions } from "../utils/planet";

export function HistoryPage() {
  const { state } = useEmotionPlanet();
  const counts = countEmotions(state.records);
  const totalPoints = state.records.reduce((sum, record) => sum + record.points, 0);
  const latestRecords = [...state.records].reverse();

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

      <section className="panel">
        <div className="section-heading">
          <h2>감정 분포</h2>
          <p>지금까지 기록한 감정 비율</p>
        </div>
        <div className="emotion-bars">
          {EMOTIONS.map((emotion) => {
            const count = counts[emotion.id];
            const ratio = state.records.length ? Math.round((count / state.records.length) * 100) : 0;
            return (
              <div className="emotion-bar-row" key={emotion.id}>
                <span className="emotion-bar-label">
                  {emotion.emoji} {emotion.name}
                </span>
                <div className="emotion-bar-track">
                  <div
                    className="emotion-bar-fill"
                    style={{ width: `${ratio}%`, background: emotion.color }}
                  />
                </div>
                <span>{count}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="panel">
        <div className="section-heading">
          <h2>최근 기록</h2>
          <p>최신순으로 보는 감정 기록</p>
        </div>
        <div className="record-list">
          {latestRecords.slice(0, 18).map((record) => {
            const emotion = EMOTION_BY_ID[record.emotion];
            return (
              <article
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
              </article>
            );
          })}
        </div>
      </section>
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
