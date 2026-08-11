import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="focus-ring flex items-center gap-3 rounded-md">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-fhds-green text-white">
        <span className="relative h-7 w-7">
          <span className="absolute left-1/2 top-0 h-7 w-1.5 -translate-x-1/2 rounded-full bg-white" />
          <span className="absolute left-0 top-1/2 h-1.5 w-7 -translate-y-1/2 rounded-full bg-white" />
          <span className="absolute bottom-0 left-1/2 h-1.5 w-4 -translate-x-1/2 rounded-full bg-fhds-amber" />
        </span>
      </span>
      <span className="leading-tight">
        <span className="block text-base font-bold text-fhds-ink">Fortified</span>
        <span className="hidden text-xs font-medium text-fhds-muted sm:block">
          Health and Development Solutions
        </span>
      </span>
    </Link>
  );
}
