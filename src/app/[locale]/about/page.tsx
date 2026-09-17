import type { Metadata } from "next";
import Image from "next/image";
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

        {/* Our Kitchen & Recipe Development */}
        <section className="mb-16">
          <div className="rounded-4xl border border-green-100 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
              {isArabic ? "من مطبخنا إلى مطبخك" : "From Our Kitchen to Yours"}
            </p>

            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              {isArabic
                ? "كيف نختبر ونطوّر وصفاتنا"
                : "How we test and develop our recipes"}
            </h2>
            <div className="mt-8 flex justify-center">
              <div className="overflow-hidden rounded-3xl border border-green-100 bg-[#FAFAF7] p-2 shadow-md">
                <Image
                  src="/images/about/healthy-mezze-team.webp"
                  alt={
                    isArabic
                      ? "مختار وزوجته، مؤسسا Healthy Mezze"
                      : "Mokhtar and his wife, the creators of Healthy Mezze"
                  }
                  width={1145}
                  height={1374}
                  sizes="(max-width: 768px) 90vw, 600px"
                  className="h-auto max-h-[620px] w-full rounded-2xl object-cover"
                />
              </div>
            </div>

            <div className="mt-6 space-y-5 text-base leading-8 text-gray-600 sm:text-lg">
              <p>
                {isArabic
                  ? "أنا مختار حسن، وقد أنشأت Healthy Mezze مع زوجتي لمشاركة ثقافتنا والأطباق التي نحضرها في المنزل والأطباق المعروفة التي نستمتع بها مع العالم. نؤمن أن وراء كل بيت طبقًا رائعًا، ولهذا فإن كثيرًا من الوصفات التي نشاركها هي أطباق نضعها بالفعل على مائدتنا، سواء في الإفطار أو الغداء أو العشاء."
                  : "I’m Mokhtar Hassan, and my wife and I created Healthy Mezze to share our culture, the homemade dishes we make, and commonly known dishes that we enjoy with the world. We believe that behind every home comes a great dish, which is why many of the recipes we share are dishes we actually make at our own table, whether it is breakfast, lunch, or dinner."}
              </p>

              <p>
                {isArabic
                  ? "الوصفات التي نشاركها يتم اختبارها بالطريقة التي نحضرها بها شخصيًا في المنزل أو في المقهى الخاص بنا. نريد أن تكون سهلة التنفيذ، ونحرص على توضيح الطرق التي يمكن من خلالها استبدال بعض المكونات أو تعديل الوصفة حسب ذوقك واحتياجاتك، مثل إضافة المزيد من الليمون أو جعلها أكثر حدة أو استخدام بديل عندما لا يتوفر أحد المكونات."
                  : "The recipes we share are tested the way we personally make them at home or in our café. We want them to be easy to make, and we make sure to show how some ingredients can be replaced or how a recipe can be adjusted to suit your needs, whether that means extra lemon, more spice, or an ingredient replacement when something is not available."}
              </p>

              <p>
                {isArabic
                  ? "نحن نحب أن نتذوق الطعام أثناء تحضيره بدلًا من انتظار النهاية فقط. نأخذ ملعقة صغيرة ونتذوق كل مرحلة، وبهذه الطريقة نستطيع التأكد من أن نكهة مكون واحد لا تطغى على بقية المكونات. وعند إعداد تتبيلة للسلطة، نتذوقها بعد خلطها ونقرر ما إذا كانت تحتاج إلى مزيد من الملح أو تعديل آخر حسب تفضيلاتنا."
                  : "We like to taste as we go rather than waiting until the very end. We take a little spoon and feel each step as we go, making sure the overall taste is not overwhelmed by one ingredient over the other. When making a salad dressing, we taste it after mixing and make our judgment based on whether we like it more salty or need another adjustment."}
              </p>

              <p>
                {isArabic
                  ? "وبالنسبة للدجاج واللحوم، نحرص دائمًا على التأكد من اكتمال نضجها. على سبيل المثال، يمكن إخراج الصينية من الفرن وقطع جزء صغير للتأكد من أنه لم يعد ورديًا وأنه ناضج بالكامل. هدفنا هو مشاركة طريقة عملية في الطبخ، وليس مجرد إعطائك مؤقتًا يجب اتباعه بشكل أعمى."
                  : "For chicken and other proteins, we always make sure they are fully cooked. For example, we may take the tray out of the oven, cut a small piece, and check whether it is still pinkish or fully cooked. Our goal is to share a practical way of cooking rather than simply giving you a timer to follow blindly."}
              </p>

              <p>
                {isArabic
                  ? "الكثير من هذه الطرق هي ببساطة ما تعلمناه من آبائنا وأجدادنا. وفي الوقت نفسه، نعرف أن الوصفات التقليدية تتغير مع مرور الوقت، خاصة عندما تعيش العائلات في مناطق تختلف فيها المكونات أو طرق التحضير. لذلك فإن التعديلات الصحية والعملية جزء من منهجنا في الطبخ، مع الحرص على توضيح الفرق بين الوصفة التقليدية والتعديل الذي نقدمه."
                  : "Many of these habits are simply what our parents and grandparents taught us. At the same time, we know that traditional recipes change over time, especially when families live in regions where ingredients or preparation methods may be different. Healthier and more practical adaptations are therefore part of our cooking methodology, while we make a distinction between a traditional preparation and an adaptation we offer."}
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: isArabic ? "اختبر وتذوق" : "Test & taste",
                  text: isArabic
                    ? "نختبر الوصفة عمليًا ونتذوق المراحل المختلفة للوصول إلى توازن أفضل للنكهات."
                    : "We test recipes practically and taste the different stages to find a better balance of flavors.",
                },
                {
                  title: isArabic ? "عدّل حسب حاجتك" : "Adapt when needed",
                  text: isArabic
                    ? "نوضح بدائل المكونات والتعديلات البسيطة عندما تحتاج إلى تكييف الوصفة مع ما لديك."
                    : "We explain ingredient substitutions and simple adjustments when you need to adapt a recipe to what you have.",
                },
                {
                  title: isArabic ? "اطلب المساعدة" : "Use our cooking support",
                  text: isArabic
                    ? "تقدم أقسام What If وRecipe Rescue والأسئلة الشائعة دعمًا إضافيًا للتعديلات والمشكلات الشائعة."
                    : "Our What If, Recipe Rescue, and FAQ sections provide additional support for substitutions, adjustments, and common cooking problems.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-gray-200 bg-gray-50 p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl bg-green-50 p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                {isArabic ? "شاركنا نسختك" : "Share your version with us"}
              </h3>

              <p className="mt-3 text-base leading-7 text-gray-600">
                {isArabic
                  ? "نحب أن نسمع كيف خرج طبقك، وما التعديلات الصغيرة التي أجريتها لتحصل على نسختك الخاصة أو لتناسب نظامك الغذائي. إذا وجدت طريقة أسهل أو خطوة مختلفة نجحت معك، شاركها معنا. المشاركة تصنع فرقًا، وكما نقول دائمًا: المشاركة هي الاهتمام :)"
                  : "We would love to hear how your dish turned out and what little tweaks you made to create your own version or suit your dietary plans. If you found an easier way or an improvised step that worked better for you, share it with us. Sharing is caring, as we say :) and it makes the cooking process more fun."}
              </p>
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
