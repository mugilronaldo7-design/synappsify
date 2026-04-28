"use client";

import Link from "next/link";
import { Share2, Users2, MessageCircle, Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Share2, href: "https://instagram.com/synappsify", label: "Instagram" },
  { icon: Users2, href: "https://linkedin.com/company/synappsify", label: "LinkedIn" },
  { icon: MessageCircle, href: "https://wa.me/919999999999", label: "WhatsApp" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="bg-white px-4 sm:px-6 lg:px-8 pt-16 pb-8"
      style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 mb-12">
          {/* Col 1 — Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#0A0A0A] tracking-tight"
            >
              <span style={{ color: "#7C3AED" }}>S</span>ynappsify
            </Link>
            <p
              className="font-[family-name:var(--font-inter)] text-sm leading-relaxed max-w-xs"
              style={{ color: "#6B7280" }}
            >
              Connecting Intelligence. Building Futures. — Your trusted tech partner for websites, apps & AI solutions.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 pt-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    background: "rgba(124,58,237,0.12)",
                    border: "1px solid rgba(124,58,237,0.2)",
                    color: "#7C3AED",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(124,58,237,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(124,58,237,0.12)";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h3
              className="font-[family-name:var(--font-syne)] font-bold text-[#0A0A0A] mb-5 text-base"
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="font-[family-name:var(--font-inter)] text-sm transition-colors duration-200 hover:text-[#0A0A0A] text-left"
                    style={{ color: "#6B7280" }}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact info */}
          <div>
            <h3
              className="font-[family-name:var(--font-syne)] font-bold text-[#0A0A0A] mb-5 text-base"
            >
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@synappsify.com"
                  className="flex items-start gap-3 group"
                >
                  <Mail
                    size={16}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: "#7C3AED" }}
                  />
                  <span
                    className="font-[family-name:var(--font-inter)] text-sm group-hover:text-[#0A0A0A] transition-colors"
                    style={{ color: "#6B7280" }}
                  >
                    hello@synappsify.com
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <Phone
                    size={16}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: "#7C3AED" }}
                  />
                  <span
                    className="font-[family-name:var(--font-inter)] text-sm group-hover:text-[#0A0A0A] transition-colors"
                    style={{ color: "#6B7280" }}
                  >
                    +91 99999 99999
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: "#7C3AED" }}
                />
                <span
                  className="font-[family-name:var(--font-inter)] text-sm leading-relaxed"
                  style={{ color: "#6B7280" }}
                >
                  Coimbatore, Tamil Nadu, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 text-center"
          style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}
        >
          <p
            className="font-[family-name:var(--font-inter)] text-sm"
            style={{ color: "#555555" }}
          >
            © 2025 Synappsify Tech Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
