"use client";

import Navbar from "@/components/Navbar";
import ContactSidebar from "@/components/ContactSidebar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#06070b] text-slate-100 selection:bg-indigo-500/30 selection:text-white">
      <Navbar />
      <ContactSidebar />

      {/* Header Banner */}
      <section className="relative pt-36 pb-16 mesh-bg overflow-hidden border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-6">
            <span>🚀</span>
            <span>Direct Access to Senior Leadership</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Start Your <span className="gradient-text">Engineering Journey</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            Whether you need a full turnkey build, a specialized AI module, or a dedicated squad — let&apos;s build software that converts.
          </p>
        </div>
      </section>

      {/* Main Interactive Contact Section */}
      <ContactForm />

      <Footer />
    </main>
  );
}
