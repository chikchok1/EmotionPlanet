import { useMemo, useState } from "react";
import { EMOTIONS, EMOTION_BY_ID } from "../data/emotions";
import { PLANETS } from "../data/planets";
import { PlanetAvatar } from "../components/planet/PlanetAvatar";
import { useEmotionPlanet } from "../state/EmotionPlanetProvider";
import type { EmotionId, RoutePath } from "../types";
import { formatDisplayDate, getCurrentStage } from "../utils/planet";

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
  const stage = getCurrentStage(state.currentPlanetRecords);
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

  return (
    <div className="screen-stack home-screen">
      <header className="top-bar">
        <span className="pixel-date">{formatDisplayDate()}</span>
        <button className="point-pill" type="button" onClick={() => navigate("/shop")}>
          <span>★</span>
          <strong>{state.points.toLocaleString()}</strong>
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
        {recordedToday && completionCard ? (
          <div className="record-complete">
            <span className="record-complete-emoji">{completionCard.emotion.emoji}</span>
            <h2>오늘의 감정 기록 완료!</h2>
            <div
              className="emotion-result"
              style={{
                background: completionCard.emotion.bgColor,
                borderColor: completionCard.emotion.borderColor,
                color: completionCard.emotion.color
              }}
            >
              {completionCard.emotion.name}
              <span>+{completionCard.record.points}pt</span>
            </div>
            {completionCard.record.comment ? <p>"{completionCard.record.comment}"</p> : null}
            <button className="text-action" type="button" onClick={() => navigate("/planet")}>
              행성 보러가기 →
            </button>
          </div>
        ) : mode === "select" ? (
          <>
            <div className="section-heading center">
              <h2>오늘의 감정은?</h2>
              <p>감정을 기록하면 행성이 성장해요</p>
            </div>
            <div className="emotion-grid">
              {EMOTIONS.map((emotion) => (
                <button
                  key={emotion.id}
                  className="emotion-button"
                  type="button"
                  style={{
                    background: emotion.bgColor,
                    borderColor: emotion.borderColor,
                    color: emotion.color
                  }}
                  onClick={() => {
                    setSelectedEmotion(emotion.id);
                    setMode("comment");
                  }}
                >
                  <span>{emotion.emoji}</span>
                  <strong>{emotion.name}</strong>
                  <small>+{emotion.points}pt</small>
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="comment-step">
            <div className="comment-header">
              <button
                className="text-action"
                type="button"
                onClick={() => {
                  setMode("select");
                  setSelectedEmotion(null);
                }}
              >
                ← 뒤로
              </button>
              {selected ? (
                <div className="selected-emotion" style={{ color: selected.color }}>
                  <span>{selected.emoji}</span>
                  <strong>{selected.name}</strong>
                </div>
              ) : null}
            </div>
            <label className="field-label" htmlFor="today-comment">
              오늘 하루 한 마디
            </label>
            <textarea
              id="today-comment"
              className="comment-input"
              rows={3}
              maxLength={50}
              value={comment}
              onChange={(event) => setComment(event.target.value)}
              placeholder="오늘 하루를 한 문장으로 표현해봐요..."
            />
            <div className="text-count">{comment.length}/50</div>
            <button className="primary-button" type="button" onClick={submitRecord}>
              ✦ 기록 완료!
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
