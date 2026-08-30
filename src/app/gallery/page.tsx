import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { galleryItems } from "@/content/gallery";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Gallery",
  description:
    "View outreach, event, project, and team photography from Fortified Health and Development Solutions Limited.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A curated place for FHDS outreach, project, and team photos."
        description="Photos from FHDS outreach programmes, community health events, and field projects across Nigeria."
      />

      <section className="bg-fhds-cream py-16">
        <div className="site-shell grid gap-5 sm:grid-cols-2">
          {galleryItems.map((item) => (
            <div key={`${item.category}-${item.title}`} className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image!}
                  alt={item.title}
                  width={800}
                  height={600}
                  className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="flex items-center gap-2.5 px-4 py-3">
                <span className="shrink-0 rounded-full bg-fhds-teal/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-fhds-teal">
                  {item.category}
                </span>
                <p className="truncate text-sm font-semibold text-fhds-ink">{item.title}</p>
              </figcaption>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
