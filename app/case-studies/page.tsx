import { Metadata } from "next";
import { caseStudies } from "@/lib/content";
import { Hero } from "../components/Hero";
import { CaseStudyCard } from "../components/CaseStudyCard";
import { ScrollReveal } from "../components/ScrollReveal";
import { AnimatedDivider } from "../components/AnimatedDivider";

export const metadata: Metadata = {
  title: "Case Studies | Garage Door and Gate Projects | Quality Garage Doors Carlisle",
  description:
    "Read about recent garage door and gate installation projects across Carlisle, Cumbria and the surrounding region. Real projects, real results.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Hero
        variant="content"
        headline="Case Studies"
        subheadline="Real projects, real outcomes. These case studies show how we approach garage door and gate installations across the region."
      />

      <AnimatedDivider />

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Recent Projects
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                See how we have helped homeowners and businesses across Carlisle and the surrounding region.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-10">
            {caseStudies.map((cs, i) => (
              <CaseStudyCard key={cs.id} caseStudy={cs} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
