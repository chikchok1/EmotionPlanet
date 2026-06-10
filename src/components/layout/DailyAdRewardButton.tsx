import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useEmotionPlanet } from "../../state/EmotionPlanetProvider";

type WatchState = "idle" | "watching" | "ready";

export function DailyAdRewardButton() {
  const { dailyAdRewardPoints, canClaimDailyAdReward, claimDailyAdReward } = useEmotionPlanet();
  const [open, setOpen] = useState(false);
  const [watchState, setWatchState] = useState<WatchState>("idle");
  const canClaim = canClaimDailyAdReward();

  useEffect(() => {
    if (!open || watchState !== "watching") return;
    const timer = window.setTimeout(() => setWatchState("ready"), 1400);
    return () => window.clearTimeout(timer);
  }, [open, watchState]);

  const openAd = () => {
    if (!canClaim) return;
    setWatchState("watching");
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
    setWatchState("idle");
  };

  const claimReward = () => {
    if (claimDailyAdReward()) close();
  };

  return (
    <>
      <button
        className="ad-reward-button"
        type="button"
        disabled={!canClaim}
        onClick={openAd}
        aria-label={canClaim ? `광고 보고 ${dailyAdRewardPoints}포인트 받기` : "오늘 광고 보상 완료"}
      >
        <span>AD</span>
        {canClaim ? `+${dailyAdRewardPoints}` : "완료"}
      </button>

      {open
        ? createPortal(
            <div className="modal-backdrop" onClick={close}>
              <section className="ad-reward-modal" onClick={(event) => event.stopPropagation()}>
                <button className="modal-close" type="button" onClick={close}>
                  ×
                </button>
                <span className="ad-reward-badge">DAILY BONUS</span>
                <h2>광고 보상</h2>
                <p>오늘 한 번 받을 수 있는 보너스 포인트</p>
                <div className="ad-watch-frame" aria-hidden="true">
                  <span>{watchState === "ready" ? "완료" : "AD"}</span>
                  <div className="ad-progress-track">
                    <div className={`ad-progress-fill${watchState === "watching" ? " running" : " done"}`} />
                  </div>
                </div>
                <button
                  className="done-cta"
                  type="button"
                  disabled={watchState !== "ready"}
                  onClick={claimReward}
                >
                  {watchState === "ready" ? `+${dailyAdRewardPoints}pt 받기` : "광고 시청 중"}
                </button>
              </section>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
