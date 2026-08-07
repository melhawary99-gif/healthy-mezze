import { Metadata } from "next";
import Container from "@/components/ui/Container";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Healthy Mezze, our mission, and our passion for sharing healthy Mediterranean recipes inspired by Egyptian, Lebanese, Greek, Turkish, Syrian, Jordanian, and Palestinian cuisine.",
  alternates: {
    canonical: "/about",
  },
};

export default async function AboutPage() {
  const t = await getTranslations("About");

  return (
    <main className="bg-[#FAFAF7] text-gray-900">
      <Container>
        <section className="pt-20 pb-10 sm:pt-24 sm:pb-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
              {t("badge")}
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {t("title")}
            </h1>

            <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">{t("subtitle")}</p>
          </div>
        </section>

        <section className="mb-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
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
            <div className="rounded-4xl border border-green-100 bg-green-50 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
                {t("mission")}
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: t("healthyEatingTitle"),
                    description: t("healthyEatingDescription"),
                  },
                  {
                    title: t("easyCookingTitle"),
                    description: t("easyCookingDescription"),
                  },
                  {
                    title: t("seasonalIngredientsTitle"),
                    description: t("seasonalIngredientsDescription"),
                  },
                  {
                    title: t("balancedLifestyleTitle"),
                    description: t("balancedLifestyleDescription"),
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-3xl bg-white p-5 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>

                    <p className="mt-3 text-sm leading-6 text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

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
                    title: t("freshIngredientsTitle"),
                    description: t("freshIngredientsDescription"),
                  },
                  {
                    icon: "🍋",
                    title: t("simpleRecipesTitle"),
                    description: t("simpleRecipesDescription"),
                  },
                  {
                    icon: "💪",
                    title: t("healthyLivingTitle"),
                    description: t("healthyLivingDescription"),
                  },
                  {
                    icon: "🌊",
                    title: t("mediterraneanTraditionTitle"),
                    description: t("mediterraneanTraditionDescription"),
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

        <section className="mb-16">
          <div className="rounded-4xl border border-green-100 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
              {t("commitment")}
            </p>

            <h2 className="mt-4 text-3xl font-bold text-gray-900">{t("commitmentTitle")}</h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">{t("commitmentDescription")}</p>
          </div>
        </section>

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
                  title: t("features.beginnerFriendly.title"),
                  description: t("features.beginnerFriendly.description"),
                },
                {
                  title: t("features.quickRecipes.title"),
                  description: t("features.quickRecipes.description"),
                },
                {
                  title: t("features.nutritiousMeals.title"),
                  description: t("features.nutritiousMeals.description"),
                },
                {
                  title: t("features.familyFriendly.title"),
                  description: t("features.familyFriendly.description"),
                },
                {
                  title: t("features.easyIngredients.title"),
                  description: t("features.easyIngredients.description"),
                },
                {
                  title: t("features.beautifulPresentation.title"),
                  description: t("features.beautifulPresentation.description"),
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
