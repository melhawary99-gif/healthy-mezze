import { Recipe } from "@/types/recipe";

interface InstructionsSectionProps {
  recipe: Recipe;
}

export default function InstructionsSection({
  recipe,
}: InstructionsSectionProps) {
  return (
    <section>
      <h2 className="text-3xl font-bold">
        Instructions
      </h2>

      <ol className="mt-8 space-y-5">
        {recipe.instructions.map((step, index) => (
          <li
            key={`${index}-${step}`}
            className="flex gap-5 rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-700 text-lg font-bold text-white">
              {index + 1}
            </div>

            <p className="pt-2 leading-7 text-gray-700">
              {step}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}