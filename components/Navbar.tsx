"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems: Array<[string, string]> = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Tech Stack", "#tech"],
  ["Connect", "#connect"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // lock scroll pas menu mobile kebuka
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const goTo = (href: string) => {
    setOpen(false);

    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.location.hash = href;
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/25 backdrop-blur border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between">
          <button
            type="button"
            onClick={() => goTo("#home")}
            className="text-xl font-bold tracking-wide text-sky-300"
          >
            Hafidz Maulana
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-7 text-sm text-white/70">
            {navItems.map(([label, href]) => (
              <button
                key={href}
                type="button"
                onClick={() => goTo(href)}
                className="
                  relative
                  hover:text-white transition
                  after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full
                  after:scale-x-0 after:bg-sky-300 after:transition after:duration-300
                  hover:after:scale-x-100
                  after:origin-left
                "
              >
                {label}
              </button>
            ))}
          </div>

          {/* Mobile button (☰) */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-xl border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 transition"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      {open && (
        <div className="fixed inset-0 z-[60]">
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />

          <div className="relative h-full w-full">
            {/* top row */}
            <div className="h-20 px-6 flex items-center justify-between border-b border-white/10">
              <div className="text-xl font-bold tracking-wide text-sky-300">
                Hafidz Maulana
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center h-11 w-11 rounded-xl border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 transition"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* menu items */}
            <div className="h-[calc(100%-80px)] flex flex-col items-center justify-center gap-9 text-center">
              {navItems.map(([label, href], idx) => (
                <button
                  key={href}
                  type="button"
                  onClick={() => goTo(href)}
                  className={`text-2xl font-medium transition ${
                    idx === 0 ? "text-sky-300" : "text-white/75 hover:text-white"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* spacer biar konten ga ketutup navbar */}
      <div className="h-20" />
    </>
  );
}
