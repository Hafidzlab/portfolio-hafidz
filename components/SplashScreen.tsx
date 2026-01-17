"use client";

import { useEffect, useState } from "react";

export default function SplashScreen({
  title = "Hafidz Maulana",
  subtitle = "Entering the hafidz's universe...",
  durationMs = 1800,
}: {
  title?: string;
  subtitle?: string;
  durationMs?: number;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const id = window.setInterval(() => {
      const p = Math.min(100, ((Date.now() - start) / durationMs) * 100);
      setProgress(p);
      if (p >= 100) window.clearInterval(id);
    }, 16);

    return () => window.clearInterval(id);
  }, [durationMs]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#06060a]">
      <div className="relative z-10 text-center">
        {/* Ring */}
        <div className="mx-auto mb-8 h-44 w-44 rounded-full p-[5px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
          <div className="relative h-full w-full rounded-full bg-[#05070b]">
            <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black" />
            <div className="absolute right-6 top-16 h-4 w-4 rounded-full bg-cyan-300" />
            <div className="absolute right-4 top-20 h-3 w-3 rounded-full bg-purple-400" />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
          {title}
        </h1>

        <p className="mt-4 text-white/50 text-lg">{subtitle}</p>

        {/* Progress bar */}
        <div className="mx-auto mt-6 h-2 w-[360px] max-w-[80vw] overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 transition-[width] duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
