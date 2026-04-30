"use client";

import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      id: 1,
      title: "Landing Page",
      description: "Perfect for single product or event launches.",
      price: "₹2,999",
      features: [
        "Single page website",
        "Mobile responsive design",
        "Contact form integration",
        "Basic SEO setup",
        "1 month free support",
      ],
      buttonText: "Get Started",
      gradient: "linear-gradient(135deg, #E6F9F0, #CFF5E1)",
      btnColor: "#16A34A",
      btnHover: "#15803d",
      isPopular: false,
    },
    {
      id: 2,
      title: "Standard Website",
      description: "Ideal for growing businesses needing an online presence.",
      price: "₹5,999",
      features: [
        "Up to 5 pages",
        "Custom UI/UX design",
        "CMS integration (CMS/Blog)",
        "Advanced SEO setup",
        "3 months free support",
      ],
      buttonText: "Get Started",
      gradient: "linear-gradient(135deg, #EAF2FF, #DCE8FF)",
      btnColor: "#3B82F6",
      btnHover: "#2563EB",
      isPopular: true,
    },
    {
      id: 3,
      title: "Premium / AI Website",
      description: "Advanced solutions with AI integrations and custom web apps.",
      price: "₹9,999",
      features: [
        "Unlimited pages",
        "AI Chatbot integration",
        "E-commerce capabilities",
        "Custom web application logic",
        "6 months priority support",
      ],
      buttonText: "Get Started",
      gradient: "linear-gradient(135deg, #F3EEFF, #E5D9FF)",
      btnColor: "#7436DF",
      btnHover: "#5B21B6",
      isPopular: false,
    },
  ];

  return (
    <section 
      className="relative w-full bg-transparent flex justify-center items-center px-4 sm:px-6 lg:px-8 mt-[60px] mb-[40px] md:mt-[120px] md:mb-[80px]"
    >
      {/* Outer container card */}
      <div
        className="w-full mx-auto bg-white rounded-3xl"
        style={{
          maxWidth: "1250px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.08), 0 5px 20px rgba(0,0,0,0.05)",
          border: "1px solid rgba(0,0,0,0.05)",
        }}
      >
        {/* Inner padding wrapper */}
        <div className="p-8 sm:p-10 md:p-12 lg:p-16">
          {/* Header Area */}
          <div
            className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 pb-4 mb-8 md:mb-10"
            style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}
          >
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-4xl sm:text-5xl md:text-[56px] leading-none text-[#0A0A0A] tracking-tight">
              Pricing.
            </h2>
            <p
              className="font-[family-name:var(--font-inter)] text-base md:text-lg max-w-sm md:text-right"
              style={{ color: "#555555" }}
            >
              Transparent pricing. Built for growing businesses.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="group transition-all duration-300 hover:-translate-y-[6px] flex flex-col justify-between relative overflow-hidden rounded-2xl"
                style={{
                  background: plan.gradient,
                  padding: "28px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                  border: "1px solid rgba(0,0,0,0.04)",
                }}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 bg-[#3B82F6] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg tracking-wider shadow-sm z-10">
                    POPULAR
                  </div>
                )}

                {/* Top Content */}
                <div className="flex flex-col flex-grow">
                  <div className="mb-5">
                    <h3
                      className="font-[family-name:var(--font-syne)] font-bold text-2xl mb-3"
                      style={{ color: "#0A0A0A" }}
                    >
                      {plan.title}
                    </h3>
                    <p
                      className="font-[family-name:var(--font-inter)] text-base leading-relaxed"
                      style={{ color: "#555555" }}
                    >
                      {plan.description}
                    </p>
                  </div>

                  <div
                    className="font-[family-name:var(--font-syne)] font-bold text-4xl md:text-5xl tracking-tight mb-6"
                    style={{ color: "#0A0A0A" }}
                  >
                    {plan.price}
                  </div>

                  <ul className="space-y-3 md:space-y-4 flex-grow mb-8">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 font-[family-name:var(--font-inter)] text-[15px] leading-relaxed"
                        style={{ color: "#333333" }}
                      >
                        <div
                          className="flex-shrink-0 mt-0.5 rounded-full p-0.5 bg-white shadow-sm"
                          style={{ color: plan.btnColor }}
                        >
                          <Check size={14} strokeWidth={3} />
                        </div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Button */}
                <button
                  className="w-full rounded-xl font-bold text-base transition-all duration-200"
                  style={{
                    height: "52px",
                    background: plan.btnColor,
                    color: "#FFFFFF",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = plan.btnHover;
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = plan.btnColor;
                    e.currentTarget.style.transform = "translateY(0px)";
                  }}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
