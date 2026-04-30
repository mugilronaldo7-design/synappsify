"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

export default function FeaturedWork() {
  const initialProjects = [
    {
      id: "1",
      title: "Muscle Possible",
      description: "Premium fitness brand focused on high-quality protein products and strong digital presence.",
      imageBg: "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)",
      category: "E-COMMERCE",
      imageUrl: "",
      link: "",
    },
    {
      id: "2",
      title: "BuildCraft Constructions",
      description: "Modern website for a construction firm showcasing projects and services.",
      imageBg: "linear-gradient(135deg, #fdf4ff 0%, #fae8ff 100%)",
      category: "CORPORATE",
      imageUrl: "",
      link: "",
    },
    {
      id: "3",
      title: "Elite Legal Services",
      description: "Professional website for a law firm with clean UI and trust-focused design.",
      imageBg: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
      category: "LEGAL",
      imageUrl: "",
      link: "",
    },
  ];

  const [projects, setProjects] = useState<any[]>(initialProjects);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { getFirebaseDb } = await import("@/lib/firebase");
        const { collection, getDocs, query, orderBy } = await import("firebase/firestore");
        const db = getFirebaseDb();
        const q = query(collection(db, "portfolio"), orderBy("createdAt", "asc"));
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
          const fetchedProjects = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            imageBg: "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)", // Default background if no image
          }));
          setProjects(fetchedProjects);
        }
      } catch (e) {
        console.error("Failed to fetch projects:", e);
      }
    };
    
    fetchProjects();
  }, []);

  return (
    <section
      id="work"
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
            Portfolio.
          </h2>
          <p
            className="font-[family-name:var(--font-inter)]"
            style={{ color: "#555", fontSize: "16px", maxWidth: "280px", textAlign: "right", lineHeight: 1.5 }}
          >
            Selected work. From local businesses to growing brands.
          </p>
        </div>

        {/* Scroll container */}
        <div style={{ position: "relative" }}>
          <div
            className="no-scrollbar"
            style={{
              display: "flex",
              gap: "20px",
              overflowX: "auto",
              paddingBottom: "12px",
              scrollSnapType: "x mandatory",
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="group"
                onClick={() => {
                  if (project.link) window.open(project.link, "_blank");
                }}
                style={{
                  flex: "0 0 auto",
                  width: "min(320px, 82vw)",
                  scrollSnapAlign: "start",
                  borderRadius: "24px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.07)",
                  border: "1px solid rgba(0,0,0,0.06)",
                  background: "#fff",
                  overflow: "hidden",
                  transition: "transform 0.25s ease",
                  cursor: project.link ? "pointer" : "default",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                {/* Image area */}
                <div style={{ 
                  height: "200px", 
                  position: "relative", 
                  background: project.imageBg,
                  backgroundImage: project.imageUrl ? `url(${project.imageUrl})` : undefined,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}>
                  <div style={{ position: "absolute", top: "16px", left: "16px" }}>
                    <span
                      className="font-[family-name:var(--font-inter)]"
                      style={{ padding: "6px 14px", background: "#fff", borderRadius: "999px", fontSize: "10px", fontWeight: 700, letterSpacing: "0.06em", color: "#0A0A0A", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
                    >
                      {project.category || "PROJECT"}
                    </span>
                  </div>
                  {project.link && (
                    <div
                      className="opacity-0 group-hover:opacity-100"
                      style={{ position: "absolute", bottom: "16px", right: "16px", width: "44px", height: "44px", background: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 16px rgba(0,0,0,0.15)", transition: "all 0.25s ease" }}
                    >
                      <ArrowUpRight size={18} color="#0A0A0A" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div style={{ padding: "24px" }}>
                  <h3
                    className="font-[family-name:var(--font-syne)]"
                    style={{ fontWeight: 700, fontSize: "18px", color: "#7C3AED", marginBottom: "8px" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="font-[family-name:var(--font-inter)]"
                    style={{ fontSize: "14px", color: "#555", lineHeight: 1.6 }}
                  >
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Fade hint */}
          <div
            style={{
              position: "absolute", right: 0, top: 0, bottom: 0,
              width: "60px", pointerEvents: "none",
              background: "linear-gradient(to left, #ffffff, transparent)",
              zIndex: 2,
            }}
          />
        </div>

        {/* Scroll indicator */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <span
            className="font-[family-name:var(--font-inter)]"
            style={{ fontSize: "12px", color: "#aaa", display: "flex", alignItems: "center", gap: "6px" }}
          >
            Scroll
            <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px", border: "1px solid #d1d5db", borderRadius: "50%", fontSize: "10px" }}>→</span>
          </span>
        </div>
      </div>
    </section>
  );
}
