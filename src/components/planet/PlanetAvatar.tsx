import { EMOTION_BY_ID } from "../../data/emotions";
import type { EmotionId, EquippedAccessories, Planet } from "../../types";
import { AccessorySprite } from "./AccessorySprite";

type PlanetAvatarProps = {
  planet: Planet;
  emotion?: EmotionId;
  equipped?: EquippedAccessories;
  size?: number;
  animate?: boolean;
  muted?: boolean;
};

const emptyEquipped: EquippedAccessories = {
  hat: null,
  shoes: null,
  face: null,
  ring: null,
  background: null
};

export function PlanetAvatar({
  planet,
  emotion = "joy",
  equipped = emptyEquipped,
  size = 220,
  animate = false,
  muted = false
}: PlanetAvatarProps) {
  const bodySize = Math.round(size * 0.72);
  const faceImage = EMOTION_BY_ID[emotion].faceImage;

  return (
    <div
      className={`planet-avatar${muted ? " planet-avatar-muted" : ""}`}
      style={{ width: size, height: size }}
      aria-label={`${planet.name} 행성`}
    >
      <AccessorySprite
        id={equipped.ring}
        size={Math.round(size * 1.1)}
        className="planet-accessory planet-ring"
      />

      <div
        className={`planet-body${animate ? " planet-float" : ""}`}
        style={{ width: bodySize, height: bodySize }}
      >
        <img className="planet-base-image" src={planet.baseImage} alt={`${planet.name} base`} />
        {planet.effectImage ? (
          <img className="planet-effect-image" src={planet.effectImage} alt="" aria-hidden="true" />
        ) : null}
        <img className="planet-expression-image" src={faceImage} alt="" aria-hidden="true" />
      </div>

      <AccessorySprite
        id={equipped.shoes}
        size={Math.round(size * 0.32)}
        className="planet-accessory planet-shoes"
      />
      <AccessorySprite
        id={equipped.face}
        size={Math.round(size * 0.28)}
        className="planet-accessory planet-face-item"
      />
      <AccessorySprite
        id={equipped.hat}
        size={Math.round(size * 0.36)}
        className="planet-accessory planet-hat"
      />
    </div>
  );
}
