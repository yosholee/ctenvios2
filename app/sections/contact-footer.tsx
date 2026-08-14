import type { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { FooterRouteMap } from "@/app/sections/footer-route-map";
import { Button } from "@/components/ui/button";
import { footer, site } from "@/content/landing";

export function ContactFooter(): ReactElement {
  return (
    <footer className="relative overflow-hidden bg-brand-navy pb-[env(safe-area-inset-bottom)] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-10 -bottom-24 size-72 rounded-full bg-[radial-gradient(circle,rgba(0,102,255,0.28)_0%,transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-20 size-72 rounded-full bg-[radial-gradient(circle,rgba(255,209,65,0.2)_0%,transparent_68%)] lg:right-[12%] lg:top-8 lg:size-80"
      />
      <div className="relative mx-auto grid max-w-7xl items-start gap-10 px-6 py-16 lg:grid-cols-[1fr_0.9fr_1.35fr] lg:gap-8 lg:px-8">
        <div>
          <Image
            src={site.logoSrc}
            alt={site.brand}
            width={140}
            height={56}
            translate="no"
            className="h-12 w-auto object-contain"
          />
          <p className="mt-4 max-w-md text-sm text-white/75 md:text-base">
            {footer.blurb}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              nativeButton={false}
              render={
                <a href={site.whatsappUrl} target="_blank" rel="noreferrer" />
              }
              size="sm"
              className="bg-brand-yellow text-brand-navy hover:bg-brand-yellow/90"
            >
              WhatsApp {site.whatsappDisplay}
            </Button>
            <Button
              nativeButton={false}
              render={
                <a href={site.mapsUrl} target="_blank" rel="noreferrer" />
              }
              size="sm"
              variant="outline"
              className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              Ver en Maps
            </Button>
          </div>
        </div>

        <div className="grid gap-5 text-sm sm:grid-cols-2 lg:grid-cols-1">
          <div className="space-y-2">
            <p className="font-semibold">Teléfono</p>
            {site.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                className="block rounded-sm text-white/75 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-brand-yellow/60 focus-visible:outline-none"
              >
                {phone}
              </a>
            ))}
          </div>
          <div className="space-y-2">
            <p className="font-semibold">Correo</p>
            <a
              href={`mailto:${site.email}`}
              className="block rounded-sm text-white/75 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-brand-yellow/60 focus-visible:outline-none"
            >
              {site.email}
            </a>
          </div>
          <div className="space-y-2 sm:col-span-2 lg:col-span-1">
            <p className="font-semibold">Ubicación</p>
            <p className="text-white/75">
              {site.address}
              <br />
              {site.city}
            </p>
          </div>
          <div className="space-y-2 sm:col-span-2 lg:col-span-1">
            <p className="font-semibold">Redes</p>
            <div className="flex flex-wrap gap-4">
              {footer.social.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-sm text-white/75 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-brand-yellow/60 focus-visible:outline-none"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <FooterRouteMap />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-6 text-center text-xs text-white/55 lg:px-8">
        <p>
          <span translate="no">
            © {new Date().getFullYear()} {footer.legal}
          </span>
          {" | "}
          <Link
            href="/terms"
            className="rounded-sm transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-brand-yellow/60 focus-visible:outline-none"
          >
            Términos y condiciones
          </Link>
        </p>
        <p className="mt-1">{footer.credit}</p>
      </div>
    </footer>
  );
}
