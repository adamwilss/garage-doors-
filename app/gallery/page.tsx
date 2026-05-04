import { Metadata } from "next";
import { GalleryContent } from "./GalleryContent";

export const metadata: Metadata = {
  title: "Garage Door and Gate Installation Gallery | Quality Garage Doors Carlisle",
  description:
    "Browse our gallery of garage door and gate installations across Carlisle, Cumbria and the surrounding region. Filter by category, location and service type.",
};

export default function GalleryPage() {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GalleryContent />
      </div>
    </section>
  );
}
