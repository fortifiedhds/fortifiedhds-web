import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
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
        <div className="site-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <aside className="h-full">
            <div className="quiet-card flex h-full flex-col p-6 md:p-8">
              <h2 className="text-xl font-bold text-fhds-ink">Contact details</h2>
              
              {/* Google Maps Embed */}
              <div className="my-6 flex-1 w-full min-h-[250px] overflow-hidden rounded-xl border border-fhds-border bg-fhds-cream">
                <iframe 
                  title="FHDS Office Location"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  loading="lazy" 
                  allowFullScreen 
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(site.contact.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                />
              </div>

              <ul className="space-y-5">
                <li className="flex gap-3">
                  <AppIcon name="mapPin" className="mt-1 h-5 w-5 shrink-0 text-fhds-green" />
                  <span className="text-sm leading-7 text-fhds-muted">{site.contact.address}</span>
                </li>
                <li>
                  <a className="focus-ring inline-flex items-start gap-3 rounded-md text-sm font-semibold text-fhds-ink hover:text-fhds-teal" href={`tel:${site.contact.phone}`}>
                    <AppIcon name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-fhds-green" />
                    {site.contact.phone}
                  </a>
                </li>
                <li>
                  <a className="focus-ring inline-flex items-start gap-3 rounded-md text-sm font-semibold text-fhds-ink hover:text-fhds-teal" href={`https://wa.me/${site.contact.whatsapp.replace("+", "")}`}>
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-fhds-green" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    {site.contact.whatsapp}
                  </a>
                </li>
                <li>
                  <a className="focus-ring inline-flex items-start gap-3 rounded-md text-sm font-semibold text-fhds-ink hover:text-fhds-teal" href={`mailto:${site.contact.email}`}>
                    <AppIcon name="mail" className="mt-0.5 h-5 w-5 shrink-0 text-fhds-green" />
                    {site.contact.email}
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          <ContactForm services={services.map(s => ({ slug: s.slug, title: s.title }))} />
        </div>
      </section>
    </>
  );
}
