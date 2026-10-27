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
  image?: string;
  imageAlt?: string;
}

export const servicePages: ServicePageContent[] = [
  {
    slug: "envios-cuba-miami",
    eyebrow: "Agencia en Hialeah",
    title: "Envíos a Cuba desde Miami: desde $0.99/lb en Hialeah",
    description:
      "Envía paquetes a Cuba desde Hialeah Gardens: marítimo puerta a puerta desde $0.99/lb (mar–jue), cajas fijas desde $30, tracking incluido y cotización por WhatsApp.",
    intro:
      "Atendemos en 10230 NW 80th Ave, Hialeah Gardens. Envíos marítimos a toda Cuba, tarifas por libra, cajas fijas y seguimiento desde que recibimos el paquete hasta la entrega.",
    priceInfo:
      "Desde $0.99/lb martes, miércoles y jueves (alimentos, aseo, medicina, ropa y calzado). Fin de semana $1.45/lb. Lunes y viernes $1.64/lb para artículos duraderos. Regular $1.99/lb. Cajas fijas desde $30. Mínimo 15 lb en tarifas por libra.",
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
      "Regular $1.99/lb. Ofertas: martes, miércoles y jueves $0.99/lb (alimentos, aseo, medicina, ropa y calzado), fin de semana $1.45/lb, lunes y viernes $1.64/lb (artículos duraderos). Mínimo 15 lb. Cajas fijas desde $30.",
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
          "Alimentos no perecederos, aseo, ropa, medicinas permitidas, misceláneas y electrodomésticos o muebles en la oferta de lunes y viernes.",
      },
    ],
    whatsappText: "Hola, quiero cotizar un envío marítimo a Cuba.",
  },
  {
    slug: "envio-alimentos-cuba",
    eyebrow: "Alimentos",
    title: "Enviar comida y medicinas a Cuba desde $0.99/lb",
    description:
      "Envía alimentos, aseo, medicinas, ropa y calzado a Cuba desde Miami: $0.99/lb de martes a jueves o cajas fijas de $30 a $65. Entrega puerta a puerta con tracking.",
    intro:
      "Martes, miércoles y jueves la tarifa de alimentos, aseo, medicina, ropa y calzado parte de $0.99/lb (mínimo 15 lb). También puedes usar cajas fijas si el contenido es alimentos, aseo, ropa o medicinas.",
    priceInfo:
      "Martes, miércoles y jueves $0.99/lb para alimentos, aseo, medicina, ropa y calzado. Cajas 12×12×12 $30, 15×15×15 $60, 16×16×16 $65. Confirma la lista vigente antes de empacar.",
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
      "Envía electrodomésticos, piezas y muebles a Cuba. Oferta de lunes y viernes $1.64/lb para artículos duraderos, mínimo 15 lb, desde Hialeah Gardens.",
    intro:
      "Los lunes y viernes CT Envios mueve artículos duraderos — electrodomésticos, piezas y muebles — a $1.64/lb (mínimo 15 lb). Cotizamos equipos grandes uno a uno por peso y volumen.",
    priceInfo:
      "Lunes y viernes $1.64/lb para artículos duraderos (electrodomésticos, piezas y muebles). Regular $1.99/lb. Equipos voluminosos se cotizan por WhatsApp.",
    timeInfo:
      "Vía marítima. El estimado depende del destino, aduana y si el equipo requiere manejo especial.",
    benefits: [
      "Tarifa de lunes y viernes para artículos duraderos.",
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
          "Por libra (mínimo 15 lb) o por cotización si el volumen es alto. Los lunes y viernes aplica $1.64/lb a esta categoría.",
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
      "En CT Envios el envío marítimo a Cuba desde Miami parte de $0.99/lb martes, miércoles y jueves (alimentos, aseo, medicina, ropa y calzado), con mínimo 15 lb. El fin de semana está en $1.45/lb, los lunes y viernes en $1.64/lb para artículos duraderos, y el regular en $1.99/lb.",
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
    title: "¿Cuánto demora un envío marítimo a Cuba? Tiempos y claves",
    description:
      "El tiempo de un envío marítimo a Cuba depende de la ruta, la aduana y tu provincia. Qué lo acorta, qué lo demora y cómo pedir un estimado real para tu destino.",
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
    title: "Cómo rastrear un envío a Cuba: tracking por orden o HBL",
    description:
      "Rastrea tu paquete a Cuba en minutos: entra al tracking de CT Envios con tu número de orden o HBL y mira recibido, en tránsito, aduana, en reparto y entregado.",
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
  {
    slug: "enviar-planta-electrica-a-cuba-desde-miami",
    title: "Cómo enviar una planta eléctrica a Cuba desde Miami",
    description:
      "Guía para enviar una planta eléctrica (generador) a Cuba: qué confirmar antes, empaque, tarifa de lunes y viernes para artículos duraderos y tracking puerta a puerta.",
    publishedAt: "2026-10-23",
    readTime: "5 min",
    paragraphs: [
      "Las plantas eléctricas están entre los equipos más pedidos para Cuba. En CT Envios se cotizan como electrodomésticos: antes de empacar, confirma por WhatsApp la marca, los watts y si el modelo se puede transportar por vía marítima, porque no todos los equipos ni todas las baterías se aceptan igual.",
      "Los lunes y viernes aplica la oferta de artículos duraderos — electrodomésticos, piezas y muebles — desde $1.64/lb, con mínimo de 15 lb. El resto de días hábiles aplica la tarifa regular de $1.99/lb. Los equipos grandes o voluminosos se cotizan uno a uno por peso y volumen, así que la foto y las medidas ayudan a darte un precio cerrado.",
      "Empaca la planta en su caja original si la tienes, protegida por los cuatro lados y sin combustible. Retira o asegura cualquier pieza suelta, protege el panel de controles y declara el equipo con nombre concreto, marca y potencia. Evita descripciones genéricas: una declaración clara reduce revisiones en aduana.",
      "No des por hecho un tiempo de entrega fijo. El envío va por vía marítima y el estimado depende de la provincia de destino, la aduana y si el equipo requiere manejo especial. Al cotizar te damos el estimado para tu destino, no un promedio genérico.",
      "Cuando el paquete entra en agencia en Hialeah Gardens recibes tu número de orden o HBL. Con ese número sigues el envío en ctenvios.com/tracking: recibido, en tránsito, en aduana en Cuba, en reparto y entregado en la puerta del destinatario.",
      "Antes de comprar la planta, escríbenos por WhatsApp con el enlace o la foto del modelo. Confirmarlo en Miami es más barato y más rápido que resolver una retención en aduana en Cuba.",
    ],
  },
  {
    slug: "cambios-aduana-cuba-2026-importaciones-viajeros-aranceles",
    title: "Aduana de Cuba: nuevos aranceles e importaciones para viajeros en 2026",
    description:
      "Desde el 12 de octubre de 2026 el exceso sobre los límites no comerciales ya no se decomisa automático: se puede formalizar como importación comercial pagando aranceles progresivos en USD. Qué cambió y qué sigue igual.",
    publishedAt: "2026-10-23",
    readTime: "6 min",
    paragraphs: [
      "La Aduana de Cuba actualizó las reglas para las importaciones de las personas naturales. Las nuevas disposiciones se publicaron en la Edición Ordinaria No. 83 de la Gaceta Oficial e incluyen el Decreto-Ley 132/2026, la Resolución 197/2026 del Ministerio de Finanzas y Precios y la Resolución 340/2026 de la Aduana General de la República. Entraron en vigor el 12 de octubre de 2026 y cambian, sobre todo, lo que ocurre cuando un viajero o un envío supera los límites de la importación no comercial.",
      "El cambio principal es una alternativa al decomiso. Hasta ahora, lo que excedía los límites vigentes (1 000 USD para pasajeros y 500 USD para envíos) normalmente se perdía. Con la nueva norma, cuando la Aduana determine que hay excesos o que las mercancías tienen carácter comercial, el titular puede optar por formalizar esa parte como importación comercial mediante un nuevo despacho, pagando los aranceles y servicios correspondientes en dólares estadounidenses (USD). Esto se hace por la vía no comercial y no constituye una actividad de comercio exterior.",
      "Así funciona en la práctica: primero la Aduana despacha los artículos que sí caben como importación no comercial, dentro de los límites y cantidades permitidos. El resto puede pasar al nuevo procedimiento comercial si el titular lo acepta y paga. También existe la opción de solicitar el reembarque de las mercancías. Si la persona no formaliza la importación ni pide el reembarque, se aplica la medida administrativa que corresponda. Ojo: el decomiso se mantiene para productos de importación prohibida, declaración fraudulenta y los demás casos previstos en la ley.",
      "Los aranceles para viajeros en este despacho comercial son progresivos, según el valor de las mercancías: 15 % hasta 2 000 USD; 20 % sobre el exceso de esa cifra hasta 4 000 USD; 25 % entre 4 000 y 6 000 USD; y 30 % sobre lo que supere los 6 000 USD. Para las mercancías importadas mediante envíos, el arancel es fijo: 30 %. Un ejemplo simple: un exceso valorado en 3 000 USD pagaría 300 USD por el primer tramo (15 % de 2 000) más 200 USD por el segundo (20 % de 1 000), en total 500 USD de arancel, más el servicio aduanero.",
      "El pago se hace en USD con tarjetas nacionales o internacionales. El efectivo solo se acepta en los aeropuertos y a través de las entidades habilitadas para ello. Además del arancel hay tarifas máximas por los servicios aduaneros: comienzan en 2 USD para envíos de hasta 200 USD y llegan hasta 50 USD cuando el valor de las mercancías supera los 6 000 USD. Estas importaciones comerciales pagan aunque la misma mercancía tenga algún beneficio fiscal en otro régimen: las exenciones anteriores no aplican en este despacho.",
      "Lo que no cambia es igual de importante. El régimen de importación no comercial sigue como estaba: los equipajes y envíos personales dentro de sus límites mantienen su tratamiento y sus pagos en pesos cubanos, y no hay una obligación general de pagar en dólares por viajar a Cuba. También sigue vigente el beneficio para alimentos, aseo, medicamentos e insumos médicos en el equipaje acompañado, presentados en bultos separados del resto: las normas de octubre no modifican ese régimen, que se rige por sus propias resoluciones.",
      "La Resolución 340/2026 fija además los valores de referencia y las reglas para determinar el carácter comercial, con cantidades máximas para artículos como los teléfonos celulares o inteligentes (hasta cinco unidades) y los equipos de cómputo (hasta tres, independientemente del tipo). Como novedad, permite importar por única vez un auto o auto rural totalmente eléctrico por equipaje no acompañado o envío, exonerado del impuesto aduanero si viene con su estación de carga alimentada por energía renovable, aunque se paga el servicio correspondiente. Y advierte que repetir importaciones de las mismas mercancías puede llevar a que la Aduana limite por un período el derecho a importar.",
      "Para quien envía paquetes a Cuba desde Miami la lección es clara: el exceso ya no es automáticamente una pérdida, pero puede salir caro si se clasifica como comercial, porque en envíos se paga el 30 % en USD. Declara cada artículo con nombre concreto y cantidades razonables para uso familiar, separa alimentos, aseo y medicinas del resto, y evita mezclar muchas unidades idénticas. Antes de cerrar tu caja o de viajar, confirma tu caso por WhatsApp con CT Envios: revisamos contenido, cantidades y la vía que más te conviene según las reglas vigentes.",
    ],
  },
  {
    slug: "enviar-barato-a-cuba-en-halloween",
    title: "Cómo enviar barato a Cuba en Halloween (y con quién)",
    description:
      "Guía de Halloween para enviar a Cuba sin asustar tu bolsillo: $0.99/lb de martes a jueves, cajas fijas desde $30 y la EcoFlow a $559.00 puesta en Cuba, con CT Envios en Hialeah Gardens.",
    publishedAt: "2026-10-27",
    readTime: "4 min",
    image: "/images/blog/halloween-enviar-barato-cuba.webp",
    imageAlt:
      "Súper oferta de Halloween de CT Envios: $0.99 por libra martes, miércoles y jueves en alimentos, aseo, medicina, ropa y calzado, mínimo 15 lb, precio regular $1.99",
    paragraphs: [
      "Llega Halloween y entre disfraces y calabazas hay un susto que nadie quiere: el precio de enviar un paquete a Cuba. La buena noticia es que enviar barato no depende de la temporada, depende del día en que traes tu caja y de con quién la envías. En CT Envios, en Hialeah Gardens, la semana de Halloween se envía desde $0.99/lb.",
      "La oferta fuerte de la semana: martes, miércoles y jueves los alimentos, el aseo, las medicinas, la ropa y el calzado salen a $0.99/lb, con mínimo de 15 lb. Es la mitad del precio regular de $1.99/lb. Si tu familia necesita comida, medicina, productos de aseo, ropa o zapatos, esos tres días son el momento de traer el paquete.",
      "¿No puedes entre semana? El sábado y el domingo la tarifa de fin de semana es $1.45/lb para todos los productos, de 10:00 AM a 4:00 PM. Y los lunes y viernes los artículos duraderos tienen su propia oferta: $1.64/lb para electrodomésticos, piezas y muebles.",
      "Si no quieres calcular libras, usa una caja fija y paga un solo precio: 12×12×12 por $30, 15×15×15 por $60 o 16×16×16 por $65. En las cajas fijas solo va alimentos, aseo, ropa y medicinas, con entrega en la puerta y número de tracking incluido.",
      "El regalo de Halloween que de verdad resuelve en Cuba es la energía: la EcoFlow Delta 3 Classic está en $559.00 puesta en Cuba, con disponibilidad limitada. Es la planta que se está llevando todo el mundo para los apagones: 1024 Wh, carga rápida y sin ruido ni gasolina. Se reserva por WhatsApp.",
      "Tres trucos para que el total baje más: junta todo en un solo envío hasta pasar el mínimo de 15 lb en vez de mandar paquetes chicos por separado; declara cada artículo con su nombre concreto (nada de “misceláneas”), porque una declaración clara evita revisiones y demoras en aduana; y separa en un bulto aparte los alimentos, el aseo y las medicinas.",
      "¿Y con quién enviar? Busca tres cosas: precio publicado sin letra pequeña, tracking real y entrega puerta a puerta. CT Envios tiene 4.7 estrellas y 126 reseñas en Google, publica todas sus tarifas en ctenvios.com y cada envío se sigue en ctenvios.com/tracking con el número de orden o el HBL, sin registrarse.",
      "Estamos en 10230 NW 80th Ave, Hialeah Gardens, FL 33016. Abrimos de lunes a viernes de 9:00 AM a 6:00 PM y sábado y domingo de 10:00 AM a 4:00 PM. Escríbenos por WhatsApp al (754) 277-8810 con la lista o la foto de tu paquete y te cotizamos hoy mismo. Que este Halloween el único susto sea el de los disfraces.",
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
    support: "Mar, mié y jue desde $0.99/lb. Alimentos, aseo, medicina, ropa y calzado.",
  },
  {
    label: "Electrodomésticos",
    href: "/envio-electrodomesticos-cuba",
    support: "Lunes y viernes $1.64/lb. Artículos duraderos.",
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
