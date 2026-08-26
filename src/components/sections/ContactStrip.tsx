import { ButtonLink } from "@/components/ui/ButtonLink";

type ContactStripProps = {
  title?: string;
  description?: string;
};

export function ContactStrip({
  title = "Start a conversation with FHDS",
  description = "Speak with the team about advisory support, outreach programmes, training, research, supplies, or personalised care.",
}: ContactStripProps) {
  return (
    <section className="bg-fhds-teal py-14 text-white">
      <div className="site-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-normal">{title}</h2>
          <p className="mt-3 text-base leading-7 text-white/80">{description}</p>
        </div>
        <ButtonLink href="/contact" variant="white">
          Contact us
        </ButtonLink>
      </div>
    </section>
  );
}
