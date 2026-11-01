import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

import { newsCategories } from "@/data/news/categories";
import { newsArticles } from "@/data/news";

import { SITE_URL } from "@/lib/seo";
import AdsterraNativeBanner from "@/components/ads/AdsterraNativeBanner";
import Adsterra728Banner from "@/components/ads/Adsterra728Banner";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Navigation" });

  const title = t("news");
  const description =
    locale === "ar"
      ? "مقالات Healthy Mezze عن فوائد المكونات وأدوات المطبخ ونصائح الطبخ والثقافة والتراث."
      : "Healthy Mezze articles covering ingredient benefits, kitchen equipment, cooking tips, culture, and heritage.";

  const url = `${SITE_URL}/${locale}/news`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_URL}/en/news`,
        ar: `${SITE_URL}/ar/news`,
        "x-default": `${SITE_URL}/en/news`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
  };
}

export default async function NewsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Navigation" });

  const localizedCategories = newsCategories.map((category) => ({
    ...category,
    name: t(category.nameKey),
  }));

  const articles = newsArticles.filter(
    (article) => article.en.title || article.ar.title
  );

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
          Healthy Mezze
        </p>

        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          {t("news")}
        </h1>

        <p className="mt-5 text-lg leading-8 text-gray-600">
          {locale === "ar"
            ? "مساحة تحريرية جديدة من Healthy Mezze. سنشارك هنا مقالات عملية وقصصًا مرتبطة بالطعام والطبخ والثقافة."
            : "A new editorial space from Healthy Mezze for practical articles, cooking ideas, and stories connected to food and culture."}
        </p>
      </header>

      <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {localizedCategories.map((category) => (
          <Link
            key={category.slug}
            href={`/news/${category.slug}`}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:shadow-md"
          >
            <h2 className="text-lg font-bold text-gray-900">
              {category.name}
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              {locale === "ar"
                ? "استكشف المقالات في هذا القسم."
                : "Explore articles in this section."}
            </p>
          </Link>
        ))}
      </section>

      {articles.length > 0 ? (
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-gray-900">
            {locale === "ar" ? "أحدث المقالات" : "Latest Articles"}
          </h2>

          <div className="mt-7 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => {
              const content = locale === "ar" ? article.ar : article.en;
              const categoryInfo = newsCategories.find(
                (category) => category.slug === article.category
              );
              const categoryName = categoryInfo
                ? t(categoryInfo.nameKey)
                : article.category;

              return (
                <Link
                  key={article.slug}
                  href={`/news/${article.category}/${article.slug}`}
                  className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {article.image && (
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#f3e9dc]">
                      <Image
                        src={article.image}
                        alt={
                          article.imageAlt?.[locale === "ar" ? "ar" : "en"] ??
                          content.title
                        }
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    <span className="inline-flex rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-800">
                      {categoryName}
                    </span>

                    {article.publishedAt && (
                      <p className="mt-4 text-xs font-medium text-gray-500">
                        {new Date(article.publishedAt).toLocaleDateString(
                          locale === "ar" ? "ar" : "en",
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </p>
                    )}

                    <h3 className="mt-3 text-xl font-bold leading-snug text-gray-900 transition group-hover:text-green-800">
                      {content.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-gray-600">
                      {content.excerpt}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 font-bold text-green-800">
                      {locale === "ar" ? "اقرأ المقال" : "Read article"}
                      <span>→</span>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      ) : (
        <section className="mt-14 rounded-3xl border border-dashed border-gray-300 bg-gray-50 px-6 py-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            {locale === "ar"
              ? "المقالات قادمة قريبًا"
              : "Articles are coming soon"}
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            {locale === "ar"
              ? "سنضيف هنا مقالات أصلية من Healthy Mezze عندما تكون جاهزة."
              : "Original Healthy Mezze articles will be added here when they are ready."}
          </p>
        </section>
      )}

      <AdsterraNativeBanner />

<Adsterra728Banner />
    </main>
  );
}
