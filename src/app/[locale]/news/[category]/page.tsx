import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";

import { newsCategories } from "@/data/news/categories";
import { newsArticles } from "@/data/news";

import { SITE_URL } from "@/lib/seo";

type Props = {
  params: Promise<{
    locale: string;
    category: string;
  }>;
};

export function generateStaticParams() {
  return newsCategories.flatMap((category) => [
    { locale: "en", category: category.slug },
    { locale: "ar", category: category.slug },
  ]);
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale, category } = await params;
  const categoryData = newsCategories.find(
    (item) => item.slug === category
  );

  if (!categoryData) return {};

  const t = await getTranslations({ locale, namespace: "Navigation" });
  const title = t(categoryData.nameKey);

  const url = `${SITE_URL}/${locale}/news/${category}`;

  return {
    title,
    description:
      locale === "ar"
        ? `مقالات Healthy Mezze في قسم ${title}.`
        : `Healthy Mezze articles in ${title}.`,
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_URL}/en/news/${category}`,
        ar: `${SITE_URL}/ar/news/${category}`,
        "x-default": `${SITE_URL}/en/news/${category}`,
      },
    },
  };
}

export default async function NewsCategoryPage({ params }: Props) {
  const { locale, category } = await params;

  const categoryData = newsCategories.find(
    (item) => item.slug === category
  );

  if (!categoryData) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "Navigation" });
  const title = t(categoryData.nameKey);

  const articles = newsArticles.filter(
    (article) => article.category === category
  );

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/news"
        className="text-sm font-semibold text-green-700 hover:text-green-800"
      >
        ← {t("news")}
      </Link>

      <header className="mt-6 max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          {title}
        </h1>

        <p className="mt-4 text-lg leading-8 text-gray-600">
          {locale === "ar"
            ? "سيتم نشر المقالات الأصلية في هذا القسم لاحقًا."
            : "Original articles for this section will be published here later."}
        </p>
      </header>

      {articles.length === 0 ? (
        <section className="mt-12 rounded-3xl border border-dashed border-gray-300 bg-gray-50 px-6 py-12 text-center">
          <p className="text-gray-600">
            {locale === "ar"
              ? "لا توجد مقالات منشورة في هذا القسم حتى الآن."
              : "There are no published articles in this section yet."}
          </p>
        </section>
      ) : (
        <section className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => {
            const content = locale === "ar" ? article.ar : article.en;

            return (
              <Link
                key={article.slug}
                href={`/news/${category}/${article.slug}`}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h2 className="text-xl font-bold text-gray-900">
                  {content.title}
                </h2>

                <p className="mt-3 text-gray-600">{content.excerpt}</p>
              </Link>
            );
          })}
        </section>
      )}
    </main>
  );
}
