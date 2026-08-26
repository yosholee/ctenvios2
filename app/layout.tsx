import type { ReactElement } from "react";
import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import { ContactFooter } from "@/app/sections/contact-footer";
import { SiteHeader } from "@/app/sections/site-header";
import { Gtag } from "@/components/gtag";
import { JsonLd } from "@/components/json-ld";
import { QueryProvider } from "@/components/providers/query-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { hero, site } from "@/content/landing";
import { SITE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: site.title,
  description: site.description,
  applicationName: site.brand,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/icon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "es_US",
    url: SITE_URL,
    siteName: site.brand,
    title: site.title,
    description: site.description,
    images: [
      {
        url: hero.image.src,
        width: 1200,
        height: 630,
        alt: hero.image.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [hero.image.src],
  },
  other: {
    "llms-txt": `${SITE_URL}/llms.txt`,
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">): ReactElement {
  return (
    <html
      lang="es-US"
      className={cn(
        "h-full scroll-smooth antialiased font-sans",
        geistMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Gtag />
        <JsonLd />
        <a
          href="#contenido"
          className="bg-brand-navy text-white focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:px-4 focus:py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow sr-only focus:not-sr-only"
        >
          Saltar al contenido
        </a>
        <TooltipProvider>
          <QueryProvider>
            <SiteHeader />
            {children}
            <ContactFooter />
          </QueryProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
