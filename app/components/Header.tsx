"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks, business } from "@/lib/content";
import { Menu, X, Phone } from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight shrink-0">
            <span className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              Quality Garage Doors
            </span>
            <span className="text-xs sm:text-sm text-slate-600 font-medium">
              Carlisle
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={business.phoneHref}
              className="flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              {business.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 bg-accent hover:bg-accent-600 text-white text-sm font-semibold rounded-md transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-slate-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-slate-700 hover:text-accent py-2 border-b border-slate-100"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={business.phoneHref}
              className="flex items-center gap-2 text-base font-semibold text-slate-900 py-2"
            >
              <Phone className="w-4 h-4" />
              {business.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-3 bg-accent hover:bg-accent-600 text-white text-base font-semibold rounded-md transition-colors mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Get a Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
