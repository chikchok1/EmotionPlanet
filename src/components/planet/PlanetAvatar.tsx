import type { CSSProperties } from "react";
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
  faceTop: number;
  faceScale: number;
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
  effectOpacity: 0.78,
  faceTop: 55,
  faceScale: 1
};

const sceneDecorProfiles: Record<string, DecorProfile> = {
  crown: { scale: 0.56, top: 84, x: 50, rotate: 0, zIndex: 6, opacity: 0.95 },
  "witch-hat": { scale: 0.42, top: 45, x: 17, rotate: -5, zIndex: 6 },
  astronaut: { scale: 0.42, top: 32, x: 80, rotate: 8, zIndex: 6 },
  sprout: { scale: 0.42, top: 72, x: 18, rotate: -3, zIndex: 6 },
  "cat-ears": { scale: 0.44, top: 31, x: 20, rotate: -7, zIndex: 6 },
  "star-band": { scale: 0.38, top: 72, x: 82, rotate: 2, zIndex: 6 },
  "bow-hat": { scale: 0.62, top: 83, x: 50, rotate: 0, zIndex: 6 },
  "night-cap": { scale: 0.42, top: 40, x: 17, rotate: 2, zIndex: 6 },
  "space-cap": { scale: 0.48, top: 71, x: 84, rotate: 9, zIndex: 6 },
  // 새 장식 아이템
  "star-mailbox": { scale: 0.44, top: 78, x: 82, rotate: 5, zIndex: 6 },
  "emotion-crystal-lamp": { scale: 0.46, top: 75, x: 18, rotate: -4, zIndex: 6 },
  "mini-picnic-rug": { scale: 0.62, top: 88, x: 50, rotate: 0, zIndex: 6 },
  "cosmic-music-box": { scale: 0.42, top: 76, x: 80, rotate: 6, zIndex: 6 },
  "floating-bubble-jar": { scale: 0.40, top: 30, x: 78, rotate: 8, zIndex: 6 },
  "mini-comet-signpost": { scale: 0.44, top: 70, x: 16, rotate: -6, zIndex: 6 },
  "dream-telescope": { scale: 0.46, top: 72, x: 82, rotate: 4, zIndex: 6 },
  "cozy-space-bookshelf": { scale: 0.54, top: 82, x: 20, rotate: -3, zIndex: 6 }
};

const stickerDecorProfiles: Record<string, DecorProfile> = {
  sunglasses: { scale: 0.38, top: 31, x: 79, rotate: 10, zIndex: 7 },
  "star-glasses": { scale: 0.34, top: 34, x: 81, rotate: 8, zIndex: 7 },
  "face-mask": { scale: 0.38, top: 70, x: 21, rotate: -7, zIndex: 7 },
  "crystal-glasses": { scale: 0.36, top: 34, x: 20, rotate: -9, zIndex: 7 }
};

const planetAccessoryProfiles: Partial<Record<Planet["id"], Partial<AccessoryProfile>>> = {
  mercury: { bodyScale: 0.74, effectScale: 1.2, effectTop: 55 },
  venus: { bodyScale: 0.77, effectScale: 1.28, effectTop: 55 },
  earth: { bodyScale: 0.78, effectScale: 1.34 },
  mars: { bodyScale: 0.8, effectScale: 1.28, effectOpacity: 0.62, faceTop: 56, faceScale: 0.92 },
  jupiter: { bodyScale: 0.82, effectScale: 1.42, faceScale: 0.92 },
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

function PlanetFace({ emotion }: { emotion: EmotionId }) {
  return (
    <div className={`planet-face planet-face-${emotion}`} aria-hidden="true">
      <span className="planet-face-brow planet-face-brow-left" />
      <span className="planet-face-brow planet-face-brow-right" />
      <span className="planet-face-eye planet-face-eye-left" />
      <span className="planet-face-eye planet-face-eye-right" />
      <span className="planet-face-tear planet-face-tear-left" />
      <span className="planet-face-tear planet-face-tear-right" />
      <span className="planet-face-cheek planet-face-cheek-left" />
      <span className="planet-face-cheek planet-face-cheek-right" />
      <span className="planet-face-mouth" />
    </div>
  );
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
  const completePlanetImage = planet.emotionImages?.[emotion];
  const bodyScale = completePlanetImage ? Math.min(0.94, profile.bodyScale + 0.1) : profile.bodyScale;
  const bodySize = Math.round(size * bodyScale);
  const avatarStyle = {
    width: size,
    height: size,
    "--planet-accent": planet.color,
    "--planet-effect-top": `${profile.effectTop}%`,
    "--planet-effect-x": `${profile.effectX}%`,
    "--planet-effect-opacity": profile.effectOpacity,
    "--planet-face-top": `${profile.faceTop}%`,
    "--planet-face-scale": profile.faceScale
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
          className="planet-accessory planet-aura-effect planet-aura-effect-back"
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

        <div className={`planet-body${completePlanetImage ? " planet-body-complete" : ""}`} style={{ width: bodySize, height: bodySize }}>
          {completePlanetImage ? (
            <img className="planet-character-image" src={completePlanetImage} alt={`${planet.name} ${emotion}`} />
          ) : (
            <>
              <img className="planet-base-image" src={planet.baseImage} alt={`${planet.name} base`} />
              {planet.effectImage ? (
                <img className="planet-effect-image" src={planet.effectImage} alt="" aria-hidden="true" />
              ) : null}
              <PlanetFace emotion={emotion} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
