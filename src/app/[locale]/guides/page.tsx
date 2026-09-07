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
      description: "Explore the ingredients, dishes, cooking traditions, and everyday food culture that shape Egyptian cuisine.",
    },
    ar: {
      title: "دليل المطبخ المصري",
      description: "اكتشف المكونات والأطباق والتقاليد وأساليب الطبخ التي تشكل المطبخ المصري.",
    },
  },
  {
    slug: "lebanese-cuisine-guide",
    en: {
      title: "Lebanese Cuisine Guide",
      description: "A practical introduction to Lebanese cooking, from mezze and herbs to grains, legumes, grilled dishes, and family tables.",
    },
    ar: {
      title: "دليل المطبخ اللبناني",
      description: "دليل عملي للمطبخ اللبناني، من المازة والأعشاب إلى الحبوب والبقوليات والمشاوي ومائدة العائلة.",
    },
  },
  {
    slug: "egyptian-breakfast-guide",
    en: {
      title: "Egyptian Breakfast Guide",
      description: "Learn how ful, eggs, bread, vegetables, cheese, and simple accompaniments come together in Egyptian breakfast culture.",
    },
    ar: {
      title: "دليل الفطور المصري",
      description: "تعرّف على الفول والبيض والخبز والخضروات والجبن والمرافِقات التي تشكل مائدة الفطور المصري.",
    },
  },
  {
    slug: "lebanese-mezze-guide",
    en: {
      title: "Lebanese Mezze Guide",
      description: "Understand the Lebanese mezze table, its balance of dips, salads, vegetables, breads, and shared dishes.",
    },
    ar: {
      title: "دليل المازة اللبنانية",
      description: "تعرّف على مائدة المازة اللبنانية وتوازنها بين المقبلات والسلطات والخضروات والخبز والأطباق المشتركة.",
    },
  },
  {
    slug: "mediterranean-ingredients-guide",
    en: {
      title: "Mediterranean Ingredients Guide",
      description: "A practical guide to olive oil, tahini, sumac, za'atar, legumes, grains, herbs, citrus, and other Mediterranean staples.",
    },
    ar: {
      title: "دليل مكونات المطبخ المتوسطي",
      description: "دليل عملي لزيت الزيتون والطحينة والسماق والزعتر والبقوليات والحبوب والأعشاب والحمضيات وغيرها.",
    },
  },
  {
    slug: "healthy-mezze-table-guide",
    en: {
      title: "How to Build a Healthy Mezze Table",
      description: "Learn how to combine vegetables, legumes, whole grains, dips, proteins, breads, and fresh flavors into a balanced shared meal.",
    },
    ar: {
      title: "كيف تبني مائدة مازة صحية",
      description: "تعلّم كيفية جمع الخضروات والبقوليات والحبوب الكاملة والمقبلات والبروتين والخبز في وجبة متوازنة.",
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
    ? "أدلة عملية عن المطبخ المصري واللبناني ومكونات البحر المتوسط والمازة والطبخ الصحي."
    : "Practical guides to Egyptian and Lebanese cuisine, Mediterranean ingredients, mezze, breakfast traditions, and healthy everyday cooking.";

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
              ? "أدلة عملية تساعدك على فهم المطبخ المصري واللبناني وتقاليد المائدة ومكونات البحر المتوسط والطبخ الصحي."
              : "Go beyond recipes. Learn about Egyptian and Lebanese food traditions, Mediterranean ingredients, mezze culture, breakfast, and practical healthy cooking."}
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
