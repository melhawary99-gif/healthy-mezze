import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { getLanguageAlternates } from "@/lib/seo";
import { SITE_URL } from "@/lib/seo";

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

  const title = t("title");
  const description = t("subtitle");
  const canonical = `/${locale}/about`;
  const absoluteUrl = `${SITE_URL}${canonical}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: getLanguageAlternates("/about"),
    },
    openGraph: {
      type: "website",
      url: absoluteUrl,
      siteName: "Healthy Mezze",
      title,
      description,
      locale: locale === "ar" ? "ar_AR" : "en_US",
      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_AR"],
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Healthy Mezze",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-image.jpg"],
    },
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "About",
  });

  const isArabic = locale === "ar";

  return (
    <main className="bg-[#FAFAF7]">
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

            <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
              {t("subtitle")}
            </p>
          </div>
        </section>

        {/* Story + Mission */}
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

          <div className="rounded-4xl border border-green-100 bg-green-50 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
              {t("mission")}
            </p>

            <div className="mt-6 grid gap-4">
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
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Create Content */}
        <section className="mb-16">
          <div className="rounded-4xl border border-green-100 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
              {isArabic ? "منهجنا التحريري" : "Our Editorial Approach"}
            </p>

            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              {isArabic
                ? "كيف نطوّر محتوى Healthy Mezze"
                : "How Healthy Mezze develops its content"}
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {[
                {
                  title: isArabic ? "البحث والسياق" : "Research & context",
                  text: isArabic
                    ? "نبحث في أصل الطبق ومكانه في المطبخ المحلي، ونوضح عندما يكون الطبق تقليدياً أو مستوحى من أكثر من تقليد إقليمي."
                    : "We research the dish's culinary context and explain where it belongs in local food traditions. When a recipe draws from more than one regional tradition, we say so.",
                },
                {
                  title: isArabic ? "اختبار الوصفة" : "Recipe development",
                  text: isArabic
                    ? "نركز على وصفات يمكن تنفيذها في المنزل، مع مقادير واضحة وخطوات مرتبة وملاحظات تساعد على تجنب الأخطاء الشائعة."
                    : "Recipes are developed for practical home cooking, with clear quantities, ordered steps, and notes that address common cooking problems.",
                },
                {
                  title: isArabic ? "التغذية بوضوح" : "Nutrition with context",
                  text: isArabic
                    ? "نقدم معلومات غذائية تقديرية لمساعدة القارئ على فهم الوجبة، وليست بديلاً عن النصيحة الطبية أو الغذائية المتخصصة."
                    : "Nutrition information is provided as practical guidance for understanding a meal. It is not a substitute for individualized medical or dietary advice.",
                },
                {
                  title: isArabic ? "التقليدي مقابل المعدّل" : "Traditional vs. adapted",
                  text: isArabic
                    ? "قد نقترح تعديلات تجعل الوصفة أسهل أو أخف، لكننا نحرص على التمييز بين الوصفة التقليدية والتعديل الحديث."
                    : "We may suggest lighter or more accessible adaptations, while making a clear distinction between a traditional preparation and a modern adaptation.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-gray-200 bg-gray-50 p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-3 leading-7 text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <div className="rounded-4xl border border-green-100 bg-white p-8 shadow-sm sm:p-10">
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

                  <h3 className="mt-5 text-xl font-semibold text-gray-900">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Standards */}
        <section className="mb-16">
          <div className="rounded-4xl border border-green-100 bg-green-50 p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
              {isArabic ? "معايير المحتوى" : "Content Standards"}
            </p>

            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              {isArabic
                ? "نراجع المحتوى ونصححه عندما نكتشف مشكلة"
                : "We improve content when we find something that needs correction"}
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-700">
              {isArabic
                ? "الوصفات والمعلومات المنشورة ليست ثابتة إلى الأبد. إذا اكتشفنا خطأ في المقادير أو الخطوات أو المعلومات التحريرية، نعمل على تصحيحه وتحديث الصفحة. يمكن للقراء التواصل معنا بشأن الأخطاء أو الاقتراحات."
                : "Published recipes and editorial information are not treated as permanently fixed. When we identify an error in ingredients, instructions, or supporting information, we update the page. Readers can contact us with corrections, questions, or suggestions."}
            </p>

            <p className="mt-4 text-lg leading-8 text-gray-700">
              {isArabic
                ? "لمزيد من التفاصيل حول طريقة إعداد ومراجعة المحتوى، راجع سياسة التحرير."
                : "For more detail about how content is developed and maintained, read our Editorial Policy."}
            </p>

            <Link
              href="/editorial-policy"
              className="mt-6 inline-flex rounded-2xl bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800"
            >
              {isArabic ? "اقرأ سياسة التحرير" : "Read our Editorial Policy"}
            </Link>
          </div>
        </section>

        {/* Explore */}
        <section className="mb-20">
          <div className="rounded-4xl border border-gray-200 bg-white p-8 text-center shadow-sm sm:p-10">
            <h2 className="text-3xl font-bold text-gray-900">
              {isArabic
                ? "استكشف Healthy Mezze"
                : "Explore Healthy Mezze"}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              {isArabic
                ? "ابدأ بالوصفات، أو تعمق في الأدلة التحريرية، أو شاهد وصفات المشروبات خطوة بخطوة."
                : "Start with recipes, explore our culinary guides, or follow our drink recipes and demonstrations."}
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                href="/recipes"
                className="rounded-2xl border border-gray-200 px-5 py-3 font-semibold text-gray-800 transition hover:border-emerald-300 hover:bg-emerald-50"
              >
                {isArabic ? "الوصفات" : "Recipes"}
              </Link>

              <Link
                href="/guides"
                className="rounded-2xl border border-gray-200 px-5 py-3 font-semibold text-gray-800 transition hover:border-emerald-300 hover:bg-emerald-50"
              >
                {isArabic ? "الأدلة" : "Guides"}
              </Link>

              <Link
                href="/drink-vlog"
                className="rounded-2xl border border-gray-200 px-5 py-3 font-semibold text-gray-800 transition hover:border-emerald-300 hover:bg-emerald-50"
              >
                {isArabic ? "مدونة المشروبات" : "Drink Vlog"}
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
