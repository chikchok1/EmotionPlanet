export const SPACE_BACKGROUNDS: Record<string, string> = {
  "classic-deep-bg": "01_classic_deep_space.png",
  "purple-galaxy-bg": "02_purple_galaxy.png",
  "cyan-nebula-bg": "03_cyan_nebula.png",
  "green-aurora-bg": "04_green_aurora_space.png",
  "red-mars-bg": "05_red_mars_night.png",
  "golden-star-bg": "06_golden_star_field.png",
  "pink-dream-bg": "07_pink_dream_space.png",
  "blue-crystal-bg": "08_blue_crystal_space.png",
  "meteor-shower-bg": "09_meteor_shower.png",
  "moon-bg": "10_moonlit_space.png",
  "cosmic-vortex-bg": "11_cosmic_vortex.png",
  "distant-planets-bg": "12_distant_planets.png"
};

export const getSpaceBackgroundUrl = (id?: string | null) => {
  const filename = id ? SPACE_BACKGROUNDS[id] : undefined;
  return `/figma-assets/space_backgrounds_1080x1920/${filename ?? SPACE_BACKGROUNDS["cosmic-vortex-bg"]}`;
};
