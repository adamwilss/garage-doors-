"use client";

import { useRef } from "react";
import { useInView, motion, useReducedMotion } from "framer-motion";
import { ClipboardCheck, Wrench, Phone, ThumbsUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Step {
  number: number;
  title: string;
  description: string;
  Icon: LucideIcon;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Enquiry",
    description:
      "Call, WhatsApp or fill in the form. We arrange a free site visit at a time that suits you.",
    Icon: Phone,
  },
  {
    number: 2,
    title: "Survey & Quote",
    description:
      "We visit your property, assess requirements and provide a clear written quotation with no obligation.",
    Icon: ClipboardCheck,
  },
  {
    number: 3,
    title: "Installation",
    description:
      "Our experienced team carries out the work efficiently, tidily and to a high standard using quality products.",
    Icon: Wrench,
  },
  {
    number: 4,
    title: "Aftercare",
    description:
      "All work is fully guaranteed. We are available for servicing, repairs and support whenever you need us.",
    Icon: ThumbsUp,
  },
];

const premiumEase: [number, number, number, number] = [0.33, 1, 0.68, 1];

function StepCard({ step }: { step: Step }) {
  const { Icon } = step;

  return (
    <div className="bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2a2a2a] rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-2">
        <Icon className="w-5 h-5 text-accent" />
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          {step.title}
        </h3>
      </div>
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
        {step.description}
      </p>
    </div>
  );
}

export default function ProcessTimeline() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <section className="relative w-full max-w-4xl mx-auto py-16 md:py-24 px-4 md:px-8">
      {/* Section heading */}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: premiumEase }}
        className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white"
      >
        How It Works
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: premiumEase, delay: 0.1 }}
        className="text-center text-slate-600 dark:text-slate-400 mb-16 max-w-2xl mx-auto"
      >
        From first contact to ongoing aftercare — our simple four-step process.
      </motion.p>

      {/* Timeline */}
      <div className="relative">
        {steps.map((step, index) => (
          <TimelineStep
            key={step.number}
            step={step}
            index={index}
            isLast={index === steps.length - 1}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
      </div>
    </section>
  );
}

function TimelineStep({
  step,
  index,
  isLast,
  prefersReducedMotion,
}: {
  step: Step;
  index: number;
  isLast: boolean;
  prefersReducedMotion: boolean;
}) {
  const stepRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(stepRef, { once: true, margin: "-60px" });
  // Steps at odd indices (2, 4) display card on the left on desktop
  const cardOnLeft = index % 2 === 1;

  const cardX = prefersReducedMotion ? 0 : cardOnLeft ? -40 : 40;

  return (
    <div
      ref={stepRef}
      className="relative flex items-start md:items-center gap-6 md:gap-0 pb-12"
    >
      {/* Left column: card for even-numbered steps on desktop */}
      <div className="hidden md:flex md:w-1/2 md:pr-12 justify-end">
        {cardOnLeft && (
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, x: cardX }}
            animate={
              prefersReducedMotion
                ? {}
                : isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: cardX }
            }
            transition={{ duration: 0.6, ease: premiumEase, delay: 0.15 }}
            className="w-full max-w-sm"
          >
            <StepCard step={step} />
          </motion.div>
        )}
      </div>

      {/* Center line + circle */}
      <div className="relative flex flex-col items-center shrink-0">
        {/* Background line */}
        {!isLast && (
          <motion.div
            className="absolute top-5 left-1/2 -translate-x-1/2 w-0.5 bg-slate-200 dark:bg-[#2a2a2a]"
            style={{ height: "calc(100% - 0.5rem)", transformOrigin: "top" }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.8, ease: premiumEase, delay: 0.3 }}
          />
        )}

        {/* Accent line overlay */}
        {!isLast && (
          <motion.div
            className="absolute top-5 left-1/2 -translate-x-1/2 w-0.5 bg-accent"
            style={{ height: "calc(100% - 0.5rem)", transformOrigin: "top" }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.0, ease: premiumEase, delay: 0.5 }}
          />
        )}

        {/* Numbered circle */}
        <motion.div
          className="relative z-10 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm shadow-md"
          initial={prefersReducedMotion ? {} : { scale: 0 }}
          animate={
            prefersReducedMotion
              ? {}
              : isInView
                ? { scale: 1 }
                : { scale: 0 }
          }
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.1,
          }}
        >
          {step.number}
        </motion.div>
      </div>

      {/* Right column: card for odd-numbered steps on desktop, all steps on mobile */}
      <div className="flex-1 md:w-1/2 md:pl-12">
        {/* Mobile: always show */}
        <motion.div
          initial={
            prefersReducedMotion ? {} : { opacity: 0, x: cardOnLeft ? 40 : 40 }
          }
          animate={
            prefersReducedMotion
              ? {}
              : isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: 40 }
          }
          transition={{ duration: 0.6, ease: premiumEase, delay: 0.15 }}
          className="md:hidden"
        >
          <StepCard step={step} />
        </motion.div>

        {/* Desktop: only show for steps that go right (not cardOnLeft) */}
        {!cardOnLeft && (
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, x: cardX }}
            animate={
              prefersReducedMotion
                ? {}
                : isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: cardX }
            }
            transition={{ duration: 0.6, ease: premiumEase, delay: 0.15 }}
            className="hidden md:block"
          >
            <StepCard step={step} />
          </motion.div>
        )}
      </div>
    </div>
  );
}