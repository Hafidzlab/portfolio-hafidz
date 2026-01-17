"use client";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t border-white/10 bg-black/30 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold text-sky-300">Hafidz Maulana</h3>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Automation &amp; IoT Engineering Student — building practical projects
              with sensors, data, and web dashboards.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-y-4 text-sm text-white/70 sm:grid-cols-3">
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Experience", "#experience"],
                ["Projects", "#projects"],
                ["Tech Stack", "#tech"],
                ["Connect", "#connect"],
              ].map(([label, href]) => (
                <a key={label} href={href} className="hover:text-sky-300 transition">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="my-8 h-px w-full bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-white/50 sm:flex-row">
          <p>© 2026 Hafidz Maulana</p>
          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
