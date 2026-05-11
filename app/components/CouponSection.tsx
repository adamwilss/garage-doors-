"use client";

import { coupons } from "@/lib/content";
import { CouponCard } from "./CouponCard";
import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";
import { Tag } from "lucide-react";

export function CouponSection() {
  return (
    <section className="py-16 lg:py-24 bg-slate-100 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #123C7C 0, #123C7C 1px, transparent 0, transparent 50%)`,
          backgroundSize: "20px 20px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-urgent/10 text-urgent rounded-full text-xs font-bold uppercase tracking-wider mb-4"
            >
              <Tag className="w-3.5 h-3.5" />
              Limited Time Offers
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 whitespace-nowrap font-[var(--font-oswald)] uppercase tracking-tight">
              Current Offers
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Mention these coupons when you call. Save on repairs, installation and new doors.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger={0.12}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {coupons.map((coupon) => (
              <CouponCard key={coupon.id} {...coupon} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
