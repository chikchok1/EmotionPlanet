import { useMemo, useState } from "react";
import { EMOTIONS, EMOTION_BY_ID } from "../data/emotions";
import { PLANETS } from "../data/planets";
import { PlanetAvatar } from "../components/planet/PlanetAvatar";
import { useEmotionPlanet } from "../state/EmotionPlanetProvider";
import type { EmotionId, RoutePath } from "../types";
import { formatDisplayDate, getCurrentStage, getPlanetMilestones } from "../utils/planet";

type HomePageProps = {
  navigate: (path: RoutePath) => void;
};

export function HomePage({ navigate }: HomePageProps) {
  const {
    state,
    recordEmotion,
    hasRecordedToday,
    getTodayRecord,
    getDominantEmotion,
    getPlanetRecords
  } = useEmotionPlanet();
  const [selectedEmotion, setSelectedEmotion] = useState<EmotionId | null>(null);
  const [comment, setComment] = useState("");
  const [mode, setMode] = useState<"select" | "comment">("select");

  const currentPlanet = PLANETS[state.currentPlanetIndex];
  const planetRecords = getPlanetRecords(state.currentPlanetIndex);
  const dominantEmotion = getDominantEmotion(planetRecords);
  const recordedToday = hasRecordedToday();
  const todayRecord = getTodayRecord();
  const displayedEmotion = todayRecord?.emotion ?? selectedEmotion ?? dominantEmotion;
  const progress = state.currentPlanetRecords / currentPlanet.recordsNeeded;
  const stage = getCurrentStage(state.currentPlanetRecords, currentPlanet.recordsNeeded);
  const selected = selectedEmotion ? EMOTION_BY_ID[selectedEmotion] : null;

  const completionCard = useMemo(() => {
    if (!todayRecord) return null;
    const emotion = EMOTION_BY_ID[todayRecord.emotion];
    return { record: todayRecord, emotion };
  }, [todayRecord]);

  const submitRecord = () => {
    if (!selectedEmotion) return;
    recordEmotion(selectedEmotion, comment);
    setComment("");
    setSelectedEmotion(null);
    setMode("select");
  };

  /* ── 완료 상태 ── */
  if (recordedToday && completionCard) {
    const rec = state.currentPlanetRecords;
    const needed = currentPlanet.recordsNeeded;
    const prog = Math.min(100, Math.round((rec / needed) * 100));

    const milestones = getPlanetMilestones(needed);

    return (
      <div className="screen-stack home-screen">
        <header className="top-bar">
          <span className="pixel-date">{formatDisplayDate()}</span>
          <button className="point-pill" type="button" onClick={() => navigate("/shop")}>
            <span>⭐</span>
            {state.points.toLocaleString()}pt
          </button>
        </header>

        <div className="done-screen">
          {/* ── 행성 아바타 (이모지 제거, 행성만) ── */}
          <div className="done-planet-wrap">
            <div
              className="done-glow"
              style={{
                background: `radial-gradient(circle, ${currentPlanet.glowColor} 0%, transparent 70%)`,
              }}
            />
            <div style={{ position: "relative", zIndex: 2 }}>
              <PlanetAvatar
                planet={currentPlanet}
                emotion={displayedEmotion}
                equipped={state.equippedAccessories}
                size={170}
                animate
              />
            </div>
          </div>

          {/* ── 타이틀 ── */}
          <div className="done-title-block">
            <h2 className="done-title">오늘의 감정 기록 완료!</h2>
            <p className="done-subtitle">{currentPlanet.name}이 조금 더 성장했어요 🌱</p>
          </div>

          {/* ── 감정 결과 칩 ── */}
          <div
            className="done-result-chip"
            style={{
              background: completionCard.emotion.bgColor,
              borderColor: completionCard.emotion.borderColor,
              color: completionCard.emotion.color,
            }}
          >
            {/* 이모지 → 행성 이미지 */}
            <div className="done-chip-planet">
              <img
                src={completionCard.emotion.planetImage}
                alt={completionCard.emotion.name}
                className="done-chip-planet-img"
                onError={(e) => {
                  const t = e.currentTarget as HTMLImageElement;
                  t.style.display = "none";
                  const fb = t.nextElementSibling as HTMLElement;
                  if (fb) fb.style.display = "flex";
                }}
              />
              <span className="done-chip-planet-fallback" style={{ display: "none" }}>
                {completionCard.emotion.emoji}
              </span>
            </div>
            <span className="done-chip-name">{completionCard.emotion.name}</span>
            <span className="done-chip-divider" />
            <span className="done-chip-pt">+{completionCard.record.points}pt</span>
          </div>

          {/* ── 코멘트 ── */}
          {completionCard.record.comment ? (
            <p className="done-comment">"{completionCard.record.comment}"</p>
          ) : null}

          {/* ── 성장 진행 카드 ── */}
          <div className="done-progress-card">
            <div className="done-progress-header">
              <span className="pixel-label">GROWTH PROGRESS</span>
              <span className="pixel-value" style={{ color: currentPlanet.color }}>
                {rec} / {needed}일
              </span>
            </div>

            {/* 진행 바 + 마일스톤 마커 */}
            <div className="done-progress-track-wrap">
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{
                    width: `${prog}%`,
                    background: `linear-gradient(90deg, ${currentPlanet.glowColor}, ${currentPlanet.color})`,
                  }}
                />
              </div>
              {milestones.map(({ day }) => (
                <div
                  key={day}
                  className="done-milestone-tick"
                  style={{ left: `${Math.round((day / needed) * 100)}%` }}
                />
              ))}
            </div>

            {/* 마일스톤 라벨 행 */}
            <div className="done-milestone-labels">
              {milestones.map(({ day }) => (
                <div
                  key={day}
                  className={`done-milestone-label ${rec >= day ? "reached" : ""}`}
                  style={rec >= day ? { color: currentPlanet.color } : undefined}
                >
                  <span className="done-milestone-icon">{rec >= day ? "✓" : "○"}</span>
                  {day}일
                </div>
              ))}
            </div>

            {/* 연속 기록 */}
            {state.currentStreak > 0 && (
              <div className="done-streak">
                🔥 {state.currentStreak}일 연속 기록 중!
              </div>
            )}
          </div>

          {/* ── CTA ── */}
          <button
            className="done-cta"
            type="button"
            onClick={() => navigate("/planet")}
          >
            행성 보러가기 →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="screen-stack home-screen">
      <header className="top-bar">
        <span className="pixel-date">{formatDisplayDate()}</span>
        <button className="point-pill" type="button" onClick={() => navigate("/shop")}>
          <span>⭐</span>
          {state.points.toLocaleString()}pt
        </button>
      </header>

      <section className="hero-planet" onClick={() => navigate("/planet")}>
        <PlanetAvatar
          planet={currentPlanet}
          emotion={displayedEmotion}
          equipped={state.equippedAccessories}
          size={180}
          animate
        />
        <div className="planet-title-row">
          <strong style={{ color: currentPlanet.color }}>{currentPlanet.name}</strong>
          <span>STAGE {stage}</span>
        </div>
        <div className="compact-progress">
          <div className="panel-row">
            <span className="pixel-label">GROWTH</span>
            <span className="pixel-value" style={{ color: currentPlanet.color }}>
              {state.currentPlanetRecords}/{currentPlanet.recordsNeeded}
            </span>
          </div>
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{
                width: `${Math.min(100, progress * 100)}%`,
                background: `linear-gradient(90deg, ${currentPlanet.glowColor}, ${currentPlanet.color})`
              }}
            />
          </div>
        </div>
        {state.currentStreak > 0 ? (
          <div className="streak-pill">🔥 {state.currentStreak}일 연속 기록!</div>
        ) : null}
      </section>

      <section className="panel emotion-panel">
        {mode === "select" ? (
          <>
            <div className="section-heading center">
              <h2>✦ 오늘 행성의 날씨는? ✦</h2>
              <p>지금 감정을 기록해 행성을 성장시키세요</p>
            </div>
            <div className="emotion-grid">
              {EMOTIONS.map((emotion) => (
                <button
                  key={emotion.id}
                  className="emotion-button"
                  type="button"
                  style={{
                    "--emotion-color": emotion.color,
                    "--emotion-bg": emotion.bgColor,
                    "--emotion-border": emotion.borderColor,
                  } as React.CSSProperties}
                  onClick={() => {
                    setSelectedEmotion(emotion.id);
                    setMode("comment");
                  }}
                >
                  <div className="emotion-planet-img-wrap">
                    <img
                      className="emotion-planet-img"
                      src={emotion.planetImage}
                      alt={emotion.name}
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = "none";
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = "flex";
                      }}
                    />
                    <span className="emotion-button-orb emotion-orb-fallback" style={{ display: "none" }}>
                      {emotion.emoji}
                    </span>
                  </div>
                  <strong>{emotion.name}</strong>
                  <small>+{emotion.points}pt</small>
                </button>
              ))}
            </div>
          </>
        ) : (
          <div
            className="cs-b"
            style={{
              "--sel-color": selected?.color ?? "#7c5cfc",
              "--sel-bg": selected?.bgColor ?? "#0d001a",
              "--sel-border": selected?.borderColor ?? "#7c5cfc",
            } as React.CSSProperties}
          >
            <button
              className="cs-b-back"
              type="button"
              onClick={() => {
                setMode("select");
                setSelectedEmotion(null);
              }}
            >
              ← 뒤로
            </button>

            {selected && (
              <div className="cs-b-card">
                <div className="cs-b-thumb">
                  <img
                    src={selected.planetImage}
                    alt={selected.name}
                    className="cs-b-thumb-img"
                    onError={(e) => {
                      const t = e.currentTarget;
                      t.style.display = "none";
                      const fb = t.nextElementSibling as HTMLElement;
                      if (fb) fb.style.display = "flex";
                    }}
                  />
                  <span className="cs-b-thumb-fallback" style={{ display: "none" }}>
                    {selected.emoji}
                  </span>
                </div>
                <div className="cs-b-info">
                  <strong style={{ color: selected.color }}>{selected.name}</strong>
                  <span>{selected.description}</span>
                </div>
                <div className="cs-b-pt">+{selected.points}pt</div>
              </div>
            )}

            <div className="cs-b-field">
              <label className="cs-b-label" htmlFor="today-comment">오늘 하루 한 마디</label>
              <div className="cs-b-textarea-wrap">
                <textarea
                  id="today-comment"
                  className="cs-b-textarea"
                  rows={4}
                  maxLength={50}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="오늘 하루를 한 문장으로 표현해봐요..."
                />
                <span className="cs-b-count">{comment.length}/50</span>
              </div>
            </div>

            <button className="cs-b-submit" type="button" onClick={submitRecord}>
              ✦ 기록 완료!
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
