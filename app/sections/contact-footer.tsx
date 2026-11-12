import type { ReactElement, ReactNode } from "react";
import Link from "next/link";
import { footer, site } from "@/content/landing";
import { cn } from "@/lib/utils";

function telHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

const linkClass =
  "text-[#424245] transition-colors hover:text-[#1d1d1f] hover:underline";
const focusClass =
  "rounded-sm focus-visible:ring-2 focus-visible:ring-[#0066cc]/50 focus-visible:outline-none";

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}): ReactElement {
  return (
    <nav aria-label={title}>
      <h3 className="text-xs font-semibold text-[#1d1d1f]">{title}</h3>
      <ul className="mt-3 space-y-2.5 text-xs">{children}</ul>
    </nav>
  );
}

function FooterItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}): ReactElement {
  return <li className={className}>{children}</li>;
}

export function ContactFooter(): ReactElement {
  const addressParts = site.fullAddress.split(", ");
  const addressLine1 = `${addressParts[0] ?? ""},`;
  const addressLine2 = addressParts.slice(1, 3).join(", ");
  const socialProfiles = footer.social.filter(
    (item) => item.label !== "WhatsApp"
  );

  return (
    <footer className="border-t border-[#d2d2d7] bg-[#f5f5f7] pb-[env(safe-area-inset-bottom)] text-[#424245]">
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-8 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          <FooterColumn title="Servicios">
            <FooterItem>
              <Link href="/envios-cuba-miami" className={cn(linkClass, focusClass)}>
                Envíos a Cuba desde Miami
              </Link>
            </FooterItem>
            <FooterItem>
              <Link href="/envios-maritimos-cuba" className={cn(linkClass, focusClass)}>
                Envío marítimo a Cuba
              </Link>
            </FooterItem>
            <FooterItem>
              <Link href="/cajas-envios-cuba" className={cn(linkClass, focusClass)}>
                Cajas fijas
              </Link>
            </FooterItem>
            <FooterItem>
              <Link href="/envio-alimentos-cuba" className={cn(linkClass, focusClass)}>
                Envío de alimentos
              </Link>
            </FooterItem>
            <FooterItem>
              <Link href="/tracking" className={cn(linkClass, focusClass)}>
                Rastrear un envío
              </Link>
            </FooterItem>
          </FooterColumn>

          <FooterColumn title="CT Envios">
            <FooterItem>
              <Link href="/blog" className={cn(linkClass, focusClass)}>
                Blog
              </Link>
            </FooterItem>
            <FooterItem>
              <Link href="/faq" className={cn(linkClass, focusClass)}>
                Preguntas frecuentes
              </Link>
            </FooterItem>
            <FooterItem>
              <Link
                href="/blog/como-abrir-agencia-envios-cuba"
                className={cn(linkClass, focusClass)}
              >
                Abrir una agencia socia
              </Link>
            </FooterItem>
          </FooterColumn>

          <FooterColumn title="Contacto">
            <FooterItem className="leading-relaxed">
              <span className="block">{addressLine1}</span>
              <span className="block text-[#6e6e73]">{addressLine2}</span>
            </FooterItem>
            {site.phones.map((phone) => (
              <FooterItem key={phone}>
                <a href={telHref(phone)} className={cn(linkClass, focusClass)}>
                  {phone}
                </a>
              </FooterItem>
            ))}
            <FooterItem>
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className={cn(linkClass, focusClass)}
              >
                WhatsApp {site.whatsappDisplay}
              </a>
            </FooterItem>
            <FooterItem>
              <a
                href={`mailto:${site.email}`}
                className={cn(linkClass, focusClass)}
              >
                {site.email}
              </a>
            </FooterItem>
            <FooterItem>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className={cn(linkClass, focusClass)}
              >
                Ver en Google Maps
              </a>
            </FooterItem>
          </FooterColumn>

          <FooterColumn title="Horario">
            {site.hours.map((slot) => (
              <FooterItem key={slot.days} className="leading-relaxed">
                <span className="block">{slot.days}</span>
                <span className="block text-[#6e6e73]">{slot.time}</span>
              </FooterItem>
            ))}
          </FooterColumn>

          <FooterColumn title="Síguenos">
            {socialProfiles.map((item) => (
              <FooterItem key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(linkClass, focusClass)}
                >
                  {item.label}
                </a>
              </FooterItem>
            ))}
          </FooterColumn>
        </div>

        <p className="mt-10 text-xs leading-relaxed">
          ¿Necesitas ayuda con tu envío? Escríbenos por{" "}
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[#0066cc] hover:underline"
          >
            WhatsApp
          </a>{" "}
          o llámanos al{" "}
          <a
            href={telHref(site.phones[0] ?? "")}
            className="text-[#0066cc] hover:underline"
          >
            {site.phones[0]}
          </a>
          .
        </p>

        <div className="mt-6 flex flex-col gap-2.5 border-t border-[#d2d2d7] pt-5 text-xs text-[#6e6e73] md:flex-row md:items-center">
          <p>
            <span translate="no">
              © {new Date().getFullYear()} {footer.legal}
            </span>
          </p>
          <div className="flex items-center">
            <Link
              href={footer.termsHref}
              className={cn(linkClass, focusClass)}
            >
              {footer.termsLabel}
            </Link>
            <Link
              href={footer.privacyHref}
              className={cn(
                linkClass,
                focusClass,
                "ml-3 border-l border-[#d2d2d7] pl-3"
              )}
            >
              {footer.privacyLabel}
            </Link>
          </div>
          <p className="md:ml-auto">{footer.credit}</p>
        </div>
      </div>
    </footer>
  );
}
