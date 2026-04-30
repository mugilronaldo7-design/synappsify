"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function CTASection() {
  const [hovered, setHovered] = useState(false);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

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
      <div
        className="w-full relative overflow-hidden rounded-3xl"
        style={{
          maxWidth: "1250px",
          background: "#0B0B0F",
          boxShadow: "0 25px 80px rgba(0,0,0,0.5)",
        }}
      >
        {/* Glow blobs */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
          <div style={{
            position: "absolute", top: "-60px", left: "-60px",
            width: "400px", height: "400px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)",
            filter: "blur(60px)",
          }} />
          <div style={{
            position: "absolute", bottom: "-80px", right: "10%",
            width: "360px", height: "360px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)",
            filter: "blur(60px)",
          }} />
          <div style={{
            position: "absolute", top: "30%", right: "-40px",
            width: "280px", height: "280px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(236,72,153,0.14) 0%, transparent 70%)",
            filter: "blur(60px)",
          }} />
        </div>

        {/* Content — single inner padding */}
        <div
          className="relative"
          style={{
            padding: "clamp(28px, 5vw, 64px)",
            zIndex: 1,
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6">
          {/* LEFT */}
          <div className="flex-1 max-w-xl">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span
                style={{
                  width: "7px", height: "7px", borderRadius: "50%",
                  background: "#22C55E",
                  boxShadow: "0 0 8px rgba(34,197,94,0.9)",
                  flexShrink: 0,
                }}
              />
              <span
                className="font-[family-name:var(--font-inter)] text-sm font-medium"
                style={{ color: "#22C55E", letterSpacing: "0.04em" }}
              >
                Get in touch
              </span>
            </div>

            {/* Heading */}
            <h2
              className="font-[family-name:var(--font-syne)] font-bold text-white"
              style={{
                fontSize: "clamp(26px, 4vw, 44px)",
                lineHeight: 1.15,
                marginBottom: "16px",
              }}
            >
              Ready to build something that{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #A78BFA, #7C3AED)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                actually works?
              </span>
            </h2>

            {/* Subtext */}
            <p
              className="font-[family-name:var(--font-inter)] text-base leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)", marginBottom: "32px", maxWidth: "480px" }}
            >
              Tell me what you need. I&apos;ll help you build it clean, fast, and properly.
            </p>

            {/* CTA Button */}
            <button
              onClick={scrollToContact}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="inline-flex items-center gap-2.5 font-[family-name:var(--font-inter)] font-bold transition-all duration-200"
              style={{
                padding: "16px 32px",
                fontSize: "16px",
                borderRadius: "14px",
                background: "#FFFFFF",
                color: "#0B0B0F",
                transform: hovered ? "scale(1.04)" : "scale(1)",
                boxShadow: hovered
                  ? "0 0 40px rgba(124,58,237,0.5), 0 8px 30px rgba(0,0,0,0.4)"
                  : "0 4px 20px rgba(0,0,0,0.4)",
              }}
            >
              Start Project <ArrowRight size={18} />
            </button>
          </div>

          {/* RIGHT — Glass card */}
          <div
            className="flex-shrink-0 w-full md:w-auto"
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(14px)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "20px",
              padding: "28px 32px",
              minWidth: "240px",
            }}
          >
            {/* Logo */}
            <p
              className="font-[family-name:var(--font-syne)] font-bold text-white text-xl mb-1"
            >
              <span style={{ color: "#A78BFA" }}>S</span>ynappsify
            </p>
            <p
              className="font-[family-name:var(--font-inter)] text-sm mb-6"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Web, AI &amp; App Development
            </p>

            {/* Divider */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginBottom: "16px" }} />

            {/* Status */}
            <div className="inline-flex items-center gap-2">
              <span
                style={{
                  width: "8px", height: "8px", borderRadius: "50%",
                  background: "#22C55E",
                  boxShadow: "0 0 8px rgba(34,197,94,0.9)",
                  flexShrink: 0,
                }}
              />
              <span
                className="font-[family-name:var(--font-inter)] text-sm"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                Available for new projects
              </span>
            </div>
          </div>
          </div>{/* end flex row */}

          {/* Footer bar */}
          <div
            className="flex flex-wrap items-center justify-between gap-4 pt-6 mt-6"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            {/* Left — logo + links */}
            <div
              className="flex flex-wrap items-center gap-x-4 gap-y-1 font-[family-name:var(--font-inter)] text-sm"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              <span
                className="font-[family-name:var(--font-syne)] font-semibold"
                style={{ color: "#ffffff" }}
              >
                Synappsify
              </span>
              <span>© 2026</span>
              {["Services", "About", "Portfolio", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="transition-colors duration-150 hover:text-white"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  · {link}
                </button>
              ))}
            </div>

            {/* Right — social icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition duration-300"
              >
                <FaWhatsapp className="text-white text-2xl" />
              </a>
              <a
                href="https://instagram.com/synappsify"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition duration-300"
              >
                <FaInstagram className="text-white text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

