"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  Services: [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Cloud & DevOps",
    "Digital Marketing",
    "AI & Automation",
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Results", href: "#metrics" },
    { label: "Contact", href: "#contact" },
  ],
  Connect: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/102058460",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/919876543210",
    },
    {
      label: "Email",
      href: "mailto:hello@techgroww.dev",
    },
    {
      label: "Phone",
      href: "tel:+919876543210",
    },
  ],
};

const techStack = [
  "React", "Next.js", "Flutter", "Node.js", "AWS", "GCP", "Docker", "Figma",
];

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-[#060609]">
      {/* Top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      {/* CTA Banner */}
      <div className="relative py-16 overflow-hidden">
        <div
          className="absolute inset-0 animate-gradient"
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.06), rgba(6,182,212,0.04))",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Ready to Transform Your{" "}
            <span className="gradient-text">Digital Presence?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Join 50+ businesses that trusted Tech Groww to power their digital growth.
          </p>
          <button
            onClick={() => scrollTo("#contact")}
            className="btn-primary px-10 py-4 rounded-2xl text-white font-bold text-lg glow-hover"
          >
            Get a Free Strategy Call →
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-indigo-500/30 group-hover:border-indigo-500/60 transition-all duration-300">
                <Image
                  src="/logo.jpg"
                  alt="Tech Groww Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <span className="text-xl font-black gradient-text">Tech Groww</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              Your end-to-end technology growth partner. We build digital
              solutions that scale businesses from startup to enterprise.
            </p>
            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-full border border-indigo-500/20 text-slate-500 bg-indigo-500/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.Services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200 text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.Company.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200 text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.Connect.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Details */}
            <div className="mt-6 space-y-2">
              <a
                href="mailto:hello@techgroww.dev"
                className="block text-xs text-slate-600 hover:text-slate-400 transition-colors"
              >
                📧 hello@techgroww.dev
              </a>
              <a
                href="tel:+919876543210"
                className="block text-xs text-slate-600 hover:text-slate-400 transition-colors"
              >
                📞 +91 98765 43210
              </a>
              <p className="text-xs text-slate-600">
                📍 Noida, Uttar Pradesh, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs text-center sm:text-left">
            © {currentYear} Tech Groww. All rights reserved. Built with ❤️ in India.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-slate-600 text-xs">Privacy Policy</span>
            <span className="text-slate-600 text-xs">Terms of Service</span>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xs text-emerald-400">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
