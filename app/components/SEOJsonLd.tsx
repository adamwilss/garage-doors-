import { business, reviews, faqs, services } from "@/lib/content";

interface SEOJsonLdProps {
  type?: "LocalBusiness" | "Service" | "FAQPage" | "Review" | "WebPage";
  serviceName?: string;
  serviceDescription?: string;
}

export function SEOJsonLd({ type = "LocalBusiness", serviceName, serviceDescription }: SEOJsonLdProps) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    image: "",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.split(", ")[0],
      addressLocality: "Carlisle",
      addressRegion: "Cumbria",
      postalCode: "CA3 0HW",
      addressCountry: "GB",
    },
    telephone: business.phone,
    vatID: business.vat,
    url: "https://www.qualitygaragedoors.co.uk",
    areaServed: business.serviceArea,
    priceRange: "££",
    openingHoursSpecification: business.openingHours.map((oh) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: oh.day.replace(" – ", ", "),
      opens: oh.hours.split(" – ")[0],
      closes: oh.hours.split(" – ")[1] || "17:00",
    })),
  };

  const aggregateRating = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: reviews.length.toString(),
    itemReviewed: {
      "@type": "LocalBusiness",
      name: business.name,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceName || "Garage Door Services",
    provider: {
      "@type": "LocalBusiness",
      name: business.name,
      telephone: business.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: business.address.split(", ")[0],
        addressLocality: "Carlisle",
        addressRegion: "Cumbria",
        postalCode: "CA3 0HW",
        addressCountry: "GB",
      },
    },
    areaServed: business.serviceArea,
    description: serviceDescription || business.tagline,
  };

  const schemas: Record<string, unknown> = {
    LocalBusiness: localBusinessSchema,
    Service: serviceSchema,
    FAQPage: faqSchema,
    Review: aggregateRating,
    WebPage: localBusinessSchema,
  };

  const schema = schemas[type];
  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
