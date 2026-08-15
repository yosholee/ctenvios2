import type { ReactElement } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPinIcon } from "lucide-react";
import { site } from "@/content/landing";
import {
  getServicePage,
  seoHubLinks,
  serviceWhatsAppUrl,
} from "@/content/seo";
import { SITE_URL } from "@/lib/site";

interface ServiceLandingProps {
  slug: string;
}

export function ServiceLanding({ slug }: ServiceLandingProps): ReactElement {
  const page = getServicePage(slug);
  if (!page) {
    notFound();
  }

  const pageUrl = `${SITE_URL}/${page.slug}`;
  const related = seoHubLinks.filter((link) => link.href !== `/${page.slug}`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.title,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        name: page.title,
        description: page.description,
        url: pageUrl,
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: { "@type": "Country", name: "Cuba" },
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <main id="contenido" className="flex flex-1 flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="text-sm text-brand-navy/50">
            <Link href="/" className="hover:text-brand-navy">
              Inicio
            </Link>
            {" / "}
            <span>{page.eyebrow}</span>
          </p>

          <span className="mt-5 inline-flex rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold tracking-wide text-brand-navy uppercase">
            {page.eyebrow}
          </span>
          <h1 className="mt-5 text-3xl font-bold tracking-tight text-balance text-brand-navy sm:text-4xl">
            {page.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-brand-navy/65 sm:text-lg">
            {page.intro}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <article className="rounded-3xl border border-brand-navy/10 bg-white p-6">
              <h2 className="text-lg font-semibold text-brand-navy">
                Precios
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-brand-navy/70">
                {page.priceInfo}
              </p>
            </article>
            <article className="rounded-3xl border border-brand-navy/10 bg-white p-6">
              <h2 className="text-lg font-semibold text-brand-navy">
                Tiempos
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-brand-navy/70">
                {page.timeInfo}
              </p>
            </article>
          </div>

          <h2 className="mt-10 text-xl font-semibold text-brand-navy">
            Qué incluye
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-brand-navy/70 sm:text-base">
            {page.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>

          <h2 className="mt-10 text-xl font-semibold text-brand-navy">
            Preguntas frecuentes
          </h2>
          <div className="mt-4 space-y-5">
            {page.faqs.map((item) => (
              <article key={item.question}>
                <h3 className="text-base font-semibold text-brand-navy">
                  {item.question}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-brand-navy/70 sm:text-base">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={serviceWhatsAppUrl(page.whatsappText)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-brand-yellow px-5 py-2.5 text-sm font-bold text-brand-navy transition-colors hover:bg-brand-yellow/90 focus-visible:ring-2 focus-visible:ring-brand-navy/35 focus-visible:outline-none"
            >
              Cotizar por WhatsApp
            </a>
            <Link
              href="/tracking"
              className="inline-flex items-center rounded-full border border-brand-navy/15 px-5 py-2.5 text-sm font-bold text-brand-navy transition-colors hover:bg-brand-navy/5"
            >
              Rastrear envío
            </Link>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brand-navy/15 px-5 py-2.5 text-sm font-bold text-brand-navy transition-colors hover:bg-brand-navy/5"
            >
              <MapPinIcon className="size-4" aria-hidden />
              Ver agencia
            </a>
          </div>

          <nav aria-label="Más servicios" className="mt-12">
            <p className="text-xs font-semibold tracking-wide text-brand-navy/45 uppercase">
              También te puede servir
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {related.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-brand-navy/10 bg-white px-3 py-1.5 text-sm font-semibold text-brand-navy hover:border-brand-navy/25"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </section>
    </main>
  );
}
