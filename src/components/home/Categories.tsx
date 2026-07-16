import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Categories() {
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        <SectionTitle
          title="Explore Categories"
          subtitle="Find healthy Mediterranean recipes made for every lifestyle."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-52 overflow-hidden bg-gray-100">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {category.name}
                </h3>

                <p className="mt-3 text-gray-600">
                  {category.description}
                </p>

                <span className="mt-5 inline-block font-medium text-green-700 transition group-hover:text-green-800">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}