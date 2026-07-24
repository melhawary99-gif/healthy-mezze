import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { categories } from "@/data/categories";
import { recipes } from "@/data/recipes";

export default function Categories() {
  return (
    <section className="py-20 bg-[#FAFAF7]">
      <Container>
        <SectionTitle
          title="Browse Recipe Categories"
          subtitle="Discover healthy Egyptian and Lebanese recipes by category."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const recipeCount = recipes.filter(
              (recipe) => recipe.category === category.name
            ).length;

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
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="text-3xl">{category.icon}</span>

                      <span className="rounded-full bg-white/20 px-3 py-1 text-sm backdrop-blur-md">
                        {recipeCount} Recipes
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold">
                      {category.name}
                    </h3>

                    <p className="mt-2 text-sm text-gray-200">
                      {category.description}
                    </p>

                    <div className="mt-5 inline-flex items-center font-semibold text-green-300 transition-transform duration-300 group-hover:translate-x-2">
                      Browse Recipes →
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