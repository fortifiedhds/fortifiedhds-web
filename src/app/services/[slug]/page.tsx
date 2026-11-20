import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ContactStrip } from "@/components/sections/ContactStrip";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHero } from "@/components/ui/PageHero";
import { services, getServiceBySlug } from "@/content/services";
import { AppIcon } from "@/lib/icons";
import { createPageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return createPageMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.title}
        description={service.description}
        primaryHref="/contact"
        primaryLabel="Talk to FHDS"
        secondaryHref="/services"
        secondaryLabel="All services"
      />

      <section className="bg-fhds-cream py-16 md:py-20">
        <div className="site-shell grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-stretch">
          {/* Service Image Block */}
          <div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-2xl shadow-sm">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-fhds-ink/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <span className="mb-2 inline-flex items-center justify-center rounded-full bg-white/20 p-2 text-white backdrop-blur-md">
                <AppIcon name={service.icon} className="h-6 w-6" />
              </span>
              <h2 className="text-2xl font-bold text-white">{service.title}</h2>
            </div>
          </div>

          {/* Compact Service Dashboard */}
          <div className="flex flex-col justify-between rounded-2xl border border-fhds-border bg-white p-8 shadow-sm">
            <div>
              {/* Who this is for (Tags) */}
              <div className="mb-8">
                <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-fhds-green">
                  Who We Support
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.audience.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-md bg-fhds-cream px-3 py-1.5 text-xs font-semibold text-fhds-ink"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Capabilities Grid */}
              <div className="mb-8 border-t border-fhds-border pt-6">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-fhds-green">
                  What We Do
                </h3>
                <ul className="grid gap-x-4 gap-y-3 sm:grid-cols-2">
                  {service.capabilities.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <AppIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-fhds-teal" />
                      <span className="text-sm font-medium leading-tight text-fhds-ink">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes (Highlighted) */}
              <div className="rounded-xl bg-fhds-teal/5 p-5">
                <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-fhds-teal">
                  Expected Outcomes
                </h3>
                <ul className="space-y-2">
                  {service.outcomes.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-fhds-teal" />
                      <span className="text-sm font-semibold text-fhds-teal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact" className="w-full sm:w-auto">
                Request a conversation
              </ButtonLink>
              {service.slug === "fortified-elite-care" && (
                <ButtonLink href={site.fecUrl} variant="secondary" className="w-full sm:w-auto">
                  Learn more about FEC
                </ButtonLink>
              )}
            </div>
          </div>
        </div>
      </section>

      <ContactStrip title={`Need support with ${service.eyebrow.toLowerCase()}?`} />
    </>
  );
}
