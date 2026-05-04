"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { Wrench, Zap, DoorOpen, Fence } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  door: <DoorOpen className="w-7 h-7" />,
  wrench: <Wrench className="w-7 h-7" />,
  zap: <Zap className="w-7 h-7" />,
  gate: <Fence className="w-7 h-7" />,
};

interface Service {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
}

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <Link
        href={service.href}
        className="group block bg-white border border-slate-200 rounded-xl p-6 hover:border-accent hover:shadow-lg transition-all duration-300"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent-light text-accent">
            {iconMap[service.icon] || <DoorOpen className="w-7 h-7" />}
          </div>
          <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-accent group-hover:translate-x-1 transition-all" />
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
      </Link>
    </ScrollReveal>
  );
}
