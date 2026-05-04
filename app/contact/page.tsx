import { Metadata } from "next";
import { business } from "@/lib/content";
import { Hero } from "../components/Hero";
import { ContactForm } from "../components/ContactForm";
import { ScrollReveal } from "../components/ScrollReveal";
import { AnimatedDivider } from "../components/AnimatedDivider";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Free Quote | Quality Garage Doors Carlisle",
  description:
    "Get a free quote for garage doors, repairs, automation and gates. Call 01228 532495, WhatsApp 07519 021 053 or fill in the form. Based in Carlisle, covering Cumbria and the Borders.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        variant="contact"
        headline="Get in Touch"
        subheadline="Call, WhatsApp or send us a message. We offer free site visits and quotations across Carlisle, Cumbria, Dumfries and Galloway, Northumberland and the Scottish Borders."
      />

      <AnimatedDivider />

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact cards */}
            <div className="lg:col-span-1 space-y-6">
              <ScrollReveal>
                <div className="bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2a2a2a] rounded-xl p-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent-light dark:bg-accent/10 text-accent mb-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">Phone</h3>
                  <a
                    href={business.phoneHref}
                    className="text-slate-700 dark:text-slate-300 hover:text-accent text-sm"
                  >
                    {business.phone}
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2a2a2a] rounded-xl p-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent-light dark:bg-accent/10 text-accent mb-4">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">Mobile & WhatsApp</h3>
                  <a
                    href={business.mobileHref}
                    className="text-slate-700 dark:text-slate-300 hover:text-accent text-sm block"
                  >
                    {business.mobile}
                  </a>
                  <a
                    href={business.whatsAppHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-600 text-sm font-medium"
                  >
                    Message on WhatsApp
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2a2a2a] rounded-xl p-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent-light dark:bg-accent/10 text-accent mb-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">Address</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300">{business.address}</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2a2a2a] rounded-xl p-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent-light dark:bg-accent/10 text-accent mb-4">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">Opening Hours</h3>
                  <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                    {business.openingHours.map((oh) => (
                      <li key={oh.day} className="flex justify-between">
                        <span>{oh.day}</span>
                        <span>{oh.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="bg-accent-light dark:bg-accent/10 border border-accent/20 dark:border-accent/30 rounded-xl p-6">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">Service Area</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    We cover {business.serviceArea}. Free visits and quotations throughout the region.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Request a Free Quote</h2>
              </ScrollReveal>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-16 lg:py-20 bg-slate-100 dark:bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Find Us</h2>
              <p className="text-slate-600 dark:text-slate-400 mt-2">{business.address}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2a2a2a] rounded-xl overflow-hidden aspect-video flex items-center justify-center">
              <div className="text-center text-slate-500 dark:text-slate-500">
                <MapPin className="w-10 h-10 mx-auto mb-2" />
                <p className="text-sm">Map placeholder — embed Google Maps here</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
