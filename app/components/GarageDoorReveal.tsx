"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";

export function GarageDoorReveal({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);

  // Auto-open the door shortly after the page loads
  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = setTimeout(() => setIsOpen(true), 1200);
    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);

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
        initial={{ y: "0%" }}
        animate={{ y: isOpen ? "-100%" : "0%" }}
        transition={{ duration: 1.6, ease: [0.43, 0.13, 0.23, 0.96] }}
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

        {/* Logo centered on door */}
        <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
          <div
            className="relative w-52 h-28 sm:w-64 sm:h-32"
            style={{
              filter: "brightness(1.35) drop-shadow(0 4px 12px rgba(0,0,0,0.8))",
            }}
          >
            <div className="absolute inset-0 bg-[#252525]" />
            <Image
              src="/images/logo.png"
              alt="Quality Garage Doors Carlisle"
              fill
              className="object-contain relative z-10"
              style={{ mixBlendMode: "multiply" }}
              priority
            />
          </div>
        </div>

        {/* Handle */}
        <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 z-30">
          <div className="w-14 h-3 rounded-full bg-[#444] border border-[#555] shadow-lg">
            <div className="w-full h-px bg-[#555] mt-1.5" />
          </div>
        </div>
      </motion.div>

      {/* Premium remote control — positioned on right side of hero */}
      <div className="absolute top-1/2 right-4 sm:right-8 lg:right-12 -translate-y-1/2 z-30">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 3, duration: 0.6, ease: "easeOut" }}
          className="hidden sm:flex flex-col items-center"
        >
          {/* Remote body */}
          <div className="w-16 h-32 rounded-[2rem] bg-gradient-to-b from-[#3a3a3a] via-[#2a2a2a] to-[#1a1a1a] shadow-[0_8px_32px_rgba(0,0,0,0.6),0_2px_4px_rgba(255,255,255,0.05)_inset] flex flex-col items-center py-5 px-3 relative ring-1 ring-white/10">
            {/* Subtle metallic rim */}
            <div className="absolute inset-0 rounded-[2rem] border border-white/5 pointer-events-none" />

            {/* Status LED */}
            <div
              className={`w-1.5 h-1.5 rounded-full mb-4 transition-all duration-500 ${
                isOpen
                  ? "bg-accent shadow-[0_0_10px_rgba(103,168,68,0.9)]"
                  : "bg-[#555]"
              }`}
            />

            {/* Main button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="w-11 h-11 rounded-full bg-gradient-to-b from-[#4a8a33] to-[#28591F] hover:from-[#5a9a43] hover:to-[#38692F] active:scale-90 active:shadow-inner transition-all shadow-[0_4px_12px_rgba(63,116,47,0.4),0_1px_2px_rgba(255,255,255,0.1)_inset] flex items-center justify-center pointer-events-auto ring-1 ring-white/10"
              aria-label={isOpen ? "Close garage door" : "Open garage door"}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="down"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4 text-white/90" strokeWidth={2.5} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="up"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronUp className="w-4 h-4 text-white/90" strokeWidth={2.5} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Subtle brand line at bottom */}
            <div className="mt-auto pt-3 w-6 h-px bg-white/10 rounded-full" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
