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
import { AssembleText } from "./components/AssembleText";
import { ProjectCarousel } from "./components/ProjectCarousel";
import { FlipCard } from "./components/FlipCard";
import { OrbitalRings } from "./components/OrbitalRings";
import { WhyChooseCard } from "./components/WhyChooseCard";
import Link from "next/link";
import { ArrowRight, Star, DoorOpen, Shield, Thermometer, Zap } from "lucide-react";

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
          { label: "WhatsApp", href: business.whatsAppHref, variant: "outline" },
        ]}
        showTrustBar={true}
        trustPoints={business.trustPoints}
      />

      <TrustBar />
      <AnimatedDivider />

      {/* Services */}
      <section className="py-16 lg:py-20 relative overflow-hidden">
        <OrbitalRings />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                <AssembleText text="Our Services" />
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Everything from supply and installation to repairs, automation and gates.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal stagger={0.12}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, i) => (
                <div key={service.id}>
                  <ServiceCard service={service} index={i} />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <AnimatedDivider />

      {/* Why Choose */}
      <section className="py-16 lg:py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-50">
          <div className="absolute inset-0 rounded-full border border-accent/10 animate-spin" style={{ animationDuration: "40s" }} />
          <div className="absolute inset-12 rounded-full border border-accent/15 animate-spin" style={{ animationDuration: "30s", animationDirection: "reverse" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                <AssembleText text="Why Choose Quality Garage Doors Carlisle" />
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                A family business with 25 years of experience and a reputation for quality.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal stagger={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyChoosePoints.map((point, i) => (
                <div key={point.title}>
                  <WhyChooseCard
                    number={String(i + 1).padStart(2, "0")}
                    title={point.title}
                    description={point.description}
                    index={i}
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <AnimatedDivider />

      {/* Popular Types */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                <AssembleText text="Popular Garage Door Types" />
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                We supply and install a wide range of garage doors to suit every property and budget. Tap a card to flip and learn more.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <ServiceComparison />
          </ScrollReveal>
          <ScrollReveal stagger={0.1} delay={0.1}>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {garageDoorTypes.map((type, i) => {
                const iconMap: Record<string, React.ReactNode> = {
                  "Sectional doors": <Thermometer className="w-8 h-8" />,
                  "Roller shutter doors": <Shield className="w-8 h-8" />,
                  "Up and over doors": <DoorOpen className="w-8 h-8" />,
                  "Side hinged doors": <Zap className="w-8 h-8" />,
                };
                return (
                  <div key={type.name}>
                    <FlipCard
                      index={i}
                      front={
                        <div className="h-full flex flex-col items-center justify-center text-center p-6 bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2a2a2a] rounded-xl">
                          <div className="w-16 h-16 rounded-full bg-accent-light dark:bg-accent/10 text-accent flex items-center justify-center mb-4">
                            {iconMap[type.name] || <DoorOpen className="w-8 h-8" />}
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{type.name}</h3>
                          <p className="text-sm font-medium text-accent">{type.tagline}</p>
                          <p className="text-xs text-slate-500 mt-4">Tap to flip</p>
                        </div>
                      }
                      back={
                        <div className="h-full flex flex-col justify-center p-6 bg-accent dark:bg-[#1e3318] text-white rounded-xl">
                          <h3 className="text-lg font-bold mb-3">{type.name}</h3>
                          <p className="text-sm leading-relaxed mb-4 opacity-90">{type.description}</p>
                          <ul className="space-y-2">
                            {type.features.map((f) => (
                              <li key={f} className="text-sm flex items-start gap-2">
                                <span className="mt-0.5">&#10003;</span>
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>
                      }
                    />
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <div className="text-center mt-10">
              <Link
                href="/garage-doors"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-600 transition-colors"
              >
                Explore all garage door options
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <AnimatedDivider />

      {/* Gates */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="left" delay={0.1}>
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
            <ScrollReveal direction="right" delay={0.2}>
              <div className="p-2">
                <ul className="space-y-4">
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
                    <li key={item} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
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
          <ScrollReveal direction="up" delay={0.1}>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                <AssembleText text="Recent Projects" />
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                A selection of garage door and gate installations across our service area. Drag to explore.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <ProjectCarousel
              projects={[
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
              ]}
            />
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <div className="text-center mt-10">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-600 transition-colors"
              >
                View all case studies
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <AnimatedDivider />

      {/* Reviews */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        {/* Organic blob shapes */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-[60%_40%_50%_50%_/_50%_60%_40%_50%] bg-accent/5 blur-xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-[40%_60%_60%_40%_/_60%_40%_60%_40%] bg-accent/5 blur-xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                <AssembleText text="What Our Customers Say" />
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Excellent rating based on {reviews.length} reviews.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal stagger={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reviews.map((review, i) => (
                <div key={i}>
                  <ReviewCard review={review} index={i} />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <AnimatedDivider />

      {/* Areas Covered */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                <AssembleText text="Areas We Cover" />
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Based in Carlisle, we travel across the region to install and repair garage doors and gates.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal stagger={0.08}>
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
                <div key={area}>
                  <Link
                    href="/areas-covered"
                    className="inline-block px-4 py-2 bg-slate-100 dark:bg-[#1a1a1a] hover:bg-accent-light dark:hover:bg-accent/10 text-slate-700 dark:text-slate-300 hover:text-accent-700 dark:hover:text-accent rounded-full text-sm font-medium transition-colors border border-slate-200 dark:border-[#2a2a2a]"
                  >
                    {area}
                  </Link>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <AnimatedDivider />

      {/* FAQs */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                <AssembleText text="Frequently Asked Questions" />
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Common questions about our garage door and gate services.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <FAQAccordion faqs={faqs} />
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}