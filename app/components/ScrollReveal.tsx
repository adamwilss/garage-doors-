"use client";

import { motion, useReducedMotion, useScroll, useTransform, Variants } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  once?: boolean;
  stagger?: number;
}

/** Premium cubic bezier for smooth, elegant motion */
const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;

/** Dramatic offset values for a more premium reveal */
const directionOffset = {
  up: { y: 80, x: 0 },
  down: { y: -80, x: 0 },
  left: { x: 60, y: 0 },
  right: { x: -60, y: 0 },
  none: { x: 0, y: 0 },
};

export function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.8,
  once = true,
  stagger,
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    );
  }

  if (stagger !== undefined) {
    const containerVariants: Variants = {
      hidden: {
        opacity: 0,
        ...directionOffset[direction],
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
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
        y: 40,
        scale: 0.96,
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.6,
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
        viewport={{ once, margin: "-80px" }}
        style={{ willChange: "transform, opacity" }}
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
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration, delay, ease: PREMIUM_EASE }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

/** Parallax wrapper — children move at a different rate than scroll */
interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number; // 0 = static, 1 = scroll speed, <0 = slower (parallax), >1 = faster
}

export function Parallax({ children, className = "", speed = -0.3 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150 * speed]);

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}

/** Text reveal animation that animates each line/paragraph separately */
interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function TextReveal({ children, className = "", delay = 0 }: TextRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: PREMIUM_EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Scale reveal — starts smaller and scales up as it enters view */
interface ScaleRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ScaleReveal({ children, className = "", delay = 0 }: ScaleRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: PREMIUM_EASE }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

/** Horizontal scroll reveal — slides in from left or right */
interface SlideRevealProps {
  children: ReactNode;
  className?: string;
  from?: "left" | "right";
  delay?: number;
}

export function SlideReveal({ children, className = "", from = "left", delay = 0 }: SlideRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const xOffset = from === "left" ? -80 : 80;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: xOffset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: PREMIUM_EASE }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}