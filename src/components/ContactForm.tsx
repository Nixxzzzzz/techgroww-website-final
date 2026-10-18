"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}

interface FormState {
  status: "idle" | "loading" | "success" | "error";
  message: string;
}

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/YOUR_GOOGLE_APPS_SCRIPT_URL_HERE/exec";

const services = [
  "Web Platform / SaaS Development",
  "Mobile App (iOS & Android)",
  "Autonomous AI & LLM Systems",
  "Cloud Architecture & DevOps SRE",
  "Bespoke UI/UX Design System",
  "Growth Engineering & Algorithmic SEO",
  "Codebase Audit / Performance Optimization",
  "Other / Custom Requirement",
];

const budgetRanges = [
  "$3,000 - $6,000",
  "$6,000 - $12,000",
  "$12,000 - $25,000",
  "$25,000+",
];

const timelines = [
  "Immediate (Rush Sprint)",
  "Within 2 - 4 Weeks",
  "Within 1 - 2 Months",
  "Flexible / Exploring",
];

function ContactFormInner() {
  const searchParams = useSearchParams();
  const preSelectedService = searchParams.get("service") || "";
  const preSelectedPackage = searchParams.get("package") || "";
  const preSelectedTier = searchParams.get("tier") || "";
  const preSelectedCaseStudy = searchParams.get("caseStudy") || "";

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "$6,000 - $12,000",
    timeline: "Within 2 - 4 Weeks",
    message: "",
  });

  const [formState, setFormState] = useState<FormState>({
    status: "idle",
    message: "",
  });

  // Pre-fill fields if user came from pricing or services
  useEffect(() => {
    if (preSelectedService) {
      setFormData((prev) => ({
        ...prev,
        service: services.find((s) => s.toLowerCase().includes(preSelectedService.toLowerCase().slice(0, 4))) || services[0],
      }));
    }
    if (preSelectedPackage) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message || `Interested in: ${preSelectedPackage}`,
      }));
    }
    if (preSelectedCaseStudy) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message || `Inspired by Case Study: ${preSelectedCaseStudy}`,
      }));
    }
  }, [preSelectedService, preSelectedPackage, preSelectedCaseStudy]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ status: "loading", message: "" });

    try {
      const params = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service || "Unspecified",
        budget: formData.budget,
        timeline: formData.timeline,
        message: formData.message,
        timestamp: new Date().toISOString(),
      });

      // Submit directly to Google Sheets via Google Apps Script Web App
      await fetch(`${GOOGLE_SHEET_URL}?${params.toString()}`, {
        method: "GET",
        mode: "no-cors",
      });

      setFormState({
        status: "success",
        message:
          "🎉 We have received your project brief! Our senior technical team is reviewing your requirements and will reach out with a personalized roadmap within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        budget: "$6,000 - $12,000",
        timeline: "Within 2 - 4 Weeks",
        message: "",
      });
    } catch (error) {
      console.error("Submission failed:", error);
      setFormState({
        status: "error",
        message:
          "Encountered a network issue. Please email us directly at hello@techgroww.dev or chat via WhatsApp.",
      });
    }
  };

  const inputClass =
    "w-full bg-[#0a0d18] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-slate-500 text-xs sm:text-sm transition-all focus:border-indigo-500 focus:bg-[#0e1222] focus:outline-none";

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/[0.12] shadow-2xl relative overflow-hidden">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
        <div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Schedule Technical Roadmap Session
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Free 30-min architecture consultation • Direct senior engineer review
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Active Response &lt; 2h</span>
        </div>
      </div>

      {formState.status === "success" ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center text-3xl mx-auto mb-5 shadow-lg shadow-emerald-500/20">
            ✓
          </div>
          <h4 className="text-2xl font-black text-white mb-3">
            Blueprint Request Received!
          </h4>
          <p className="text-slate-300 text-sm leading-relaxed max-w-md mx-auto mb-8">
            {formState.message}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => setFormState({ status: "idle", message: "" })}
              className="btn-gradient px-6 py-3 rounded-xl text-white text-xs font-bold"
            >
              Submit Another Inquiry
            </button>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-6 py-3 rounded-xl text-emerald-300 border border-emerald-500/30 text-xs font-bold flex items-center gap-2 hover:bg-emerald-500/10"
            >
              <span>Instant WhatsApp Discussion →</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Alex Morgan"
                className={inputClass}
                id="contact-name"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Work Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="alex@company.com"
                className={inputClass}
                id="contact-email"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Phone / WhatsApp Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className={inputClass}
                id="contact-phone"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Primary Core Service Needed *
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className={`${inputClass} cursor-pointer`}
                id="contact-service"
              >
                <option value="" className="bg-[#0e1222]">
                  Select required capability
                </option>
                {services.map((s) => (
                  <option key={s} value={s} className="bg-[#0e1222]">
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Expected Budget Range
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className={`${inputClass} cursor-pointer`}
              >
                {budgetRanges.map((b) => (
                  <option key={b} value={b} className="bg-[#0e1222]">
                    {b}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Target Launch Timeline
              </label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className={`${inputClass} cursor-pointer`}
              >
                {timelines.map((t) => (
                  <option key={t} value={t} className="bg-[#0e1222]">
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Project Scope & Objectives *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Tell us about your project, current bottlenecks, and target milestones..."
              className={`${inputClass} resize-none`}
              id="contact-message"
            />
          </div>

          {formState.status === "error" && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs">
              {formState.message}
            </div>
          )}

          <button
            type="submit"
            disabled={formState.status === "loading"}
            className="btn-gradient w-full py-4 rounded-xl text-white font-bold text-xs sm:text-sm tracking-wide shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            id="contact-submit"
          >
            {formState.status === "loading" ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Transmitting Encrypted Lead...</span>
              </>
            ) : (
              <span>Submit Project Brief & Lock In Strategy Session →</span>
            )}
          </button>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
            <span>🔒 Strict Mutual NDA Protection</span>
            <span>⚡ Direct Google Sheets & Slack Integration</span>
            <span>⏱️ 24h Guaranteed Response SLA</span>
          </div>
        </form>
      )}
    </div>
  );
}

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#06070b]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-indigo-600/[0.08] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-cyan-600/[0.06] blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Direct Contact Details & SLA */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-6">
              <span>💬</span>
              <span>Direct Communication Lines</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              Let&apos;s Build Something <span className="gradient-text">Exceptional.</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              No generic sales pitches. You will speak directly with our senior software architects to scope your technical challenges and architect a high-growth solution.
            </p>

            {/* Quick Touchpoint Cards */}
            <div className="space-y-3 mb-8">
              {[
                {
                  icon: "💬",
                  label: "Instant WhatsApp Chat",
                  val: "+91 98765 43210 (Online Now)",
                  href: "https://wa.me/919876543210?text=Hi%20Tech%20Groww%2C%20I%27d%20like%20to%20discuss%20a%20project",
                  color: "border-emerald-500/30 text-emerald-300 bg-emerald-500/5 hover:border-emerald-500/60",
                },
                {
                  icon: "📧",
                  label: "Direct Inquiries Email",
                  val: "hello@techgroww.dev",
                  href: "mailto:hello@techgroww.dev",
                  color: "border-indigo-500/30 text-indigo-300 bg-indigo-500/5 hover:border-indigo-500/60",
                },
                {
                  icon: "💼",
                  label: "LinkedIn Verified Profile",
                  val: "Tech Groww on LinkedIn",
                  href: "https://www.linkedin.com/company/102058460",
                  color: "border-blue-500/30 text-blue-300 bg-blue-500/5 hover:border-blue-500/60",
                },
                {
                  icon: "📍",
                  label: "Headquarters & Global Hub",
                  val: "Noida Cyber Corridor, NCR India",
                  href: "#",
                  color: "border-white/[0.08] text-slate-300 bg-white/[0.02]",
                },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-4 p-4 rounded-2xl border ${item.color} transition-all duration-200 group block`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono uppercase">{item.label}</div>
                    <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.val}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Timezone Overlap Badge */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                Active Timezone Overlap:
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                <div>🇺🇸 US Eastern (EST): 4h overlap</div>
                <div>🇬🇧 UK / Europe (GMT): 6h overlap</div>
                <div>🇦🇪 Dubai (GST): 7h overlap</div>
                <div>🇮🇳 India (IST): Full Day</div>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="glass-card p-12 text-center text-slate-400">Loading Form Engine...</div>}>
              <ContactFormInner />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
