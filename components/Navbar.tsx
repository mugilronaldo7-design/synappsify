"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-5 left-1/2 -translate-x-1/2 w-[calc(100%-40px)] max-w-[1200px] z-50 transition-all duration-300 bg-white rounded-[28px] shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "48px",
          paddingRight: "48px",
          paddingTop: "8px",
          paddingBottom: "8px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-[family-name:var(--font-syne)] font-bold text-xl md:text-2xl text-[#0A0A0A] tracking-tight flex-shrink-0"
        >
          <span className="text-[#7C3AED]">S</span>ynappsify
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex flex-row items-center justify-center flex-1 gap-6 lg:gap-8 mx-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="px-4 py-2 text-sm text-[#555555] hover:text-[#0A0A0A] transition-colors duration-200 rounded-lg hover:bg-black/5 font-[family-name:var(--font-inter)]"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={() => scrollToSection("#contact")}
            className="hidden md:inline-flex items-center justify-center transition-all duration-200 ease-out hover:scale-105 hover:shadow-lg font-[family-name:var(--font-inter)]"
            style={{
              height: "52px",
              padding: "0 32px",
              fontSize: "16px",
              fontWeight: "600",
              background: "#000000",
              color: "#FFFFFF",
              borderRadius: "999px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
            }}
          >
            Book a Call
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#0A0A0A] p-2 rounded-lg hover:bg-black/5 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col justify-center items-center gap-4 transition-all duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <button
            key={link.label}
            onClick={() => scrollToSection(link.href)}
            className="text-2xl font-bold text-[#0A0A0A] hover:text-[#7C3AED] transition-colors font-[family-name:var(--font-syne)] py-2"
          >
            {link.label}
          </button>
        ))}
        <button
          onClick={() => scrollToSection("#contact")}
          className="mt-6 transition-all duration-200 hover:scale-105 font-[family-name:var(--font-inter)]"
          style={{
            height: "52px",
            padding: "0 32px",
            fontSize: "16px",
            fontWeight: "600",
            background: "#000000",
            color: "#FFFFFF",
            borderRadius: "999px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
          }}
        >
          Book a Call
        </button>
      </div>
    </>
  );
}
