"use client";

import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Fitness Brand Owner",
    review:
      "Synappsify completely transformed our online presence. The design looks premium and conversions improved instantly.",
    initials: "RM",
    color: "#7C3AED",
  },
  {
    name: "Ankit Sharma",
    role: "Construction Firm",
    review:
      "Smooth process, fast delivery, and extremely professional. Highly recommended for serious businesses.",
    initials: "AS",
    color: "#2563EB",
  },
  {
    name: "Priya Verma",
    role: "Legal Consultant",
    review:
      "Clean design, strong branding, and everything works flawlessly across devices.",
    initials: "PV",
    color: "#059669",
  },
  {
    name: "Karthik R",
    role: "Startup Founder",
    review:
      "They understood our vision and built exactly what we needed. Great communication and execution.",
    initials: "KR",
    color: "#D97706",
  },
];

export default function ClientTestimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Drag-scroll support
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    scrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current.offsetLeft ?? 0);
    const walk = (x - startX.current) * 1.2;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };
  const onMouseUp = () => { isDragging.current = false; };

  return (
    <section
      className="w-full flex justify-center items-center px-4 sm:px-6 lg:px-8 my-[60px] md:my-[120px]"
    >
      {/* Outer container card */}
      <div
        className="w-full bg-white rounded-3xl"
        style={{
          maxWidth: "1250px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.08), 0 5px 20px rgba(0,0,0,0.05)",
          border: "1px solid rgba(0,0,0,0.05)",
        }}
      >
        {/* Inner padding wrapper */}
        <div className="p-8 sm:p-10 md:p-12 lg:p-16">
          {/* Header */}
          <div
            className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 pb-4 mb-0"
            style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}
          >
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-4xl sm:text-5xl md:text-[56px] leading-none text-[#0A0A0A] tracking-tight">
              Testimonials.
            </h2>
            <p
              className="font-[family-name:var(--font-inter)] text-base md:text-lg max-w-xs md:text-right"
              style={{ color: "#555555" }}
            >
              What our clients say after working with us.
            </p>
          </div>

          {/* Scroll container with right-edge fade hint */}
          <div className="relative">
            <div
              ref={scrollRef}
              className="no-scrollbar flex gap-6 overflow-x-auto snap-x snap-mandatory pt-10 pb-4"
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
              style={{
                scrollBehavior: "smooth",
                cursor: "grab",
                userSelect: "none",
              }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="group flex-shrink-0 flex flex-col justify-between transition-all duration-300 hover:-translate-y-[5px] snap-start rounded-2xl"
                  style={{
                    width: "clamp(280px, 80vw, 320px)",
                    minHeight: "260px",
                    background: "#FAFAFA",
                    padding: "28px",
                    boxShadow: "0 6px 24px rgba(0,0,0,0.06)",
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={16} fill={t.color} stroke="none" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p
                    className="font-[family-name:var(--font-inter)] text-[15px] leading-relaxed flex-grow mb-6"
                    style={{ color: "#444444" }}
                  >
                    &ldquo;{t.review}&rdquo;
                  </p>

                  {/* Avatar + Name */}
                  <div className="flex items-center gap-3">
                    <div
                      className="flex-shrink-0 flex items-center justify-center rounded-full font-bold text-white text-sm"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: t.color,
                        boxShadow: `0 4px 14px ${t.color}50`,
                      }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p
                        className="font-[family-name:var(--font-syne)] font-bold text-base"
                        style={{ color: "#0A0A0A" }}
                      >
                        {t.name}
                      </p>
                      <p
                        className="font-[family-name:var(--font-inter)] text-sm"
                        style={{ color: "#888888" }}
                      >
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right-edge fade */}
            <div
              className="absolute right-0 top-0 bottom-0 pointer-events-none"
              style={{
                width: "80px",
                background: "linear-gradient(to left, #ffffff 0%, transparent 100%)",
                zIndex: 2,
              }}
            />
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-5">
            <div
              className="flex items-center gap-2 transition-opacity duration-200"
              style={{ opacity: 0.5 }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.9")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.5")}
            >
              <span className="font-[family-name:var(--font-inter)] text-xs text-gray-400">
                Scroll
              </span>
              <span
                className="inline-flex items-center justify-center text-gray-400 animate-bounce"
                style={{
                  width: "20px", height: "20px",
                  border: "1px solid #d1d5db",
                  borderRadius: "50%",
                  fontSize: "10px",
                  lineHeight: 1,
                }}
              >
                →
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
