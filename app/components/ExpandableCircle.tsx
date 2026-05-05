"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { DoorOpen, Wrench, Zap, Fence } from "lucide-react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface Segment {
  icon: LucideIcon;
  label: string;
  description: string;
  href: string;
}

const segments: Segment[] = [
  {
    icon: DoorOpen,
    label: "Garage Doors",
    description:
      "Supply and installation of sectional, roller shutter, up and over, insulated, manual and automated garage doors from Alutech and Hormann.",
    href: "/garage-doors",
  },
  {
    icon: Wrench,
    label: "Repairs",
    description:
      "Fast, reliable repairs for broken springs, faulty motors, remote faults, stuck doors, damaged panels, cables and track issues.",
    href: "/garage-door-repairs",
  },
  {
    icon: Zap,
    label: "Automation",
    description:
      "Convert existing manual garage doors to electric operation with remote handsets, keypads, safety systems and battery backup.",
    href: "/garage-door-automation",
  },
  {
    icon: Fence,
    label: "Gates",
    description:
      "Automated and manual gates for residential and commercial properties. Sliding, swing and cantilever in steel, aluminium and timber.",
    href: "/gates",
  },
];

const segmentPositions: { x: string; y: string }[] = [
  /* top  */ { x: "50%", y: "0%" },
  /* right */ { x: "100%", y: "50%" },
  /* bottom */ { x: "50%", y: "100%" },
  /* left */ { x: "0%", y: "50%" },
];

export default function ExpandableCircle() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const activeSegment = activeIndex !== null ? segments[activeIndex] : null;

  const springTransition = shouldReduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 300, damping: 30 };

  function handleSegmentClick(index: number) {
    setActiveIndex((prev) => (prev === index ? null : index));
  }

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4">
      {/* ── Desktop layout: central circle + orbiting segments ── */}
      <div className="hidden md:block relative h-[500px]">
        {/* Central circle */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full bg-accent text-white shadow-lg"
          animate={{
            width: activeIndex !== null ? 180 : 160,
            height: activeIndex !== null ? 180 : 160,
          }}
          transition={springTransition}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={activeSegment?.label ?? "default"}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
              transition={{ duration: 0.2 }}
              className="text-center font-semibold text-lg leading-snug px-4"
            >
              {activeSegment ? activeSegment.label : "Our Services"}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Orbiting segment circles */}
        {segments.map((seg, i) => {
          const Icon = seg.icon;
          const pos = segmentPositions[i];
          const isActive = activeIndex === i;
          const isHovered = hoveredIndex === i;
          const isOtherActive = activeIndex !== null && !isActive;

          return (
            <motion.div
              key={seg.label}
              className="absolute z-20"
              style={{ left: pos.x, top: pos.y }}
              initial={false}
              animate={{
                x: pos.x === "50%" ? "-50%" : pos.x === "0%" ? "-100%" : "0%",
                y: pos.y === "50%" ? "-50%" : pos.y === "0%" ? "-100%" : "0%",
                scale: isActive ? 1 : isHovered ? 1.1 : 1,
                opacity: isOtherActive ? 0.4 : 1,
              }}
              transition={springTransition}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <AnimatePresence mode="wait">
                {isActive ? (
                  <motion.div
                    key="card"
                    layout
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    transition={springTransition}
                    className="w-64 rounded-2xl bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2a2a2a] shadow-xl p-6 flex flex-col items-center text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      {seg.label}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                      {seg.description}
                    </p>
                    <Link
                      href={seg.href}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-600 transition-colors"
                    >
                      Learn more
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </motion.div>
                ) : (
                  <motion.button
                    key="circle"
                    initial={false}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => handleSegmentClick(i)}
                    className="relative flex flex-col items-center justify-center cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full"
                  >
                    {/* Pulse ring */}
                    {!shouldReduceMotion && !isOtherActive && (
                      <motion.span
                        className="absolute inset-0 rounded-full bg-accent/20"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    )}

                    <span className="relative w-16 h-16 rounded-full bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2a2a2a] shadow-md flex items-center justify-center z-10 group-hover:bg-accent group-hover:border-accent transition-colors">
                      <Icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                    </span>

                    <AnimatePresence>
                      {(isHovered || isActive) && (
                        <motion.span
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                          className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300 whitespace-nowrap"
                        >
                          {seg.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* ── Mobile layout: vertical stack ── */}
      <div className="flex flex-col gap-4 md:hidden">
        {/* Header circle */}
        <div className="flex justify-center mb-4">
          <div className="w-28 h-28 rounded-full bg-accent flex items-center justify-center shadow-lg">
            <AnimatePresence mode="wait">
              <motion.span
                key={activeSegment?.label ?? "default"}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -6 }}
                transition={{ duration: 0.2 }}
                className="text-center font-semibold text-white text-base leading-snug px-3"
              >
                {activeSegment ? activeSegment.label : "Our Services"}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {segments.map((seg, i) => {
          const Icon = seg.icon;
          const isActive = activeIndex === i;

          return (
            <motion.div
              key={seg.label}
              layout
              className="rounded-2xl bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2a2a2a] shadow-sm overflow-hidden"
            >
              <button
                onClick={() => handleSegmentClick(i)}
                className="w-full flex items-center gap-3 p-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-2xl"
              >
                <motion.span
                  className="w-12 h-12 shrink-0 rounded-full bg-accent/10 flex items-center justify-center"
                  animate={{
                    backgroundColor: isActive ? "var(--color-accent)" : "rgba(63,116,47,0.1)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon
                    className={`w-6 h-6 transition-colors ${
                      isActive ? "text-white" : "text-accent"
                    }`}
                  />
                </motion.span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  {seg.label}
                </span>
                <motion.span
                  className="ml-auto text-slate-400"
                  animate={{ rotate: isActive ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  &#9662;
                </motion.span>
              </button>

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 30 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pt-1 text-sm text-slate-600 dark:text-slate-400">
                      <p className="mb-3">{seg.description}</p>
                      <Link
                        href={seg.href}
                        className="inline-flex items-center gap-1.5 font-medium text-accent hover:text-accent-600 transition-colors"
                      >
                        Learn more
                        <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}