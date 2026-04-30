"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Star, ArrowRight } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<HTMLElement[]>([]);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRefs.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToWork = () => {
    const el = document.getElementById("work");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen bg-white flex items-center overflow-hidden pt-20"
    >
      {/* Top-to-bottom gradient atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(45,10,110,0.55) 0%, rgba(124,58,237,0.18) 40%, transparent 80%)",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 clamp(20px, 5vw, 60px)",
        }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 py-12 lg:py-20">
          {/* Left side — 60% */}
          <div className="flex-1 lg:w-3/5 space-y-6 lg:space-y-8">
            {/* H1 */}
            <h1
              ref={addToRefs}
              className="font-[family-name:var(--font-syne)] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.08] text-[#0A0A0A]"
            >
              We Build Websites, Apps &{" "}
              <span className="gradient-text">AI Tools</span> That Grow Your
              Business
            </h1>

            {/* Label pill */}
            <div
              ref={addToRefs}
              className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-semibold"
              style={{
                background: "rgba(124,58,237,0.08)",
                color: "#7C3AED",
                fontFamily: "var(--font-inter)",
              }}
            >
              India&apos;s Smart Tech Agency
            </div>

            {/* Subtext */}
            <p
              ref={addToRefs}
              className="font-[family-name:var(--font-inter)] text-base sm:text-lg leading-relaxed max-w-xl"
              style={{ color: "#555555" }}
            >
              Synappsify connects businesses to the digital
              world — through beautiful websites, powerful apps, and intelligent
              AI solutions.
            </p>
          </div>

          {/* Right side — 40% */}
          <div className="flex-shrink-0 lg:w-2/5 flex items-center justify-center relative w-full max-w-md lg:max-w-none mx-auto">
            {/* Floating card */}
            <div
              className="relative z-10 w-full rounded-2xl overflow-hidden"
              style={{
                animation: "float 3s ease-in-out infinite",
                maxWidth: "440px",
              }}
            >
              {/* Browser chrome */}
              <div
                className="rounded-2xl overflow-hidden border"
                style={{
                  background: "#111111",
                  borderColor: "rgba(0, 0, 0, 0.05)",
                  boxShadow:
                    "0 10px 30px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0,0,0,0.05)",
                }}
              >
                {/* URL bar */}
                <div
                  className="flex items-center gap-2 px-4 py-3 border-b"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  </div>
                  <div
                    className="flex-1 h-6 rounded-md mx-2 flex items-center px-3"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    <span className="text-xs text-gray-500 font-[family-name:var(--font-inter)]">
                      synappsify.com/portfolio
                    </span>
                  </div>
                </div>

                {/* Mockup content */}
                <div className="p-4 space-y-3">
                  {/* Nav bar in mockup */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="h-3 w-20 rounded"
                      style={{ background: "rgba(124,58,237,0.6)" }}
                    />
                    <div className="flex gap-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="h-2.5 w-12 rounded"
                          style={{ background: "rgba(255,255,255,0.08)" }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Hero banner */}
                  <div
                    className="h-28 rounded-xl"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(45,10,110,0.8), rgba(124,58,237,0.5))",
                    }}
                  >
                    <div className="p-4 space-y-2">
                      <div
                        className="h-3 w-3/4 rounded"
                        style={{ background: "rgba(255,255,255,0.7)" }}
                      />
                      <div
                        className="h-2.5 w-1/2 rounded"
                        style={{ background: "rgba(255,255,255,0.3)" }}
                      />
                      <div
                        className="h-7 w-24 rounded-full mt-2"
                        style={{ background: "rgba(124,58,237,0.9)" }}
                      />
                    </div>
                  </div>

                  {/* Cards */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      "rgba(124,58,237,0.3)",
                      "rgba(255,255,255,0.05)",
                      "rgba(255,255,255,0.05)",
                    ].map((bg, i) => (
                      <div
                        key={i}
                        className="h-14 rounded-lg"
                        style={{ background: bg }}
                      />
                    ))}
                  </div>

                  {/* Footer bar */}
                  <div className="flex gap-2 pt-1">
                    <div
                      className="h-2 flex-1 rounded"
                      style={{ background: "rgba(255,255,255,0.05)" }}
                    />
                    <div
                      className="h-2 flex-1 rounded"
                      style={{ background: "rgba(255,255,255,0.05)" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="absolute top-1/2 left-1/2 pointer-events-none rounded-full mix-blend-multiply"
              style={{
                width: "600px",
                height: "600px",
                background: "radial-gradient(circle, #7436DF 0%, #24143E 45%, transparent 75%)",
                animation: "hero-glow-shift 8s ease-in-out infinite",
                filter: "blur(100px)",
                zIndex: -1,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
