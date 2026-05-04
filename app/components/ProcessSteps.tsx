"use client";

import { ScrollReveal } from "./ScrollReveal";
import { Phone, ClipboardCheck, Wrench, ThumbsUp } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Enquiry",
    description: "Call, WhatsApp or fill in the form. We will arrange a free site visit at a time that suits you.",
    icon: <Phone className="w-6 h-6" />,
  },
  {
    number: "02",
    title: "Survey & Quote",
    description: "We visit your property, assess the requirements and provide a clear written quotation with no obligation.",
    icon: <ClipboardCheck className="w-6 h-6" />,
  },
  {
    number: "03",
    title: "Installation",
    description: "Our experienced team carries out the work efficiently, tidily and to a high standard using quality products.",
    icon: <Wrench className="w-6 h-6" />,
  },
  {
    number: "04",
    title: "Aftercare",
    description: "All work is fully guaranteed. We are available for servicing, repairs and support whenever you need us.",
    icon: <ThumbsUp className="w-6 h-6" />,
  },
];

export function ProcessSteps() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {steps.map((step, i) => (
        <ScrollReveal key={step.number} delay={i * 0.15}>
          <div className="relative bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2a2a2a] rounded-xl p-6 h-full">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent-light dark:bg-accent/10 text-accent mb-4">
              {step.icon}
            </div>
            <div className="text-xs font-bold text-accent mb-2">Step {step.number}</div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">{step.description}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
