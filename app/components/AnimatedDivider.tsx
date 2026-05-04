"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function AnimatedDivider({ className = "" }: { className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  return (
    <div ref={ref} className={`w-full flex items-center justify-center py-8 ${className}`}>
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent w-full max-w-xs"
        style={{ transformOrigin: "center" }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      />
    </div>
  );
}
