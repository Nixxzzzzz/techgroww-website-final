"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const footerNavigation = {
  pages: [
    { label: "Home", href: "/" },
    { label: "Engineering Services", href: "/services" },
    { label: "Architecture Blueprints", href: "/work" },
    { label: "Pricing & Engagement", href: "/pricing" },
    { label: "About Tech Groww", href: "/about" },
    { label: "Schedule Consultation", href: "/contact" },
  ],
  services: [
    { label: "Next-Gen Web Platforms", href: "/services#web" },
    { label: "Mobile App Ecosystems", href: "/services#mobile" },
    { label: "Enterprise AI & Autonomous Agents", href: "/services#ai" },
    { label: "Cloud Infra & SRE DevOps", href: "/services#cloud" },
    { label: "Bespoke UI/UX Systems", href: "/services#design" },
    { label: "Growth Engineering & Search", href: "/services#growth" },
  ],
  company: [
    { label: "Engineering Philosophy", href: "/about" },
    { label: "Pillars & Commitments", href: "/#about-pillars" },
    { label: "Technical Benchmarks", href: "/#benchmarks" },
    { label: "Engagement Models", href: "/pricing" },
    { label: "Security & OWASP Standards", href: "/services" },
  ],
  connect: [
    { label: "LinkedIn Official Page", href: "https://www.linkedin.com/company/102058460", external: true },
    { label: "Email: hello@techgroww.dev", href: "mailto:hello@techgroww.dev", external: false },
    { label: "Schedule Technical Consultation", href: "/contact", external: false },
    { label: "Interactive Scope Estimator", href: "/pricing", external: false },
  ],
};

const techBadges = [
  "Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Flutter",
  "Node.js", "Python", "FastAPI", "AWS", "Google Cloud", "Docker", "PostgreSQL"
];

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative overflow-hidden bg-[#040508] border-t border-white/[0.06]">
      {/* Dynamic ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-indigo-600/[0.07] blur-[120px] pointer-events-none" />

      {/* Pre-Footer Banner */}
      <div className="relative border-b border-white/[0.06] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            Software Engineering & Digital Growth
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto leading-tight mb-6">
            Ready to Build an <span className="gradient-text">Unfair Competitive Advantage?</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Partner with Tech Groww to design, build, and deploy software that converts traffic into sustainable enterprise value.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-gradient w-full sm:w-auto px-8 py-4 rounded-xl text-white font-bold text-sm tracking-wide shadow-xl shadow-indigo-600/30"
            >
              Start Your Project Today →
            </Link>
            <Link
              href="/pricing"
              className="glass w-full sm:w-auto px-7 py-4 rounded-xl text-slate-300 hover:text-white font-semibold text-sm border border-white/10 hover:border-indigo-400/40 transition-colors"
            >
              Estimate Sprint Timeline
            </Link>
          </div>
        </div>
      </div>

      {/* Multi-Column Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5 group inline-block">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-indigo-500/30 group-hover:border-indigo-400 transition-all bg-[#0d0f1a]">
                <Image
                  src="/logo.jpg"
                  alt="Tech Groww Logo"
                  fill
                  sizes="40px"
                  className="object-contain p-1"
                />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                TECH <span className="gradient-text">GROWW</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              Digital growth and full-stack software development agency. We engineer modern web platforms, mobile ecosystems, and autonomous AI systems.
            </p>
            
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5 max-w-md">
              {techBadges.map((badge) => (
                <span
                  key={badge}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-white/[0.03] text-slate-400 border border-white/[0.06]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Pages Navigation */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Explore Pages
            </h3>
            <ul className="space-y-2.5">
              {footerNavigation.pages.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-indigo-300 text-sm transition-colors duration-200 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions & Core Capabilities */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Capabilities
            </h3>
            <ul className="space-y-2.5">
              {footerNavigation.services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-cyan-300 text-sm transition-colors duration-200 block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Direct Touchpoints */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Direct Contact
            </h3>
            <ul className="space-y-2.5">
              {footerNavigation.connect.map((item) => (
                <li key={item.label}>
                  {item.href.startsWith("/") ? (
                    <Link
                      href={item.href}
                      className="text-slate-400 hover:text-white text-sm transition-colors duration-200 block"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="text-slate-400 hover:text-white text-sm transition-colors duration-200 block"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-6 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-[11px] text-slate-400 mb-1 font-semibold uppercase tracking-wider">
                Headquarters
              </div>
              <p className="text-xs text-slate-300 leading-snug">
                Tech Groww Digital Studio
              </p>
              <div className="text-[10px] text-slate-500 mt-1">
                Serving Clients Globally
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Status Indicator */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Tech Groww. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Privacy Protocol</span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Terms of Engagement</span>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Production Edge: 100% Operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
