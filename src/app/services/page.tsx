import type { Metadata } from "next";
import { ContactStrip } from "@/components/sections/ContactStrip";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/content/services";
import { AppIcon } from "@/lib/icons";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description:
    "Explore FHDS services across health and development advisory, research, outreach, training, supplies, and personalized elder care.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Integrated services for health, development, and community impact."
        description="FHDS combines advisory support, evidence generation, community delivery, professional training, resource supply, and home-based care into one practical service model."
        primaryHref="/contact"
        primaryLabel="Discuss a service"
      />

      <section className="bg-fhds-cream py-16">
        <div className="site-shell">
          <SectionHeading
            title="Service areas"
            description="Each service area can support standalone engagements or connect with the others for broader health and development programs."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="site-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="How the work fits together"
            title="From evidence to implementation."
            description="The strongest FHDS engagements can combine research, program planning, capacity building, community outreach, and supplies into one coherent delivery path."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Understand the context through research and stakeholder engagement.",
              "Design the right advisory, training, or outreach model.",
              "Implement with clear quality controls and practical field coordination.",
              "Review outcomes and strengthen future program decisions.",
            ].map((item) => (
              <div key={item} className="quiet-card flex gap-3 p-5">
                <AppIcon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-fhds-green" />
                <p className="text-sm leading-7 text-fhds-muted">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
