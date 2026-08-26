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
    image: "/images/home-a.jpg",
  },
  {
    title: "Eye-care screening",
    category: "Events",
    caption: "Photos from screening, treatment, and referral activities.",
    image: "/images/eye-care-outreach.jpg",
  },
  {
    title: "Project field work",
    category: "Projects",
    caption: "Images showing implementation work across health and development projects.",
  },
  {
    title: "FHDS team",
    category: "Team",
    caption: "Leadership and team photos will be used after client approval.",
  },
  {
    title: "Training sessions",
    category: "Events",
    caption: "Workshop, seminar, and training photos for professional programmes.",
  },
  {
    title: "Supplies and resources",
    category: "Projects",
    caption: "Approved project photos for medical commodities and development resources.",
  },
];
