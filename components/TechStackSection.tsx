"use client";

import { techStack } from "../data/techStack";

export default function TechStackSection() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {techStack.map((cat) => (
          <div
            key={cat.title}
            className="
              group h-full rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur
              flex flex-col overflow-hidden
              transform-gpu will-change-transform
              transition-all duration-300 ease-out
              hover:-translate-y-2
              hover:bg-white/[0.07]
              hover:border-sky-300/25
              hover:shadow-2xl hover:shadow-cyan-500/15
              hover:ring-1 hover:ring-sky-300/15
            "
          >
            {/* Header (fixed height biar sejajar) */}
            <div className="min-h-[92px] flex items-center justify-center">
              <h3 className="text-center text-white font-bold text-2xl md:text-3xl leading-tight">
                {cat.title}
              </h3>
            </div>

            {/* Items */}
            <div className="mt-6 grid grid-cols-2 gap-5 content-start">
              {cat.items.map((item) => (
                <div
                  key={item}
                  className="
                    group/item
                    rounded-2xl border border-white/10 bg-white/5
                    px-5 py-6 text-center
                    text-white/75 font-medium text-sm md:text-base
                    flex items-center justify-center
                    min-h-[88px]
                    transform-gpu will-change-transform
                    transition-all duration-300 ease-out
                    hover:-translate-y-1.5
                    hover:bg-white/[0.07]
                    hover:border-sky-300/20
                    hover:shadow-xl hover:shadow-cyan-500/10
                    hover:ring-1 hover:ring-sky-300/10
                  "
                >
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}
