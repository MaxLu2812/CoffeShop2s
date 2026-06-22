import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://coffeewerk.com"),
  title: {
    template: "%s — Coffeewerk",
    default: "Coffeewerk — Specialty Coffee & Community",
  },
  description:
    "Specialty coffee shop in London. Single-origin espresso, pour-over, and community. Visit us in Clerkenwell.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Coffeewerk",
    title: "Coffeewerk — Specialty Coffee & Community",
    description:
      "Specialty coffee shop in London. Single-origin espresso, pour-over, and community.",
    url: "https://coffeewerk.com",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coffeewerk — Specialty Coffee & Community",
    description: "Specialty coffee shop in London.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full`}
    >
      <body className="flex min-h-full flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Coffeewerk",
              image: "https://coffeewerk.com/images/og-image.jpg",
              url: "https://coffeewerk.com",
              telephone: "+44 20 7123 4567",
              email: "hello@coffeewerk.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "42 Grind Lane",
                addressLocality: "London",
                postalCode: "EC1A 1BB",
                addressCountry: "GB",
              },
              openingHoursSpecification: [
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "07:30", closes: "17:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "07:30", closes: "17:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "07:30", closes: "17:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "07:30", closes: "19:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "07:30", closes: "19:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "18:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "09:00", closes: "16:00" },
              ],
              servesCuisine: "Coffee",
              priceRange: "£",
            }),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
