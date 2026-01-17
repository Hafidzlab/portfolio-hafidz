"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/25 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold tracking-wide text-sky-300">
          Hafidz Maulana
        </a>

        <div className="hidden md:flex gap-7 text-sm text-white/70">
          {[
            ["Home", "#home"],
            ["About", "#about"],
            ["Experience", "#experience"],
            ["Projects", "#projects"],
            ["Tech Stack", "#tech"],
            ["Connect", "#connect"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
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
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
