import Image from "next/image";
import Link from "next/link";
import { ContactStrip } from "@/components/sections/ContactStrip";
import { HeroSlider } from "@/components/sections/HeroSlider";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { newsItems } from "@/content/news";
import { services } from "@/content/services";
import { AppIcon } from "@/lib/icons";

export default function Home() {
  const featuredNews = newsItems[0];

  return (
    <>
      {/* ── NEW hero: full-bleed image slider with text overlay ── */}
      <FadeIn delay={100}>
        <HeroSlider />
      </FadeIn>

      <section className="border-b border-fhds-border bg-fhds-cream py-16">
        <div className="site-shell">
          <FadeIn delay={150}>
            <SectionHeading
              title="Integrated support across health, development, and community wellbeing."
              description="The service model combines technical expertise with practical delivery, helping partners move from plans and research to field-level outcomes."
            />
          </FadeIn>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <FadeIn key={service.slug} delay={i * 100}>
                <ServiceCard service={service} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <FadeIn>
            <SectionHeading
              title="A health and development partner with preventive care at its core."
              description="FHDS was established in response to the need for accessible and preventive healthcare services, health education, early intervention, community empowerment, and system strengthening."
            />
            <div className="mt-8">
              <ButtonLink href="/about" variant="secondary">
                Learn about FHDS
              </ButtonLink>
            </div>
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Prevention and early intervention",
                body: "The company focuses on health monitoring, timely intervention, education, and continuous care.",
              },
              {
                title: "Development-minded practice",
                body: "Work extends into community development, gender equality, economic empowerment, and improved living conditions.",
              },
              {
                title: "Digital health awareness",
                body: "FHDS recognises the role of telemedicine, records, and other digital tools in coordinated care.",
              },
              {
                title: "Leadership depth",
                body: "The organisation is led by Dr. J.O. Olabisi, a consultant public health physician with community medicine experience.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 100} className="h-full">
                <article className="quiet-card h-full p-6">
                  <h3 className="text-lg font-bold text-fhds-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-fhds-muted">{item.body}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-fhds-border bg-fhds-cream py-16">
        <div className="site-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <FadeIn delay={150}>
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/eye-care-outreach.jpg"
                alt="WAPCo eye-care outreach"
                width={800}
                height={600}
                className="w-full object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn delay={250}>
            <article>
              <h2 className="mt-3 text-3xl font-bold tracking-normal text-fhds-ink md:text-4xl">
                {featuredNews.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-fhds-muted">{featuredNews.summary}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {featuredNews.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-sm font-medium text-fhds-ink">
                    <AppIcon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-fhds-green" />
                    {highlight}
                  </li>
                ))}
              </ul>
              <Link
                href={`/news/${featuredNews.slug}`}
                className="focus-ring mt-8 inline-flex items-center gap-2 rounded-md text-sm font-semibold text-fhds-teal hover:text-fhds-green"
              >
                Read the story
                <AppIcon name="arrowRight" className="h-4 w-4" />
              </Link>
            </article>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <ContactStrip />
      </FadeIn>
    </>
  );
}
