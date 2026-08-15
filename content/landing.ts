export interface NavLink {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface SiteHours {
  days: string;
  time: string;
}

export interface SiteContent {
  brand: string;
  logoSrc: string;
  tagline: string;
  title: string;
  description: string;
  phones: string[];
  whatsappDisplay: string;
  email: string;
  address: string;
  city: string;
  fullAddress: string;
  mapsUrl: string;
  whatsappUrl: string;
  trackingUrl: string;
  hours: SiteHours[];
  legalName: string;
  legalNote: string;
  nav: NavLink[];
}

export interface HeroSlide {
  id: string;
  label: string;
  title: string;
  description: string;
}

export interface HeroContent {
  eyebrow: string;
  headline: string;
  highlight: string;
  support: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  proofPoints: string[];
  offerBadge: string;
  offerPrice: string;
  offerNote: string;
  image: {
    src: string;
    alt: string;
  };
  slides: HeroSlide[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

export interface ServicesContent {
  eyebrow: string;
  headline: string;
  highlight: string;
  support: string;
  items: ServiceItem[];
  image: {
    src: string;
    alt: string;
  };
}

export interface TrackingStep {
  id: string;
  label: string;
}

export interface TrackingEvent {
  id: string;
  name: string;
  description: string;
  time: string;
  color: string;
}

export interface TrackingContent {
  eyebrow: string;
  headline: string;
  support: string;
  placeholder: string;
  buttonLabel: string;
  steps: TrackingStep[];
  events: TrackingEvent[];
  cta: CtaLink;
  image: {
    src: string;
    alt: string;
  };
}

export interface OfferItem {
  id: string;
  dayLabel: string;
  category: string;
  price: number;
  regularPrice: number;
  unit: string;
  minLbs: number;
  description: string;
  features: string[];
  ctaLabel: string;
  featured: boolean;
  active: boolean;
}

export interface OffersContent {
  eyebrow: string;
  headline: string;
  highlight: string;
  support: string;
  items: OfferItem[];
}

export interface BoxSize {
  id: string;
  sizeLabel: string;
  dimensions: string;
  category: string;
  price: number;
  priceNote: string;
  summary: string;
  badge: string;
  featured: boolean;
  includes: string[];
  image: {
    src: string;
    alt: string;
  };
}

export interface BoxesContent {
  eyebrow: string;
  headline: string;
  support: string;
  allowedItems: string[];
  includesLabel: string;
  ctaLabel: string;
  moreLabel: string;
  moreHref: string;
  items: BoxSize[];
}

export interface LiveOfferContent {
  badge: string;
  title: string;
  price: string;
  unit: string;
  endsLabel: string;
  /** ISO datetime used for the countdown */
  endsAt: string;
  cta: CtaLink;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  featured?: boolean;
}

export interface FaqGroup {
  id: string;
  title: string;
  items: FaqItem[];
}

export interface FaqContent {
  headline: string;
  support: string;
  moreLabel: string;
  moreHref: string;
  groups: FaqGroup[];
  image: {
    src: string;
    alt: string;
  };
}

export interface AtlasBentoCard {
  id: string;
  title: string;
  description: string;
  metric?: string;
  metricNote?: string;
  image?: {
    src: string;
    alt: string;
  };
}

export interface AtlasContent {
  eyebrow: string;
  headline: string;
  support: string;
  cta: CtaLink;
  logoSrc: string;
  cards: {
    dashboard: AtlasBentoCard;
    performance: AtlasBentoCard;
    security: AtlasBentoCard;
    consolidation: AtlasBentoCard;
  };
}

export interface AgencyBenefit {
  id: string;
  title: string;
  description: string;
}

export interface AgenciesContent {
  headline: string;
  support: string;
  benefits: AgencyBenefit[];
  cta: CtaLink;
  ctaSupport: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface StoreLink {
  label: string;
  caption: string;
  href: string;
}

export interface AppsContent {
  eyebrow: string;
  headline: string;
  support: string;
  appStore: StoreLink;
  playStore: StoreLink;
}

export interface HowItWorksStep {
  id: string;
  title: string;
  description: string;
}

export interface HowItWorksContent {
  eyebrow: string;
  headline: string;
  support: string;
  steps: HowItWorksStep[];
}

export interface ContactContent {
  eyebrow: string;
  headline: string;
  support: string;
  formTitle: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  consentLabel: string;
  submitLabel: string;
  submittingLabel: string;
  successMessage: string;
  consentError: string;
}

export interface FooterContent {
  blurb: string;
  social: NavLink[];
  legal: string;
  credit: string;
  termsLabel: string;
  termsHref: string;
  privacyLabel: string;
  privacyHref: string;
}

export const site: SiteContent = {
  brand: "CT Envios",
  logoSrc: "/brand/logo.webp",
  tagline: "Tu aliado en cada envío",
  title: "Envíos a Cuba desde Miami | Precios claros y tracking | CT Envios",
  description:
    "Envía paquetes a Cuba desde Miami con CTEnvios: entrega puerta a puerta, cajas con tarifa fija, tracking en tiempo real y atención por WhatsApp en Hialeah Gardens.",
  phones: ["(305) 851-3004"],
  whatsappDisplay: "(754) 277-8810",
  email: "soporte@ctenvios.com",
  address: "10230 NW 80th Ave",
  city: "Hialeah Gardens, FL 33016",
  fullAddress: "10230 NW 80th Ave, Hialeah Gardens, FL 33016, Estados Unidos",
  mapsUrl: "https://maps.google.com/?q=10230+NW+80th+Ave+Hialeah+Gardens+FL",
  whatsappUrl: "https://wa.me/17542778810",
  trackingUrl: "/tracking",
  hours: [{ days: "Lunes a domingo", time: "9:00 AM – 5:00 PM" }],
  legalName: "Atlas Logistics",
  legalNote: "CT Envios es una marca de Atlas Logistics.",
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Precios", href: "/#ofertas" },
    { label: "Cajas", href: "/#cajas" },
    { label: "Reseñas", href: "/#reseñas" },
    { label: "Tracking", href: "/tracking" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contacto", href: "/#contacto" },
  ],
};

export const hero: HeroContent = {
  eyebrow: "Rápidos. Claros. Reales.",
  headline: "Envíos a Cuba desde Miami: rápidos y confiables",
  highlight: "con precios bajos y tracking real",
  support:
    "CTEnvios es una agencia de envíos a Cuba ubicada en Hialeah Gardens, Miami. Ofrecemos envíos marítimos, cajas con tarifa fija, entrega puerta a puerta, tracking en tiempo real y atención personalizada por WhatsApp.",
  primaryCta: {
    label: "Contáctanos",
    href: "https://wa.me/17542778810?text=Hola%2C%20quiero%20enviar%20un%20paquete%20a%20Cuba",
    external: true,
  },
  secondaryCta: {
    label: "Tracking de su Envío",
    href: "/tracking",
  },
  proofPoints: [
    "Envíos rápidos",
    "Precios claros",
    "+100,000 paquetes",
    "Soporte real",
  ],
  offerBadge: "Super oferta",
  offerPrice: "$0.99",
  offerNote: "Todos los jueves",
  image: {
    src: "/images/hero/model-agency.png",
    alt: "Modelo CT Envios con caja lista para envío a Cuba",
  },
  slides: [
    {
      id: "jueves",
      label: "Todos los jueves",
      title: "Desde $0.99 / lb",
      description: "Alimentos, medicina y aseo. Envíos a toda Cuba.",
    },
    {
      id: "finde",
      label: "Fin de semana",
      title: "Desde $1.45 / lb",
      description: "Abrimos sábado y domingo de 9:00 AM a 5:00 PM.",
    },
    {
      id: "tracking",
      label: "Tracking real",
      title: "Sigue tu paquete",
      description: "Estado actualizado desde recepción hasta entrega.",
    },
  ],
};

export const services: ServicesContent = {
  eyebrow: "Envía con confianza",
  headline: "Todo lo que necesitas para enviar a Cuba",
  highlight: "enviar a Cuba",
  support:
    "Desde la recepción en Miami hasta la entrega en Cuba: opciones claras, seguimiento real y atención humana en cada paso.",
  items: [
    {
      id: "maritimo",
      title: "Envío marítimo",
      description:
        "La opción más económica para cargas y combos. Ideal cuando el precio por libra importa más que la velocidad.",
    },
    {
      id: "puerta",
      title: "Puerta a puerta",
      description:
        "Recibimos en nuestra agencia y coordinamos la entrega en Cuba. Tú envías; nosotros nos encargamos del resto.",
    },
    {
      id: "tracking",
      title: "Tracking en tiempo real",
      description:
        "Consulta el estado de tu paquete cuando quieras: recibido, en tránsito, aduana, reparto y entregado.",
    },
  ],
  image: {
    src: "/images/services/ship.png",
    alt: "Buque de contenedores en ruta marítima hacia Cuba",
  },
};

export const tracking: TrackingContent = {
  eyebrow: "Sistema de Tracking",
  headline: "Conozca en todo momento dónde se encuentra su envío",
  support:
    "Sigue cada etapa desde que recibimos el paquete en Miami hasta la entrega en Cuba.",
  placeholder: "Ingresa tu número de tracking…",
  buttonLabel: "Tracking",
  steps: [
    { id: "recibido", label: "Recibido" },
    { id: "transito", label: "En tránsito" },
    { id: "aduana", label: "En aduana Cuba" },
    { id: "reparto", label: "En reparto" },
    { id: "entregado", label: "Entregado" },
  ],
  events: [
    {
      id: "entregado",
      name: "Entregado",
      description: "Paquete en manos del destinatario",
      time: "Hace 2 min",
      color: "#0b1f4d",
    },
    {
      id: "reparto",
      name: "En reparto",
      description: "Salida a destino final en Cuba",
      time: "Hace 3 h",
      color: "#0066ff",
    },
    {
      id: "aduana",
      name: "En aduana",
      description: "Espera de aduana en Cuba",
      time: "Hace 4 días",
      color: "#ffd141",
    },
    {
      id: "transito",
      name: "En tránsito",
      description: "Carga marítima hacia Cuba",
      time: "Hace 1 sem",
      color: "#0066ff",
    },
    {
      id: "recibido",
      name: "Recibido",
      description: "Ingreso en agencia Hialeah Gardens",
      time: "Hace 2 sem",
      color: "#0b1f4d",
    },
  ],
  cta: {
    label: "Tracking",
    href: "/tracking",
    external: false,
  },
  image: {
    src: "/images/tracking/model-cutout.png",
    alt: "Cliente CT Envios consultando el tracking en su teléfono",
  },
};

export const offers: OffersContent = {
  eyebrow: "Precios",
  headline: "Promociones que crecen contigo",
  highlight: "crecen contigo",
  support:
    "Elige la oferta del día que mejor se adapte a tu envío. Tarifas claras por libra, con mínimo de 15 lb y entrega puerta a puerta.",
  items: [
    {
      id: "jueves",
      dayLabel: "Todos los Jueves",
      category: "Alimentos, Medicina y Aseo",
      price: 0.99,
      regularPrice: 1.99,
      unit: "/lb",
      minLbs: 15,
      description: "La mejor tarifa de la semana para lo esencial.",
      features: [
        "Alimentos, medicina y aseo",
        "Mínimo 15 libras",
        "Envío a toda Cuba",
        "Tracking incluido",
      ],
      ctaLabel: "Cotizar oferta",
      featured: true,
      active: true,
    },
    {
      id: "finde",
      dayLabel: "Sábado y Domingo",
      category: "Todos los productos",
      price: 1.45,
      regularPrice: 1.99,
      unit: "/lb",
      minLbs: 15,
      description: "Tarifa especial de fin de semana, 9:00 AM – 5:00 PM.",
      features: [
        "Todos los productos",
        "Mínimo 15 libras",
        "Horario 9:00 AM – 5:00 PM",
        "Atención por WhatsApp",
      ],
      ctaLabel: "Cotizar fin de semana",
      featured: false,
      active: true,
    },
    {
      id: "martes",
      dayLabel: "Todos los Martes",
      category: "Electrodomésticos, Piezas y Muebles",
      price: 1.64,
      regularPrice: 1.99,
      unit: "/lb",
      minLbs: 15,
      description: "Ideal para envíos más pesados y voluminosos.",
      features: [
        "Electrodomésticos y muebles",
        "Piezas y voluminosos",
        "Mínimo 15 libras",
        "Entrega puerta a puerta",
      ],
      ctaLabel: "Cotizar martes",
      featured: false,
      active: true,
    },
    {
      id: "regular",
      dayLabel: "Precio regular",
      category: "Envío marítimo",
      price: 1.99,
      regularPrice: 1.99,
      unit: "/lb",
      minLbs: 15,
      description: "Tarifa estándar todos los días hábiles.",
      features: [
        "Envío marítimo estándar",
        "Mínimo 15 libras",
        "Tracking en tiempo real",
        "Soporte personalizado",
      ],
      ctaLabel: "Cotizar envío",
      featured: false,
      active: true,
    },
  ],
};

export const boxes: BoxesContent = {
  eyebrow: "Cajas fijas",
  headline: "Elige la caja ideal para tu envío",
  support:
    "Tarifas fijas para enviar alimentos, aseo, ropa y medicinas a Cuba, sin tener que calcular el precio por libra.",
  allowedItems: ["Alimentos", "Aseo", "Ropa", "Medicinas"],
  includesLabel: "Qué incluye el precio",
  ctaLabel: "Reservar esta caja",
  moreLabel: "Ver todos los detalles de las cajas",
  moreHref: "/cajas-envios-cuba",
  items: [
    {
      id: "box-12",
      sizeLabel: "Caja 12×12×12",
      dimensions: "12×12×12 Pulgadas",
      category: "Alimentos, Aseo, Ropa y Medicinas",
      price: 30,
      priceNote: "Tarifa fija · envío a Cuba",
      summary: "Ideal para envíos compactos de alimentos, aseo, ropa y medicinas.",
      badge: "Fija",
      featured: false,
      includes: [
        "Alimentos, aseo, ropa y medicinas",
        "Envío marítimo a Cuba",
        "Entrega en la puerta",
        "Número de tracking",
      ],
      image: {
        src: "/images/boxes/box-ctenvios.png",
        alt: "Caja CT Envios 12×12×12 para envíos a Cuba",
      },
    },
    {
      id: "box-15",
      sizeLabel: "Caja 15×15×15",
      dimensions: "15×15×15 Pulgadas",
      category: "Alimentos, Aseo, Ropa y Medicinas",
      price: 60,
      priceNote: "Tarifa fija · envío a Cuba",
      summary: "La mejor relación capacidad/precio para un envío familiar.",
      badge: "Recomendada",
      featured: true,
      includes: [
        "Alimentos, aseo, ropa y medicinas",
        "Envío marítimo a Cuba",
        "Entrega en la puerta",
        "Número de tracking",
      ],
      image: {
        src: "/images/boxes/box-ctenvios.png",
        alt: "Caja CT Envios 15×15×15 recomendada para envíos a Cuba",
      },
    },
    {
      id: "box-16",
      sizeLabel: "Caja 16×16×16",
      dimensions: "16×16×16 Pulgadas",
      category: "Alimentos, Aseo, Ropa y Medicinas",
      price: 65,
      priceNote: "Tarifa fija · envío a Cuba",
      summary: "Más espacio si necesitas mandar un poco más en la misma categoría.",
      badge: "Fija",
      featured: false,
      includes: [
        "Alimentos, aseo, ropa y medicinas",
        "Envío marítimo a Cuba",
        "Entrega en la puerta",
        "Número de tracking",
      ],
      image: {
        src: "/images/boxes/box-ctenvios.png",
        alt: "Caja CT Envios 16×16×16 para envíos a Cuba",
      },
    },
  ],
};

export const liveOffer: LiveOfferContent = {
  badge: "Oferta en vivo",
  title: "Fin de semana",
  price: "$1.45",
  unit: "por libra",
  endsLabel: "La oferta termina en",
  endsAt: "2026-08-17T17:00:00-04:00",
  cta: {
    label: "Cotizar ahora",
    href: "https://wa.me/17542778810?text=Hola%2C%20quiero%20aprovechar%20la%20oferta",
    external: true,
  },
};

export const atlas: AtlasContent = {
  eyebrow: "Abre tu agencia",
  headline: "Sé socio CT Envios con Atlas incluido",
  support:
    "Únete a nuestra red: tarifas preferenciales, más clientes y Atlas — la plataforma para operar, rastrear y crecer sin complicaciones.",
  logoSrc: "/brand/atlas-logo.png",
  cta: {
    label: "Quiero ser agencia",
    href: "https://wa.me/17542778810?text=Hola%2C%20quiero%20abrir%20una%20agencia%20CT%20Envios%20con%20Atlas",
    external: true,
  },
  cards: {
    dashboard: {
      id: "dashboard",
      title: "Tu operación en un solo panel",
      description:
        "Como agencia socia, gestionas órdenes, clientes y métricas en Atlas: claridad día a día para vender y operar mejor.",
      image: {
        src: "/images/atlas/dashboard.png",
        alt: "Dashboard Atlas para agencias socias",
      },
    },
    performance: {
      id: "performance",
      title: "Red que ya opera",
      description:
        "Entra a una operación probada, no empieces desde cero.",
      metric: "+15K",
      metricNote: "Envíos en la red",
    },
    security: {
      id: "security",
      title: "Tu equipo, con control",
      description:
        "Usuarios, roles y permisos para tu agencia. Trabajas con autonomía y con el respaldo de CT Envios.",
    },
    consolidation: {
      id: "consolidation",
      title: "Carga lista sin dolor de cabeza",
      description:
        "Consolida y sigue cada paquete con Atlas. Nosotros movemos la carga; tú ganas clientes y comisión.",
      image: {
        src: "/images/atlas/container.png",
        alt: "Contenedor de la red CT Envios",
      },
    },
  },
};

export const howItWorks: HowItWorksContent = {
  eyebrow: "Cómo funciona",
  headline: "Así de simple es enviar",
  support: "Cuatro pasos. Sin sorpresas.",
  steps: [
    {
      id: "prepara",
      title: "Trae o prepara tu paquete",
      description:
        "Lleva tu caja a la agencia en Hialeah Gardens o ármala con nosotros. Te decimos qué se puede enviar y cómo empacarlo.",
    },
    {
      id: "factura",
      title: "Facturamos y generamos el tracking",
      description:
        "Pesamos o medimos, cobramos la tarifa y te damos un número para seguir el envío desde el teléfono.",
    },
    {
      id: "transporte",
      title: "Transportamos y procesamos el envío",
      description:
        "Tu paquete viaja de Miami a Cuba. En el tracking ves si ya salió, si está en camino o si ya llegó a la isla.",
    },
    {
      id: "entrega",
      title: "Entregamos en la puerta del destinatario",
      description:
        "Llevamos el paquete a la dirección en Cuba. Tú y tu familia pueden ver cuándo quedó entregado.",
    },
  ],
};

export const faq: FaqContent = {
  headline: "Preguntas frecuentes",
  support: "Respuestas claras antes de enviar tu paquete.",
  moreLabel: "Ver más preguntas",
  moreHref: "/faq",
  image: {
    src: "/images/faq/model.png",
    alt: "Cliente CT Envios con caja de envío lista para Cuba",
  },
  groups: [
    {
      id: "envio-precios",
      title: "Envío y precios",
      items: [
        {
          id: "demora",
          featured: true,
          question: "¿Cuánto demora un envío a Cuba?",
          answer:
            "El tiempo depende de la ruta marítima y de aduana en Cuba. No hay un plazo fijo para todos los destinos. Al cotizar por WhatsApp te damos un estimado según provincia, tipo de carga y oferta del día.",
        },
        {
          id: "caja",
          featured: true,
          question: "¿Cuánto cuesta enviar una caja?",
          answer:
            "Las cajas fijas empiezan en $30 (12×12×12), $60 (15×15×15) y $65 (16×16×16). Solo admiten alimentos, aseo, ropa y medicinas. Si vas por libra, el mínimo es 15 lb: jueves desde $0.99/lb, fin de semana $1.45/lb, martes $1.64/lb (electrodomésticos, piezas y muebles) y regular $1.99/lb.",
        },
        {
          id: "minimo",
          featured: true,
          question: "¿Cuál es el mínimo de peso?",
          answer:
            "En tarifas por libra el mínimo es 15 lb. Las cajas fijas no se cobran por peso: pagas el tamaño de la caja si el contenido es alimentos, aseo, ropa o medicinas.",
        },
        {
          id: "entrega",
          featured: true,
          question: "¿El precio incluye entrega en Cuba?",
          answer:
            "Sí. Las tarifas publicadas son puerta a puerta: recibimos en Hialeah Gardens y entregamos en la dirección del destinatario en Cuba, sujeto a aduana y a que los datos estén correctos.",
        },
      ],
    },
    {
      id: "contenido",
      title: "Qué se puede enviar",
      items: [
        {
          id: "productos",
          featured: true,
          question: "¿Qué productos se pueden enviar?",
          answer:
            "Alimentos no perecederos, aseo, ropa, medicinas permitidas, misceláneas y, en la oferta del martes, electrodomésticos, piezas y muebles. En cajas fijas solo alimentos, aseo, ropa y medicinas. Confirma artículos sensibles por WhatsApp antes de empacar.",
        },
        {
          id: "electrodomesticos",
          question: "¿Puedo enviar electrodomésticos?",
          answer:
            "Sí. Los martes la tarifa es $1.64/lb para electrodomésticos, piezas y muebles (mínimo 15 lb). Equipos grandes o frágiles se cotizan uno a uno. El resto de días hábiles aplica el regular $1.99/lb.",
        },
        {
          id: "prohibidos",
          question: "¿Qué artículos están prohibidos?",
          answer:
            "No se admiten armas, explosivos, drogas, dinero en efectivo, animales vivos, material pornográfico ni artículos que violen leyes de embargo o aduana cubana. Pregunta por WhatsApp antes de empacar para evitar retenciones o decomisos.",
        },
      ],
    },
    {
      id: "tracking-reclamos",
      title: "Tracking y reclamos",
      items: [
        {
          id: "rastreo",
          featured: true,
          question: "¿Cómo rastreo el paquete?",
          answer:
            "Entra a ctenvios.com/tracking e ingresa tu número de orden o HBL. Verás el estado: recibido, en tránsito, en aduana Cuba, en reparto y entregado.",
        },
        {
          id: "retraso",
          question: "¿Qué sucede si el envío se retrasa?",
          answer:
            "El marítimo puede moverse por ruta, clima o aduana. Si una etapa se queda quieta, escríbenos por WhatsApp con el tracking y el nombre del destinatario. Revisamos el caso y te decimos el siguiente paso. No prometemos una fecha fija para todos los destinos.",
        },
        {
          id: "reclamacion",
          question: "¿Cómo funciona una reclamación?",
          answer:
            "Escríbenos por WhatsApp o a soporte@ctenvios.com con el número de seguimiento, nombre del destinatario, descripción del daño o pérdida y, si puedes, fotos y prueba de valor. Las reclamaciones se presentan dentro de los 30 días posteriores a la fecha de entrega programada y se evalúan caso por caso.",
        },
      ],
    },
    {
      id: "datos-agencia",
      title: "Datos y agencia",
      items: [
        {
          id: "destinatario",
          question: "¿Qué datos necesita el destinatario?",
          answer:
            "Nombre completo, teléfono en Cuba, dirección exacta (calle, número, entre calles, municipio y provincia) y un referente si el edificio es difícil de ubicar. También necesitamos tus datos de remitente y el contenido del paquete para abrirlo.",
        },
        {
          id: "que-es",
          question: "¿Qué es CT Envios?",
          answer:
            "CT Envios es una agencia de envíos marítimos a Cuba desde Miami, en 10230 NW 80th Ave, Hialeah Gardens, FL. Tarifas por libra y cajas fijas, entrega puerta a puerta, tracking y atención por WhatsApp.",
        },
        {
          id: "seguro",
          question: "¿Ofrecen seguro?",
          answer:
            "Sí. Al cotizar puedes pedir opciones de protección. Cobertura y condiciones se confirman según el tipo de paquete.",
        },
      ],
    },
  ],
};

export function getAllFaqItems(): FaqItem[] {
  return faq.groups.flatMap((group) => group.items);
}

export function getFeaturedFaqItems(): FaqItem[] {
  return getAllFaqItems().filter((item) => item.featured);
}

export const agencies: AgenciesContent = {
  headline: "¿Quieres abrir una agencia?",
  support:
    "Sé socio de CT Envios: mejores tarifas, más clientes y una plataforma con soporte completo para crecer juntos.",
  benefits: [
    {
      id: "tarifas",
      title: "Tarifas preferenciales",
      description: "Precios exclusivos para socios.",
    },
    {
      id: "clientes",
      title: "Más clientes",
      description: "Te enviamos clientes que buscan recogida a domicilio.",
    },
    {
      id: "plataforma",
      title: "Plataforma de tracking",
      description: "Herramientas para operar con claridad.",
    },
    {
      id: "soporte",
      title: "Soporte dedicado",
      description: "Acompañamiento real para tu agencia.",
    },
    {
      id: "materiales",
      title: "Materiales y marca",
      description: "Recursos para atraer y atender clientes.",
    },
    {
      id: "crecimiento",
      title: "Crecimiento conjunto",
      description: "Escala con una red en expansión.",
    },
  ],
  cta: {
    label: "Quiero ser agencia",
    href: "https://wa.me/17542778810?text=Hola%2C%20quiero%20abrir%20una%20agencia%20CT%20Envios",
    external: true,
  },
  ctaSupport: "Crezcamos juntos.",
  image: {
    src: "/images/agencies/promo.jpg",
    alt: "Operación logística para socios CT Envios",
  },
};

export const apps: AppsContent = {
  eyebrow: "App",
  headline: "Pronto en App Store y Google Play",
  support:
    "Rastrea tu envío, consulta precios y habla con nosotros desde el celular. Las tiendas se activan cuando la app esté lista.",
  appStore: {
    label: "App Store",
    caption: "Próximamente",
    href: "",
  },
  playStore: {
    label: "Google Play",
    caption: "Próximamente",
    href: "",
  },
};

export const contact: ContactContent = {
  eyebrow: "Contacto",
  headline: "Contáctanos para obtener más información",
  support:
    "Déjanos tu correo y teléfono. Te escribimos con la cotización y el siguiente paso.",
  formTitle: "Únete a nuestra familia",
  emailPlaceholder: "Entre su correo",
  phonePlaceholder: "Entre su teléfono",
  consentLabel:
    "Acepto recibir emails y mensajes de texto con información y promociones de CT Envios.",
  submitLabel: "Enviar",
  submittingLabel: "Enviando...",
  successMessage: "Gracias. Recibimos tus datos y te contactaremos pronto.",
  consentError: "Por favor acepta el consentimiento para continuar.",
};

export const footer: FooterContent = {
  blurb:
    "Ayudamos a familias a enviar a Cuba con precios claros, tracking real y atención humana.",
  social: [
    { label: "TikTok", href: "https://www.tiktok.com/@ctenvios" },
    { label: "Instagram", href: "https://www.instagram.com/ctenvios/" },
    { label: "WhatsApp", href: "https://wa.me/17542778810" },
  ],
  legal: "CTEnvios. All Rights Reserved",
  credit: "Made with ❤️ by Valelee",
  termsLabel: "Términos y condiciones",
  termsHref: "/terms",
  privacyLabel: "Política de privacidad",
  privacyHref: "/privacy",
};

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  handle: string;
  initials: string;
  rating: number;
}

export interface TestimonialsContent {
  eyebrow: string;
  headline: string;
  support: string;
  rating: number;
  reviewCount: number;
  sourceLabel: string;
  cta: CtaLink;
  items: TestimonialItem[];
}

export const testimonials: TestimonialsContent = {
  eyebrow: "Reseñas",
  headline: "Lo que dicen quienes ya enviaron con nosotros",
  support:
    "La valoración y las reseñas están en nuestro perfil de Google. Ahí puedes leer comentarios verificables de clientes reales.",
  rating: 4.6,
  reviewCount: 118,
  sourceLabel: "Google",
  cta: {
    label: "Ver reseñas en Google",
    href: "https://www.google.com/search?q=ctenvios#mpd=~6558092595028842705/customers/reviews",
    external: true,
  },
  items: [],
};

export function getActiveOffers(): OfferItem[] {
  return offers.items.filter((item) => item.active);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}
