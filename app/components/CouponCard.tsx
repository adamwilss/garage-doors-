"use client";

import { motion } from "framer-motion";
import { Phone, Scissors } from "lucide-react";
import { business } from "@/lib/content";

interface CouponCardProps {
  title: string;
  subtitle: string;
  description: string;
  code: string;
  disclaimer: string;
}

export function CouponCard({ title, subtitle, description, code, disclaimer }: CouponCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="relative group"
    >
      {/* Ticket cutouts */}
      <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-slate-100 rounded-full z-10" />
      <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-slate-100 rounded-full z-10" />

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        {/* Top accent bar */}
        <div className="h-2 bg-gradient-to-r from-accent via-accent-600 to-accent" />

        <div className="p-6 flex flex-col flex-1">
          {/* Big red value */}
          <div className="text-center mb-4">
            <div className="text-urgent font-black text-5xl sm:text-6xl tracking-tight leading-none mb-1">
              {title}
            </div>
            <div className="w-16 h-1 bg-urgent mx-auto rounded-full opacity-60" />
          </div>

          {/* Subtitle */}
          <p className="text-slate-900 font-bold text-sm uppercase tracking-wider text-center mb-3">
            {subtitle}
          </p>

          {/* Description */}
          <p className="text-slate-600 text-sm text-center leading-relaxed mb-5 flex-1">
            {description}
          </p>

          {/* Dashed divider */}
          <div className="border-t-2 border-dashed border-slate-200 my-4 relative">
            <Scissors className="w-4 h-4 text-slate-400 absolute left-1/2 -translate-x-1/2 -top-2.5 bg-white px-1" />
          </div>

          {/* Code */}
          <div className="bg-accent-light/50 border border-accent/20 rounded-lg px-4 py-2.5 mb-4 text-center">
            <span className="text-xs text-slate-500 uppercase tracking-wide">Mention Code</span>
            <div className="text-accent font-bold text-lg tracking-widest mt-0.5">
              {code}
            </div>
          </div>

          {/* CTA */}
          <a
            href={business.phoneHref}
            className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-urgent hover:bg-urgent-600 text-white rounded-md font-bold text-sm transition-colors shadow-lg shadow-urgent/25"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>

          {/* Disclaimer */}
          <p className="text-[11px] text-slate-400 text-center mt-3 leading-tight">
            {disclaimer}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
