import { ACCESSORY_BY_ID, ACCESSORY_GRID, ACCESSORY_IMAGE_BY_ID, ACCESSORY_SPRITE } from "../../data/accessories";
import { getSpaceBackgroundUrl, SPACE_BACKGROUNDS } from "../../data/backgrounds";

type AccessorySpriteProps = {
  id: string | null | undefined;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
};

export function AccessorySprite({ id, size = 48, className, style }: AccessorySpriteProps) {
  if (!id) return null;

  if (SPACE_BACKGROUNDS[id]) {
    return (
      <div
        className={className}
        style={{
          width: size,
          height: size,
          backgroundImage: `url('${getSpaceBackgroundUrl(id)}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: "50%",
          ...style
        }}
      />
    );
  }

  const accessory = ACCESSORY_BY_ID[id];
  if (!accessory) return null;

  const accessoryImage = ACCESSORY_IMAGE_BY_ID[id];

  if (accessoryImage) {
    return (
      <div
        className={className}
        style={{
          width: size,
          height: size,
          backgroundImage: `url('${accessoryImage}')`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          imageRendering: "pixelated",
          flexShrink: 0,
          ...style
        }}
      />
    );
  }

  const x = accessory.col === 0 ? 0 : (accessory.col / (ACCESSORY_GRID.columns - 1)) * 100;
  const y = accessory.row === 0 ? 0 : (accessory.row / (ACCESSORY_GRID.rows - 1)) * 100;

  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        backgroundImage: `url('${ACCESSORY_SPRITE}')`,
        backgroundSize: `${ACCESSORY_GRID.columns * 100}% ${ACCESSORY_GRID.rows * 100}%`,
        backgroundPosition: `${x}% ${y}%`,
        backgroundRepeat: "no-repeat",
        imageRendering: "pixelated",
        flexShrink: 0,
        ...style
      }}
    />
  );
}
