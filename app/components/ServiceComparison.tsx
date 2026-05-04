"use client";

import { ScrollReveal } from "./ScrollReveal";
import { Thermometer, Ruler, ArrowUp, Zap } from "lucide-react";

const comparisons = [
  {
    name: "Sectional doors",
    tagline: "Best for insulation, security, modern looks and automation",
    icon: <Thermometer className="w-6 h-6" />,
  },
  {
    name: "Roller shutter doors",
    tagline: "Best for tight spaces, low ceilings and practical access",
    icon: <Ruler className="w-6 h-6" />,
  },
  {
    name: "Up and over doors",
    tagline: "Best for simple, reliable and cost effective replacement",
    icon: <ArrowUp className="w-6 h-6" />,
  },
  {
    name: "Automated doors",
    tagline: "Best for convenience, security and daily use",
    icon: <Zap className="w-6 h-6" />,
  },
];

export function ServiceComparison() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {comparisons.map((item, i) => (
        <ScrollReveal key={item.name} delay={i * 0.1}>
          <div className="group p-6 bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2a2a2a] rounded-xl hover:bg-slate-50 dark:hover:bg-[#1a1a1a]/50 transition-all">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent-light dark:bg-accent/10 text-accent mb-4 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{item.name}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">{item.tagline}</p>
            <div className="mt-4 h-px bg-gradient-to-r from-accent/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
