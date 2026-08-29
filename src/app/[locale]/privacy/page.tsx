import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{
    locale: "en" | "ar";
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "Privacy",
  });

  return {
    title: `${t("title")} | Healthy Mezze`,
    description: t("metaDescription"),

    alternates: {
      canonical: `/${locale}/privacy`,
    },
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "Privacy",
  });
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-8 text-4xl font-bold">{t("title")}</h1>

      <p className="mb-6 text-gray-700">
        <strong>{t("lastUpdated")}:</strong> July 24, 2026
      </p>

      <p className="mb-10 text-lg text-gray-600">{t("intro")}</p>

      <hr className="mb-10 border-gray-200" />

      <div className="space-y-10 text-gray-700 leading-relaxed">
        <section>
          <h2 className="mb-3 text-2xl font-semibold">{t("sections.introduction.title")}</h2>

          <p>{t("sections.introduction.body")}</p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">{t("sections.information.title")}</h2>

          <p>{t("sections.information.body")}</p>

          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>{t("sections.information.items.email")}</li>
            <li>{t("sections.information.items.browser")}</li>
            <li>{t("sections.information.items.device")}</li>
            <li>{t("sections.information.items.os")}</li>
            <li>{t("sections.information.items.pages")}</li>
            <li>{t("sections.information.items.time")}</li>
            <li>{t("sections.information.items.referrals")}</li>
            <li>{t("sections.information.items.analytics")}</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">{t("sections.analytics.title")}</h2>

          <p>{t("sections.analytics.body")}</p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">{t("sections.newsletter.title")}</h2>

          <p>{t("sections.newsletter.body")}</p>

          <p className="mt-3">{t("sections.newsletter.unsubscribe")}</p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">{t("sections.rights.title")}</h2>

          <p>{t("sections.rights.body")}</p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">{t("sections.clarity.title")}</h2>

          <p>{t("sections.clarity.body")}</p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">{t("sections.cookies.title")}</h2>

          <p>{t("sections.cookies.body")}</p>

          <p className="mt-3">{t("sections.cookies.preferences")}</p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">{t("sections.adsense.title")}</h2>

          <p>{t("sections.adsense.body")}</p>

          <p className="mt-3">
            {t("sections.adsense.learnMore")}{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:underline"
            >
              Google's Privacy Policy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">{t("sections.links.title")}</h2>

          <p>{t("sections.links.body")}</p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">{t("sections.security.title")}</h2>

          <p>{t("sections.security.body")}</p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">{t("sections.changes.title")}</h2>

          <p>{t("sections.changes.body")}</p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">{t("sections.contact.title")}</h2>

          <p>{t("sections.contact.body")}</p>

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
