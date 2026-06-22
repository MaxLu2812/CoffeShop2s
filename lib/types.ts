export interface NavLinkItem {
  label: string;
  href: string;
}

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  variant?: "default" | "narrow" | "wide";
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "light" | "dark" | "cream" | "espresso";
  "aria-label"?: string;
}

export interface HeadingProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5";
  className?: string;
  variant?: "hero" | "section" | "card" | "subtitle" | "eyebrow";
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  className?: string;
  type?: "button" | "submit";
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "glass";
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: "espresso" | "pour-over" | "pastries" | "signature";
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  rating: number;
  avatar?: string;
}

export interface FaqEntry {
  id: string;
  question: string;
  answer: string;
}

export interface OpeningHoursEntry {
  day: string;
  open: string;
  close: string;
  closed?: boolean;
}

export interface ShopInfo {
  name: string;
  tagline: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  social: {
    instagram?: string;
    twitter?: string;
  };
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}
