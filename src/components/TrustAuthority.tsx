"use client";

import { useEffect, useRef } from "react";

const reasons = [
  {
    icon: "🎯",
    title: "Outcome-First Approach",
    description:
      "We don't just write code — we build measurable business results. Every decision is driven by your KPIs and growth targets.",
  },
  {
    icon: "⚡",
    title: "Agile & Fast Delivery",
    description:
      "Rapid iterations with bi-weekly sprints. You see real progress consistently, not months of silence before a big reveal.",
  },
  {
    icon: "🔒",
    title: "Enterprise-Grade Security",
    description:
      "Security-first architecture from day one. OWASP best practices, data encryption, and penetration-tested codebases.",
  },
  {
    icon: "🤝",
    title: "Transparent Partnership",
    description:
      "You always know where your project stands. Dedicated Slack channel, real-time updates, and zero surprises.",
  },
  {
    icon: "🧠",
    title: "Senior-Only Team",
    description:
      "No juniors on your project. Every engagement is led by senior engineers and designers with 5+ years of experience.",
  },
  {
    icon: "🌍",
    title: "Post-Launch Support",
    description:
      "We don't disappear after launch. 90-day warranty, proactive monitoring, and dedicated SLA-backed support.",
  },
];

const metrics = [
  { value: "150+", label: "Projects Delivered", icon: "🚀" },
  { value: "50+", label: "Happy Clients", icon: "🤝" },
  { value: "5+", label: "Years Experience", icon: "🏆" },
  { value: "99%", label: "Client Satisfaction", icon: "⭐" },
  { value: "3x", label: "Average ROI", icon: "📈" },
  { value: "48h", label: "Average Response", icon: "⚡" },
];

const testimonials = [
  {
    quote:
      "Tech Groww delivered our e-commerce platform 2 weeks ahead of schedule. The quality exceeded our expectations and sales are up 40% since launch.",
    name: "Rahul Sharma",
    role: "CEO, RetailBoost",
    avatar: "RS",
  },
  {
    quote:
      "Their DevOps work reduced our infrastructure costs by 35% while improving uptime to 99.99%. Absolute professionals.",
    name: "Priya Mehta",
    role: "CTO, FinScale",
    avatar: "PM",
  },
  {
    quote:
      "The mobile app they built has 50K+ downloads and a 4.8 star rating. Tech Groww understands both tech and user experience deeply.",
    name: "Amit Gupta",
    role: "Founder, Edify",
    avatar: "AG",
  },
];

export default function TrustAuthority() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".section-reveal").forEach((el) => {
              el.classList.add("visible");
            });
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (metricsRef.current) observer.observe(metricsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Why Choose Us Section */}
      <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0a0a0f 0%, #0d0d1a 50%, #0a0a0f 100%)" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

        <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="section-reveal text-center mb-16">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <span className="text-violet-400 text-sm">🏆</span>
              <span className="text-sm text-slate-300 font-medium">Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              The Tech Groww{" "}
              <span className="gradient-text">Difference</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              We combine deep technical expertise with a genuine commitment to your
              success. Here&apos;s what sets us apart.
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {reasons.map((reason, i) => (
              <div
                key={i}
                className={`section-reveal stagger-${(i % 3) + 1}`}
              >
                <div className="glass glass-hover rounded-2xl p-6 h-full border border-white/5 hover:border-violet-500/30 transition-all duration-300">
                  <div className="text-3xl mb-4">{reason.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="section-reveal">
            <h3 className="text-2xl font-bold text-center text-white mb-10">
              What Our Clients Say
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className={`section-reveal stagger-${i + 1}`}>
                  <div className="glass rounded-2xl p-6 border border-white/5 relative">
                    <div className="text-3xl text-indigo-400 mb-3 opacity-50 font-serif">&ldquo;</div>
                    <p className="text-slate-300 text-sm leading-relaxed mb-5 italic">
                      {t.quote}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full gradient-text flex items-center justify-center font-bold text-sm"
                        style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}>
                        <span className="text-white text-xs font-bold">{t.avatar}</span>
                      </div>
                      <div>
                        <div className="text-white text-sm font-semibold">{t.name}</div>
                        <div className="text-slate-400 text-xs">{t.role}</div>
                      </div>
                    </div>
                    {/* Stars */}
                    <div className="flex gap-0.5 mt-3">
                      {[...Array(5)].map((_, si) => (
                        <span key={si} className="text-amber-400 text-xs">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section id="metrics" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.05) 0%, rgba(139,92,246,0.05) 50%, rgba(6,182,212,0.03) 100%)" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

        <div
          ref={metricsRef}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="section-reveal text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Proven <span className="gradient-text">Results</span>
            </h2>
            <p className="text-slate-400">Numbers that speak for themselves</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {metrics.map((metric, i) => (
              <div
                key={i}
                className={`section-reveal stagger-${i + 1} metric-card`}
              >
                <div className="glass rounded-2xl p-5 text-center border border-white/5 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="text-2xl mb-2">{metric.icon}</div>
                  <div className="text-2xl lg:text-3xl font-black gradient-text">
                    {metric.value}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 leading-tight">
                    {metric.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
