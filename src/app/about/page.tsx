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
    desc: "We write clean, typed, modular code we are proud to put our name to. No cut corners, no bloated dependencies, and no technical debt passed to clients.",
  },
  {
    icon: "⚡",
    title: "Speed is a Feature",
    desc: "Market windows close fast. We run 14-day agile sprints with daily staging commits so our partners launch faster than competitors can even draft roadmaps.",
  },
  {
    icon: "🔍",
    title: "Radical Transparency",
    desc: "Zero project manager gatekeeping. You have direct access to your senior engineers on Slack, daily asynchronous standups, and real-time git commits.",
  },
  {
    icon: "🛡️",
    title: "Enterprise Resilience",
    desc: "We engineer systems that don't sleep. Every platform is designed with automated self-healing, zero-downtime canary updates, and military-grade encryption.",
  },
];

const milestones = [
  {
    year: "2020",
    title: "Studio Founded in Noida Tech Hub",
    description: "Started with a core team of senior systems engineers dedicated to building custom high-concurrency web platforms.",
  },
  {
    year: "2022",
    title: "Global Cross-Border Expansion",
    description: "Expanded our client roster across the United States, UK, and Europe. Surpassed 50+ delivered platforms with zero SLA breaches.",
  },
  {
    year: "2024",
    title: "AI & Autonomous Systems Practice",
    description: "Pioneered production enterprise RAG and autonomous multi-agent pipelines for quantitative fintech and healthcare partners.",
  },
  {
    year: "2026",
    title: "150+ Enterprise Deployments",
    description: "Powering $50M+ in annual client transactional volume across Next.js 16, Flutter, and cloud-native Kubernetes clusters.",
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
            <span>The Team Behind The Tech</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Architecting The Future of <span className="gradient-text">Digital Growth.</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            Tech Groww is an elite engineering and digital product agency. We bridge the chasm between complex software architecture and revenue-generating business velocity.
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
              <p className="text-xs text-indigo-400 font-mono mt-1">Established 2020 • NCR India</p>
              <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-2">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-white/[0.05] text-slate-300 border border-white/[0.08]">
                  Global Reach
                </span>
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-white/[0.05] text-slate-300 border border-white/[0.08]">
                  100% Senior Squad
                </span>
              </div>
            </div>

            <div className="lg:col-span-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Our Engineering Philosophy: Code That Converts
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                Most agencies give you bloated templates, delayed deadlines, and junior staff hiding behind account managers. We founded Tech Groww to build the exact antidote to that broken model.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Every software platform we engineer is constructed with senior-only engineering squads who understand both edge computing and conversion psychology. Whether it&apos;s a high-frequency fintech dashboard or a customer-facing mobile app, our work is engineered for measurable business lift.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/[0.08]">
                <div>
                  <div className="text-2xl font-black text-indigo-400 font-mono">150+</div>
                  <div className="text-xs text-slate-400 mt-0.5">Projects Shipped</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-cyan-400 font-mono">50+</div>
                  <div className="text-xs text-slate-400 mt-0.5">Global Partners</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-emerald-400 font-mono">99.9%</div>
                  <div className="text-xs text-slate-400 mt-0.5">SLA Adherence</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-amber-400 font-mono">4.9/5</div>
                  <div className="text-xs text-slate-400 mt-0.5">Client Rating</div>
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
              Our cultural DNA guides every commit, code review, and architectural decision.
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

        {/* Milestone Timeline */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-black text-white tracking-tight">
              Our Growth <span className="gradient-text">Journey</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 border border-white/[0.08]">
                <div className="text-2xl font-black gradient-text font-mono mb-2">{m.year}</div>
                <h3 className="text-sm font-bold text-white mb-2">{m.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call To Action Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-indigo-950/60 to-cyan-950/50 border border-indigo-500/30 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Want to Work With a Team That Actually Cares?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            Schedule a confidential 30-minute technical roadmap session with our lead architects. We’ll review your goals and provide an actionable execution blueprint.
          </p>
          <Link
            href="/contact"
            className="btn-gradient inline-block px-8 py-4 rounded-xl text-white font-bold text-sm tracking-wide shadow-xl shadow-indigo-600/30 hover:scale-105 transition-transform"
          >
            Schedule Roadmap Call →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
