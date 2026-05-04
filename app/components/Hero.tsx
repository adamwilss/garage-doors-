"use client";

import Link from "next/link";
import { business } from "@/lib/content";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, MessageCircle, FileText } from "lucide-react";

interface HeroProps {
  headline: string;
  subheadline: string;
  ctas?: { label: string; href: string; variant: "primary" | "secondary" | "outline" }[];
  showTrustBar?: boolean;
  trustPoints?: string[];
}

export function Hero({ headline, subheadline, ctas, showTrustBar = false, trustPoints }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();

  const animationProps = prefersReducedMotion
    ? {}
    : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };

  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background overlay pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="max-w-3xl">
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight mb-6"
            {...animationProps}
          >
            {headline}
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl"
            {...(prefersReducedMotion ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.15 } })}
          >
            {subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4"
            {...(prefersReducedMotion ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.3 } })}
          >
            {ctas?.map((cta) => {
              const base = "inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-base transition-colors";
              const variants = {
                primary: "bg-accent hover:bg-accent-600 text-white",
                secondary: "bg-white hover:bg-slate-100 text-slate-900",
                outline: "border-2 border-white hover:bg-white hover:text-slate-900 text-white",
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
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 rounded-md font-semibold text-base transition-colors"
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
            className="mt-12 pt-8 border-t border-slate-700/50"
            {...(prefersReducedMotion ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.45 } })}
          >
            <div className="flex flex-wrap gap-3">
              {trustPoints.map((point) => (
                <span
                  key={point}
                  className="inline-flex items-center px-3 py-1.5 bg-slate-800/80 text-slate-300 text-sm font-medium rounded-full border border-slate-700"
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
}
