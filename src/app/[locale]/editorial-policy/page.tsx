import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getLanguageAlternates } from "@/lib/seo";

import Container from "@/components/ui/Container";

type Props = {
  params: Promise<{
    locale: "en" | "ar";
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "EditorialPolicy",
  });

  return {
    title: `${t("title")} | Healthy Mezze`,
    description:
      "Learn how Healthy Mezze develops, reviews, and maintains its Mediterranean recipes and food content.",
    alternates: {
      canonical: `/${locale}/editorial-policy`,
      languages: getLanguageAlternates("/editorial-policy"),
    },
  };
}

export default async function EditorialPolicyPage({ params }: Props) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "EditorialPolicy",
  });

  return (
    <main className="bg-[#FAFAF7] text-gray-900">
      <Container>
        <section className="mx-auto max-w-4xl py-20 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
            Healthy Mezze
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{t("title")}</h1>

          <p className="mt-6 text-gray-600">
            <strong>{t("lastUpdatedLabel")}:</strong> {t("lastUpdated")}
          </p>

          <div className="mt-10 space-y-10 leading-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900">{t("mission.title")}</h2>

              <p className="mt-4">{t("mission.text")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                {t("recipeDevelopment.title")}
              </h2>

              <p className="mt-4">{t("recipeDevelopment.text")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">{t("accuracy.title")}</h2>

              <p className="mt-4">{t("accuracy.text")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">{t("nutrition.title")}</h2>

              <p className="mt-4">{t("nutrition.text")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">{t("independence.title")}</h2>

              <p className="mt-4">{t("independence.text")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">{t("contact.title")}</h2>

              <p className="mt-4">
                {t("contact.text")}{" "}
                <a
                  href="mailto:contact@healthymezze.com"
                  className="font-semibold text-green-700 hover:underline"
                >
                  contact@healthymezze.com
                </a>
                .
              </p>
            </section>
          </div>
        </section>
      </Container>
    </main>
  );
}
