"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";

export function GarageDoorReveal({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  const panelCount = 5;

  return (
    <div className="relative overflow-hidden">
      {/* Hero content underneath */}
      {children}

      {/* Garage door overlay */}
      <motion.div
        className="absolute inset-0 z-20 flex flex-col"
        initial={{ y: 0 }}
        animate={{ y: isOpen ? "-100%" : "0%" }}
        transition={{ duration: 1.4, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        {/* Frame top */}
        <div className="h-2 bg-[#111] shrink-0" />

        {/* Side tracks */}
        <div className="absolute top-0 left-0 bottom-0 w-2 bg-[#2a2a2a] z-30" />
        <div className="absolute top-0 right-0 bottom-0 w-2 bg-[#2a2a2a] z-30" />

        {/* Main door panels */}
        {Array.from({ length: panelCount }).map((_, i) => (
          <div
            key={i}
            className="flex-1 relative"
            style={{
              background: `linear-gradient(180deg, #252525 0%, #1c1c1c 100%)`,
            }}
          >
            {/* Panel horizontal seam */}
            <div className="absolute bottom-0 left-2 right-2 h-px bg-[#3a3a3a]" />
            <div className="absolute bottom-px left-2 right-2 h-px bg-[#111]" />

            {/* Subtle ribbing */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 48px, rgba(255,255,255,0.6) 48px, rgba(255,255,255,0.6) 49px)`,
              }}
            />
          </div>
        ))}

        {/* Brand accent line at bottom of door */}
        <div className="h-1 bg-accent shrink-0" />

        {/* Handle */}
        <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 z-30">
          <div className="w-14 h-3 rounded-full bg-[#444] border border-[#555] shadow-lg">
            <div className="w-full h-px bg-[#555] mt-1.5" />
          </div>
        </div>
      </motion.div>

      {/* Remote control — positioned on right side of hero */}
      <div className="absolute top-1/2 right-4 sm:right-8 lg:right-12 -translate-y-1/2 z-30">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.2, duration: 0.6, ease: "easeOut" }}
          className="hidden sm:flex flex-col items-center gap-3"
        >
          {/* Remote body */}
          <div className="w-20 h-36 rounded-2xl bg-[#1a1a1a] border border-[#333] shadow-2xl flex flex-col items-center justify-between py-4 px-3 relative">
            {/* LED indicator */}
            <div className="flex items-center gap-1.5">
              <div
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                  isOpen ? "bg-accent shadow-[0_0_6px_rgba(63,116,47,0.8)]" : "bg-[#444]"
                }`}
              />
              <span className="text-[9px] text-[#666] uppercase tracking-wider font-medium">
                {isOpen ? "OPEN" : "CLOSED"}
              </span>
            </div>

            {/* Main button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="w-12 h-12 rounded-full bg-accent hover:bg-accent-600 active:scale-95 transition-all shadow-lg flex items-center justify-center"
              aria-label={isOpen ? "Close garage door" : "Open garage door"}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="down"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                  >
                    <ChevronDown className="w-5 h-5 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="up"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                  >
                    <ChevronUp className="w-5 h-5 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Small secondary button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="w-8 h-5 rounded-md bg-[#2a2a2a] hover:bg-[#333] active:bg-[#444] transition-colors border border-[#333]"
              aria-label="Toggle garage door"
            >
              <div className="w-full h-px bg-[#444] mt-2" />
            </button>
          </div>

          <span className="text-[10px] text-white/50 uppercase tracking-widest">
            Remote
          </span>
        </motion.div>
      </div>
    </div>
  );
}
