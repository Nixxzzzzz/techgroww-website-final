"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ContactSidebar from "@/components/ContactSidebar";
import Footer from "@/components/Footer";
import Link from "next/link";

interface CaseStudy {
  id: string;
  title: string;
  scope: string;
  industry: string;
  category: "Fintech" | "eCommerce" | "AI/ML" | "EdTech";
  summary: string;
  challenge: string;
  solution: string;
  benchmarks: { label: string; value: string }[];
  tags: string[];
  gradient: string;
  badge: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "fintech-trading",
    title: "High-Frequency Algorithmic Trading Analytics Dashboard",
    scope: "Real-Time Financial Dashboard",
    industry: "Quantitative Finance",
    category: "Fintech",
    badge: "Sub-15ms Latency",
    summary:
      "Engineered an institutional-grade financial dashboard processing 50,000+ real-time tick events per second with sub-15ms WebSocket rendering.",
    challenge:
      "Legacy financial charting suffered 800ms data lag during market volatility peaks, creating rendering freezes and critical execution delays.",
    solution:
      "Rebuilt the frontend on Next.js App Router with WebAssembly chart mathematical calculations and a distributed Redis Pub/Sub WebSocket edge cluster.",
    benchmarks: [
      { label: "Data Rendering Lag", value: "<15ms" },
      { label: "Throughput Capacity", value: "50k/sec" },
      { label: "Surge Uptime", value: "99.999%" },
      { label: "Memory Footprint", value: "-60%" },
    ],
    tags: ["Next.js 16", "WebSockets", "Redis", "Rust WebAssembly", "PostgreSQL", "Google Cloud"],
    gradient: "from-indigo-600/30 to-violet-600/10",
  },
  {
    id: "d2c-commerce",
    title: "Omnichannel D2C Mobile & Web Commerce Experience",
    scope: "Headless Mobile & Web Storefront",
    industry: "Direct-to-Consumer Commerce",
    category: "eCommerce",
    badge: "Sub-Second Checkout",
    summary:
      "Designed and deployed a native mobile app and headless storefront with instant one-click checkout and interactive 3D product previews.",
    challenge:
      "Mobile bounce rates were high due to slow monolith template bloat and a clunky 5-step checkout process.",
    solution:
      "Crafted a unified Flutter mobile application and headless Next.js web storefront powered by modern Storefront APIs and one-click Stripe Express Checkout.",
    benchmarks: [
      { label: "Page Load Velocity", value: "0.6s" },
      { label: "Lighthouse Score", value: "99/100" },
      { label: "Checkout Steps", value: "1 Click" },
      { label: "Platform Parity", value: "iOS & Android" },
    ],
    tags: ["Flutter", "Next.js", "Stripe API", "Tailwind CSS", "AWS CloudFront", "Edge Caching"],
    gradient: "from-cyan-600/30 to-blue-600/10",
  },
  {
    id: "ai-triage",
    title: "Autonomous Clinical Triage & Patient Scheduling Swarm",
    scope: "Intelligent Multi-Agent Workflow",
    industry: "Healthcare & MedTech",
    category: "AI/ML",
    badge: "HIPAA Compliant",
    summary:
      "Deployed a secure autonomous AI triage agent that assists with scheduling, verifies eligibility, and routes clinical tickets to appropriate staff.",
    challenge:
      "Reception teams were overwhelmed with high call volumes, resulting in long hold times and delayed patient routing.",
    solution:
      "Engineered a secure multi-agent RAG workflow with voice verification, automated calendar scheduling, and direct database integration.",
    benchmarks: [
      { label: "Routing Latency", value: "<2.0 sec" },
      { label: "Intent Accuracy", value: "99.4%" },
      { label: "Data Encryption", value: "AES-256" },
      { label: "Audit Compliance", value: "100% HIPAA" },
    ],
    tags: ["Python", "FastAPI", "Claude 3.5 Sonnet", "Pinecone RAG", "HIPAA Architecture", "Twilio API"],
    gradient: "from-purple-600/30 to-pink-600/10",
  },
  {
    id: "edtech-stream",
    title: "Adaptive Interactive Learning & Low-Latency Streaming Hub",
    scope: "Global WebRTC Streaming Ecosystem",
    industry: "Education & EdTech",
    category: "EdTech",
    badge: "Zero Video Jitter",
    summary:
      "Architected a scalable global education portal streaming interactive webinars with real-time AI quiz grading and multilingual caption generation.",
    challenge:
      "Legacy monolithic infrastructure suffered video buffer freezes and high egress bandwidth costs during large-scale concurrent broadcasts.",
    solution:
      "Decoupled media delivery onto WebRTC edge meshes, implemented serverless event processing, and introduced automated bandwidth throttling.",
    benchmarks: [
      { label: "Video Buffer Lag", value: "0.0% Freeze" },
      { label: "Global Edge Nodes", value: "300+ CDN" },
      { label: "Bandwidth Savings", value: "42% Reduction" },
      { label: "Concurrent Scale", value: "Planetary" },
    ],
    tags: ["React 19", "Node.js", "WebRTC", "Docker", "Kubernetes", "PostgreSQL", "Cloudflare Edge"],
    gradient: "from-emerald-600/30 to-teal-600/10",
  },
];

const categories = ["All", "Fintech", "eCommerce", "AI/ML", "EdTech"] as const;

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredStudies =
    selectedCategory === "All"
      ? caseStudies
      : caseStudies.filter((cs) => cs.category === selectedCategory);

  return (
    <main className="min-h-screen bg-[#06070b] text-slate-100 selection:bg-indigo-500/30 selection:text-white">
      <Navbar />
      <ContactSidebar />

      {/* Case Studies Header */}
      <section className="relative pt-36 pb-20 mesh-bg overflow-hidden border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-6">
            <span>🏆</span>
            <span>Production Architecture Blueprints</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Architectures Engineered For <span className="gradient-text">High-Speed Scale.</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            Examine our production engineering archetypes. Concrete architectures, modern technology stacks, and verifiable performance criteria.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-600/30"
                      : "bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.06]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="glass-card rounded-3xl p-6 sm:p-10 border border-white/[0.08] relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-30 pointer-events-none`} />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/[0.06] text-slate-300 border border-white/[0.1]">
                      {study.industry}
                    </span>
                    <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
                      {study.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-mono font-medium">Scope: {study.scope}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4">
                    {study.title}
                  </h2>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium">
                    {study.summary}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                      <h3 className="text-xs font-mono uppercase tracking-wider text-rose-400 mb-1 font-bold">
                        The Architectural Bottleneck:
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                      <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-1 font-bold">
                        The Engineered Blueprint:
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Results Column */}
                <div className="lg:col-span-4 p-6 rounded-2xl bg-[#090b14] border border-white/[0.08] flex flex-col justify-between h-full">
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 font-bold">
                      Verified Technical Criteria
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {study.benchmarks.map((res, i) => (
                        <div key={i} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                          <div className="text-xl sm:text-2xl font-black gradient-text font-mono">
                            {res.value}
                          </div>
                          <div className="text-[11px] text-slate-400 mt-1 leading-tight font-medium">
                            {res.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/contact?blueprint=${encodeURIComponent(study.title)}`}
                    className="btn-gradient block w-full py-3.5 rounded-xl text-white text-xs font-bold text-center tracking-wide shadow-lg shadow-indigo-600/30"
                  >
                    Build This Architecture →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Aggregate Engineering Standards */}
      <section className="py-20 bg-[#040508] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-12">
            Non-Negotiable <span className="gradient-text">Engineering Standards</span>
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "100%", label: "Client Code & Repository Ownership" },
              { num: "<50ms", label: "Global Edge Content Delivery" },
              { num: "99.9%", label: "Target Uptime Architecture SLA" },
              { num: "14 Days", label: "Iterative Working Sprint Cycles" },
            ].map((stat, i) => (
              <div key={i} className="p-6 rounded-2xl glass-card border border-white/[0.08]">
                <div className="text-3xl sm:text-4xl font-black gradient-text font-mono mb-2">
                  {stat.num}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
