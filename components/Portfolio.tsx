"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "FitLife Gym",
    description: "Full website with AI chatbot for lead capture and FAQs.",
    tags: ["WordPress", "Chatbot"],
    gradient: "linear-gradient(135deg, #2D0A6E 0%, #7C3AED 100%)",
    icon: "🏋️",
  },
  {
    name: "Spice Garden Restaurant",
    description: "Online menu system with WhatsApp ordering bot integration.",
    tags: ["Next.js", "WhatsApp API"],
    gradient: "linear-gradient(135deg, #1A0A3E 0%, #5B21B6 100%)",
    icon: "🍛",
  },
  {
    name: "NovaClinics",
    description: "Appointment booking website with real-time slot management.",
    tags: ["React", "Firebase"],
    gradient: "linear-gradient(135deg, #0A0A2E 0%, #4C1D95 100%)",
    icon: "🏥",
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll(".portfolio-card");
      if (!cards) return;

      gsap.fromTo(
        cards,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" className="bg-white py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3 font-[family-name:var(--font-inter)]"
            style={{ color: "#7C3AED" }}
          >
            Portfolio
          </p>
          <h2 className="font-[family-name:var(--font-syne)] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0A0A0A] mb-4">
            Our Work
          </h2>
          <p
            className="font-[family-name:var(--font-inter)] text-base max-w-xl mx-auto"
            style={{ color: "#555555" }}
          >
            Real projects. Real results. See how we've helped businesses across India grow digitally.
          </p>
        </div>

        {/* Cards grid */}
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="portfolio-card group rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              style={{
                background: "#FFFFFF",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0,0,0,0.05)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 20px 60px rgba(124,58,237,0.15), 0 0 0 1px rgba(124,58,237,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 10px 30px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0,0,0,0.05)";
              }}
            >
              {/* Image area */}
              <div
                className="h-48 flex items-center justify-center relative overflow-hidden"
                style={{ background: project.gradient }}
              >
                <span className="text-6xl">{project.icon}</span>
                {/* Overlay pattern */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 50%)",
                  }}
                />
                <div className="absolute top-3 right-3">
                  <ExternalLink
                    size={18}
                    className="text-white/40 group-hover:text-white/80 transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Card content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-semibold font-[family-name:var(--font-inter)]"
                      style={{
                        background: "rgba(124,58,237,0.12)",
                        color: "#A78BFA",
                        border: "1px solid rgba(124,58,237,0.2)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-[family-name:var(--font-syne)] font-bold text-xl text-[#0A0A0A] mb-2">
                  {project.name}
                </h3>
                <p
                  className="font-[family-name:var(--font-inter)] text-sm leading-relaxed mb-5"
                  style={{ color: "#555555" }}
                >
                  {project.description}
                </p>

                <button
                  className="inline-flex items-center gap-1.5 text-sm font-semibold font-[family-name:var(--font-inter)] group-hover:gap-2.5 transition-all duration-300"
                  style={{ color: "#7C3AED" }}
                >
                  View Project <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
