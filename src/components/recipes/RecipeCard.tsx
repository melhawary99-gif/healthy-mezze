import Image from "next/image";

export interface RecipeCardProps {
  title: string;
  description: string;
  image: string;
  prepTime: string;
}

export default function RecipeCard({
  title,
  description,
  image,
  prepTime,
}: RecipeCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-56 w-full bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <span className="text-sm font-medium text-green-700">
          ⏱ {prepTime}
        </span>

        <h3 className="mt-2 text-2xl font-bold">
          {title}
        </h3>

        <p className="mt-3 text-gray-600">
          {description}
        </p>

        <button className="mt-6 rounded-lg bg-green-600 px-5 py-2 text-white transition hover:bg-green-700">
          View Recipe
        </button>
      </div>
    </article>
  );
}