"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const sidebarItems = [
  {
    id: "consultation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    href: "/contact",
    label: "Schedule Consultation",
    color: "bg-indigo-500/20 hover:bg-indigo-500/40 border-indigo-500/30",
    textColor: "text-indigo-400",
    isInternal: true,
  },
  {
    id: "email",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
    href: "mailto:hello@techgroww.dev",
    label: "Direct Email Inquiry",
    color: "bg-cyan-500/20 hover:bg-cyan-500/40 border-cyan-500/30",
    textColor: "text-cyan-400",
    isInternal: false,
  },
  {
    id: "linkedin",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    href: "https://www.linkedin.com/company/102058460",
    label: "Tech Groww on LinkedIn",
    color: "bg-blue-500/20 hover:bg-blue-500/40 border-blue-500/30",
    textColor: "text-blue-400",
    isInternal: false,
  },
];

export default function ContactSidebar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed right-4 lg:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
      }`}
      role="complementary"
      aria-label="Quick contact channels"
    >
      {sidebarItems.map((item, i) =>
        item.isInternal ? (
          <Link
            key={item.id}
            href={item.href}
            className={`sidebar-icon border ${item.color} ${item.textColor} transition-all duration-300`}
            data-tooltip={item.label}
            aria-label={item.label}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            {item.icon}
          </Link>
        ) : (
          <a
            key={item.id}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`sidebar-icon border ${item.color} ${item.textColor} transition-all duration-300`}
            data-tooltip={item.label}
            aria-label={item.label}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            {item.icon}
          </a>
        )
      )}
    </div>
  );
}
