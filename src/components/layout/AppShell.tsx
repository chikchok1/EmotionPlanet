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
  const { state } = useEmotionPlanet();
  const backgroundUrl = getSpaceBackgroundUrl(state.equippedAccessories.background);

  return (
    <div className="app-root">
      <div className="desktop-starfield" />
      <main
        className="app-frame"
        style={{
          backgroundImage: `linear-gradient(rgba(6,7,20,0.12), rgba(6,7,20,0.2)), url('${backgroundUrl}')`
        }}
      >
        <div className="page-content">{children}</div>
        <BottomNav activeRoute={route} navigate={navigate} />
      </main>
    </div>
  );
}
