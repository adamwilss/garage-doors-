"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { TiltCard } from "./TiltCard";
import { MagneticButton } from "./MagneticButton";
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
      <TiltCard className="h-full">
        <MagneticButton href={service.href} className="w-full h-full">
          <div className="group block bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2a2a2a] rounded-xl p-6 hover:border-accent hover:shadow-lg dark:hover:shadow-accent/10 transition-all duration-300 h-full">
            <div className="flex items-start justify-between mb-4">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent-light dark:bg-accent/10 text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all">
                {iconMap[service.icon] || <DoorOpen className="w-7 h-7" />}
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-accent group-hover:translate-x-1 transition-all" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{service.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{service.description}</p>
          </div>
        </MagneticButton>
      </TiltCard>
    </ScrollReveal>
  );
}
