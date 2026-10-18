"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const services = [
  {
    id: "web",
    icon: "🌐",
    title: "Web Platforms & SaaS",
    description:
      "Scalable, high-performance web platforms built with Next.js App Router and edge caching. Engineered for high concurrency, security, and sub-50ms latency.",
    tags: ["Next.js 16", "React 19", "Node.js", "PostgreSQL"],
    borderColor: "border-indigo-500/30 hover:border-indigo-500/60",
  },
  {
    id: "mobile",
    icon: "📱",
    title: "Mobile App Ecosystems",
    description:
      "Native 60 FPS mobile apps for iOS and Android with unified Flutter and React Native codebases, offline SQLite sync, and biometric authentication.",
    tags: ["Flutter", "React Native", "iOS", "Android"],
    borderColor: "border-violet-500/30 hover:border-violet-500/60",
  },
  {
    id: "ai",
    icon: "🧠",
    title: "Enterprise AI & Multi-Agent Swarms",
    description:
      "Autonomous agent workflows, custom RAG search pipelines, and private vector embedding databases that automate manual operations.",
    tags: ["Python", "FastAPI", "Pinecone RAG", "Claude 3.5"],
    borderColor: "border-cyan-500/30 hover:border-cyan-500/60",
  },
  {
    id: "cloud",
    icon: "☁️",
    title: "Cloud DevOps & SRE",
    description:
      "Multi-region Kubernetes clusters, automated zero-downtime CI/CD deployment pipelines, and SOC2-ready cloud security on AWS and GCP.",
    tags: ["AWS", "Google Cloud", "Kubernetes", "Terraform"],
    borderColor: "border-emerald-500/30 hover:border-emerald-500/60",
  },
  {
    id: "design",
    icon: "✨",
    title: "Bespoke UI/UX Systems",
    description:
      "Zero generic templates. Bespoke design systems, Figma component tokens, fluid micro-interactions, and conversion-optimized checkout funnels.",
    tags: ["Figma Tokens", "Design Systems", "Prototypes"],
    borderColor: "border-purple-500/30 hover:border-purple-500/60",
  },
  {
    id: "growth",
    icon: "📈",
    title: "Growth & Algorithmic SEO",
    description:
      "Programmatic SEO architectures, 100% Core Web Vitals optimization, and data-driven A/B testing funnels that generate qualified inbound leads.",
    tags: ["Algorithmic SEO", "PostHog", "Next.js CWV"],
    borderColor: "border-amber-500/30 hover:border-amber-500/60",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const section = sectionRef.current;
    const cards = cardsRef.current;

    if (section) observer.observe(section);
    cards.forEach((card) => card && observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden bg-[#05060a]">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={sectionRef} className="section-reveal text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-4">
            <span>⚡</span>
            <span>Comprehensive Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            End-to-End <span className="gradient-text">Engineering Capabilities</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            From greenfield architecture to high-concurrency scaling — we supply the senior firepower you need to win.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.id}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className={`section-reveal stagger-${(i % 3) + 1} service-card`}
            >
              <div
                className={`glass-card glass-card-hover rounded-3xl p-6 lg:p-8 h-full flex flex-col justify-between border ${service.borderColor} transition-all duration-300`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-2xl mb-5 shadow-inner">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2.5 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.03] text-slate-400 border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/services#${service.id}`}
                  className="text-xs font-semibold text-indigo-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5 pt-4 border-t border-white/[0.06]"
                >
                  <span>Explore Deliverables & Stack</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to /services */}
        <div className="text-center mt-14 section-reveal">
          <Link
            href="/services"
            className="btn-gradient inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold text-xs sm:text-sm tracking-wide shadow-xl shadow-indigo-600/30 hover:scale-105 transition-transform"
          >
            <span>Explore All 6 Full-Lifecycle Services & Tech Stack</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
