import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getLanguageAlternates } from "@/lib/seo";

type Props = {
  params: Promise<{
    locale: "en" | "ar";
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "Terms",
  });

  return {
    title: `${t("metaTitle")} | Healthy Mezze`,
    description: t("metaDescription"),
    alternates: {
      canonical: `/${locale}/terms`,
      languages: getLanguageAlternates("/terms"),
    },
  };
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "Terms",
  });

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-8 text-4xl font-bold">{t("title")}</h1>

      <p className="mb-6 text-gray-700">
        <strong>{t("lastUpdated")}:</strong> August 7, 2026
      </p>

      <p className="mb-10 text-lg text-gray-600">{t("intro")}</p>

      <hr className="mb-10 border-gray-200" />

      <div className="space-y-10 text-gray-700 leading-relaxed">
        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">{t("acceptance.title")}</h2>

          <p>{t("acceptance.content")}</p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">{t("websiteContent.title")}</h2>

          <p>{t("websiteContent.content")}</p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">
            {t("userResponsibilities.title")}
          </h2>

          <p>{t("userResponsibilities.content")}</p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">{t("liability.title")}</h2>

          <p>{t("liability.content")}</p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">{t("termination.title")}</h2>

          <p>{t("termination.content")}</p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">{t("health.title")}</h2>

          <p>{t("health.content")}</p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">{t("intellectual.title")}</h2>

          <p>{t("intellectual.content")}</p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">{t("law.title")}</h2>

          <p>{t("law.content")}</p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">{t("externalLinks.title")}</h2>

          <p>{t("externalLinks.content")}</p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">{t("changes.title")}</h2>

          <p>{t("changes.content")}</p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">{t("agreement.title")}</h2>

          <p>{t("agreement.content")}</p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">{t("contact.title")}</h2>

          <p>{t("contact.content")}</p>

          <p className="mt-3 font-medium">
            <a href="mailto:contact@healthymezze.com" className="text-green-700 hover:underline">
              contact@healthymezze.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
