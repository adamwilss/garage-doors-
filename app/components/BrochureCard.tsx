"use client";

import { Download } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface Brochure {
  id: string;
  title: string;
  description: string;
  href: string;
}

export function BrochureCard({ brochure, index = 0 }: { brochure: Brochure; index?: number }) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2a2a2a] rounded-xl p-6 h-full flex flex-col">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent-light dark:bg-accent/10 text-accent mb-4">
          <Download className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{brochure.title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-1">{brochure.description}</p>
        <a
          href={brochure.href}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent hover:bg-accent-600 text-white rounded-md font-semibold text-sm transition-colors"
        >
          <Download className="w-4 h-4" />
          Download brochure
        </a>
      </div>
    </ScrollReveal>
  );
}
