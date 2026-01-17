"use client";

import { Mail, Linkedin, Github, Instagram, MessageCircle } from "lucide-react";

const links = [
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
    value: "@hafidzmaulana21_",
    href: "https://instagram.com/hafidzmaulana21_",
    icon: <Instagram className="h-6 w-6 text-sky-300" />,
  },
  {
    label: "LINE",
    value: "hafidz003",
    href: "https://line.me/ti/p/~hafidz003",
    icon: <MessageCircle className="h-6 w-6 text-sky-300" />,
  },
];

export default function ConnectSection() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {links.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
            className="
              group
              rounded-2xl border border-white/10 bg-white/5 backdrop-blur
              px-6 py-5
              min-h-[110px]
              flex items-center gap-4
              transition
              hover:bg-white/10 hover:border-sky-300/30 hover:-translate-y-1
              hover:shadow-2xl hover:shadow-cyan-500/10
            "
          >
            <div className="shrink-0">{item.icon}</div>

            <div className="min-w-0 text-left">
              <div className="font-semibold text-white text-base">{item.label}</div>
              <div className="text-sm text-white/55 truncate">{item.value}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
