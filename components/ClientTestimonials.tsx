"use client";

import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Rahul Mehta", role: "Fitness Brand Owner", review: "Synappsify completely transformed our online presence. The design looks premium and conversions improved instantly.", initials: "RM", color: "#7C3AED" },
  { name: "Ankit Sharma", role: "Construction Firm", review: "Smooth process, fast delivery, and extremely professional. Highly recommended for serious businesses.", initials: "AS", color: "#2563EB" },
  { name: "Priya Verma", role: "Legal Consultant", review: "Clean design, strong branding, and everything works flawlessly across devices.", initials: "PV", color: "#059669" },
  { name: "Karthik R", role: "Startup Founder", review: "They understood our vision and built exactly what we needed. Great communication and execution.", initials: "KR", color: "#D97706" },
];

export default function ClientTestimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
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
    scrollRef.current.scrollLeft = scrollLeft.current - (x - startX.current) * 1.2;
  };
  const onMouseUp = () => { isDragging.current = false; };

  return (
    <section
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "0 16px",
        margin: "64px auto",
      }}
    >
      {/* Outer card */}
      <div
        style={{
          width: "100%",
          maxWidth: "1250px",
          background: "#FFFFFF",
          borderRadius: "40px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.08), 0 5px 20px rgba(0,0,0,0.05)",
          border: "1px solid rgba(0,0,0,0.05)",
          padding: "clamp(24px, 5vw, 64px)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "16px",
            borderBottom: "1px solid rgba(0,0,0,0.08)",
            paddingBottom: "20px",
            marginBottom: "32px",
          }}
        >
          <h2
            className="font-[family-name:var(--font-syne)]"
            style={{ fontWeight: 700, fontSize: "clamp(36px, 6vw, 60px)", lineHeight: 1, color: "#0A0A0A", letterSpacing: "-1px" }}
          >
            Testimonials.
          </h2>
          <p
            className="font-[family-name:var(--font-inter)]"
            style={{ color: "#555", fontSize: "16px", maxWidth: "280px", textAlign: "right", lineHeight: 1.5 }}
          >
            What our clients say after working with us.
          </p>
        </div>

        {/* Scroll container */}
        <div style={{ position: "relative" }}>
          <div
            ref={scrollRef}
            className="no-scrollbar"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            style={{
              display: "flex",
              gap: "20px",
              overflowX: "auto",
              paddingBottom: "12px",
              scrollSnapType: "x mandatory",
              scrollBehavior: "smooth",
              cursor: "grab",
              userSelect: "none",
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                style={{
                  flex: "0 0 auto",
                  width: "min(320px, 82vw)",
                  scrollSnapAlign: "start",
                  background: "#FAFAFA",
                  borderRadius: "24px",
                  padding: "28px",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
                  border: "1px solid rgba(0,0,0,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "240px",
                  transition: "transform 0.25s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                {/* Stars */}
                <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
                  {[1,2,3,4,5].map((s) => <Star key={s} size={15} fill={t.color} stroke="none" />)}
                </div>

                {/* Review */}
                <p
                  className="font-[family-name:var(--font-inter)]"
                  style={{ fontSize: "14px", color: "#444", lineHeight: 1.7, flex: 1, marginBottom: "20px" }}
                >
                  &ldquo;{t.review}&rdquo;
                </p>

                {/* Avatar */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      flexShrink: 0, width: "44px", height: "44px",
                      background: t.color, borderRadius: "50%",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#fff", fontWeight: 700, fontSize: "13px",
                      boxShadow: `0 4px 12px ${t.color}55`,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-syne)]" style={{ fontWeight: 700, fontSize: "14px", color: "#0A0A0A" }}>{t.name}</p>
                    <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "13px", color: "#888" }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Fade */}
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "60px", pointerEvents: "none", background: "linear-gradient(to left, #ffffff, transparent)", zIndex: 2 }} />
        </div>

        {/* Indicator */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <span className="font-[family-name:var(--font-inter)]" style={{ fontSize: "12px", color: "#aaa", display: "flex", alignItems: "center", gap: "6px" }}>
            Scroll
            <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px", border: "1px solid #d1d5db", borderRadius: "50%", fontSize: "10px" }}>→</span>
          </span>
        </div>
      </div>
    </section>
  );
}
