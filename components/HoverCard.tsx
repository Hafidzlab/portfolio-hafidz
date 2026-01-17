import type { ReactNode } from "react";

type HoverCardProps = {
  children: ReactNode;
  className?: string;
};

export default function HoverCard({ children, className = "" }: HoverCardProps) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/5 ${className}`}>
      {children}
    </div>
  );
}
