"use client";

import { motion, useReducedMotion } from "framer-motion";

export function GarageDoorReveal({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  const panelCount = 6;

  return (
    <div className="relative overflow-hidden">
      {/* Hero content underneath */}
      {children}

      {/* Garage door overlay */}
      <motion.div
        className="absolute inset-0 z-20 flex flex-col"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1.8, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.6 }}
      >
        {/* Track rails on sides */}
        <div className="absolute top-0 left-0 bottom-0 w-3 bg-[#1a1a1a] border-r border-[#333] z-30">
          <div className="absolute top-4 left-1 w-1 h-3 rounded-full bg-[#555]" />
          <div className="absolute top-12 left-1 w-1 h-3 rounded-full bg-[#555]" />
          <div className="absolute top-20 left-1 w-1 h-3 rounded-full bg-[#555]" />
        </div>
        <div className="absolute top-0 right-0 bottom-0 w-3 bg-[#1a1a1a] border-l border-[#333] z-30">
          <div className="absolute top-4 right-1 w-1 h-3 rounded-full bg-[#555]" />
          <div className="absolute top-12 right-1 w-1 h-3 rounded-full bg-[#555]" />
          <div className="absolute top-20 right-1 w-1 h-3 rounded-full bg-[#555]" />
        </div>

        {/* Top header panel */}
        <div className="h-8 bg-[#0f0f0f] border-b border-[#333] flex items-center justify-between px-6 z-20">
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-[#333]" />
            <div className="w-2 h-2 rounded-full bg-[#333]" />
          </div>
          <span className="text-[10px] text-[#555] tracking-widest uppercase font-medium">
            Quality Garage Doors Carlisle
          </span>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-[#333]" />
            <div className="w-2 h-2 rounded-full bg-[#333]" />
          </div>
        </div>

        {/* Main door panels */}
        {Array.from({ length: panelCount }).map((_, i) => (
          <motion.div
            key={i}
            className="flex-1 relative"
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            style={{
              background: `linear-gradient(180deg, ${i % 2 === 0 ? "#2a2a2a" : "#252525"} 0%, ${i % 2 === 0 ? "#222222" : "#1e1e1e"} 100%)`,
            }}
          >
            {/* Horizontal panel gap line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-[#3a3a3a]" />
            <div className="absolute bottom-px left-0 right-0 h-px bg-[#111]" />

            {/* Panel texture / subtle ribbing */}
            <div className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px)`,
              }}
            />

            {/* Center detail on middle panels */}
            {(i === 2 || i === 3) && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-1 rounded-full bg-[#444] shadow-inner" />
              </div>
            )}
          </motion.div>
        ))}

        {/* Bottom seal */}
        <div className="h-2 bg-[#1a1a1a] border-t border-[#333]" />

        {/* Handle on the second panel from bottom */}
        <div className="absolute bottom-[calc(16.66%+8px)] left-1/2 -translate-x-1/2 z-30">
          <div className="w-16 h-3 rounded-full bg-[#3a3a3a] border border-[#555] shadow-lg flex items-center justify-center">
            <div className="w-12 h-px bg-[#555]" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
