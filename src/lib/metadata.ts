import type { Metadata } from "next";
import { site } from "@/lib/site";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function createPageMetadata({ title, description, path = "" }: MetadataInput): Metadata {
  const url = new URL(path, site.url).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_NG",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
