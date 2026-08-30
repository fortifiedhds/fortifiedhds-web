import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { newsItems } from "@/content/news";
import { AppIcon } from "@/lib/icons";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "News and Events",
  description:
    "Read updates, outreach reports, and event stories from Fortified Health and Development Solutions Limited.",
  path: "/news",
});

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News and events"
        title="Updates from FHDS programmes, partnerships, and field work."
        description="Stay informed with the latest updates on our health interventions, community outreach programmes, and development initiatives."
      />

      <section className="bg-fhds-cream py-16">
        <div className="site-shell grid gap-5 md:grid-cols-2">
          {newsItems.map((item) => (
            <article key={item.slug} className="quiet-card p-7">
              <div className="flex items-center gap-3 text-sm font-semibold text-fhds-green">
                <AppIcon name="news" className="h-5 w-5" />
                {item.category}
              </div>
              <h2 className="mt-4 text-2xl font-bold text-fhds-ink">{item.title}</h2>
              <p className="mt-3 text-sm font-semibold text-fhds-teal">{item.dateLabel}</p>
              <p className="mt-4 text-base leading-8 text-fhds-muted">{item.summary}</p>
              <Link
                href={`/news/${item.slug}`}
                className="focus-ring mt-6 inline-flex items-center gap-2 rounded-md text-sm font-semibold text-fhds-teal hover:text-fhds-green"
              >
                Read update
                <AppIcon name="arrowRight" className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
