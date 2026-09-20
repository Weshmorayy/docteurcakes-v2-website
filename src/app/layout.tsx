import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppSticky } from "@/components/layout/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | Gâteaux d'Exception à Cocody, Abidjan`,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: "/images/brand/logo.png",
    apple: "/images/brand/logo.png",
  },
  openGraph: {
    title: `${siteConfig.name} — Cake Design & Wedding Cakes`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "fr_CI",
    type: "website",
    images: [
      {
        url: "/images/brand/logo-white-bg.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "name": siteConfig.name,
    "image": `${siteConfig.url}/images/brand/logo-white-bg.jpg`,
    "telephone": siteConfig.contact.phonePrimary,
    "email": siteConfig.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address.street,
      "addressLocality": siteConfig.contact.address.neighborhood,
      "addressRegion": "Abidjan",
      "addressCountry": "CI"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "5.359952",
      "longitude": "-4.008256"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:30",
      "closes": "19:00"
    },
    "priceRange": "17500 FCFA - 600000 FCFA",
    "servesCuisine": "Pâtisserie, Cake Design, Wedding Cakes, Pastels",
    "url": siteConfig.url,
  };

  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-dark-900 text-ivory-50 antialiased selection:bg-gold-500 selection:text-dark-950">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppSticky />
      </body>
    </html>
  );
}
