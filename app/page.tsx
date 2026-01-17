"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Building2, MapPin, CalendarDays } from "lucide-react";

import SplashScreen from "../components/SplashScreen";
import Navbar from "../components/Navbar";
import TypingText from "../components/TypingText";

import ProjectCard from "../components/ProjectCard";
import ProjectModal, { Project as ModalProject } from "../components/ProjectModal";

import TechStackSection from "../components/TechStackSection";
import ConnectSection from "../components/ConnectSection";

import { projects } from "../data/projects";

const Starfield = dynamic(() => import("../components/Starfield"), { ssr: false });
const CursorGlow = dynamic(() => import("../components/CursorFollower"), { ssr: false });

function Section({
  id,
  title,
  children,
  className = "",
}: {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative z-10 min-h-screen flex items-center justify-center pt-5 text-center px-6 ${className}`}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-sky-200 via-blue-300 to-cyan-200 bg-clip-text text-transparent drop-shadow">
          {title}
        </h2>

        <div className="mt-4 md:mt-6">{children}</div>
      </div>
    </section>
  );
}

const experiences = [
  {
    title: "Web - Based Internal Monitoring System",
    company: "PT. Sugity Creatives",
    location: "Cikarang, West Java, Indonesia",
    date: "November 2025 – Februari 2026",
    description:
      "Developing internal web applications using Microsoft Power Apps with Microsoft Lists as a database for recording and monitoring operational data. Designing data input flows, validation, and dashboard displays so that data is structured and easy to analyze. Conducting testing, bug fixes, and feature improvements according to internal user needs.",
  },
  {
    title: "PLC - Based Control System Analysis Oil & Gas",
    company: "KSO QEI Loyak Talang Gula",
    location: "Palembang, South Sumatra, Indonesia",
    date: "Oktober 2025",
    description:
      "Studying process and instrumentation systems in the oil and gas industry, particularly gas metering systems and PLC-based control systems. Performing work and reliability analysis of PLC automation control systems on Gas Metering Skid 12-FQ-301 after optimization of flow transmitter and pressure transmitter instrumentation. Analyzing control system performance based on operational data, instrumentation configuration, and actual field conditions.",
  },
  {
    title: "Mechanical Design Training – AutoCAD",
    company: "PT. Tri Asa Indonesia",
    location: "Bekasi, West Java, Indonesia",
    date: "September 2025",
    description:
      "Learning the basics of AutoCAD for technical drawing and mechanical component modeling. Creating models and working drawings of small spare parts according to specifications and technical drawing standards. Revising designs based on evaluation and functional requirements.",
  },
  {
    title: "Basic Control Systems Practicum Laboratory Assistant",
    company: "Teknologi Rekayasa Otomasi Universitas Diponegoro",
    location: "Semarang, Central Java, Indonesia",
    date: "September – Desember 2024",
    description:
      "Leading weekly lab sessions for 20+ students in testing and developing practical modules. Conducting preliminary tests and explaining module material to students. Guiding and directing students to understand practical concepts and their implementation during laboratory sessions.",
  },
];

export default function Home() {
  // splash + mount guard
  const [showSplash, setShowSplash] = useState(true);
  const [mounted, setMounted] = useState(false);

  // modal state
  const [selected, setSelected] = useState<ModalProject | null>(null);

   // slider state (responsive)
const [page, setPage] = useState(0);
const [perPage, setPerPage] = useState(3);

useEffect(() => {
  const update = () => {
    const nextPerPage = window.innerWidth < 768 ? 1 : 3;

    // cuma update kalau berubah (biar gak reset random)
    setPerPage((prevPerPage) => {
      if (prevPerPage === nextPerPage) return prevPerPage;

      // kalau perPage berubah, pastiin page masih valid
      setPage((p) => {
        const nextPages = Math.max(1, Math.ceil(projects.length / nextPerPage));
        return Math.min(p, nextPages - 1);
      });

      return nextPerPage;
    });
  };

  update();
  window.addEventListener("resize", update);
  return () => window.removeEventListener("resize", update);
}, []);

const pages = Math.max(1, Math.ceil(projects.length / perPage));
const prev = () => setPage((p) => (p - 1 + pages) % pages);
const next = () => setPage((p) => (p + 1) % pages);



  useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => setShowSplash(false), 1800);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) return null;

  if (showSplash) {
    return (
      <SplashScreen
        title="Hafidz Maulana"
        subtitle="Entering the hafidz's universe..."
        durationMs={3000}
      />
    );
  }

  return (
    <>
      <Navbar />
      <Starfield />
      <CursorGlow />

      {/* HOME */}
      <main
  id="home"
  className="relative z-10 min-h-screen flex items-center justify-center pt-24 text-center px-6"
>
  <div className="max-w-4xl relative -translate-y-20 md:-translate-y-24">
    <h1 className="text-6xl md:text-6xl font-extrabold bg-gradient-to-r from-sky-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent drop-shadow">
      Hello World, I&apos;m Hafidz!
    </h1>

    <p className="mt-4 text-lg md:text-2xl text-white/85">
      I&apos;m passionate about{" "}
      <TypingText
        words={[
          "Automation Engineering",
          "Internet of Things",
          "Embedded Systems",
        ]}
      />
    </p>

    <p className="mt-6 text-sm md:text-lg text-white/60">
      Automation &amp; IoT Engineering Student — building practical projects
      with sensors, data, and web dashboards.
    </p>
  </div>
</main>


      {/* ABOUT */}
      <Section id="about" title="About Me">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* FOTO */}
          <div className="flex justify-center md:justify-end md:pr-16 md:pt-0">
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full p-[5px] bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300 shadow-xl shadow-cyan-500/20 animate-float">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-black/30">
                <Image
                  src="/Hafidz.jpeg"
                  alt="Hafidz"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* TEKS */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7 backdrop-blur md:-ml-2 text-left">
            <p className="text-sm md:text-base leading-relaxed text-white/75">
              I am an active Automation Engineering Technology student at Diponegoro
              University with a strong interest in industrial automation, control
              systems, and the Internet of Things (IoT). I have experience in
              developing automation and monitoring systems using microcontrollers
              and sensors, as well as designing and testing electronic and control-based
              systems.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/hafidzmaulana22"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-black bg-gradient-to-r from-sky-400 to-cyan-300 hover:opacity-90 transition"
              >
                LinkedIn
              </a>

              <a
                href="/CV-HafidzMaulana.pdf"
                download
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-white border border-white/15 bg-white/5 hover:bg-white/10 transition"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* EXPERIENCE */}
<Section id="experience" title="Experience">
  <div className="relative">
    {/* GARIS TIMELINE */}
    {/* Mobile: kiri, Desktop: tengah */}
    <div className="pointer-events-none absolute left-4 top-0 h-full w-[3px] bg-gradient-to-b from-sky-400/0 via-sky-300/60 to-sky-400/0 md:left-1/2 md:w-[4px] md:-translate-x-1/2" />

    <div className="space-y-14 md:space-y-16">
      {experiences.map((exp, idx) => {
        const isLeft = idx % 2 === 0;

        return (
          <div
            key={exp.title}
            className="relative grid grid-cols-1 md:grid-cols-2 items-start"
          >
            {/* TITIK TIMELINE */}
            {/* Mobile: kiri, Desktop: tengah */}
            <div className="absolute left-4 top-7 z-10 md:left-1/2 md:-translate-x-1/2">
              <div className="h-3.5 w-3.5 md:h-4 md:w-4 rounded-full bg-sky-300 ring-4 ring-sky-300/25 shadow-lg shadow-sky-400/40" />
            </div>

            {/* CARD */}
            <div
              className={
                isLeft
                  ? "md:col-start-1 md:pr-12"
                  : "md:col-start-2 md:pl-12"
              }
            >
              {/* Mobile: kasih padding kiri biar card ga nabrak garis */}
              <div className="pl-10 md:pl-0">
                <div
                  className="
                    text-left
                    rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur
                    transform-gpu will-change-transform
                    transition-all duration-300 ease-out
                    hover:-translate-y-2
                    hover:bg-white/10
                    hover:border-sky-300/30
                    hover:shadow-2xl hover:shadow-cyan-500/20
                    hover:ring-1 hover:ring-sky-300/20
                  "
                >
                  <h3 className="text-white font-bold text-lg md:text-xl">
                    {exp.title}
                  </h3>

                  <div className="mt-3 space-y-2 text-white/70">
                    <div className="flex items-center gap-2">
                      <Building2 size={18} className="text-sky-300" />
                      <span>{exp.company}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={18} className="text-sky-300" />
                      <span>{exp.location}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <CalendarDays size={18} className="text-sky-300" />
                      <span>{exp.date}</span>
                    </div>
                  </div>

                  <p className="mt-5 text-white/70 text-sm md:text-base leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>

            {/* KOLOM KOSONG BIAR SIMETRIS (desktop aja) */}
            <div
              className={
                isLeft
                  ? "hidden md:block md:col-start-2"
                  : "hidden md:block md:col-start-1"
              }
            />
          </div>
        );
      })}
    </div>
  </div>
</Section>


      {/* PROJECTS */}
      <Section id="projects" title="Projects">
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {Array.from({ length: pages }).map((_, pageIndex) => {
                const start = pageIndex * perPage;
                const items = projects.slice(start, start + perPage);

                return (
                  <div key={pageIndex} className="w-full shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {items.map((project) => (
                        <ProjectCard
                          key={(project as any).id ?? (project as any).title}
                          project={project as any}
                          onClick={() => setSelected(project as any)}
                        />
                      ))}

                      {items.length < perPage &&
                        Array.from({ length: perPage - items.length }).map((__, i) => (
                          <div key={`empty-${pageIndex}-${i}`} className="hidden md:block" />
                        ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {pages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="h-12 w-12 rounded-xl border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 transition"
                aria-label="Previous"
                type="button"
              >
                ‹
              </button>

              <button
                onClick={next}
                className="h-12 w-12 rounded-xl border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 transition"
                aria-label="Next"
                type="button"
              >
                ›
              </button>
            </div>
          )}

          {pages > 1 && (
            <div className="mt-4 flex justify-center gap-2">
              {Array.from({ length: pages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  type="button"
                  className={`h-2 rounded-full transition ${
                    i === page
                      ? "w-10 bg-purple-400/90"
                      : "w-2 bg-white/20 hover:bg-white/35"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          )}

          <ProjectModal
            open={!!selected}
            project={selected as any}
            onClose={() => setSelected(null)}
          />
        </div>
      </Section>

      {/* TECH STACK */}
      <Section id="tech" title="Tech Stack">
        <TechStackSection />
      </Section>

      {/* CONNECT */}
      <Section id="connect" title="Let's Connect" className="relative">
        <p className="mt-6 mb-10 text-lg md:text-xl text-white/85 text-center max-w-2xl mx-auto leading-relaxed">
          I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
        </p>

        <ConnectSection />
      </Section>
    </>
  );
}
