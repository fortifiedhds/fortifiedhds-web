import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  GraduationCap,
  HeartPulse,
  Home,
  Images,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Microscope,
  Newspaper,
  PackageCheck,
  Phone,
  ShieldCheck,
  Stethoscope,
  UsersRound,
} from "lucide-react";

export const icons = {
  arrowRight: ArrowRight,
  book: BookOpenCheck,
  check: CheckCircle2,
  chevronDown: ChevronDown,
  clipboard: ClipboardCheck,
  graduation: GraduationCap,
  heart: HeartPulse,
  homeCare: Home,
  images: Images,
  mail: Mail,
  mapPin: MapPin,
  menu: Menu,
  message: MessageCircle,
  microscope: Microscope,
  news: Newspaper,
  package: PackageCheck,
  phone: Phone,
  shield: ShieldCheck,
  stethoscope: Stethoscope,
  users: UsersRound,
} as const;

export type IconName = keyof typeof icons;

type AppIconProps = {
  name: IconName;
  className?: string;
  strokeWidth?: number;
};

export function AppIcon({ name, className, strokeWidth = 1.8 }: AppIconProps) {
  const Icon = icons[name];

  return <Icon aria-hidden="true" className={className} strokeWidth={strokeWidth} />;
}
