"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Case Studies" },
  { href: "/pricing", label: "Pricing & ROI" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route transition
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#06070b]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/40"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-indigo-900/40 via-violet-900/30 to-cyan-900/40 border-b border-white/[0.05] py-1 px-4 text-center text-[11px] font-medium text-slate-300 hidden md:block">
        <span className="inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
          <span className="text-emerald-400 font-semibold">Live Q1 2026 Sprint Slots:</span>
          <span>Only 3 Dedicated Engineering Squads available for immediate onboarding.</span>
          <Link href="/contact" className="underline text-cyan-300 hover:text-white ml-1">
            Claim Your Spot →
          </Link>
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 lg:w-11 lg:h-11 rounded-xl overflow-hidden border border-indigo-500/30 group-hover:border-indigo-400/80 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] bg-[#0d0f1a]">
              <Image
                src="/logo.jpg"
                alt="Tech Groww Brand Logo"
                fill
                sizes="44px"
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg lg:text-xl font-black tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                TECH <span className="gradient-text">GROWW</span>
              </span>
              <span className="text-[9px] tracking-widest uppercase text-slate-400 font-medium -mt-1 hidden sm:block">
                Digital Engineering & Scale
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 bg-[#10121e]/80 border border-white/[0.08] px-3 py-1.5 rounded-full backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/25"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop Right CTA & Status */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available Now</span>
            </div>
            <Link
              href="/contact"
              className="btn-gradient px-5 py-2.5 rounded-xl text-white text-xs font-bold tracking-wide shadow-lg shadow-indigo-600/30"
            >
              Get Free Blueprint →
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              href="/contact"
              className="btn-gradient px-3 py-1.5 rounded-lg text-white text-xs font-bold"
            >
              Quote
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-xl text-slate-300 hover:text-white bg-white/[0.05] border border-white/[0.08] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`block w-full h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`block w-full h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block w-full h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-[420px] pb-6 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1.5 p-4 rounded-2xl bg-[#0e101a] border border-white/[0.1] shadow-2xl mt-2 backdrop-blur-2xl">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-600/30 to-violet-600/30 text-white border border-indigo-500/40"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                href="/contact"
                className="btn-gradient block w-full py-3 rounded-xl text-white text-xs font-bold text-center tracking-wide"
              >
                Schedule Strategy Session →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
