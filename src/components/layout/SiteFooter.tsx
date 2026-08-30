import Link from "next/link";
import { services } from "@/content/services";
import { AppIcon } from "@/lib/icons";
import { navigation, site } from "@/lib/site";
import { Logo } from "@/components/layout/Logo";

export function SiteFooter() {
  const companyLinks = navigation.filter(
    (item) => item.label !== "Home" && item.label !== "Services" && item.label !== "Contact",
  );

  return (
    <footer className="border-t border-fhds-border bg-white">
      <div className="site-shell grid gap-10 py-12 lg:grid-cols-[1.25fr_0.75fr_0.75fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-7 text-fhds-muted">{site.description}</p>
          <p className="mt-4 text-sm font-semibold text-fhds-teal">{site.registration}</p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-fhds-ink">Company</h2>
          <ul className="mt-4 space-y-3">
            {companyLinks.map((item) => (
              <li key={item.href}>
                <Link className="text-sm text-fhds-muted hover:text-fhds-teal" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-fhds-ink">
            <Link href="/services" className="hover:text-fhds-teal transition-colors">Services</Link>
          </h2>
          <ul className="mt-4 space-y-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  className="text-sm text-fhds-muted hover:text-fhds-teal"
                  href={`/services/${service.slug}`}
                >
                  {service.slug === "fortified-elite-care" ? "Fortified Elite Care" : service.eyebrow}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <address className="not-italic">
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-fhds-ink">
            <Link href="/contact" className="hover:text-fhds-teal transition-colors">Contact</Link>
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-fhds-muted">
            <li className="flex gap-2">
              <AppIcon name="mapPin" className="mt-0.5 h-4 w-4 shrink-0 text-fhds-green" />
              <span>{site.contact.address}</span>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 hover:text-fhds-teal" href={`tel:${site.contact.phone}`}>
                <AppIcon name="phone" className="h-4 w-4 text-fhds-green" />
                {site.contact.phone}
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 hover:text-fhds-teal" href={`mailto:${site.contact.email}`}>
                <AppIcon name="mail" className="h-4 w-4 text-fhds-green" />
                {site.contact.email}
              </a>
            </li>
          </ul>
        </address>
      </div>
      <div className="border-t border-fhds-border py-5">
        <div className="site-shell flex flex-col gap-2 text-sm text-fhds-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© Copyright {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <Link href="/privacy" className="hover:text-fhds-teal">
            Privacy notice
          </Link>
        </div>
      </div>
    </footer>
  );
}
