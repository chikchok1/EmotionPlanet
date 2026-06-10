const preventDefault = (event: Event) => {
  event.preventDefault();
};

export const installViewportGuard = () => {
  let lastTouchEnd = 0;

  document.addEventListener("gesturestart", preventDefault, { passive: false });
  document.addEventListener("gesturechange", preventDefault, { passive: false });
  document.addEventListener("gestureend", preventDefault, { passive: false });

  document.addEventListener(
    "touchmove",
    (event) => {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    },
    { passive: false }
  );

  document.addEventListener(
    "touchend",
    (event) => {
      const now = Date.now();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    },
    { passive: false }
  );

  document.addEventListener("dblclick", preventDefault, { passive: false });
};
