"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Synappsify built our gym website in just 5 days. We started getting enquiries the very first week!",
    name: "Rajesh K.",
    business: "FitLife Gym",
    initial: "R",
  },
  {
    quote:
      "Professional, fast, and affordable. They added a chatbot that handles customer questions even at midnight.",
    name: "Priya S.",
    business: "Spice Garden",
    initial: "P",
  },
  {
    quote:
      "Highly recommended. They understood exactly what our clinic needed and delivered beyond expectations.",
    name: "Dr. Arun M.",
    business: "NovaClinics",
    initial: "A",
  },
  {
    quote:
      "The team was incredibly responsive. Our e-commerce site went live on time and looks stunning.",
    name: "Karthik R.",
    business: "StyleHub Boutique",
    initial: "K",
  },
  {
    quote:
      "Our appointment bookings doubled within a month of launching the new website. Amazing results!",
    name: "Dr. Meena V.",
    business: "Wellness Plus",
    initial: "M",
  },
];

export default function Testimonials() {
  return (
    <section
      className="bg-white py-20 lg:py-32 overflow-hidden"
      id="testimonials"
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3 font-[family-name:var(--font-inter)]"
              style={{ color: "#7C3AED" }}
            >
              Testimonials
            </p>
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0A0A0A]">
              What Clients Say
            </h2>
          </div>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div className="overflow-x-auto no-scrollbar pb-4">
        <div className="flex gap-5 px-4 sm:px-6 lg:px-8" style={{ width: "max-content" }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 rounded-2xl p-7 flex flex-col gap-5"
              style={{
                background: "#FFFFFF",
                borderLeft: "4px solid #7C3AED",
                minWidth: "320px",
                maxWidth: "380px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
                border: "1px solid rgba(0, 0, 0, 0.05)"
              }}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={16}
                    fill="#7C3AED"
                    stroke="none"
                  />
                ))}
              </div>

              {/* Quote */}
              <p
                className="font-[family-name:var(--font-inter)] text-base italic leading-relaxed text-[#555555]"
                style={{ flex: 1 }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Client */}
              <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: "rgba(124,58,237,0.2)" }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white font-[family-name:var(--font-syne)] flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #5B21B6, #7C3AED)" }}
                >
                  {t.initial}
                </div>
                <div>
                  <div className="font-[family-name:var(--font-inter)] font-bold text-[#0A0A0A] text-sm">
                    {t.name}
                  </div>
                  <div
                    className="font-[family-name:var(--font-inter)] text-xs font-semibold"
                    style={{ color: "#7C3AED" }}
                  >
                    {t.business}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
