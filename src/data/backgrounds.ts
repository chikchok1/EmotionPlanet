const space = (filename: string) => `/figma-assets/space_backgrounds_1080x1920/${filename}`;
const lifestyle = (filename: string) => `/figma-assets/lifestyle_backgrounds_1080x1920/${filename}`;

export const SPACE_BACKGROUNDS: Record<string, string> = {
  "classic-deep-bg": space("01_classic_deep_space.png"),
  "purple-galaxy-bg": space("02_purple_galaxy.png"),
  "green-aurora-bg": space("04_green_aurora_space.png"),
  "meteor-shower-bg": space("09_meteor_shower.png"),
  "rainy-window-bg": lifestyle("03_rainy_window_room.png"),
  "moon-cloud-palace-bg": lifestyle("05_moon_cloud_palace.png"),
  "crystal-garden-hall-bg": lifestyle("06_crystal_garden_hall.png"),
  "star-observatory-room-bg": lifestyle("07_star_observatory_room.png")
};

export const getSpaceBackgroundUrl = (id?: string | null) => {
  return id && SPACE_BACKGROUNDS[id] ? SPACE_BACKGROUNDS[id] : undefined;
};
