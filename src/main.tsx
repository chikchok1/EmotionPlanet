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

globals.__GLOBALS__ = {
  React,
  ReactJSXRuntime,
  getAssetURL: (filename: string) => `/figma-assets/${filename}`
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
