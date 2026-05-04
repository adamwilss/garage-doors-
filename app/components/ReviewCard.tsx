"use client";

import { Star } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { TiltCard } from "./TiltCard";

interface Review {
  rating: number;
  text: string;
  author: string;
}

export function ReviewCard({ review, index = 0 }: { review: Review; index?: number }) {
  return (
    <ScrollReveal delay={index * 0.15} direction={index % 2 === 0 ? "left" : "right"}>
      <TiltCard className="h-full">
        <div className="relative p-6 h-full bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2a2a2a] rounded-xl">
          <div className="absolute -top-2 -left-2 text-6xl text-accent/20 font-serif leading-none select-none">
            &ldquo;
          </div>
          <div className="flex items-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < review.rating ? "text-accent fill-accent" : "text-slate-300 dark:text-[#333]"
                }`}
              />
            ))}
          </div>
          <blockquote className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4 relative z-10">
            {review.text}
          </blockquote>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">— {review.author}</p>
        </div>
      </TiltCard>
    </ScrollReveal>
  );
}
