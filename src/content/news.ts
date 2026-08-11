export type NewsItem = {
  slug: string;
  title: string;
  summary: string;
  dateLabel: string;
  location: string;
  category: string;
  body: string[];
  highlights: string[];
};

export const newsItems: NewsItem[] = [
  {
    slug: "wapco-eye-care-outreach",
    title: "Community Eye-Care Outreach With WAPCo",
    summary:
      "FHDS partnered with the West African Gas Pipeline Company Limited for eye-care medical outreaches in Ogun and Lagos communities.",
    dateLabel: "Recent outreach",
    location:
      "Ado-Odo/Ota Local Government Area, Ogun State and Badagry Local Government Area, Lagos State",
    category: "Outreach",
    body: [
      "Fortified Health and Development Solutions, in partnership with the West African Gas Pipeline Company Limited, conducted medical outreaches focused on eye care across communities in the Ado-Odo/Ota Local Government Area of Ogun State and the Badagry Local Government Area of Lagos State, Nigeria.",
      "The outreach promoted general health and eye-care awareness while encouraging community members to be more proactive and responsive about their wellbeing.",
      "Activities included health education, eye screening, treatment, and referrals for further care. The exercise was delivered by a team of seasoned healthcare workers and ancillary staff to ensure an outreach of both impact and quality.",
      "Medications and prescription glasses were distributed to beneficiaries across the communities based on need.",
    ],
    highlights: [
      "Health education",
      "Eye screening",
      "Treatment and referrals",
      "Medication and prescription glasses distribution",
    ],
  },
];

export function getNewsBySlug(slug: string) {
  return newsItems.find((item) => item.slug === slug);
}
