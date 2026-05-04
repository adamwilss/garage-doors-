"use client";

import Link from "next/link";
import { business } from "@/lib/content";
import { ScrollReveal } from "./ScrollReveal";
import { MagneticButton } from "./MagneticButton";
import { Phone, MessageCircle, FileText } from "lucide-react";

interface CTASectionProps {
  headline?: string;
  subheadline?: string;
}

export function CTASection({
  headline = "Get Your Free Quote Today",
  subheadline = "Call, WhatsApp or fill in the form. We cover Carlisle, Cumbria, Dumfries and Galloway, Northumberland and the Scottish Borders.",
}: CTASectionProps) {
  return (
    <ScrollReveal>
      <section className="bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              {headline}
            </h2>
            <p className="text-accent-light text-base sm:text-lg mb-8">{subheadline}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <MagneticButton href="/contact" strength={0.25}>
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 rounded-md font-semibold text-base transition-colors">
                  <FileText className="w-4 h-4" />
                  Get a free quote
                </span>
              </MagneticButton>
              <MagneticButton href={business.phoneHref} strength={0.25}>
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-accent-700 hover:bg-accent-600 text-white rounded-md font-semibold text-base transition-colors border border-white/20">
                  <Phone className="w-4 h-4" />
                  Call {business.phone}
                </span>
              </MagneticButton>
              <MagneticButton href={business.whatsAppHref} strength={0.25}>
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-accent-700 hover:bg-accent-600 text-white rounded-md font-semibold text-base transition-colors border border-white/20">
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
