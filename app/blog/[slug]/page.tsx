import type { ReactElement } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticle } from "@/app/sections/blog-article";
import { blogPosts, getBlogPost } from "@/content/seo";
import { buildBlogMetadata } from "@/lib/seo-metadata";

interface BlogSlugPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams(): { slug: string }[] {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!getBlogPost(slug)) {
    return { title: "Blog | CT Envios" };
  }
  return buildBlogMetadata(slug);
}

export default async function BlogSlugPage({
  params,
}: BlogSlugPageProps): Promise<ReactElement> {
  const { slug } = await params;
  if (!getBlogPost(slug)) {
    notFound();
  }
  return <BlogArticle slug={slug} />;
}
