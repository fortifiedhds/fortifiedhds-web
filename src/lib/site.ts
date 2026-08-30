export const site = {
  name: "Fortified Health and Development Solutions Limited",
  shortName: "Fortified HDS",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://fortifiedhds.com",
  description:
    "Evidence-based health and development solutions for stronger people, systems, and communities.",
  contact: {
    address: "No 88, Adeoyo Maternity Hospital Way, Yemetu, Ibadan, Oyo State, Nigeria.",
    phone: "+2348067294003",
    whatsapp: "+2348034747172",
    email: "fhdsltd@gmail.com",
  },
  registration: "RC 8235307",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "News", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];
