import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import ProjectCalculator from "@/components/ProjectCalculator";
import Services from "@/components/Services";
import ProcessTimeline from "@/components/ProcessTimeline";
import TrustAuthority from "@/components/TrustAuthority";
import ContactForm from "@/components/ContactForm";
import ContactSidebar from "@/components/ContactSidebar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#06070b] text-slate-100 selection:bg-indigo-500/30 selection:text-white">
      {/* Global Fixed Navigation */}
      <Navbar />

      {/* Floating Sticky Quick Action Sidebar */}
      <ContactSidebar />

      {/* 1. Cyber Hero with Interactive Particle Network & Terminal */}
      <Hero />

      {/* 2. Bento Grid: Modern Engineering Architecture */}
      <BentoGrid />

      {/* 3. Interactive Project Scope & ROI Estimator */}
      <section className="py-20 relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ProjectCalculator />
      </section>

      {/* 4. Core Services & Capabilities */}
      <Services />

      {/* 5. 4-Step High-Velocity Launch Process */}
      <ProcessTimeline />

      {/* 6. Proof, Metrics, & Client Testimonials */}
      <TrustAuthority />

      {/* 7. Lead Generation Engine (Google Sheets Backend) */}
      <ContactForm />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
