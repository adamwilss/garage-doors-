import { Metadata } from "next";
import { garageDoorTypes, alutechContent, business } from "@/lib/content";
import { Hero } from "../components/Hero";
import { ServiceComparison } from "../components/ServiceComparison";
import { CTASection } from "../components/CTASection";
import { ScrollReveal } from "../components/ScrollReveal";
import { SEOJsonLd } from "../components/SEOJsonLd";
import { AnimatedDivider } from "../components/AnimatedDivider";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Garage Doors Carlisle | Supply, Installation & Repair | Quality Garage Doors Carlisle",
  description:
    "Sectional, roller shutter, up and over, insulated, manual and automated garage doors from Alutech and Hormann. Supply and installation across Carlisle, Cumbria and the Scottish Borders.",
};

export default function GarageDoorsPage() {
  return (
    <>
      <SEOJsonLd
        type="Service"
        serviceName="Garage Door Supply and Installation"
        serviceDescription="Supply and installation of sectional, roller shutter, up and over, insulated, manual and automated garage doors from Alutech and Hormann."
      />

      <Hero
        variant="garage-doors"
        headline="Garage Doors in Carlisle"
        subheadline="Sectional, roller shutter, up and over, insulated, manual and electric garage doors supplied and installed across Carlisle, Cumbria and the surrounding region."
      />

      <AnimatedDivider />

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Find the Right Garage Door
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                We supply and install a full range of garage door styles for residential and commercial properties. Compare the options below or contact us for a free survey and quotation.
              </p>
            </div>
          </ScrollReveal>
          <ServiceComparison />
        </div>
      </section>

      <AnimatedDivider />

      {/* Types detail */}
      <section className="py-16 lg:py-20 bg-slate-100 dark:bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {garageDoorTypes.map((type, i) => (
              <ScrollReveal key={type.name} delay={i * 0.1}>
                <div className="bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2a2a2a] rounded-xl p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{type.name}</h3>
                  <p className="text-sm font-medium text-accent mb-4">{type.tagline}</p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* Alutech */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Alutech Sectional Garage Doors
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                {alutechContent.intro}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <ScrollReveal delay={0.1}>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Panel Styles</h3>
                <ul className="space-y-2">
                  {alutechContent.panelStyles.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Finishes & Colours</h3>
                <ul className="space-y-2">
                  {alutechContent.finishes.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Options & Accessories</h3>
                <ul className="space-y-2">
                  {alutechContent.options.map((o) => (
                    <li key={o} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* Automation systems */}
      <section className="py-16 lg:py-20 bg-slate-100 dark:bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Alutech Automation Systems
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal delay={0.1}>
              <div className="bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2a2a2a] rounded-xl p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Alutech Levigato</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{alutechContent.levigato}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2a2a2a] rounded-xl p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Alutech Avanti</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{alutechContent.avanti}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <AnimatedDivider />

      <CTASection
        headline="Ready for a New Garage Door?"
        subheadline="Book a free survey and quotation across Carlisle, Cumbria and the surrounding region."
      />
    </>
  );
}
