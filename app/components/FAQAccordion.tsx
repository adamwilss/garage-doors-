"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface FAQ {
  question: string;
  answer: string;
}

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <ScrollReveal key={i} delay={i * 0.05}>
          <div className="border-b border-slate-200 dark:border-[#2a2a2a] overflow-hidden">
            <button
              type="button"
              className="w-full flex items-center justify-between py-5 text-left group"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              aria-expanded={openIndex === i}
            >
              <span className="font-semibold text-slate-900 dark:text-white pr-4 group-hover:text-accent transition-colors">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-slate-500 dark:text-slate-500 shrink-0 transition-transform duration-300 ${
                  openIndex === i ? "rotate-180 text-accent" : ""
                }`}
              />
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                openIndex === i ? "pb-5 max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
