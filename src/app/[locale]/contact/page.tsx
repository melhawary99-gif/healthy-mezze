import { Metadata } from "next";

import Container from "@/components/ui/Container";
import Newsletter from "@/components/Newsletter";
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
    namespace: "Contact",
  });

  return {
    title: t("hero.title"),
    description: t("hero.description"),
    alternates: {
      canonical: `/${locale}/contact`,
    },
  };
}

export default async function ContactPage() {
  const t = await getTranslations("Contact");
  return (
    <main className="bg-[#FAFAF7] text-gray-900">
      <Container>
        <section className="pt-20 pb-10 sm:pt-24 sm:pb-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
              {t("hero.badge")}
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {t("hero.title")}
            </h1>
            <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
              {t("hero.description")}
            </p>
          </div>
        </section>

        <section className="mb-16 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-4xl border border-green-100 bg-green-50 p-8 shadow-sm sm:p-10">
            <h2 className="text-2xl font-semibold text-gray-900">{t("contactInfo.title")}</h2>
            <p className="mt-4 text-gray-700">{t("contactInfo.description")}</p>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                  {t("contactInfo.email")}
                </p>
                <a
                  href="mailto:contact@healthymezze.com"
                  className="mt-3 block text-base font-semibold text-gray-900 hover:text-green-700"
                >
                  contact@healthymezze.com
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                  {t("contactInfo.social")}
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {[
                    { label: t("social.instagram"), href: "#" },
                    { label: t("social.pinterest"), href: "#" },
                    { label: t("social.tiktok"), href: "#" },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-green-300 hover:text-green-700"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                  {t("response.title")}
                </p>
                <p className="mt-3 text-base text-gray-700">{t("response.description")}</p>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                  {t("support.title")}
                </p>
                <p className="mt-3 text-base text-gray-700">{t("support.description")}</p>
              </div>
            </div>
          </div>

          <div className="rounded-4xl border border-green-100 bg-white p-8 shadow-sm sm:p-10">
            <form action="#" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  {t("form.name")}
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={t("form.namePlaceholder")}
                  className="mt-3 w-full rounded-3xl border border-green-100 bg-green-50 px-4 py-3 text-gray-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  {t("form.email")}
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t("form.emailPlaceholder")}
                  className="mt-3 w-full rounded-3xl border border-green-100 bg-green-50 px-4 py-3 text-gray-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  {t("form.subject")}
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder={t("form.subjectPlaceholder")}
                  className="mt-3 w-full rounded-3xl border border-green-100 bg-green-50 px-4 py-3 text-gray-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  {t("form.message")}
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder={t("form.messagePlaceholder")}
                  className="mt-3 w-full rounded-3xl border border-green-100 bg-green-50 px-4 py-3 text-gray-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full justify-center rounded-full bg-green-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                {t("form.send")}
              </button>
            </form>
          </div>
        </section>

        <section className="mb-16">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-4xl border border-green-100 bg-white p-8 shadow-sm sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
                {t("faq.preview")}
              </p>

              <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                {t("faq.title")}
              </h2>

              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-green-100 bg-green-50 p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">
                      {t(`faq.items.${item}.question`)}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {t(`faq.items.${item}.answer`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <Newsletter variant="hero" />
        </section>
      </Container>
    </main>
  );
}
