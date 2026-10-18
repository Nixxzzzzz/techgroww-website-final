"use client";

import { useState } from "react";
import Link from "next/link";

interface ServiceOption {
  id: string;
  name: string;
  baseCost: number;
  baseWeeks: number;
  icon: string;
  description: string;
}

const serviceOptions: ServiceOption[] = [
  {
    id: "web",
    name: "Web Platform / SaaS",
    baseCost: 3500,
    baseWeeks: 4,
    icon: "⚡",
    description: "Next.js App Router, SSR, High-conversion architecture & APIs",
  },
  {
    id: "mobile",
    name: "Mobile App (iOS & Android)",
    baseCost: 4500,
    baseWeeks: 6,
    icon: "📱",
    description: "Cross-platform Flutter or React Native with native performance",
  },
  {
    id: "ai",
    name: "Enterprise AI & RAG",
    baseCost: 5000,
    baseWeeks: 5,
    icon: "🧠",
    description: "Autonomous LLM agents, vector embeddings & custom automation",
  },
  {
    id: "design",
    name: "Bespoke UI/UX Design System",
    baseCost: 2000,
    baseWeeks: 3,
    icon: "🎨",
    description: "Figma master components, user flows, responsive prototypes",
  },
  {
    id: "cloud",
    name: "Cloud DevOps & Kubernetes",
    baseCost: 3000,
    baseWeeks: 3,
    icon: "☁️",
    description: "AWS/GCP infrastructure as code, CI/CD pipelines & zero downtime",
  },
];

const tiers = [
  { id: "mvp", name: "MVP Sprint", multiplier: 1, duration: "3-5 Weeks", tag: "Fast To Market" },
  { id: "scale", name: "Scale & Growth", multiplier: 1.6, duration: "6-10 Weeks", tag: "Most Popular" },
  { id: "enterprise", name: "Enterprise Custom", multiplier: 2.4, duration: "10-16 Weeks", tag: "High Security & Scale" },
];

export default function ProjectCalculator() {
  const [selectedServices, setSelectedServices] = useState<string[]>(["web"]);
  const [selectedTier, setSelectedTier] = useState<string>("scale");
  const [rushDelivery, setRushDelivery] = useState<boolean>(false);

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? (prev.length > 1 ? prev.filter((s) => s !== id) : prev) : [...prev, id]
    );
  };

  const currentTierObj = tiers.find((t) => t.id === selectedTier) || tiers[1];

  const totalBaseCost = selectedServices.reduce((sum, sId) => {
    const s = serviceOptions.find((opt) => opt.id === sId);
    return sum + (s ? s.baseCost : 0);
  }, 0);

  const totalWeeks = Math.ceil(
    selectedServices.reduce((sum, sId) => {
      const s = serviceOptions.find((opt) => opt.id === sId);
      return Math.max(sum, s ? s.baseWeeks : 4);
    }, 4) * (rushDelivery ? 0.75 : 1)
  );

  const estimatedMin = Math.round(totalBaseCost * currentTierObj.multiplier);
  const estimatedMax = Math.round(estimatedMin * 1.35);

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/[0.08] relative overflow-hidden shadow-2xl">
      {/* Background ambient lighting */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 inline-block mb-3">
            Instant Estimate Matrix
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Interactive Project Scope & <span className="gradient-text">ROI Estimator</span>
          </h3>
          <p className="text-slate-400 text-sm mt-2">
            Select your desired software capabilities and scale tier to receive an instant timeline & engineering allocation estimate.
          </p>
        </div>

        {/* Step 1: Select Modules */}
        <div className="mb-8">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-3">
            1. Select Required Capabilities (Select One or More)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {serviceOptions.map((service) => {
              const isSelected = selectedServices.includes(service.id);
              return (
                <button
                  key={service.id}
                  onClick={() => toggleService(service.id)}
                  type="button"
                  className={`text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-indigo-600/20 border-indigo-500/60 shadow-lg shadow-indigo-600/20"
                      : "bg-white/[0.02] border-white/[0.07] hover:border-white/[0.15] hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-2xl">{service.icon}</span>
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                        isSelected ? "bg-indigo-500 text-white" : "border border-white/20 text-transparent"
                      }`}
                    >
                      ✓
                    </span>
                  </div>
                  <div className="text-sm font-bold text-white mb-1">{service.name}</div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{service.description}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Deployment Tier */}
        <div className="mb-8">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-3">
            2. Choose Scale & Architectural Depth
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tiers.map((tier) => {
              const isSelected = selectedTier === tier.id;
              return (
                <button
                  key={tier.id}
                  onClick={() => setSelectedTier(tier.id)}
                  type="button"
                  className={`text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer relative ${
                    isSelected
                      ? "bg-violet-600/20 border-violet-500/60 shadow-lg shadow-violet-600/20"
                      : "bg-white/[0.02] border-white/[0.07] hover:border-white/[0.15]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/[0.06] text-slate-300">
                      {tier.tag}
                    </span>
                    <span className="text-xs text-cyan-400 font-mono">{tier.duration}</span>
                  </div>
                  <div className="text-base font-bold text-white mt-2">{tier.name}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Rush Delivery Toggle */}
        <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] mb-8">
          <div>
            <div className="text-sm font-semibold text-white">Priority Rapid Delivery Sprint (Accelerate 25%)</div>
            <div className="text-xs text-slate-400">Allocate 2 dedicated parallel pods to compress delivery timeline</div>
          </div>
          <button
            type="button"
            onClick={() => setRushDelivery(!rushDelivery)}
            className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
              rushDelivery ? "bg-indigo-600" : "bg-white/10"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                rushDelivery ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        {/* Dynamic Estimated Output Card */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-950/60 via-[#101322] to-cyan-950/50 border border-indigo-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full md:w-auto">
            <div>
              <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-semibold">
                Investment Range
              </span>
              <span className="text-2xl sm:text-3xl font-black gradient-text font-mono">
                ${estimatedMin.toLocaleString()} - ${estimatedMax.toLocaleString()}
              </span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-semibold">
                Est. Delivery
              </span>
              <span className="text-2xl sm:text-3xl font-black text-white font-mono">
                ~{totalWeeks} Weeks
              </span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-semibold">
                Squad Allocation
              </span>
              <span className="text-sm sm:text-base font-semibold text-emerald-400 mt-1 block">
                {selectedServices.length + 1} Senior Engineers
              </span>
            </div>
          </div>

          <Link
            href={`/contact?services=${selectedServices.join(",")}&tier=${selectedTier}`}
            className="btn-gradient w-full md:w-auto px-7 py-4 rounded-xl text-white font-bold text-sm tracking-wide text-center shrink-0 shadow-xl shadow-indigo-600/30 hover:scale-105 transition-transform"
          >
            Lock In This Estimate & Book →
          </Link>
        </div>
      </div>
    </div>
  );
}
