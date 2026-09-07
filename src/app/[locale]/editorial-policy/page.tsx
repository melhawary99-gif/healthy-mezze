import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getLanguageAlternates } from "@/lib/seo";
import Container from "@/components/ui/Container";
import { Link } from "@/i18n/navigation";

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
      "Learn how Healthy Mezze develops, reviews, and maintains its recipes, culinary guides, nutrition information, and drink content.",
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

  const isArabic = locale === "ar";

  return (
    <main className="bg-[#FAFAF7] text-gray-900">
      <Container>
        <section className="mx-auto max-w-4xl py-20 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
            Healthy Mezze
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {t("title")}
          </h1>

          <p className="mt-6 text-gray-600">
            <strong>{t("lastUpdatedLabel")}:</strong> {t("lastUpdated")}
          </p>

          <div className="mt-10 space-y-10 leading-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                {t("mission.title")}
              </h2>
              <p className="mt-4">{t("mission.text")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                {t("recipeDevelopment.title")}
              </h2>
              <p className="mt-4">{t("recipeDevelopment.text")}</p>

              <div className="mt-6 rounded-3xl border border-gray-200 bg-white p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {isArabic ? "ما الذي نتحقق منه؟" : "What we check"}
                </h3>

                <ul className="mt-4 space-y-3 text-gray-600">
                  {(isArabic
                    ? [
                        "وضوح المقادير وترتيب الخطوات.",
                        "منطق أوقات ودرجات الطهي وطريقة التحضير.",
                        "الملاحظات العملية ومشكلات الطهي الشائعة.",
                        "السياق الثقافي عندما يكون أصل الطبق مهماً لفهم الوصفة.",
                        "التمييز بين الطريقة التقليدية والتعديلات المقترحة.",
                      ]
                    : [
                        "Clear quantities and an understandable sequence of steps.",
                        "Reasonable cooking times, temperatures, and preparation methods.",
                        "Practical notes addressing common cooking problems.",
                        "Culinary context when a dish's origins help explain the recipe.",
                        "A clear distinction between traditional methods and suggested adaptations.",
                      ]
                  ).map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                {t("accuracy.title")}
              </h2>
              <p className="mt-4">{t("accuracy.text")}</p>
              <p className="mt-4">
                {isArabic
                  ? "عندما نكتشف خطأ أو معلومة تحتاج إلى تحديث، نراجع الصفحة ونجري التصحيح المناسب. يمكن للقراء إرسال الملاحظات إلى فريق Healthy Mezze."
                  : "When we identify an error or information that needs updating, we review the page and make the appropriate correction. Readers can send feedback to the Healthy Mezze team."}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                {t("nutrition.title")}
              </h2>
              <p className="mt-4">{t("nutrition.text")}</p>
              <p className="mt-4">
                {isArabic
                  ? "القيم الغذائية تقديرية وقد تختلف حسب العلامة التجارية والمكونات وحجم الحصة وطريقة التحضير. لا ينبغي استخدامها لتشخيص حالة صحية أو استبدال نصيحة مختص مؤهل."
                  : "Nutrition values are estimates and can vary with brands, ingredients, serving sizes, and preparation methods. They should not be used to diagnose a health condition or replace advice from a qualified professional."}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                {isArabic ? "التقاليد والتعديلات" : "Tradition and adaptations"}
              </h2>

              <p className="mt-4">
                {isArabic
                  ? "Healthy Mezze يركز على أطعمة مصرية ولبنانية مستوحاة من منطقة البحر المتوسط وشرق المتوسط. قد تختلف الوصفة من بيت إلى آخر ومن منطقة إلى أخرى، لذلك نتجنب تقديم نسخة واحدة باعتبارها الطريقة الوحيدة الصحيحة."
                  : "Healthy Mezze focuses on Egyptian and Lebanese foods inspired by the Mediterranean and Eastern Mediterranean regions. Recipes can vary between households and regions, so we avoid presenting one version as the only correct preparation."}
              </p>

              <p className="mt-4">
                {isArabic
                  ? "عندما نجري تعديلاً بهدف تقليل بعض المكونات أو تبسيط التحضير، نحاول توضيح أن هذه نسخة معدّلة وليست بالضرورة وصفة تقليدية."
                  : "When we adapt a recipe to simplify preparation or change its nutritional profile, we aim to make clear that the result is an adaptation rather than necessarily a traditional preparation."}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                {t("independence.title")}
              </h2>
              <p className="mt-4">{t("independence.text")}</p>
              <p className="mt-4">
                {isArabic
                  ? "نحن لا نضيف معلومات أو توصيات لمجرد تحسين ترتيب البحث. يجب أن يكون للمحتوى المنشور فائدة حقيقية للقارئ."
                  : "Content is not added simply to manipulate search rankings. Published material should provide genuine value to the reader."}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                {isArabic ? "المحتوى المرئي والوصفات المصوّرة" : "Visual and drink content"}
              </h2>

              <p className="mt-4">
                {isArabic
                  ? "الصور وخطوات التحضير المرئية تهدف إلى مساعدة القارئ على فهم الوصفة ومراحلها. في قسم Drink Vlog نستخدم المحتوى المرئي لشرح تحضير المشروبات بطريقة عملية، وليس كبديل عن الوصفة المكتوبة."
                  : "Recipe photography and visual steps are intended to help readers understand the dish and its preparation. In Drink Vlog, visual content is used to demonstrate drink preparation practically rather than replace the written recipe."}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                {t("contact.title")}
              </h2>

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

              <Link
                href="/about"
                className="mt-6 inline-flex rounded-2xl border border-gray-200 bg-white px-5 py-3 font-semibold text-gray-800 transition hover:border-emerald-300 hover:bg-emerald-50"
              >
                {isArabic ? "تعرف علينا" : "Learn more about Healthy Mezze"}
              </Link>
            </section>
          </div>
        </section>
      </Container>
    </main>
  );
}
