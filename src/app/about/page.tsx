import type { Metadata } from "next";
import { ContactStrip } from "@/components/sections/ContactStrip";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AppIcon } from "@/lib/icons";
import { createPageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Learn about Fortified Health and Development Solutions Limited, its mission, vision, leadership, and work across health and development.",
  path: "/about",
});

const values = [
  "Evidence-based practice",
  "Compassionate service",
  "Accessibility",
  "Collaboration",
  "Sustainable impact",
  "Integrity",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About FHDS"
        title="Designing practical health and development solutions that improve lives."
        description="FHDS is a Nigeria-based health solutions and development company dedicated to improving the health and wellbeing of individuals, families, organisations, and communities."
        primaryHref="/services"
        primaryLabel="View services"
        secondaryHref="/contact"
        secondaryLabel="Contact FHDS"
      />

      <section className="bg-fhds-cream py-16">
        <div className="site-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-6 text-base leading-8 text-fhds-muted">
            <p>
              {site.name} designs, develops, and delivers comprehensive healthcare services
              that improve the health and wellbeing of individuals, families, and communities.
              The company provides people-centred solutions that integrate health promotion,
              disease prevention, early intervention, and long-term wellness.
            </p>
            <p>
              The organisation was established in response to the growing need for accessible
              and preventive healthcare services. FHDS recognises that many health conditions
              can be prevented, effectively managed, or detected early through regular health
              monitoring, timely intervention, and professional healthcare guidance.
            </p>
            <p>
              Beyond healthcare delivery, FHDS addresses public health challenges and supports
              community development initiatives related to health education, gender equality,
              economic empowerment, and improved living conditions.
            </p>
          </div>
          <div className="space-y-4">
            <ImageSlot
              title="Meet the Team"
              caption="Use approved leadership and team photos here once supplied."
              icon="users"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="site-shell grid gap-5 md:grid-cols-2">
          <article className="quiet-card p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-fhds-green">Mission</p>
            <h2 className="mt-4 text-2xl font-bold text-fhds-ink">
              Improve health and wellbeing through accessible, compassionate, and innovative solutions.
            </h2>
            <p className="mt-4 text-base leading-8 text-fhds-muted">
              FHDS works to prevent and manage communicable and non-communicable diseases while
              advancing sustainable development through community empowerment, health education,
              and strategic partnerships.
            </p>
          </article>
          <article className="quiet-card p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-fhds-green">Vision</p>
            <h2 className="mt-4 text-2xl font-bold text-fhds-ink">
              Become a leading health and development organisation transforming lives and communities.
            </h2>
            <p className="mt-4 text-base leading-8 text-fhds-muted">
              The vision is to strengthen individuals and communities through innovative,
              accessible, and sustainable healthcare solutions and health development.
            </p>
          </article>
        </div>
      </section>

      <section className="border-y border-fhds-border bg-fhds-cream py-16">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Guiding principles"
            title="A working value set for review and client approval."
            description="The source document did not include final approved core values, so these are presented as a sensible first draft that can be corrected before launch."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value} className="quiet-card flex items-center gap-3 p-5">
                <AppIcon name="shield" className="h-5 w-5 text-fhds-green" />
                <p className="font-semibold text-fhds-ink">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <ImageSlot
            title="Dr. J.O. Olabisi"
            caption="Leadership portrait placeholder."
            icon="stethoscope"
          />
          <article>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-fhds-green">
              Leadership
            </p>
            <h2 className="mt-3 text-3xl font-bold text-fhds-ink">Dr. J.O. Olabisi, MBBS, FWACP</h2>
            <p className="mt-2 font-semibold text-fhds-teal">
              Lead Consultant, Fortified Health and Development Solutions Limited
            </p>
            <p className="mt-5 text-base leading-8 text-fhds-muted">
              Dr. J.O. Olabisi is a consultant public health physician and lead for FHDS. He
              holds an MBBS from the University of Ibadan and is a Fellow of the West African
              College of Physicians, with over a decade of experience in community medicine.
              His work spans public health programme design, health systems strengthening, and
              community-focused interventions.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact" variant="secondary">
                Get in touch
              </ButtonLink>
            </div>
          </article>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
