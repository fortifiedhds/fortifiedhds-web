import Link from "next/link";
import { services } from "@/content/services";
import { AppIcon } from "@/lib/icons";
import { navigation } from "@/lib/site";
import { Logo } from "@/components/layout/Logo";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function SiteHeader() {
  const desktopNav = navigation.filter((item) => item.label !== "Contact");

  return (
    <header className="sticky top-0 z-30 border-b border-fhds-border bg-white/95">
      <div className="site-shell flex min-h-20 items-center justify-between gap-5">
        <Logo size="sm" />

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {desktopNav.map((item) =>
            item.label === "Services" ? (
              <div key={item.href} className="group relative">
                <Link
                  href="/services"
                  className="focus-ring flex items-center gap-1 rounded-md px-4 py-3 text-sm font-semibold text-fhds-muted transition hover:bg-fhds-cream hover:text-fhds-teal"
                >
                  <span>Services</span>
                  <AppIcon
                    name="chevronDown"
                    className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                  />
                </Link>
                <div className="invisible absolute left-0 top-full z-50 pt-1 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                  <div className="w-80 rounded-md border border-fhds-border bg-white p-2 shadow-md">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="focus-ring block rounded-md px-3 py-2.5 text-sm leading-5 text-fhds-muted transition hover:bg-fhds-cream hover:text-fhds-teal"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-md px-4 py-3 text-sm font-semibold text-fhds-muted transition hover:bg-fhds-cream hover:text-fhds-teal"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/contact" variant="secondary" className="min-h-10 px-4 py-2">
            Contact
          </ButtonLink>
        </div>

        <details className="relative lg:hidden">
          <summary className="focus-ring flex cursor-pointer list-none items-center gap-2 rounded-md border border-fhds-border bg-white px-3 py-2 text-sm font-semibold text-fhds-ink">
            <AppIcon name="menu" className="h-5 w-5" />
            Menu
          </summary>
          <div className="absolute right-0 top-full mt-3 w-[min(86vw,360px)] rounded-md border border-fhds-border bg-white p-3 shadow-sm">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring block rounded-md px-3 py-3 text-sm font-semibold text-fhds-ink hover:bg-fhds-cream"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 border-t border-fhds-border pt-2">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="focus-ring block rounded-md px-3 py-2 text-sm text-fhds-muted hover:bg-fhds-cream hover:text-fhds-teal"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
