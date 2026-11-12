import type { ReactElement } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/content/seo";
import { site } from "@/content/landing";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Enviar a Cuba desde Miami: precios, aduana y tracking | ${site.brand}`,
  description:
    "Precios 2026, nuevas reglas de la Aduana de Cuba, qué se puede enviar, cuánto demora el marítimo y cómo rastrear tu paquete. Guías de CT Envios, Hialeah Gardens.",
  alternates: { canonical: "/blog" },
};

const POSTS_PER_PAGE = 6;

function formatPostDate(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00`).toLocaleDateString("es-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function pageHref(page: number): string {
  return page <= 1 ? "/blog" : `/blog?pagina=${page}`;
}

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ pagina?: string }>;
}): Promise<ReactElement> {
  const { pagina } = await searchParams;
  const posts = [...blogPosts].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1
  );
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const requested = Number.parseInt(pagina ?? "1", 10);
  const currentPage = Number.isNaN(requested)
    ? 1
    : Math.min(Math.max(requested, 1), totalPages);
  const pagePosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <main id="contenido" className="flex flex-1 flex-col bg-[#f5f5f7]">
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold tracking-wide text-brand-navy uppercase">
              Blog
            </span>
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-balance text-brand-navy sm:text-4xl">
              Guías para enviar a Cuba
            </h1>
            <p className="mt-4 text-base leading-relaxed text-brand-navy/65">
              Precios, aduana, empaque y tracking. Escrito por el equipo de CT
              Envios en Hialeah Gardens.
            </p>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pagePosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block h-full overflow-hidden rounded-[28px] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] ring-1 ring-brand-navy/5 transition-shadow hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)]"
                >
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.imageAlt ?? post.title}
                      width={1200}
                      height={675}
                      className="aspect-[16/9] w-full object-cover"
                    />
                  ) : null}
                  <div className="p-6">
                    <p className="text-xs font-semibold tracking-wide text-brand-navy/45 uppercase">
                      {formatPostDate(post.publishedAt)} · {post.readTime}
                    </p>
                    <h2 className="mt-2 text-xl font-semibold text-brand-navy">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-brand-navy/65">
                      {post.description}
                    </p>
                    <span className="mt-4 inline-flex text-sm font-medium text-[#0071e3]">
                      Leer guía →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          {totalPages > 1 ? (
            <nav
              aria-label="Paginación del blog"
              className="mt-12 flex items-center justify-center gap-2"
            >
              {currentPage > 1 ? (
                <Link
                  href={pageHref(currentPage - 1)}
                  className="inline-flex h-11 items-center rounded-full bg-white px-5 text-sm font-medium text-brand-navy shadow-[0_4px_24px_rgba(0,0,0,0.06)] ring-1 ring-brand-navy/5 hover:text-[#0071e3]"
                >
                  ← Anterior
                </Link>
              ) : null}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Link
                    key={page}
                    href={pageHref(page)}
                    aria-current={page === currentPage ? "page" : undefined}
                    className={cn(
                      "inline-flex h-11 min-w-11 items-center justify-center rounded-full px-3 text-sm font-medium",
                      page === currentPage
                        ? "bg-brand-navy text-white"
                        : "bg-white text-brand-navy shadow-[0_4px_24px_rgba(0,0,0,0.06)] ring-1 ring-brand-navy/5 hover:text-[#0071e3]"
                    )}
                  >
                    {page}
                  </Link>
                )
              )}
              {currentPage < totalPages ? (
                <Link
                  href={pageHref(currentPage + 1)}
                  className="inline-flex h-11 items-center rounded-full bg-white px-5 text-sm font-medium text-brand-navy shadow-[0_4px_24px_rgba(0,0,0,0.06)] ring-1 ring-brand-navy/5 hover:text-[#0071e3]"
                >
                  Siguiente →
                </Link>
              ) : null}
            </nav>
          ) : null}
        </div>
      </section>
    </main>
  );
}
