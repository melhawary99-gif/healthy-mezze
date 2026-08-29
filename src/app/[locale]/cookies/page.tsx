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
    namespace: "Cookies",
  });

  return {
    title: `${t("title")} | Healthy Mezze`,
    description: t("metaDescription"),
    alternates: {
      canonical: `/${locale}/cookies`,
      languages: getLanguageAlternates("/cookies"),
    },
  };
}

export default async function CookiePolicyPage({ params }: Props) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "Cookies",
  });

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-8 text-4xl font-bold">{t("title")}</h1>

      <p className="mb-6 text-gray-700">
        <strong>{t("lastUpdated")}:</strong> {t("date")}
      </p>

      <p className="mb-10 text-lg text-gray-600">{t("intro")}</p>

      <hr className="mb-10 border-gray-200" />

      <div className="space-y-10 text-gray-700 leading-relaxed">
        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">{t("whatAreCookies.title")}</h2>

          <p>{t("whatAreCookies.content")}</p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">{t("howWeUse.title")}</h2>

          <p>{t("howWeUse.intro")}</p>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>{t("howWeUse.items.preferences")}</li>
            <li>{t("howWeUse.items.performance")}</li>
            <li>{t("howWeUse.items.behavior")}</li>
            <li>{t("howWeUse.items.traffic")}</li>
            <li>{t("howWeUse.items.ads")}</li>
            <li>{t("howWeUse.items.security")}</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">{t("analytics.title")}</h2>

          <p>{t("analytics.content")}</p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">{t("clarity.title")}</h2>

          <p>{t("clarity.content")}</p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">{t("adsense.title")}</h2>

          <p>{t("adsense.content")}</p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">{t("browserStorage.title")}</h2>

          <p>{t("browserStorage.content")}</p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">{t("managing.title")}</h2>

          <p>{t("managing.content")}</p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">{t("changes.title")}</h2>

          <p>{t("changes.content")}</p>
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
