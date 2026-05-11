import { Metadata } from "next";
import { brochures } from "@/lib/content";
import { Hero } from "../components/Hero";
import { BrochureCard } from "../components/BrochureCard";
import { ScrollReveal } from "../components/ScrollReveal";
import { AnimatedDivider } from "../components/AnimatedDivider";

export const metadata: Metadata = {
  title: "Brochures | Alutech and Hormann Garage Doors | Quality Garage Doors Carlisle",
  description:
    "Download product brochures for Alutech sectional garage doors, Hormann ranges and garage door automation guides.",
};

export default function BrochuresPage() {
  return (
    <>
      <Hero
        variant="content"
        headline="Product Brochures"
        subheadline="Download brochures to explore garage door styles, colours, finishes and automation options before your free survey."
      />

      <AnimatedDivider />

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 whitespace-nowrap">
                Explore Our Range
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Download brochures to explore garage door styles, colours, finishes and automation options before your free survey.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brochures.map((brochure, i) => (
              <BrochureCard key={brochure.id} brochure={brochure} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
