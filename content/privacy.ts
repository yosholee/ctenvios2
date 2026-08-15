import { site } from "@/content/landing";
import { type TermsLocaleContent } from "@/content/terms";

export interface PrivacyDocument {
  lastUpdated: string;
  es: TermsLocaleContent;
  en: TermsLocaleContent;
}

export const privacy: PrivacyDocument = {
  lastUpdated: "2026-08-15",
  es: {
    title: "Política de privacidad",
    lastUpdatedLabel: "Última actualización",
    languageButton: "English",
    sections: [
      {
        title: "1. Quiénes somos",
        content: [
          `${site.legalNote} Esta política describe cómo ${site.legalName} (“nosotros”) trata los datos personales cuando usas ctenvios.com, WhatsApp, el formulario de contacto o el tracking.`,
          `Responsable: ${site.legalName}, operando como ${site.brand}. Domicilio: ${site.fullAddress}.`,
        ],
      },
      {
        title: "2. Datos que recopilamos",
        content: [
          "Solo pedimos lo necesario para cotizar, operar el envío y responderte:",
        ],
        list: [
          "Nombre, teléfono y correo si los dejas en el formulario o por WhatsApp.",
          "Datos del remitente y del destinatario para abrir un envío.",
          "Número de orden o HBL si usas el tracking.",
          "Mensajes que nos envías y el consentimiento para emails o SMS promocionales.",
        ],
      },
      {
        title: "3. Cómo usamos la información",
        content: [
          "Usamos tus datos para cotizar, crear y entregar envíos, dar seguimiento, atender reclamos y, solo si lo aceptas, enviarte ofertas.",
          "No vendemos tu información. Podemos compartirla con proveedores que nos ayudan a operar (mensajería, hosting, aduana o transporte) y cuando la ley lo exija.",
        ],
      },
      {
        title: "4. Conservación y seguridad",
        content: [
          "Guardamos los datos el tiempo necesario para el envío, obligaciones legales y atención al cliente. Aplicamos medidas razonables para protegerlos, aunque ningún medio digital es 100% seguro.",
        ],
      },
      {
        title: "5. Tus derechos",
        content: [
          "Puedes pedir acceso, corrección o eliminación de tus datos, o retirar el consentimiento de marketing. Escríbenos a los datos de contacto de abajo. Si vives en Florida u otra jurisdicción con derechos adicionales, los respetamos en la medida que apliquen.",
        ],
      },
      {
        title: "6. Contacto de privacidad",
        content: [
          "Para preguntas sobre esta política o tus datos:",
        ],
        contact: [
          `${site.brand} / ${site.legalName}`,
          site.fullAddress,
          `Teléfono: ${site.phones[0]}`,
          `Email: ${site.email}`,
          `WhatsApp: ${site.whatsappDisplay}`,
        ],
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    lastUpdatedLabel: "Last updated",
    languageButton: "Español",
    sections: [
      {
        title: "1. Who we are",
        content: [
          `${site.legalNote} This policy explains how ${site.legalName} (“we”) handle personal data when you use ctenvios.com, WhatsApp, the contact form, or tracking.`,
          `Controller: ${site.legalName}, operating as ${site.brand}. Address: ${site.fullAddress}.`,
        ],
      },
      {
        title: "2. Data we collect",
        content: [
          "We only collect what we need to quote, ship, and reply:",
        ],
        list: [
          "Name, phone, and email if you submit the form or write on WhatsApp.",
          "Sender and recipient details to open a shipment.",
          "Order or HBL number if you use tracking.",
          "Messages you send and consent for promotional email or SMS.",
        ],
      },
      {
        title: "3. How we use information",
        content: [
          "We use your data to quote, create and deliver shipments, provide tracking, handle claims, and — only if you opt in — send offers.",
          "We do not sell your information. We may share it with vendors that help us operate (messaging, hosting, customs, or transport) and when the law requires it.",
        ],
      },
      {
        title: "4. Retention and security",
        content: [
          "We keep data as long as needed for the shipment, legal duties, and customer support. We use reasonable safeguards, though no digital channel is fully secure.",
        ],
      },
      {
        title: "5. Your rights",
        content: [
          "You may request access, correction, or deletion, or withdraw marketing consent. Contact us using the details below. If Florida or another jurisdiction gives you extra rights, we honor them as applicable.",
        ],
      },
      {
        title: "6. Privacy contact",
        content: ["For questions about this policy or your data:"],
        contact: [
          `${site.brand} / ${site.legalName}`,
          site.fullAddress,
          `Phone: ${site.phones[0]}`,
          `Email: ${site.email}`,
          `WhatsApp: ${site.whatsappDisplay}`,
        ],
      },
    ],
  },
};
