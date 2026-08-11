import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactStrip } from "@/components/sections/ContactStrip";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { PageHero } from "@/components/ui/PageHero";
import { services, getServiceBySlug } from "@/content/services";
import { AppIcon } from "@/lib/icons";
import { createPageMetadata } from "@/lib/metadata";

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

      <section className="bg-fhds-cream py-16">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <ImageSlot
            title={`${service.eyebrow} imagery`}
            caption="Use real approved service or field photos here."
            icon={service.icon}
          />
          <div className="space-y-8">
            <article className="quiet-card p-7">
              <h2 className="text-2xl font-bold text-fhds-ink">Who this is for</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.audience.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-fhds-ink">
                    <AppIcon name="users" className="h-5 w-5 text-fhds-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="quiet-card p-7">
              <h2 className="text-2xl font-bold text-fhds-ink">What FHDS can support</h2>
              <ul className="mt-5 grid gap-3">
                {service.capabilities.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-fhds-muted">
                    <AppIcon name="check" className="mt-1 h-5 w-5 shrink-0 text-fhds-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="quiet-card p-7">
              <h2 className="text-2xl font-bold text-fhds-ink">Expected outcomes</h2>
              <ul className="mt-5 grid gap-4 sm:grid-cols-3">
                {service.outcomes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm font-semibold leading-6 text-fhds-teal">
                    <AppIcon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-fhds-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <ButtonLink href="/contact">Request a conversation</ButtonLink>
          </div>
        </div>
      </section>

      <ContactStrip title={`Need support with ${service.eyebrow.toLowerCase()}?`} />
    </>
  );
}
