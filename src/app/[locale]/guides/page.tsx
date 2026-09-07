import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { SITE_URL, getLanguageAlternates } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: "en" | "ar" }>;
};

const guides = [
  {
    slug: "egyptian-cuisine-guide",
    en: {
      title: "Egyptian Cuisine Guide",
      description:
        "Explore the history, ingredients, everyday dishes, cooking traditions, and food culture that shape Egyptian cuisine.",
    },
    ar: {
      title: "دليل المطبخ المصري",
      description:
        "اكتشف تاريخ المطبخ المصري ومكوناته وأطباقه اليومية وتقاليده وثقافة الطعام التي تميزه.",
    },
  },
  {
    slug: "lebanese-cuisine-guide",
    en: {
      title: "Lebanese Cuisine Guide",
      description:
        "Understand Lebanese cooking through its herbs, grains, legumes, vegetables, mezze, grilled dishes, and shared-table traditions.",
    },
    ar: {
      title: "دليل المطبخ اللبناني",
      description:
        "تعرّف على المطبخ اللبناني من خلال الأعشاب والحبوب والبقوليات والخضروات والمازة والمشاوي وتقاليد المائدة المشتركة.",
    },
  },
  {
    slug: "eastern-mediterranean-food-guide",
    en: {
      title: "Eastern Mediterranean Food Guide",
      description:
        "Discover the ingredients, cooking habits, flavors, and shared food traditions connecting Egyptian, Lebanese, and neighboring Eastern Mediterranean cuisines.",
    },
    ar: {
      title: "دليل طعام شرق المتوسط",
      description:
        "اكتشف المكونات وأساليب الطبخ والنكهات والتقاليد الغذائية المشتركة بين مصر ولبنان ومطابخ شرق المتوسط.",
    },
  },
  {
    slug: "egyptian-breakfast-guide",
    en: {
      title: "Egyptian Breakfast Guide",
      description:
        "Learn how ful, eggs, bread, vegetables, cheese, pickles, and fresh herbs come together in Egyptian breakfast culture.",
    },
    ar: {
      title: "دليل الفطور المصري",
      description:
        "تعرّف على الفول والبيض والخبز والخضروات والجبن والمخللات والأعشاب التي تشكل مائدة الفطور المصري.",
    },
  },
  {
    slug: "lebanese-mezze-guide",
    en: {
      title: "Lebanese Mezze Guide",
      description:
        "Learn how dips, salads, vegetables, grains, breads, pickles, and grilled foods work together on a Lebanese mezze table.",
    },
    ar: {
      title: "دليل المازة اللبنانية",
      description:
        "تعلّم كيف تتكامل المقبلات والسلطات والخضروات والحبوب والخبز والمخللات والمشاوي على مائدة المازة اللبنانية.",
    },
  },
  {
    slug: "egyptian-pantry-essentials",
    en: {
      title: "Egyptian Pantry Essentials",
      description:
        "A practical introduction to the beans, grains, spices, herbs, vegetables, oils, and everyday staples found in Egyptian cooking.",
    },
    ar: {
      title: "أساسيات المطبخ المصري",
      description:
        "دليل عملي للفول والحبوب والتوابل والأعشاب والخضروات والزيوت والمكونات الأساسية في المطبخ المصري.",
    },
  },
  {
    slug: "lebanese-pantry-essentials",
    en: {
      title: "Lebanese Pantry Essentials",
      description:
        "Learn which everyday ingredients make Lebanese cooking easier, from tahini and bulgur to herbs, spices, legumes, and pantry staples.",
    },
    ar: {
      title: "أساسيات المطبخ اللبناني",
      description:
        "تعرّف على المكونات اليومية التي تجعل الطبخ اللبناني أسهل، من الطحينة والبرغل إلى الأعشاب والتوابل والبقوليات.",
    },
  },
  {
    slug: "mediterranean-herbs-spices-guide",
    en: {
      title: "Mediterranean Herbs & Spices Guide",
      description:
        "Understand how parsley, mint, cumin, coriander, sumac, za'atar, cinnamon, and other seasonings shape Mediterranean dishes.",
    },
    ar: {
      title: "دليل أعشاب وتوابل البحر المتوسط",
      description:
        "افهم دور البقدونس والنعناع والكمون والكزبرة والسماق والزعتر والقرفة وغيرها من التوابل في أطباق البحر المتوسط.",
    },
  },
  {
    slug: "tahini-guide",
    en: {
      title: "Tahini Guide",
      description:
        "Learn what tahini is, how to choose it, how it behaves when mixed with lemon and water, and how it is used in Mediterranean cooking.",
    },
    ar: {
      title: "دليل الطحينة",
      description:
        "تعرّف على الطحينة وكيفية اختيارها وطريقة تفاعلها مع الليمون والماء واستخداماتها في الطبخ المتوسطي.",
    },
  },
  {
    slug: "zaatar-guide",
    en: {
      title: "Za'atar Guide",
      description:
        "Explore za'atar, its common components, flavor profile, traditional uses, storage, and practical ways to use it at home.",
    },
    ar: {
      title: "دليل الزعتر",
      description:
        "اكتشف الزعتر ومكوناته الشائعة ونكهته واستخداماته التقليدية وطرق حفظه واستعماله في المنزل.",
    },
  },
  {
    slug: "sumac-guide",
    en: {
      title: "Sumac Guide",
      description:
        "Learn how sumac adds bright acidity to salads, grilled foods, dips, grains, and other Eastern Mediterranean dishes.",
    },
    ar: {
      title: "دليل السماق",
      description:
        "تعرّف على السماق وكيف يضيف الحموضة والنكهة المنعشة إلى السلطات والمشاوي والمقبلات والحبوب.",
    },
  },
  {
    slug: "healthy-mezze-table-guide",
    en: {
      title: "How to Build a Healthy Mezze Table",
      description:
        "Learn how to combine vegetables, legumes, whole grains, dips, proteins, breads, herbs, and fresh flavors into a balanced shared meal.",
    },
    ar: {
      title: "كيف تبني مائدة مازة صحية",
      description:
        "تعلّم كيفية جمع الخضروات والبقوليات والحبوب الكاملة والمقبلات والبروتين والخبز والأعشاب في وجبة متوازنة.",
    },
  },
  {
    slug: "healthy-mediterranean-meal-planning",
    en: {
      title: "Healthy Mediterranean Meal Planning",
      description:
        "Build practical weekly meals around vegetables, legumes, grains, proteins, fresh herbs, and simple Mediterranean pantry staples.",
    },
    ar: {
      title: "تخطيط الوجبات المتوسطية الصحية",
      description:
        "خطط لوجبات أسبوعية عملية تعتمد على الخضروات والبقوليات والحبوب والبروتين والأعشاب ومكونات البحر المتوسط الأساسية.",
    },
  },
  {
    slug: "mediterranean-cooking-techniques",
    en: {
      title: "Mediterranean Cooking Techniques",
      description:
        "Learn practical techniques including roasting, grilling, simmering, marinating, seasoning, emulsifying, and preparing grains and legumes.",
    },
    ar: {
      title: "تقنيات الطبخ المتوسطي",
      description:
        "تعلّم تقنيات عملية مثل التحميص والشوي والطهي الهادئ والتتبيل وتحضير الحبوب والبقوليات وخلط الصلصات.",
    },
  },
  {
    slug: "healthier-mediterranean-recipes-guide",
    en: {
      title: "Making Mediterranean Recipes Healthier Without Losing Flavor",
      description:
        "Practical ways to improve everyday Mediterranean recipes through better balance, portions, cooking methods, vegetables, and flavor-building techniques.",
    },
    ar: {
      title: "كيف تجعل الوصفات المتوسطية أكثر توازنًا دون فقدان النكهة",
      description:
        "طرق عملية لتحسين الوصفات المتوسطية اليومية من خلال التوازن وحجم الحصص وطرق الطهي والخضروات وبناء النكهة.",
    },
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isArabic = locale === "ar";

  const title = isArabic
    ? "أدلة المطبخ | Healthy Mezze"
    : "Healthy Mezze Cooking Guides";

  const description = isArabic
    ? "أدلة عملية عن المطبخ المصري واللبناني وشرق المتوسط والمكونات والمازة والطبخ الصحي."
    : "Practical editorial guides to Egyptian and Lebanese cuisine, Eastern Mediterranean ingredients, mezze, breakfast traditions, and healthy cooking.";

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/guides`,
      languages: getLanguageAlternates("/guides"),
    },
  };
}

export default async function GuidesPage({ params }: Props) {
  const { locale } = await params;
  const isArabic = locale === "ar";

  return (
    <main className="bg-[#FAFAF7] py-20">
      <Container>
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
            {isArabic ? "المعرفة والمطبخ" : "Kitchen Knowledge"}
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {isArabic ? "أدلة Healthy Mezze" : "Healthy Mezze Guides"}
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            {isArabic
              ? "أدلة عملية تساعدك على فهم المطبخ المصري واللبناني وشرق المتوسط والمكونات وتقاليد المائدة والطبخ الصحي."
              : "Go beyond recipes. Learn about Egyptian and Lebanese food traditions, Eastern Mediterranean ingredients, mezze culture, breakfast, pantry staples, and practical healthy cooking."}
          </p>
        </header>

        <section className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => {
            const content = isArabic ? guide.ar : guide.en;

            return (
              <article
                key={guide.slug}
                className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
                  {isArabic ? "دليل" : "Guide"}
                </p>

                <h2 className="mt-3 text-2xl font-bold text-gray-900">
                  {content.title}
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  {content.description}
                </p>

                <Link
                  href={`/${locale}/guides/${guide.slug}`}
                  className="mt-6 inline-flex font-semibold text-emerald-700 hover:text-emerald-900"
                >
                  {isArabic ? "اقرأ الدليل ←" : "Read the guide →"}
                </Link>
              </article>
            );
          })}
        </section>
      </Container>
    </main>
  );
}
