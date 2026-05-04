"use client";

import { useState } from "react";
import { galleryItems, galleryCategories } from "@/lib/content";
import { GalleryGrid } from "../components/GalleryGrid";
import { GalleryFilter } from "../components/GalleryFilter";
import { ScrollReveal } from "../components/ScrollReveal";

export function GalleryContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <>
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Gallery
          </h1>
          <p className="text-slate-600 text-lg">
            A selection of garage door and gate installations across our service area.
          </p>
        </div>
      </ScrollReveal>

      <GalleryFilter
        categories={galleryCategories}
        active={activeCategory}
        onChange={setActiveCategory}
      />

      <GalleryGrid items={galleryItems} activeCategory={activeCategory} />
    </>
  );
}
