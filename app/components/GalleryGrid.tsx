"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Maximize2 } from "lucide-react";
import { GalleryLightbox } from "./GalleryLightbox";

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

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  };

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex === 0 ? filtered.length - 1 : lightboxIndex - 1);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
        {filtered.map((item, i) => (
          <GalleryCard
            key={item.id}
            item={item}
            index={i}
            onClick={() => openLightbox(i)}
          />
        ))}
      </div>

      {lightboxIndex !== null && (
        <GalleryLightbox
          items={filtered}
          initialIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </>
  );
}

function GalleryCard({
  item,
  index,
  onClick,
}: {
  item: GalleryItem;
  index: number;
  onClick: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: (index % 3) * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative rounded-xl overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] bg-slate-200 dark:bg-[#222]">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
        />

        {/* Expand icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white group-hover:scale-110 transition-transform">
            <Maximize2 className="w-5 h-5" />
          </div>
        </div>

        {/* Bottom info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-white font-semibold text-sm mb-1 truncate">{item.caption}</p>
          <div className="flex items-center gap-3 text-white/70 text-xs">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {item.location}
            </span>
            <span className="px-2 py-0.5 bg-accent/80 rounded-full text-white text-[10px] font-medium">
              {item.service}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
