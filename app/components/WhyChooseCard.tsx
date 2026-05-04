"use client";

import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface WhyChooseCardProps {
  number: string;
  title: string;
  description: string;
  index: number;
}

export function WhyChooseCard({ number, title, description, index }: WhyChooseCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative p-8 rounded-2xl border transition-all duration-500 ${
          isHovered
            ? "border-accent/40 bg-white dark:bg-[#1a1a1a] shadow-xl shadow-accent/5"
            : "border-slate-200 dark:border-[#2a2a2a] bg-white dark:bg-[#1a1a1a]"
        }`}
      >
        {/* Animated corner accent */}
        <div
          className={`absolute top-0 right-0 w-20 h-20 transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-accent/20 to-transparent rounded-tr-2xl" />
        </div>

        {/* Number circle */}
        <div className="relative mb-6">
          <motion.div
            className="relative w-20 h-20 mx-auto md:mx-0"
            animate={
              prefersReducedMotion
                ? {}
                : {
                    scale: isHovered ? 1.1 : 1,
                    rotate: isHovered ? 5 : 0,
                  }
            }
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Glow ring */}
            <div
              className={`absolute inset-0 rounded-full transition-opacity duration-500 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
              style={{
                background: "radial-gradient(circle, rgba(63,116,47,0.3) 0%, transparent 70%)",
              }}
            />
            <div className="absolute inset-0 rounded-full bg-accent/10 dark:bg-accent/20 flex items-center justify-center border-2 border-accent/30">
              <span className="text-3xl font-extrabold text-accent">{number}</span>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 text-center md:text-left">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-center md:text-left">
          {description}
        </p>

        {/* Bottom accent line */}
        <motion.div
          className="mt-6 h-px bg-gradient-to-r from-accent/50 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </motion.div>
  );
}
