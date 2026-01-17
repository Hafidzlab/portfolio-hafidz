"use client";

import Image from "next/image";
import { ExternalLink, Play } from "lucide-react";
import type { Project } from "../data/projects";

export default function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const demoLink = project.links?.find((l) =>
    l.label.toLowerCase().includes("demo")
  );

  const githubLink = project.links?.find((l) =>
    l.label.toLowerCase().includes("github")
  );

  return (
    <button
      type="button"
      onClick={onClick}
      className="
        text-left group w-full
        rounded-2xl border border-white/10
        bg-white/5 backdrop-blur
        overflow-hidden
        transform-gpu will-change-transform
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:bg-white/[0.07]
        hover:border-sky-300/25
        hover:shadow-2xl hover:shadow-cyan-500/15
        hover:ring-1 hover:ring-sky-300/15
      "
    >
      {/* Thumbnail */}
      <div className="relative w-full overflow-hidden bg-gradient-to-br from-white/10 to-white/0">
        <div className="relative aspect-video w-full overflow-hidden flex items-start">

          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              // ✅ kunci utama biar selalu "naik"
              className="
                object-cover object-top
                transition-transform duration-500 ease-out
                group-hover:scale-[1.04]
              "
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center text-white/40 text-sm">
              No preview image
            </div>
          )}

          {/* overlay */}
          <div
            className="
              pointer-events-none absolute inset-0
              bg-gradient-to-t from-black/40 via-black/0 to-black/0
              opacity-0 transition-opacity duration-300
              group-hover:opacity-100
            "
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 min-h-[260px] flex flex-col">
        <div className="flex-1">
          <h3 className="text-white font-bold text-xl leading-snug line-clamp-2">
            {project.title}
          </h3>

          <p className="mt-2 text-white/70 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tools.map((t) => (
              <span
                key={t}
                className="
                  rounded-full
                  bg-purple-500/20 text-purple-200
                  px-3 py-1 text-xs
                  border border-purple-400/20
                  transition-colors duration-300
                  group-hover:border-purple-300/30
                "
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-5">
          {demoLink ? (
            <a
              href={demoLink.href}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="
                inline-flex items-center gap-2
                rounded-xl px-4 py-2
                text-sm font-semibold text-white
                bg-gradient-to-r from-purple-500 to-cyan-400
                hover:opacity-90 transition
              "
            >
              <Play size={16} />
              Demo
              <ExternalLink size={14} className="opacity-80" />
            </a>
          ) : githubLink ? (
            <a
              href={githubLink.href}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="
                inline-flex items-center gap-2
                rounded-xl px-4 py-2
                text-sm font-semibold text-white
                bg-gradient-to-r from-purple-500 to-cyan-400
                hover:opacity-90 transition
              "
            >
              Source Code
              <ExternalLink size={14} className="opacity-80" />
            </a>
          ) : null}

          <div className="mt-4 text-white/50 text-sm">Click to view details →</div>
        </div>
      </div>
    </button>
  );
}
