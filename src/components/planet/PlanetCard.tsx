import type { EmotionId, EquippedAccessories, Planet } from "../../types";
import { PlanetAvatar } from "./PlanetAvatar";

type PlanetCardProps = {
  planet: Planet;
  recordCount: number;
  isCurrent?: boolean;
  isCompleted?: boolean;
  isLocked?: boolean;
  emotion?: EmotionId;
  equipped?: EquippedAccessories;
  onClick?: () => void;
};

export function PlanetCard({
  planet,
  recordCount,
  isCurrent = false,
  isCompleted = false,
  isLocked = false,
  emotion = "calm",
  equipped,
  onClick
}: PlanetCardProps) {
  return (
    <button
      className={`planet-card${isCurrent ? " planet-card-current" : ""}${isLocked ? " planet-card-locked" : ""}`}
      onClick={onClick}
      type="button"
    >
      <div className="planet-card-badge">
        {isCompleted ? "✓" : isCurrent ? "▶" : isLocked ? "잠김" : ""}
      </div>
      <PlanetAvatar planet={planet} emotion={emotion} equipped={equipped} size={92} muted={isLocked} />
      <span className="planet-card-name">{planet.name}</span>
      <span className="planet-card-progress">
        {recordCount}/{planet.recordsNeeded}
      </span>
    </button>
  );
}
