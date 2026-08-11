import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactStrip } from "@/components/sections/ContactStrip";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { newsItems, getNewsBySlug } from "@/content/news";
import { AppIcon } from "@/lib/icons";
import { createPageMetadata } from "@/lib/metadata";

type NewsPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsBySlug(slug);

  if (!item) {
    return {};
  }

  return createPageMetadata({
    title: item.title,
    description: item.summary,
    path: `/news/${item.slug}`,
  });
}

export default async function NewsDetailPage({ params }: NewsPageProps) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <article className="bg-white">
        <div className="site-shell grid gap-10 py-16 md:py-20 lg:grid-cols-[1fr_0.75fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-fhds-green">
              {item.category}
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-normal text-fhds-ink md:text-6xl">
              {item.title}
            </h1>
            <p className="mt-5 text-base font-semibold text-fhds-teal">{item.location}</p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-fhds-muted">{item.summary}</p>
          </div>
          <ImageSlot
            title="Outreach photography"
            caption="Approved photos from this outreach can be placed here."
            icon="news"
          />
        </div>
      </article>

      <section className="border-y border-fhds-border bg-fhds-cream py-16">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="quiet-card h-fit p-6">
            <h2 className="text-lg font-bold text-fhds-ink">Activity highlights</h2>
            <ul className="mt-5 space-y-3">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm font-medium text-fhds-ink">
                  <AppIcon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-fhds-green" />
                  {highlight}
                </li>
              ))}
            </ul>
          </aside>
          <div className="space-y-6">
            {item.body.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-9 text-fhds-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <ContactStrip
        title="Planning a community health or development program?"
        description="FHDS can support program design, outreach implementation, field teams, referrals, and reporting."
      />
    </>
  );
}
