import { Metadata } from "next";
import { automationFeatures, business } from "@/lib/content";
import { Hero } from "../components/Hero";
import { CTASection } from "../components/CTASection";
import { ScrollReveal } from "../components/ScrollReveal";
import { SEOJsonLd } from "../components/SEOJsonLd";
import { AnimatedDivider } from "../components/AnimatedDivider";
import { Zap, Phone, MessageCircle, FileText } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Electric Garage Doors Carlisle | Automation & Motors | Quality Garage Doors Carlisle",
  description:
    "Convert manual garage doors to electric operation. Remote handsets, keypads, safety systems, battery backup and external release. Based in Carlisle, covering Cumbria and the Borders.",
};

export default function GarageDoorAutomationPage() {
  return (
    <>
      <SEOJsonLd
        type="Service"
        serviceName="Garage Door Automation"
        serviceDescription="Convert manual garage doors to electric operation with remote handsets, keypads, safety systems, battery backup and external release."
      />

      <Hero
        variant="automation"
        headline="Garage Door Automation in Carlisle"
        subheadline="Convert your existing manual garage door to convenient, secure electric operation. Remote controls, keypads, safety systems and battery backup options available."
      />

      <AnimatedDivider />

      {/* Urgent CTAs */}
      <section className="py-10 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={business.phoneHref}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-[#e8e8e8] text-[#1a1a1a] rounded-md font-semibold text-base transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call for automation advice
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-700 hover:bg-accent-600 text-white rounded-md font-semibold text-base transition-colors border border-white/20"
            >
              <FileText className="w-4 h-4" />
              Request an automation quote
            </Link>
            <a
              href={business.whatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-700 hover:bg-accent-600 text-white rounded-md font-semibold text-base transition-colors border border-white/20"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp us
            </a>
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* Features */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Automation Features
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Modern garage door automation gives you convenience, security and peace of mind. We install reliable systems from leading manufacturers.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationFeatures.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.1}>
                <div className="bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2a2a2a] rounded-xl p-6 h-full">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent-light dark:bg-accent/10 text-accent mb-4">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* Benefits */}
      <section className="py-16 lg:py-20 bg-slate-50 dark:bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                  Why Automate Your Garage Door?
                </h2>
                <ul className="space-y-4">
                  {[
                    "No more getting out of the car in rain, wind or cold",
                    "Improved security with automatic locking",
                    "Easier access for elderly or less mobile users",
                    "Adds value and modern appeal to your property",
                    "Safety sensors protect vehicles, pets and people",
                    "Battery backup keeps you operational during power cuts",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                      <span className="w-6 h-6 rounded-full bg-accent-light dark:bg-accent/10 text-accent flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        &#10003;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2a2a2a] rounded-xl p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                  Suitable Existing Doors
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  Many existing manual tracked garage doors can be converted to electric operation if the door is in good condition and the tracking is suitable.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  During a free site visit we will assess your door, check the mechanics and advise whether automation is practical. If the door is not suitable, we can quote for a replacement with automation built in.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <AnimatedDivider />

      <CTASection
        headline="Make Your Garage Door Electric"
        subheadline="Call or WhatsApp for automation advice, or request a free survey and quotation."
      />
    </>
  );
}
