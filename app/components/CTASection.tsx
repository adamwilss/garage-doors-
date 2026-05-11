"use client";

import Link from "next/link";
import { business } from "@/lib/content";
import { ScrollReveal } from "./ScrollReveal";
import { MagneticButton } from "./MagneticButton";
import { Phone, MessageCircle, FileText } from "lucide-react";

interface CTASectionProps {
  headline?: string;
  subheadline?: string;
  variant?: "accent" | "dark";
}

export function CTASection({
  headline = "Get Your Free Quote Today",
  subheadline = "Call, WhatsApp or fill in the form. We cover Carlisle, Cumbria, Dumfries and Galloway, Northumberland and the Scottish Borders.",
  variant = "accent",
}: CTASectionProps) {
  const isDark = variant === "dark";

  return (
    <ScrollReveal>
      <section className={isDark ? "bg-slate-100 dark:bg-[#050505]" : "bg-accent"}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 whitespace-nowrap ${
              isDark ? "text-slate-900 dark:text-white" : "text-white"
            }`}>
              {headline}
            </h2>
            <p className={`text-base sm:text-lg mb-8 ${
              isDark ? "text-slate-600 dark:text-slate-400" : "text-accent-light"
            }`}>
              {subheadline}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <MagneticButton href="/contact" strength={0.25}>
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-[#e8e8e8] text-[#1a1a1a] rounded-md font-semibold text-base transition-colors">
                  <FileText className="w-4 h-4" />
                  Get a free quote
                </span>
              </MagneticButton>
              <MagneticButton href={business.phoneHref} strength={0.25}>
                <span className={`inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-base transition-colors ${
                  isDark
                    ? "bg-slate-200 dark:bg-[#1a1a1a] hover:bg-slate-300 dark:hover:bg-[#2a2a2a] text-slate-900 dark:text-white border border-slate-300 dark:border-white/20"
                    : "bg-accent-700 hover:bg-accent-600 text-white border border-white/20"
                }`}>
                  <Phone className="w-4 h-4" />
                  Call {business.phone}
                </span>
              </MagneticButton>
              <MagneticButton href={business.whatsAppHref} strength={0.25}>
                <span className={`inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-base transition-colors ${
                  isDark
                    ? "bg-slate-200 dark:bg-[#1a1a1a] hover:bg-slate-300 dark:hover:bg-[#2a2a2a] text-slate-900 dark:text-white border border-slate-300 dark:border-white/20"
                    : "bg-accent-700 hover:bg-accent-600 text-white border border-white/20"
                }`}>
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </span>
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
