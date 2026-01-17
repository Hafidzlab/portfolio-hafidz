"use client";

import { useEffect } from "react";
import { X, ExternalLink } from "lucide-react";

type ProjectLink = { label: string; href: string };

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tools: string[];
  image?: string;
  links?: ProjectLink[];
};

export default function ProjectModal({
  project,
  open,
  onClose,
}: {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open || !project) return null;

  return (
    <div className="fixed inset-0 z-[999]">
      {/* backdrop */}
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        aria-label="Close modal"
      />

      {/* center wrapper */}
      <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
        {/* modal */}
        <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 backdrop-blur shadow-2xl max-h-[85vh]">
          {/* close */}
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-white/5 p-2 text-white/80 hover:bg-white/10 transition"
            aria-label="Close"
          >
            <X size={18} />
          </button>

          {/* content scroll area */}
          <div className="overflow-y-auto max-h-[85vh]">
            {/* hero image (dibatesin biar ga segede gaban) */}
            <div className="relative w-full bg-gradient-to-br from-white/10 to-white/0">
              <div className="relative aspect-video w-full max-h-[320px] md:max-h-[360px] overflow-hidden">
                {project.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-contain bg-black/20"

                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-white/40 text-sm">
                    No preview image
                  </div>
                )}
              </div>
            </div>

            {/* body */}
            <div className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                {project.title}
              </h3>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* desc */}
                <div className="md:col-span-2">
                  <h4 className="text-purple-300 font-bold text-lg">
                    Description
                  </h4>
                  <p className="mt-3 text-white/75 leading-relaxed">
                    {project.longDescription ?? project.description}
                  </p>
                </div>

                {/* side */}
                <div>
                  <h4 className="text-purple-300 font-bold text-lg">
                    Technologies
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tools.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-purple-500/15 text-purple-200 px-3 py-1 text-xs border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <h4 className="mt-7 text-purple-300 font-bold text-lg">
                    Links
                  </h4>

                  <div className="mt-3 space-y-3">
                    {(project.links ?? []).length === 0 ? (
                      <p className="text-white/50 text-sm">No links available.</p>
                    ) : (
                      project.links!.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-gradient-to-r from-purple-500/70 to-sky-500/70 px-4 py-3 text-white font-semibold hover:opacity-95 transition"
                        >
                          <ExternalLink size={16} />
                          {l.label}
                        </a>
                      ))
                    )}
                  </div>
                </div>
              </div>

              <p className="mt-6 text-white/50 text-sm">
                 <span className="text-white/70"></span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
