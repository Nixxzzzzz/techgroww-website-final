"use client";

import Link from "next/link";

const bentoFeatures = [
  {
    colSpan: "lg:col-span-8",
    title: "Autonomous AI-Native System Engineering",
    tag: "AI & Automation",
    badge: "Enterprise Ready",
    description:
      "We build production-grade LLM workflows, custom agentic copilots, and vector retrieval pipelines that automate business operations and multiply workforce productivity.",
    stats: "65% Operational Cost Reduction",
    accent: "from-indigo-600/30 to-violet-600/10",
    border: "border-indigo-500/30",
    codeSnippet: `// Autonomous Agent Pipeline
const pipeline = new TechGrowwAgentPipeline({
  model: "claude-3-5-sonnet",
  ragIndex: "pinecone-enterprise-v2",
  tools: [crmSync, paymentsEngine, liveTelemetry],
  maxIterations: 8
});
await pipeline.executeAutonomously(task);`,
  },
  {
    colSpan: "lg:col-span-4",
    title: "Edge-First Web Architecture",
    tag: "Performance",
    badge: "99+ Lighthouse",
    description:
      "Sub-50ms latency across 300+ global edge nodes using Next.js App Router, SSR, and intelligent edge caching.",
    stats: "0.2s Avg First Contentful Paint",
    accent: "from-cyan-600/20 to-blue-600/10",
    border: "border-cyan-500/30",
  },
  {
    colSpan: "lg:col-span-4",
    title: "Conversion-Focused UI/UX Systems",
    tag: "Design Craft",
    badge: "Bespoke Only",
    description:
      "Zero generic templates. Bespoke typography, fluid micro-animations, and psychologically validated user funnels designed to convert visitors into lifelong customers.",
    stats: "3.4x Average Conversion Lift",
    accent: "from-purple-600/20 to-pink-600/10",
    border: "border-purple-500/30",
  },
  {
    colSpan: "lg:col-span-4",
    title: "Cross-Platform Mobile Ecosystems",
    tag: "Mobile",
    badge: "iOS & Android",
    description:
      "60 FPS buttery smooth experiences built with Flutter and React Native. Single clean codebase, native hardware performance, and offline-first data sync.",
    stats: "120K+ Active Monthly Users",
    accent: "from-emerald-600/20 to-teal-600/10",
    border: "border-emerald-500/30",
  },
  {
    colSpan: "lg:col-span-4",
    title: "Enterprise Cloud & DevOps SRE",
    tag: "Infrastructure",
    badge: "99.99% Uptime",
    description:
      "Terraform IaaC, multi-region Kubernetes clusters, automated zero-downtime CI/CD deployment pipelines, and SOC2-ready architecture.",
    stats: "Zero-Downtime Deployments",
    accent: "from-amber-600/20 to-orange-600/10",
    border: "border-amber-500/30",
  },
];

export default function BentoGrid() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#06070b]">
      {/* Ambient background blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/[0.08] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/[0.06] blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-4">
            <span className="text-indigo-400">✦</span>
            <span>Architectural Superiority</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Engineered For Companies That <span className="gradient-text">Refuse To Settle.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            We don&apos;t build average websites or disposable MVPs. We engineer mission-critical digital products that establish market dominance.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {bentoFeatures.map((feature, i) => (
            <div
              key={i}
              className={`${feature.colSpan} glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border ${feature.border} relative overflow-hidden flex flex-col justify-between`}
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-50 pointer-events-none`} />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/[0.05] text-slate-300 border border-white/[0.08]">
                    {feature.tag}
                  </span>
                  <span className="text-xs font-mono font-semibold text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {feature.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Optional code snippet for the premier card */}
                {feature.codeSnippet && (
                  <div className="p-4 rounded-2xl bg-[#080911] border border-white/[0.08] font-mono text-xs text-slate-300 overflow-x-auto mb-6 shadow-inner">
                    <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/[0.06] text-[10px] text-slate-500">
                      <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                      <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                      <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                      <span className="ml-2">agent.orchestrator.ts</span>
                    </div>
                    <pre className="text-indigo-300">
                      <code>{feature.codeSnippet}</code>
                    </pre>
                  </div>
                )}
              </div>

              {/* Bottom Metric Badge & Link */}
              <div className="relative z-10 pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-cyan-300">
                  {feature.stats}
                </span>
                <Link
                  href="/services"
                  className="text-xs text-slate-400 hover:text-white font-semibold transition-colors flex items-center gap-1"
                >
                  Explore Capability →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
