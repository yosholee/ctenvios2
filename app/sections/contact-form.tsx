"use client";

import { useState, type FormEvent, type ReactElement } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { contact } from "@/content/landing";

interface ContactFormState {
  email: string;
  phone: string;
  consent: boolean;
  company: string;
}

interface FormStatus {
  type: "idle" | "error" | "success";
  message: string;
}

const initialFormState: ContactFormState = {
  email: "",
  phone: "",
  consent: false,
  company: "",
};

export function ContactForm(): ReactElement {
  const [formData, setFormData] = useState<ContactFormState>(initialFormState);
  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    setStatus({ type: "idle", message: "" });

    if (!formData.consent) {
      setStatus({ type: "error", message: contact.consentError });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "contact" }),
      });
      const payload = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus({
          type: "error",
          message:
            payload.error ??
            "No pudimos enviar tu mensaje. Intenta nuevamente.",
        });
        return;
      }

      setStatus({ type: "success", message: contact.successMessage });
      setFormData(initialFormState);
    } catch {
      setStatus({
        type: "error",
        message:
          "No pudimos enviar tu mensaje. Verifica tu conexión e intenta nuevamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="contact-email" className="sr-only">
          {contact.emailPlaceholder}
        </Label>
        <Input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={formData.email}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder={contact.emailPlaceholder}
          className="h-11 rounded-2xl border-brand-navy/10 bg-white text-brand-navy"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-phone" className="sr-only">
          {contact.phonePlaceholder}
        </Label>
        <Input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          value={formData.phone}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, phone: event.target.value }))
          }
          placeholder={contact.phonePlaceholder}
          className="h-11 rounded-2xl border-brand-navy/10 bg-white text-brand-navy"
        />
      </div>
      <input
        type="text"
        name="company"
        value={formData.company}
        onChange={(event) =>
          setFormData((prev) => ({ ...prev, company: event.target.value }))
        }
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div className="flex items-start gap-3">
        <Checkbox
          id="contact-consent"
          checked={formData.consent}
          onCheckedChange={(checked) =>
            setFormData((prev) => ({ ...prev, consent: checked === true }))
          }
          aria-describedby="contact-consent-label"
          className="mt-0.5 border-brand-navy/20"
        />
        <Label
          id="contact-consent-label"
          htmlFor="contact-consent"
          className="text-sm font-normal leading-relaxed text-brand-navy/70"
        >
          {contact.consentLabel}
        </Label>
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
        className="w-full bg-brand-yellow text-brand-navy hover:bg-brand-yellow/90"
      >
        {isSubmitting ? (
          <>
            <Spinner className="size-4" />
            {contact.submittingLabel}
          </>
        ) : (
          contact.submitLabel
        )}
      </Button>
      {status.message ? (
        <p
          role="status"
          className={
            status.type === "error"
              ? "text-sm text-destructive"
              : "text-sm text-emerald-700"
          }
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
