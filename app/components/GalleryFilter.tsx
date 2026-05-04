"use client";

import { motion } from "framer-motion";

export function GalleryFilter({
  categories,
  active,
  onChange,
}: {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3 mb-10 justify-center">
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => onChange(cat)}
          className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
            active === cat
              ? "text-white"
              : "bg-slate-100 dark:bg-[#1a1a1a] text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#222] border border-slate-200 dark:border-[#2a2a2a]"
          }`}
        >
          {active === cat && (
            <motion.div
              layoutId="galleryFilter"
              className="absolute inset-0 bg-accent rounded-full"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{cat}</span>
        </button>
      ))}
    </div>
  );
}
