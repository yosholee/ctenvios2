import { site } from "@/content/landing";

export interface SeoFaqItem {
  question: string;
  answer: string;
}

export interface ServicePageContent {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  priceInfo: string;
  timeInfo: string;
  benefits: string[];
  faqs: SeoFaqItem[];
  whatsappText: string;
}

export interface BlogPostContent {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readTime: string;
  paragraphs: string[];
}

export const servicePages: ServicePageContent[] = [
  {
    slug: "envios-cuba-miami",
    eyebrow: "Agencia en Hialeah",
    title: "Agencia de envíos a Cuba en Miami (Hialeah)",
    description:
      "CT Envios, agencia de paquetería a Cuba en Hialeah Gardens. Envío marítimo puerta a puerta, tracking y cotización por WhatsApp.",
    intro:
      "Atendemos en 10230 NW 80th Ave, Hialeah Gardens. Envíos marítimos a toda Cuba, tarifas por libra, cajas fijas y seguimiento desde que recibimos el paquete hasta la entrega.",
    priceInfo:
      "Desde $0.99/lb los jueves (alimentos, medicina y aseo). Fin de semana $1.45/lb. Martes $1.64/lb para electrodomésticos, piezas y muebles. Regular $1.99/lb. Cajas fijas desde $30. Mínimo 15 lb en tarifas por libra.",
    timeInfo:
      "El tiempo depende de la ruta marítima y de aduana en Cuba. Al cotizar te damos un estimado según destino, tipo de carga y oferta del día.",
    benefits: [
      "Atención local en Hialeah Gardens.",
      "Entrega puerta a puerta en Cuba.",
      "Cotización por WhatsApp.",
      "Tracking con número de orden o HBL.",
    ],
    faqs: [
      {
        question: "¿Dónde está CT Envios en Miami?",
        answer:
          "En 10230 NW 80th Ave, Hialeah Gardens, FL 33016. También cotizamos por WhatsApp.",
      },
      {
        question: "¿Qué necesito para abrir un envío?",
        answer:
          "Datos del remitente y del destinatario, contenido del paquete y si vas por libra o por caja fija.",
      },
    ],
    whatsappText: "Hola, quiero cotizar un envío a Cuba desde la agencia de Hialeah.",
  },
  {
    slug: "envios-maritimos-cuba",
    eyebrow: "Marítimo",
    title: "Envíos marítimos a Cuba desde Miami",
    description:
      "Envíos marítimos a Cuba con tarifas por libra, cajas fijas, entrega puerta a puerta y tracking desde Hialeah Gardens.",
    intro:
      "El marítimo es la vía de CT Envios para paquetes familiares y carga consolidada: mejor precio por libra, entrega en puerta y seguimiento en cada etapa.",
    priceInfo:
      "Regular $1.99/lb. Ofertas: jueves $0.99/lb (alimentos, medicina y aseo), fin de semana $1.45/lb, martes $1.64/lb (electrodomésticos, piezas y muebles). Mínimo 15 lb. Cajas fijas desde $30.",
    timeInfo:
      "No hay un plazo fijo para todos los destinos. El estimado se confirma al cotizar, según provincia, aduana y tipo de carga.",
    benefits: [
      "Mejor costo por libra en volumen.",
      "Entrega puerta a puerta.",
      "Tracking en tiempo real.",
      "Asesoría para declarar el contenido.",
    ],
    faqs: [
      {
        question: "¿Cuánto demora un envío marítimo a Cuba?",
        answer:
          "Depende de la ruta y de aduana. Pide un estimado por WhatsApp con destino y tipo de paquete.",
      },
      {
        question: "¿Qué conviene enviar por marítimo?",
        answer:
          "Alimentos no perecederos, aseo, ropa, medicinas permitidas, misceláneas y electrodomésticos o muebles en la oferta del martes.",
      },
    ],
    whatsappText: "Hola, quiero cotizar un envío marítimo a Cuba.",
  },
  {
    slug: "envio-alimentos-cuba",
    eyebrow: "Alimentos",
    title: "Enviar alimentos a Cuba desde Miami",
    description:
      "Envía alimentos no perecederos a Cuba con CT Envios. Oferta de jueves desde $0.99/lb, empaque y declaración claros.",
    intro:
      "Los jueves la tarifa de alimentos, medicina y aseo parte de $0.99/lb (mínimo 15 lb). También puedes usar cajas fijas si el contenido es alimentos, aseo, ropa o medicinas.",
    priceInfo:
      "Jueves $0.99/lb para alimentos, medicina y aseo. Cajas 12×12×12 $30, 15×15×15 $60, 16×16×16 $65. Confirma la lista vigente antes de empacar.",
    timeInfo:
      "Va por vía marítima. El estimado de entrega se da al cotizar, según destino y aduana.",
    benefits: [
      "Oferta semanal para comida y aseo.",
      "Cajas fijas si no quieres calcular libras.",
      "Recomendaciones de empaque y declaración.",
      "Tracking hasta la puerta.",
    ],
    faqs: [
      {
        question: "¿Qué alimentos se pueden enviar?",
        answer:
          "Sobre todo no perecederos y sellados. Evita productos refrigerados. Valida la lista del día por WhatsApp.",
      },
      {
        question: "¿Cómo evito problemas en aduana?",
        answer:
          "Declara cada ítem con nombre claro (no “misceláneas”), usa empaque firme y no mezcles restringidos.",
      },
    ],
    whatsappText: "Hola, quiero enviar alimentos a Cuba. ¿Me cotizan?",
  },
  {
    slug: "envio-electrodomesticos-cuba",
    eyebrow: "Electrodomésticos",
    title: "Envío de electrodomésticos a Cuba",
    description:
      "Envía electrodomésticos, piezas y muebles a Cuba. Oferta de martes $1.64/lb, mínimo 15 lb, desde Hialeah Gardens.",
    intro:
      "Los martes CT Envios mueve electrodomésticos, piezas y muebles a $1.64/lb (mínimo 15 lb). Cotizamos equipos grandes uno a uno por peso y volumen.",
    priceInfo:
      "Martes $1.64/lb para electrodomésticos, piezas y muebles. Regular $1.99/lb el resto de días hábiles. Equipos voluminosos se cotizan por WhatsApp.",
    timeInfo:
      "Vía marítima. El estimado depende del destino, aduana y si el equipo requiere manejo especial.",
    benefits: [
      "Tarifa de martes para carga pesada.",
      "Orientación de empaque para frágiles.",
      "Declaración y tracking.",
      "Entrega puerta a puerta.",
    ],
    faqs: [
      {
        question: "¿Qué equipos se envían más?",
        answer:
          "Ventiladores, microondas, freidoras y pequeños equipos de casa permitidos. Confirma el modelo antes de empacar.",
      },
      {
        question: "¿Cómo se calcula el precio?",
        answer:
          "Por libra (mínimo 15 lb) o por cotización si el volumen es alto. El martes aplica $1.64/lb a esta categoría.",
      },
    ],
    whatsappText: "Hola, quiero cotizar el envío de un electrodoméstico a Cuba.",
  },
  {
    slug: "cajas-envios-cuba",
    eyebrow: "Cajas fijas",
    title: "Cajas fijas para envíos a Cuba",
    description:
      "Envía a Cuba con tarifa fija: caja 12×12×12 $30, 15×15×15 $60 y 16×16×16 $65. Solo alimentos, aseo, ropa y medicinas.",
    intro:
      "Si no quieres calcular libras, elige una caja y pagas un precio fijo. Las tres medidas admiten solo alimentos, aseo, ropa y medicinas. La 15×15×15 es la recomendada por relación capacidad/precio.",
    priceInfo:
      "Caja 12×12×12: $30. Caja 15×15×15: $60 (recomendada). Caja 16×16×16: $65. El precio incluye envío marítimo a Cuba, entrega en la puerta y número de tracking. No se cobra por libra.",
    timeInfo:
      "Va por vía marítima. El estimado de entrega se confirma al reservar, según destino y aduana.",
    benefits: [
      "Precio fijo: no calculas libras.",
      "Tres tamaños listos para reservar.",
      "Solo alimentos, aseo, ropa y medicinas.",
      "Tracking y entrega puerta a puerta.",
    ],
    faqs: [
      {
        question: "¿Qué puedo meter en una caja fija?",
        answer:
          "Solo alimentos, aseo, ropa y medicinas. Si mezclas electrodomésticos u otra carga, cotiza por libra.",
      },
      {
        question: "¿Cuál caja conviene más?",
        answer:
          "La 15×15×15 a $60 suele ser la mejor relación capacidad/precio. La 12×12×12 ($30) sirve para envíos chicos y la 16×16×16 ($65) si necesitas más espacio.",
      },
      {
        question: "¿Cómo reservo una caja?",
        answer:
          "Escríbenos por WhatsApp con el tamaño. Te confirmamos disponibilidad, destino y cómo entregar el paquete en Hialeah Gardens.",
      },
    ],
    whatsappText: "Hola, quiero reservar una caja fija para enviar a Cuba.",
  },
];

export const blogPosts: BlogPostContent[] = [
  {
    slug: "cuanto-cuesta-enviar-a-cuba-desde-miami",
    title: "Cuánto cuesta enviar a Cuba desde Miami",
    description:
      "Precios actuales de CT Envios: desde $0.99/lb, cajas fijas desde $30 y cómo cotizar por WhatsApp.",
    publishedAt: "2026-02-26",
    readTime: "5 min",
    paragraphs: [
      "En CT Envios el envío marítimo a Cuba desde Miami parte de $0.99/lb los jueves (alimentos, medicina y aseo), con mínimo 15 lb. El fin de semana está en $1.45/lb, el martes en $1.64/lb para electrodomésticos, piezas y muebles, y el regular en $1.99/lb.",
      "Si no quieres calcular libras, hay cajas fijas: 12×12×12 por $30, 15×15×15 por $60 y 16×16×16 por $65. En caja solo se admite alimentos, aseo, ropa y medicinas.",
      "El precio final también depende del contenido y de aduana. Una cotización útil incluye peso o tamaño de caja, lista de artículos y destino en Cuba.",
      "Cotiza el día que vas a enviar. Las ofertas semanales cambian el total más que cualquier calculadora genérica.",
      "Escríbenos por WhatsApp con fotos o lista del paquete. Te devolvemos tarifa, estimado de tiempo y si conviene caja o libra.",
    ],
  },
  {
    slug: "que-se-puede-enviar-a-cuba-2026",
    title: "Qué se puede enviar a Cuba en 2026",
    description:
      "Artículos permitidos y cómo preparar el paquete para envíos a Cuba desde Miami con CT Envios.",
    publishedAt: "2026-02-26",
    readTime: "6 min",
    paragraphs: [
      "Lo más enviado desde Miami es ropa, aseo, alimentos no perecederos, medicinas permitidas y pequeños electrodomésticos. En CT Envios las cajas fijas solo aceptan alimentos, aseo, ropa y medicinas.",
      "Declara cada cosa con nombre concreto: “latas de atún”, “jabón de tocador”, “ropa de niño”. Evita la palabra “misceláneas”.",
      "Si mezclas comida y equipos, sepáralos por bolsas o cajas internas. Eso ayuda en la revisión y en el tracking de incidencias.",
      "No envíes armas, explosivos, drogas, dinero en efectivo, perecederos mal empacados ni nada que viole las reglas de EE. UU. o de Cuba.",
      "Toma fotos del contenido y de la caja cerrada. Si hay una reclamación, ese registro acelera el caso.",
      "Las reglas de aduana cambian. Antes de cerrar la caja, confirma la lista del día por WhatsApp.",
    ],
  },
  {
    slug: "cuanto-demora-envio-maritimo-cuba",
    title: "Cuánto demora un envío marítimo a Cuba",
    description:
      "Qué influye en el tiempo de un envío marítimo a Cuba y cómo pedir un estimado real.",
    publishedAt: "2026-02-26",
    readTime: "4 min",
    paragraphs: [
      "No hay un único plazo para toda Cuba. El tiempo sale de la ruta marítima, la aduana y el reparto en destino.",
      "Al cotizar, pide el estimado para tu provincia, no un promedio genérico. Oriente y occidente no se mueven igual.",
      "Una declaración clara y un empaque correcto bajan revisiones extra. El contenido ambiguo alarga la liberación.",
      "Usa el tracking en ctenvios.com/tracking con tu orden o HBL. Si una etapa se queda quieta, escribe por WhatsApp con el número y el destinatario.",
    ],
  },
  {
    slug: "como-rastrear-un-envio-a-cuba",
    title: "Cómo rastrear un envío a Cuba",
    description:
      "Cómo usar el número de orden o HBL de CT Envios para ver recibido, tránsito, aduana, reparto y entregado.",
    publishedAt: "2026-04-09",
    readTime: "4 min",
    paragraphs: [
      "Entra a /tracking e ingresa el número de orden o el HBL. Verás el estado actualizado del paquete.",
      "Las etapas habituales son: recibido en Hialeah, en tránsito, aduana en Cuba, en reparto y entregado.",
      "Si el estado no cambia varios días, primero compara con el estimado de esa etapa. No todo silencio es un problema.",
      "Para soporte, manda tracking, nombre del destinatario y un teléfono. Con eso el equipo puede revisar el caso sin ir y venir.",
    ],
  },
  {
    slug: "articulos-prohibidos-cuba",
    title: "Artículos prohibidos en envíos a Cuba",
    description:
      "Qué no enviar a Cuba para evitar retenciones, demoras o decomisos.",
    publishedAt: "2026-02-26",
    readTime: "5 min",
    paragraphs: [
      "Un solo artículo restringido puede frenar todo el paquete. Si dudas, pregunta antes de empacar.",
      "No se aceptan armas, municiones, explosivos, drogas, dinero en efectivo ni material que viole embargo o transporte internacional.",
      "Los perecederos sin empaque adecuado y los productos sin etiqueta también generan rechazo o revisión larga.",
      "En cajas fijas de CT Envios solo van alimentos, aseo, ropa y medicinas. El resto va por libra, según la oferta del día.",
      "Manda foto del artículo por WhatsApp. Resolverlo en Hialeah es más barato que resolverlo en aduana.",
    ],
  },
];

export function getServicePage(slug: string): ServicePageContent | undefined {
  return servicePages.find((page) => page.slug === slug);
}

export function getBlogPost(slug: string): BlogPostContent | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function serviceWhatsAppUrl(text: string): string {
  return `${site.whatsappUrl}?text=${encodeURIComponent(text)}`;
}

export interface SeoHubLink {
  label: string;
  href: string;
  support: string;
}

export const seoHubLinks: SeoHubLink[] = [
  {
    label: "Agencia en Miami",
    href: "/envios-cuba-miami",
    support: "Hialeah Gardens, cotización y entrega en puerta.",
  },
  {
    label: "Envíos marítimos",
    href: "/envios-maritimos-cuba",
    support: "Mejor precio por libra y tracking hasta Cuba.",
  },
  {
    label: "Enviar alimentos",
    href: "/envio-alimentos-cuba",
    support: "Jueves desde $0.99/lb. Comida, medicina y aseo.",
  },
  {
    label: "Electrodomésticos",
    href: "/envio-electrodomesticos-cuba",
    support: "Martes $1.64/lb. Equipos, piezas y muebles.",
  },
  {
    label: "Cajas fijas",
    href: "/cajas-envios-cuba",
    support: "12×12 $30, 15×15 $60 y 16×16 $65. Sin calcular libras.",
  },
  {
    label: "Blog",
    href: "/blog",
    support: "Guías de aduana, empaque y cómo rastrear.",
  },
];
