import type { RoutePath } from "../../types";

type BottomNavProps = {
  activeRoute: RoutePath;
  navigate: (path: RoutePath) => void;
};

const navItems: Array<{ path: RoutePath; icon: string; label: string }> = [
  { path: "/", icon: "⌂", label: "홈" },
  { path: "/planet", icon: "◎", label: "행성" },
  { path: "/universe", icon: "✦", label: "우주" },
  { path: "/history", icon: "▣", label: "기록" },
  { path: "/shop", icon: "▱", label: "상점" }
];

export function BottomNav({ activeRoute, navigate }: BottomNavProps) {
  return (
    <nav className="bottom-nav" aria-label="주요 화면">
      {navItems.map((item) => {
        const active = item.path === "/" ? activeRoute === "/" : activeRoute === item.path;
        return (
          <button
            key={item.path}
            type="button"
            className={`bottom-nav-item${active ? " active" : ""}`}
            onClick={() => navigate(item.path)}
          >
            <span className="bottom-nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
