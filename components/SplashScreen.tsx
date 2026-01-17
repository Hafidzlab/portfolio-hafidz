"use client";

import { useEffect, useState } from "react";

export default function SplashScreen({
  title,
  subtitle,
  durationMs = 3000,
}: {
  title: string;
  subtitle: string;
  durationMs?: number;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      setProgress(t);
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [durationMs]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-40 h-[520px] w-[520px] rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute -left-40 bottom-40 h-[520px] w-[520px] rounded-full bg-cyan-500/15 blur-3xl" />
      </div>

      {/* stars (simple dots) */}
      <div className="pointer-events-none absolute inset-0 opacity-80">
        {Array.from({ length: 22 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-[3px] w-[3px] rounded-full bg-white/40"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              opacity: 0.2 + ((i * 17) % 60) / 100,
              transform: `scale(${0.7 + ((i * 13) % 50) / 100})`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        {/* ORBIT ICON */}
        <div className="relative mb-8 h-44 w-44">
          {/* outer ring */}
          <div className="absolute inset-0 rounded-full ring-4 ring-white/5" />

          {/* rotating gradient ring */}
          <div className="absolute inset-0 rounded-full splash-rotate">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-90 blur-[0.2px]" />
            <div className="absolute inset-[10px] rounded-full bg-black" />
          </div>

          {/* orbit dots (move) */}
          <div className="absolute inset-0 splash-orbit">
            <span className="absolute left-1/2 top-3 h-4 w-4 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.55)]" />
            <span className="absolute right-6 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-purple-300 shadow-[0_0_18px_rgba(192,132,252,0.55)]" />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-200 bg-clip-text text-transparent">
          {title}
        </h1>

        <p className="mt-3 text-white/45 text-base md:text-lg">{subtitle}</p>

        {/* progress bar */}
        <div className="mt-8 h-[6px] w-[320px] max-w-[80vw] rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300"
            style={{ width: `${Math.round(progress * 100)}%` }}
          />
        </div>

        {/* big subtle orbit ring behind (moves, not too bright) */}
        <div className="pointer-events-none absolute right-[8%] top-[52%] hidden md:block">
          <div className="relative h-[420px] w-[420px] splash-rotate-slow opacity-35">
            <div className="absolute inset-0 rounded-full ring-2 ring-purple-400/20" />
            <div className="absolute inset-[60px] rounded-full ring-1 ring-cyan-300/15" />
            <span className="absolute left-1/2 top-[-6px] h-3 w-3 -translate-x-1/2 rounded-full bg-white/40" />
            <span className="absolute right-[18px] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-white/30" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes splashRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes splashOrbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .splash-rotate {
          animation: splashRotate 2.8s linear infinite;
        }
        .splash-orbit {
          animation: splashOrbit 1.6s linear infinite;
        }
        .splash-rotate-slow {
          animation: splashRotate 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
