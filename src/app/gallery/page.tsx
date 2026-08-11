import type { Metadata } from "next";
import { ImageSlot } from "@/components/ui/ImageSlot";
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
        description="The structure is ready for real approved photography. The current slots are intentional placeholders until the client supplies final images."
      />

      <section className="bg-fhds-cream py-16">
        <div className="site-shell grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <ImageSlot
              key={`${item.category}-${item.title}`}
              title={item.title}
              caption={`${item.category}: ${item.caption}`}
              src={item.image}
              icon="images"
            />
          ))}
        </div>
      </section>
    </>
  );
}
