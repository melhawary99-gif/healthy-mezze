import type { Metadata } from "next";
import Link from "next/link";
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

export default async function Home({ params }: HomePageProps) {
  const { locale } = await params;

  console.log("✅ LOCALIZED HOMEPAGE");

  return (
    <div className="bg-[#FAFAF7]">
      <Hero />

      <Categories />

      <FeaturedRecipes />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
              {locale === "ar" ? "المعرفة وراء الوصفة" : "More Than Recipes"}
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {locale === "ar"
                ? "تعلم عن المطبخ الذي تحبه"
                : "Learn the food behind the recipes"}
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              {locale === "ar"
                ? "أدلة عملية عن المطبخ المصري واللبناني والمازة ومكونات البحر المتوسط والطبخ الصحي."
                : "Explore practical guides to Egyptian and Lebanese cuisine, mezze culture, Mediterranean ingredients, and healthy everyday cooking."}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["egyptian-cuisine-guide", "Egyptian Cuisine Guide", "Explore the traditions, ingredients, and everyday dishes of Egyptian cooking."],
              ["lebanese-cuisine-guide", "Lebanese Cuisine Guide", "Understand the ingredients, flavors, and shared-table traditions of Lebanese food."],
              ["healthy-mezze-table-guide", "Build a Healthy Mezze Table", "Learn how to combine vegetables, legumes, dips, grains, and protein."],
            ].map(([slug, title, description]) => (
              <Link
                key={slug}
                href={`/${locale}/guides/${slug}`}
                className="rounded-3xl border border-gray-200 bg-[#FAFAF7] p-7 transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900">
                  {locale === "ar"
                    ? slug === "egyptian-cuisine-guide"
                      ? "دليل المطبخ المصري"
                      : slug === "lebanese-cuisine-guide"
                        ? "دليل المطبخ اللبناني"
                        : "كيف تبني مائدة مازة صحية"
                    : title}
                </h3>
                <p className="mt-3 leading-7 text-gray-600">
                  {locale === "ar"
                    ? slug === "egyptian-cuisine-guide"
                      ? "تعرف على تقاليد ومكونات وأطباق المطبخ المصري."
                      : slug === "lebanese-cuisine-guide"
                        ? "افهم المكونات والنكهات وتقاليد المائدة اللبنانية."
                        : "تعلم كيفية جمع الخضروات والبقوليات والمقبلات والحبوب والبروتين."
                    : description}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href={`/${locale}/guides`}
              className="font-semibold text-emerald-700 hover:text-emerald-900"
            >
              {locale === "ar" ? "استكشف جميع الأدلة ←" : "Explore all guides →"}
            </Link>
          </div>
        </div>
      </section>

        <MediterraneanStory />

      <Statistics />

      <WhyHealthyMezze />

      <HealthyTip />

      <Newsletter variant="hero" />
    </div>
  );
}
