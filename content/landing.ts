export interface NavLink {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
  external?: boolean;
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
  mapsUrl: string;
  whatsappUrl: string;
  trackingUrl: string;
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
  badge: string;
}

export interface BoxesContent {
  eyebrow: string;
  headline: string;
  support: string;
  allowedItems: string[];
  ctaLabel: string;
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
}

export interface FaqGroup {
  id: string;
  title: string;
  items: FaqItem[];
}

export interface FaqContent {
  headline: string;
  support: string;
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

export interface FooterContent {
  blurb: string;
  social: NavLink[];
}

export const site: SiteContent = {
  brand: "CT Envios",
  logoSrc: "/brand/logo.webp",
  tagline: "Tu aliado en cada envío",
  title: "Envíos a Cuba desde Miami | Precios claros y tracking | CT Envios",
  description:
    "Envía a Cuba desde Miami con CT Envios: tarifas desde $0.99/lb, cajas fijas, tracking en tiempo real y atención por WhatsApp en Hialeah Gardens. Cotiza hoy.",
  phones: ["(305) 851-3004", "(754) 313-3140"],
  whatsappDisplay: "(754) 277-8810",
  email: "soporte@ctenvios.com",
  address: "10230 NW 80th Ave",
  city: "Hialeah Gardens, FL 33016",
  mapsUrl: "https://maps.google.com/?q=10230+NW+80th+Ave+Hialeah+Gardens+FL",
  whatsappUrl: "https://wa.me/17542778810",
  trackingUrl: "/tracking",
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Precios", href: "/#ofertas" },
    { label: "Cajas", href: "/#cajas" },
    { label: "Reseñas", href: "/#reseñas" },
    { label: "Tracking", href: "/tracking" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contacto", href: "/#contacto" },
  ],
};

export const hero: HeroContent = {
  eyebrow: "Rápidos. Claros. Reales.",
  headline: "Envíos a Cuba desde Miami: rápidos y confiables",
  highlight: "con precios bajos y tracking real",
  support:
    "CT Envios es tu agencia de envíos a Cuba en Hialeah. Trabajamos envíos marítimos con entrega puerta a puerta, tracking y atención personalizada por WhatsApp.",
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
  headline: "Envía por caja, sin complicarte",
  support:
    "Elige el tamaño, paga tarifa fija y listo. Solo se admite Alimentos, Aseo, Ropa y Medicinas.",
  allowedItems: ["Alimentos", "Aseo", "Ropa", "Medicinas"],
  ctaLabel: "Cotizar caja",
  items: [
    {
      id: "box-12",
      sizeLabel: "Caja 12×12×12",
      dimensions: "12x12x12",
      category: "Alimentos, Aseo, Ropa y Medicinas",
      price: 30.00,
      badge: "FIXED",
    },
    {
      id: "box-15",
      sizeLabel: "Caja 15×15×15",
      dimensions: "15x15x15",
      category: "Alimentos, Aseo, Ropa y Medicinas",
      price: 60.00,
      badge: "FIXED",
    },
    {
      id: "box-16",
      sizeLabel: "Caja 16×16×16",
      dimensions: "16x16x16",
      category: "Alimentos, Aseo, Ropa y Medicinas",
      price: 65.00,
      badge: "FIXED",
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

export const faq: FaqContent = {
  headline: "Preguntas frecuentes",
  support: "Respuestas claras antes de enviar tu paquete.",
  image: {
    src: "/images/faq/model.png",
    alt: "Cliente CT Envios con caja de envío lista para Cuba",
  },
  groups: [
    {
      id: "general",
      title: "Información general",
      items: [
        {
          id: "que-es",
          question: "¿Qué es CT Envios?",
          answer:
            "CT Envios es una agencia de envíos marítimos a Cuba desde Miami, con sede en Hialeah Gardens, FL. Ofrecemos tarifas por libra y cajas fijas, entrega puerta a puerta, tracking en tiempo real y atención personalizada por WhatsApp.",
        },
        {
          id: "tiempo",
          question: "¿Qué tiempo demora un envío a Cuba?",
          answer:
            "El tiempo depende de la ruta marítima y de los tiempos de aduana en Cuba. No hay un plazo fijo para todos los paquetes. Al cotizar por WhatsApp te damos un estimado según el tipo de carga, destino y oferta del día.",
        },
        {
          id: "peso",
          question: "¿Cuál es el peso mínimo o máximo?",
          answer:
            "Las ofertas semanales de CT Envios suelen tener un mínimo de 15 libras. El máximo permitido depende del tipo de producto (alimentos, aseo, electrodomésticos, etc.). Confírmalo al cotizar antes de empacar.",
        },
        {
          id: "precios",
          question: "¿Cuánto cuesta enviar a Cuba con CT Envios?",
          answer:
            "Las tarifas por libra van desde $0.99/lb los jueves (alimentos, medicina y aseo) hasta $1.99/lb en precio regular, con mínimo de 15 lb. También hay cajas fijas desde $30. Consulta /pricing.md o la sección de precios del sitio para el detalle actualizado.",
        },
      ],
    },
    {
      id: "seguridad",
      title: "Restricciones y seguridad",
      items: [
        {
          id: "prohibidos",
          question: "¿Qué artículos están prohibidos?",
          answer:
            "No se admiten artículos restringidos por aduana cubana ni por la normativa de transporte. Pregúntanos por WhatsApp antes de empacar para evitar demoras, decomisos o costos extra. En cajas fijas solo se admiten Alimentos, Aseo, Ropa y Medicinas.",
        },
        {
          id: "seguro",
          question: "¿Ofrecen seguro?",
          answer:
            "Sí. CT Envios ofrece opciones de protección al cotizar tu envío. Pregunta por cobertura y condiciones cuando escribas por WhatsApp con el detalle de tu paquete.",
        },
      ],
    },
    {
      id: "seguimiento",
      title: "Seguimiento",
      items: [
        {
          id: "rastrear",
          question: "¿Cómo rastreo mi paquete?",
          answer:
            "Ingresa tu número de tracking en /tracking o usa tu número de orden/HBL. Verás el estado actualizado: recibido, en tránsito, en aduana Cuba, en reparto y entregado.",
        },
        {
          id: "danado",
          question: "¿Qué hago si hay un problema con mi envío?",
          answer:
            "Escríbenos por WhatsApp con el número de tracking, nombre del destinatario y una descripción clara del caso. El equipo de CT Envios te orienta sobre el siguiente paso según el estado del paquete.",
        },
      ],
    },
  ],
};

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

export const footer: FooterContent = {
  blurb:
    "Ayudamos a familias a enviar a Cuba con precios claros, tracking real y atención humana.",
  social: [
    { label: "Facebook", href: "https://www.facebook.com/ctenvios" },
    { label: "WhatsApp", href: "https://wa.me/17542778810" },
  ],
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
    "Atención por WhatsApp, tracking claro y entrega puerta a puerta: así nos evalúan en Google.",
  rating: 4.6,
  reviewCount: 118,
  sourceLabel: "Google",
  cta: {
    label: "Ver reseñas en Google",
    href: "https://www.google.com/search?q=ctenvios#mpd=~6558092595028842705/customers/reviews",
    external: true,
  },
  items: [
    {
      id: "atencion",
      quote:
        "Excelente atención. Siempre están pendientes y responden por WhatsApp en minutos. Cotizan claro y sin rodeos.",
      name: "María González",
      handle: "Reseña en Google",
      initials: "MG",
      rating: 5,
    },
    {
      id: "tracking",
      quote:
        "Me gusta poder seguir el paquete paso a paso. Desde que salió de Hialeah hasta que llegó a Cuba, todo transparente.",
      name: "Carlos Pérez",
      handle: "Reseña en Google",
      initials: "CP",
      rating: 5,
    },
    {
      id: "ontime",
      quote:
        "Mis paquetes llegan a tiempo y en buen estado. Ya es la tercera vez que envío con CT Envios y los recomiendo.",
      name: "Ana Rodríguez",
      handle: "Reseña en Google",
      initials: "AR",
      rating: 5,
    },
    {
      id: "precio",
      quote:
        "Buenos precios por libra y ofertas reales los fines de semana. Atención amable en la agencia de Hialeah Gardens.",
      name: "Luis Fernández",
      handle: "Reseña en Google",
      initials: "LF",
      rating: 5,
    },
    {
      id: "puerta",
      quote:
        "Envío puerta a puerta sin complicaciones. Me ayudaron con el contenido permitido y el paquete llegó completo.",
      name: "Patricia Díaz",
      handle: "Reseña en Google",
      initials: "PD",
      rating: 5,
    },
    {
      id: "confianza",
      quote:
        "Servicio confiable para enviar a la familia. Precios claros, tracking y gente que de verdad ayuda.",
      name: "José Martínez",
      handle: "Reseña en Google",
      initials: "JM",
      rating: 5,
    },
  ],
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
