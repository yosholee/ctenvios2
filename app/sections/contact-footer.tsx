import type { ReactElement } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { footer, site } from "@/content/landing";

export function ContactFooter(): ReactElement {
  return (
    <footer id="contacto" className="scroll-mt-20 bg-brand-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.2fr_1fr] lg:px-8">
        <div>
          <Image
            src={site.logoSrc}
            alt={site.brand}
            width={140}
            height={56}
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

        <div className="grid gap-6 text-sm sm:grid-cols-2">
          <div className="space-y-2">
            <p className="font-semibold">Teléfono</p>
            {site.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                className="block text-white/75 transition-colors hover:text-white"
              >
                {phone}
              </a>
            ))}
          </div>
          <div className="space-y-2">
            <p className="font-semibold">Correo</p>
            <a
              href={`mailto:${site.email}`}
              className="block text-white/75 transition-colors hover:text-white"
            >
              {site.email}
            </a>
          </div>
          <div className="space-y-2 sm:col-span-2">
            <p className="font-semibold">Ubicación</p>
            <p className="text-white/75">
              {site.address}
              <br />
              {site.city}
            </p>
          </div>
          <div className="space-y-2 sm:col-span-2">
            <p className="font-semibold">Redes</p>
            <div className="flex flex-wrap gap-4">
              {footer.social.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/75 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} {site.brand}. {site.tagline}.
          </p>
          <a
            href={site.trackingUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            Rastrear envío
          </a>
        </div>
      </div>
    </footer>
  );
}
