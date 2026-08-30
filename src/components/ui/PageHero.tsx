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
    <section className="border-b border-fhds-border bg-white text-center">
      <div className="site-shell py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          {/* <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-fhds-green">
            {eyebrow}
          </p> */}
          <h1 className="text-3xl font-bold leading-tight tracking-normal text-fhds-ink md:text-5xl lg:text-[54px]">{title}</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-fhds-muted md:text-xl">{description}</p>
          {primaryHref && primaryLabel ? (
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
