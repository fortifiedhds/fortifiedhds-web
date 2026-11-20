import type { Metadata } from "next";
import { ContactStrip } from "@/components/sections/ContactStrip";
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
              {site.name} designs, develops and delivers health related and development services that improve the health and well-being of individuals, families and communities.
            </p>
            <p>
              The organisation was established in response to the growing need for accessible and preventive health related services. FHDS recognises that many health conditions can be prevented, detected early or managed more effectively through regular health monitoring, timely intervention and professional guidance.
            </p>
            <p>
              Beyond healthcare delivery, FHDS addresses public health challenges and supports community development initiatives related to education, gender equality, economic empowerment and improved living conditions.
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
              Improve health and well-being through accessible, compassionate and innovative solutions.
            </h2>
            <p className="mt-4 text-base leading-8 text-fhds-muted">
              FHDS works to prevent health related problems while advancing sustainable development through education, community empowerment and strategic partnerships.
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
              The vision is to strengthen individuals and communities through innovative, accessible and sustainable solutions in health and development.
            </p>
          </article>
        </div>
      </section>

      {/* ── GUIDING PRINCIPLES ── */}
      <section className="border-y border-fhds-border bg-fhds-cream py-16 md:py-24">
        <div className="site-shell">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              align="center"
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
          <div className="mb-12">
            <SectionHeading
              align="center"
              // eyebrow="Leadership & team Information"
              title={<>Meet the <span className="text-fhds-teal">team</span></>}
              description="The driving force behind Fortified Health and Development Solutions Limited."
            />
          </div>
          
          <div className="grid gap-6 md:gap-8">
            {/* Dr. J.O. Olabisi */}
            <div className="quiet-card relative overflow-hidden p-8 sm:p-10 lg:p-12">
              {/* <div className="pointer-events-none absolute -right-10 -top-10 opacity-[0.03]">
                <AppIcon name="stethoscope" className="h-64 w-64 text-fhds-ink" />
              </div> */}
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-fhds-ink lg:text-3xl">
                  Dr. J.O. Olabisi, <span className="text-fhds-teal">FWACP</span>
                </h2>
                <p className="mt-4 inline-block rounded-full bg-white px-4 py-1.5 text-sm font-bold leading-tight text-fhds-teal shadow-sm border border-fhds-border">
                  Lead Strategist, Fortified Health & Development Solutions Limited
                </p>
                <div className="mt-6 h-px w-16 bg-fhds-border lg:mt-8" />
                <div className="mt-8 w-full space-y-5 text-base leading-8 text-fhds-muted text-left lg:text-justify">
                  <p>
                    Dr. J.O. Olabisi is a consultant public health physician and the team lead for Fortified Health & Development Solutions Limited. His work spans public health program design, health systems strengthening, and community-focused interventions, bringing clinical rigor and field-tested expertise to every engagement. He has also served in Industry developing disease progression models with best-in-class methods and mathematical modelling to forecast patient populations by line of therapy as well as consulting projects for medical, pharmaceutical and biotechnology industries across global markets.
                  </p>
                  <p>
                    Under his leadership, FHDS is committed to delivering evidence-based, sustainable health and development solutions.
                  </p>
                  <p>
                    He holds a medical degree and a masters in Epidemiology and medical statistics degree from the University of Ibadan and is a fellow of the West African College of Physicians (FWACP). He also obtained a masters of public health (Health Economics) from the London School of Hygiene and Tropical Medicine (LSHTM).
                  </p>
                </div>
              </div>
            </div>

            {/* Praise Adebisi */}
            <div className="quiet-card relative overflow-hidden p-8 sm:p-10 lg:p-12">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-fhds-ink lg:text-3xl">
                  Praise Adebisi, <span className="text-fhds-teal">M.Ed.</span>
                </h2>
                <div className="mt-6 h-px w-16 bg-fhds-border lg:mt-8" />
                <div className="mt-8 w-full space-y-5 text-base leading-8 text-fhds-muted text-left lg:text-justify">
                  <p>
                    Praise Adebisi is a research, administration and programme development professional who supports the translation of ideas into well-structured programmes, systems and organisational processes. Her work combines strategic thinking, research and evidence, technical documentation, programme coordination and administrative management, with a particular strength in bringing clarity and structure to complex ideas.
                  </p>
                  <p>
                    At Fortified Health and Development Solutions, she supports the organisation&apos;s administrative and programme development functions, working across the development of organisational documents, programme concepts, operational frameworks and implementation processes. She contributes to refining ideas, identifying gaps, strengthening plans and ensuring that proposed initiatives are coherent, practical and aligned with the organisation&apos;s objectives.
                  </p>
                  <p>
                    Her approach is grounded in critical thinking, attention to detail and a strong interest in how organisations can build the systems required to turn good ideas into meaningful action. She is particularly interested in the intersection of research, health, education and development, and in using evidence and thoughtful programme design to support solutions that are relevant, sustainable and responsive to community needs.
                  </p>
                  <p>
                    Praise holds a Bachelor&apos;s degree in Religion and African Culture and a Master&apos;s degree in Educational Management, and is currently pursuing a PhD in Educational Management. She has also undertaken professional development in research, monitoring, evaluation, learning and programme development. Her academic and professional development continues to strengthen her capacity to contribute to evidence-informed programme design, organisational development and effective implementation.
                  </p>
                </div>
              </div>
            </div>

            {/* Seyi Olanipekun */}
            <div className="quiet-card relative overflow-hidden p-8 sm:p-10 lg:p-12">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-fhds-ink lg:text-3xl">
                  Seyi Olanipekun, <span className="text-fhds-teal">M.Sc.</span>
                </h2>
                <div className="mt-6 h-px w-16 bg-fhds-border lg:mt-8" />
                <div className="mt-8 w-full space-y-5 text-base leading-8 text-fhds-muted text-left lg:text-justify">
                  <p>
                    Seyi Olanipekun is a health and development professional with close to eight years of field program coordination experience. Holding a Bachelor&apos;s degree in Criminology and Security Studies and a Master&apos;s degree in Sociology, he combines a strong analytical understanding of human behavior and social systems with the discipline needed to plan and execute programs in complex, resource-constrained field environments. His career spans contract and consulting engagements with leading international organizations — including WHO, JHPIEGO, Malaria Consortium, Africa CDC, Oxford Policy Management, Mercy Corps, and the Federal Ministry of Health — where he has coordinated field teams, managed logistics for data collection and outreach activities, and ensured the smooth delivery of programs across multiple states.
                  </p>
                  <p>
                    Operationally, Seyi is skilled at managing the moving parts of program delivery — from field team deployment and resource coordination to timeline management and stakeholder engagement — with proficiency across leading field data platforms (ODK, SurveyCTO, REDCap, KoboCollect, DHIS2) that support real-time monitoring and quality control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
