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
    <section className="bg-fhds-ink text-center text-white">
      <div className="site-shell py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-bold leading-tight tracking-normal text-white md:text-5xl lg:text-[54px]">{title}</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-fhds-cream/80 md:text-xl">{description}</p>
          {primaryHref && primaryLabel ? (
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
              {secondaryHref && secondaryLabel ? (
                <ButtonLink href={secondaryHref} variant="white">
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
