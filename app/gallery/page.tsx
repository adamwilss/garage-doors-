import { Metadata } from "next";
import { Hero } from "../components/Hero";
import { GalleryContent } from "./GalleryContent";
import { AnimatedDivider } from "../components/AnimatedDivider";
import { OrbitalRings } from "../components/OrbitalRings";

export const metadata: Metadata = {
  title: "Garage Door and Gate Installation Gallery | Quality Garage Doors Carlisle",
  description:
    "Browse our gallery of garage door and gate installations across Carlisle, Cumbria and the surrounding region. Filter by category, location and service type.",
};

export default function GalleryPage() {
  return (
    <>
      <Hero
        variant="gallery"
        headline="Installation Gallery"
        subheadline="Browse our gallery of garage door and gate installations across Carlisle, Cumbria and the surrounding region."
        ctas={[
          { label: "Get a free quote", href: "/contact", variant: "primary" },
          { label: "WhatsApp", href: "https://wa.me/447519021053", variant: "outline" },
        ]}
      />

      <AnimatedDivider />

      <section className="py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none opacity-30">
          <OrbitalRings />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <GalleryContent />
        </div>
      </section>
    </>
  );
}
