"use client";

import Link from "next/link";
import { business } from "@/lib/content";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { AssembleText } from "./AssembleText";
import { ParticleCanvas } from "./ParticleCanvas";
import { GarageDoorReveal } from "./GarageDoorReveal";

export type HeroVariant = "default" | "garage-doors" | "repairs" | "automation" | "gates" | "gallery" | "contact" | "content";

interface HeroProps {
  headline: string;
  subheadline: string;
  ctas?: { label: string; href: string; variant: "primary" | "secondary" | "outline" }[];
  showTrustBar?: boolean;
  trustPoints?: string[];
  variant?: HeroVariant;
}

const variantStyles: Record<HeroVariant, string> = {
  default: "bg-slate-100 dark:bg-[#050505]",
  "garage-doors": "bg-gradient-to-br from-slate-100 via-[#e8f0e5] to-slate-100 dark:from-[#050505] dark:via-[#1a2e14] dark:to-[#050505]",
  repairs: "bg-gradient-to-br from-slate-100 via-[#e8e8e8] to-slate-100 dark:from-[#050505] dark:via-[#2a2a2a] dark:to-[#050505]",
  automation: "bg-gradient-to-br from-slate-100 via-[#e8e8f0] to-slate-100 dark:from-[#050505] dark:via-[#1a1a2e] dark:to-[#050505]",
  gates: "bg-gradient-to-br from-slate-100 via-[#e8f0e5] to-slate-100 dark:from-[#050505] dark:via-[#1e3318] dark:to-[#050505]",
  gallery: "bg-slate-100 dark:bg-[#050505]",
  contact: "bg-gradient-to-br from-slate-100 via-[#e8e8e8] to-slate-100 dark:from-[#1a1a1a] dark:via-[#2a2a2a] dark:to-[#1a1a1a]",
  content: "bg-gradient-to-br from-slate-100 via-[#e8e8e8] to-slate-100 dark:from-[#050505] dark:via-[#1a1a1a] dark:to-[#050505]",
};

export function Hero({
  headline,
  subheadline,
  ctas,
  showTrustBar = false,
  trustPoints,
  variant = "default",
}: HeroProps) {
  const prefersReducedMotion = useReducedMotion();
  const bgClass = variantStyles[variant];

  const heroContent = (
    <section className={`relative text-slate-900 dark:text-white overflow-hidden ${bgClass}`}>
      {/* Particle canvas on relevant variants */}
      {(variant === "default" || variant === "garage-doors" || variant === "automation") && (
        <ParticleCanvas />
      )}

      {/* Subtle grid pattern for automation variant */}
      {variant === "automation" && (
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(103,168,68,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(103,168,68,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div>
          <h1 className="text-xl sm:text-xl md:text-[1.75rem] lg:text-[2.2rem] xl:text-[2.8rem] 2xl:text-[3.25rem] font-extrabold tracking-tight leading-tight mb-6 text-balance sm:whitespace-nowrap">
            <AssembleText text={headline} />
          </h1>
          <motion.p
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl"
            {...(prefersReducedMotion ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.4 } })}
          >
            {subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4 max-w-2xl"
            {...(prefersReducedMotion ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.6 } })}
          >
            {ctas?.map((cta) => {
              const base = "inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-base transition-colors";
              const variants = {
                primary: "bg-accent hover:bg-accent-600 text-white",
                secondary: "bg-white hover:bg-[#f2f2f2] text-black shadow-lg shadow-black/30",
                outline: "border-2 border-accent text-accent hover:bg-accent hover:text-white",
              };
              const isExternal = cta.href.startsWith("http") || cta.href.startsWith("tel:");
              const Tag = isExternal ? "a" : Link;
              const props = isExternal ? { href: cta.href } : { href: cta.href };
              return (
                <Tag
                  key={cta.label}
                  {...props}
                  className={`${base} ${variants[cta.variant]}`}
                >
                  {cta.label.includes("Call") && <Phone className="w-4 h-4" />}
                  {cta.label.includes("WhatsApp") && <MessageCircle className="w-4 h-4" />}
                  {cta.label.includes("Quote") && <FileText className="w-4 h-4" />}
                  {cta.label}
                </Tag>
              );
            }) || (
              <>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-600 text-white rounded-md font-semibold text-base transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  Get a free quote
                </Link>
                <a
                  href={business.phoneHref}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-[#f2f2f2] text-black rounded-md font-semibold text-base transition-colors shadow-lg shadow-black/30"
                >
                  <Phone className="w-4 h-4" />
                  Call {business.phone}
                </a>
              </>
            )}
          </motion.div>
        </div>

        {/* Trust Bar */}
        {showTrustBar && trustPoints && (
          <motion.div
            className="mt-12 pt-8 border-t border-white/10"
            {...(prefersReducedMotion ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.8 } })}
          >
            <div className="flex flex-wrap gap-3">
              {trustPoints.map((point) => (
                <span
                  key={point}
                  className="inline-flex items-center px-3 py-1.5 bg-slate-200/50 dark:bg-white/10 text-slate-600 dark:text-slate-300 text-sm font-medium rounded-full border border-slate-300/50 dark:border-white/10"
                >
                  {point}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );

  if (variant === "default") {
    return <GarageDoorReveal>{heroContent}</GarageDoorReveal>;
  }

  return heroContent;
}
