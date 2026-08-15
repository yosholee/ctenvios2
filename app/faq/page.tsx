import type { ReactElement } from "react";
import type { Metadata } from "next";
import { FaqAccordion } from "@/app/sections/faq-accordion";
import { faq, site } from "@/content/landing";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: `Preguntas frecuentes | ${site.brand}`,
  description:
    "FAQ de CT Envios: cuánto demora un envío a Cuba, precio de cajas, mínimo de peso, qué se puede enviar, tracking y reclamaciones.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: `Preguntas frecuentes | ${site.brand}`,
    description:
      "Respuestas sobre tiempos, cajas fijas, productos permitidos, entrega en Cuba, tracking y reclamos.",
    url: "/faq",
    type: "article",
    locale: "es_US",
  },
};

function buildFaqPageJsonLd(): Record<string, unknown> {
  const items = faq.groups.flatMap((group) => group.items);

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/faq#faq`,
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

export default function FaqPage(): ReactElement {
  return (
    <main id="contenido" className="flex flex-1 flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildFaqPageJsonLd()),
        }}
      />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <span className="inline-flex rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold tracking-wide text-brand-navy uppercase">
            FAQ
          </span>
          <h1 className="mt-5 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {faq.headline}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-brand-navy/65">
            {faq.support} Si no está aquí, escríbenos por WhatsApp.
          </p>

          <div className="mt-12 space-y-12">
            {faq.groups.map((group) => (
              <div key={group.id}>
                <h2 className="text-lg font-semibold text-brand-navy">
                  {group.title}
                </h2>
                <div className="mt-4">
                  <FaqAccordion
                    items={group.items}
                    defaultOpenId={group.items[0]?.id}
                    variant="light"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
