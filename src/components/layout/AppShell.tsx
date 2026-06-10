import type { CSSProperties, ReactNode } from "react";
import { getSpaceBackgroundUrl } from "../../data/backgrounds";
import { useEmotionPlanet } from "../../state/EmotionPlanetProvider";
import type { RoutePath } from "../../types";
import { BottomNav } from "./BottomNav";

type AppShellProps = {
  route: RoutePath;
  navigate: (path: RoutePath) => void;
  children: ReactNode;
};

export function AppShell({ route, navigate, children }: AppShellProps) {
  const { state, getEquippedForPlanet, previewBackgroundId, viewingPlanetIndex } = useEmotionPlanet();
  const backgroundPlanetIndex =
    route === "/planet" || route === "/shop" || route === "/customize"
      ? viewingPlanetIndex
      : state.currentPlanetIndex;
  const equipped = getEquippedForPlanet(backgroundPlanetIndex);
  const backgroundId = route === "/shop" && previewBackgroundId ? previewBackgroundId : equipped.background;
  const backgroundUrl = getSpaceBackgroundUrl(backgroundId);
  const frameStyle = backgroundUrl
    ? ({
        "--app-frame-background": `url('${backgroundUrl}')`
      } as CSSProperties)
    : undefined;

  return (
    <div className="app-root">
      <div className="desktop-starfield" />
      <main
        className={`app-frame${backgroundUrl ? " has-background" : ""}`}
        style={frameStyle}
      >
        <div className="page-content">{children}</div>
        <BottomNav activeRoute={route} navigate={navigate} />
      </main>
    </div>
  );
}
