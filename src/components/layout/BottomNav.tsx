import type { ReactNode } from "react";
import type { RoutePath } from "../../types";

type BottomNavProps = {
  activeRoute: RoutePath;
  navigate: (path: RoutePath) => void;
};

const navItems: Array<{ path: RoutePath; label: string; icon: ReactNode }> = [
  {
    path: "/",
    label: "홈",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/>
        <path d="M9 21V12h6v9"/>
      </svg>
    )
  },
  {
    path: "/planet",
    label: "행성",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5"/>
        <ellipse cx="12" cy="12" rx="11" ry="4.5" transform="rotate(-20 12 12)"/>
      </svg>
    )
  },
  {
    path: "/universe",
    label: "우주",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    )
  },
  {
    path: "/history",
    label: "기록",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2"/>
        <line x1="7" y1="9" x2="17" y2="9"/>
        <line x1="7" y1="13" x2="13" y2="13"/>
      </svg>
    )
  },
  {
    path: "/shop",
    label: "상점",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    )
  }
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
            aria-label={item.label}
          >
            <span className="bottom-nav-icon">{item.icon}</span>
            <span className="bottom-nav-label">{item.label}</span>
            {active && <span className="bottom-nav-dot" />}
          </button>
        );
      })}
    </nav>
  );
}
