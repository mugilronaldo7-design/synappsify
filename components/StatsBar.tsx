"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 20, suffix: "+", label: "Happy Clients" },
  { value: 7, suffix: " Days", label: "Avg. Delivery" },
  { value: 3, suffix: "", label: "Cities Served" },
];

export default function StatsBar() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const animated = useRef(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 85%",
        once: true,
        onEnter: () => {
          if (animated.current) return;
          animated.current = true;

          stats.forEach((stat, i) => {
            gsap.to(
              { value: 0 },
              {
                value: stat.value,
                duration: 2,
                ease: "power2.out",
                delay: i * 0.15,
                onUpdate: function () {
                  setCounts((prev) => {
                    const next = [...prev];
                    next[i] = Math.round(this.targets()[0].value);
                    return next;
                  });
                },
              }
            );
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="border-y px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
      style={{
        background: "#FFFFFF",
        borderColor: "rgba(0,0,0,0.05)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center relative">
              {/* Divider */}
              {i < stats.length - 1 && (
                <div
                  className="hidden lg:block absolute right-0 top-1/4 h-1/2 w-px"
                  style={{ background: "rgba(0,0,0,0.1)" }}
                />
              )}

              <div
                className="font-[family-name:var(--font-syne)] font-bold text-4xl sm:text-5xl"
                style={{ color: "#7C3AED" }}
              >
                {counts[i]}
                {stat.suffix}
              </div>
              <div
                className="font-[family-name:var(--font-inter)] text-sm sm:text-base mt-2"
                style={{ color: "#555555" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
