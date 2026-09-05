import type { Metadata } from "next";
import Image from "next/image";
import VideoPlayer from "./VideoPlayer";
import DrinkReviews from "@/components/drink-vlog/DrinkReviews";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDrinkVlogBySlug } from "@/data/drink-vlogs";
import { getDrinkVlogTranslation } from "@/lib/drinkVlogTranslationLoader";

interface DrinkVlogRecipePageProps {
  params: Promise<{
    locale: "en" | "ar";
    slug: string;
  }>;
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

  return {
    title: `${translation.title} | Healthy Mezze`,
    description: translation.description,
    openGraph: {
      title: `${translation.title} | Healthy Mezze`,
      description: translation.description,
      type: "article",
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
        benefits: "فوائد الماتشا",
        benefitsTitle: "لماذا الماتشا خيار رائع؟",
        benefitsNote: "ملاحظة: ",
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
        benefits: "MATCHA BENEFITS",
        benefitsTitle: "Why Matcha Is a Great Choice",
        benefitsNote: "A note on health claims: ",
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
                videoId="ARaeeUyUfs8"
                title={translation.title}
              />


            </aside>

            {/* MAIN CONTENT */}
            <div className="space-y-14">
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

          <DrinkReviews slug={slug} />
    </main>
  );
}
