import React from "react";
import ReactDOM from "react-dom/client";
import * as ReactJSXRuntime from "react/jsx-runtime";

type FigmaGlobals = {
  React: typeof React;
  ReactJSXRuntime: typeof ReactJSXRuntime;
  getAssetURL: (filename: string) => string;
};

type FigmaModule = {
  default: React.ComponentType;
};

type FigmaBundle = {
  Code0_8: () => Promise<FigmaModule>;
};

const globals = globalThis as typeof globalThis & { __GLOBALS__: FigmaGlobals };

// 행성 이미지를 planet_image 폴더의 파일로 매핑
const PLANET_IMAGE_MAP: Record<string, string> = {
  // mercury
  "25-3-compressed_v3-1.png": "planet_image/mercury.png",
  // venus
  "af45c682-e77a-41e4-83f8-22db2d745fa2.png": "planet_image/venus.png",
  // earth
  "6ab7871e-7d6d-44a6-a2db-b51b9cb0df19.png": "planet_image/earth.png",
  // mars
  "3a9fd7bc-7063-4e7a-b663-6fe85f5b0c20.png": "planet_image/Mars.png",
  // jupiter
  "927a2cb4-0d70-4fd0-973a-9c9d9b69f608.png": "planet_image/Jupiter.png",
  // saturn
  "daf5cddc-11cf-4178-be0e-552b957f86f3.png": "planet_image/Saturn.png",
  // uranus
  "8483f02a-32f0-4329-953f-691cb00c1d47.png": "planet_image/Uranus.png",
  // neptune
  "472a5467-3bce-465b-bfb1-857cbcec71d8.png": "planet_image/neptune.png",
  // sun - planet_image에 없으므로 기존 파일 유지
  // "d650f03c-c4c1-4e63-a050-e535f7dfbed3.png": 태양 이미지 없음
};

globals.__GLOBALS__ = {
  React,
  ReactJSXRuntime,
  getAssetURL: (filename: string) => {
    const mapped = PLANET_IMAGE_MAP[filename];
    return mapped ? `/figma-assets/${mapped}` : `/figma-assets/${filename}`;
  }
};

async function bootFigmaMakeApp() {
  const response = await fetch("/figma-original/index.js");
  if (!response.ok) {
    throw new Error(`Failed to load Figma bundle: ${response.status}`);
  }
  const source = await response.text();
  const bundleUrl = URL.createObjectURL(
    new Blob([source], { type: "text/javascript" })
  );
  const bundle = (await import(/* @vite-ignore */ bundleUrl)) as FigmaBundle;
  const module = await bundle.Code0_8();
  const App = module.default;

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

bootFigmaMakeApp().catch((error) => {
  console.error("Failed to boot Figma Make app", error);
});
