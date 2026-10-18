"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const tickerItems = [
  "NEXT.JS 16 APPS",
  "FLUTTER MOBILE ECOSYSTEMS",
  "AUTONOMOUS AI AGENTS",
  "KUBERNETES & CLOUD SRE",
  "CONVERSION-OPTIMIZED UI/UX",
  "HIGH-THROUGHPUT API CLUSTERS",
  "VECTOR DATABASE SEARCH",
  "ENTERPRISE POSTGRESQL",
];

const terminalLogs = [
  { text: "$ techgroww deploy --cluster global-production", color: "text-slate-300" },
  { text: "✔ Compiling Next.js 16 edge bundle [Turbopack] (0.8s)", color: "text-emerald-400" },
  { text: "✔ Initializing PostgreSQL connection pool (max 1000 conns)", color: "text-indigo-400" },
  { text: "✔ Mounting AI Autonomous Agent runtime on gRPC", color: "text-cyan-400" },
  { text: "⚡ Latency: 12ms | Global CDN: Synced | Status: Healthy", color: "text-violet-300" },
];

export default function Hero() {
  const [activeLogIndex, setActiveLogIndex] = useState<number>(3);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particles: { x: number; y: number; vx: number; vy: number; radius: number; color: string }[] = [];
    const colors = ["#6366f1", "#8b5cf6", "#06b6d4"];

    for (let i = 0; i < 35; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.12 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Cycle terminal logs
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLogIndex((prev) => (prev < terminalLogs.length ? prev + 1 : 1));
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden mesh-bg pt-28 pb-16">
      {/* Background Interactive Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-60 z-0" />

      {/* Decorative radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/[0.12] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-cyan-600/[0.08] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Typography & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121424] border border-indigo-500/30 shadow-lg shadow-indigo-500/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-slate-200">
                Next-Gen Digital Product & AI Engineering
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] mb-6">
              We Engineer Software That <span className="gradient-text">Dominates Markets.</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed mb-8">
              Tech Groww is an elite engineering agency. We turn ambitious visions into high-converting web applications, native mobile apps, and autonomous AI systems built for planetary scale.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <Link
                href="/contact"
                className="btn-gradient w-full sm:w-auto px-8 py-4 rounded-xl text-white font-bold text-sm tracking-wide text-center shadow-2xl shadow-indigo-600/40 hover:scale-105 transition-transform"
              >
                Claim Your Free Tech Audit →
              </Link>
              <Link
                href="/work"
                className="glass w-full sm:w-auto px-7 py-4 rounded-xl text-slate-300 hover:text-white font-semibold text-sm border border-white/10 hover:border-indigo-400/50 transition-all text-center"
              >
                Explore Live Case Studies
              </Link>
            </div>

            {/* Social Proof Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4 border-t border-white/[0.08] text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 text-sm">★★★★★</span>
                <span className="font-semibold text-white">4.9/5.0</span>
                <span>Client Rating</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-600 hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-indigo-400 text-sm">150+</span>
                <span>Production Deployments</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-600 hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-emerald-400 text-sm">99.98%</span>
                <span>Guaranteed Uptime</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Terminal Engine & Glass Architectural Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Glowing back panel */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 rounded-3xl blur-2xl transform rotate-1 scale-95" />

              {/* Terminal Card */}
              <div className="relative glass-card rounded-3xl border border-white/[0.12] p-5 sm:p-6 shadow-2xl overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    techgroww-core-v4.2.edge
                  </div>
                  <div className="text-[11px] font-mono text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded">
                    PRODUCTION
                  </div>
                </div>

                {/* Simulated Terminal Output Stream */}
                <div className="font-mono text-xs space-y-2.5 mb-6 min-h-[140px]">
                  {terminalLogs.slice(0, activeLogIndex).map((log, i) => (
                    <div key={i} className={`${log.color} transition-all duration-300 leading-relaxed`}>
                      {log.text}
                    </div>
                  ))}
                  <div className="inline-block w-2 h-4 bg-indigo-400 animate-pulse align-middle" />
                </div>

                {/* Real-time Architecture Health Card */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/[0.08]">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-0.5">
                      Avg Response Time
                    </div>
                    <div className="text-xl font-black font-mono text-emerald-400">
                      14.2 ms
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-0.5">
                      Client Growth Lift
                    </div>
                    <div className="text-xl font-black font-mono text-cyan-400">
                      +310% ARR
                    </div>
                  </div>
                </div>

                {/* Instant Quote Shortcut */}
                <div className="mt-4 pt-3 text-center">
                  <Link
                    href="/pricing"
                    className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold underline underline-offset-4 inline-flex items-center gap-1"
                  >
                    Launch Interactive Scope Calculator →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Cyber Ticker Bar */}
      <div className="relative mt-16 py-3 border-y border-white/[0.06] bg-[#070912]/80 backdrop-blur-md overflow-hidden">
        <div className="marquee-track flex gap-8 items-center text-xs font-mono font-bold tracking-widest text-slate-400">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <div key={index} className="flex items-center gap-4 shrink-0">
              <span className="text-indigo-400">✦</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
