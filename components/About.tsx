"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const skills = ["Web Development", "UI/UX Design", "AI Integration", "Automation"];
const stats = [
  { value: "100%", label: "Satisfied Clients" },
  { value: "Mar 2026", label: "Agency Founded" },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  /* ── Scroll-triggered fade-in ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ── Mouse parallax ── */
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setMouse({
      x: ((e.clientX - cx) / rect.width) * 10,
      y: ((e.clientY - cy) / rect.height) * 10,
    });
  };
  const handleMouseLeave = () => setMouse({ x: 0, y: 0 });

  return (
    <>
      {/* ── Global keyframe animations ── */}
      <style>{`
        @keyframes blob1 {
          0%,100% { transform: translate(0px,0px) scale(1); }
          33%      { transform: translate(30px,-20px) scale(1.08); }
          66%      { transform: translate(-20px,15px) scale(0.95); }
        }
        @keyframes blob2 {
          0%,100% { transform: translate(0px,0px) scale(1); }
          33%      { transform: translate(-25px,20px) scale(1.06); }
          66%      { transform: translate(20px,-15px) scale(0.97); }
        }
        @keyframes blob3 {
          0%,100% { transform: translate(0px,0px) scale(1); }
          50%      { transform: translate(15px,25px) scale(1.05); }
        }
        @keyframes fadeLeft {
          from { opacity:0; transform:translateX(-40px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes fadeRight {
          from { opacity:0; transform:translateX(40px); }
          to   { opacity:1; transform:translateX(0); }
        }
        .about-left  { opacity:0; }
        .about-right { opacity:0; }
        .about-left.visible  { animation: fadeLeft  0.75s ease-out forwards; }
        .about-right.visible { animation: fadeRight 0.75s 0.15s ease-out forwards; }
      `}</style>

      <section
        id="about"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "0 16px",
          margin: "64px auto",
        }}
      >
        {/* ════════════ OUTER CARD ════════════ */}
        <div
          ref={sectionRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="w-full relative overflow-hidden rounded-[40px]"
          style={{
            maxWidth: "1250px",
            background: "linear-gradient(135deg, #5b21b6 0%, #7c3aed 45%, #a78bfa 100%)",
            boxShadow: "0 25px 80px rgba(109,40,217,0.35), 0 8px 30px rgba(109,40,217,0.18), inset 0 1px 1px rgba(255,255,255,0.12)",
          }}
        >
          <div className="relative" style={{ padding: "clamp(24px, 5vw, 64px)" }}>
          {/* ── Noise / grain texture ── */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
              backgroundRepeat: "repeat",
              backgroundSize: "150px",
              opacity: 0.35,
              zIndex: 0,
            }}
          />

          {/* ── Floating gradient blob 1 — purple ── */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: "420px",
              height: "420px",
              background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)",
              filter: "blur(80px)",
              opacity: 0.35,
              borderRadius: "9999px",
              top: "-80px",
              right: "-60px",
              animation: "blob1 10s ease-in-out infinite",
              zIndex: 0,
            }}
          />
          {/* ── Blob 2 — blue ── */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: "340px",
              height: "340px",
              background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)",
              filter: "blur(80px)",
              opacity: 0.25,
              borderRadius: "9999px",
              bottom: "-60px",
              left: "10%",
              animation: "blob2 12s ease-in-out infinite",
              zIndex: 0,
            }}
          />
          {/* ── Blob 3 — pink ── */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: "260px",
              height: "260px",
              background: "radial-gradient(circle, #EC4899 0%, transparent 70%)",
              filter: "blur(80px)",
              opacity: 0.18,
              borderRadius: "9999px",
              top: "40%",
              left: "35%",
              animation: "blob3 9s ease-in-out infinite",
              zIndex: 0,
            }}
          />

          {/* ────────── HEADER ────────── */}
          <div
            className="flex flex-col md:flex-row md:items-center justify-between relative"
            style={{
              borderBottom: "1px solid rgba(255,255,255,0.15)",
              paddingBottom: "20px",
              marginBottom: "44px",
              gap: "24px",
              zIndex: 1,
            }}
          >
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-4xl sm:text-5xl md:text-[56px] leading-none text-white tracking-tight">
              About.
            </h2>
            <p
              className="font-[family-name:var(--font-inter)] text-base md:text-lg max-w-xs md:text-right"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              The mind behind Synappsify.
            </p>
          </div>

          {/* ────────── TWO-COLUMN GRID ────────── */}
          <div
            className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr] relative"
            style={{ gap: "44px", alignItems: "stretch", zIndex: 1 }}
          >
            {/* ══════ LEFT — Text ══════ */}
            <div
              ref={leftRef}
              className={`about-left flex flex-col justify-between gap-8${visible ? " visible" : ""}`}
              style={{
                /* On mobile: show AFTER image (order 2) */
                order: 2,
                transform: `translate3d(${-mouse.x * 0.4}px, ${-mouse.y * 0.4}px, 0)`,
                transition: "transform 0.25s ease-out",
              }}
            >
              {/* Heading + body */}
              <div>
                <h3
                  className="font-[family-name:var(--font-syne)] font-bold"
                  style={{
                    fontSize: "clamp(26px, 4vw, 38px)",
                    marginBottom: "20px",
                    lineHeight: 1.2,
                    background: "linear-gradient(90deg, #ffffff 0%, #ddd6fe 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  One mind, clear vision.
                </h3>

                <div className="space-y-4" style={{ maxWidth: "520px" }}>
                  <p
                    className="font-[family-name:var(--font-inter)] text-[15px] md:text-[16px] leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.88)" }}
                  >
                    I&apos;m Karmugilan — the sole mind behind Synappsify. No big team, no unnecessary meetings, no wasted hours. As a young developer with innovative thinking, I work efficiently, with quality.
                  </p>
                  <p
                    className="font-[family-name:var(--font-inter)] text-[15px] md:text-[16px] leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    I focus on building websites and solutions that actually work — clean, fast, and built with purpose.
                  </p>
                  <p
                    className="font-[family-name:var(--font-inter)] text-[15px] md:text-[16px] leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    Every project is handled with attention to detail, without unnecessary complexity.
                  </p>
                </div>
              </div>

              {/* Stats cards */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="group transition-all duration-300 hover:-translate-y-1 cursor-default"
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      borderRadius: "16px",
                      padding: "22px 20px",
                      border: "1px solid rgba(255,255,255,0.15)",
                      backdropFilter: "blur(12px)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        "0 10px 40px rgba(124,58,237,0.4)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    <span
                      className="font-[family-name:var(--font-syne)] font-bold text-white block"
                      style={{ fontSize: "26px", marginBottom: "5px" }}
                    >
                      {stat.value}
                    </span>
                    <span
                      className="font-[family-name:var(--font-inter)] text-sm"
                      style={{ color: "rgba(255,255,255,0.7)" }}
                    >
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-[family-name:var(--font-inter)] font-medium text-sm"
                    style={{
                      padding: "9px 20px",
                      borderRadius: "999px",
                      background: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      color: "rgba(255,255,255,0.9)",
                      backdropFilter: "blur(8px)",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* ══════ RIGHT — Image Card ══════ */}
            <div
              ref={rightRef}
              className={`about-right${visible ? " visible" : ""}`}
              style={{
                /* On mobile: show BEFORE text (order 1) */
                order: 1,
                transform: `translate3d(${mouse.x * 0.5}px, ${mouse.y * 0.5}px, 0)`,
                transition: "transform 0.25s ease-out",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="group relative w-full mx-auto rounded-[16px] overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                style={{
                  maxWidth: "390px", // Frame hugs image width
                  background: "transparent",
                  padding: "0",
                  boxShadow:
                    "0 0 0 1px rgba(255,255,255,0.1), 0 20px 60px rgba(124,58,237,0.4)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Image — exactly 100% width, natural height perfectly hugged by frame */}
                <img
                  src="/images/karmugil.jpeg"
                  alt="Karmugilan — Founder of Synappsify"
                  className="w-full h-auto block"
                />

                {/* Bottom gradient */}
                <div
                  className="absolute bottom-0 left-0 right-0 pointer-events-none"
                  style={{
                    height: "160px",
                    background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)",
                    zIndex: 2,
                  }}
                />

                {/* Badge — TOP RIGHT */}
                <div className="absolute top-4 right-4 z-20">
                  <span
                    className="inline-flex items-center gap-2 font-[family-name:var(--font-inter)] font-medium text-xs text-white"
                    style={{
                      padding: "6px 12px",
                      borderRadius: "999px",
                      background: "#7c3aed",
                      boxShadow: "0 4px 14px rgba(109,40,217,0.55)",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#22C55E",
                        flexShrink: 0,
                        boxShadow: "0 0 6px rgba(34,197,94,0.9)",
                      }}
                    />
                    Founder &amp; Developer
                  </span>
                </div>

                {/* Name — BOTTOM LEFT */}
                <div className="absolute bottom-0 left-0 z-20" style={{ padding: "18px 20px" }}>
                  <p
                    className="font-[family-name:var(--font-syne)] font-semibold text-white"
                    style={{
                      fontSize: "19px",
                      marginBottom: "3px",
                      textShadow: "0 2px 8px rgba(0,0,0,0.7)",
                    }}
                  >
                    Karmugilan
                  </p>
                  <p
                    className="font-[family-name:var(--font-inter)] text-sm"
                    style={{
                      color: "rgba(255,255,255,0.8)",
                      textShadow: "0 1px 4px rgba(0,0,0,0.5)",
                    }}
                  >
                    21 years old · India
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>{/* end inner padding */}
        </div>
      </section>
    </>
  );
}
