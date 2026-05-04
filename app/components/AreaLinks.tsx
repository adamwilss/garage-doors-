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
          <div className="bg-white border border-slate-200 rounded-xl p-6 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-accent" />
              <h3 className="text-lg font-bold text-slate-900">{area.name}</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">
              {area.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {area.services.map((s) => (
                <Link
                  key={s}
                  href={`/${s === "garage-doors" ? "garage-doors" : s === "repairs" ? "garage-door-repairs" : s === "automation" ? "garage-door-automation" : "gates"}`}
                  className="inline-block px-3 py-1 bg-slate-100 hover:bg-accent-light text-slate-700 hover:text-accent-700 text-xs font-medium rounded-md transition-colors"
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
