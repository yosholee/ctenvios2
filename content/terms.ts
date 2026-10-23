export interface TermsSection {
  title: string;
  content: string[];
  list?: string[];
  afterList?: string[];
  contact?: string[];
}

export interface TermsLocaleContent {
  title: string;
  lastUpdatedLabel: string;
  languageButton: string;
  sections: TermsSection[];
}

export interface TermsDocument {
  lastUpdated: string;
  es: TermsLocaleContent;
  en: TermsLocaleContent;
}

export const termsLanguage = {
  es: "es",
  en: "en",
} as const;

export type TermsLanguage = (typeof termsLanguage)[keyof typeof termsLanguage];

export const terms: TermsDocument = {
  lastUpdated: "2026-10-23",
  es: {
    title: "Términos y Condiciones",
    lastUpdatedLabel: "Última actualización",
    languageButton: "English",
    sections: [
      {
        title: "1. Introducción",
        content: [
          "Bienvenido a CT Envios, marca de Atlas Logistics (en adelante, “CT Envios”, “nosotros”). Estos términos y condiciones rigen el uso de nuestros servicios de envío internacional desde los Estados Unidos hacia Cuba, incluyendo nuestro sitio web, aplicaciones móviles y todos los servicios relacionados.",
          "Al utilizar nuestros servicios, usted acepta estos términos en su totalidad y certifica que la información que proporciona sobre el remitente, el destinatario y el contenido de cada envío es completa y veraz. Si no está de acuerdo, no debe utilizar nuestros servicios.",
          "Nuestros servicios están sujetos en todo momento a las leyes y regulaciones de los Estados Unidos aplicables a Cuba. Ninguna disposición de estos términos autoriza una transacción que esté prohibida por dichas normas.",
        ],
      },
      {
        title: "2. Servicios de Envío",
        content: [
          "CT Envios ofrece servicios de logística internacional especializados en envíos de carga marítima a Cuba y, cuando se ofrezcan expresamente, servicios aéreos.",
          "Nos comprometemos a entregar sus paquetes hasta la puerta de su destinatario en Cuba, sujeto a las regulaciones aduaneras y restricciones aplicables de los Estados Unidos y de Cuba.",
          "Los tiempos de entrega son estimados y pueden variar según factores externos como condiciones climáticas, procedimientos aduaneros, inspecciones de autoridades y situaciones fuera de nuestro control.",
        ],
      },
      {
        title: "3. Cumplimiento de las Sanciones y los Controles de Exportación de los EE. UU.",
        content: [
          "Los envíos a Cuba están regulados, entre otras normas, por las Regulaciones de Control de Activos Cubanos (Cuban Assets Control Regulations, CACR), 31 CFR Parte 515, administradas por la Oficina de Control de Activos Extranjeros (OFAC) del Departamento del Tesoro, y por las Regulaciones de Administración de Exportaciones (Export Administration Regulations, EAR), 15 CFR Partes 730-774, administradas por la Oficina de Industria y Seguridad (BIS) del Departamento de Comercio.",
          "CT Envios solo procesa envíos que estén autorizados por una licencia general o una excepción de licencia aplicable, o amparados por una licencia específica válida de OFAC o de BIS. Los artículos que no puedan determinarse como autorizados no serán aceptados hasta completar la revisión correspondiente.",
          "Podemos revisar al remitente, al destinatario, a los beneficiarios y el contenido de cada envío frente a las listas oficiales de los Estados Unidos, incluyendo la Lista de Nacionales Especialmente Designados y Personas Bloqueadas (SDN) de OFAC, las listas de personas y entidades denegadas de BIS y la Lista de Entidades y Subentidades Restringidas Asociadas con Cuba (Cuba Restricted List) del Departamento de Estado.",
          "De conformidad con 31 CFR 515.209, está prohibido realizar transacciones financieras directas o indirectas con entidades o subentidades incluidas en la Cuba Restricted List, así como cualquier transacción que tenga el propósito o el efecto de evadir esa prohibición (31 CFR 515.201). CT Envios no procesará pagos, envíos ni servicios vinculados a dichas entidades.",
          "Nos reservamos el derecho de rechazar, retener, cancelar o devolver cualquier envío, y de suspender cuentas, cuando exista una sospecha razonable de violación de las sanciones, los controles de exportación u otras leyes aplicables, y de reportar la operación a la autoridad competente cuando la ley lo requiera.",
        ],
      },
      {
        title: "4. Paquetes de Regalo y Envíos Personales (Licencia Excepción GFT)",
        content: [
          "Gran parte de los envíos personales a Cuba se realiza como paquetes de regalo al amparo de la Excepción de Licencia GFT de BIS, 15 CFR 740.12. Para calificar bajo GFT, el envío debe cumplir, entre otras, las siguientes condiciones:",
        ],
        list: [
          "El destinatario debe ser una persona individual, o una organización religiosa, caritativa o educativa, y los artículos son para uso del destinatario o de su familia inmediata, nunca para reventa.",
          "El paquete se entrega al destinatario sin costo por los artículos; el pago por este de cargos de manipulación o de aranceles e impuestos de Cuba no afecta esa condición.",
          "Solo pueden incluirse artículos elegibles, en cantidades que normalmente se regalan entre individuos: alimentos (incluidas vitaminas), medicinas, suministros y dispositivos médicos, ropa, artículos de higiene personal y demás artículos típicos de regalo entre personas, incluidos los dispositivos de comunicaciones al consumidor previstos en 15 CFR 740.19(b).",
          "El valor minorista total en los EE. UU. de los artículos de un paquete de regalo no puede exceder USD 800. Este límite no aplica a los alimentos enviados en un paquete de regalo a Cuba.",
          "Salvo los paquetes de regalo de alimentos, que no tienen límite de frecuencia, un mismo remitente no puede enviar más de un paquete de regalo al mismo destinatario en un mismo mes calendario.",
          "Cada paquete debe mostrar en el exterior el nombre y la dirección del remitente y del destinatario, la anotación “GIFT — Export License Not Required” en el lado de la dirección y el símbolo “GFT” en la declaración de aduana correspondiente.",
        ],
        afterList: [
          "Los envíos que no califiquen bajo GFT solo podrán procesarse si están autorizados por otra excepción de licencia de las EAR (por ejemplo, SCP o CCD, según el artículo y el destinatario) o por una licencia específica. CT Envios determinará la vía de autorización antes de aceptar el envío y podrá solicitar documentación adicional.",
        ],
      },
      {
        title: "5. Destinatarios No Elegibles",
        content: [
          "No se aceptan envíos, remesas vinculadas ni servicios cuando el destinatario, beneficiario o usuario final sea:",
        ],
        list: [
          "Funcionarios del Gobierno de Cuba incluidos en 15 CFR 740.12(a)(2)(v), entre ellos: ministros y viceministros; miembros del Consejo de Estado o del Consejo de Ministros; miembros y empleados de la Asamblea Nacional del Poder Popular y de las asambleas provinciales; jefes de sector locales de los Comités de Defensa de la Revolución; directores generales y subdirectores generales o superiores de ministerios y agencias estatales; empleados del Ministerio del Interior (MININT) o del Ministerio de las Fuerzas Armadas Revolucionarias (MINFAR); secretarios de la Central de Trabajadores de Cuba (CTC) y sus sindicatos; editores jefes, editores y subeditores de medios estatales; y miembros y empleados del Tribunal Supremo.",
          "Miembros del Buró Político del Partido Comunista de Cuba, ni funcionarios prohibidos del Gobierno de Cuba (31 CFR 515.337) o miembros prohibidos del Partido Comunista de Cuba (31 CFR 515.338), según aplique a la transacción.",
          "Organizaciones administradas o controladas por el Gobierno de Cuba o por el Partido Comunista de Cuba.",
          "Personas o entidades incluidas en la Lista SDN de OFAC, en las listas de denegados de BIS, o entidades y subentidades de la Cuba Restricted List.",
        ],
      },
      {
        title: "6. Artículos Prohibidos y Restringidos",
        content: [
          "Están prohibidos en todo envío, entre otros:",
        ],
        list: [
          "Artículos de la Lista de Control de Comercio (Commerce Control List, 15 CFR Parte 774) no autorizados para paquetes de regalo, y artículos controlados por motivos de armas químicas y biológicas, tecnología de misiles, seguridad nacional, no proliferación nuclear o encriptación.",
          "Armas de fuego, explosivos, municiones y ropa de vestir militar, aunque se retiren insignias o marcas.",
          "Oro en lingotes, taels o barras; drogas ilegales y narcóticos; y artículos destinados a la reventa o reexportación dentro de un paquete de regalo.",
          "Dinero en efectivo e instrumentos monetarios no autorizados, animales vivos y productos perecederos sin el embalaje adecuado.",
          "Materiales peligrosos y otros artículos prohibidos por las normas del transportista, por la ley de los Estados Unidos o por la ley de Cuba.",
        ],
        afterList: [
          "Artículos como equipos de telecomunicaciones e informática, baterías de litio, electrodomésticos de alta potencia, vehículos y sus partes, y equipos médicos regulados están sujetos a revisión previa y pueden requerir clasificación de exportación, una autorización adicional o no ser aceptados. Confirme siempre los artículos sensibles con CT Envios antes de empacar.",
        ],
      },
      {
        title: "7. Declaración Veraz, Inspección y Registros",
        content: [
          "El remitente debe declarar cada artículo con su nombre concreto, cantidad y valor real. Las descripciones genéricas (por ejemplo, “misceláneas”) no son aceptadas. Una declaración falsa u omisión puede constituir una violación de las leyes de los Estados Unidos y de Cuba y dar lugar a decomiso, sanciones y la terminación del servicio.",
          "CT Envios se reserva el derecho de inspeccionar los paquetes para verificar su contenido y su conformidad con la declaración, y de exigir identificación del remitente, comprobantes de valor y cualquier documento necesario para el despacho.",
          "Usted autoriza a CT Envios a actuar como su agente para preparar y presentar la información de exportación que exija la ley de los EE. UU., incluida, cuando corresponda, la presentación electrónica en el Automated Export System (AES). Conservaremos los registros de cada transacción durante al menos diez (10) años, conforme a los requisitos de OFAC (31 CFR 501.601), y los pondremos a disposición de las autoridades de los EE. UU. cuando lo requieran.",
        ],
      },
      {
        title: "8. Reglas de Importación de Cuba",
        content: [
          "La entrada de mercancías a Cuba se rige por la Aduana General de la República de Cuba y es un régimen distinto al de exportación de los EE. UU. Los límites, cantidades, valores de referencia y aranceles de importación no comercial de Cuba —incluidas las disposiciones vigentes desde octubre de 2026 que permiten formalizar excesos como importación comercial con pago en USD— son determinados por las autoridades cubanas y pueden cambiar sin aviso.",
          "Los aranceles, impuestos y cargos de Cuba no están incluidos en nuestras tarifas salvo que se indique expresamente por escrito. CT Envios no es responsable de retenciones, decomisos o cargos decididos por la Aduana de Cuba cuando el envío cumple la declaración del remitente.",
        ],
      },
      {
        title: "9. Tarifas y Pagos",
        content: [
          "Las tarifas de envío se calculan según el peso y/o volumen del paquete y el método de envío seleccionado. Todos los precios están sujetos a cambios sin previo aviso.",
          "El pago debe realizarse por completo antes de que se procese el envío. No aceptaremos pagos originados en, destinados a, o que involucren directa o indirectamente a personas bloqueadas o a entidades de la Cuba Restricted List.",
          "Si un envío es rechazado por incumplimiento de estos términos o de la ley aplicable, podrán aplicarse los cargos incurridos hasta ese momento.",
        ],
      },
      {
        title: "10. Seguimiento y Entrega",
        content: [
          "Proporcionamos un número de seguimiento para cada envío. La entrega se realizará a la dirección proporcionada por el remitente, quien es responsable de que los datos del destinatario sean precisos y completos.",
          "En caso de que no se pueda realizar la entrega por información incorrecta o incompleta, se aplicarán cargos adicionales por reintento de entrega.",
        ],
      },
      {
        title: "11. Seguro y Responsabilidad",
        content: [
          "Ofrecemos opciones de seguro para proteger sus envíos contra pérdida o daño. Recomendamos asegurar todos los envíos de valor.",
          "Sin seguro adicional, nuestra responsabilidad por pérdida o daño está limitada según lo establecido por las convenciones internacionales de transporte aplicables.",
          "CT Envios no será responsable por retrasos, retenciones o decomisos causados por procedimientos aduaneros, inspecciones, decisiones de autoridades de los EE. UU. o de Cuba, condiciones climáticas, o cualquier otra circunstancia fuera de nuestro control razonable. El seguro no cubre decomisos derivados del incumplimiento del remitente.",
        ],
      },
      {
        title: "12. Reclamaciones",
        content: [
          "Las reclamaciones por daños o pérdidas deben presentarse dentro de los 30 días posteriores a la fecha de entrega programada, con el número de seguimiento, prueba de valor y documentación de respaldo.",
          "Las reclamaciones serán evaluadas caso por caso y la compensación se determinará según nuestras políticas de seguro y responsabilidad.",
        ],
      },
      {
        title: "13. Privacidad de Datos",
        content: [
          "Recopilamos y procesamos la información personal necesaria para proporcionar nuestros servicios, realizar las revisiones de cumplimiento descritas en estos términos y cumplir la ley, de acuerdo con nuestra Política de Privacidad.",
          "Al utilizar nuestros servicios, usted consiente la recopilación y el uso de su información según lo descrito en nuestra Política de Privacidad, incluyendo su divulgación a transportistas y autoridades cuando sea necesario o legalmente requerido.",
        ],
      },
      {
        title: "14. Modificaciones y Cambios de Ley",
        content: [
          "CT Envios se reserva el derecho de modificar estos términos en cualquier momento; las modificaciones entrarán en vigor tras su publicación en nuestro sitio web.",
          "Los cambios en las leyes, regulaciones, listas oficiales o criterios de las autoridades de los EE. UU. o de Cuba se aplican de inmediato, aunque estos términos aún no hayan sido actualizados. Es responsabilidad del usuario revisarlos periódicamente.",
        ],
      },
      {
        title: "15. Ley Aplicable",
        content: [
          "Estos términos se regirán e interpretarán de acuerdo con las leyes de los Estados Unidos y del Estado de Florida, sin tener en cuenta sus disposiciones sobre conflictos de leyes.",
          "Cualquier disputa que surja en relación con estos términos será sometida a la jurisdicción exclusiva de los tribunales del Condado de Miami-Dade, Florida.",
        ],
      },
      {
        title: "16. Contacto",
        content: [
          "Si tiene alguna pregunta sobre estos términos y condiciones, por favor contáctenos:",
        ],
        contact: [
          "CT Envios",
          "10230 NW 80th Ave, Hialeah Gardens, FL 33016",
          "Teléfono: (305) 851-3004",
          "Email: soporte@ctenvios.com",
          "WhatsApp: +1 754 277 8810",
        ],
      }
    ],
  },
  en: {
    title: "Terms and Conditions",
    lastUpdatedLabel: "Last updated",
    languageButton: "Español",
    sections: [
      {
        title: "1. Introduction",
        content: [
          "Welcome to CT Envios, a brand of Atlas Logistics (hereinafter, “CT Envios”, “we”). These terms and conditions govern the use of our international shipping services from the United States to Cuba, including our website, mobile applications, and all related services.",
          "By using our services, you agree to these terms in full and certify that the information you provide about the sender, the recipient, and the contents of each shipment is complete and truthful. If you do not agree, you must not use our services.",
          "Our services are subject at all times to the laws and regulations of the United States applicable to Cuba. Nothing in these terms authorizes a transaction that is prohibited by those rules.",
        ],
      },
      {
        title: "2. Shipping Services",
        content: [
          "CT Envios offers international logistics services specializing in maritime cargo shipments to Cuba and, when expressly offered, air services.",
          "We are committed to delivering your packages to your recipient's door in Cuba, subject to applicable customs regulations and restrictions of the United States and Cuba.",
          "Delivery times are estimates and may vary due to external factors such as weather conditions, customs procedures, inspections by authorities, and situations beyond our control.",
        ],
      },
      {
        title: "3. Compliance with U.S. Sanctions and Export Controls",
        content: [
          "Shipments to Cuba are regulated, among other rules, by the Cuban Assets Control Regulations (CACR), 31 CFR Part 515, administered by the Office of Foreign Assets Control (OFAC) of the U.S. Department of the Treasury, and by the Export Administration Regulations (EAR), 15 CFR Parts 730-774, administered by the Bureau of Industry and Security (BIS) of the U.S. Department of Commerce.",
          "CT Envios only processes shipments that are authorized by an applicable general license or license exception, or covered by a valid specific license from OFAC or BIS. Items that cannot be determined to be authorized will not be accepted until the corresponding review is completed.",
          "We may screen the sender, the recipient, beneficiaries, and the contents of each shipment against official U.S. lists, including OFAC's Specially Designated Nationals and Blocked Persons List (SDN List), BIS denied persons and entity lists, and the U.S. Department of State's List of Restricted Entities and Subentities Associated with Cuba (Cuba Restricted List).",
          "Pursuant to 31 CFR 515.209, direct or indirect financial transactions with entities or subentities on the Cuba Restricted List are prohibited, as is any transaction that has the purpose or effect of evading that prohibition (31 CFR 515.201). CT Envios will not process payments, shipments, or services linked to such entities.",
          "We reserve the right to refuse, hold, cancel, or return any shipment, and to suspend accounts, where there is a reasonable suspicion of a violation of sanctions, export controls, or other applicable laws, and to report the transaction to the competent authority where required by law.",
        ],
      },
      {
        title: "4. Gift Parcels and Personal Shipments (License Exception GFT)",
        content: [
          "Most personal shipments to Cuba are sent as gift parcels under BIS License Exception GFT, 15 CFR 740.12. To qualify under GFT, a shipment must meet, among others, the following conditions:",
        ],
        list: [
          "The recipient must be an individual, or a religious, charitable, or educational organization, and the items are for the use of the recipient or the recipient's immediate family, never for resale.",
          "The parcel is provided to the recipient free of charge for the items; payment by the recipient of handling charges or of Cuban duties and taxes does not affect that condition.",
          "Only eligible items may be included, in quantities normally given as gifts between individuals: food (including vitamins), medicines, medical supplies and devices, clothing, personal hygiene items, and other items of a type normally sent as gifts between individuals, including consumer communications devices provided for in 15 CFR 740.19(b).",
          "The combined total U.S. domestic retail value of the items in a single gift parcel may not exceed USD 800. This limit does not apply to food sent in a gift parcel to Cuba.",
          "Except for gift parcels of food, which have no frequency limit, the same donor may not send more than one gift parcel to the same donee in any one calendar month.",
          "Each parcel must show, on the outside, the name and address of the donor and of the donee, the notation “GIFT — Export License Not Required” on the address side, and the symbol “GFT” on any required customs declaration.",
        ],
        afterList: [
          "Shipments that do not qualify under GFT may only be processed if authorized by another EAR license exception (for example, SCP or CCD, depending on the item and the recipient) or by a specific license. CT Envios will determine the authorization path before accepting the shipment and may request additional documentation.",
        ],
      },
      {
        title: "5. Ineligible Recipients",
        content: [
          "No shipments, related remittances, or services are accepted where the recipient, beneficiary, or end user is:",
        ],
        list: [
          "Officials of the Government of Cuba listed in 15 CFR 740.12(a)(2)(v), including: Ministers and Vice-Ministers; members of the Council of State or the Council of Ministers; members and employees of the National Assembly of People's Power and of provincial assemblies; local sector chiefs of the Committees for the Defense of the Revolution; Director Generals and sub-Director Generals and higher of all Cuban ministries and state agencies; employees of the Ministry of the Interior (MININT) or the Ministry of Defense (MINFAR); secretaries and first secretaries of the Confederation of Labor of Cuba (CTC) and its component unions; chief editors, editors, and deputy editors of Cuban state-run media; and members and employees of the Supreme Court.",
          "Members of the Politburo of the Cuban Communist Party, or prohibited officials of the Government of Cuba (31 CFR 515.337) or prohibited members of the Cuban Communist Party (31 CFR 515.338), as applicable to the transaction.",
          "Organizations administered or controlled by the Government of Cuba or the Cuban Communist Party.",
          "Persons or entities on OFAC's SDN List, on BIS denied lists, or entities and subentities on the Cuba Restricted List.",
        ],
      },
      {
        title: "6. Prohibited and Restricted Items",
        content: [
          "The following are prohibited in any shipment, among others:",
        ],
        list: [
          "Items on the Commerce Control List (15 CFR Part 774) not authorized for gift parcels, and items controlled for chemical and biological weapons, missile technology, national security, nuclear nonproliferation, or encryption reasons.",
          "Firearms, explosives, ammunition, and military wearing apparel, even if insignia or markings are removed.",
          "Gold bullion, taels, or bars; illegal drugs and narcotics; and items intended for resale or reexport within a gift parcel.",
          "Unauthorized cash and monetary instruments, live animals, and perishable products without proper packaging.",
          "Hazardous materials and other items prohibited by carrier rules, by U.S. law, or by Cuban law.",
        ],
        afterList: [
          "Items such as telecommunications and computing equipment, lithium batteries, high-power appliances, vehicles and their parts, and regulated medical equipment are subject to prior review and may require export classification, additional authorization, or may not be accepted. Always confirm sensitive items with CT Envios before packing.",
        ],
      },
      {
        title: "7. Truthful Declaration, Inspection, and Records",
        content: [
          "The sender must declare each item with its specific name, quantity, and actual value. Generic descriptions (for example, “miscellaneous”) are not accepted. A false declaration or omission may constitute a violation of U.S. and Cuban law and result in confiscation, penalties, and termination of service.",
          "CT Envios reserves the right to inspect packages to verify their contents and consistency with the declaration, and to require sender identification, proof of value, and any document needed for clearance.",
          "You authorize CT Envios to act as your agent to prepare and file the export information required by U.S. law, including, where applicable, electronic filing in the Automated Export System (AES). We will retain records of each transaction for at least ten (10) years, in accordance with OFAC requirements (31 CFR 501.601), and make them available to U.S. authorities upon demand.",
        ],
      },
      {
        title: "8. Cuba Import Rules",
        content: [
          "Entry of goods into Cuba is governed by the General Customs of the Republic of Cuba and is a regime distinct from U.S. export rules. Cuba's non-commercial import limits, quantities, reference values, and duties — including the provisions in force since October 2026 that allow excess amounts to be formalized as commercial imports with payment in USD — are determined by the Cuban authorities and may change without notice.",
          "Cuban duties, taxes, and charges are not included in our rates unless expressly stated in writing. CT Envios is not responsible for holds, confiscations, or charges decided by Cuban Customs where the shipment matches the sender's declaration.",
        ],
      },
      {
        title: "9. Rates and Payments",
        content: [
          "Shipping rates are calculated according to the weight and/or volume of the package and the selected shipping method. All prices are subject to change without notice.",
          "Payment must be made in full before the shipment is processed. We will not accept payments originated from, destined to, or directly or indirectly involving blocked persons or entities on the Cuba Restricted List.",
          "If a shipment is refused for breach of these terms or applicable law, charges incurred up to that point may apply.",
        ],
      },
      {
        title: "10. Tracking and Delivery",
        content: [
          "We provide a tracking number for each shipment. Delivery will be made to the address provided by the sender, who is responsible for the recipient's information being accurate and complete.",
          "If delivery cannot be made due to incorrect or incomplete information, additional charges will apply for redelivery attempts.",
        ],
      },
      {
        title: "11. Insurance and Liability",
        content: [
          "We offer insurance options to protect your shipments against loss or damage. We recommend insuring all valuable shipments.",
          "Without additional insurance, our liability for loss or damage is limited as established by applicable international transport conventions.",
          "CT Envios will not be responsible for delays, holds, or confiscations caused by customs procedures, inspections, decisions of U.S. or Cuban authorities, weather conditions, or any other circumstance beyond our reasonable control. Insurance does not cover confiscations arising from the sender's non-compliance.",
        ],
      },
      {
        title: "12. Claims",
        content: [
          "Claims for damage or loss must be submitted within 30 days of the scheduled delivery date, with the tracking number, proof of value, and supporting documentation.",
          "Claims will be evaluated on a case-by-case basis and compensation determined according to our insurance and liability policies.",
        ],
      },
      {
        title: "13. Data Privacy",
        content: [
          "We collect and process the personal information necessary to provide our services, perform the compliance screening described in these terms, and comply with the law, in accordance with our Privacy Policy.",
          "By using our services, you consent to the collection and use of your information as described in our Privacy Policy, including its disclosure to carriers and authorities where necessary or legally required.",
        ],
      },
      {
        title: "14. Modifications and Changes in Law",
        content: [
          "CT Envios reserves the right to modify these terms at any time; modifications will take effect upon publication on our website.",
          "Changes in the laws, regulations, official lists, or criteria of U.S. or Cuban authorities apply immediately, even if these terms have not yet been updated. It is the user's responsibility to review them periodically.",
        ],
      },
      {
        title: "15. Applicable Law",
        content: [
          "These terms will be governed and interpreted in accordance with the laws of the United States and the State of Florida, regardless of its conflict of law provisions.",
          "Any dispute arising in connection with these terms will be subject to the exclusive jurisdiction of the courts of Miami-Dade County, Florida.",
        ],
      },
      {
        title: "16. Contact",
        content: [
          "If you have any questions about these terms and conditions, please contact us:",
        ],
        contact: [
          "CT Envios",
          "10230 NW 80th Ave, Hialeah Gardens, FL 33016",
          "Phone: (305) 851-3004",
          "Email: soporte@ctenvios.com",
          "WhatsApp: +1 754 277 8810",
        ],
      }
    ],
  },
};
