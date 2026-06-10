import { useMemo, useState, type CSSProperties } from "react";
import { EMOTIONS, EMOTION_BY_ID } from "../data/emotions";
import { PLANETS } from "../data/planets";
import { useEmotionPlanet } from "../state/EmotionPlanetProvider";
import { getEmotionPlanetImage } from "../utils/emotionPlanetImage";
import { countEmotions } from "../utils/planet";
import type { EmotionRecord, Planet } from "../types";

const WEEK_DAYS = ["일", "월", "화", "수", "목", "금", "토"];

const formatDateKey = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const parseDateKey = (dateKey: string) => {
  const [year, month, day = 1] = dateKey.split("-").map(Number);
  return new Date(year, month - 1, day);
};

const formatMonthKey = (date: Date) => formatDateKey(date).slice(0, 7);

const formatMonthTitle = (date: Date) =>
  `${date.getFullYear()}. ${String(date.getMonth() + 1).padStart(2, "0")}`;

const formatDayTitle = (dateKey: string) => {
  const date = parseDateKey(dateKey);
  return `${date.getMonth() + 1}월 ${date.getDate()}일 ${WEEK_DAYS[date.getDay()]}요일`;
};

const getCalendarDays = (month: Date) => {
  const firstDay = new Date(month.getFullYear(), month.getMonth(), 1);
  const startDay = new Date(month.getFullYear(), month.getMonth(), 1 - firstDay.getDay());

  return Array.from({ length: 42 }, (_, index) => {
    const day = new Date(startDay);
    day.setDate(startDay.getDate() + index);
    return day;
  });
};

const groupRecordsByDate = (records: EmotionRecord[]) =>
  records.reduce<Map<string, EmotionRecord[]>>((map, record) => {
    const recordsOnDate = map.get(record.date) ?? [];
    recordsOnDate.push(record);
    map.set(record.date, recordsOnDate);
    return map;
  }, new Map());

export function HistoryPage() {
  const { state } = useEmotionPlanet();
  const currentPlanet = PLANETS[state.currentPlanetIndex];
  const sortedRecords = useMemo(
    () => [...state.records].sort((a, b) => a.date.localeCompare(b.date)),
    [state.records]
  );
  const totalPoints = sortedRecords.reduce((sum, record) => sum + record.points, 0);
  const recordsByDate = useMemo(() => groupRecordsByDate(sortedRecords), [sortedRecords]);
  const latestDateKey = sortedRecords[sortedRecords.length - 1]?.date ?? formatDateKey(new Date());
  const todayKey = formatDateKey(new Date());

  const [viewMonth, setViewMonth] = useState(() => parseDateKey(latestDateKey));
  const [selectedDate, setSelectedDate] = useState(latestDateKey);

  const monthKey = formatMonthKey(viewMonth);
  const calendarDays = useMemo(() => getCalendarDays(viewMonth), [viewMonth]);
  const monthRecords = useMemo(
    () => sortedRecords.filter((record) => record.date.startsWith(monthKey)),
    [monthKey, sortedRecords]
  );
  const monthCounts = countEmotions(monthRecords);
  const selectedRecords = recordsByDate.get(selectedDate) ?? [];
  const selectedEmotion = selectedRecords.length
    ? EMOTION_BY_ID[selectedRecords[selectedRecords.length - 1].emotion]
    : null;
  const monthRecordDays = new Set(monthRecords.map((record) => record.date)).size;
  const daysInMonth = new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 0).getDate();
  const monthRatio = Math.round((monthRecordDays / daysInMonth) * 100);
  const monthSummary = EMOTIONS.map((emotion) => ({
    emotion,
    count: monthCounts[emotion.id],
    ratio: monthRecords.length ? Math.round((monthCounts[emotion.id] / monthRecords.length) * 100) : 0
  }));
  const dominantMonthEmotion = [...monthSummary].sort((a, b) => b.count - a.count)[0];

  const moveMonth = (amount: number) => {
    const nextMonth = new Date(viewMonth.getFullYear(), viewMonth.getMonth() + amount, 1);
    const nextMonthKey = formatMonthKey(nextMonth);
    const nextMonthRecords = sortedRecords.filter((record) => record.date.startsWith(nextMonthKey));

    setViewMonth(nextMonth);
    setSelectedDate(nextMonthRecords[nextMonthRecords.length - 1]?.date ?? `${nextMonthKey}-01`);
  };

  return (
    <div className="screen-stack history-screen">
      <header className="section-heading">
        <h1 className="screen-title">감정 기록</h1>
        <p>나의 감정 흐름과 성장 기록</p>
      </header>

      <section className="stats-grid">
        <StatCard label="총 기록" value={sortedRecords.length} />
        <StatCard label="이번 달" value={monthRecords.length} />
        <StatCard label="연속 기록" value={state.currentStreak} />
      </section>

      <section className="panel history-calendar-panel">
        <div className="calendar-toolbar">
          <div className="section-heading calendar-title">
            <h2>{formatMonthTitle(viewMonth)}</h2>
            <p>{monthRecordDays}일 기록 · 월 달성률 {monthRatio}%</p>
          </div>
          <div className="calendar-nav">
            <button type="button" aria-label="이전 달" onClick={() => moveMonth(-1)}>
              ‹
            </button>
            <button type="button" aria-label="다음 달" onClick={() => moveMonth(1)}>
              ›
            </button>
          </div>
        </div>

        <div className="calendar-weekdays">
          {WEEK_DAYS.map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>

        <div className="calendar-grid">
          {calendarDays.map((date) => {
            const dateKey = formatDateKey(date);
            const records = recordsByDate.get(dateKey) ?? [];
            const record = records[records.length - 1];
            const emotion = record ? EMOTION_BY_ID[record.emotion] : null;
            const isCurrentMonth = date.getMonth() === viewMonth.getMonth();
            const isSelected = dateKey === selectedDate;
            const isToday = dateKey === todayKey;

            return (
              <button
                className={[
                  "calendar-day",
                  isCurrentMonth ? "" : "muted",
                  emotion ? "has-record" : "",
                  isSelected ? "selected" : "",
                  isToday ? "today" : ""
                ].filter(Boolean).join(" ")}
                key={dateKey}
                type="button"
                style={{
                  "--day-accent": emotion?.color ?? "rgba(255,255,255,0.22)",
                  "--day-bg": emotion?.bgColor ?? "rgba(255,255,255,0.04)"
                } as CSSProperties}
                aria-label={`${formatDayTitle(dateKey)} ${emotion ? emotion.name : "기록 없음"}`}
                onClick={() => setSelectedDate(dateKey)}
              >
                <span className="calendar-day-number">{date.getDate()}</span>
                {emotion ? (
                  <span className="calendar-emotion-mark">
                    <img src={getEmotionPlanetImage(currentPlanet, emotion.id, emotion.planetImage)} alt="" />
                  </span>
                ) : (
                  <span className="calendar-empty-mark" />
                )}
              </button>
            );
          })}
        </div>
      </section>

      <section
        className="panel selected-day-panel"
        style={{ "--selected-accent": selectedEmotion?.color ?? "rgba(255,255,255,0.18)" } as CSSProperties}
      >
        <div className="selected-day-heading">
          <div className="section-heading">
            <h2>{formatDayTitle(selectedDate)}</h2>
            <p>{selectedRecords.length ? `${selectedRecords.length}개 감정 기록` : "기록 없음"}</p>
          </div>
          {selectedEmotion ? (
            <span className="selected-emotion-pill" style={{ color: selectedEmotion.color } as CSSProperties}>
              <img src={getEmotionPlanetImage(currentPlanet, selectedEmotion.id, selectedEmotion.planetImage)} alt="" />
              {selectedEmotion.name}
            </span>
          ) : (
            <span className="selected-emotion-pill empty">빈 날</span>
          )}
        </div>

        {selectedRecords.length ? (
          <div className="record-list selected-record-list">
            {selectedRecords.map((record) => {
              const emotion = EMOTION_BY_ID[record.emotion];
              return (
                <article
                  className="record-item"
                  key={record.id}
                  style={{ "--record-accent": emotion.color } as CSSProperties}
                >
                  <RecordThumb record={record} planet={currentPlanet} />
                  <div>
                    <strong style={{ color: emotion.color }}>{emotion.name}</strong>
                    {record.comment ? <p>{record.comment}</p> : <p>감정만 기록</p>}
                  </div>
                  <time>+{record.points}pt</time>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="empty-day-state">이날은 아직 감정 기록이 없어요.</div>
        )}
      </section>

      <section className="panel month-summary-panel">
        <div className="section-heading">
          <h2>월간 흐름</h2>
          <p>
            {dominantMonthEmotion.count
              ? `${dominantMonthEmotion.emotion.name} 감정이 이번 달에 가장 많이 나타났어요`
              : "이번 달 기록을 기다리는 중"}
          </p>
        </div>

        <div className="month-highlight-grid">
          <div>
            <strong>{totalPoints.toLocaleString()}</strong>
            <span>누적 포인트</span>
          </div>
          <div>
            <strong>{monthRecordDays}</strong>
            <span>기록한 날</span>
          </div>
          <div>
            <strong>{monthRatio}%</strong>
            <span>월 달성률</span>
          </div>
        </div>

        <div className="month-emotion-bars">
          {monthSummary.map(({ emotion, count, ratio }) => (
            <div className="month-emotion-row" key={emotion.id}>
              <div className="history-bar-planet">
                <img
                  src={getEmotionPlanetImage(currentPlanet, emotion.id, emotion.planetImage)}
                  alt={emotion.name}
                  className="history-bar-planet-img"
                />
              </div>
              <div className="month-emotion-track">
                <span style={{ color: emotion.color }}>{emotion.name}</span>
                <div className="emotion-bar-track">
                  <div className="emotion-bar-fill" style={{ width: `${ratio}%`, background: emotion.color }} />
                </div>
              </div>
              <strong>{count}</strong>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function RecordThumb({ record, planet }: { record: EmotionRecord; planet: Planet }) {
  const emotion = EMOTION_BY_ID[record.emotion];

  return (
    <div className="record-planet-thumb">
      <img
        src={getEmotionPlanetImage(planet, emotion.id, emotion.planetImage)}
        alt={emotion.name}
        className="record-planet-img"
        onError={(event) => {
          const target = event.currentTarget;
          target.style.display = "none";
          const fallback = target.nextElementSibling as HTMLElement | null;
          if (fallback) fallback.style.display = "flex";
        }}
      />
      <span className="record-planet-fallback" style={{ display: "none" }}>
        {emotion.emoji}
      </span>
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
