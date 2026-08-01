import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { categories } from "@/data/categories";
import { recipes } from "@/data/recipes";

export default async function Categories() {
  const t = await getTranslations("Categories");
  return (
    <section className="py-20 bg-[#FAFAF7]">
      <Container>
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            let recipeCount = 0;

            if (category.name === "Vegan") {
              recipeCount = recipes.filter((recipe) => recipe.vegan === true).length;
            } else if (category.name === "Vegetarian") {
              recipeCount = recipes.filter((recipe) => recipe.vegetarian === true).length;
            } else {
              recipeCount = recipes.filter((recipe) => recipe.category === category.name).length;
            }

            return (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-72">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    quality={65}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 540px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="text-3xl">{category.icon}</span>

                      <span className="rounded-full bg-white/20 px-3 py-1 text-sm backdrop-blur-md">
                        {recipeCount} {t("recipes")}
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold">{category.name}</h3>

                    <p className="mt-2 text-sm text-gray-200">{category.description}</p>

                    <div className="mt-5 inline-flex items-center font-semibold text-green-300 transition-transform duration-300 group-hover:translate-x-2">
                      {t("browse")} →
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
