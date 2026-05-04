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
          <div className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all">
            <div className="relative aspect-[4/3] bg-slate-200">
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
                <span className="inline-block px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-md">
                  {item.category}
                </span>
                <span className="inline-block px-2 py-1 bg-accent-light text-accent-700 text-xs font-medium rounded-md">
                  {item.location}
                </span>
              </div>
              <p className="text-sm font-medium text-slate-900">{item.caption}</p>
              <p className="text-xs text-slate-500 mt-1">Service: {item.service}</p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
