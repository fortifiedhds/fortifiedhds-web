import type { Metadata } from "next";
import { ContactStrip } from "@/components/sections/ContactStrip";
import { ButtonLink } from "@/components/ui/ButtonLink";
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
  { title: "Evidence-based practice", icon: "microscope" },
  { title: "Compassionate service", icon: "heart" },
  { title: "Accessibility", icon: "homeCare" },
  { title: "Collaboration", icon: "users" },
  { title: "Sustainable impact", icon: "book" },
  { title: "Integrity", icon: "shield" },
] as const;

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

      {/* ── COMPANY OVERVIEW WITHOUT IMAGES ── */}
      <section className="bg-fhds-cream py-16">
        <div className="site-shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6 text-base leading-8 text-fhds-muted">
            <p className="text-xl font-medium leading-9 text-fhds-ink">
              {site.name} designs, develops, and delivers comprehensive healthcare services
              that improve the health and wellbeing of individuals, families, and communities.
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
          
          {/* Creative layout replacing the team image */}
          <div className="rounded-2xl border border-fhds-border bg-white p-8 shadow-sm sm:p-10">
            <h3 className="mb-8 text-xl font-bold text-fhds-ink">Our Core Approach</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-fhds-cream">
                  <AppIcon name="heart" className="h-6 w-6 text-fhds-teal" />
                </div>
                <div>
                  <h4 className="font-semibold text-fhds-ink">People-Centred</h4>
                  <p className="mt-1 text-sm leading-relaxed text-fhds-muted">
                    Solutions that integrate health promotion, disease prevention, and long-term wellness.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-fhds-cream">
                  <AppIcon name="shield" className="h-6 w-6 text-fhds-teal" />
                </div>
                <div>
                  <h4 className="font-semibold text-fhds-ink">Preventive Care</h4>
                  <p className="mt-1 text-sm leading-relaxed text-fhds-muted">
                    Focusing on early detection and timely intervention to manage health conditions effectively.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-fhds-cream">
                  <AppIcon name="users" className="h-6 w-6 text-fhds-teal" />
                </div>
                <div>
                  <h4 className="font-semibold text-fhds-ink">Community Development</h4>
                  <p className="mt-1 text-sm leading-relaxed text-fhds-muted">
                    Addressing wider public health challenges including health education and economic empowerment.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="bg-white py-16">
        <div className="site-shell grid gap-5 md:grid-cols-2">
          <article className="quiet-card p-8 sm:p-10">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-fhds-teal/10 text-fhds-teal">
              <AppIcon name="mapPin" className="h-6 w-6" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-fhds-green">Mission</p>
            <h2 className="mt-4 text-2xl font-bold leading-snug text-fhds-ink">
              Improve health and wellbeing through accessible, compassionate, and innovative solutions.
            </h2>
            <p className="mt-4 text-base leading-8 text-fhds-muted">
              FHDS works to prevent and manage communicable and non-communicable diseases while
              advancing sustainable development through community empowerment, health education,
              and strategic partnerships.
            </p>
          </article>
          <article className="quiet-card p-8 sm:p-10">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-fhds-teal/10 text-fhds-teal">
              <AppIcon name="microscope" className="h-6 w-6" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-fhds-green">Vision</p>
            <h2 className="mt-4 text-2xl font-bold leading-snug text-fhds-ink">
              Become a leading health and development organisation transforming lives and communities.
            </h2>
            <p className="mt-4 text-base leading-8 text-fhds-muted">
              The vision is to strengthen individuals and communities through innovative,
              accessible, and sustainable healthcare solutions and health development.
            </p>
          </article>
        </div>
      </section>

      {/* ── GUIDING PRINCIPLES ── */}
      <section className="border-y border-fhds-border bg-fhds-cream py-16 md:py-24">
        <div className="site-shell">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              // eyebrow="Guiding principles"
              title="The values that drive our work."
              description="Our approach to healthcare and development is built on a foundation of professional excellence and deep community commitment."
            />
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="quiet-card flex items-center gap-4 p-6 transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                  <AppIcon name={value.icon} className="h-5 w-5 text-fhds-green" />
                </div>
                <p className="font-bold text-fhds-ink">{value.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP (NO IMAGE, TYPOGRAPHY DRIVEN) ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="site-shell">
          <div className="quiet-card relative mx-auto max-w-4xl overflow-hidden p-8 sm:p-12 md:p-16">
            {/* Decorative background icon instead of a photo */}
            <div className="pointer-events-none absolute -right-10 -top-10 opacity-[0.03]">
              <AppIcon name="stethoscope" className="h-64 w-64 text-fhds-ink" />
            </div>
            
            <div className="relative z-10">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-fhds-green">
                Leadership
              </p>
              <h2 className="mt-4 text-3xl font-bold text-fhds-ink md:text-5xl">
                Dr. J.O. Olabisi, <span className="text-fhds-teal">MBBS, FWACP</span>
              </h2>
              <p className="mt-4 inline-block rounded-full bg-white px-4 py-1.5 text-sm font-bold text-fhds-teal shadow-sm border border-fhds-border">
                Lead Consultant, Fortified Health and Development Solutions Limited
              </p>
              
              <div className="mt-8 h-px w-24 bg-fhds-border" />
              
              <p className="mt-8 max-w-2xl text-lg leading-8 text-fhds-muted">
                Dr. J.O. Olabisi is a consultant public health physician and lead for FHDS. He
                holds an MBBS from the University of Ibadan and is a Fellow of the West African
                College of Physicians, with over a decade of experience in community medicine.
              </p>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-fhds-muted">
                His work spans public health programme design, health systems strengthening, and
                community-focused interventions, bringing both clinical excellence and systemic 
                development strategies to every project FHDS undertakes.
              </p>
              
              <div className="mt-10 flex flex-wrap gap-3">
                {["Public Health", "Programme Design", "Systems Strengthening", "Community Medicine"].map((tag) => (
                  <span key={tag} className="inline-flex rounded-md bg-fhds-cream px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-fhds-ink">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
