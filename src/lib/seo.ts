import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export function constructMetadata({
  title,
  description,
  image = "/images/brand/logo-white-bg.jpg",
  pathname = "",
}: {
  title?: string;
  description?: string;
  image?: string;
  pathname?: string;
} = {}): Metadata {
  const metaTitle = title 
    ? `${title} | ${siteConfig.shortName} Abidjan`
    : `${siteConfig.name} — Cake Design & Gâteaux d'Exception à Cocody, Abidjan`;

  const metaDesc = description || siteConfig.description;
  const canonicalUrl = `${siteConfig.url}${pathname}`;

  return {
    title: metaTitle,
    description: metaDesc,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDesc,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "fr_CI",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDesc,
      images: [image],
    },
  };
}
