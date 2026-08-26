import { ButtonLink } from "@/components/ui/ButtonLink";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: PageHeroProps) {
  return (
    <section className="border-b border-fhds-border bg-white">
      <div className="site-shell py-16 md:py-20">
        <div className="max-w-4xl">
          {/* <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-fhds-green">
            {eyebrow}
          </p> */}
          <h1 className="text-3xl font-bold leading-tight tracking-normal text-fhds-ink md:text-4xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-fhds-muted md:text-xl">{description}</p>
          {primaryHref && primaryLabel ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
              {secondaryHref && secondaryLabel ? (
                <ButtonLink href={secondaryHref} variant="secondary">
                  {secondaryLabel}
                </ButtonLink>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
