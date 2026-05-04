"use client";

import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";
import { MapPin } from "lucide-react";

interface Area {
  name: string;
  slug: string;
  description: string;
  services: string[];
}

export function AreaLinks({ areas }: { areas: Area[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {areas.map((area, i) => (
        <ScrollReveal key={area.slug} delay={i * 0.1}>
          <div className="bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2a2a2a] rounded-xl p-6 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-accent" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{area.name}</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 flex-1">
              {area.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {area.services.map((s) => (
                <Link
                  key={s}
                  href={`/${s === "garage-doors" ? "garage-doors" : s === "repairs" ? "garage-door-repairs" : s === "automation" ? "garage-door-automation" : "gates"}`}
                  className="inline-block px-3 py-1 bg-slate-100 dark:bg-[#222] hover:bg-accent-light dark:hover:bg-accent/10 text-slate-700 dark:text-slate-300 hover:text-accent-700 dark:hover:text-accent text-xs font-medium rounded-md transition-colors"
                >
                  {s === "garage-doors"
                    ? "Garage doors"
                    : s === "repairs"
                    ? "Repairs"
                    : s === "automation"
                    ? "Automation"
                    : "Gates"}
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
