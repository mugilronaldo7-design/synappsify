"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { 
    label: "Services", 
    isDropdown: true,
    items: [
      { 
        label: "Websites", 
        subtitle: "High-performance custom web development",
        href: "#"
      },
      { 
        label: "AI Agents", 
        subtitle: "Intelligent AI systems that automate workflows",
        href: "#"
      },
      { 
        label: "Mobile Apps", 
        subtitle: "Modern cross-platform mobile app solutions",
        href: "#"
      }
    ] 
  },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "mailto:karmugilcr@gmail.com?subject=" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (href: string) => {
    setMenuOpen(false);
    setServicesDropdownOpen(false);
    if (href.startsWith("mailto:")) {
      window.location.href = href;
      return;
    }
    if (href === "#") return;
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
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-24px)] md:w-[calc(100%-48px)] max-w-[1280px] z-50 transition-all duration-300 bg-white rounded-[28px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex justify-between items-center"
        style={{ padding: "10px 10px 10px 24px" }}
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
          {navLinks.map((link) => {
            if (link.isDropdown) {
              return (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                    className="flex items-center gap-1 px-4 py-2 text-sm text-[#555555] hover:text-[#0A0A0A] transition-colors duration-200 rounded-lg hover:bg-black/5 font-[family-name:var(--font-inter)]"
                    aria-expanded={servicesDropdownOpen}
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  
                  {/* Dropdown Menu — Premium service card */}
                  <div
                    className={`absolute top-full left-0 mt-3 bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-200 origin-top ${
                      servicesDropdownOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
                    }`}
                    style={{
                      width: "280px",
                      boxShadow: "0 16px 48px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.06)",
                      padding: "12px",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      {link.items?.map((item) => (
                        <div
                          key={item.label}
                          style={{
                            padding: "14px 16px",
                            borderRadius: "12px",
                            cursor: "default",
                          }}
                        >
                          <p
                            className="font-[family-name:var(--font-syne)]"
                            style={{ fontWeight: 700, fontSize: "15px", color: "#0A0A0A", marginBottom: "4px" }}
                          >
                            {item.label}
                          </p>
                          <p
                            className="font-[family-name:var(--font-inter)]"
                            style={{ fontSize: "13px", color: "#888", fontWeight: 400, lineHeight: 1.5 }}
                          >
                            {item.subtitle}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-sm text-[#555555] hover:text-[#0A0A0A] transition-colors duration-200 rounded-lg hover:bg-black/5 font-[family-name:var(--font-inter)]"
              >
                {link.label}
              </button>
            );
          })}
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
              borderRadius: "10px",
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
        {navLinks.map((link) => {
          if (link.isDropdown) {
            return (
              <div key={link.label} className="flex flex-col items-center w-full">
                <button
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className="flex items-center gap-2 text-2xl font-bold text-[#0A0A0A] hover:text-[#7C3AED] transition-colors font-[family-name:var(--font-syne)] py-2"
                  aria-expanded={servicesDropdownOpen}
                >
                  {link.label}
                  <ChevronDown
                    size={24}
                    className={`transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`flex flex-col items-start w-full px-4 overflow-hidden transition-all duration-300 ${
                    servicesDropdownOpen ? "max-h-80 opacity-100 mt-2 mb-2" : "max-h-0 opacity-0"
                  }`}
                >
                  {link.items?.map((item) => (
                    <div
                      key={item.label}
                      style={{
                        padding: "12px 16px",
                        width: "100%",
                        cursor: "default",
                      }}
                    >
                      <p
                        className="font-[family-name:var(--font-syne)]"
                        style={{ fontWeight: 700, fontSize: "16px", color: "#0A0A0A", marginBottom: "3px" }}
                      >
                        {item.label}
                      </p>
                      <p
                        className="font-[family-name:var(--font-inter)]"
                        style={{ fontSize: "13px", color: "#888", fontWeight: 400 }}
                      >
                        {item.subtitle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="text-2xl font-bold text-[#0A0A0A] hover:text-[#7C3AED] transition-colors font-[family-name:var(--font-syne)] py-2"
            >
              {link.label}
            </button>
          );
        })}
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
            borderRadius: "10px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
          }}
        >
          Book a Call
        </button>
      </div>
    </>
  );
}
