import type { Metadata } from "next";

import FavoritesClient from "@/components/recipes/FavoritesClient";

const SITE_URL = "https://www.healthymezze.com";

type FavoritesPageProps = {
  params: Promise<{
    locale: "en" | "ar";
  }>;
};

export async function generateMetadata({
  params,
}: FavoritesPageProps): Promise<Metadata> {
  const { locale } = await params;

  const safeLocale = locale === "ar" ? "ar" : "en";

  const messages = (await import(`@/messages/${safeLocale}.json`)).default;
  const favorites = messages.Favorites;

  const title = favorites.title;
  const description = favorites.description;

  const localizedUrl = `${SITE_URL}/${safeLocale}/favorites`;
  const englishUrl = `${SITE_URL}/en/favorites`;
  const arabicUrl = `${SITE_URL}/ar/favorites`;

  return {
    title,
    description,

    alternates: {
      canonical: localizedUrl,

      languages: {
        en: englishUrl,
        ar: arabicUrl,
        "x-default": englishUrl,
      },
    },

    robots: {
      index: false,
      follow: true,
    },

    openGraph: {
      type: "website",
      locale: safeLocale === "ar" ? "ar_AR" : "en_US",
      alternateLocale: safeLocale === "ar" ? ["en_US"] : ["ar_AR"],
      url: localizedUrl,
      siteName: "Healthy Mezze",
      title,
      description,
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function FavoritesPage() {
  return <FavoritesClient />;
}
