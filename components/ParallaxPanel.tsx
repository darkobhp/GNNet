"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ParallaxPanelProps = {
  children: ReactNode;
  className?: string;
  intensity?: number;
};

export function ParallaxPanel({
  children,
  className,
  intensity = 20
}: ParallaxPanelProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;

    if (
      !node ||
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;

      if (!ref.current) {
        return;
      }

      const rect = ref.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
      const translateY = Math.max(
        -intensity,
        Math.min(intensity, (progress - 0.55) * intensity * 1.8)
      );

      ref.current.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0)`;
    };

    const onScroll = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(update);
    };

    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [intensity]);

  return (
    <div
      ref={ref}
      className={`will-change-transform motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
}
