"use client";

import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: string;
  location: string;
  service: string;
  caption: string;
}

export function GalleryGrid({
  items,
  activeCategory,
}: {
  items: GalleryItem[];
  activeCategory: string;
}) {
  const filtered =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.map((item, i) => (
        <ScrollReveal key={item.id} delay={i * 0.08}>
          <div className="group bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2a2a2a] rounded-xl overflow-hidden hover:shadow-lg dark:hover:shadow-accent/5 transition-all">
            <div className="relative aspect-[4/3] bg-slate-200 dark:bg-[#222]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="inline-block px-2 py-1 bg-slate-100 dark:bg-[#222] text-slate-700 dark:text-slate-300 text-xs font-medium rounded-md">
                  {item.category}
                </span>
                <span className="inline-block px-2 py-1 bg-accent-light dark:bg-accent/10 text-accent-700 dark:text-accent text-xs font-medium rounded-md">
                  {item.location}
                </span>
              </div>
              <p className="text-sm font-medium text-slate-900 dark:text-white">{item.caption}</p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">Service: {item.service}</p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
