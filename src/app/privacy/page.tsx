import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Notice",
  description:
    "Privacy notice for Fortified Health and Development Solutions Limited website enquiries.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy notice"
        title="How FHDS handles website enquiries."
        description="This is a practical starter privacy notice for the launch website and should be reviewed by the client before production."
      />

      <section className="bg-fhds-cream py-16">
        <div className="site-shell max-w-3xl space-y-8">
          {[
            {
              title: "Information collected",
              body: "When you contact FHDS through the website, the company may receive your name, organisation, email address, phone number, selected service interest, and message.",
            },
            {
              title: "How information is used",
              body: "Information submitted through the website is used to respond to enquiries, understand service needs, and follow up on relevant health and development conversations.",
            },
            {
              title: "Sharing",
              body: "FHDS should not sell enquiry information. Information may only be shared where needed to respond to the enquiry, comply with legal obligations, or support an approved service conversation.",
            },
            {
              title: "Contact",
              body: `Questions about this notice can be sent to ${site.contact.email}.`,
            },
          ].map((section) => (
            <article key={section.title} className="quiet-card p-7">
              <h2 className="text-2xl font-bold text-fhds-ink">{section.title}</h2>
              <p className="mt-4 text-base leading-8 text-fhds-muted">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
