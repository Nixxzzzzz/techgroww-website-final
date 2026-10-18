import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrustAuthority from "@/components/TrustAuthority";
import ContactForm from "@/components/ContactForm";
import ContactSidebar from "@/components/ContactSidebar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Sticky Contact Sidebar */}
      <ContactSidebar />

      {/* Page Sections */}
      <Hero />
      <Services />
      <TrustAuthority />
      <ContactForm />
      <Footer />
    </main>
  );
}
