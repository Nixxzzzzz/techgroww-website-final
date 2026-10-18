"use client";

import { useState } from "react";
import Link from "next/link";

const steps = [
  {
    step: "01",
    phase: "DISCOVERY & ARCHITECTURE",
    title: "Technical Blueprint & Systems Mapping",
    duration: "Day 1 - 3",
    deliverables: ["Product Requirements Document", "Cloud Architecture Diagram", "Security & Data Compliance Plan"],
    description:
      "We dive deep into your business objectives, user journeys, and bottleneck risks. We architect a future-proof tech stack with zero technical debt.",
    icon: "🗺️",
  },
  {
    step: "02",
    phase: "DESIGN SPRINT",
    title: "Bespoke UI/UX & Interactive Prototypes",
    duration: "Week 1 - 2",
    deliverables: ["Full Figma Design System", "High-Fidelity Clickable Prototype", "Mobile & Web Responsive Specs"],
    description:
      "Crafting bespoke visual aesthetics and conversion-focused user interfaces. You click through live prototypes before a single line of backend code is committed.",
    icon: "✨",
  },
  {
    step: "03",
    phase: "AGILE BUILD",
    title: "Sprint-Driven Engineering & Daily CI/CD",
    duration: "Week 2 - 6",
    deliverables: ["Live Staging Preview URLs", "Automated Jest & Cypress Tests", "Dedicated Slack / WhatsApp Channel"],
    description:
      "Senior full-stack squad commits daily code. You receive private staging preview links at the end of each sprint to test real features continuously.",
    icon: "⚡",
  },
  {
    step: "04",
    phase: "PRODUCTION & SCALE",
    title: "Planetary Launch & 90-Day Warranty",
    duration: "Launch & Beyond",
    deliverables: ["Cloud Run / Kubernetes Zero-Downtime Deploy", "Lighthouse 95+ Audit", "90-Day Proactive Monitoring SLA"],
    description:
      "We stress-test, secure, and deploy to your cloud infrastructure. Plus, our 90-day warranty ensures flawless uptime and real-time support after launch.",
    icon: "🚀",
  },
];

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="py-24 relative overflow-hidden bg-[#040509]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-4">
            <span className="text-cyan-400">⚡</span>
            <span>Predictable High-Velocity Delivery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            How We Turn Ideas Into <span className="gradient-text">Market Leaders</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            No guesswork. No bloated meetings. An institutional-grade engineering methodology refined over 150+ successful launches.
          </p>
        </div>

        {/* Step Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {steps.map((item, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={item.step}
                onClick={() => setActiveStep(idx)}
                type="button"
                className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-indigo-600/20 border-indigo-500/60 shadow-lg shadow-indigo-600/20"
                    : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.12]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isActive ? "text-cyan-400" : "text-slate-500"}`}>
                    STEP {item.step}
                  </span>
                  <span className="text-lg">{item.icon}</span>
                </div>
                <div className="text-xs uppercase font-mono tracking-wider text-slate-400 line-clamp-1">
                  {item.phase}
                </div>
                <div className="text-sm font-bold text-white mt-1 line-clamp-1">{item.duration}</div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed View */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-indigo-500/30 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  PHASE {steps[activeStep].step}
                </span>
                <span className="text-xs text-cyan-400 font-mono">
                  {steps[activeStep].duration}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 tracking-tight">
                {steps[activeStep].title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {steps[activeStep].description}
              </p>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">
                  Key Milestones & Deliverables:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {steps[activeStep].deliverables.map((deliv, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-slate-200"
                    >
                      <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">
                        ✓
                      </span>
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center items-center text-center p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-5xl mb-4">{steps[activeStep].icon}</div>
              <div className="text-sm font-semibold text-white mb-1">
                Zero Risk Guarantee
              </div>
              <p className="text-xs text-slate-400 max-w-xs mb-6">
                Every milestone requires your sign-off before invoice progression. 100% intellectual property ownership transferred to you.
              </p>
              <Link
                href="/contact"
                className="btn-gradient px-6 py-3 rounded-xl text-white text-xs font-bold tracking-wide shadow-lg shadow-indigo-600/30"
              >
                Start Phase 01 Blueprint →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
