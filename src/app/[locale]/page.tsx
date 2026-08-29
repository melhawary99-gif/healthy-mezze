import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, getLanguageAlternates, SITE_URL } from "@/lib/seo";
import Hero from "@/components/home/Hero";
import dynamic from "next/dynamic";

import MediterraneanStory from "@/components/home/MediterraneanStory";
const Categories = dynamic(() => import("@/components/home/Categories"));
const FeaturedRecipes = dynamic(() => import("@/components/home/FeaturedRecipes"));
const Statistics = dynamic(() => import("@/components/home/Statistics"));
const WhyHealthyMezze = dynamic(() => import("@/components/home/WhyHealthyMezze"));
const HealthyTip = dynamic(() => import("@/components/home/HealthyTip"));
const Newsletter = dynamic(() => import("@/components/Newsletter"));


type HomePageProps = {
  params: Promise<{
    locale: "en" | "ar";
  }>;
};

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;

  const safeLocale = locale === "ar" ? "ar" : "en";

  const messages = (await import(`@/messages/${safeLocale}.json`)).default;
  const home = messages.Home;

  const title = `${home.titleLine1} ${home.titleLine2}`;
  const description = home.description;

  const localizedUrl = `${SITE_URL}/${safeLocale}`;
  const englishUrl = `${SITE_URL}/en`;
  const arabicUrl = `${SITE_URL}/ar`;

  return {
    title,
    description,

    alternates: {
      canonical: localizedUrl,

      languages: getLanguageAlternates(),
    },

    openGraph: {
      type: "website",
      locale: safeLocale === "ar" ? "ar_AR" : "en_US",
      alternateLocale: safeLocale === "ar" ? ["en_US"] : ["ar_AR"],
      url: localizedUrl,
      siteName: "Healthy Mezze",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}

export default function Home() {
  console.log("✅ LOCALIZED HOMEPAGE");

  return (
    <div className="bg-[#FAFAF7]">
      <Hero />

      <Categories />

      <FeaturedRecipes />

        <MediterraneanStory />

      <Statistics />

      <WhyHealthyMezze />

      <HealthyTip />

      <Newsletter variant="hero" />
    </div>
  );
}
