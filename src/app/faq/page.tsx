import { Metadata } from "next";
import Script from "next/script";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about Healthy Mezze, our Mediterranean recipes, ingredients, nutrition information, and cooking tips.",
  alternates: {
    canonical: "/faq",
  },
};

const faqs = [
  {
    question: "What is Healthy Mezze?",
    answer:
      "Healthy Mezze is a recipe website dedicated to healthy Mediterranean-inspired meals made with fresh, wholesome ingredients and easy-to-follow instructions.",
  },
  {
    question: "Are your recipes beginner friendly?",
    answer:
      "Yes. Our recipes are written with clear, step-by-step instructions that are suitable for cooks of all experience levels.",
  },
  {
    question: "Do you provide nutrition information?",
    answer:
      "Yes. Nutrition information is included as an estimate to help readers make informed choices. Values may vary depending on ingredients and portion sizes.",
  },
  {
    question: "Can I substitute ingredients?",
    answer:
      "Absolutely. Many Mediterranean recipes are flexible, and ingredient substitutions are often possible based on availability or dietary preferences.",
  },
  {
    question: "Do you publish vegetarian and vegan recipes?",
    answer:
      "Yes. Healthy Mezze offers a variety of vegetarian and vegan Mediterranean recipes alongside dishes featuring seafood, poultry, and other proteins.",
  },
  {
    question: "How can I contact Healthy Mezze?",
    answer:
      "You can reach us anytime at contact@healthymezze.com through our Contact page.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQPage() {
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

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Frequently Asked Questions
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Here are answers to some of the questions we receive most often.
          </p>

          <div className="mt-12 space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm"
              >
                <h2 className="text-xl font-semibold text-gray-900">
                  {faq.question}
                </h2>

                <p className="mt-4 leading-7 text-gray-700">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Container>
        </main>
  </>
  );
}