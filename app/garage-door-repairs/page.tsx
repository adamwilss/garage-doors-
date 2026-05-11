import { Metadata } from "next";
import { repairIssues, business } from "@/lib/content";
import { Hero } from "../components/Hero";
import { CTASection } from "../components/CTASection";
import { ScrollReveal } from "../components/ScrollReveal";
import { SEOJsonLd } from "../components/SEOJsonLd";
import { AnimatedDivider } from "../components/AnimatedDivider";
import { Phone, MessageCircle, FileText, AlertTriangle, Wrench, Clock, Shield } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Garage Door Repairs Carlisle | Fast Local Repair Service | Quality Garage Doors Carlisle",
  description:
    "Fast garage door repairs in Carlisle. Broken springs, faulty motors, remote faults, stuck doors, damaged panels, cables and track issues. Free quotations. 25 years experience.",
};

export default function GarageDoorRepairsPage() {
  return (
    <>
      <SEOJsonLd
        type="Service"
        serviceName="Garage Door Repairs"
        serviceDescription="Fast, reliable garage door repairs in Carlisle for broken springs, faulty motors, remote faults, stuck doors, damaged panels, cables and track issues."
      />

      <Hero
        variant="repairs"
        headline="Garage Door Repairs in Carlisle"
        subheadline="Fast, reliable repairs for broken springs, faulty motors, remote control faults, stuck doors and more. We repair all makes and models across Carlisle and the surrounding region."
      />

      <AnimatedDivider />

      {/* Urgent CTAs */}
      <section className="py-10 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={business.phoneHref}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-[#e8e8e8] text-[#1a1a1a] dark:bg-[#1a1a1a] dark:hover:bg-[#2a2a2a] dark:text-white rounded-md font-semibold text-base transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call for garage door repair
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-700 hover:bg-accent-600 text-white rounded-md font-semibold text-base transition-colors border border-white/20"
            >
              <FileText className="w-4 h-4" />
              Request a repair quote
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

      {/* Issues grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 whitespace-nowrap">
                Common Garage Door Problems We Fix
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Our experienced team diagnoses and repairs all common garage door faults. If your problem is not listed, call us anyway. We have seen almost everything in 25 years.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {repairIssues.map((issue, i) => (
              <ScrollReveal key={issue} delay={i * 0.08}>
                <div className="bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2a2a2a] rounded-xl p-6 flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent-light dark:bg-accent/10 text-accent shrink-0">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-slate-900 dark:text-white">{issue}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* Repair vs replace */}
      <section className="py-16 lg:py-20 bg-slate-100 dark:bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 whitespace-nowrap">
                  Repair or Replace?
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-4">
                  We repair and service existing garage doors of all makes and ages. During a site visit we will assess the condition of your door, motor, springs and hardware.
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-4">
                  If a repair is cost effective and safe, we will quote for the repair. If the door is beyond economical repair or no longer meets safety standards, we will advise honestly on replacement options.
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                  Our advice is straightforward and there is never any pressure to proceed.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2a2a2a] rounded-xl p-6 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent-light dark:bg-accent/10 text-accent shrink-0">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">All makes repaired</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">We do not only repair doors we installed. Any manufacturer, any age.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent-light dark:bg-accent/10 text-accent shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Fast response</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Based in Carlisle with local knowledge and spare parts for common faults.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent-light dark:bg-accent/10 text-accent shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Safety checked</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Every repair includes a safety inspection to ensure your door meets current standards.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <AnimatedDivider />

      <CTASection
        headline="Book Your Garage Door Repair"
        subheadline="Call, WhatsApp or request a quote. We cover Carlisle, Cumbria, Dumfries and Galloway, Northumberland and the Scottish Borders."
      />
    </>
  );
}
