"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function OrbitalRings() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (!isDesktop) return null;

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] pointer-events-none">
      <motion.div className="absolute inset-0 rounded-full border border-accent/10"
        style={{ willChange: "transform" }}
        animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }} />
      <motion.div className="absolute inset-8 rounded-full border border-accent/15"
        style={{ willChange: "transform" }}
        animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 22, ease: "linear" }} />
      <motion.div className="absolute inset-20 rounded-full border border-accent/20"
        style={{ willChange: "transform" }}
        animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 16, ease: "linear" }} />
      <motion.div className="absolute inset-32 rounded-full border border-accent/25"
        style={{ willChange: "transform" }}
        animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 12, ease: "linear" }}>
        <motion.div className="absolute w-3 h-3 bg-accent/40 rotate-45 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 3 }} />
      </motion.div>
      <motion.div className="absolute inset-44 rounded-full bg-accent/5 blur-xl"
        style={{ willChange: "transform, opacity" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} />
    </div>
  );
}