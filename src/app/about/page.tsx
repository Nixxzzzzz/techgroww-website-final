"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactSidebar from "@/components/ContactSidebar";
import Footer from "@/components/Footer";

const coreValues = [
  {
    icon: "💎",
    title: "Relentless Obsession with Craft",
    desc: "We write clean, strictly typed, modular code we are proud to stand behind. No cut corners, no bloated dependencies, and no technical debt passed to our partners.",
  },
  {
    icon: "⚡",
    title: "Speed is a Feature",
    desc: "Market opportunities move fast. We run 14-day agile sprints with continuous staging deployments so our partners launch ahead of the market.",
  },
  {
    icon: "🔍",
    title: "Radical Transparency",
    desc: "Direct communication with senior engineers on dedicated Slack channels, daily asynchronous updates, and complete visibility into active pull requests.",
  },
  {
    icon: "🛡️",
    title: "Enterprise Resilience",
    desc: "Every system is designed with automated self-healing, zero-downtime canary updates, end-to-end encryption, and comprehensive observability.",
  },
];

const lifecycleSteps = [
  {
    phase: "Phase 01",
    title: "Architecture & Threat Modeling",
    description: "Deep dive into system requirements, API boundaries, database schemas, and cloud scalability before writing a single line of code.",
  },
  {
    phase: "Phase 02",
    title: "Bespoke UI/UX & Prototyping",
    description: "Creating conversion-optimized Figma design systems and clickable user journeys aligned with user psychology.",
  },
  {
    phase: "Phase 03",
    title: "Sprint-Based Engineering & CI/CD",
    description: "Senior full-stack engineering with automated test suites, pull request reviews, and private staging preview URLs.",
  },
  {
    phase: "Phase 04",
    title: "Production Launch & 90-Day SLA",
    description: "Multi-region cloud deployment, performance stress testing, and ongoing warranty monitoring for continuous stability.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#06070b] text-slate-100 selection:bg-indigo-500/30 selection:text-white">
      <Navbar />
      <ContactSidebar />

      {/* About Hero */}
      <section className="relative pt-36 pb-20 mesh-bg overflow-hidden border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-6">
            <span>✨</span>
            <span>Who We Are</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Engineering Software for <span className="gradient-text">Sustainable Growth.</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            Tech Groww is a specialized software engineering and digital transformation agency. We partner with forward-thinking companies to build modern web platforms, mobile apps, and autonomous AI systems.
          </p>
        </div>
      </section>

      {/* Brand & Manifesto Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-6 sm:p-12 border border-white/[0.08] relative overflow-hidden mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4 text-center lg:text-left">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-indigo-500/40 shadow-2xl shadow-indigo-500/20 bg-[#0d0f1a] p-2 mb-6">
                <Image
                  src="/logo.jpg"
                  alt="Tech Groww Brand Identity"
                  fill
                  sizes="144px"
                  className="object-contain p-2"
                />
              </div>
              <h2 className="text-2xl font-black text-white">Tech Groww</h2>
              <p className="text-xs text-indigo-400 font-mono mt-1">Digital Growth & IT Solutions Agency</p>
              <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-2">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-white/[0.05] text-slate-300 border border-white/[0.08]">
                  Full-Lifecycle Engineering
                </span>
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-white/[0.05] text-slate-300 border border-white/[0.08]">
                  Senior Specialists
                </span>
              </div>
            </div>

            <div className="lg:col-span-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Our Engineering Philosophy: Architecture That Scales
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                We believe that software should be an enduring asset, not a perpetual headache. We combine modern design systems with decoupled, cloud-native architecture to create digital products that load fast, scale gracefully, and convert users.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Every project is approached with architectural rigor — from strict TypeScript interfaces and comprehensive API documentation to zero-downtime CI/CD deployment pipelines.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/[0.08]">
                <div>
                  <div className="text-2xl font-black text-indigo-400 font-mono">100%</div>
                  <div className="text-xs text-slate-400 mt-0.5">Senior Engineering</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-cyan-400 font-mono">14-Day</div>
                  <div className="text-xs text-slate-400 mt-0.5">Sprint Cycles</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-emerald-400 font-mono">99.9%</div>
                  <div className="text-xs text-slate-400 mt-0.5">Target SLA</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-amber-400 font-mono">100%</div>
                  <div className="text-xs text-slate-400 mt-0.5">IP Ownership</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-black text-white tracking-tight">
              Principles We <span className="gradient-text">Live By</span>
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Our engineering guidelines direct every commit, review, and architectural choice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreValues.map((val, i) => (
              <div
                key={i}
                className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-white/[0.08]"
              >
                <div className="text-3xl mb-4">{val.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{val.title}</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Lifecycle Steps */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-black text-white tracking-tight">
              Our Delivery <span className="gradient-text">Lifecycle</span>
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              A predictable, milestone-backed process from discovery to planetary launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {lifecycleSteps.map((m, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 border border-white/[0.08]">
                <div className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider mb-2">
                  {m.phase}
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{m.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call To Action Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-indigo-950/60 to-cyan-950/50 border border-indigo-500/30 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Partner With Tech Groww
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            Schedule a technical roadmap discussion with our lead architects. We will examine your objectives and provide an actionable execution blueprint.
          </p>
          <Link
            href="/contact"
            className="btn-gradient inline-block px-8 py-4 rounded-xl text-white font-bold text-sm tracking-wide shadow-xl shadow-indigo-600/30 hover:scale-105 transition-transform"
          >
            Schedule Consultation Call →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
