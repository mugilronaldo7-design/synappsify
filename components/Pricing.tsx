"use client";

import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      id: 1,
      title: "Starter Plan",
      description: "Best for: Individuals, portfolios",
      price: "₹2,999",
      features: ["1 page website", "Mobile responsive", "Clean UI design", "Contact form", "Basic SEO", "Delivery in 2–4 days", "1 month support"],
      gradient: "linear-gradient(135deg, #E6F9F0, #CFF5E1)",
      btnColor: "#16A34A",
      isPopular: false,
    },
    {
      id: 2,
      title: "Business Plan",
      description: "Best for: Small businesses",
      price: "₹7,999",
      features: ["Up to 5 pages", "Custom design", "Mobile responsive", "CMS setup", "Speed optimization", "SEO setup", "Delivery in 5–10 days", "2 months support"],
      gradient: "linear-gradient(135deg, #EAF2FF, #DCE8FF)",
      btnColor: "#3B82F6",
      isPopular: true,
    },
    {
      id: 3,
      title: "Pro Plan",
      description: "Best for: Businesses and scaling brands",
      price: "Starting ₹14,999",
      features: ["Up to 10 pages", "Custom UI design with smooth animations", "Dynamic content & API integrations", "E-commerce setup", "Performance optimization", "Delivery in 10–20 days", "3 months support"],
      gradient: "linear-gradient(135deg, #F3EEFF, #E5D9FF)",
      btnColor: "#7436DF",
      isPopular: false,
    },
  ];

  return (
    <section
      id="pricing"
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
            Pricing.
          </h2>
          <p
            className="font-[family-name:var(--font-inter)]"
            style={{ color: "#555", fontSize: "16px", maxWidth: "280px", textAlign: "right", lineHeight: 1.5 }}
          >
            Transparent pricing. Built for growing businesses.
          </p>
        </div>

        {/* Cards grid — stacks on mobile, 3-col on desktop */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
            gap: "24px",
          }}
        >
          {plans.map((plan) => (
            <div
              key={plan.id}
              style={{
                background: plan.gradient,
                borderRadius: "24px",
                padding: "clamp(20px, 4vw, 36px)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                border: "1px solid rgba(0,0,0,0.04)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.25s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              {plan.isPopular && (
                <div
                  style={{
                    position: "absolute", top: 0, right: 0,
                    background: "#3B82F6", color: "#fff",
                    fontSize: "10px", fontWeight: 700,
                    padding: "6px 14px",
                    borderBottomLeftRadius: "12px",
                    letterSpacing: "0.06em",
                  }}
                >
                  POPULAR
                </div>
              )}

              {/* Top content */}
              <div style={{ flex: 1 }}>
                <div style={{ marginBottom: "12px" }}>
                  <h3
                    className="font-[family-name:var(--font-syne)]"
                    style={{ fontWeight: 700, fontSize: "22px", color: "#0A0A0A", marginBottom: "8px" }}
                  >
                    {plan.title}
                  </h3>
                  <p
                    className="font-[family-name:var(--font-inter)]"
                    style={{ fontSize: "15px", color: "#555", lineHeight: 1.5 }}
                  >
                    {plan.description}
                  </p>
                </div>

                <div
                  className="font-[family-name:var(--font-syne)]"
                  style={{ fontWeight: 700, fontSize: "clamp(28px, 4vw, 40px)", color: "#0A0A0A", marginBottom: "14px", letterSpacing: "-1px" }}
                >
                  {plan.price}
                </div>

                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="font-[family-name:var(--font-inter)]"
                      style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "#333", lineHeight: 1.5 }}
                    >
                      <span
                        style={{
                          flexShrink: 0, marginTop: "2px",
                          width: "18px", height: "18px",
                          background: "#fff",
                          borderRadius: "50%",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                          color: plan.btnColor,
                        }}
                      >
                        <Check size={11} strokeWidth={3} />
                      </span>
                      <span style={{ fontWeight: 500 }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
