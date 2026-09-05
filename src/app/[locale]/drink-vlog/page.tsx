import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

import Container from "@/components/ui/Container";
import { Link } from "@/i18n/navigation";
import { getLatestDrinkVlog, drinkVlogs } from "@/data/drink-vlogs";
import { getDrinkVlogTranslation } from "@/lib/drinkVlogTranslationLoader";
import { getLanguageAlternates, SITE_URL } from "@/lib/seo";

type DrinkVlogPageProps = {
  params: Promise<{
    locale: "en" | "ar";
  }>;
};

export async function generateMetadata({
  params,
}: DrinkVlogPageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "DrinkVlog",
  });

  const title = `${t("label")} | Healthy Mezze`;
  const description = t("intro");
  const canonical = `/${locale}/drink-vlog`;
  const absoluteUrl = `${SITE_URL}${canonical}`;

  return {
    title,
    description,

    alternates: {
      canonical,
      languages: getLanguageAlternates("/drink-vlog"),
    },

    openGraph: {
      type: "website",
      url: absoluteUrl,
      siteName: "Healthy Mezze",
      title,
      description,
      locale: locale === "ar" ? "ar_AR" : "en_US",
      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_AR"],
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Healthy Mezze Drink Vlog",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-image.jpg"],
    },
  };
}

export default async function DrinkVlogPage({
  params,
}: DrinkVlogPageProps) {
  const { locale } = await params;
  const isArabic = locale === "ar";

  const t = await getTranslations({
    locale,
    namespace: "DrinkVlog",
  });

  const latestDrink = getLatestDrinkVlog();

  if (!latestDrink) {
    return null;
  }

  const latestDrinkTranslation = getDrinkVlogTranslation(
    latestDrink.slug,
    locale,
  );

  if (!latestDrinkTranslation) {
    return null;
  }

  return (
    <main className="overflow-hidden bg-[#f6f0e8] text-[#183b3f]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#2d9caf]">
        {/* Decorative background shapes */}
        <div
          className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full border-[2px] border-white/15"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-48 -right-20 h-[32rem] w-[32rem] rounded-full border-[2px] border-white/10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-[8%] top-20 hidden h-3 w-3 rounded-full bg-[#ff7043] lg:block"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-[13%] top-28 hidden h-2 w-2 rounded-full bg-white/70 lg:block"
          aria-hidden="true"
        />

        <Container>
          <div className="relative min-h-[760px] py-8 sm:min-h-[820px] sm:py-10 lg:min-h-[820px] lg:py-12">
            {/* Small editorial label */}
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-white">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff7043]" />
                {t("label")}
              </div>

              <div className="hidden text-xs font-semibold uppercase tracking-[0.24em] text-white/70 sm:block">
                Healthy Mezze • Daily Pour
              </div>
            </div>

            {/* Hero composition */}
            <div className="grid items-center gap-12 pt-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8 lg:pt-20">
              {/* Typography */}
              <div className="relative z-10 max-w-3xl">
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-white/75">
                  {t("latest")}{" "}
                  <span className="mx-2 text-[#ff7043]">•</span>
                  {t("episode")}{" "}
                  {String(latestDrink.episode).padStart(2, "0")}
                </p>

                <h1 className="text-6xl font-black leading-[0.9] tracking-[-0.055em] text-[#183b3f] sm:text-7xl md:text-8xl lg:text-[7.2rem]">
                  <span className="block text-[#fff8ef]">
                    {locale === "ar" ? "مشروبات" : "Fresh"}
                  </span>

                  <span className="block text-[#ff7043]">
                    {locale === "ar" ? "منعشة." : "pours."}
                  </span>

                  <span className="block text-[#fff8ef]">
                    {locale === "ar" ? "نكهات جديدة." : "New flavors."}
                  </span>

                  <span className="block text-[#ffd166]">
                    {locale === "ar" ? "كل يوم." : "Every day."}
                  </span>
                </h1>

                <p className="mt-8 max-w-xl text-base leading-8 text-white/85 sm:text-lg">
                  {t("intro")}
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <a
                    href={latestDrink.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full bg-[#183b3f] px-7 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#102d30]"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff7043] text-sm">
                      ▶
                    </span>
                    {t("watch")}
                  </a>

                  <a
                    href="#episodes"
                    className="inline-flex items-center gap-3 px-2 py-4 text-sm font-semibold text-white transition hover:text-[#ffd166]"
                  >
                    {t("explore")}
                    <span aria-hidden="true">↓</span>
                  </a>
                </div>
              </div>

              {/* Featured image composition */}
              <div className="relative mx-auto w-full max-w-[650px] lg:ml-auto">
                {/* Thin offset frame */}
                <div
                  className="absolute -right-3 -top-3 h-full w-full border border-[#183b3f]/60 sm:-right-5 sm:-top-5"
                  aria-hidden="true"
                />

                {/* Coral curved decoration */}
                <div
                  className="pointer-events-none absolute -bottom-16 -right-16 z-20 h-48 w-48 rounded-full border-[38px] border-[#ff7043] border-b-transparent border-l-transparent rotate-[18deg] sm:-bottom-20 sm:-right-20 sm:h-60 sm:w-60 sm:border-[48px]"
                  aria-hidden="true"
                />

                {/* Yellow accent block */}
                <div
                  className="pointer-events-none absolute -bottom-5 -left-5 z-20 h-16 w-16 bg-[#ffd166] sm:-bottom-7 sm:-left-7 sm:h-20 sm:w-20"
                  aria-hidden="true"
                />

                <div className="relative z-10 aspect-[2/3] overflow-hidden bg-[#f3e9dc]">
                  <Image
                    src={latestDrink.image}
                    alt={isArabic ? "لاتيه الماتشا بالفراولة والثلج" : latestDrinkTranslation.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 52vw"
                    className="object-contain transition duration-700 hover:scale-[1.02]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#183b3f]/45 via-transparent to-transparent" />

                  {/* Episode badge */}
                  <div className="absolute left-5 top-5 rounded-full bg-[#fff8ef] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#183b3f] shadow-md sm:left-7 sm:top-7">
                    {t("episode")}{" "}
                    {String(latestDrink.episode).padStart(2, "0")}
                  </div>

                  {/* Drink title */}
                  <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#ffd166]">
                      {t("latest")}
                    </p>
                    <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
                      {isArabic ? "لاتيه الماتشا بالفراولة والثلج" : latestDrinkTranslation.title}
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll marker */}
            <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/70 lg:flex">
              <span className="h-10 w-px bg-white/40" />
              <span>{t("explore")}</span>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          FEATURED POUR
      ========================================================= */}
      <section className="relative bg-[#f6f0e8] py-20 sm:py-24 lg:py-28">
        <div
          className="pointer-events-none absolute right-0 top-20 h-48 w-48 rounded-full border-[26px] border-[#2d9caf]/15"
          aria-hidden="true"
        />

        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#2d9caf]">
                {t("latest")}
              </p>

              <h2 className="mt-4 max-w-sm text-4xl font-black leading-[0.95] tracking-[-0.04em] text-[#183b3f] sm:text-5xl">
                {isArabic ? "لاتيه الماتشا بالفراولة والثلج" : latestDrinkTranslation.title}
              </h2>

              <div className="mt-6 h-1 w-16 bg-[#ff7043]" />

              <p className="mt-7 max-w-md text-base leading-8 text-[#49666a]">
                {isArabic ? "لاتيه ماتشا مثلج وكريمي بطبقات من نكهة الفراولة الحلوة، والماتشا الغني، والكثير من الثلج لمشروب منعش يجمع بين الطعم والجمال." : latestDrinkTranslation.description}
              </p>

              <div className="mt-7 flex flex-col items-start gap-3">
                <a
                  href={`/${locale}/drink-vlog/${latestDrink.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-[#183b3f]/15 bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[#49666a] transition hover:border-[#ff7043] hover:text-[#ff7043]"
                >
                  VISIT RECIPE
                  <span aria-hidden="true">↗</span>
                </a>

                <a
                  href={latestDrink.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-[#ff7043] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#eb5e35]"
                >
                {t("watch")}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] bg-[#2d9caf] p-3 sm:p-4">
                <div className="relative aspect-video overflow-hidden rounded-[1.5rem] bg-[#183b3f]">
                  <Image
                    src={latestDrink.image}
                    alt={latestDrinkTranslation.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-[#183b3f]/15" />

                  <a
                    href={latestDrink.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t("watch")}: ${latestDrinkTranslation.title}`}
                    className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#ff7043] text-2xl text-white shadow-2xl transition duration-300 hover:scale-110 hover:bg-[#ffd166] hover:text-[#183b3f]"
                  >
                    ▶
                  </a>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between px-1 text-xs font-bold uppercase tracking-[0.2em] text-[#789094]">
                <span>
                  {t("episode")}{" "}
                  {String(latestDrink.episode).padStart(2, "0")}
                </span>
                <span>Healthy Mezze</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          EPISODE ARCHIVE
      ========================================================= */}
      <section
        id="episodes"
        className="relative overflow-hidden bg-[#183b3f] py-20 text-white sm:py-24 lg:py-28"
      >
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border-[2px] border-[#ffd166]/20"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full border-[24px] border-[#ff7043]/25"
          aria-hidden="true"
        />

        <Container>
          <div className="relative flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#ffd166]">
                {t("label")}
              </p>

              <h2 className="mt-4 text-5xl font-black leading-none tracking-[-0.04em] sm:text-6xl">
                {t("archive")}
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/65 sm:text-right">
              {t("archiveDescription")}
            </p>
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {drinkVlogs
              .slice()
              .sort((a, b) => b.episode - a.episode)
              .map((drink, index) => (
                <Link
                  key={drink.slug}
                  href={`/drink-vlog/${drink.slug}`}
                  className="group"
                >
                  <article
                    className={`relative ${
                      index % 2 === 1 ? "lg:translate-y-8" : ""
                    }`}
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-[#2d9caf]">
                      <Image
                        src={drink.image}
                        alt={getDrinkVlogTranslation(drink.slug, locale)?.title ?? "Drink Vlog"}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#183b3f]/80 via-transparent to-transparent" />

                      <div className="absolute left-5 top-5 rounded-full bg-[#fff8ef] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#183b3f]">
                        {t("episode")}{" "}
                        {String(drink.episode).padStart(2, "0")}
                      </div>

                      <div className="absolute bottom-5 left-5 right-5">
                        <h3 className="text-2xl font-black tracking-tight text-white transition group-hover:text-[#ffd166]">
                          {getDrinkVlogTranslation(drink.slug, locale)?.title}
                        </h3>

                      </div>
                    </div>
                  </article>
                </Link>
              ))}
          </div>

          <div className="mt-16 flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-white/40">
            <span className="h-px w-12 bg-white/20" />
            <span>{t("comingSoon")}</span>
            <span className="h-px w-12 bg-white/20" />
          </div>
        </Container>
      </section>
    </main>
  );
}
