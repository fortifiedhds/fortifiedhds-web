import type { IconName } from "@/lib/icons";

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  excerpt: string;
  description: string;
  audience: string[];
  capabilities: string[];
  outcomes: string[];
  icon: IconName;
  seoTitle: string;
  seoDescription: string;
};

export const services: Service[] = [
  {
    slug: "consultation-advisory",
    title: "Healthcare and Development Consultation/Advisory",
    eyebrow: "Advisory",
    excerpt:
      "Tailored healthcare and development consultation for governmental, corporate, private, and development-sector partners.",
    description:
      "FHDS provides expert advisory support across healthcare planning, project management, policy and programme design, capacity building, and monitoring and evaluation. The work is structured to help partners make sound decisions, deliver effective programmes, and strengthen health and development outcomes.",
    audience: [
      "Government agencies",
      "NGOs and development partners",
      "Corporate organisations",
      "Private institutions",
    ],
    capabilities: [
      "Healthcare and development planning",
      "Project design and implementation support",
      "Policy, programme, and strategy drafting",
      "Monitoring and evaluation frameworks",
      "Capacity-building advisory",
    ],
    outcomes: [
      "Clearer programme direction",
      "Improved implementation quality",
      "Evidence-informed decision-making",
    ],
    icon: "clipboard",
    seoTitle: "Healthcare and Development Consultation/Advisory",
    seoDescription:
      "Expert healthcare and development advisory services for planning, programmes, capacity building, policy support, and monitoring and evaluation.",
  },
  {
    slug: "research",
    title: "Health and Development Research",
    eyebrow: "Research",
    excerpt:
      "Research and studies that inform public health, health systems, and community development decisions.",
    description:
      "FHDS conducts research on public health trends, health system improvements, and community development challenges. The company's research work supports policymakers, academics, practitioners, institutions, and development partners with evidence that can guide practical action.",
    audience: [
      "Policy teams",
      "Academic and research partners",
      "Development organisations",
      "Programme implementation teams",
    ],
    capabilities: [
      "Public health trend studies",
      "Health systems research",
      "Community development research",
      "Evidence synthesis and reporting",
      "Programme learning support",
    ],
    outcomes: [
      "Better programme insight",
      "Data-informed strategy",
      "Useful research outputs for decision-makers",
    ],
    icon: "microscope",
    seoTitle: "Health and Development Research",
    seoDescription:
      "Evidence-based public health, health systems, and community development research for policymakers and development partners.",
  },
  {
    slug: "outreach",
    title: "Health and Development Outreach",
    eyebrow: "Outreach",
    excerpt:
      "Community-focused outreach programmes that promote health, prevent disease, and improve living conditions.",
    description:
      "FHDS works directly with communities through outreach programmes that promote health, prevent disease, and manage public health concerns at the grassroots level. Outreach activities can include health education, screening, referrals, community empowerment, environmental health, sanitation, and clean water initiatives.",
    audience: [
      "Communities",
      "Corporate social responsibility teams",
      "Local government programmes",
      "NGOs and public health partners",
    ],
    capabilities: [
      "Health education and awareness",
      "Screening and referral programmes",
      "Community empowerment initiatives",
      "Environmental health support",
      "Grassroots programme delivery",
    ],
    outcomes: [
      "Improved access to care",
      "Stronger community awareness",
      "Practical support for healthier living conditions",
    ],
    icon: "users",
    seoTitle: "Health and Development Outreach Programmes",
    seoDescription:
      "Community health and development outreach programmes for health education, screening, referrals, empowerment, and public health impact.",
  },
  {
    slug: "training",
    title: "Health and Development Training",
    eyebrow: "Training",
    excerpt:
      "Training programmes, seminars, and workshops for professionals and stakeholders in health and development.",
    description:
      "FHDS organises and facilitates training programmes that build the capacity of healthcare professionals, community health workers, and other stakeholders. Training is designed to strengthen human capital and improve the delivery of effective, sustainable health and development outcomes.",
    audience: [
      "Healthcare professionals",
      "Community health workers",
      "Programme teams",
      "Institutional stakeholders",
    ],
    capabilities: [
      "Workshops and seminars",
      "Professional capacity building",
      "Community health worker training",
      "Public health and development modules",
      "Stakeholder learning sessions",
    ],
    outcomes: [
      "Stronger workforce capacity",
      "Better programme delivery skills",
      "Shared standards across teams",
    ],
    icon: "graduation",
    seoTitle: "Health and Development Training",
    seoDescription:
      "Professional training, seminars, and workshops for healthcare workers, community health workers, and development stakeholders.",
  },
  {
    slug: "health-supplies",
    title: "Health Supplies",
    eyebrow: "Supplies",
    excerpt:
      "Reliable supply of medical equipment, pharmaceuticals, health-related products, and development resources.",
    description:
      "FHDS supplies medical equipment, pharmaceuticals, and health-related products that support primary healthcare delivery and public health programmes. Supply work may also include educational materials, medical technology, digital health solutions, and data analytics resources.",
    audience: [
      "Primary healthcare programmes",
      "Public health initiatives",
      "Procurement teams",
      "Development projects",
    ],
    capabilities: [
      "Medical equipment supply",
      "Pharmaceutical and health product sourcing",
      "Educational material supply",
      "Medical technology support",
      "Digital health and analytics resources",
    ],
    outcomes: [
      "Improved resource availability",
      "Better programme readiness",
      "More reliable access to essential health inputs",
    ],
    icon: "package",
    seoTitle: "Health Supplies and Medical Commodities",
    seoDescription:
      "Supply of medical equipment, pharmaceuticals, health products, educational materials, and digital health resources.",
  },
  {
    slug: "fortified-elite-care",
    title: "Fortified Elite Care",
    eyebrow: "Personalised care",
    excerpt:
      "Home-based personalised healthcare services for older adults and peace of mind for families.",
    description:
      "Fortified Elite Care provides personalised healthcare services for older adults in the comfort of their homes. Through routine monitoring, medication reviews, health assessments, and coordinated care, FHDS helps senior citizens age with dignity while supporting families with dependable care.",
    audience: [
      "Older adults",
      "Families and caregivers",
      "Busy professionals supporting ageing parents",
      "Home care coordinators",
    ],
    capabilities: [
      "Routine health monitoring",
      "Medication reviews",
      "Health assessments",
      "Coordinated care support",
      "Family peace-of-mind updates",
    ],
    outcomes: [
      "Dignified ageing at home",
      "Earlier health issue detection",
      "Better care coordination for families",
    ],
    icon: "homeCare",
    seoTitle: "Fortified Elite Care for Older Adults",
    seoDescription:
      "Personalised home-based healthcare services for older adults, including routine monitoring, assessments, medication reviews, and coordinated care.",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
