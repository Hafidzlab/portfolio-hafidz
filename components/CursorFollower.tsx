"use client";

import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const move = (e: MouseEvent) => {
      glow.style.transform = `translate(${e.clientX - 220}px, ${e.clientY - 220}px)`;
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed left-0 top-0 z-[5] h-[440px] w-[440px] rounded-full blur-2xl opacity-70"
      style={{
        background:
          "radial-gradient(circle, rgba(56,189,248,0.35) 0%, rgba(59,130,246,0.18) 35%, rgba(2,6,23,0) 70%)",
      }}
    />
  );
}
