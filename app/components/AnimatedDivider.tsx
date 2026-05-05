"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const LINE_EASE = [0.33, 1, 0.68, 1] as const;

export function AnimatedDivider({ className = "" }: { className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={`w-full flex items-center justify-center py-8 ${className}`}>
        <div className="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent w-full max-w-xs" />
      </div>
    );
  }

  return (
    <div ref={ref} className={`w-full flex items-center justify-center py-8 ${className}`}>
      <div className="relative flex items-center justify-center w-full max-w-xs">
        {/* Glow line — wider, more transparent, scales in slower */}
        <motion.div
          className="absolute inset-0 h-[3px] bg-gradient-to-r from-transparent via-accent/20 dark:via-accent/25 to-transparent"
          style={{ transformOrigin: "center" }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{
            duration: 1.0,
            ease: LINE_EASE,
            delay: 0.1,
          }}
        />

        {/* Main accent line */}
        <motion.div
          className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-accent/40 dark:via-accent/50 to-transparent"
          style={{ transformOrigin: "center" }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{
            duration: 0.8,
            ease: LINE_EASE,
          }}
        />

        {/* Expanding center dot */}
        <motion.div
          className="absolute w-2 h-2 rounded-full bg-accent shadow-lg shadow-accent/30 dark:shadow-accent/40"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        />
      </div>
    </div>
  );
}