import { Metadata } from "next";
import { areas, business } from "@/lib/content";
import { Hero } from "../components/Hero";
import { AreaLinks } from "../components/AreaLinks";
import { CTASection } from "../components/CTASection";
import { ScrollReveal } from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "Areas Covered | Garage Doors Carlisle, Cumbria, Borders | Quality Garage Doors Carlisle",
  description:
    "Garage door and gate services across Carlisle, Cumbria, Dumfries and Galloway, Penrith, Workington, Whitehaven, Northumberland and the Scottish Borders. Free quotations.",
};

export default function AreasCoveredPage() {
  return (
    <>
      <Hero
        variant="content"
        headline="Areas We Cover"
        subheadline="Based in Carlisle, we travel across the region to supply, install, repair and automate garage doors and gates."
      />

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 whitespace-nowrap">
                Our Service Area
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Based in {business.address}, we travel across the region to supply, install, repair
                and automate garage doors and gates. If your area is not listed, please call us.
                We regularly work outside these locations for larger projects.
              </p>
            </div>
          </ScrollReveal>

          <AreaLinks areas={areas} />
        </div>
      </section>

      <CTASection
        headline="Not Sure If We Cover Your Area?"
        subheadline={`Call us on ${business.phone} or send a WhatsApp. We are happy to confirm and arrange a free visit.`}
      />
    </>
  );
}
