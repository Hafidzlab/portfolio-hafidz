"use client";

import { Mail, Phone, Linkedin, Github, Instagram, MessageCircle } from "lucide-react";

const items = [

  {
  label: "Email",
  value: "fidzlana22@gmail.com",
  href:
    "mailto:fidzlana22@gmail.com" +
    "?subject=Portfolio%20Inquiry" +
    "&body=Hi%20Hafidz,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20discuss...",
  icon: <Mail className="h-6 w-6 text-sky-300" />,
  },
  {
    label: "LinkedIn",
    value: "hafidzmaulana22",
    href: "https://www.linkedin.com/in/hafidzmaulana22",
    icon: <Linkedin className="h-6 w-6 text-sky-300" />,
  },
  {
    label: "GitHub",
    value: "Hafidzlab",
    href: "https://github.com/Hafidzlab",
    icon: <Github className="h-6 w-6 text-sky-300" />,
  },
  {
    label: "Instagram",
    value: "@hafizdmaulana21_",
    href: "https://instagram.com/hafizdmaulana21_",
    icon: <Instagram className="h-6 w-6 text-sky-300" />,
  },
  {
    label: "LINE",
    value: "hafizd003",
    href: "https://line.me/ti/p/hafizd003",
    icon: <MessageCircle className="h-6 w-6 text-sky-300" />,
  },
];

export default function ConnectSection() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">

        {items.map((it) => (
          <a
            key={it.label}
            href={it.href}
            target="_blank"
            rel="noreferrer"
            className="
              group
              rounded-2xl bg-white/5 border border-white/10 backdrop-blur
              p-6
              flex items-center gap-4
              transform-gpu will-change-transform
              transition-all duration-300 ease-out
              hover:-translate-y-2
              hover:bg-white/[0.08]
              hover:border-sky-300/30
              hover:shadow-2xl hover:shadow-cyan-500/20
              hover:ring-1 hover:ring-sky-300/15
            "
          >
            <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
              {it.icon}
            </div>

            <div className="min-w-0">
              <div className="text-white font-bold text-lg">{it.label}</div>
              <div className="text-white/60 text-sm truncate">{it.value}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
