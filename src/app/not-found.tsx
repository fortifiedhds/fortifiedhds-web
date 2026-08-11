import Link from "next/link";
import { AppIcon } from "@/lib/icons";

export default function NotFound() {
  return (
    <section className="bg-white">
      <div className="site-shell py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-fhds-green">404</p>
        <h1 className="mt-4 text-4xl font-bold text-fhds-ink">Page not found</h1>
        <p className="mt-4 max-w-xl text-base leading-8 text-fhds-muted">
          The page you are looking for is not available. Use the link below to return to the
          homepage.
        </p>
        <Link
          href="/"
          className="focus-ring mt-8 inline-flex items-center gap-2 rounded-md border border-fhds-green bg-fhds-green px-5 py-3 text-sm font-semibold text-white hover:bg-fhds-teal"
        >
          Go home
          <AppIcon name="arrowRight" className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
