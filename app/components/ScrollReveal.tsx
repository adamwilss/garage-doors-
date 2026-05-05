"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  once?: boolean;
  stagger?: number;
}

const PREMIUM_EASE = [0.33, 1, 0.68, 1] as const;

const directionOffset = {
  up: { y: 60, x: 0 },
  down: { y: -60, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
};

export function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.7,
  once = false,
  stagger,
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    );
  }

  // When stagger is set, use the variants system so children can
  // inherit staggerChildren timing via <motion.div variants={...}>
  if (stagger !== undefined) {
    const containerVariants: Variants = {
      hidden: {
        opacity: 0,
        ...directionOffset[direction],
        scale: 0.95,
        filter: "blur(4px)",
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
          duration,
          delay,
          ease: PREMIUM_EASE,
          staggerChildren: stagger,
        },
      },
    };

    const itemVariants: Variants = {
      hidden: {
        opacity: 0,
        y: 30,
        scale: 0.95,
        filter: "blur(4px)",
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
          duration,
          ease: PREMIUM_EASE,
        },
      },
    };

    return (
      <motion.div
        className={className}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-50px" }}
      >
        {typeof children === "object" && Array.isArray(children)
          ? children.map((child, i) => (
              <motion.div key={i} variants={itemVariants}>
                {child}
              </motion.div>
            ))
          : children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        ...directionOffset[direction],
        scale: 0.95,
        filter: "blur(4px)",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{ once, margin: "-50px" }}
      transition={{ duration, delay, ease: PREMIUM_EASE }}
    >
      {children}
    </motion.div>
  );
}