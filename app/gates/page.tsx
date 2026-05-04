import { Metadata } from "next";
import { gateTypes, business } from "@/lib/content";
import { Hero } from "../components/Hero";
import { CTASection } from "../components/CTASection";
import { ScrollReveal } from "../components/ScrollReveal";
import { SEOJsonLd } from "../components/SEOJsonLd";
import { Fence, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Automated Gates Carlisle | Swing, Sliding &amp; Cantilever | Quality Garage Doors Carlisle",
  description:
    "Automated and manual gates for residential and commercial properties in Carlisle, Cumbria, Northumberland and the Scottish Borders. Steel, aluminium and timber. Design, manufacture and installation.",
};

export default function GatesPage() {
  return (
    <>
      <SEOJsonLd
        type="Service"
        serviceName="Automated and Manual Gate Installation"
        serviceDescription="Design, manufacture and installation of residential and commercial automated and manual gate systems in Carlisle, Cumbria, Northumberland and the Scottish Borders."
      />

      <Hero
        headline="Automated and Manual Gates in Carlisle"
        subheadline="Design, manufacture and installation of residential and commercial automated and manual gate systems across Carlisle, Cumbria, Northumberland and the Scottish Borders."
      />

      {/* Gate types */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Gate Types and Materials
              </h2>
              <p className="text-slate-600 text-lg">
                We design, manufacture and install gates to suit your property, security needs and budget. Choose from a wide range of styles, materials and automation options.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gateTypes.map((gate, i) => (
              <ScrollReveal key={gate.name} delay={i * 0.1}>
                <div className="bg-white border border-slate-200 rounded-xl p-6 h-full">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent-light text-accent mb-4">
                    <Fence className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{gate.name}</h3>
                  <p className="text-sm text-slate-600">{gate.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why gates */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                  Security, Privacy and Kerb Appeal
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-4">
                  A well designed gate does more than secure your property. It creates a clear boundary, improves privacy and adds significant kerb appeal.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-4">
                  For residential properties, automated gates offer the convenience of remote entry and the reassurance of controlled access. For commercial sites, they provide a professional first impression and robust security.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  We work across Carlisle, Cumbria, Northumberland and the Scottish Borders, tailoring every gate system to the specific site conditions and your requirements.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="space-y-4">
                {[
                  {
                    title: "Residential gates",
                    desc: "Private homes, driveways and estates across the region.",
                  },
                  {
                    title: "Commercial gates",
                    desc: "Offices, industrial units, car parks and secure facilities.",
                  },
                  {
                    title: "Automation options",
                    desc: "Remote controls, keypads, intercoms, loop detectors and safety edges.",
                  },
                  {
                    title: "Materials",
                    desc: "Steel for strength, aluminium for low maintenance, timber for natural appeal.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white border border-slate-200 rounded-xl p-5">
                    <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Areas We Cover for Gates
              </h2>
              <p className="text-slate-600">
                We travel across the region for gate design, manufacture and installation projects.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Carlisle",
                "Cumbria",
                "Northumberland",
                "Scottish Borders",
                "Dumfries and Galloway",
              ].map((area) => (
                <span
                  key={area}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        headline="Get a Gate Quote"
        subheadline="Call or WhatsApp to arrange a free site visit and quotation for your new gate system."
      />
    </>
  );
}
