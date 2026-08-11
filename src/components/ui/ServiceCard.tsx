import Link from "next/link";
import type { Service } from "@/content/services";
import { AppIcon } from "@/lib/icons";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="quiet-card focus-ring group flex h-full flex-col p-6 transition hover:-translate-y-1 hover:border-fhds-green hover:shadow-sm"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-fhds-cream text-fhds-green group-hover:bg-fhds-green group-hover:text-white">
        <AppIcon name={service.icon} className="h-6 w-6" />
      </div>
      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-fhds-green">
        {service.eyebrow}
      </p>
      <h3 className="mt-3 text-xl font-bold leading-7 text-fhds-ink">{service.title}</h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-fhds-muted">{service.excerpt}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-fhds-teal">
        Learn more
        <AppIcon name="arrowRight" className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
