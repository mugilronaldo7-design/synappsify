"use client";

import { ArrowUpRight } from "lucide-react";


export default function FeaturedWork() {
  const projects = [
    {
      id: 1,
      title: "Muscle Possible",
      description:
        "Premium fitness brand focused on high-quality protein products and strong digital presence.",
      imageBg: "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)",
      category: "E-COMMERCE",
    },
    {
      id: 2,
      title: "BuildCraft Constructions",
      description:
        "Modern website for a construction firm showcasing projects and services.",
      imageBg: "linear-gradient(135deg, #fdf4ff 0%, #fae8ff 100%)",
      category: "CORPORATE",
    },
    {
      id: 3,
      title: "Elite Legal Services",
      description:
        "Professional website for a law firm with clean UI and trust-focused design.",
      imageBg: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
      category: "LEGAL",
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-transparent flex justify-center items-center">
      {/* Outer container card */}
      <div
        className="w-full bg-white mx-auto rounded-3xl"
        style={{
          maxWidth: "1250px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.08), 0 5px 20px rgba(0,0,0,0.05)",
          border: "1px solid rgba(0,0,0,0.05)",
        }}
      >
        {/* Inner padding wrapper — generous breathing room */}
        <div className="p-8 sm:p-10 md:p-12 lg:p-16">
          {/* Header Area */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 mb-8 md:mb-10">
            <h2 className="font-[family-name:var(--font-syne)] font-bold text-4xl sm:text-5xl md:text-[56px] leading-none text-[#0A0A0A] tracking-tight">
              Portfolio.
            </h2>
            <p
              className="font-[family-name:var(--font-inter)] text-base md:text-lg max-w-sm md:text-right"
              style={{ color: "#555555" }}
            >
              Selected work. From local businesses to growing brands.
            </p>
          </div>

          {/* Divider */}
          <hr className="border-none mb-8 md:mb-10" style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }} />

          {/* Scroll container with right-edge fade hint */}
          <div className="relative">
            <div
              className="no-scrollbar flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
              style={{ scrollBehavior: "smooth" }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white transition-all duration-300 hover:-translate-y-[6px] cursor-pointer flex-shrink-0 snap-start rounded-2xl"
                  style={{
                    width: "clamp(280px, 80vw, 340px)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  {/* Image Placeholder */}
                  <div
                    className="h-52 md:h-56 relative w-full overflow-hidden rounded-t-2xl"
                    style={{ background: project.imageBg }}
                  >
                    <div className="absolute top-5 left-5">
                      <span className="px-3.5 py-1.5 bg-white rounded-full text-[10px] font-bold tracking-wider text-[#0A0A0A] shadow-sm">
                        {project.category}
                      </span>
                    </div>

                    {/* Hover overlay and icon */}
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-5 right-5 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <ArrowUpRight size={20} className="text-[#0A0A0A]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 whitespace-normal">
                    <h3
                      className="font-[family-name:var(--font-syne)] font-bold text-xl mb-2 transition-colors duration-200"
                      style={{ color: "#7C3AED" }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="font-[family-name:var(--font-inter)] text-sm leading-relaxed"
                      style={{ color: "#555555" }}
                    >
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right-edge fade hint */}
            <div
              className="absolute right-0 top-0 bottom-0 pointer-events-none"
              style={{
                width: "80px",
                background: "linear-gradient(to left, #ffffff 0%, transparent 100%)",
                zIndex: 2,
              }}
            />
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-5">
            <div
              className="group flex items-center gap-2 transition-opacity duration-200"
              style={{ opacity: 0.5 }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.9")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.5")}
            >
              <span className="font-[family-name:var(--font-inter)] text-xs text-gray-400">
                Scroll
              </span>
              <span
                className="inline-flex items-center justify-center text-gray-400 animate-bounce"
                style={{
                  width: "20px", height: "20px",
                  border: "1px solid #d1d5db",
                  borderRadius: "50%",
                  fontSize: "10px",
                  lineHeight: 1,
                }}
              >
                →
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
