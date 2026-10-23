import type { ReactElement } from "react";
import Link from "next/link";
import { site } from "@/content/landing";
import { serviceWhatsAppUrl } from "@/content/seo";

const STEPS = [
  {
    title: "Ten a mano tu número de orden o HBL",
    description:
      "Ambos aparecen en tu recibo de CT Envios. Puedes consultar con cualquiera de los dos, sin crear una cuenta.",
  },
  {
    title: "Escríbelo en el buscador de tracking",
    description:
      "Introduce el número tal como aparece en el recibo y pulsa «Rastrear». El sistema valida el formato antes de buscar.",
  },
  {
    title: "Revisa el historial de tu paquete",
    description:
      "Verás cada movimiento con fecha, hora y ubicación, desde que lo recibimos en Miami hasta la entrega en Cuba.",
  },
] as const;

const STATUSES = [
  {
    label: "Recibido",
    description: "Tu paquete llegó a nuestro almacén y quedó registrado.",
  },
  {
    label: "En tránsito",
    description: "Tu envío va en ruta marítima hacia Cuba.",
  },
  {
    label: "En aduana Cuba",
    description: "Tu paquete está en el proceso de aduana en Cuba.",
  },
  {
    label: "En reparto",
    description: "Tu paquete salió a entrega hacia la dirección del destinatario.",
  },
  {
    label: "Entregado",
    description: "La entrega quedó confirmada en la dirección en Cuba.",
  },
] as const;

export function TrackingGuide(): ReactElement {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 pb-16 sm:pb-20">
      <h2 className="text-2xl font-bold tracking-tight text-balance text-brand-navy sm:text-3xl">
        ¿Cómo funciona el tracking de CT Envios?
      </h2>
      <p className="mt-3 max-w-2xl leading-relaxed text-brand-navy/65">
        El rastreo de envíos marítimos a Cuba desde Estados Unidos es gratis y
        no requiere registro. Si buscas «ct envíos tracking» o el estado de tu
        paquete, esta es la página oficial de CT Envios para consultarlo.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {STEPS.map((step, index) => (
          <div
            key={step.title}
            className="rounded-2xl border border-brand-navy/10 bg-white p-5"
          >
            <span className="font-mono text-xs font-bold tracking-widest text-brand-navy/35">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 font-semibold text-brand-navy">{step.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-brand-navy/60">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-balance text-brand-navy sm:text-3xl">
        ¿Qué significan los estados de tu envío?
      </h2>
      <dl className="mt-5 divide-y divide-brand-navy/8 rounded-2xl border border-brand-navy/10 bg-white">
        {STATUSES.map((status) => (
          <div
            key={status.label}
            className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:gap-6"
          >
            <dt className="w-36 shrink-0 font-semibold text-brand-navy">
              {status.label}
            </dt>
            <dd className="text-sm leading-relaxed text-brand-navy/60">
              {status.description}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 rounded-2xl bg-brand-navy p-6 text-white sm:p-8">
        <h2 className="text-xl font-bold tracking-tight text-balance sm:text-2xl">
          ¿Tu envío no aparece o lleva días sin moverse?
        </h2>
        <p className="mt-2 max-w-2xl leading-relaxed text-white/70">
          El tránsito marítimo puede moverse por la ruta, el clima o los
          tiempos de aduana en Cuba. Escríbenos por WhatsApp con tu número de
          orden o HBL y el nombre del destinatario: revisamos tu caso y te
          decimos el siguiente paso. También puedes revisar las{" "}
          <Link
            href="/faq"
            className="font-medium text-brand-yellow underline underline-offset-4"
          >
            preguntas frecuentes sobre envíos a Cuba
          </Link>{" "}
          o cómo funcionan nuestros{" "}
          <Link
            href="/envios-maritimos-cuba"
            className="font-medium text-brand-yellow underline underline-offset-4"
          >
            envíos marítimos a Cuba
          </Link>
          .
        </p>
        <a
          href={serviceWhatsAppUrl(
            "Hola, necesito ayuda con el tracking de mi envío a Cuba."
          )}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex h-11 items-center rounded-full bg-brand-yellow px-6 font-medium text-brand-navy hover:bg-brand-yellow/90"
        >
          WhatsApp {site.whatsappDisplay}
        </a>
      </div>
    </section>
  );
}
