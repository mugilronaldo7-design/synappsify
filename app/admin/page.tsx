"use client";

import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";

export default function AdminPage() {
  const [portfolioData, setPortfolioData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    link: "",
    category: "",
  });
  
  const [testimonialData, setTestimonialData] = useState({
    name: "",
    feedback: "",
    rating: 5,
    role: "",
    initials: "",
  });

  const [portfolioStatus, setPortfolioStatus] = useState({ type: "", message: "" });
  const [testimonialStatus, setTestimonialStatus] = useState({ type: "", message: "" });

  const handlePortfolioSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPortfolioStatus({ type: "loading", message: "Saving..." });
    try {
      const db = getFirebaseDb();
      await addDoc(collection(db, "portfolio"), {
        ...portfolioData,
        createdAt: serverTimestamp(),
      });
      setPortfolioStatus({ type: "success", message: "Project added successfully!" });
      setPortfolioData({ title: "", description: "", imageUrl: "", link: "", category: "" });
      setTimeout(() => setPortfolioStatus({ type: "", message: "" }), 3000);
    } catch (error: any) {
      console.error(error);
      setPortfolioStatus({ type: "error", message: error.message || "Failed to add project." });
    }
  };

  const handleTestimonialSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTestimonialStatus({ type: "loading", message: "Saving..." });
    try {
      const db = getFirebaseDb();
      await addDoc(collection(db, "testimonials"), {
        ...testimonialData,
        rating: Number(testimonialData.rating),
        createdAt: serverTimestamp(),
      });
      setTestimonialStatus({ type: "success", message: "Testimonial added successfully!" });
      setTestimonialData({ name: "", feedback: "", rating: 5, role: "", initials: "" });
      setTimeout(() => setTestimonialStatus({ type: "", message: "" }), 3000);
    } catch (error: any) {
      console.error(error);
      setTestimonialStatus({ type: "error", message: error.message || "Failed to add testimonial." });
    }
  };

  return (
    <div className="space-y-8">
      {/* Portfolio Section */}
      <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold font-[family-name:var(--font-syne)] text-gray-900 mb-6 border-b border-gray-100 pb-4">
          Manage Portfolio
        </h2>
        <form onSubmit={handlePortfolioSubmit} className="space-y-4 max-w-2xl">
          {portfolioStatus.message && (
            <div className={`p-3 text-sm rounded-lg ${portfolioStatus.type === "error" ? "bg-red-50 text-red-600" : portfolioStatus.type === "success" ? "bg-green-50 text-green-600" : "bg-blue-50 text-blue-600"}`}>
              {portfolioStatus.message}
            </div>
          )}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Project Title *</label>
              <input type="text" required value={portfolioData.title} onChange={(e) => setPortfolioData({ ...portfolioData, title: e.target.value })} className="w-full rounded-lg border-gray-300 border p-2 focus:ring-purple-500 focus:border-purple-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category (e.g. E-COMMERCE)</label>
              <input type="text" value={portfolioData.category} onChange={(e) => setPortfolioData({ ...portfolioData, category: e.target.value.toUpperCase() })} className="w-full rounded-lg border-gray-300 border p-2 focus:ring-purple-500 focus:border-purple-500" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
              <textarea required rows={3} value={portfolioData.description} onChange={(e) => setPortfolioData({ ...portfolioData, description: e.target.value })} className="w-full rounded-lg border-gray-300 border p-2 focus:ring-purple-500 focus:border-purple-500" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
              <input type="url" value={portfolioData.imageUrl} onChange={(e) => setPortfolioData({ ...portfolioData, imageUrl: e.target.value })} className="w-full rounded-lg border-gray-300 border p-2 focus:ring-purple-500 focus:border-purple-500" placeholder="https://..." />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Project Link (Optional)</label>
              <input type="url" value={portfolioData.link} onChange={(e) => setPortfolioData({ ...portfolioData, link: e.target.value })} className="w-full rounded-lg border-gray-300 border p-2 focus:ring-purple-500 focus:border-purple-500" placeholder="https://..." />
            </div>
          </div>
          <button type="submit" disabled={portfolioStatus.type === "loading"} className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 disabled:opacity-50 transition-colors">
            Add Project
          </button>
        </form>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold font-[family-name:var(--font-syne)] text-gray-900 mb-6 border-b border-gray-100 pb-4">
          Manage Testimonials
        </h2>
        <form onSubmit={handleTestimonialSubmit} className="space-y-4 max-w-2xl">
          {testimonialStatus.message && (
            <div className={`p-3 text-sm rounded-lg ${testimonialStatus.type === "error" ? "bg-red-50 text-red-600" : testimonialStatus.type === "success" ? "bg-green-50 text-green-600" : "bg-blue-50 text-blue-600"}`}>
              {testimonialStatus.message}
            </div>
          )}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Client Name *</label>
              <input type="text" required value={testimonialData.name} onChange={(e) => {
                const name = e.target.value;
                const initials = name.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase();
                setTestimonialData({ ...testimonialData, name, initials });
              }} className="w-full rounded-lg border-gray-300 border p-2 focus:ring-purple-500 focus:border-purple-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Client Role/Company</label>
              <input type="text" value={testimonialData.role} onChange={(e) => setTestimonialData({ ...testimonialData, role: e.target.value })} className="w-full rounded-lg border-gray-300 border p-2 focus:ring-purple-500 focus:border-purple-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Rating (1-5) *</label>
              <input type="number" required min="1" max="5" value={testimonialData.rating} onChange={(e) => setTestimonialData({ ...testimonialData, rating: Number(e.target.value) })} className="w-full rounded-lg border-gray-300 border p-2 focus:ring-purple-500 focus:border-purple-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Initials (Auto-generated)</label>
              <input type="text" maxLength={2} value={testimonialData.initials} onChange={(e) => setTestimonialData({ ...testimonialData, initials: e.target.value.toUpperCase() })} className="w-full rounded-lg border-gray-300 border p-2 bg-gray-50 focus:ring-purple-500 focus:border-purple-500" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Feedback *</label>
              <textarea required rows={4} value={testimonialData.feedback} onChange={(e) => setTestimonialData({ ...testimonialData, feedback: e.target.value })} className="w-full rounded-lg border-gray-300 border p-2 focus:ring-purple-500 focus:border-purple-500" />
            </div>
          </div>
          <button type="submit" disabled={testimonialStatus.type === "loading"} className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 disabled:opacity-50 transition-colors">
            Add Testimonial
          </button>
        </form>
      </section>
    </div>
  );
}
