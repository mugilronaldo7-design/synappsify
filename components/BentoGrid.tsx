"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Smartphone, Bot, Zap, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function BentoGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll(".bento-card");
      if (!cards) return;

      gsap.fromTo(
        cards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="bg-white py-20 lg:py-28 px-6 sm:px-10 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12 lg:mb-16">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3 font-[family-name:var(--font-inter)]"
            style={{ color: "#7C3AED" }}
          >
            Our Services
          </p>
          <h2
            className="font-[family-name:var(--font-syne)] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0A0A0A]"
          >
            What We Build
          </h2>
        </div>

        {/* Bento grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto"
        >
          {/* Card 1 — Large, spans 2 cols */}
          <div
            className="bento-card card-hover lg:col-span-2 rounded-2xl p-6 relative overflow-hidden min-h-[220px]"
            style={{
              background: "#FFFFFF",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
              border: "1px solid rgba(0, 0, 0, 0.05)",
            }}
          >
            {/* Browser mockup inside */}
            <div className="absolute bottom-0 right-0 w-48 sm:w-64 opacity-30">
              <div className="bg-gray-100 border border-gray-200 rounded-tl-2xl p-3">
                <div className="h-2 w-4/5 rounded mb-2 bg-gray-300" />
                <div className="h-2 w-3/5 rounded mb-2 bg-gray-200" />
                <div className="h-2 w-4/5 rounded mb-2 bg-gray-200" />
                <div className="h-2 w-2/5 rounded bg-gray-300" />
              </div>
            </div>
            <div className="relative z-10 max-w-lg">
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
                style={{ background: "rgba(124,58,237,0.1)" }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-syne)] font-bold text-3xl sm:text-4xl text-[#0A0A0A] mb-3">
                Custom Websites
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-[#555555] text-base leading-relaxed">
                From landing pages to full e-commerce — pixel perfect,
                SEO-ready, and blazing fast.
              </p>
            </div>
          </div>

          {/* Card 2 — Tall, spans 2 rows, stat card */}
          <div
            className="bento-card card-hover rounded-2xl p-6 flex flex-col justify-center items-center text-center violet-border-glow min-h-[220px]"
            style={{
              background: "#FFFFFF",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
              border: "1px solid rgba(0, 0, 0, 0.05)",
            }}
          >
            <span
              className="font-[family-name:var(--font-syne)] font-bold text-7xl leading-none"
              style={{ color: "#7C3AED" }}
            >
              50+
            </span>
            <p className="font-[family-name:var(--font-syne)] font-bold text-xl text-[#0A0A0A] mt-2">
              Projects Delivered
            </p>
            <p
              className="font-[family-name:var(--font-inter)] text-sm mt-1"
              style={{ color: "#555555" }}
            >
              across India
            </p>
          </div>

          {/* Card 3 — Mobile Apps */}
          <div
            className="bento-card card-hover rounded-2xl p-5 min-h-[160px]"
            style={{
              background: "#FFFFFF",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
              border: "1px solid rgba(0, 0, 0, 0.05)",
            }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
              style={{ background: "rgba(124,58,237,0.15)" }}
            >
              <Smartphone size={22} style={{ color: "#7C3AED" }} />
            </div>
            <h3 className="font-[family-name:var(--font-syne)] font-bold text-xl text-[#0A0A0A] mb-2">
              Mobile Apps
            </h3>
            <p
              className="font-[family-name:var(--font-inter)] text-sm leading-relaxed"
              style={{ color: "#555555" }}
            >
              Android & iOS with Flutter
            </p>
          </div>

          {/* Card 4 — AI Chatbots */}
          <div
            className="bento-card card-hover rounded-2xl p-5 min-h-[160px]"
            style={{
              background: "#FFFFFF",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
              border: "1px solid rgba(0, 0, 0, 0.05)",
            }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
              style={{ background: "rgba(124,58,237,0.15)" }}
            >
              <Bot size={22} style={{ color: "#7C3AED" }} />
            </div>
            <h3 className="font-[family-name:var(--font-syne)] font-bold text-xl text-[#0A0A0A] mb-2">
              AI Chatbots
            </h3>
            <p
              className="font-[family-name:var(--font-inter)] text-sm leading-relaxed"
              style={{ color: "#555555" }}
            >
              Smart bots that answer, book, and sell 24/7
            </p>
          </div>

          {/* Card 5 — Delivered in 7 days */}
          <div
            className="bento-card card-hover rounded-2xl p-5 min-h-[160px]"
            style={{
              background: "#FFFFFF",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
              border: "1px solid rgba(0, 0, 0, 0.05)",
            }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
              style={{ background: "rgba(124,58,237,0.15)" }}
            >
              <Zap size={22} style={{ color: "#7C3AED" }} />
            </div>
            <p
              className="font-[family-name:var(--font-inter)] text-sm font-medium mb-1"
              style={{ color: "#9CA3AF" }}
            >
              Delivered in
            </p>
            <span
              className="font-[family-name:var(--font-syne)] font-bold text-5xl"
              style={{ color: "#7C3AED" }}
            >
              7 Days
            </span>
            <p
              className="font-[family-name:var(--font-inter)] text-sm mt-2"
              style={{ color: "#555555" }}
            >
              Average website delivery time
            </p>
          </div>

          {/* Card 6 — CTA wide */}
          <div
            className="bento-card card-hover lg:col-span-2 rounded-2xl p-8 flex items-center min-h-[140px]"
            style={{
              background: "#FFFFFF",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              borderLeft: "4px solid #7C3AED",
            }}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 w-full">
              <div className="flex-1">
                <h3 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#0A0A0A]">
                  Ready to go digital? Let's talk.
                </h3>
                <p
                  className="font-[family-name:var(--font-inter)] text-sm mt-1"
                  style={{ color: "#555555" }}
                >
                  First consultation is completely free.
                </p>
              </div>
              <button
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm whitespace-nowrap transition-all duration-300 hover:scale-105 font-[family-name:var(--font-inter)]"
                style={{
                  background: "linear-gradient(135deg, #5B21B6, #7C3AED)",
                  boxShadow: "0 4px 20px rgba(124,58,237,0.3)",
                }}
              >
                Start a Project <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
