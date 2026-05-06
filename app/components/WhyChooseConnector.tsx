"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export function WhyChooseConnector() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none hidden md:block">
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
        fill="none"
      >
        <motion.path
          d="M 200 80 Q 400 80 600 150 Q 800 220 1000 220 Q 1100 220 1100 300 Q 1100 380 800 380 Q 500 380 400 450 Q 300 520 200 520"
          stroke="url(#connectorGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            isInView
              ? { pathLength: 1, opacity: 1 }
              : { pathLength: 0, opacity: 0 }
          }
          transition={{
            duration: prefersReducedMotion ? 0 : 2,
            ease: "easeInOut",
            delay: 0.3,
          }}
        />
        <defs>
          <linearGradient id="connectorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3F742F" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#67A844" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3F742F" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
