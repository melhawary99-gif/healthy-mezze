import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { getLanguageAlternates } from "@/lib/seo";

type AboutPageProps = {
  params: Promise<{
    locale: "en" | "ar";
  }>;
};

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "About",
  });

  return {
    title: t("title"),
    description: t("subtitle"),
    alternates: {
      canonical: `/${locale}/about`,
      languages: getLanguageAlternates("/about"),
    },
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "About",
  });

  return (
    <main>
      <Container>
        {/* Hero */}
        <section className="pb-16 pt-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
              {t("badge")}
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {t("title")}
            </h1>

            <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">{t("subtitle")}</p>
          </div>
        </section>

        {/* Story + Mission + Values */}
        <section className="mb-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Our Story */}
          <div className="rounded-4xl border border-green-100 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
              {t("ourStory")}
            </p>

            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              {t("ourStoryTitle")}
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
              {t("ourStoryParagraph1")}
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600 sm:text-lg">
              {t("ourStoryParagraph2")}
            </p>
          </div>

          <div className="space-y-6">
            {/* Mission */}
            <div className="rounded-4xl border border-green-100 bg-green-50 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
                {t("mission")}
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: t("missionCards.healthyEating.title"),
                    description: t("missionCards.healthyEating.description"),
                  },
                  {
                    title: t("missionCards.easyCooking.title"),
                    description: t("missionCards.easyCooking.description"),
                  },
                  {
                    title: t("missionCards.seasonal.title"),
                    description: t("missionCards.seasonal.description"),
                  },
                  {
                    title: t("missionCards.balanced.title"),
                    description: t("missionCards.balanced.description"),
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-3xl bg-white p-5 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>

                    <p className="mt-3 text-sm leading-6 text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="rounded-4xl border border-green-100 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
                {t("values")}
              </p>

              <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                {t("valuesTitle")}
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: "🥬",
                    title: t("valueCards.fresh.title"),
                    description: t("valueCards.fresh.description"),
                  },
                  {
                    icon: "🍋",
                    title: t("valueCards.simple.title"),
                    description: t("valueCards.simple.description"),
                  },
                  {
                    icon: "💪",
                    title: t("valueCards.healthy.title"),
                    description: t("valueCards.healthy.description"),
                  },
                  {
                    icon: "🌊",
                    title: t("valueCards.tradition.title"),
                    description: t("valueCards.tradition.description"),
                  },
                ].map((value) => (
                  <div
                    key={value.title}
                    className="rounded-3xl border border-gray-200 bg-gray-50 p-6"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
                      {value.icon}
                    </div>

                    <h3 className="mt-5 text-xl font-semibold text-gray-900">{value.title}</h3>

                    <p className="mt-3 text-sm leading-6 text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Commitment */}
        <section className="mb-16">
          <div className="rounded-4xl border border-green-100 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
              {t("commitment")}
            </p>

            <h2 className="mt-4 text-3xl font-bold text-gray-900">{t("commitmentTitle")}</h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">{t("commitmentDescription")}</p>
          </div>
        </section>

        {/* Why Choose Healthy Mezze */}
        <section className="mb-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
                {t("whyChoose")}
              </p>

              <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                {t("whyChooseTitle")}
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: t("featureCards.beginner.title"),
                  description: t("featureCards.beginner.description"),
                },
                {
                  title: t("featureCards.quick.title"),
                  description: t("featureCards.quick.description"),
                },
                {
                  title: t("featureCards.nutritious.title"),
                  description: t("featureCards.nutritious.description"),
                },
                {
                  title: t("featureCards.family.title"),
                  description: t("featureCards.family.description"),
                },
                {
                  title: t("featureCards.ingredients.title"),
                  description: t("featureCards.ingredients.description"),
                },
                {
                  title: t("featureCards.presentation.title"),
                  description: t("featureCards.presentation.description"),
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-4xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-4xl border border-green-100 bg-emerald-50 px-6 py-10 text-center shadow-sm sm:px-12 sm:py-14">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">{t("ctaTitle")}</h2>

            <p className="mt-4 text-base leading-7 text-gray-700 sm:text-lg">
              {t("ctaDescription")}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/recipes"
                className="inline-flex rounded-full bg-green-600 px-8 py-3 text-base font-semibold text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                {t("browseRecipes")}
              </Link>

              <Link
                href="/contact"
                className="inline-flex rounded-full border border-green-600 bg-white px-8 py-3 text-base font-semibold text-green-700 transition hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                {t("contactUs")}
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
