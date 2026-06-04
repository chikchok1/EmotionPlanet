import type { CSSProperties } from "react";
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
  face: null,
  ring: null,
  background: null
};

type AccessoryProfile = {
  bodyScale: number;
  effectScale: number;
  effectTop: number;
  effectX: number;
  effectOpacity: number;
};

type DecorProfile = {
  scale: number;
  top: number;
  x: number;
  rotate: number;
  zIndex: number;
  opacity?: number;
};

const defaultAccessoryProfile: AccessoryProfile = {
  bodyScale: 0.78,
  effectScale: 1.34,
  effectTop: 54,
  effectX: 50,
  effectOpacity: 1
};

const sceneDecorProfiles: Record<string, DecorProfile> = {
  crown: { scale: 0.7, top: 83, x: 50, rotate: 0, zIndex: 2 },
  "witch-hat": { scale: 0.42, top: 45, x: 17, rotate: -5, zIndex: 2 },
  astronaut: { scale: 0.42, top: 32, x: 80, rotate: 8, zIndex: 2 },
  sprout: { scale: 0.42, top: 72, x: 18, rotate: -3, zIndex: 5 },
  "cat-ears": { scale: 0.44, top: 31, x: 20, rotate: -7, zIndex: 2 },
  "star-band": { scale: 0.38, top: 72, x: 82, rotate: 2, zIndex: 5 },
  "bow-hat": { scale: 0.62, top: 83, x: 50, rotate: 0, zIndex: 2 },
  "night-cap": { scale: 0.42, top: 40, x: 17, rotate: 2, zIndex: 2 },
  "space-cap": { scale: 0.48, top: 71, x: 84, rotate: 9, zIndex: 5 }
};

const stickerDecorProfiles: Record<string, DecorProfile> = {
  sunglasses: { scale: 0.38, top: 31, x: 79, rotate: 10, zIndex: 5 },
  "star-glasses": { scale: 0.34, top: 34, x: 81, rotate: 8, zIndex: 5 },
  "face-mask": { scale: 0.38, top: 70, x: 21, rotate: -7, zIndex: 5 },
  "crystal-glasses": { scale: 0.36, top: 34, x: 20, rotate: -9, zIndex: 5 }
};

const planetAccessoryProfiles: Partial<Record<Planet["id"], Partial<AccessoryProfile>>> = {
  mercury: { bodyScale: 0.74, effectScale: 1.2, effectTop: 55 },
  venus: { bodyScale: 0.77, effectScale: 1.28, effectTop: 55 },
  earth: { bodyScale: 0.78, effectScale: 1.34 },
  mars: { bodyScale: 0.8, effectScale: 1.36 },
  jupiter: { bodyScale: 0.82, effectScale: 1.42 },
  saturn: {
    bodyScale: 0.76,
    effectScale: 1.24,
    effectTop: 57,
    effectOpacity: 0.9
  },
  uranus: { bodyScale: 0.78, effectScale: 1.36 },
  neptune: { bodyScale: 0.79, effectScale: 1.38 },
  pluto: { bodyScale: 0.73, effectScale: 1.16, effectTop: 55 }
};

function getAccessoryProfile(planetId: Planet["id"]) {
  return { ...defaultAccessoryProfile, ...planetAccessoryProfiles[planetId] };
}

function getDecorProfile(accessoryId: string | null | undefined, profiles: Record<string, DecorProfile>) {
  if (!accessoryId) return null;
  return profiles[accessoryId] ?? null;
}

export function PlanetAvatar({
  planet,
  emotion = "joy",
  equipped = emptyEquipped,
  size = 220,
  animate = false,
  muted = false
}: PlanetAvatarProps) {
  const profile = getAccessoryProfile(planet.id);
  const sceneDecor = getDecorProfile(equipped.hat, sceneDecorProfiles);
  const stickerDecor = getDecorProfile(equipped.face, stickerDecorProfiles);
  const bodySize = Math.round(size * profile.bodyScale);
  const faceImage = EMOTION_BY_ID[emotion].faceImage;
  const avatarStyle = {
    width: size,
    height: size,
    "--planet-accent": planet.color,
    "--planet-effect-top": `${profile.effectTop}%`,
    "--planet-effect-x": `${profile.effectX}%`,
    "--planet-effect-opacity": profile.effectOpacity
  } as CSSProperties;

  return (
    <div
      className={`planet-avatar${muted ? " planet-avatar-muted" : ""}`}
      style={avatarStyle}
      aria-label={`${planet.name} 행성`}
    >
      <div className={`planet-avatar-layer${animate ? " planet-float" : ""}`}>
        <AccessorySprite
          id={equipped.ring}
          size={Math.round(size * profile.effectScale)}
          className="planet-accessory planet-aura-effect"
        />
        <AccessorySprite
          id={equipped.ring}
          size={Math.round(size * profile.effectScale)}
          className="planet-accessory planet-aura-effect planet-aura-effect-front"
        />

        <div className="planet-stage-shadow" aria-hidden="true" />

        {sceneDecor ? (
          <AccessorySprite
            id={equipped.hat}
            size={Math.round(size * sceneDecor.scale)}
            className="planet-accessory planet-scene-decor"
            style={{
              "--decor-top": `${sceneDecor.top}%`,
              "--decor-x": `${sceneDecor.x}%`,
              "--decor-rotate": `${sceneDecor.rotate}deg`,
              "--decor-z": sceneDecor.zIndex,
              "--decor-opacity": sceneDecor.opacity ?? 1
            } as CSSProperties}
          />
        ) : null}

        {stickerDecor ? (
          <AccessorySprite
            id={equipped.face}
            size={Math.round(size * stickerDecor.scale)}
            className="planet-accessory planet-sticker-decor"
            style={{
              "--decor-top": `${stickerDecor.top}%`,
              "--decor-x": `${stickerDecor.x}%`,
              "--decor-rotate": `${stickerDecor.rotate}deg`,
              "--decor-z": stickerDecor.zIndex,
              "--decor-opacity": stickerDecor.opacity ?? 1
            } as CSSProperties}
          />
        ) : null}

        <div className="planet-body" style={{ width: bodySize, height: bodySize }}>
          <img className="planet-base-image" src={planet.baseImage} alt={`${planet.name} base`} />
          {planet.effectImage ? (
            <img className="planet-effect-image" src={planet.effectImage} alt="" aria-hidden="true" />
          ) : null}
          <img className="planet-expression-image" src={faceImage} alt="" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
