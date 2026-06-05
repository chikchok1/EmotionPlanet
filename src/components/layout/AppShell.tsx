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
  const { state, getEquippedForPlanet, viewingPlanetIndex } = useEmotionPlanet();
  const backgroundPlanetIndex =
    route === "/planet" || route === "/shop" || route === "/customize"
      ? viewingPlanetIndex
      : state.currentPlanetIndex;
  const equipped = getEquippedForPlanet(backgroundPlanetIndex);
  const backgroundUrl = getSpaceBackgroundUrl(equipped.background);
  const frameStyle = backgroundUrl
    ? ({
        "--app-frame-background": `linear-gradient(rgba(4,5,16,0.18), rgba(4,5,16,0.34)), url('${backgroundUrl}')`
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
