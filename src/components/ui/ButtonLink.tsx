import Link from "next/link";
import { AppIcon } from "@/lib/icons";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "white";
  className?: string;
};

const variants = {
  primary:
    "border-fhds-green bg-fhds-green text-white hover:bg-fhds-teal hover:border-fhds-teal",
  secondary:
    "border-fhds-border bg-white text-fhds-ink hover:border-fhds-green hover:text-fhds-teal",
  ghost: "border-transparent text-fhds-teal hover:bg-white hover:border-fhds-border",
  white:
    "border-white bg-white text-fhds-teal hover:bg-white hover:text-fhds-green hover:border-white",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-5 py-3 text-sm font-semibold transition ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      <AppIcon name="arrowRight" className="h-4 w-4" />
    </Link>
  );
}
