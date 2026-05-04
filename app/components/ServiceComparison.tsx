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
          <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-accent hover:shadow-md transition-all">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent-light text-accent mb-4">
              {item.icon}
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">{item.name}</h3>
            <p className="text-sm text-slate-600">{item.tagline}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
