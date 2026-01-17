"use client";

import type { ReactNode } from "react";

type HoverCardProps = {
  children?: ReactNode; // ✅ bikin optional biar build ga error
  className?: string;
};

export default function HoverCard({ children, className = "" }: HoverCardProps) {
  return (
    <div
      className={[
        "rounded-2xl border border-white/10 bg-white/5 backdrop-blur",
        "transform-gpu will-change-transform",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-2 hover:bg-white/10 hover:border-sky-300/30",
        "hover:shadow-2xl hover:shadow-cyan-500/20 hover:ring-1 hover:ring-sky-300/20",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
