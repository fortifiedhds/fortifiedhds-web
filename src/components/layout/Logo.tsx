import Link from "next/link";
import Image from "next/image";

type LogoSize = "sm" | "lg";

const sizeMap: Record<LogoSize, { width: number; height: number; className: string }> = {
  sm: { width: 210, height: 84, className: "h-10 w-auto lg:h-14" },
  lg: { width: 220, height: 88, className: "h-20 w-auto" },
};

interface LogoProps {
  size?: LogoSize;
}

export function Logo({ size = "lg" }: LogoProps) {
  const { width, height, className } = sizeMap[size];

  return (
    <Link href="/" className="focus-ring flex items-center rounded-md">
      <Image
        src="/images/logo.svg"
        alt="Fortified Health and Development Solutions"
        width={width}
        height={height}
        priority
        className={className}
      />
    </Link>
  );
}
