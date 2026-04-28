"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    heading: "Discovery Call",
    description:
      "We understand your business, goals, and target customers in a free 30-minute call.",
    icon: "📞",
    visual: {
      title: "Discovery Call",
      detail: "30-min free strategy session",
      color: "#7C3AED",
    },
  },
  {
    number: "02",
    heading: "Proposal & Agreement",
    description:
      "You receive a clear proposal with scope, timeline, pricing, and our service contract.",
    icon: "📄",
    visual: {
      title: "Proposal & Agreement",
      detail: "Clear scope & transparent pricing",
      color: "#5B21B6",
    },
  },
  {
    number: "03",
    heading: "Design & Build",
    description:
      "We design and develop your solution — sharing progress at every milestone.",
    icon: "⚡",
    visual: {
      title: "Design & Build",
      detail: "Milestone-by-milestone updates",
      color: "#7C3AED",
    },
  },
  {
    number: "04",
    heading: "Launch & Support",
    description:
      "We deliver, launch, and support your project with a maintenance plan.",
    icon: "🚀",
    visual: {
      title: "Launch & Support",
      detail: "Ongoing maintenance & growth",
      color: "#2D0A6E",
    },
  },
];

export default function StickyScroll() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep(index);
          }
        },
        {
          threshold: 0.5,
          rootMargin: "-20% 0px -20% 0px",
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    const sectionObserver = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) sectionObserver.observe(sectionRef.current);

    return () => {
      observers.forEach((o) => o.disconnect());
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="bg-white py-20 lg:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3 font-[family-name:var(--font-inter)]"
            style={{ color: "#7C3AED" }}
          >
            How We Work
          </p>
          <h2 className="font-[family-name:var(--font-syne)] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0A0A0A]">
            Our Process
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left sticky card */}
          <div className="hidden lg:flex lg:w-2/5 justify-center">
            <div className="sticky top-24 h-fit w-full max-w-sm">
              <div
                className="rounded-2xl p-8 transition-all duration-500"
                style={{
                  background: "#FFFFFF",
                  border: `2px solid ${steps[activeStep].visual.color}`,
                  boxShadow: `0 10px 30px rgba(0, 0, 0, 0.06)`,
                }}
              >
                {/* Step visual */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6"
                  style={{
                    background: `${steps[activeStep].visual.color}20`,
                  }}
                >
                  {steps[activeStep].icon}
                </div>

                {/* Step number */}
                <div
                  className="text-sm font-bold font-[family-name:var(--font-inter)] mb-2"
                  style={{ color: steps[activeStep].visual.color }}
                >
                  STEP {steps[activeStep].number}
                </div>

                {/* Step title */}
                <h3 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#0A0A0A] mb-3 transition-all duration-400">
                  {steps[activeStep].visual.title}
                </h3>

                {/* Detail */}
                <p
                  className="font-[family-name:var(--font-inter)] text-sm"
                  style={{ color: "#555555" }}
                >
                  {steps[activeStep].visual.detail}
                </p>

                {/* Step dots */}
                <div className="flex gap-2 mt-8">
                  {steps.map((_, i) => (
                    <div
                      key={i}
                      className="transition-all duration-300 rounded-full"
                      style={{
                        width: i === activeStep ? "24px" : "8px",
                        height: "8px",
                        background:
                          i === activeStep
                            ? steps[activeStep].visual.color
                            : "rgba(0,0,0,0.15)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right scrollable steps */}
          <div className="lg:w-3/5 space-y-2">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
                className="min-h-[360px] sm:min-h-[420px] flex items-center"
              >
                <div
                  className="rounded-2xl p-8 w-full transition-all duration-300"
                  style={{
                    background:
                      activeStep === index ? "#FFFFFF" : "rgba(249,250,251,0.5)",
                    border: `1px solid ${
                      activeStep === index
                        ? "rgba(124,58,237,0.4)"
                        : "rgba(0,0,0,0.05)"
                    }`,
                    boxShadow: activeStep === index ? "0 10px 30px rgba(0, 0, 0, 0.06)" : "none",
                  }}
                >
                  {/* Mobile step icon */}
                  <div className="lg:hidden flex items-center gap-4 mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                      style={{ background: "rgba(124,58,237,0.15)" }}
                    >
                      {step.icon}
                    </div>
                    <span
                      className="font-[family-name:var(--font-inter)] font-bold text-sm"
                      style={{ color: "#7C3AED" }}
                    >
                      STEP {step.number}
                    </span>
                  </div>

                  {/* Desktop step number */}
                  <div
                    className="hidden lg:block font-[family-name:var(--font-syne)] font-bold text-5xl mb-4"
                    style={{ color: "rgba(124,58,237,0.25)" }}
                  >
                    {step.number}
                  </div>

                  <h3 className="font-[family-name:var(--font-syne)] font-bold text-2xl sm:text-3xl text-[#0A0A0A] mb-4">
                    {step.heading}
                  </h3>
                  <p
                    className="font-[family-name:var(--font-inter)] text-base leading-relaxed max-w-lg"
                    style={{ color: "#555555" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
