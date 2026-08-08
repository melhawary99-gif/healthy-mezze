import type { Metadata } from "next";
import Script from "next/script";
import Container from "@/components/ui/Container";
import { getTranslations } from "next-intl/server";

type FAQItem = {
  question: string;
  answer: string;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "en" | "ar" }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "FAQ",
  });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: `https://www.healthymezze.com/${locale}/faq`,
    },
  };
}

export default async function FAQPage({ params }: { params: Promise<{ locale: "en" | "ar" }> }) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "FAQ",
  });

  const faqs: FAQItem[] = [
    {
      question: t("questions.whatIsHealthyMezze.question"),
      answer: t("questions.whatIsHealthyMezze.answer"),
    },
    {
      question: t("questions.beginnerFriendly.question"),
      answer: t("questions.beginnerFriendly.answer"),
    },
    {
      question: t("questions.nutrition.question"),
      answer: t("questions.nutrition.answer"),
    },
    {
      question: t("questions.substitutions.question"),
      answer: t("questions.substitutions.answer"),
    },
    {
      question: t("questions.vegetarianVegan.question"),
      answer: t("questions.vegetarianVegan.answer"),
    },
    {
      question: t("questions.contact.question"),
      answer: t("questions.contact.answer"),
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />

      <main className="bg-[#FAFAF7] text-gray-900">
        <Container>
          <section className="mx-auto max-w-4xl py-20 sm:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
              Healthy Mezze
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{t("title")}</h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">{t("description")}</p>

            <div className="mt-12 space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm"
                >
                  <h2 className="text-xl font-semibold text-gray-900">{faq.question}</h2>

                  <p className="mt-4 leading-7 text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}
