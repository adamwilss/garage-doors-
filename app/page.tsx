import { Metadata } from "next";
import {
  business,
  services,
  garageDoorTypes,
  reviews,
  faqs,
  whyChoosePoints,
} from "@/lib/content";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { ServiceCard } from "./components/ServiceCard";
import { ServiceComparison } from "./components/ServiceComparison";
import { CTASection } from "./components/CTASection";
import { ReviewCard } from "./components/ReviewCard";
import { FAQAccordion } from "./components/FAQAccordion";
import { ScrollReveal } from "./components/ScrollReveal";
import { SEOJsonLd } from "./components/SEOJsonLd";
import { AnimatedDivider } from "./components/AnimatedDivider";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Garage Doors and Automated Gates in Carlisle | Quality Garage Doors Carlisle",
  description:
    "Family run specialists supplying, installing, repairing and automating garage doors and gates across Carlisle, Cumbria, Dumfries and Galloway, Northumberland and the Scottish Borders. 25 years experience. Free quotes.",
};

export default function HomePage() {
  return (
    <>
      <SEOJsonLd type="FAQPage" />
      <SEOJsonLd type="Review" />

      <Hero
        headline="Garage Doors and Automated Gates in Carlisle"
        subheadline="Family run specialists supplying, installing, repairing and automating garage doors and gates across Carlisle, Cumbria, Dumfries and Galloway, Northumberland and the Scottish Borders."
        ctas={[
          { label: "Get a free quote", href: "/contact", variant: "primary" },
          { label: `Call ${business.phone}`, href: business.phoneHref, variant: "secondary" },
          { label: "WhatsApp", href: business.whatsAppHref, variant: "outline" },
        ]}
        showTrustBar={true}
        trustPoints={business.trustPoints}
      />

      <TrustBar />
      <AnimatedDivider />

      {/* Services */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Our Services
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Everything from supply and installation to repairs, automation and gates.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* Why Choose */}
      <section className="py-16 lg:py-20 bg-slate-50 dark:bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Why Choose Quality Garage Doors Carlisle
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                A family business with 25 years of experience and a reputation for quality.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoosePoints.map((point, i) => (
              <ScrollReveal key={point.title} delay={i * 0.1}>
                <div className="bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2a2a2a] rounded-xl p-6 h-full">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{point.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{point.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* Popular Types */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Popular Garage Door Types
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                We supply and install a wide range of garage doors to suit every property and budget.
              </p>
            </div>
          </ScrollReveal>
          <ServiceComparison />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {garageDoorTypes.map((type, i) => (
              <ScrollReveal key={type.name} delay={i * 0.1}>
                <div className="bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2a2a2a] rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{type.name}</h3>
                  <p className="text-sm font-medium text-accent mb-3">{type.tagline}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{type.description}</p>
                  <ul className="space-y-1">
                    {type.features.map((f) => (
                      <li key={f} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                        <span className="text-accent mt-0.5">&#10003;</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/garage-doors"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-600 transition-colors"
            >
              Explore all garage door options
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* Gates */}
      <section className="py-16 lg:py-20 bg-slate-50 dark:bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                  Automated &amp; Manual Gates
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
                  Design, manufacture and installation of residential and commercial automated and
                  manual gate systems. Sliding, swing and cantilever gates in steel, aluminium and
                  timber for security, privacy, convenience and kerb appeal.
                </p>
                <Link
                  href="/gates"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-600 text-white rounded-md font-semibold text-base transition-colors"
                >
                  Explore gates
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2a2a2a] rounded-xl p-6">
                <ul className="space-y-3">
                  {[
                    "Sliding gates",
                    "Swing gates",
                    "Cantilever gates",
                    "Steel gates",
                    "Aluminium gates",
                    "Timber gates",
                    "Residential gates",
                    "Commercial gates",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                      <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* Recent Projects / Case Studies */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Recent Projects
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                A selection of garage door and gate installations across our service area.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Case Study 1",
                location: "Carlisle, Cumbria",
                service: "Garage Door Installation",
                desc: "Insulated sectional garage door installed with automation and remote control.",
              },
              {
                title: "Case Study 2",
                location: "Penrith, Cumbria",
                service: "Garage Door Automation",
                desc: "Existing manual door converted to electric operation with keypad entry.",
              },
              {
                title: "Case Study 3",
                location: "Dumfries and Galloway",
                service: "Automated Gate Installation",
                desc: "Residential sliding gate with automation, safety photocells and access control.",
              },
            ].map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 0.15}>
                <Link
                  href="/case-studies"
                  className="group block bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2a2a2a] rounded-xl overflow-hidden hover:shadow-lg dark:hover:shadow-accent/5 transition-all"
                >
                  <div className="aspect-video bg-slate-200 dark:bg-[#222] relative">
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-600 text-sm">
                      Project image
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-xs font-medium text-accent mb-1">{project.service}</div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-500 mb-2">{project.location}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{project.desc}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-600 transition-colors"
            >
              View all case studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* Reviews */}
      <section className="py-16 lg:py-20 bg-slate-50 dark:bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                What Our Customers Say
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Excellent rating based on {reviews.length} reviews.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {reviews.map((review, i) => (
              <ReviewCard key={i} review={review} index={i} />
            ))}
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* Areas Covered */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Areas We Cover
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Based in Carlisle, we travel across the region to install and repair garage doors and gates.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Carlisle",
                "Cumbria",
                "Dumfries and Galloway",
                "Penrith",
                "Workington",
                "Whitehaven",
                "Northumberland",
                "Scottish Borders",
              ].map((area) => (
                <Link
                  key={area}
                  href="/areas-covered"
                  className="px-4 py-2 bg-slate-100 dark:bg-[#1a1a1a] hover:bg-accent-light dark:hover:bg-accent/10 text-slate-700 dark:text-slate-300 hover:text-accent-700 dark:hover:text-accent rounded-full text-sm font-medium transition-colors border border-slate-200 dark:border-[#2a2a2a]"
                >
                  {area}
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <AnimatedDivider />

      {/* FAQs */}
      <section className="py-16 lg:py-20 bg-slate-50 dark:bg-[#0f0f0f]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Common questions about our garage door and gate services.
              </p>
            </div>
          </ScrollReveal>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
