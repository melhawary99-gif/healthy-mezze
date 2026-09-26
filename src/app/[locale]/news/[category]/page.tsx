import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

import { newsArticles } from "@/data/news";
import { newsCategories } from "@/data/news/categories";
import { SITE_URL } from "@/lib/seo";

type Props = {
  params: Promise<{
    locale: string;
    category: string;
  }>;
};

export async function generateStaticParams() {
  return ["en", "ar"].flatMap((locale) =>
    newsCategories.map((category) => ({
      locale,
      category: category.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale: rawLocale, category } = await params;
  const locale = rawLocale === "ar" ? "ar" : "en";

  const categoryInfo = newsCategories.find(
    (item) => item.slug === category
  );

  if (!categoryInfo) return {};

  const t = await getTranslations({ locale });
  const title = t(`Navigation.${categoryInfo.nameKey}`);
  const description =
    locale === "ar"
      ? `قصص ومقالات Healthy Mezze حول ${title}.`
      : `Healthy Mezze stories and articles about ${title}.`;

  const url = `${SITE_URL}/${locale}/news/${category}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_URL}/en/news/${category}`,
        ar: `${SITE_URL}/ar/news/${category}`,
        "x-default": `${SITE_URL}/en/news/${category}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
    },
  };
}

export default async function NewsCategoryPage({ params }: Props) {
  const { locale: rawLocale, category } = await params;
  const locale = rawLocale === "ar" ? "ar" : "en";

  const categoryInfo = newsCategories.find(
    (item) => item.slug === category
  );

  if (!categoryInfo) notFound();

  const t = await getTranslations({ locale });

  const articles = newsArticles.filter(
    (article) => article.category === category
  );

  const categoryTitle = t(`Navigation.${categoryInfo.nameKey}`);

  return (
    <main
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="min-h-screen overflow-hidden bg-[#fffaf0]"
    >
      {/* =====================================================
          COLORFUL NEWS HEADER
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#31572c] text-white">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#f6c453]/30 blur-3xl" />
        <div className="absolute -bottom-32 right-10 h-80 w-80 rounded-full bg-[#ef7055]/25 blur-3xl" />
        <div className="absolute right-1/3 top-10 h-32 w-32 rounded-full bg-[#74c69d]/20 blur-2xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
          <Link
            href="/news"
            className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur transition hover:bg-white/20"
          >
            ← {locale === "ar" ? "كل الأخبار" : "All News"}
          </Link>

          <div className="mt-10 max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#f6c453]">
              Healthy Mezze Journal
            </p>

            <h1 className="mt-4 font-serif text-5xl font-black leading-none sm:text-6xl lg:text-7xl">
              {categoryTitle}
            </h1>

            <div className="mt-7 h-2 w-28 rounded-full bg-[#ef7055]" />

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
              {locale === "ar"
                ? "قصص وأفكار عملية من مطبخ Healthy Mezze، تجمع بين الطعام والثقافة والتجربة اليومية."
                : "Stories, practical ideas and kitchen discoveries from Healthy Mezze, where food, culture and everyday cooking come together."}
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          ARTICLE GRID
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        {articles.length === 0 ? (
          <div className="rounded-[2rem] bg-white p-12 text-center shadow-sm">
            <div className="text-5xl">🍋</div>

            <h2 className="mt-5 font-serif text-3xl font-black text-[#263b22]">
              {locale === "ar"
                ? "المقالات قادمة قريبًا"
                : "Stories are coming soon"}
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-gray-600">
              {locale === "ar"
                ? "نعمل على إعداد قصص ومقالات جديدة."
                : "We're preparing new stories and articles for this section."}
            </p>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-12">
            {articles.map((article, index) => {
              const content =
                locale === "ar" ? article.ar : article.en;

              const featured = index === 0;

              return (
                <Link
                  key={article.slug}
                  href={`/news/${article.category}/${article.slug}`}
                  className={`group relative overflow-hidden rounded-[2rem] bg-white shadow-[0_12px_40px_rgba(49,87,44,0.10)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(49,87,44,0.16)] ${
                    featured
                      ? "lg:col-span-6"
                      : "lg:col-span-4"
                  }`}
                >
                  {/* Decorative color shape */}
                  <div
                    className={`absolute -right-16 -top-16 z-0 h-40 w-40 rounded-full ${
                      index % 3 === 0
                        ? "bg-[#f6c453]/30"
                        : index % 3 === 1
                          ? "bg-[#74c69d]/25"
                          : "bg-[#ef7055]/20"
                    }`}
                  />

                  {/* IMAGE */}
                  {article.image && (
                    <div
                      className={`relative overflow-hidden ${
                        featured
                          ? "aspect-[16/7]"
                          : "aspect-[4/3]"
                      }`}
                    >
                      <Image
                        src={article.image}
                        alt={
                          article.imageAlt?.[locale] ??
                          content.title
                        }
                        fill
                        sizes={
                          featured
                            ? "(max-width: 1024px) 94vw, 760px"
                            : "(max-width: 1024px) 94vw, 380px"
                        }
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

                      <div className="absolute left-5 top-5 rounded-full bg-[#f6c453] px-4 py-2 text-xs font-black uppercase tracking-wider text-[#263b22] shadow-lg">
                        {categoryTitle}
                      </div>

                      <div className="absolute bottom-5 left-5 right-5">
                        <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#31572c]">
                          Healthy Mezze Journal
                        </span>
                      </div>
                    </div>
                  )}

                  {/* CONTENT */}
                  <div
                    className={`relative z-10 ${
                      featured
                        ? "p-4 sm:p-5"
                        : "p-6"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#ef7055]">
                        {article.publishedAt
                          ? new Date(
                              article.publishedAt
                            ).toLocaleDateString(
                              locale === "ar" ? "ar" : "en",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              }
                            )
                          : ""}
                      </span>

                      <span className="text-xl transition duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>

                    <p
                      className={`font-serif font-black uppercase tracking-[0.18em] text-[#ef7055] ${
                        featured
                          ? "text-2xl sm:text-3xl lg:text-4xl"
                          : "text-3xl"
                      }`}
                    >
                      {locale === "ar" ? "الثوم" : "GARLIC"}
                    </p>

                    <h2
                      className={`mt-2 font-serif font-black leading-tight text-[#263b22] ${
                        featured
                          ? "text-lg sm:text-xl lg:text-2xl"
                          : "text-xl sm:text-2xl"
                      }`}
                    >
                      {locale === "ar"
                        ? "الفص الصغير وراء الكثير من الوجبات الرائعة"
                        : "The Little Clove Behind So Many Great Meals"}
                    </h2>

                    <p
                      className={`mt-4 leading-7 text-gray-600 ${
                        featured
                          ? "text-sm sm:text-base"
                          : "text-base"
                      }`}
                    >
                      {content.excerpt}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#31572c] px-5 py-3 text-sm font-bold text-white transition group-hover:bg-[#ef7055]">
                      {locale === "ar"
                        ? "اقرأ القصة"
                        : "Read the story"}
                      <span>→</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
