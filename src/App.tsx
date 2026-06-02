import { useEffect, useState } from "react";
import { AppShell } from "./components/layout/AppShell";
import { EmotionPlanetProvider } from "./state/EmotionPlanetProvider";
import { CustomizePage } from "./pages/CustomizePage";
import { HistoryPage } from "./pages/HistoryPage";
import { HomePage } from "./pages/HomePage";
import { PlanetPage } from "./pages/PlanetPage";
import { ShopPage } from "./pages/ShopPage";
import { UniversePage } from "./pages/UniversePage";
import type { RoutePath } from "./types";

const routes: RoutePath[] = ["/", "/planet", "/universe", "/history", "/shop", "/customize"];

const resolveRoute = (): RoutePath => {
  const path = window.location.pathname;
  if (path === "/space") return "/universe";
  return routes.includes(path as RoutePath) ? (path as RoutePath) : "/";
};

export default function App() {
  const [route, setRoute] = useState<RoutePath>(resolveRoute);

  useEffect(() => {
    const handlePopState = () => setRoute(resolveRoute());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (path: RoutePath) => {
    window.history.pushState(null, "", path);
    setRoute(path);
  };

  return (
    <EmotionPlanetProvider>
      <AppShell route={route} navigate={navigate}>
        {route === "/" ? <HomePage navigate={navigate} /> : null}
        {route === "/planet" ? <PlanetPage navigate={navigate} /> : null}
        {route === "/universe" ? <UniversePage navigate={navigate} /> : null}
        {route === "/history" ? <HistoryPage /> : null}
        {route === "/shop" ? <ShopPage /> : null}
        {route === "/customize" ? <CustomizePage navigate={navigate} /> : null}
      </AppShell>
    </EmotionPlanetProvider>
  );
}
