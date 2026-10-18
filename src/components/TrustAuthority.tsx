"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const corePillars = [
  {
    icon: "🎯",
    title: "Outcome-Driven Engineering",
    description:
      "We build software tied directly to business KPIs. Every technical decision, framework choice, and database index is optimized for user conversion and system speed.",
  },
  {
    icon: "⚡",
    title: "High-Velocity 14-Day Sprints",
    description:
      "Continuous shipping cycle. You review working software, private preview links, and real progress every two weeks — no black box development.",
  },
  {
    icon: "🔒",
    title: "Zero-Trust Security & OWASP",
    description:
      "Security-first from commit one. Automated dependency vulnerability scans, encrypted secrets management, and SOC2-ready architecture.",
  },
  {
    icon: "🤝",
    title: "100% Code & IP Ownership",
    description:
      "All repositories, infrastructure configs, design tokens, and intellectual property belong strictly to your company from day one under mutual NDA.",
  },
  {
    icon: "🧠",
    title: "Senior-Only Software Squads",
    description:
      "No novice engineers or outsourced hand-offs. Your product is engineered by experienced technical specialists who have built and scaled production systems.",
  },
  {
    icon: "🛡️",
    title: "90-Day Post-Launch Warranty",
    description:
      "We stand behind our code. Every fixed build includes proactive telemetry monitoring, SLA-backed defect remediation, and deployment support.",
  },
];

const technicalBenchmarks = [
  { value: "100%", label: "Client IP Ownership", icon: "📑" },
  { value: "14-Day", label: "Sprint Delivery Cycles", icon: "⚡" },
  { value: "99.9%", label: "Target System Uptime", icon: "🛡️" },
  { value: "<50ms", label: "Edge Response Latency", icon: "🚀" },
  { value: "0", label: "Proprietary Lock-in", icon: "🔓" },
  { value: "24h", label: "Guaranteed Response SLA", icon: "⏱️" },
];

const engineeringStandards = [
  {
    standard: "Type Safety & Clean Architecture",
    detail: "Strict TypeScript across frontend and backend, comprehensive unit tests, and decoupled microservices to eliminate technical debt.",
    icon: "🛡️",
  },
  {
    standard: "CI/CD Automated Deployments",
    detail: "Automated GitHub Actions pipelines with automated linting, test suites, and preview environments for every pull request.",
    icon: "⚙️",
  },
  {
    standard: "Modern Design Systems",
    detail: "Figma token architectures mapped 1-to-1 with Tailwind CSS utilities for complete visual consistency across web and mobile.",
    icon: "🎨",
  },
];

export default function TrustAuthority() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".section-reveal").forEach((el) => {
              el.classList.add("visible");
            });
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (metricsRef.current) observer.observe(metricsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Why Tech Groww Section */}
      <section id="about-pillars" className="relative py-24 lg:py-32 overflow-hidden bg-[#06070b]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

        <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="section-reveal text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold mb-4">
              <span>🏆</span>
              <span>Engineering Standards</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              The Tech Groww <span className="gradient-text">Commitment</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
              We eliminate the common pitfalls of traditional software contracting with guaranteed transparency, clean architecture, and rigorous quality standards.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {corePillars.map((pillar, i) => (
              <div key={i} className={`section-reveal stagger-${(i % 3) + 1}`}>
                <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 h-full border border-white/[0.08]">
                  <div className="text-3xl mb-4">{pillar.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quality Standards Triad */}
          <div className="section-reveal p-8 sm:p-10 rounded-3xl glass-card border border-white/[0.08]">
            <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-8">
              Institutional Quality Control on Every Project
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {engineeringStandards.map((std, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="text-2xl mb-3">{std.icon}</div>
                  <h4 className="text-sm font-bold text-white mb-1.5">{std.standard}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{std.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center pt-6 border-t border-white/[0.06]">
              <Link
                href="/about"
                className="text-xs text-indigo-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Read Our Full Engineering Manifesto</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Benchmarks Bar */}
      <section id="benchmarks" className="relative py-16 overflow-hidden bg-[#040508] border-y border-white/[0.06]">
        <div ref={metricsRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technicalBenchmarks.map((bm, i) => (
              <div key={i} className={`section-reveal stagger-${i + 1}`}>
                <div className="glass-card rounded-2xl p-4 text-center border border-white/[0.08] hover:border-indigo-500/40 transition-all">
                  <div className="text-xl mb-1.5">{bm.icon}</div>
                  <div className="text-xl sm:text-2xl font-black gradient-text font-mono">
                    {bm.value}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 font-medium leading-tight">
                    {bm.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
