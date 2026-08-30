"use client";

import { useState } from "react";
import { AppIcon } from "@/lib/icons";

// Array of services directly here or pass as props
type ContactFormProps = {
  services: { slug: string; title: string }[];
};

export function ContactForm({ services }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey || accessKey === "your_access_key_here") {
      setStatus("error");
      setErrorMessage("Configuration error: Web3Forms Access Key is missing.");
      return;
    }

    formData.append("access_key", accessKey);
    formData.append("subject", "New Contact Form Submission from FHDS Website");
    formData.append("from_name", "FHDS Website Contact");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        console.error("Web3Forms Error:", data);
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="quiet-card flex flex-col items-center justify-center p-12 text-center md:p-16 h-full">
        <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-fhds-green/10 text-fhds-green">
          <AppIcon name="check" className="h-8 w-8" />
        </div>
        <h2 className="text-2xl font-bold text-fhds-ink">Message Sent!</h2>
        <p className="mt-3 max-w-md text-base leading-7 text-fhds-muted">
          Thank you for reaching out to Fortified Health and Development Solutions. Our team will review your enquiry and get back to you shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 font-semibold text-fhds-teal hover:text-fhds-green"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="quiet-card grid gap-5 p-6 md:p-8"
    >
      {/* Botpoison/Honeypot to prevent spam (Web3Forms feature) */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-fhds-ink">
          Full name
          <input
            name="name"
            required
            className="focus-ring min-h-12 w-full rounded-md border border-fhds-border bg-white px-4 text-base font-normal text-fhds-ink disabled:opacity-50"
            autoComplete="name"
            disabled={status === "submitting"}
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-fhds-ink">
          Organisation
          <input
            name="organisation"
            className="focus-ring min-h-12 w-full rounded-md border border-fhds-border bg-white px-4 text-base font-normal text-fhds-ink disabled:opacity-50"
            autoComplete="organization"
            disabled={status === "submitting"}
          />
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-fhds-ink">
          Email
          <input
            name="email"
            type="email"
            required
            className="focus-ring min-h-12 w-full rounded-md border border-fhds-border bg-white px-4 text-base font-normal text-fhds-ink disabled:opacity-50"
            autoComplete="email"
            disabled={status === "submitting"}
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-fhds-ink">
          Phone
          <input
            name="phone"
            type="tel"
            className="focus-ring min-h-12 w-full rounded-md border border-fhds-border bg-white px-4 text-base font-normal text-fhds-ink disabled:opacity-50"
            autoComplete="tel"
            disabled={status === "submitting"}
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-fhds-ink">
        Service interest
        <select
          name="serviceInterest"
          className="focus-ring min-h-12 w-full rounded-md border border-fhds-border bg-white px-4 text-base font-normal text-fhds-ink disabled:opacity-50"
          defaultValue=""
          disabled={status === "submitting"}
        >
          <option value="" disabled>
            Select a service (Optional)
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold text-fhds-ink">
        Message
        <textarea
          name="message"
          required
          rows={6}
          className="focus-ring min-h-12 w-full rounded-md border border-fhds-border bg-white px-4 py-3 text-base font-normal leading-7 text-fhds-ink disabled:opacity-50"
          disabled={status === "submitting"}
        />
      </label>

      {status === "error" && (
        <div className="rounded-md bg-red-50 p-4 text-sm text-red-600 border border-red-100">
          {errorMessage}
        </div>
      )}

      <p className="text-sm leading-6 text-fhds-muted">
        By submitting, you agree that FHDS may use your details to respond to this enquiry.
      </p>
      
      <button
        type="submit"
        disabled={status === "submitting"}
        className="focus-ring inline-flex min-h-12 w-full items-center justify-center rounded-md border border-fhds-green bg-fhds-green px-5 py-3 text-sm font-semibold text-white transition hover:border-fhds-teal hover:bg-fhds-teal disabled:opacity-70 disabled:cursor-not-allowed sm:w-fit"
      >
        {status === "submitting" ? (
          <span className="flex items-center gap-2">
            <svg className="h-4 w-4 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : (
          "Send enquiry"
        )}
      </button>
    </form>
  );
}
