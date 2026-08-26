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
    "Contact Fortified Health and Development Solutions Limited for advisory, research, outreach, training, supplies, and personalised care enquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Reach FHDS for service enquiries, partnerships, and programme conversations."
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
                    <svg className="h-5 w-5 text-fhds-green" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
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
                Organisation
                <input
                  name="organisation"
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
              By submitting, you agree that FHDS may use your details to respond to this enquiry.
            </p>
            <button
              type="submit"
              className="focus-ring inline-flex min-h-12 w-full items-center justify-center rounded-md border border-fhds-green bg-fhds-green px-5 py-3 text-sm font-semibold text-white transition hover:border-fhds-teal hover:bg-fhds-teal sm:w-fit"
            >
              Send enquiry
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
