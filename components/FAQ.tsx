"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { question: "Why Synappsify?", answer: "We focus on building high-performing digital products, not just good-looking designs. Our approach combines speed, strategy, and conversion-focused design to help your business grow. You get clear communication, fast delivery, and results that actually matter." },
  { question: "What do you build?", answer: "We create custom digital solutions tailored to your business:\n• Custom websites (high-converting, modern, fast)\n• AI chatbots (smart bots that answer, book, and sell 24/7)\n• Mobile apps (Android & iOS ready)" },
  { question: "What technologies does Synappsify use?", answer: "We use a modern, high-performance tech stack:\n• Next.js (latest version) for both frontend and backend\n• React with TypeScript for scalable UI development\n• Tailwind CSS for fast, clean, responsive design\n• Firebase for database and authentication\n• Stripe for secure payments and integrations" },
  { question: "How long does it take to build a website?", answer: "Most projects are completed within 5–10 days depending on complexity." },
  { question: "How much does a website cost?", answer: "Pricing depends on your requirements, but we offer clear packages with no hidden costs." },
  { question: "Will my website be mobile-friendly?", answer: "Yes, every website we build is fully responsive across all devices." },
  { question: "Do you provide SEO optimization?", answer: "Yes, we follow best practices to ensure your website is search-engine ready." },
  { question: "Do you provide support after launch?", answer: "Yes, we offer ongoing support and maintenance if needed." },
  { question: "How do I get started?", answer: "Simply book a call with us and we'll guide you through everything." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const toggle = (idx: number) => setOpenIndex(openIndex === idx ? -1 : idx);

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
            FAQ.
          </h2>
          <p
            className="font-[family-name:var(--font-inter)]"
            style={{ color: "#555", fontSize: "16px", maxWidth: "280px", textAlign: "right", lineHeight: 1.5 }}
          >
            Straight answers to your questions.
          </p>
        </div>

        {/* Sub-heading */}
        <p
          className="font-[family-name:var(--font-syne)]"
          style={{ fontWeight: 600, fontSize: "18px", color: "#0A0A0A", marginBottom: "20px" }}
        >
          Good to know
        </p>

        {/* Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                onClick={() => toggle(idx)}
                style={{
                  background: "#FAFAFA",
                  borderRadius: "16px",
                  padding: "18px 22px",
                  border: isOpen ? "1px solid rgba(124,58,237,0.2)" : "1px solid rgba(0,0,0,0.06)",
                  boxShadow: isOpen ? "0 8px 24px rgba(124,58,237,0.08)" : "0 2px 8px rgba(0,0,0,0.03)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
                  <span
                    className="font-[family-name:var(--font-inter)]"
                    style={{ fontWeight: 600, fontSize: "15px", color: "#0A0A0A", lineHeight: 1.4 }}
                  >
                    {faq.question}
                  </span>
                  <span style={{ flexShrink: 0, color: isOpen ? "#7C3AED" : "#999", transition: "transform 0.3s ease", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", display: "flex" }}>
                    <ChevronDown size={20} strokeWidth={2.5} />
                  </span>
                </div>

                <div
                  style={{
                    maxHeight: isOpen ? "400px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.35s ease, opacity 0.3s ease",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div
                    className="font-[family-name:var(--font-inter)]"
                    style={{ fontSize: "14px", color: "#666", lineHeight: 1.7, marginTop: "12px" }}
                  >
                    {faq.answer.split("\n").map((line, i) => (
                      <p key={i} style={{ marginBottom: i < faq.answer.split("\n").length - 1 ? "4px" : 0 }}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
