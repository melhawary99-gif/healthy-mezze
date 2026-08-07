import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Container from "@/components/ui/Container";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Disclaimer");

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: "/disclaimer",
    },
  };
}

export default async function DisclaimerPage() {
  const t = await getTranslations("Disclaimer");
  return (
    <main className="bg-[#FAFAF7] text-gray-900">
      <Container>
        <section className="mx-auto max-w-4xl py-20 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
            {t("badge")}
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{t("title")}</h1>

          <p className="mt-6 text-gray-600">
            <strong>{t("lastUpdated")}</strong> {t("lastUpdatedDate")}
          </p>

          <div className="mt-10 space-y-10 text-gray-700 leading-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                {t("generalInformation.title")}
              </h2>

              <p className="mt-4">{t("generalInformation.content")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">{t("recipes.title")}</h2>

              <p className="mt-4">{t("recipes.content")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">{t("nutrition.title")}</h2>

              <p className="mt-4">{t("nutrition.content")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">{t("allergies.title")}</h2>

              <p className="mt-4">{t("allergies.content")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">{t("externalLinks.title")}</h2>

              <p className="mt-4">{t("externalLinks.content")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">{t("contact.title")}</h2>

              <>
                {t("contact.content")}{" "}
                <a
                  href="mailto:contact@healthymezze.com"
                  className="font-semibold text-green-700 hover:underline"
                >
                  contact@healthymezze.com
                </a>
                .
              </>
            </section>
          </div>
        </section>
      </Container>
    </main>
  );
}
