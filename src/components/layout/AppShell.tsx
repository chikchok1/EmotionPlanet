import type { ReactNode } from "react";
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

  return (
    <div className="app-root">
      <div className="desktop-starfield" />
      <main
        className="app-frame"
        style={{
          backgroundImage: backgroundUrl
            ? `linear-gradient(rgba(4,5,16,0.08), rgba(4,5,16,0.18)), url('${backgroundUrl}')`
            : undefined
        }}
      >
        <div className="page-content">{children}</div>
        <BottomNav activeRoute={route} navigate={navigate} />
      </main>
    </div>
  );
}
