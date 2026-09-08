import FavoriteButton from "@/components/recipes/FavoriteButton";
import PrintButton from "@/components/recipes/PrintButton";
import ShareButton from "@/components/recipes/ShareButton";

import type { Metadata } from "next";
import Image from "next/image";
import VideoPlayer from "./VideoPlayer";
import DrinkReviews from "@/components/drink-vlog/DrinkReviews";
import BackToTopButton from "@/components/drink-vlog/BackToTopButton";
import Link from "next/link";
import { notFound } from "next/navigation";
import { drinkVlogs, getDrinkVlogBySlug } from "@/data/drink-vlogs";
import { getDrinkVlogTranslation } from "@/lib/drinkVlogTranslationLoader";
import { getLanguageAlternates, SITE_URL } from "@/lib/seo";

interface DrinkVlogRecipePageProps {
  params: Promise<{
    locale: "en" | "ar";
    slug: string;
  }>;
}

export function generateStaticParams() {
  return [
    {
      locale: "en",
      slug: "strawberry-ice-matcha-latte",
    },
    {
      locale: "ar",
      slug: "strawberry-ice-matcha-latte",
    },
    {
      locale: "en",
      slug: "oreo-iced-latte",
    },
    {
      locale: "ar",
      slug: "oreo-iced-latte",
    },
  ];
}

export async function generateMetadata({
  params,
}: DrinkVlogRecipePageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const drink = getDrinkVlogBySlug(slug);

  if (!drink) {
    return {};
  }

  const translation = getDrinkVlogTranslation(slug, locale);

  if (!translation) {
    return {};
  }

  const isArabic = locale === "ar";
  const canonical = `/${locale}/drink-vlog/${slug}`;
  const absoluteUrl = `${SITE_URL}${canonical}`;

  return {
    title: `${translation.title} | Healthy Mezze`,
    description: translation.description,

    alternates: {
      canonical,
      languages: getLanguageAlternates(`/drink-vlog/${slug}`),
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: `${translation.title} | Healthy Mezze`,
      description: translation.description,
      type: "article",
      url: absoluteUrl,
      images: [
        {
          url: drink.image,
          alt: translation.title,
        },
      ],
    },
  };
}

export default async function DrinkVlogRecipePage({
  params,
}: DrinkVlogRecipePageProps) {
  const { locale, slug } = await params;
  const drink = getDrinkVlogBySlug(slug);

  if (!drink) {
    notFound();
  }

  const translation = getDrinkVlogTranslation(slug, locale);

  if (!translation) {
    notFound();
  }

  const isArabic = locale === "ar";

  const ingredients = translation.ingredients;
  const equipment = translation.equipment;
  const steps = translation.instructions;

  const currentEpisodeIndex = drinkVlogs.findIndex(
    (item) => item.slug === drink.slug
  );

  const previousDrink =
    currentEpisodeIndex > 0
      ? drinkVlogs[currentEpisodeIndex - 1]
      : undefined;

  const nextDrink =
    currentEpisodeIndex >= 0 && currentEpisodeIndex < drinkVlogs.length - 1
      ? drinkVlogs[currentEpisodeIndex + 1]
      : undefined;

  const labels = isArabic
    ? {
        episode: "الحلقة",
        latest: "أحدث مشروب",
        ingredients: "المكونات",
        equipment: "الأدوات",
        method: "طريقة التحضير",
        howTo: "طريقة عمل المشروب",
        serving: "طريقة التقديم",
        watch: "شاهد الفيديو",
        back: "العودة إلى مدونة المشروبات",
        faq: "الأسئلة الشائعة",
        benefits: translation.benefitsLabel ?? (isArabic ? "فوائد المشروب" : "DRINK BENEFITS"),
        benefitsTitle: translation.benefitsTitle ?? (isArabic ? "لماذا هذا المشروب مميز؟" : "Why This Drink Stands Out"),
        benefitsNote: "ملاحظة: ",
        previousEpisode: "الحلقة السابقة",
        nextEpisode: "الحلقة التالية",
        episodeVlog: "حلقات المشروبات",
        backToTop: "العودة إلى الأعلى",
      }
    : {
        episode: "EPISODE",
        latest: "LATEST POUR",
        ingredients: "Ingredients",
        equipment: "Equipment",
        method: "THE METHOD",
        howTo: "How to make it",
        serving: "SERVING TIP",
        watch: "WATCH THE VIDEO",
        back: "BACK TO DRINK VLOG",
        faq: "Frequently asked questions",
        benefits: translation.benefitsLabel ?? (isArabic ? "فوائد المشروب" : "DRINK BENEFITS"),
        benefitsTitle: translation.benefitsTitle ?? (isArabic ? "لماذا هذا المشروب مميز؟" : "Why This Drink Stands Out"),
        benefitsNote: "A note on health claims: ",
        previousEpisode: "PREVIOUS EPISODE",
        nextEpisode: "NEXT EPISODE",
        episodeVlog: "DRINK VLOG EPISODES",
        backToTop: "BACK TO TOP",
      };

  const localizedUrl = `${SITE_URL}/${locale}/drink-vlog/${slug}`;
  const drinkVlogUrl = `${SITE_URL}/${locale}/drink-vlog`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isArabic ? "الرئيسية" : "Home",
        item: `${SITE_URL}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isArabic ? "مدونة المشروبات" : "Drink Vlog",
        item: drinkVlogUrl,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: translation.title,
        item: localizedUrl,
      },
    ],
  };

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="bg-[#f6f0e8] text-[#183b3f]"
    >



      {/* HERO */}
      <section className="relative overflow-hidden bg-[#2d9caf] py-12 sm:py-16 lg:py-20">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[28px] border-[#ffd166]/40"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full border-[24px] border-[#ff7043]/35"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.25em] text-white">
                <span className="rounded-full bg-[#ffd166] px-4 py-2 text-[#183b3f]">
                  {labels.episode}{" "}
                  {String(drink.episode).padStart(2, "0")}
                </span>

                <span className="text-white/75">
                  {labels.latest}
                </span>
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-[0.92] tracking-[-0.045em] text-[#fff8ef] sm:text-6xl lg:text-7xl">
                {translation.title}
              </h1>

              <div className="mt-7 h-1 w-20 bg-[#ff7043]" />

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
                {translation.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={drink.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-[#ff7043] px-6 py-3.5 text-sm font-black uppercase tracking-[0.08em] text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#eb5e35]"
                >
                  {labels.watch}
                  <span aria-hidden="true">↗</span>
                </a>

                <Link
                  href={`/${locale}/drink-vlog`}
                  className="inline-flex items-center rounded-full border border-white/40 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-white/10"
                >
                  {labels.back}
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[620px]">
              <div
                className="absolute -right-4 -top-4 h-full w-full border border-[#183b3f]/60 sm:-right-6 sm:-top-6"
                aria-hidden="true"
              />

              <div className="relative aspect-[2/3] overflow-hidden rounded-[1.5rem] bg-[#f3e9dc]">
                <Image
                  src={drink.image}
                  alt={translation.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 50vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECIPE CONTENT */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            {/* SIDEBAR */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#2d9caf]">
                {translation.title}
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.035em] sm:text-5xl">
                {labels.howTo}
              </h2>

              <div className="mt-6 h-1 w-16 bg-[#ff7043]" />

              <p className="mt-6 max-w-md text-base leading-8 text-[#49666a]">
                {translation.description}
              </p>

              {/* YOUTUBE VIDEO */}
              <VideoPlayer
                videoId={
            drink.youtubeUrl.match(
              /(?:shorts\/|youtu\.be\/|v=)([^?&/]+)/
            )?.[1] ?? ""
          }
                title={translation.title}
              />


            </aside>

            {/* MAIN CONTENT */}
            <div className="space-y-14">
              {/* DRINK INTRO */}
      {/* RECIPE ACTIONS */}
      <div className="print-hide flex flex-wrap gap-3">
        <FavoriteButton slug={drink.slug} />

        <PrintButton />

        <ShareButton
          title={translation.title}
          description={translation.description}
        />
      </div>

              {translation.intro && (
                <section className="rounded-[2rem] bg-white p-7 shadow-sm sm:p-10">
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-[#2d9caf]">
                    {isArabic ? "عن هذا المشروب" : "ABOUT THIS DRINK"}
                  </p>

                  <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                    {translation.title}
                  </h2>

                  <div className="mt-5 h-1 w-16 bg-[#ff7043]" />

                  <p className="mt-6 whitespace-pre-line text-base leading-8 text-[#49666a] sm:text-lg">
                    {translation.intro}
                  </p>
                </section>
              )}

              {/* INGREDIENTS */}
              <section>
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                  {labels.ingredients}
                </h2>

                <div className="mt-7 overflow-hidden rounded-[1.5rem] border border-[#183b3f]/10 bg-white">
                  {ingredients.map((ingredient, index) => (
                    <div
                      key={ingredient}
                      className={`flex gap-4 px-6 py-4 ${
                        index !== ingredients.length - 1
                          ? "border-b border-[#183b3f]/10"
                          : ""
                      }`}
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ffd166] text-xs font-black text-[#183b3f]">
                        {index + 1}
                      </span>

                      <span className="leading-7 text-[#49666a]">
                        {ingredient}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* EQUIPMENT */}
              <section>
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                  {labels.equipment}
                </h2>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {equipment.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[#183b3f]/10 bg-white px-5 py-4 text-sm font-semibold text-[#49666a]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              {/* METHOD */}
              <section>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#2d9caf]">
                  {labels.method}
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  {labels.howTo}
                </h2>

                <div className="mt-8 space-y-5">
                  {steps.map((step, index) => (
                    <div
                      key={step}
                      className="grid grid-cols-[48px_1fr] gap-4 rounded-[1.5rem] bg-white p-5 shadow-sm"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2d9caf] text-lg font-black text-white">
                        {index + 1}
                      </div>

                      <p className="pt-1 text-base leading-8 text-[#49666a]">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* SERVING */}
              <section className="rounded-[2rem] bg-[#183b3f] p-7 text-white sm:p-10">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#ffd166]">
                  {labels.serving}
                </p>

                <h2 className="mt-3 text-3xl font-black">
                  {translation.serving?.title}
                </h2>

                <p className="mt-5 max-w-2xl leading-8 text-white/75">
                  {translation.serving?.text}
                </p>
              </section>

              {/* MATCHA BENEFITS */}
              <section className="mt-16 rounded-[2rem] bg-[#183b3f] p-7 text-white sm:mt-20 sm:p-10 lg:p-12">
                <div className="max-w-3xl">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-[#ffd166]">
                    {labels.benefits}
                  </p>

                  <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                    {labels.benefitsTitle}
                  </h2>

                  <p className="mt-5 leading-8 text-white/70">
                    {translation.healthBenefitsIntro}
                  </p>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {translation.healthBenefits?.map((benefit) => (
                    <article
                      key={benefit.number}
                      className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6"
                    >
                      <span className="text-xs font-black tracking-[0.2em] text-[#ffd166]">
                        {benefit.number}
                      </span>

                      <h3 className="mt-4 text-xl font-black">
                        {benefit.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-white/65">
                        {benefit.text}
                      </p>
                    </article>
                  ))}
                </div>

                <div className="mt-6 rounded-[1.25rem] border border-[#ffd166]/20 bg-[#ffd166]/[0.07] p-5">
                  <p className="text-sm leading-7 text-white/65">
                    <strong className="text-[#ffd166]">
                      {labels.benefitsNote}
                    </strong>
                    {translation.healthBenefitsNote}
                  </p>
                </div>
              </section>

              {/* FAQ */}
              <section>
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                  {labels.faq}
                </h2>

                <div className="mt-7 space-y-4">
                  {translation.faq?.map((item) => (
                    <details
                      key={item.question}
                      className="group rounded-[1.25rem] border border-[#183b3f]/10 bg-white p-5"
                    >
                      <summary className="cursor-pointer list-none font-bold text-[#183b3f]">
                        {item.question}
                      </summary>

                      <p className="mt-4 leading-7 text-[#49666a]">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* BOTTOM NAVIGATION */}
              <div className="flex flex-wrap gap-4 border-t border-[#183b3f]/10 pt-8">
                <Link
                  href={`/${locale}/drink-vlog`}
                  className="inline-flex items-center rounded-full bg-[#183b3f] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#102d30]"
                >
                  {labels.back}
                </Link>

                <a
                  href={drink.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-[#ff7043] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#eb5e35]"
                >
                  {labels.watch} ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECIPE STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Recipe",
            name: translation.title,
            description: translation.description,
            image: [drink.image],
            recipeIngredient: ingredients,
            recipeInstructions: steps.map((step, index) => ({
              "@type": "HowToStep",
              position: index + 1,
              text: step,
            })),
            recipeCategory: "Drink",
            keywords: translation.keywords?.join(", "),
            video: {
              "@type": "VideoObject",
              name: translation.title,
              description: translation.description,
              contentUrl: drink.youtubeUrl,
            },
          }),
        }}
      />

          {/* REVIEWS FRAME */}
<section className="mt-14">
  <div className="relative rounded-[2rem] border border-[#d8cdbd] bg-[#f8f5ef] p-2 shadow-[0_18px_50px_rgba(24,59,63,0.10)]">
    <div className="rounded-[1.65rem] border border-[#e5ddd1] bg-white p-5 sm:p-7 lg:p-9">

      {/* Decorative top frame detail */}
      <div className="mb-7 flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#d8cdbd] to-[#d8cdbd]" />

        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8cdbd] bg-[#f8f5ef] text-lg shadow-sm">
          ★
        </div>

        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#d8cdbd] to-[#d8cdbd]" />
      </div>

      <DrinkReviews slug={slug} />

      {/* Decorative bottom frame detail */}
      <div className="mt-7 flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#d8cdbd] to-[#d8cdbd]" />

        <div className="h-2 w-2 rounded-full bg-[#d8cdbd]" />

        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#d8cdbd] to-[#d8cdbd]" />
      </div>

    </div>
  </div>
</section>

          {/* EPISODE NAVIGATION */}
          <section className="mx-auto mt-16 max-w-6xl border-t border-[#183b3f]/10 pt-12 sm:mt-20">
            <div className="mb-9 text-center">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#ff7043]">
                {labels.episodeVlog}
              </p>

              <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-[#ffd166]" />
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {previousDrink ? (
                <Link
                  href={`/${locale}/drink-vlog/${previousDrink.slug}`}
                  className="group overflow-hidden rounded-[2rem] border border-[#183b3f]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/8] overflow-hidden">
                    <Image
                      src={previousDrink.image}
                      alt={
                        getDrinkVlogTranslation(
                          previousDrink.slug,
                          locale
                        )?.title ?? ""
                      }
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ffd166]">
                        ← {labels.previousEpisode}
                      </p>

                      <p className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-white/80">
                        {labels.episode} {previousDrink.episode}
                      </p>
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="text-2xl font-black tracking-tight text-[#183b3f] sm:text-3xl">
                      {
                        getDrinkVlogTranslation(
                          previousDrink.slug,
                          locale
                        )?.title
                      }
                    </h3>

                    <p className="mt-4 leading-7 text-[#49666a]">
                      {
                        getDrinkVlogTranslation(
                          previousDrink.slug,
                          locale
                        )?.description
                      }
                    </p>

                    <p className="mt-5 text-sm font-black uppercase tracking-[0.12em] text-[#ff7043]">
                      {labels.previousEpisode} ←
                    </p>
                  </div>
                </Link>
              ) : (
                <div className="hidden lg:block" />
              )}

              {nextDrink ? (
                <Link
                  href={`/${locale}/drink-vlog/${nextDrink.slug}`}
                  className="group overflow-hidden rounded-[2rem] border border-[#183b3f]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <Image
                      src={nextDrink.image}
                      alt={
                        getDrinkVlogTranslation(
                          nextDrink.slug,
                          locale
                        )?.title ?? ""
                      }
                      fill
                      className="object-cover object-[center_25%] transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ffd166]">
                        {labels.nextEpisode} →
                      </p>

                      <p className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-white/80">
                        {labels.episode} {nextDrink.episode}
                      </p>
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="text-2xl font-black tracking-tight text-[#183b3f] sm:text-3xl">
                      {
                        getDrinkVlogTranslation(
                          nextDrink.slug,
                          locale
                        )?.title
                      }
                    </h3>

                    <p className="mt-4 leading-7 text-[#49666a]">
                      {
                        getDrinkVlogTranslation(
                          nextDrink.slug,
                          locale
                        )?.description
                      }
                    </p>

                    <p className="mt-5 text-sm font-black uppercase tracking-[0.12em] text-[#ff7043]">
                      → {labels.nextEpisode}
                    </p>
                  </div>
                </Link>
              ) : (
                <div className="hidden lg:block" />
              )}
            </div>
          </section>

          <div className="mt-8 flex justify-center">
            <BackToTopButton label={labels.backToTop} />
          </div>

    </main>
  );
}
