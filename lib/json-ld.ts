import {
  boxes,
  formatPrice,
  getActiveOffers,
  getFeaturedFaqItems,
  site,
  testimonials,
} from "@/content/landing";
import { SITE_URL } from "@/lib/site";

export function buildLocalBusinessJsonLd(): Record<string, unknown> {
  return {
    "@type": ["LocalBusiness", "Organization"],
    "@id": `${SITE_URL}/#business`,
    name: site.brand,
    alternateName: ["CTEnvios", "CT Envíos"],
    legalName: site.legalName,
    description: site.description,
    url: SITE_URL,
    image: `${SITE_URL}${site.logoSrc}`,
    logo: `${SITE_URL}${site.logoSrc}`,
    telephone: site.phones[0],
    email: site.email,
    openingHoursSpecification: site.hours.map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "17:00",
      description: `${slot.days}: ${slot.time}`,
    })),
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: "Hialeah Gardens",
      addressRegion: "FL",
      postalCode: "33016",
      addressCountry: "US",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-305-851-3004",
        contactType: "customer service",
        availableLanguage: ["Spanish", "English"],
        areaServed: ["US", "CU"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+1-754-277-8810",
        contactType: "customer service",
        contactOption: "WhatsApp",
        availableLanguage: ["Spanish", "English"],
        areaServed: ["US", "CU"],
      },
    ],
    areaServed: [
      { "@type": "Country", name: "Cuba" },
      { "@type": "City", name: "Miami" },
      { "@type": "City", name: "Hialeah Gardens" },
    ],
    knowsAbout: [
      "Envíos a Cuba",
      "Envíos a Cuba desde Miami",
      "Envíos marítimos a Cuba",
      "Paquetería a Cuba",
      "Envios Cuba"
    ],
    sameAs: footerSocialUrls(),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: testimonials.rating,
      reviewCount: testimonials.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    makesOffer: getActiveOffers().map((offer) => ({
      "@type": "Offer",
      name: `${offer.dayLabel} — ${offer.category}`,
      description: offer.description,
      price: offer.price,
      priceCurrency: "USD",
      unitText: "lb",
      url: `${SITE_URL}/#ofertas`,
      availability: "https://schema.org/InStock",
    })),
  };
}

export function buildWebSiteJsonLd(): Record<string, unknown> {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: site.brand,
    description: site.description,
    inLanguage: "es-US",
    publisher: { "@id": `${SITE_URL}/#business` },
  };
}

export function buildFaqJsonLd(): Record<string, unknown> {
  const items = getFeaturedFaqItems();

  return {
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildServiceJsonLd(): Record<string, unknown> {
  return {
    "@type": "Service",
    "@id": `${SITE_URL}/#service`,
    name: "Envíos a Cuba",
    serviceType: "Envíos a Cuba",
    alternateName: "Envíos a Cuba desde Miami",
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: { "@type": "Country", name: "Cuba" },
    description: site.description,
    offers: [
      ...getActiveOffers().map((offer) => ({
        "@type": "Offer",
        name: offer.dayLabel,
        price: offer.price,
        priceCurrency: "USD",
        description: `${offer.category}. Mínimo ${offer.minLbs} lb. Precio ${formatPrice(offer.price)}${offer.unit}.`,
      })),
      ...boxes.items.map((box) => ({
        "@type": "Offer",
        name: box.sizeLabel,
        price: box.price,
        priceCurrency: "USD",
        description: `Tarifa fija. Solo ${box.category}.`,
      })),
    ],
  };
}

export function buildJsonLdGraph(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildLocalBusinessJsonLd(),
      buildWebSiteJsonLd(),
      buildFaqJsonLd(),
      buildServiceJsonLd(),
    ],
  };
}

function footerSocialUrls(): string[] {
  return [
    "https://www.tiktok.com/@ctenvios",
    "https://www.instagram.com/ctenvios/",
    site.whatsappUrl,
    site.mapsUrl,
  ];
}
