"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Why Synappsify?",
    answer:
      "We focus on building high-performing digital products, not just good-looking designs. Our approach combines speed, strategy, and conversion-focused design to help your business grow. You get clear communication, fast delivery, and results that actually matter.",
  },
  {
    question: "What do you build?",
    answer:
      "We create custom digital solutions tailored to your business:\n• Custom websites (high-converting, modern, fast)\n• AI chatbots (smart bots that answer, book, and sell 24/7)\n• Mobile apps (Android & iOS ready)",
  },
  {
    question: "What technologies does Synappsify use?",
    answer:
      "We use a modern, high-performance tech stack:\n• Next.js (latest version) for both frontend and backend\n• React with TypeScript for scalable UI development\n• Tailwind CSS for fast, clean, responsive design\n• Firebase for database and authentication\n• Stripe for secure payments and integrations",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Most projects are completed within 5–10 days depending on complexity.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Pricing depends on your requirements, but we offer clear packages with no hidden costs.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Yes, every website we build is fully responsive across all devices.",
  },
  {
    question: "Do you provide SEO optimization?",
    answer:
      "Yes, we follow best practices to ensure your website is search-engine ready.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes, we offer ongoing support and maintenance if needed.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply book a call with us and we'll guide you through everything.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section
      className="w-full flex justify-center items-center px-4 sm:px-6 lg:px-8"
      style={{ margin: "120px auto" }}
    >
      <div
        className="w-full bg-white"
        style={{
          maxWidth: "1250px",
          borderRadius: "28px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.08), 0 5px 20px rgba(0,0,0,0.05)",
          border: "1px solid rgba(0,0,0,0.05)",
          padding: "60px",
        }}
      >
        {/* ── Header ── */}
        <div
          className="flex flex-col md:flex-row md:items-center justify-between"
          style={{
            borderBottom: "1px solid rgba(0,0,0,0.08)",
            paddingBottom: "16px",
            marginBottom: "40px",
            gap: "32px",
          }}
        >
          <h2 className="font-[family-name:var(--font-syne)] font-bold text-4xl sm:text-5xl md:text-[56px] leading-none text-[#0A0A0A] tracking-tight">
            FAQ.
          </h2>
          <p
            className="font-[family-name:var(--font-inter)] text-base md:text-lg max-w-xs md:text-right"
            style={{ color: "#555555" }}
          >
            Straight answers to your questions.
          </p>
        </div>

        {/* ── Sub-heading ── */}
        <p
          className="font-[family-name:var(--font-syne)] font-semibold text-xl text-[#0A0A0A]"
          style={{ marginBottom: "24px" }}
        >
          Good to know
        </p>

        {/* ── Accordion Items ── */}
        <div className="flex flex-col" style={{ gap: "12px" }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                onClick={() => toggle(idx)}
                className="group cursor-pointer transition-all duration-200"
                style={{
                  background: "#FAFAFA",
                  borderRadius: "16px",
                  padding: "20px 24px",
                  border: isOpen
                    ? "1px solid rgba(124,58,237,0.2)"
                    : "1px solid rgba(0,0,0,0.04)",
                  boxShadow: isOpen
                    ? "0 8px 24px rgba(124,58,237,0.08)"
                    : "0 2px 8px rgba(0,0,0,0.03)",
                }}
              >
                {/* Question row */}
                <div className="flex items-center justify-between gap-4">
                  <span
                    className="font-[family-name:var(--font-inter)] font-semibold text-[16px] md:text-[17px] text-[#0A0A0A] leading-snug"
                  >
                    {faq.question}
                  </span>
                  <span
                    className="flex-shrink-0 transition-transform duration-300"
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      color: isOpen ? "#7C3AED" : "#999999",
                    }}
                  >
                    <ChevronDown size={20} strokeWidth={2.5} />
                  </span>
                </div>

                {/* Answer — animated height via max-height trick */}
                <div
                  style={{
                    maxHeight: isOpen ? "400px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.35s ease-in-out, opacity 0.3s ease",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div
                    className="font-[family-name:var(--font-inter)] text-[15px] leading-relaxed"
                    style={{ color: "#666666", marginTop: "10px" }}
                  >
                    {faq.answer.split("\n").map((line, i) => (
                      <p key={i} style={{ marginBottom: i < faq.answer.split("\n").length - 1 ? "4px" : "0" }}>
                        {line}
                      </p>
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
