import type { NavLinkItem, ShopInfo, OpeningHoursEntry } from "@/lib/types";

export const navLinks: NavLinkItem[] = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const shopInfo: ShopInfo = {
  name: "Coffeewerk",
  tagline: "Specialty Coffee & Community",
  description:
    "Tucked away on Grind Lane in the heart of Clerkenwell, Coffeewerk is a neighbourhood coffee shop built on a genuine love for the craft. We source our beans directly from small farms in Ethiopia, Colombia, and Costa Rica, working with importers who share our commitment to fair wages and sustainable growing practices. Every shot is pulled to order on our La Marzocco GB5, and every pastry is baked fresh each morning by our in-house baker. Whether you are stopping in for a quick espresso at the counter or settling in for an afternoon with a pour-over and a book, we want you to feel at home.",
  address: "42 Grind Lane, London, EC1A 1BB",
  phone: "+44 20 7123 4567",
  email: "hello@coffeewerk.com",
  social: {
    instagram: "https://instagram.com/coffeewerk",
  },
};

export const openingHours: OpeningHoursEntry[] = [
  { day: "Monday", open: "07:30", close: "17:00" },
  { day: "Tuesday", open: "07:30", close: "17:00" },
  { day: "Wednesday", open: "07:30", close: "17:00" },
  { day: "Thursday", open: "07:30", close: "19:00" },
  { day: "Friday", open: "07:30", close: "19:00" },
  { day: "Saturday", open: "08:00", close: "18:00" },
  { day: "Sunday", open: "09:00", close: "16:00" },
];
