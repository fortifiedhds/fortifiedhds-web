import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHero } from "@/components/ui/PageHero";
import { services } from "@/content/services";
import { AppIcon } from "@/lib/icons";
import { createPageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Fortified Health and Development Solutions Limited for advisory, research, outreach, training, supplies, and personalized care inquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Reach FHDS for service inquiries, partnerships, and program conversations."
        description="Use the contact details or form below to speak with the team about health and development advisory, research, outreach, training, supplies, or Fortified Elite Care."
      />

      <section className="bg-fhds-cream py-16">
        <div className="site-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="space-y-4">
            <div className="quiet-card p-6">
              <h2 className="text-xl font-bold text-fhds-ink">Contact details</h2>
              <ul className="mt-6 space-y-5">
                <li className="flex gap-3">
                  <AppIcon name="mapPin" className="mt-1 h-5 w-5 shrink-0 text-fhds-green" />
                  <span className="text-sm leading-7 text-fhds-muted">{site.contact.address}</span>
                </li>
                <li>
                  <a className="focus-ring inline-flex items-center gap-3 rounded-md text-sm font-semibold text-fhds-ink hover:text-fhds-teal" href={`tel:${site.contact.phone}`}>
                    <AppIcon name="phone" className="h-5 w-5 text-fhds-green" />
                    {site.contact.phone}
                  </a>
                </li>
                <li>
                  <a className="focus-ring inline-flex items-center gap-3 rounded-md text-sm font-semibold text-fhds-ink hover:text-fhds-teal" href={`https://wa.me/${site.contact.whatsapp.replace("+", "")}`}>
                    <AppIcon name="message" className="h-5 w-5 text-fhds-green" />
                    {site.contact.whatsapp}
                  </a>
                </li>
                <li>
                  <a className="focus-ring inline-flex items-center gap-3 rounded-md text-sm font-semibold text-fhds-ink hover:text-fhds-teal" href={`mailto:${site.contact.email}`}>
                    <AppIcon name="mail" className="h-5 w-5 text-fhds-green" />
                    {site.contact.email}
                  </a>
                </li>
              </ul>
            </div>
            <div className="quiet-card p-6">
              <h2 className="text-xl font-bold text-fhds-ink">Quick action</h2>
              <p className="mt-3 text-sm leading-7 text-fhds-muted">
                WhatsApp is the quickest path for direct service conversations while the domain email setup is pending.
              </p>
              <div className="mt-5">
                <ButtonLink href={`https://wa.me/${site.contact.whatsapp.replace("+", "")}`} variant="secondary">
                  Message on WhatsApp
                </ButtonLink>
              </div>
            </div>
          </aside>

          <form
            action={`mailto:${site.contact.email}`}
            method="post"
            encType="text/plain"
            className="quiet-card grid gap-5 p-6 md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-fhds-ink">
                Full name
                <input
                  name="fullName"
                  required
                  className="focus-ring min-h-12 rounded-md border border-fhds-border bg-white px-4 text-base font-normal text-fhds-ink"
                  autoComplete="name"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-fhds-ink">
                Organization
                <input
                  name="organization"
                  className="focus-ring min-h-12 rounded-md border border-fhds-border bg-white px-4 text-base font-normal text-fhds-ink"
                  autoComplete="organization"
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
                  className="focus-ring min-h-12 rounded-md border border-fhds-border bg-white px-4 text-base font-normal text-fhds-ink"
                  autoComplete="email"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-fhds-ink">
                Phone
                <input
                  name="phone"
                  type="tel"
                  className="focus-ring min-h-12 rounded-md border border-fhds-border bg-white px-4 text-base font-normal text-fhds-ink"
                  autoComplete="tel"
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-semibold text-fhds-ink">
              Service interest
              <select
                name="serviceInterest"
                className="focus-ring min-h-12 rounded-md border border-fhds-border bg-white px-4 text-base font-normal text-fhds-ink"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a service
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
                className="focus-ring rounded-md border border-fhds-border bg-white px-4 py-3 text-base font-normal leading-7 text-fhds-ink"
              />
            </label>
            <p className="text-sm leading-6 text-fhds-muted">
              By submitting, you agree that FHDS may use your details to respond to this inquiry.
            </p>
            <button
              type="submit"
              className="focus-ring inline-flex min-h-12 w-full items-center justify-center rounded-md border border-fhds-green bg-fhds-green px-5 py-3 text-sm font-semibold text-white transition hover:border-fhds-teal hover:bg-fhds-teal sm:w-fit"
            >
              Send inquiry
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
