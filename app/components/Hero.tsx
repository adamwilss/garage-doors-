"use client";

import Link from "next/link";
import { business } from "@/lib/content";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { AssembleText } from "./AssembleText";
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
  default: "bg-slate-100",
  "garage-doors": "bg-slate-100",
  repairs: "bg-slate-100",
  automation: "bg-slate-100",
  gates: "bg-slate-100",
  gallery: "bg-slate-100",
  contact: "bg-slate-100",
  content: "bg-slate-100",
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
    <section
      className={`relative text-slate-900 overflow-hidden ${bgClass}`}
    >
      {/* Static accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />

      {/* Hero content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 z-20">
        <div>
          <h1 className="text-xl sm:text-xl md:text-[1.75rem] lg:text-[2.2rem] xl:text-[2.8rem] 2xl:text-[3.25rem] font-extrabold tracking-tight leading-tight mb-6 whitespace-nowrap font-[var(--font-oswald)]">
            <AssembleText text={headline} />
          </h1>
          <motion.p
            className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl"
            {...(prefersReducedMotion ? {} : { initial: { opacity: 0, y: 60 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: 0.6 } })}
          >
            {subheadline}
          </motion.p>

          {/* CTAs with staggered cascade entrance */}
          <motion.div
            className="flex flex-wrap gap-4 max-w-2xl"
            {...(prefersReducedMotion
              ? {}
              : {
                  initial: "hidden",
                  animate: "visible",
                  variants: {
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.15 } },
                  },
                })}
          >
            {ctas?.map((cta, index) => {
              const base = "inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-base transition-colors";
              const variants = {
                primary: "bg-urgent hover:bg-urgent-600 text-white",
                secondary: "bg-white hover:bg-[#f2f2f2] text-black shadow-lg shadow-black/30",
                outline: "border-2 border-accent text-accent hover:bg-accent hover:text-white",
              };
              const isExternal = cta.href.startsWith("http") || cta.href.startsWith("tel:");
              const Tag = isExternal ? "a" : Link;
              const props = isExternal ? { href: cta.href } : { href: cta.href };
              return (
                <motion.span
                  key={cta.label}
                  {...(prefersReducedMotion
                    ? {}
                    : {
                        initial: { opacity: 0, y: 30, scale: 0.9 },
                        animate: { opacity: 1, y: 0, scale: 1 },
                        transition: { duration: 0.5, delay: 0.8 + index * 0.15, ease: "easeOut" },
                      })}
                >
                  <Tag
                    {...props}
                    className={`${base} ${variants[cta.variant]}`}
                  >
                    {cta.label.includes("Call") && <Phone className="w-4 h-4" />}
                    {cta.label.includes("WhatsApp") && <MessageCircle className="w-4 h-4" />}
                    {cta.label.includes("Quote") && <FileText className="w-4 h-4" />}
                    {cta.label}
                  </Tag>
                </motion.span>
              );
            }) || (
              <>
                <motion.span
                  {...(prefersReducedMotion
                    ? {}
                    : {
                        initial: { opacity: 0, y: 30, scale: 0.9 },
                        animate: { opacity: 1, y: 0, scale: 1 },
                        transition: { duration: 0.5, delay: 0.8, ease: "easeOut" },
                      })}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-urgent hover:bg-urgent-600 text-white rounded-md font-semibold text-base transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    Get a free quote
                  </Link>
                </motion.span>
                <motion.span
                  {...(prefersReducedMotion
                    ? {}
                    : {
                        initial: { opacity: 0, y: 30, scale: 0.9 },
                        animate: { opacity: 1, y: 0, scale: 1 },
                        transition: { duration: 0.5, delay: 0.95, ease: "easeOut" },
                      })}
                >
                  <a
                    href={business.phoneHref}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-[#f2f2f2] text-black rounded-md font-semibold text-base transition-colors shadow-lg shadow-black/30"
                  >
                    <Phone className="w-4 h-4" />
                    Call {business.phone}
                  </a>
                </motion.span>
              </>
            )}
          </motion.div>
        </div>

        {/* Trust Bar */}
        {showTrustBar && trustPoints && (
          <motion.div
            className="mt-12 pt-8 border-t border-slate-200"
            {...(prefersReducedMotion ? {} : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 1.1 } })}
          >
            <div className="flex flex-wrap gap-3">
              {trustPoints.map((point) => (
                <span
                  key={point}
                  className="inline-flex items-center px-3 py-1.5 bg-slate-200/50 text-slate-700 text-sm font-medium rounded-full border border-slate-300/50"
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