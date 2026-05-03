"use client";

import { useState, useEffect, useRef } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const timelineSteps = [
  {
    num: "01",
    title: "Discovery",
    short: "We understand your business deeply",
    description:
      "We dive into your goals, audience, and competitive landscape to build a crystal-clear project foundation.",
    deliverables: ["Requirement mapping", "Competitor analysis", "Project roadmap"],
    time: "2–4 Days",
  },
  {
    num: "02",
    title: "Strategy",
    short: "We design what will actually work",
    description:
      "We define the architecture, tech stack, and execution plan aligned to your business outcomes.",
    deliverables: ["Tech stack planning", "UX wireframes", "Milestone schedule"],
    time: "3–5 Days",
  },
  {
    num: "03",
    title: "Build",
    short: "We turn ideas into scalable systems",
    description:
      "Our team executes with precision — clean code, pixel-perfect design, and AI integrations where needed.",
    deliverables: ["Full development", "QA testing", "Revisions & polish"],
    time: "1–3 Weeks",
  },
  {
    num: "04",
    title: "Launch",
    short: "We go live without chaos",
    description:
      "Deployment is handled end-to-end. We ensure everything works perfectly across all devices before launch.",
    deliverables: ["Production deployment", "Performance audit", "DNS & hosting setup"],
    time: "1–2 Days",
  },
  {
    num: "05",
    title: "Growth",
    short: "We optimize, automate, and scale",
    description:
      "Post-launch, we monitor, improve, and scale your product so it stays fast and competitive.",
    deliverables: ["Analytics setup", "Speed optimization", "Automation setup"],
    time: "Ongoing",
  },
];

const serviceTabs = [
  {
    id: "websites",
    icon: "🌐",
    label: "Websites",
    steps: [
      { title: "Discovery", desc: "Goals, audience, competitive research" },
      { title: "Wireframing", desc: "Page layout & information architecture" },
      { title: "UI Design", desc: "Pixel-perfect, brand-aligned visuals" },
      { title: "Development", desc: "Clean, performant frontend & backend" },
      { title: "SEO Optimization", desc: "Technical SEO, meta, speed tuning" },
      { title: "Deployment", desc: "Live on a fast, reliable infrastructure" },
    ],
  },
  {
    id: "ai",
    icon: "🤖",
    label: "AI Agents",
    steps: [
      { title: "Problem Mapping", desc: "Define automation goals & pain points" },
      { title: "Prompt & Logic Design", desc: "Engineer the AI decision flow" },
      { title: "AI Integration", desc: "Connect LLMs, APIs, and data sources" },
      { title: "Automation Setup", desc: "Build the end-to-end workflow engine" },
      { title: "Testing", desc: "Validate accuracy, edge cases, and load" },
      { title: "Continuous Improvement", desc: "Monitor, retrain, and optimize" },
    ],
  },
  {
    id: "mobile",
    icon: "📱",
    label: "Mobile Apps",
    steps: [
      { title: "User Flow Planning", desc: "Map screens, actions, and journeys" },
      { title: "UI/UX Design", desc: "Native-feel, intuitive mobile interfaces" },
      { title: "Backend Architecture", desc: "APIs, databases, and auth systems" },
      { title: "App Development", desc: "Cross-platform React Native build" },
      { title: "Testing", desc: "Device coverage, performance, security" },
      { title: "App Store Deployment", desc: "iOS App Store & Google Play launch" },
    ],
  },
];

const metrics = [
  { icon: "⚡", title: "Faster Performance", desc: "Optimized for Core Web Vitals" },
  { icon: "📈", title: "Higher Conversions", desc: "Design built to convert visitors" },
  { icon: "🤖", title: "Smarter Automation", desc: "AI-powered workflow systems" },
  { icon: "🚀", title: "Scalable Systems", desc: "Built to grow with your business" },
];

const inputItems = ["Business goals", "Problems to solve", "User needs", "Vision & ideas"];
const engineItems = ["Research & Strategy", "UI/UX Design", "Development", "AI Integration", "Testing & Optimization"];
const outputItems = ["High-performance products", "Automated workflows", "Revenue-ready systems", "Scalable digital experiences"];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Process() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [timelineRevealed, setTimelineRevealed] = useState(false);
  const [activeTab, setActiveTab] = useState("websites");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-expand first card after the section fade-in completes
  useEffect(() => {
    if (isVisible && !timelineRevealed) {
      const timer = setTimeout(() => {
        setActiveStep(0);
        setTimelineRevealed(true);
      }, 700); // fires after the 600ms card fade-in
      return () => clearTimeout(timer);
    }
  }, [isVisible, timelineRevealed]);

  const activeTabData = serviceTabs.find((t) => t.id === activeTab)!;

  return (
    <section
      id="process"
      ref={sectionRef}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "0 16px",
        margin: "64px auto",
      }}
    >
      {/* ── Outer Card (matches Pricing/Portfolio) ── */}
      <div
        style={{
          width: "100%",
          maxWidth: "1250px",
          background: "#FFFFFF",
          borderRadius: "40px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.08), 0 5px 20px rgba(0,0,0,0.05)",
          border: "1px solid rgba(0,0,0,0.05)",
          padding: "clamp(24px, 5vw, 64px)",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        {/* ── Section Header ── */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "16px",
            borderBottom: "1px solid rgba(0,0,0,0.08)",
            paddingBottom: "20px",
            marginBottom: "48px",
          }}
        >
          <h2
            className="font-[family-name:var(--font-syne)]"
            style={{ fontWeight: 700, fontSize: "clamp(36px, 6vw, 60px)", lineHeight: 1, color: "#0A0A0A", letterSpacing: "-1px" }}
          >
            Process.
          </h2>
          <p
            className="font-[family-name:var(--font-inter)]"
            style={{ color: "#555", fontSize: "16px", maxWidth: "280px", textAlign: "right", lineHeight: 1.5 }}
          >
            Streamlined workflow from idea to deployment.
          </p>
        </div>

        {/* ── PART 1: Hero inside card ── */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h3
            className="font-[family-name:var(--font-syne)]"
            style={{ fontWeight: 700, fontSize: "clamp(24px, 4vw, 40px)", color: "#0A0A0A", letterSpacing: "-0.5px", marginBottom: "16px" }}
          >
            From Idea{" "}
            <span style={{ color: "#7C3AED" }}>→</span>{" "}
            Scalable Product
          </h3>
          <p
            className="font-[family-name:var(--font-inter)]"
            style={{ color: "#666", fontSize: "16px", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}
          >
            We transform ideas into high-performance websites, AI systems, and mobile experiences through a streamlined execution workflow.
          </p>
        </div>

        {/* ── INPUT → ENGINE → OUTPUT ── */}
        <div
          className="flex flex-col md:flex-row md:flex-nowrap md:items-stretch"
          style={{ gap: "12px", marginBottom: "64px" }}
        >
          {/* INPUT */}
          <div className="flex-1 min-w-0">
            <FlowBlock
              title="Client Input"
              items={inputItems}
              bg="#F9FAFB"
              accent="#7C3AED"
              borderColor="rgba(124,58,237,0.12)"
            />
          </div>

          {/* ARROW — desktop/tablet only */}
          <div className="hidden md:flex items-center justify-center flex-shrink-0" style={{ width: "36px" }}>
            <AnimatedArrow color="#7C3AED" />
          </div>

          {/* ENGINE */}
          <div
            className="flex-1 min-w-0"
            style={{
              background: "linear-gradient(135deg, #1a0a2e 0%, #2d1060 100%)",
              borderRadius: "24px",
              padding: "clamp(20px, 3vw, 28px)",
              border: "1px solid rgba(124,58,237,0.3)",
              boxShadow: "0 12px 40px rgba(124,58,237,0.2)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* glow */}
            <div style={{
              position: "absolute", top: "-40px", left: "50%", transform: "translateX(-50%)",
              width: "180px", height: "180px",
              background: "radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
            <p
              className="font-[family-name:var(--font-inter)]"
              style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "rgba(124,58,237,0.8)", marginBottom: "12px", textTransform: "uppercase" }}
            >
              Core Engine
            </p>
            <h4
              className="font-[family-name:var(--font-syne)]"
              style={{ fontWeight: 700, fontSize: "20px", color: "#fff", marginBottom: "20px" }}
            >
              Synappsify Engine
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {engineItems.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex", alignItems: "center", gap: "10px",
                    padding: "10px 14px",
                    background: "rgba(255,255,255,0.06)",
                    borderRadius: "10px",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#7C3AED", flexShrink: 0 }} />
                  <span className="font-[family-name:var(--font-inter)]" style={{ fontSize: "13px", color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ARROW — desktop/tablet only */}
          <div className="hidden md:flex items-center justify-center flex-shrink-0" style={{ width: "36px" }}>
            <AnimatedArrow color="#7C3AED" />
          </div>

          {/* OUTPUT */}
          <div className="flex-1 min-w-0">
            <FlowBlock
              title="Final Output"
              items={outputItems}
              bg="#F9FAFB"
              accent="#059669"
              borderColor="rgba(5,150,105,0.12)"
            />
          </div>
        </div>

        {/* ── DIVIDER ── */}
        <div style={{ height: "1px", background: "rgba(0,0,0,0.06)", marginBottom: "56px" }} />

        {/* ── PART 2: Timeline ── */}
        <div style={{ marginBottom: "64px" }}>
          <h3
            className="font-[family-name:var(--font-syne)]"
            style={{ fontWeight: 700, fontSize: "clamp(20px, 3vw, 28px)", color: "#0A0A0A", marginBottom: "8px" }}
          >
            Client Journey
          </h3>
          <p
            className="font-[family-name:var(--font-inter)]"
            style={{ color: "#888", fontSize: "14px", marginBottom: "32px" }}
          >
            Hover over each step to explore.
          </p>

          {/* Desktop: horizontal flex | Mobile: vertical stack */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              overflowX: "auto",
              paddingBottom: "8px",
            }}
            className="no-scrollbar"
          >
            {timelineSteps.map((step, i) => (
              <TimelineCard
                key={i}
                step={step}
                index={i}
                isActive={activeStep === i}
                onHover={() => setActiveStep(i)}
                onLeave={() => setActiveStep(timelineRevealed ? 0 : null)}
              />
            ))}
          </div>

          {/* Mobile-only scroll indicator — matches Portfolio / Testimonials */}
          <div className="flex md:hidden justify-center" style={{ marginTop: "16px" }}>
            <span
              className="font-[family-name:var(--font-inter)]"
              style={{ fontSize: "12px", color: "#aaa", display: "flex", alignItems: "center", gap: "6px" }}
            >
              Scroll
              <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px", border: "1px solid #d1d5db", borderRadius: "50%", fontSize: "10px" }}>→</span>
            </span>
          </div>
        </div>

        {/* ── DIVIDER ── */}
        <div style={{ height: "1px", background: "rgba(0,0,0,0.06)", marginBottom: "56px" }} />

        {/* ── PART 3: Service Tabs ── */}
        <div style={{ marginBottom: "64px" }}>
          <h3
            className="font-[family-name:var(--font-syne)]"
            style={{ fontWeight: 700, fontSize: "clamp(20px, 3vw, 28px)", color: "#0A0A0A", marginBottom: "24px" }}
          >
            Service Workflows
          </h3>

          {/* Tab buttons */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              marginBottom: "32px",
              background: "#F4F4F5",
              borderRadius: "14px",
              padding: "6px",
              width: "fit-content",
              flexWrap: "wrap",
            }}
          >
            {serviceTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="font-[family-name:var(--font-inter)]"
                style={{
                  padding: "10px 20px",
                  borderRadius: "10px",
                  fontSize: "14px",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  background: activeTab === tab.id ? "#fff" : "transparent",
                  color: activeTab === tab.id ? "#0A0A0A" : "#888",
                  boxShadow: activeTab === tab.id ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
                }}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(160px, 100%), 1fr))",
              gap: "12px",
              transition: "opacity 0.2s ease",
            }}
          >
            {activeTabData.steps.map((step, i) => (
              <div
                key={`${activeTab}-${i}`}
                style={{
                  background: "#FAFAFA",
                  borderRadius: "16px",
                  padding: "20px",
                  border: "1px solid rgba(0,0,0,0.06)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(124,58,237,0.1)";
                  e.currentTarget.style.borderColor = "rgba(124,58,237,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <span
                    className="font-[family-name:var(--font-syne)]"
                    style={{ fontSize: "12px", fontWeight: 700, color: "#7C3AED", background: "rgba(124,58,237,0.08)", borderRadius: "6px", padding: "2px 8px" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p
                  className="font-[family-name:var(--font-syne)]"
                  style={{ fontWeight: 700, fontSize: "15px", color: "#0A0A0A", marginBottom: "4px" }}
                >
                  {step.title}
                </p>
                <p
                  className="font-[family-name:var(--font-inter)]"
                  style={{ fontSize: "13px", color: "#888", lineHeight: 1.5 }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── DIVIDER ── */}
        <div style={{ height: "1px", background: "rgba(0,0,0,0.06)", marginBottom: "48px" }} />

        {/* ── PART 4: Metrics Strip ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))",
            gap: "16px",
          }}
        >
          {metrics.map((m, i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                padding: "28px 20px",
                borderRadius: "20px",
                background: "#FAFAFA",
                border: "1px solid rgba(0,0,0,0.05)",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(124,58,237,0.12)";
                e.currentTarget.style.borderColor = "rgba(124,58,237,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.05)";
              }}
            >
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>{m.icon}</div>
              <p
                className="font-[family-name:var(--font-syne)]"
                style={{ fontWeight: 700, fontSize: "16px", color: "#0A0A0A", marginBottom: "6px" }}
              >
                {m.title}
              </p>
              <p
                className="font-[family-name:var(--font-inter)]"
                style={{ fontSize: "13px", color: "#888", lineHeight: 1.5 }}
              >
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function FlowBlock({
  title,
  items,
  bg,
  accent,
  borderColor,
}: {
  title: string;
  items: string[];
  bg: string;
  accent: string;
  borderColor: string;
}) {
  return (
    <div
      style={{
        background: bg,
        borderRadius: "24px",
        padding: "clamp(20px, 4vw, 32px)",
        border: `1px solid ${borderColor}`,
        boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
      }}
    >
      <p
        className="font-[family-name:var(--font-inter)]"
        style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: accent, marginBottom: "12px", textTransform: "uppercase" }}
      >
        {title === "Client Input" ? "Input" : "Output"}
      </p>
      <h4
        className="font-[family-name:var(--font-syne)]"
        style={{ fontWeight: 700, fontSize: "18px", color: "#0A0A0A", marginBottom: "20px" }}
      >
        {title}
      </h4>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: accent, flexShrink: 0 }} />
            <span
              className="font-[family-name:var(--font-inter)]"
              style={{ fontSize: "13px", color: "#444", fontWeight: 500 }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnimatedArrow({ color }: { color: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
      <div
        style={{
          width: "40px",
          height: "2px",
          background: `linear-gradient(to right, transparent, ${color})`,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-1px",
            top: "50%",
            transform: "translateY(-50%)",
            width: 0,
            height: 0,
            borderTop: "5px solid transparent",
            borderBottom: "5px solid transparent",
            borderLeft: `8px solid ${color}`,
          }}
        />
      </div>
    </div>
  );
}

function TimelineCard({
  step,
  isActive,
  onHover,
  onLeave,
}: {
  step: (typeof timelineSteps)[0];
  index: number;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        flex: isActive ? "0 0 260px" : "0 0 160px",
        minWidth: "140px",
        background: isActive ? "linear-gradient(135deg, #F3EEFF, #EDE0FF)" : "#FAFAFA",
        borderRadius: "20px",
        padding: "24px 20px",
        border: isActive ? "1px solid rgba(124,58,237,0.25)" : "1px solid rgba(0,0,0,0.06)",
        boxShadow: isActive ? "0 8px 32px rgba(124,58,237,0.12)" : "none",
        cursor: "default",
        transition: "flex 0.35s ease, background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
        overflow: "hidden",
      }}
    >
      <div
        className="font-[family-name:var(--font-syne)]"
        style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: isActive ? "#7C3AED" : "#E5E7EB", lineHeight: 1, marginBottom: "12px", transition: "color 0.25s" }}
      >
        {step.num}
      </div>
      <p
        className="font-[family-name:var(--font-syne)]"
        style={{ fontWeight: 700, fontSize: "16px", color: "#0A0A0A", marginBottom: "6px" }}
      >
        {step.title}
      </p>
      <p
        className="font-[family-name:var(--font-inter)]"
        style={{ fontSize: "13px", color: "#888", lineHeight: 1.5, marginBottom: isActive ? "16px" : "0", transition: "margin 0.25s" }}
      >
        {step.short}
      </p>

      {/* Expanded content on hover */}
      <div
        style={{
          maxHeight: isActive ? "220px" : "0",
          opacity: isActive ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.35s ease, opacity 0.25s ease",
        }}
      >
        <p
          className="font-[family-name:var(--font-inter)]"
          style={{ fontSize: "13px", color: "#555", lineHeight: 1.6, marginBottom: "14px" }}
        >
          {step.description}
        </p>
        <div style={{ marginBottom: "12px" }}>
          {step.deliverables.map((d, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
              <span style={{ color: "#7C3AED", fontSize: "14px", lineHeight: 1 }}>✓</span>
              <span className="font-[family-name:var(--font-inter)]" style={{ fontSize: "12px", color: "#444", fontWeight: 500 }}>{d}</span>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            padding: "4px 12px",
            background: "rgba(124,58,237,0.1)",
            borderRadius: "999px",
          }}
        >
          <span style={{ fontSize: "10px" }}>⏱</span>
          <span className="font-[family-name:var(--font-inter)]" style={{ fontSize: "12px", fontWeight: 600, color: "#7C3AED" }}>{step.time}</span>
        </div>
      </div>
    </div>
  );
}
