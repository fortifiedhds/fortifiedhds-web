import Image from "next/image";
import { AppIcon, type IconName } from "@/lib/icons";

type ImageSlotProps = {
  title: string;
  caption?: string;
  src?: string;
  alt?: string;
  icon?: IconName;
  className?: string;
};

export function ImageSlot({
  title,
  // caption,
  src,
  alt,
  icon = "images",
  className = "",
}: ImageSlotProps) {
  return (
    <figure className={`quiet-card overflow-hidden ${className}`}>
      <div className="relative flex aspect-[4/3] items-center justify-center bg-fhds-cream">
        {src ? (
          <Image src={src} alt={alt ?? title} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 border-b border-fhds-border p-8 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-md bg-white text-fhds-green">
              <AppIcon name={icon} className="h-7 w-7" />
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-fhds-muted">
              Image
            </span>
          </div>
        )}
      </div>
      <figcaption className="flex items-center gap-2.5 px-4 py-2">
        <p className="truncate text-sm font-semibold text-fhds-ink">{title}</p>
        {/* {caption ? <p className="mt-2 text-sm leading-6 text-fhds-muted">{caption}</p> : null} */}
      </figcaption>
    </figure>
  );
}
