import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { newsArticles } from "@/data/news";
import { newsCategories } from "@/data/news/categories";
import { getRecipeBySlug } from "@/lib/recipes";
import { getLocalizedRecipe } from "@/lib/localizedRecipes";
import { SITE_URL } from "@/lib/seo";
import AdsterraNativeBanner from "@/components/ads/AdsterraNativeBanner";
import Adsterra728Banner from "@/components/ads/Adsterra728Banner";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{
    locale: string;
    category: string;
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return ["en", "ar"].flatMap((locale) =>
    newsArticles.map((article) => ({
      locale,
      category: article.category,
      slug: article.slug,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale, category, slug } = await params;
  const locale = rawLocale === "ar" ? "ar" : "en";

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
      images: article.image
        ? [
            {
              url: `${SITE_URL}${article.image}`,
              width: 1200,
              height: 800,
              alt: article.imageAlt?.[locale] ?? content.title,
            },
          ]
        : undefined,
    },
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { locale: rawLocale, category, slug } = await params;
  const locale = rawLocale === "ar" ? "ar" : "en";
  const t = await getTranslations({ locale });

  const article = newsArticles.find(
    (item) => item.category === category && item.slug === slug
  );

  if (!article) notFound();

  const content = locale === "ar" ? article.ar : article.en;

  const categoryInfo = newsCategories.find((item) => item.slug === category);

  const recipeResults = (article.relatedRecipes ?? [])
    .map((recipeSlug) => getRecipeBySlug(recipeSlug))
    .filter((recipe): recipe is NonNullable<typeof recipe> => recipe !== undefined);

  const uniqueRecipes = recipeResults.filter(
    (recipe, index, array) =>
      array.findIndex((item) => item.slug === recipe.slug) === index
  );

  const localizedResults = await Promise.all(
    uniqueRecipes.map((recipe) =>
      getLocalizedRecipe(recipe.slug, locale)
    )
  );

  const localizedRecipes = localizedResults.filter(
    (recipe): recipe is NonNullable<typeof recipe> => recipe !== null
  );

  // Keep the final 3 recipes completely outside the article column flow.
  const articleRecipes = (article.relatedRecipes ?? [])
      .map((slug) => localizedRecipes.find((recipe) => recipe.slug === slug))
      .filter((recipe): recipe is (typeof localizedRecipes)[number] => Boolean(recipe));
  const bottomRecipes = localizedRecipes.slice(-3);

  const pageUrl = `${SITE_URL}/${locale}/news/${category}/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: content.title,
    description: content.excerpt,
    url: pageUrl,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    image: article.image ? `${SITE_URL}${article.image}` : undefined,
    inLanguage: locale,
    author: {
      "@type": "Organization",
      name: "Healthy Mezze",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Healthy Mezze",
      url: SITE_URL,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: locale === "ar" ? "الرئيسية" : "Home",
        item: `${SITE_URL}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: locale === "ar" ? "الأخبار" : "News",
        item: `${SITE_URL}/${locale}/news`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: categoryInfo
          ? t(`Navigation.${categoryInfo.nameKey}`)
          : category,
        item: `${SITE_URL}/${locale}/news/${category}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: content.title,
        item: pageUrl,
      },
    ],
  };

  /*
   * We deliberately use different visual treatments based on position.
   * The article data stays unchanged; this is purely the presentation layer.
   */
  const sectionColors = [
    "bg-[#fff8df]",
    "bg-[#e5f4df]",
    "bg-[#fff0e8]",
    "bg-[#e2f4f2]",
    "bg-[#f4e9d8]",
    "bg-[#edf3dc]",
    "bg-[#fff1c7]",
    "bg-[#e6efe8]",
    "bg-[#f8e7e1]",
  ];

const hackStyles = [
  {
    card: "bg-[#fff1d6] border-[#f4b942]/30",
    heading: "text-[#c75b12]",
    accent: "bg-[#f4b942]",
    text: "text-[#5b3b20]",
  },
  {
    card: "bg-[#e5f5df] border-[#74c69d]/30",
    heading: "text-[#28724f]",
    accent: "bg-[#74c69d]",
    text: "text-[#31533f]",
  },
  {
    card: "bg-[#ffe8e2] border-[#ef7055]/30",
    heading: "text-[#c94d36]",
    accent: "bg-[#ef7055]",
    text: "text-[#5c3932]",
  },
  {
    card: "bg-[#e1f4f3] border-[#52aaa4]/30",
    heading: "text-[#267d78]",
    accent: "bg-[#52aaa4]",
    text: "text-[#315958]",
  },
  {
    card: "bg-[#f2e7fa] border-[#a56cc1]/30",
    heading: "text-[#77449a]",
    accent: "bg-[#a56cc1]",
    text: "text-[#4e3b59]",
  },
  {
    card: "bg-[#fff0c7] border-[#e6a817]/30",
    heading: "text-[#a86b00]",
    accent: "bg-[#e6a817]",
    text: "text-[#5c481f]",
  },
  {
    card: "bg-[#e4eefb] border-[#6195d4]/30",
    heading: "text-[#386da8]",
    accent: "bg-[#6195d4]",
    text: "text-[#354c68]",
  },
  {
    card: "bg-[#fbe4ef] border-[#d96b9b]/30",
    heading: "text-[#ad3e70]",
    accent: "bg-[#d96b9b]",
    text: "text-[#5b3948]",
  },
  {
    card: "bg-[#e7f2df] border-[#6b9e45]/30",
    heading: "text-[#4b7830]",
    accent: "bg-[#6b9e45]",
    text: "text-[#3e5232]",
  },
  {
    card: "bg-[#fff0e5] border-[#e98752]/30",
    heading: "text-[#c45d25]",
    accent: "bg-[#e98752]",
    text: "text-[#5b4030]",
  },
];


  /*
   * Editorial two-column flow:
   * every recipe is consumed exactly once.
   * Recipes are distributed between article sections so the
   * visual column continues naturally instead of leaving large gaps.
   */
  const recipeGroups = [
      0, 0, 0, 0, 0, 1, 2, 2, 1, 1,
      1, 2, 0, 1, 0, 1, 0, 0, 0,
    ];

  let recipeCursor = 0;

  const renderRecipeCard = (
    recipe: (typeof localizedRecipes)[number],
    featured = false
  ) => (
    <Link
      key={recipe.slug}
      href={`/recipes/${recipe.slug}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div
        className={`relative ${
          featured ? "aspect-[16/9]" : "aspect-[16/8]"
        }`}
      >
        <Image
          src={recipe.image}
          alt={recipe.imageAlt ?? recipe.title}
          fill
          sizes={
            featured
              ? "(max-width: 1024px) 90vw, 600px"
              : "(max-width: 1024px) 90vw, 350px"
          }
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#ef7055]">
          Healthy Mezze
        </p>

        <h4 className="mt-1 font-serif text-base font-black leading-tight text-[#263b22] sm:text-lg">
          {recipe.title}
        </h4>

        <span className="mt-2 block text-xs font-bold text-[#31572c]">
          {locale === "ar" ? "شاهد الوصفة ←" : "Cook this →"}
        </span>
      </div>
    </Link>
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/*
        HERO
      */}
      <section className="relative overflow-hidden bg-[#23452a] text-white">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#f7c948]/30 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-[#ef7055]/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10 lg:py-12">
          <Link
            href="/news"
            className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur transition hover:bg-white/20"
          >
            ← {locale === "ar" ? "الأخبار" : "News"}
          </Link>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            {article.image && (
              <div className="relative">
                <div className="absolute -inset-3 rotate-2 rounded-[2rem] bg-[#f7c948]" />

                <div className="relative overflow-hidden rounded-[2rem] border-8 border-white/90 bg-white shadow-2xl">
                  <Image
                    src={article.image}
                    alt={article.imageAlt?.[locale] ?? content.title}
                    width={1200}
                    height={800}
                    priority
                    sizes="(max-width: 1024px) 94vw, 700px"
                    className={
                      article.category === "culture-heritage"
                        ? "h-[300px] w-full object-cover sm:h-[420px] lg:h-[520px]"
                        : "h-auto max-h-[620px] w-full object-contain"
                    }
                  />
                </div>

                <div className="absolute -bottom-5 -right-3 rounded-2xl bg-[#ef7055] px-5 py-3 font-black shadow-xl">
                  {article.category === "culture-heritage"
                    ? (locale === "ar" ? "🌿 الثقافة والتراث" : "🌿 CULTURE & HERITAGE")
                    : (locale === "ar" ? "🧄 من مطبخنا" : "🧄 FROM OUR KITCHEN")}
                </div>
              </div>
            )}

            <div className="py-5">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-[#f7c948]">
                Healthy Mezze Journal
              </p>

              <h1 className="mt-5 font-serif text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
                {content.title}
              </h1>

              <div className="mt-7 h-2 w-28 rounded-full bg-[#ef7055]" />

              <p className="mt-7 text-xl leading-9 text-white/80 sm:text-2xl sm:leading-10">
                {content.excerpt}
              </p>

              {article.publishedAt && (
                <p className="mt-7 text-sm font-bold text-white/50">
                  {new Date(article.publishedAt).toLocaleDateString(
                    locale === "ar" ? "ar" : "en",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/*
        ARTICLE + RECIPE EDITORIAL FLOW
      */}
      <article id="top" className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="columns-1 gap-6 lg:columns-2">
          {content.sections.map((section, index) => {
            const color = sectionColors[index % sectionColors.length];
        const hackStyle =
          index >= 1 && index <= 10 ? hackStyles[index - 1] : null;

            const recipeCount = recipeGroups[index] ?? 0;

            const sectionRecipes = articleRecipes.slice(
              recipeCursor,
              recipeCursor + recipeCount
            );

            recipeCursor += sectionRecipes.length;

            return (
              <div
                key={`${section.heading}-${index}`}
                className="mb-6 break-inside-avoid"
              >
                <section
                  className={`relative overflow-hidden rounded-[2rem] border p-6 shadow-[0_12px_35px_rgba(40,55,35,0.08)] transition-transform duration-300 hover:-translate-y-1 sm:p-8 ${
                    hackStyle ? hackStyle.card : color
                  }`}
                >
                  <div
                    className={`absolute -right-12 -top-12 h-32 w-32 rounded-full ${
                      hackStyle ? `${hackStyle.accent}/20` : "bg-white/40"
                    }`}
                  />

                  <div className="relative">
                    <div className="mb-6">
                      <h2
                        className={`font-serif text-3xl font-black italic leading-tight tracking-tight sm:text-4xl ${
                          hackStyle ? hackStyle.heading : "text-[#263b22]"
                        }`}
                      >
                        {section.heading}
                      </h2>
                    </div>

                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className={`mt-4 text-[17px] leading-8 ${
                          hackStyle ? hackStyle.text : "text-[#4d5b4b]"
                        }${
                          index === 0 && paragraphIndex === 0
                            ? " first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-black first-letter:leading-[0.8] first-letter:text-[#ef7055]"
                            : ""
                        }`}
                      >
                        {paragraph}
                      </p>
                    ))}

                    {section.image && (
                      <div className="mt-8">
                        <Image
                          src={section.image}
                          alt={section.imageAlt ?? section.heading}
                          width={900}
                          height={1400}
                          sizes="(max-width: 1024px) 92vw, 440px"
                          className="aspect-[16/9] h-auto w-full rounded-2xl object-cover shadow-xl"
                        />
                      </div>
                    )}
                  </div>
                </section>

                {sectionRecipes.length > 0 && (
                  <div className="mt-5">
                    <div className="mb-3 flex items-center gap-3 px-2">
                      <span className="text-xl">🍴</span>
                      <h3 className="font-serif text-lg font-black text-[#31572c]">
                        {locale === "ar"
                          ? "جرّب هذه الوصفات"
                          : "Try These from Our Kitchen"}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {sectionRecipes.map((recipe, recipeIndex) =>
                        renderRecipeCard(recipe, recipeIndex === 0)
                      )}
                    </div>
                  </div>
                )}

                {(index === 0 || index === 4 || index === 7) && (
                  <div className="mt-5 rounded-[2rem] bg-[#31572c] p-6 text-white shadow-xl sm:p-8">
                    <span className="text-4xl text-[#f7c948]">“</span>

                    <p className="font-serif text-xl font-black leading-relaxed sm:text-2xl">
                      {article.category === "culture-heritage"
                        ? (locale === "ar"
                            ? (index === 0
                                ? "التراث لا يعيش في الكتب وحدها؛ بل يستمر حول المائدة."
                                : "كل طبق يحمل أثراً من المكان والناس والذاكرة.")
                            : (index === 0
                                ? "Heritage lives in more than books. It carries on around the table."
                                : "Every dish holds traces of place, people and memory."))
                        : (index === 0
                            ? (locale === "ar"
                                ? "بعض الروائح لا تعني مجرد طعام... بل تعني البيت."
                                : "Some smells don't just mean food. They mean home.")
                            : (locale === "ar"
                                ? "الأعشاب الصغيرة قد تغيّر الطبق كله."
                                : "A small herb can change the whole dish."))}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* =======================================================
            SOURCES
        ======================================================= */}
        {article.sources && article.sources.length > 0 && (
          <section className="mx-auto mt-16 max-w-4xl rounded-[2rem] border border-[#d7dfd0] bg-white p-7 shadow-sm sm:p-10">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ef7055]">
              {locale === "ar" ? "المصادر" : "Research & Sources"}
            </p>

            <h2 className="mt-2 font-serif text-3xl font-black text-[#263b22]">
              {locale === "ar"
                ? "المصادر التي استخدمناها"
                : "The Research Behind the Story"}
            </h2>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {article.sources.map((source) => (
                <a
                  key={source.url}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-[#f3f7ed] p-5 transition hover:bg-[#e5f0dd]"
                >
                  <span className="font-bold text-[#31572c]">
                    {source.title}
                  </span>

                  {source.description && (
                    <span className="mt-2 block text-sm leading-6 text-gray-600">
                      {source.description}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </section>
        )}

        {bottomRecipes.length > 0 && (
          <section className="mx-auto mt-10 max-w-5xl">
            <div className="mb-5 flex items-center gap-3 px-2">
              <span className="text-xl">🍴</span>
              <h3 className="font-serif text-xl font-black text-[#31572c]">
                {article.category === "culture-heritage"
                  ? (locale === "ar" ? "اكتشف وصفات لبنانية" : "Explore Lebanese Recipes")
                  : (locale === "ar" ? "اكتشف المزيد من الوصفات" : "Explore More Recipes")}
              </h3>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {bottomRecipes.map((recipe, recipeIndex) =>
                renderRecipeCard(recipe, recipeIndex === 0)
              )}
            </div>
          </section>
        )}

      
        <div className="mt-14">
          <AdsterraNativeBanner />

<Adsterra728Banner />
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="#top"
            className="inline-flex items-center gap-2 rounded-full bg-[#31572c] px-6 py-3 font-sans text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#264823] hover:shadow-xl"
          >
            <span className="text-lg">↑</span>
            {locale === "ar" ? "العودة إلى الأعلى" : "Back to Top"}
          </a>
        </div>
</article>
  </>
  );
}
