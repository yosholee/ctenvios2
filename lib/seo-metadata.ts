import type { Metadata } from "next";
import { site } from "@/content/landing";
import { getBlogPost, getServicePage } from "@/content/seo";
import { SITE_URL } from "@/lib/site";

export function buildServiceMetadata(slug: string): Metadata {
  const page = getServicePage(slug);
  if (!page) {
    return { title: site.brand };
  }

  return {
    title: `${page.title} | ${site.brand}`,
    description: page.description,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      title: `${page.title} | ${site.brand}`,
      description: page.description,
      url: `${SITE_URL}/${slug}`,
      type: "website",
      locale: "es_US",
    },
  };
}

export function buildBlogMetadata(slug: string): Metadata {
  const post = getBlogPost(slug);
  if (!post) {
    return { title: site.brand };
  }

  return {
    title: `${post.title} | ${site.brand}`,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: `${post.title} | ${site.brand}`,
      description: post.description,
      url: `${SITE_URL}/blog/${slug}`,
      type: "article",
      locale: "es_US",
    },
  };
}
