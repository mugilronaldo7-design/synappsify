"use client";

import { useState, useRef } from "react";
import { useFirebase, ContactFormData } from "@/hooks/useFirebase";
import { Mail, MessageCircle, MapPin, CheckCircle, Loader2 } from "lucide-react";

const services = [
  "Website Development",
  "Mobile App (Flutter)",
  "AI Chatbot",
  "Full Package",
  "Other",
];

const emptyForm: ContactFormData = {
  name: "",
  businessName: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<ContactFormData>(emptyForm);
  const { submitContact, loading, success, error, resetState } = useFirebase();
  const formRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitContact(form);
    if (!error) setForm(emptyForm);
  };

  return (
    <section
      id="contact"
      className="bg-white py-20 lg:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Top CTA block */}
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-syne)] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0A0A0A] mb-4">
            Ready to Build Something Remarkable?
          </h2>
          <p
            className="font-[family-name:var(--font-inter)] text-base sm:text-lg max-w-lg mx-auto mb-8"
            style={{ color: "#555555" }}
          >
            Let's talk about your website, app, or AI project. First consultation is completely free.
          </p>

          {/* CTA buttons row */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 font-[family-name:var(--font-inter)]"
              style={{
                background: "linear-gradient(135deg, #5B21B6, #7C3AED)",
                color: "#ffffff",
                boxShadow: "0 4px 20px rgba(124, 58, 237, 0.35)",
              }}
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
            <a
              href="mailto:hello@synappsify.com"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-sm border border-gray-200 text-[#0A0A0A] transition-all duration-300 hover:bg-black/5 font-[family-name:var(--font-inter)]"
            >
              <Mail size={18} />
              Send an Email
            </a>
          </div>

          {/* Contact details */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-[family-name:var(--font-inter)]">
            <a
              href="mailto:hello@synappsify.com"
              className="flex items-center gap-2 text-[#555555] hover:text-[#0A0A0A] transition-colors"
            >
              <Mail size={15} style={{ color: "#A78BFA" }} />
              hello@synappsify.com
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#555555] hover:text-[#0A0A0A] transition-colors"
            >
              <MessageCircle size={15} style={{ color: "#A78BFA" }} />
              +91 99999 99999
            </a>
            <span className="flex items-center gap-2 text-[#555555]">
              <MapPin size={15} style={{ color: "#A78BFA" }} />
              Coimbatore, Tamil Nadu, India
            </span>
          </div>
        </div>

        {/* Contact form card */}
        <div
          ref={formRef}
          className="rounded-2xl p-6 sm:p-10"
          style={{
            background: "#FFFFFF",
            border: "1px solid rgba(0,0,0,0.05)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
          }}
        >
          {success ? (
            /* Success state */
            <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ background: "rgba(124,58,237,0.15)" }}
              >
                <CheckCircle size={40} style={{ color: "#7C3AED" }} />
              </div>
              <h3 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#0A0A0A]">
                Message Received!
              </h3>
              <p
                className="font-[family-name:var(--font-inter)] text-base max-w-sm"
                style={{ color: "#555555" }}
              >
                We'll reach out within 4 hours!
              </p>
              <button
                onClick={resetState}
                className="mt-4 px-6 py-2.5 rounded-full text-sm font-semibold font-[family-name:var(--font-inter)] text-white transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, #5B21B6, #7C3AED)" }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <h3 className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#0A0A0A] mb-6">
                Get in Touch
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-xs font-semibold mb-1.5 font-[family-name:var(--font-inter)]"
                      style={{ color: "#555555" }}
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Rajesh Kumar"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold mb-1.5 font-[family-name:var(--font-inter)]"
                      style={{ color: "#555555" }}
                    >
                      Business Name *
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      required
                      placeholder="FitLife Gym"
                      value={form.businessName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-xs font-semibold mb-1.5 font-[family-name:var(--font-inter)]"
                      style={{ color: "#555555" }}
                    >
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 99999 99999"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold mb-1.5 font-[family-name:var(--font-inter)]"
                      style={{ color: "#555555" }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@business.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold mb-1.5 font-[family-name:var(--font-inter)]"
                    style={{ color: "#555555" }}
                  >
                    Service Needed *
                  </label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select a service...
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold mb-1.5 font-[family-name:var(--font-inter)]"
                    style={{ color: "#555555" }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project, budget, and timeline..."
                    value={form.message}
                    onChange={handleChange}
                    style={{ resize: "none" }}
                  />
                </div>

                {error && (
                  <p
                    className="text-sm font-[family-name:var(--font-inter)] px-4 py-3 rounded-xl"
                    style={{ background: "rgba(239,68,68,0.1)", color: "#FCA5A5", border: "1px solid rgba(239,68,68,0.2)" }}
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-bold text-base text-white transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:scale-100 font-[family-name:var(--font-inter)]"
                  style={{
                    background: "linear-gradient(135deg, #5B21B6, #7C3AED)",
                    boxShadow: "0 6px 30px rgba(124,58,237,0.4)",
                  }}
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message →"
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
