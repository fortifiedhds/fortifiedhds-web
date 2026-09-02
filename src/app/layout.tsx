import type { Metadata } from "next";
import Script from "next/script";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { site } from "@/lib/site";

// JSON-LD structured data tells Google exactly what FHDS is, where it is, and what pages exist. 
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  alternateName: site.shortName,
  url: site.url,
  logo: `${site.url}/images/logo.svg`,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "No 88, Adeoyo Maternity Hospital Way, Yemetu",
    addressLocality: "Ibadan",
    addressRegion: "Oyo State",
    addressCountry: "NG",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.contact.phone,
    contactType: "customer service",
    email: site.contact.email,
    availableLanguage: "English",
  },
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  alternateName: site.shortName,
  url: site.url,
  description: site.description,
  inLanguage: "en-NG",
};

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-lexend-deca",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.shortName} | Health & Development Solutions in Nigeria`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.shortName,
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NG" className={lexendDeca.variable}>
      <head>
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={lexendDeca.className}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
