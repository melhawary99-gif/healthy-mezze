import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";

import { newsCategories } from "@/data/news/categories";
import { newsArticles } from "@/data/news";

import { SITE_URL } from "@/lib/seo";

type Props = {
  params: Promise<{
    locale: string;
    category: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return newsArticles.flatMap((article) => [
    {
      locale: "en",
      category: article.category,
      slug: article.slug,
    },
    {
      locale: "ar",
      category: article.category,
      slug: article.slug,
    },
  ]);
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale, category, slug } = await params;

  const article = newsArticles.find(
    (item) => item.category === category && item.slug === slug
  );

  if (!article) return {};

  const content = locale === "ar" ? article.ar : article.en;
  const url = `${SITE_URL}/${locale}/news/${category}/${slug}`;

  return {
    title: content.title,
    description: content.excerpt,
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_URL}/en/news/${category}/${slug}`,
        ar: `${SITE_URL}/ar/news/${category}/${slug}`,
        "x-default": `${SITE_URL}/en/news/${category}/${slug}`,
      },
    },
    openGraph: {
      title: content.title,
      description: content.excerpt,
      url,
      type: "article",
    },
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { locale, category, slug } = await params;

  const article = newsArticles.find(
    (item) => item.category === category && item.slug === slug
  );

  if (!article) {
    notFound();
  }

  const categoryData = newsCategories.find(
    (item) => item.slug === category
  );

  if (!categoryData) {
    notFound();
  }

  const content = locale === "ar" ? article.ar : article.en;

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href={`/news/${category}`}
        className="text-sm font-semibold text-green-700 hover:text-green-800"
      >
        ← {locale === "ar" ? "العودة إلى القسم" : "Back to section"}
      </Link>

      <article className="mt-8">
        <header>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            {content.title}
          </h1>

          <p className="mt-5 text-xl leading-8 text-gray-600">
            {content.excerpt}
          </p>
        </header>

        <div className="mt-10 space-y-6 text-lg leading-8 text-gray-700">
          {content.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
