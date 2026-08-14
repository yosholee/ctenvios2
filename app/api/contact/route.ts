import { NextResponse } from "next/server";

const RESEND_API_URL = "https://api.resend.com/emails";

interface ContactRequestBody {
  source?: string;
  email?: string;
  phone?: string;
  consent?: boolean;
  company?: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidFromField(value: string): boolean {
  const trimmed = value.trim();
  const plainEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const namedEmail = /^[^<>]+<\s*[^\s@]+@[^\s@]+\.[^\s@]+\s*>$/;
  return plainEmail.test(trimmed) || namedEmail.test(trimmed);
}

function normalizeEnvValue(value: string | undefined): string {
  return value?.trim().replace(/^['"]|['"]$/g, "") ?? "";
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildEmailHtml(input: {
  title: string;
  source: string;
  email: string;
  phone: string;
  consent: boolean;
}): string {
  return `
		<h2>${escapeHtml(input.title)}</h2>
		<p><strong>Fuente:</strong> ${escapeHtml(input.source)}</p>
		<p><strong>Email:</strong> ${escapeHtml(input.email)}</p>
		<p><strong>Teléfono:</strong> ${escapeHtml(input.phone)}</p>
		<p><strong>Consentimiento:</strong> ${input.consent ? "Sí" : "No"}</p>
		<p><strong>Fecha:</strong> ${new Date().toISOString()}</p>
	`;
}

async function sendResendEmail(input: {
  apiKey: string;
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  html: string;
}): Promise<{ ok: boolean; errorText: string }> {
  const resendResponse = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${input.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: input.from,
      to: [input.to],
      reply_to: input.replyTo,
      subject: input.subject,
      html: input.html,
    }),
  });

  if (resendResponse.ok) {
    return { ok: true, errorText: "" };
  }

  const errorText = await resendResponse.text();
  return { ok: false, errorText };
}

export async function POST(request: Request): Promise<Response> {
  try {
    const body = (await request.json()) as ContactRequestBody;
    const honeypot = body.company?.trim();
    if (honeypot) {
      return NextResponse.json({ ok: true });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      return NextResponse.json(
        { error: "Falta configurar RESEND_API_KEY en el servidor." },
        { status: 500 }
      );
    }

    const toEmail =
      normalizeEnvValue(process.env.CONTACT_TO_EMAIL) || "soporte@ctenvios.com";
    const fromEmailRaw =
      normalizeEnvValue(process.env.CONTACT_FROM_EMAIL) ||
      "soporte@ctenvios.com";
    const fromEmail = isValidFromField(fromEmailRaw)
      ? fromEmailRaw
      : "soporte@ctenvios.com";

    const email = body.email?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const consent = Boolean(body.consent);
    const isContactForm = body.source === "contact";

    if (!email || !phone || !consent) {
      return NextResponse.json(
        {
          error:
            "Por favor completa correo, teléfono y acepta el consentimiento.",
        },
        { status: 400 }
      );
    }
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Correo electrónico no válido." },
        { status: 400 }
      );
    }

    const html = buildEmailHtml({
      title: isContactForm
        ? "Nueva consulta desde formulario de contacto CT Envios"
        : "Nuevo registro newsletter CT Envios",
      source: isContactForm
        ? "Formulario de contacto"
        : "Newsletter (Únete a nuestra familia)",
      email,
      phone,
      consent,
    });

    const sent = await sendResendEmail({
      apiKey: resendApiKey,
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: isContactForm
        ? "Nueva consulta desde formulario de contacto"
        : "Nuevo registro newsletter CT Envios",
      html,
    });

    if (!sent.ok) {
      return NextResponse.json(
        { error: `Error enviando correo: ${sent.errorText}` },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "No se pudo procesar el formulario. Intenta nuevamente." },
      { status: 500 }
    );
  }
}
