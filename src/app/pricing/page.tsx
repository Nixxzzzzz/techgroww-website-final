"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ContactSidebar from "@/components/ContactSidebar";
import ProjectCalculator from "@/components/ProjectCalculator";
import Footer from "@/components/Footer";
import Link from "next/link";

const pricingTiers = [
  {
    name: "MVP Velocity Sprint",
    tagline: "For early-stage ventures needing an institutional-grade product in market with zero technical debt.",
    price: "Milestone-Based",
    billing: "Fixed quote scoped to product requirements",
    duration: "3 - 5 Weeks Delivery",
    badge: "Startup Model",
    popular: false,
    features: [
      "Next.js 16 Web Platform or Flutter Mobile App",
      "Bespoke Figma UI/UX Design System",
      "Stripe / Payment Gateway Integration",
      "PostgreSQL Database Architecture & Indexing",
      "Secure OAuth 2.0 & Session Authentication",
      "Automated CI/CD Staging Preview Environments",
      "90-Day Post-Launch Bug Warranty",
      "100% Intellectual Property Ownership",
    ],
    cta: "Request MVP Scope & Quote →",
    accent: "border-white/[0.1]",
  },
  {
    name: "Dedicated Engineering Squad",
    tagline: "An elite full-stack squad integrated directly into your workflow for continuous high-velocity delivery.",
    price: "Sprint Retainer",
    billing: "Billed per 14-day sprint • Zero lock-in",
    duration: "Bi-Weekly Sprint Cadence",
    badge: "Recommended",
    popular: true,
    features: [
      "1x Senior Solutions Architect & Tech Lead",
      "2x Senior Full-Stack Software Engineers",
      "1x Senior UI/UX Product Designer",
      "Bi-Weekly Production Demos & Sprint Planning",
      "Direct Slack / Discord Channel Integration",
      "Real-Time Pull Request & Git Visibility",
      "Cloud Infrastructure & DevOps CI/CD Support",
      "Automated Test Coverage & Performance Audits",
      "24/7 Critical Incident Monitoring SLA",
    ],
    cta: "Deploy Dedicated Squad →",
    accent: "border-indigo-500/60 shadow-2xl shadow-indigo-600/25",
  },
  {
    name: "Enterprise Architecture & Scale",
    tagline: "For scaling companies requiring high-concurrency systems, planetary cloud infrastructure, and custom AI.",
    price: "Custom Enterprise",
    billing: "Tailored scope & SLA agreement",
    duration: "Tailored Architecture Scope",
    badge: "Enterprise SLA",
    popular: false,
    features: [
      "Custom Autonomous AI & LLM Vector Swarms",
      "Multi-Region Kubernetes (EKS / GKE) IaaC",
      "SOC2, HIPAA & GDPR Security Hardening",
      "High-Frequency Distributed WebSockets",
      "Database Sharding & Read-Replica Topology",
      "15-Minute Critical Incident Response SLA",
      "Full Security Penetration Testing & Audit",
      "Fractional CTO & Strategic Architecture Advisory",
    ],
    cta: "Inquire for Enterprise Terms →",
    accent: "border-white/[0.1]",
  },
];

const faqs = [
  {
    q: "Who owns the code and intellectual property?",
    a: "You do. 100%. From the moment code is written, full copyright, repository access, and intellectual property belong exclusively to your company. We execute mutual non-disclosure and intellectual property assignment agreements prior to kickoff.",
  },
  {
    q: "How are project scopes and payments structured?",
    a: "For fixed builds, invoices are linked to verified milestones: kickoff, architecture & UI/UX sign-off, staging deployment, and production launch. For dedicated squads, engagements are structured around 14-day sprint cycles with zero long-term lock-in.",
  },
  {
    q: "What support is provided after launch?",
    a: "Every fixed-scope project includes our comprehensive 90-day production warranty. If any defects or regressions emerge, our senior team remediates them immediately. We also provide ongoing maintenance retainers for continuous feature evolution.",
  },
  {
    q: "Can you audit or modernize an existing codebase?",
    a: "Yes. We frequently conduct deep technical architecture audits on existing codebases, diagnose database bottlenecks, refactor frontend web performance, and modernize legacy infrastructure into modern Next.js/React stacks.",
  },
  {
    q: "How does our team collaborate with your engineers?",
    a: "You are integrated directly into a private Slack, Discord, or Teams channel with your assigned senior squad. We hold asynchronous daily check-ins and weekly working demos, with full visibility into GitHub repositories.",
  },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#06070b] text-slate-100 selection:bg-indigo-500/30 selection:text-white">
      <Navbar />
      <ContactSidebar />

      {/* Pricing Hero */}
      <section className="relative pt-36 pb-16 mesh-bg overflow-hidden border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold mb-6">
            <span>💎</span>
            <span>Transparent Engagement Models</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Predictable Engagement. <span className="gradient-text">Zero Surprises.</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            Institutional-grade software development with transparent scopes, milestone accountability, and 100% intellectual property ownership.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-24">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`glass-card rounded-3xl p-6 sm:p-8 border ${tier.accent} flex flex-col justify-between relative overflow-hidden ${
                tier.popular ? "bg-[#0f1222] ring-1 ring-indigo-500/50" : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-[10px] font-mono font-bold tracking-widest uppercase px-4 py-1 rounded-bl-xl shadow-lg">
                  RECOMMENDED MODEL
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/[0.05] text-indigo-300 border border-white/[0.08]">
                    {tier.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{tier.duration}</span>
                </div>

                <h2 className="text-2xl font-black text-white tracking-tight mb-2">{tier.name}</h2>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">{tier.tagline}</p>

                <div className="mb-8 pb-6 border-b border-white/[0.08]">
                  <div className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight">
                    {tier.price}
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-1">{tier.billing}</div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
                    Scope Highlights:
                  </div>
                  {tier.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="text-emerald-400 font-bold shrink-0">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={`/contact?package=${encodeURIComponent(tier.name)}`}
                className={`w-full py-4 rounded-xl text-xs font-bold text-center tracking-wide transition-all shadow-lg block ${
                  tier.popular
                    ? "btn-gradient text-white shadow-indigo-600/40 hover:scale-105"
                    : "glass text-slate-200 hover:text-white border border-white/10 hover:border-indigo-400/40"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Embedded Interactive Scope & Sprint Calculator */}
        <div className="mb-24">
          <ProjectCalculator />
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 inline-block mb-3">
              Common Questions
            </span>
            <h2 className="text-3xl font-black text-white tracking-tight">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-2xl border border-white/[0.08] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    type="button"
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                      {faq.q}
                    </span>
                    <span
                      className={`text-indigo-400 text-lg font-mono transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/[0.05]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
