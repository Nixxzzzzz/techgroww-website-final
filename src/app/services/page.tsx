"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ContactSidebar from "@/components/ContactSidebar";
import Footer from "@/components/Footer";
import Link from "next/link";

const detailedServices = [
  {
    id: "web",
    title: "Next-Gen Web Platforms & SaaS Engineering",
    category: "Full-Stack Web",
    badge: "Sub-Second Latency",
    icon: "⚡",
    tagline: "Ultra-fast, scalable web applications built with Next.js App Router, React 19, and edge caching.",
    description:
      "We design and build cloud-native web applications engineered for heavy concurrent traffic, high conversion rates, and sub-50ms global latency. Every architecture is decoupled, test-covered, and optimized for maximum SEO dominance.",
    deliverables: [
      "Next.js 16 SSR & Server Actions Architecture",
      "High-throughput GraphQL / REST API Backends",
      "Real-time WebSocket Data Feeds & Notifications",
      "Stripe / LemonSqueezy / Razorpay Payment Pipelines",
      "Role-Based Access Control (RBAC) & OAuth 2.0 Auth",
      "Multi-tenant SaaS Database Partitioning",
    ],
    techStack: ["Next.js", "React 19", "TypeScript", "Node.js", "FastAPI", "PostgreSQL", "Redis", "Prisma"],
    metrics: "99+ Lighthouse Scores | <50ms TTFB",
  },
  {
    id: "mobile",
    title: "Cross-Platform Mobile App Ecosystems",
    category: "Mobile",
    badge: "iOS & Android",
    icon: "📱",
    tagline: "Native 60 FPS performance with unified Flutter and React Native codebases.",
    description:
      "Launch buttery smooth iOS and Android mobile applications from a single source of truth. We integrate biometric authentication, camera pipelines, offline database synchronization, and deep link analytics.",
    deliverables: [
      "Production Flutter & React Native Native Apps",
      "Offline-First SQLite / WatermelonDB Data Sync",
      "Push Notification & Re-engagement Workflows",
      "App Store & Google Play Store Submission Assurance",
      "In-App Purchases (StoreKit & Google Play Billing)",
      "Native Device Sensor & BLE Hardware Integrations",
    ],
    techStack: ["Flutter", "Dart", "React Native", "Swift", "Kotlin", "Firebase", "RevenueCat"],
    metrics: "Native 60 FPS | Sub-15MB Optimized Bundle",
  },
  {
    id: "ai",
    title: "Enterprise AI & Autonomous Agent Systems",
    category: "Artificial Intelligence",
    badge: "State of the Art",
    icon: "🧠",
    tagline: "Custom LLM pipelines, autonomous multi-agent swarms, and private RAG knowledge engines.",
    description:
      "Transform manual workflows into intelligent automated engines. We specialize in grounding foundational models with private enterprise data using high-speed vector retrieval and robust fallback safeguards.",
    deliverables: [
      "Custom Retrieval-Augmented Generation (RAG) Pipelines",
      "Autonomous Multi-Agent Task Execution Workflows",
      "Private Model Fine-Tuning & Quantization",
      "Vector Database Architecture (Pinecone, Qdrant, pgvector)",
      "Semantic Search & Natural Language Analytics",
      "LLM Guardrails, Hallucination Checks & Cost Reductions",
    ],
    techStack: ["LangChain", "LlamaIndex", "Pinecone", "pgvector", "Python", "FastAPI", "OpenAI", "Claude 3.5"],
    metrics: "Context-Aware RAG | Zero Hallucination Guardrails",
  },
  {
    id: "cloud",
    title: "Cloud Infrastructure, DevOps & SRE",
    category: "Cloud & Reliability",
    badge: "99.99% Uptime",
    icon: "☁️",
    tagline: "Zero-downtime CI/CD deployments and multi-region Kubernetes infrastructure.",
    description:
      "Eliminate infrastructure fragility. We author declarative Terraform scripts, configure auto-scaling container clusters on AWS and GCP, and build self-healing CI/CD deployment pipelines.",
    deliverables: [
      "Infrastructure as Code (Terraform & OpenTofu)",
      "Multi-Region Kubernetes (EKS & GKE) Clusters",
      "Automated GitHub Actions CI/CD Delivery Pipelines",
      "Zero-Downtime Blue/Green & Canary Deployments",
      "Distributed Prometheus & Grafana APM Telemetry",
      "SOC2 Compliance, WAF & DDoS Shielding",
    ],
    techStack: ["AWS", "Google Cloud", "Kubernetes", "Docker", "Terraform", "GitHub Actions", "Prometheus"],
    metrics: "99.99% Production Uptime | Zero Unplanned Downtime",
  },
  {
    id: "design",
    title: "Bespoke UI/UX Design Systems & Strategy",
    category: "Product Design",
    badge: "Zero Templates",
    icon: "🎨",
    tagline: "Conversion-optimized user journeys, Figma design tokens, and fluid interactive prototypes.",
    description:
      "We build bespoke design systems that look like they were crafted by top-tier global design agencies. Clean visual hierarchy, dark mode ergonomics, and micro-interactions that make your product unforgettable.",
    deliverables: [
      "Complete Figma Design Token Architecture",
      "High-Fidelity Clickable Mobile & Web Prototypes",
      "Comprehensive User Flow & Wireframe Mapping",
      "Component Library Documentation for Engineers",
      "Accessibility & WCAG AA Contrast Compliance",
      "Brand Identity Guidelines & Vector Iconography",
    ],
    techStack: ["Figma", "Design Tokens", "Framer", "Prototyping", "Design Sprints", "Design Systems"],
    metrics: "WCAG 2.1 AA Compliant | Pixel-Perfect Tokens",
  },
  {
    id: "growth",
    title: "Growth Engineering & Algorithmic SEO",
    category: "Growth & Optimization",
    badge: "Organic Lead Engine",
    icon: "📈",
    tagline: "Technical search domination, programmatic SEO, and data-driven conversion rate optimization.",
    description:
      "Stop burning money on ad networks without organic foundations. We engineer programmatic SEO architectures, optimize Core Web Vitals, and build A/B conversion funnels that generate qualified inbound leads 24/7.",
    deliverables: [
      "Programmatic SEO Directory & Content Engines",
      "Core Web Vitals Optimization (100% Green CWV)",
      "Schema.org Structured Data & Rich Snippets",
      "A/B Testing Frameworks & Funnel Analytics",
      "High-Converting Landing Page Optimization",
      "Real-time Inbound Lead Attribution Dashboards",
    ],
    techStack: ["Google Search Console", "PostHog", "Mixpanel", "Segment", "Schema.org", "Next.js"],
    metrics: "100% Core Web Vitals | Automated Indexing",
  },
];

const techStackCategories = {
  Frontend: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Vue.js", "WebGL / Three.js"],
  Backend: ["Node.js", "Python / FastAPI", "Go", "GraphQL", "REST", "gRPC", "WebSockets"],
  Mobile: ["Flutter", "React Native", "Swift", "Kotlin", "Expo", "Capacitor"],
  Databases: ["PostgreSQL", "Redis", "MongoDB", "Pinecone Vector DB", "Supabase", "DynamoDB"],
  CloudDevOps: ["AWS", "Google Cloud", "Kubernetes", "Docker", "Terraform", "Cloudflare Edge"],
  AITools: ["LangChain", "OpenAI GPT-4o", "Claude 3.5 Sonnet", "Llama 3", "vLLM", "HuggingFace"],
};

export default function ServicesPage() {
  const [activeTechCategory, setActiveTechCategory] = useState<keyof typeof techStackCategories>("Frontend");

  return (
    <main className="min-h-screen bg-[#06070b] text-slate-100 selection:bg-indigo-500/30 selection:text-white">
      <Navbar />
      <ContactSidebar />

      {/* Services Header */}
      <section className="relative pt-36 pb-20 mesh-bg overflow-hidden border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-6">
            <span>⚡</span>
            <span>Enterprise Engineering Capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Full-Lifecycle Software <span className="gradient-text">Engineering Services</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            From architecture design and high-velocity development to AI automation and planetary cloud scaling — explore our specialized engineering practices.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            {detailedServices.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="px-4 py-2 rounded-full text-xs font-medium bg-white/[0.04] border border-white/[0.08] hover:border-indigo-400/50 hover:bg-white/[0.08] text-slate-300 transition-all flex items-center gap-2"
              >
                <span>{service.icon}</span>
                <span>{service.category}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Deep Dive */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {detailedServices.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="glass-card rounded-3xl p-6 sm:p-10 border border-white/[0.08] relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Overview */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{service.icon}</span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {service.category}
                    </span>
                    <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                      {service.badge}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
                    {service.title}
                  </h2>
                  <p className="text-indigo-300 text-sm font-semibold mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="mb-6">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-bold">
                      Key Engineering Deliverables:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.deliverables.map((deliv, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs text-slate-300"
                        >
                          <span className="text-emerald-400 font-bold shrink-0">✓</span>
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs text-slate-500 font-mono">Tech Stack:</span>
                    {service.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Action / Metrics Card */}
                <div className="lg:col-span-5 p-6 rounded-2xl bg-[#090b14] border border-white/[0.08] flex flex-col justify-between h-full">
                  <div>
                    <div className="text-xs font-mono uppercase text-slate-400 mb-1">
                      Validated Benchmark
                    </div>
                    <div className="text-lg font-bold text-cyan-300 font-mono mb-4">
                      {service.metrics}
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] mb-6 space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-400">Delivery Velocity:</span>
                        <span className="text-white font-semibold">14-Day Sprint Cycles</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-400">Senior Staff Ratio:</span>
                        <span className="text-emerald-400 font-semibold">100% Senior Engineers</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-400">IP Ownership:</span>
                        <span className="text-white font-semibold">100% Client Transferred</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="btn-gradient block w-full py-3.5 rounded-xl text-white text-xs font-bold text-center tracking-wide shadow-lg shadow-indigo-600/30"
                    >
                      Book Engineering Squad for this Service →
                    </Link>
                    <Link
                      href="/pricing"
                      className="glass block w-full py-2.5 rounded-xl text-slate-300 hover:text-white text-xs font-medium text-center border border-white/10"
                    >
                      Calculate Cost Estimate
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Tech Stack Explorer */}
      <section className="py-20 bg-[#040508] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 inline-block mb-3">
              Technical Arsenal
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Modern Technologies We <span className="gradient-text">Master</span>
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              We never use outdated legacy stacks. Every platform is built with modern, rock-solid technologies proven at planetary scale.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {(Object.keys(techStackCategories) as Array<keyof typeof techStackCategories>).map((cat) => {
              const isActive = activeTechCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTechCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all cursor-pointer ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400/50"
                      : "bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.06]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Active Technologies Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {techStackCategories[activeTechCategory].map((tech) => (
              <div
                key={tech}
                className="p-5 rounded-2xl glass-card text-center border border-white/[0.08] hover:border-indigo-500/40 transition-all hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mx-auto flex items-center justify-center font-mono font-bold text-sm mb-3">
                  ✦
                </div>
                <div className="text-sm font-bold text-white">{tech}</div>
                <div className="text-[10px] text-slate-500 mt-1">Enterprise Grade</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Flexible <span className="gradient-text">Engagement Models</span>
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Choose the collaboration style that matches your company&apos;s growth phase and internal team structure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Dedicated Engineering Pods",
              tag: "High Velocity",
              desc: "A fully dedicated squad of senior developers, designer, and tech lead dedicated 100% to your product roadmap.",
              benefits: ["Sprint-based deliverables", "Direct Slack / Discord integration", "Elastic scaling up or down"],
            },
            {
              title: "Fixed-Scope Turnkey Project",
              tag: "Guaranteed Delivery",
              desc: "End-to-end delivery from requirements specification to app launch with fixed pricing and guaranteed launch dates.",
              benefits: ["Zero budget surprise risk", "Strict milestone sign-offs", "90-day post-launch warranty"],
            },
            {
              title: "Fractional CTO & Architecture",
              tag: "Strategic Advisory",
              desc: "Senior architectural review, security audits, cloud cost optimization, and technical diligence for investor readiness.",
              benefits: ["Cloud cost reductions (30-50%)", "Security & OWASP audit report", "Team hiring & technical screening"],
            },
          ].map((model, i) => (
            <div
              key={i}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-white/[0.08] flex flex-col justify-between"
            >
              <div>
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/[0.05] text-cyan-300 border border-cyan-500/20 inline-block mb-3">
                  {model.tag}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">{model.title}</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">{model.desc}</p>
                <div className="space-y-2 mb-6">
                  {model.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="text-emerald-400">✓</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="btn-gradient block w-full py-3 rounded-xl text-white text-xs font-bold text-center tracking-wide"
              >
                Inquire About This Model →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
