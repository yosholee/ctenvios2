import type { ReactElement } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/content/seo";
import { site } from "@/content/landing";

export const metadata: Metadata = {
  title: `Blog de envíos a Cuba | ${site.brand}`,
  description:
    "Guías de CT Envios: precios, qué se puede enviar, tiempos marítimos y cómo rastrear un paquete a Cuba desde Miami.",
  alternates: { canonical: "/blog" },
};

function formatPostDate(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00`).toLocaleDateString("es-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogIndexPage(): ReactElement {
  const posts = [...blogPosts].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1
  );

  return (
    <main id="contenido" className="flex flex-1 flex-col bg-background">
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <span className="inline-flex rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold tracking-wide text-brand-navy uppercase">
            Blog
          </span>
          <h1 className="mt-5 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Guías para enviar a Cuba
          </h1>
          <p className="mt-4 text-base leading-relaxed text-brand-navy/65">
            Precios, aduana, empaque y tracking. Escrito por el equipo de CT
            Envios en Hialeah Gardens.
          </p>

          <ul className="mt-10 space-y-4">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block rounded-3xl border border-brand-navy/10 bg-white p-6 transition-colors hover:border-brand-navy/20"
                >
                  <p className="text-xs font-semibold tracking-wide text-brand-navy/45 uppercase">
                    {formatPostDate(post.publishedAt)} · {post.readTime}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-brand-navy">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-brand-navy/65">
                    {post.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
