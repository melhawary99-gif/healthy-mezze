import Link from "next/link";
import { recipeGuideLinks } from "@/data/recipeGuideLinks";

interface RecipeGuideLinksProps {
  category: string;
  locale: "en" | "ar";
}

export default function RecipeGuideLinks({
  category,
  locale,
}: RecipeGuideLinksProps) {
  const guides = recipeGuideLinks[category];

  if (!guides?.length) return null;

  return (
    <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
        {locale === "ar" ? "استكشف المزيد" : "Explore More"}
      </p>

      <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
        {locale === "ar"
          ? "تعمّق أكثر في المطبخ"
          : "Go deeper into the cuisine"}
      </h2>

      <p className="mt-2 max-w-2xl leading-7 text-gray-600">
        {locale === "ar"
          ? "تعرّف على المكونات والتقاليد وأساليب الطهي المرتبطة بهذه الوصفة."
          : "Learn more about the ingredients, traditions, and cooking approaches connected to this recipe."}
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="inline-flex items-center rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300 hover:text-emerald-800"
          >
            {locale === "ar" ? guide.ar : guide.en} →
          </Link>
        ))}
      </div>
    </section>
  );
}
