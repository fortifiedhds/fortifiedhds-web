"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { services } from "@/content/services";
import { AppIcon } from "@/lib/icons";
import { navigation } from "@/lib/site";
import { Logo } from "@/components/layout/Logo";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const desktopNav = navigation.filter((item) => item.label !== "Contact");
  // Keep all navigation items for mobile, including Home
  const mobileNav = navigation;

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    // Removed backdrop-blur-sm: CSS filters create a new containing block which breaks 'fixed' overlays!
    <header className="sticky top-0 z-50 border-b border-fhds-border bg-white">
      <div className="site-shell flex min-h-20 items-center justify-between gap-5 relative z-50 bg-white">
        <div onClick={() => setMobileMenuOpen(false)}>
          <Logo size="sm" />
        </div>

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

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="focus-ring flex cursor-pointer items-center gap-2 rounded-md border border-fhds-border bg-white px-3 py-2 text-sm font-semibold text-fhds-ink transition-colors hover:bg-fhds-cream lg:hidden"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <>
              <AppIcon name="x" className="h-5 w-5" />
              Close
            </>
          ) : (
            <>
              <AppIcon name="menu" className="h-5 w-5" />
              Menu
            </>
          )}
        </button>
      </div>

      {/* Slide-Up Full Screen Mobile Menu overlay */}
      <div
        className={`fixed inset-x-0 bottom-0 top-20 z-40 bg-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          mobileMenuOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="h-full overflow-y-auto px-6 py-8">
          <nav className="flex flex-col gap-4">
            {mobileNav.map((item) =>
              item.label === "Services" ? (
                <details key={item.href} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-bold tracking-tight text-fhds-ink transition-colors hover:text-fhds-teal">
                    {item.label}
                    <AppIcon name="chevronDown" className="h-5 w-5 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-3 flex flex-col gap-3 pl-4 border-l-2 border-fhds-border">
                    <Link
                      href="/services"
                      className="text-base font-semibold text-fhds-ink hover:text-fhds-teal"
                    >
                      All Services
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="text-base font-medium text-fhds-muted hover:text-fhds-teal"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-lg font-bold tracking-tight text-fhds-ink transition-colors hover:text-fhds-teal"
                >
                  {item.label}
                </Link>
              ),
            )}
            
            <div className="mt-4">
              <ButtonLink href="/contact" className="w-full">
                Contact Us Now
              </ButtonLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
