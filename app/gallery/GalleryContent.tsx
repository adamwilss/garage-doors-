"use client";

import { useState } from "react";
import { galleryItems, galleryCategories } from "@/lib/content";
import { GalleryGrid } from "../components/GalleryGrid";
import { GalleryFilter } from "../components/GalleryFilter";
import { AssembleText } from "../components/AssembleText";
import { motion, AnimatePresence } from "framer-motion";
import { Camera } from "lucide-react";

export function GalleryContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCount =
    activeCategory === "All"
      ? galleryItems.length
      : galleryItems.filter((item) => item.category === activeCategory).length;

  return (
    <>
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent-light dark:bg-accent/10 text-accent mb-6">
          <Camera className="w-7 h-7" />
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 whitespace-nowrap">
          <AssembleText text="Installation Gallery" />
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg">
          A selection of garage door and gate installations across our service area.
        </p>
      </div>

      <GalleryFilter
        categories={galleryCategories}
        active={activeCategory}
        onChange={setActiveCategory}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <GalleryGrid items={galleryItems} activeCategory={activeCategory} />
        </motion.div>
      </AnimatePresence>

      <div className="text-center mt-10 text-sm text-slate-500 dark:text-slate-500">
        Showing {filteredCount} {filteredCount === 1 ? "project" : "projects"}
        {activeCategory !== "All" && ` in ${activeCategory}`}
      </div>
    </>
  );
}
