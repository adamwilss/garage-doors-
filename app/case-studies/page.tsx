import { Metadata } from "next";
import { caseStudies } from "@/lib/content";
import { CaseStudyCard } from "../components/CaseStudyCard";
import { ScrollReveal } from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "Case Studies | Garage Door and Gate Projects | Quality Garage Doors Carlisle",
  description:
    "Read about recent garage door and gate installation projects across Carlisle, Cumbria and the surrounding region. Real projects, real results.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Case Studies
              </h1>
              <p className="text-slate-600 text-lg">
                Real projects, real outcomes. These case studies show how we approach garage door and gate installations across the region.
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
