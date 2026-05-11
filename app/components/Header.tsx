"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { business } from "@/lib/content";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const mainNav = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const servicesDropdown = [
  { label: "Garage Doors", href: "/garage-doors" },
  { label: "Repairs", href: "/garage-door-repairs" },
  { label: "Automation", href: "/garage-door-automation" },
  { label: "Gates", href: "/gates" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Areas Covered", href: "/areas-covered" },
  { label: "Brochures", href: "/brochures" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;
  const isServiceActive = servicesDropdown.some((s) => s.href === pathname);

  return (
    <header className="bg-white dark:bg-[#111111] border-b border-slate-200 dark:border-[#222] sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="shrink-0 relative w-[160px] h-[36px] sm:w-[200px] sm:h-[44px]">
            <Image
              src="/images/logo-new.png"
              alt="Quality Garage Doors Carlisle"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {mainNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-urgent"
                    : "text-slate-700 dark:text-slate-300 hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  isServiceActive
                    ? "text-urgent"
                    : "text-slate-700 dark:text-slate-300 hover:text-accent"
                }`}
                aria-expanded={servicesOpen}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                  <div className="bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#333] rounded-xl shadow-lg py-2 min-w-[220px]">
                    {servicesDropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-4 py-2.5 text-sm transition-colors ${
                          isActive(item.href)
                            ? "text-urgent font-semibold bg-accent-light"
                            : "text-slate-700 dark:text-slate-300 hover:text-accent hover:bg-slate-50 dark:hover:bg-white/5"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop CTA + Theme */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={business.phoneHref}
              className="flex items-center gap-2 text-sm font-bold text-urgent hover:text-urgent-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {business.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2.5 bg-urgent hover:bg-urgent-600 text-white text-sm font-semibold rounded-md transition-colors shadow-md"
            >
              Get a Free Quote
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="p-2 text-slate-700 dark:text-slate-300"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileOpen && (
        <div className="lg:hidden bg-white dark:bg-[#111111] border-t border-slate-200 dark:border-[#222]">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            <Link
              href="/"
              className={`text-base font-medium py-2 border-b border-slate-100 dark:border-[#222] ${
                isActive("/") ? "text-accent" : "text-slate-700 dark:text-slate-300"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>

            <div className="py-2 border-b border-slate-100 dark:border-[#222]">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500 mb-1 block">
                Services
              </span>
              <div className="flex flex-col gap-1 pl-2">
                {servicesDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm py-1.5 ${
                      isActive(item.href) ? "text-accent font-semibold" : "text-slate-600 dark:text-slate-400"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {mainNav.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium py-2 border-b border-slate-100 dark:border-[#222] ${
                  isActive(link.href) ? "text-accent" : "text-slate-700 dark:text-slate-300"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <a
              href={business.phoneHref}
              className="flex items-center gap-2 text-base font-semibold text-slate-900 dark:text-white py-2"
            >
              <Phone className="w-4 h-4" />
              {business.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-3 bg-urgent hover:bg-urgent-600 text-white text-base font-semibold rounded-md transition-colors mt-2"
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
