"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    icon: "🌐",
    title: "Web Development",
    description:
      "Scalable, high-performance web platforms built with modern frameworks. We craft secure architectures and conversion-optimized experiences that drive business results.",
    tags: ["React", "Next.js", "Node.js", "PostgreSQL"],
    gradient: "from-indigo-500/20 to-violet-500/20",
    borderColor: "border-indigo-500/20 hover:border-indigo-500/50",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android. Smooth, intuitive user experiences built with Flutter and React Native for maximum performance.",
    tags: ["Flutter", "React Native", "iOS", "Android"],
    gradient: "from-violet-500/20 to-purple-500/20",
    borderColor: "border-violet-500/20 hover:border-violet-500/50",
  },
  {
    icon: "✨",
    title: "UI/UX Design",
    description:
      "User-centric design systems and conversion-optimized interfaces. We turn complex problems into elegant, intuitive digital experiences that users love.",
    tags: ["Figma", "Design Systems", "Prototyping", "Research"],
    gradient: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/20 hover:border-cyan-500/50",
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    description:
      "Enterprise-grade cloud infrastructure on AWS, Azure, and GCP. CI/CD pipelines, containerization, and scalable architecture for 99.9% uptime.",
    tags: ["AWS", "GCP", "Docker", "Kubernetes"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/20 hover:border-emerald-500/50",
  },
  {
    icon: "📈",
    title: "Digital Marketing & SEO",
    description:
      "Performance-focused marketing strategies and advanced SEO methodologies. We improve organic reach, qualified leads, and measurable ROI for your business.",
    tags: ["SEO", "SEM", "Content", "Analytics"],
    gradient: "from-orange-500/20 to-amber-500/20",
    borderColor: "border-orange-500/20 hover:border-orange-500/50",
  },
  {
    icon: "🤖",
    title: "AI & Automation",
    description:
      "Intelligent automation solutions and AI-powered tools to streamline your workflows. From chatbots to ML integrations, we bring AI to your business.",
    tags: ["AI/ML", "Automation", "APIs", "Integration"],
    gradient: "from-pink-500/20 to-rose-500/20",
    borderColor: "border-pink-500/20 hover:border-pink-500/50",
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
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={sectionRef}
          className="section-reveal text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <span className="text-indigo-400 text-sm">⚡</span>
            <span className="text-sm text-slate-300 font-medium">What We Do</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            End-to-End{" "}
            <span className="gradient-text">Digital Solutions</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            From idea to launch and beyond — we provide a complete suite of
            technology services to accelerate your digital transformation journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              className={`section-reveal stagger-${(i % 3) + 1} service-card`}
            >
              <div
                className={`glass glass-hover rounded-2xl p-6 lg:p-8 h-full flex flex-col border ${service.borderColor} transition-all duration-300 cursor-default`}
              >
                {/* Icon */}
                <div className="service-icon-wrap w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 text-slate-400 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14 section-reveal">
          <p className="text-slate-400 mb-4">
            Don&apos;t see what you need?{" "}
            <button
              onClick={() => {
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors"
            >
              Let&apos;s talk about your custom requirements →
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
