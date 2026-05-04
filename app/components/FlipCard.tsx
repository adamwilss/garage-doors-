"use client";

import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

interface FlipCardProps {
  front: ReactNode;
  back: ReactNode;
  index?: number;
  className?: string;
}

export function FlipCard({ front, back, index = 0, className = "" }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <ScrollReveal delay={index * 0.1}>
      <div
        className={`cursor-pointer ${className}`}
        onClick={() => setFlipped(!flipped)}
        style={{ perspective: 1200 }}
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full"
          style={{ transformStyle: "preserve-3d", minHeight: "280px" }}
        >
          <div
            className="absolute inset-0"
            style={{ backfaceVisibility: "hidden" }}
          >
            {front}
          </div>
          <div
            className="absolute inset-0"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            {back}
          </div>
        </motion.div>
      </div>
    </ScrollReveal>
  );
}
