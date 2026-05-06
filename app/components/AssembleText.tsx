"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useEffect, useState, type ReactNode } from "react";

export function AssembleText({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  if (prefersReducedMotion) {
    return (
      <span ref={ref} className={`inline-block ${className}`}>
        {text}
      </span>
    );
  }

  // On mobile, use a single fade-in instead of per-letter animation
  if (isMobile) {
    return (
      <motion.span
        ref={ref}
        className={`inline-block ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
        style={{ willChange: "transform, opacity" }}
      >
        {text}
      </motion.span>
    );
  }

  // Desktop: per-letter animation (without Math.random or rotateX)
  const letters = text.split("");

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.8,
          }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.03,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ willChange: "transform, opacity" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
}