export type GalleryItem = {
  title: string;
  category: "Outreach" | "Events" | "Projects" | "Team";
  caption: string;
  image?: string;
};

export const galleryItems: GalleryItem[] = [
  {
    title: "Community outreach",
    category: "Outreach",
    caption: "Approved photos from community programmes will be added here.",
    image: "/images/hero/elite-care.jpg",
  },
  {
    title: "Eye-care screening",
    category: "Events",
    caption: "Photos from screening, treatment, and referral activities.",
    image: "/images/eye-care-outreach.jpg",
  },
];
