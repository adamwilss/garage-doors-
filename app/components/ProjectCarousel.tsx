"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  title: string;
  location: string;
  service: string;
  desc: string;
  image?: string;
}

interface ProjectCarouselProps {
  projects: Project[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
    }
  }, []);

  const handleDragEnd = (_: any, info: { offset: { x: number }; velocity: { x: number } }) => {
    const current = x.get();
    const newX = Math.max(-width, Math.min(0, current + info.offset.x + info.velocity.x * 0.2));
    x.set(newX);
  };

  const scroll = (direction: "left" | "right") => {
    const current = x.get();
    const cardWidth = 380;
    const newX =
      direction === "left"
        ? Math.min(0, current + cardWidth)
        : Math.max(-width, current - cardWidth);
    x.set(newX);
  };

  return (
    <div className="relative">
      {/* Navigation buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-10 pointer-events-none flex justify-between px-2">
        <button
          type="button"
          onClick={() => scroll("left")}
          className="pointer-events-auto w-10 h-10 rounded-full bg-white/90 dark:bg-[#1a1a1a]/90 backdrop-blur-sm border border-slate-200 dark:border-[#2a2a2a] flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-accent hover:text-white hover:border-accent transition-colors shadow-lg"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => scroll("right")}
          className="pointer-events-auto w-10 h-10 rounded-full bg-white/90 dark:bg-[#1a1a1a]/90 backdrop-blur-sm border border-slate-200 dark:border-[#2a2a2a] flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-accent hover:text-white hover:border-accent transition-colors shadow-lg"
          aria-label="Next project"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Carousel */}
      <motion.div
        ref={containerRef}
        className="overflow-hidden cursor-grab active:cursor-grabbing"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          dragElastic={0.1}
          dragMomentum={false}
          onDragEnd={handleDragEnd}
          style={{ x: springX }}
          className="flex gap-6"
        >
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </motion.div>
      </motion.div>

      {/* Progress bar */}
      <ProgressBar x={springX} maxWidth={width} />
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      className="min-w-[320px] sm:min-w-[380px] select-none"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href="/case-studies" className="group block">
        <div className="relative aspect-video bg-slate-200 dark:bg-[#222] rounded-xl overflow-hidden mb-4">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 640px) 320px, 380px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-slate-500 dark:text-slate-600 text-sm">
              Project image
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div>
          <div className="text-xs font-medium text-accent mb-1">{project.service}</div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-500 mb-2">{project.location}</p>
          <p className="text-sm text-slate-600 dark:text-slate-400">{project.desc}</p>
        </div>
      </Link>
    </motion.div>
  );
}

function ProgressBar({ x, maxWidth }: { x: MotionValue; maxWidth: number }) {
  const progress = useTransform(x, [0, -maxWidth], [0, 100]);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    return progress.on("change", function(v) {
      setWidth(Math.max(0, Math.min(100, v)));
    });
  }, [progress]);

  return (
    <div className="mt-8 mx-auto max-w-xs">
      <div className="h-1 bg-slate-200 dark:bg-[#2a2a2a] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-accent rounded-full"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
