"use client";

import { useState, useRef, useEffect } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormState {
  status: "idle" | "loading" | "success" | "error";
  message: string;
}

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/YOUR_GOOGLE_APPS_SCRIPT_URL_HERE/exec";

const services = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Cloud & DevOps",
  "Digital Marketing & SEO",
  "AI & Automation",
  "Other / Not Sure",
];

export default function ContactForm() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [formState, setFormState] = useState<FormState>({
    status: "idle",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".section-reveal").forEach((el) => {
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ status: "loading", message: "" });

    try {
      // Send to Google Sheets via Apps Script
      const params = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        timestamp: new Date().toISOString(),
      });

      const response = await fetch(`${GOOGLE_SHEET_URL}?${params.toString()}`, {
        method: "GET",
        mode: "no-cors", // Required for Google Apps Script
      });

      // With no-cors, we always get an opaque response — treat as success
      console.log("Form submitted", response);

      setFormState({
        status: "success",
        message:
          "🎉 Thank you! We've received your message and will get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      setFormState({
        status: "error",
        message:
          "Something went wrong. Please try again or contact us directly at hello@techgroww.dev",
      });
    }
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm transition-all duration-200 focus:bg-white/8";

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div
        ref={sectionRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Info */}
          <div className="section-reveal">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <span className="text-cyan-400 text-sm">💬</span>
              <span className="text-sm text-slate-300 font-medium">
                Let&apos;s Talk
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
              Ready to Build{" "}
              <span className="gradient-text">Something Great?</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Tell us about your project. We&apos;ll review your requirements and
              schedule a free, no-obligation strategy call within 24 hours.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              {[
                {
                  icon: "📧",
                  label: "Email",
                  value: "hello@techgroww.dev",
                  href: "mailto:hello@techgroww.dev",
                },
                {
                  icon: "📞",
                  label: "Phone",
                  value: "+91 98765 43210",
                  href: "tel:+919876543210",
                },
                {
                  icon: "💼",
                  label: "LinkedIn",
                  value: "Tech Groww",
                  href: "https://www.linkedin.com/company/102058460",
                },
                {
                  icon: "💬",
                  label: "WhatsApp",
                  value: "Chat with us",
                  href: "https://wa.me/919876543210?text=Hi%20Tech%20Groww%2C%20I%27d%20like%20to%20discuss%20a%20project",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass p-4 rounded-xl border border-white/5 hover:border-indigo-500/30 transition-all duration-300 group"
                >
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <div className="text-xs text-slate-500">{item.label}</div>
                    <div className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="section-reveal stagger-2">
            <div className="glass rounded-3xl p-6 lg:p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">
                Get a Free Consultation
              </h3>

              {formState.status === "success" ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">🎉</div>
                  <h4 className="text-xl font-bold text-white mb-3">
                    Message Received!
                  </h4>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {formState.message}
                  </p>
                  <button
                    onClick={() =>
                      setFormState({ status: "idle", message: "" })
                    }
                    className="btn-primary px-6 py-2.5 rounded-xl text-white text-sm font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-400 mb-1.5 font-medium">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className={inputClass}
                        id="contact-name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-400 mb-1.5 font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className={inputClass}
                        id="contact-email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-400 mb-1.5 font-medium">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={inputClass}
                        id="contact-phone"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-400 mb-1.5 font-medium">
                        Service Needed *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className={`${inputClass} cursor-pointer`}
                        id="contact-service"
                      >
                        <option value="" className="bg-[#13131f]">
                          Select a service
                        </option>
                        {services.map((s) => (
                          <option
                            key={s}
                            value={s}
                            className="bg-[#13131f]"
                          >
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium">
                      Tell us about your project *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Describe your project, timeline, and any specific requirements..."
                      className={`${inputClass} resize-none`}
                      id="contact-message"
                    />
                  </div>

                  {formState.status === "error" && (
                    <div className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl p-3">
                      {formState.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formState.status === "loading"}
                    className="btn-primary w-full py-4 rounded-xl text-white font-bold text-base disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    id="contact-submit"
                  >
                    {formState.status === "loading" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message & Get Free Consultation →"
                    )}
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    🔒 Your information is secure and never shared. We reply
                    within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
