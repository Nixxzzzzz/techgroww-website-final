"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ContactSidebar from "@/components/ContactSidebar";
import Footer from "@/components/Footer";
import Link from "next/link";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  category: "Fintech" | "eCommerce" | "AI/ML" | "EdTech";
  summary: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  tags: string[];
  gradient: string;
  badge: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "finscale",
    title: "High-Frequency Algorithmic Trading Analytics Dashboard",
    client: "FinScale Technologies",
    industry: "Quantitative Finance",
    category: "Fintech",
    badge: "$12M Daily Volume",
    summary:
      "Engineered an institutional-grade financial dashboard processing 50,000+ real-time tick events per second with sub-15ms WebSocket rendering.",
    challenge:
      "The client's legacy trading portal crashed during market volatility peaks and suffered 800ms data lag, leading to severe trader churn.",
    solution:
      "We rebuilt the architecture from scratch using Next.js App Router, rust-compiled WebAssembly chart calculations, and a distributed Redis Pub/Sub WebSocket cluster.",
    results: [
      { label: "Data Rendering Lag", value: "<15ms" },
      { label: "Daily Volume Handled", value: "$12M+" },
      { label: "Uptime During Surges", value: "99.999%" },
      { label: "Trader Retention Lift", value: "+84%" },
    ],
    tags: ["Next.js 16", "WebSockets", "Redis", "Rust WebAssembly", "PostgreSQL", "Google Cloud"],
    gradient: "from-indigo-600/30 to-violet-600/10",
  },
  {
    id: "retailnova",
    title: "Omnichannel D2C Luxury eCommerce Mobile Experience",
    client: "RetailNova Brand Group",
    industry: "Direct-to-Consumer Luxury",
    category: "eCommerce",
    badge: "3.8x Conversion Lift",
    summary:
      "Designed and deployed a native mobile app and headless Shopify storefront with sub-second instant checkout and 3D product previews.",
    challenge:
      "Mobile bounce rates were staggering at 68% due to slow Shopify template bloat and a clunky 5-step checkout process.",
    solution:
      "Crafted a unified Flutter mobile application and headless Next.js web storefront powered by Shopify Storefront API and one-click Stripe Express Checkout.",
    results: [
      { label: "Checkout Completion", value: "3.8x Lift" },
      { label: "Active Mobile Users", value: "120K MAU" },
      { label: "Page Load Velocity", value: "0.6s" },
      { label: "Return on Ad Spend", value: "4.2x ROAS" },
    ],
    tags: ["Flutter", "Shopify Storefront API", "Next.js", "Stripe", "Tailwind CSS", "AWS CloudFront"],
    gradient: "from-cyan-600/30 to-blue-600/10",
  },
  {
    id: "healthpulse",
    title: "Autonomous Clinical Triage & Patient Scheduling Swarm",
    client: "HealthPulse Diagnostics",
    industry: "Healthcare & MedTech",
    category: "AI/ML",
    badge: "65% Admin Cost Reduction",
    summary:
      "Deployed a HIPAA-compliant autonomous AI triage agent that schedules appointments, verifies insurance eligibility, and routes urgent clinical tickets.",
    challenge:
      "Clinic receptionists were overwhelmed with 1,200 daily phone calls, resulting in 25-minute hold times and 30% lost patient acquisition.",
    solution:
      "Built a secure multi-agent RAG workflow with biometric voice verification, automated calendar scheduling, and direct EHR database integration.",
    results: [
      { label: "Admin Staff Time Saved", value: "65%" },
      { label: "Patient Call Hold Time", value: "<30 sec" },
      { label: "Triage Intent Accuracy", value: "99.4%" },
      { label: "Data Security Audit", value: "100% HIPAA" },
    ],
    tags: ["Python", "FastAPI", "Claude 3.5 Sonnet", "Pinecone RAG", "HIPAA Cloud", "Twilio Voice"],
    gradient: "from-purple-600/30 to-pink-600/10",
  },
  {
    id: "educore",
    title: "Planetary Adaptive EdTech & Live Streaming Learning Hub",
    client: "EduCore Academy",
    industry: "Education & EdTech",
    category: "EdTech",
    badge: "250K Concurrent Learners",
    summary:
      "Architected a scalable global education portal streaming interactive webinars with real-time AI quiz grading and multilingual caption generation.",
    challenge:
      "Previous monolithic architecture failed whenever live examinations launched, causing video buffer freezes for 100,000 simultaneous students.",
    solution:
      "Decoupled media delivery onto WebRTC edge meshes, implemented serverless event processing, and introduced automated client-side bandwidth throttling.",
    results: [
      { label: "Active Enrolled Students", value: "250,000+" },
      { label: "Video Buffer Lag", value: "0.0% Freeze" },
      { label: "Cloud Cost Efficiency", value: "-42% AWS" },
      { label: "Student Completion Rate", value: "+62%" },
    ],
    tags: ["React 19", "Node.js", "WebRTC", "Docker", "Kubernetes", "PostgreSQL", "AWS Elemental"],
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
            <span>Proven Engineering Track Record</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Software That Drives <span className="gradient-text">Measurable ROI.</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            Real case studies. Concrete engineering architectures. Quantifiable business metrics. Explore how Tech Groww turns technical challenges into enterprise victories.
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
                    <span className="text-xs text-slate-500 font-medium">Client: {study.client}</span>
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
                        The Bottleneck:
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                      <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-1 font-bold">
                        Our Engineered Solution:
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
                      Key Impact Metrics
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {study.results.map((res, i) => (
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
                    href={`/contact?caseStudy=${encodeURIComponent(study.title)}`}
                    className="btn-gradient block w-full py-3.5 rounded-xl text-white text-xs font-bold text-center tracking-wide shadow-lg shadow-indigo-600/30"
                  >
                    Build Something Like This →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Aggregate Stats Section */}
      <section className="py-20 bg-[#040508] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-12">
            The Numbers Behind Our <span className="gradient-text">Engineering Dominance</span>
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "$50M+", label: "Client Revenue Processed Annually" },
              { num: "150+", label: "Production Platforms Shipped" },
              { num: "99.98%", label: "Average Production SLA Uptime" },
              { num: "0", label: "Failed Deployments in 2025-2026" },
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
