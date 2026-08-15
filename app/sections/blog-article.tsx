import type { ReactElement } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost, serviceWhatsAppUrl } from "@/content/seo";
import { SITE_URL } from "@/lib/site";

interface BlogArticleProps {
  slug: string;
}

function formatPostDate(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00`).toLocaleDateString("es-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogArticle({ slug }: BlogArticleProps): ReactElement {
  const post = getBlogPost(slug);
  if (!post) {
    notFound();
  }

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { "@type": "Organization", name: "CT Envios" },
    publisher: { "@id": `${SITE_URL}/#business` },
    url: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <main id="contenido" className="flex flex-1 flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="text-sm text-brand-navy/50">
            <Link href="/" className="hover:text-brand-navy">
              Inicio
            </Link>
            {" / "}
            <Link href="/blog" className="hover:text-brand-navy">
              Blog
            </Link>
          </p>
          <span className="mt-5 inline-flex rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold tracking-wide text-brand-navy uppercase">
            Guía
          </span>
          <h1 className="mt-5 text-3xl font-bold tracking-tight text-balance text-brand-navy sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-3 text-sm text-brand-navy/50">
            {formatPostDate(post.publishedAt)} · {post.readTime} · Equipo CT
            Envios
          </p>

          <div className="mt-8 space-y-4">
            {post.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-relaxed text-brand-navy/70"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={serviceWhatsAppUrl(
                `Hola, leí “${post.title}” y quiero cotizar un envío a Cuba.`
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-brand-yellow px-5 py-2.5 text-sm font-bold text-brand-navy transition-colors hover:bg-brand-yellow/90"
            >
              Cotizar por WhatsApp
            </a>
            <Link
              href="/#ofertas"
              className="inline-flex items-center rounded-full border border-brand-navy/15 px-5 py-2.5 text-sm font-bold text-brand-navy hover:bg-brand-navy/5"
            >
              Ver precios
            </Link>
          </div>

          {related.length > 0 ? (
            <nav aria-label="Más artículos" className="mt-12">
              <p className="text-xs font-semibold tracking-wide text-brand-navy/45 uppercase">
                Sigue leyendo
              </p>
              <ul className="mt-3 space-y-2">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/blog/${item.slug}`}
                      className="text-sm font-semibold text-brand-navy hover:underline"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>
      </article>
    </main>
  );
}
