import { tips } from "@/data/tips";
import Container from "@/components/ui/Container";
import Link from "next/link";

export default function HealthyTip() {
  // Calculate current week of the year
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);

  const daysSinceStart = Math.floor(
    (now.getTime() - startOfYear.getTime()) /
      (1000 * 60 * 60 * 24)
  );

  const weekNumber = Math.floor(daysSinceStart / 7);

  // Rotate through tips automatically
  const tip = tips[weekNumber % tips.length];

  return (
    <section className="bg-green-50 py-20">
      <Container>
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 text-center shadow-sm transition-all duration-500 hover:shadow-lg md:p-12">
          <div className="text-5xl">{tip.icon}</div>

          <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-green-600">
            Week {weekNumber + 1}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Healthy Tip of the Week
          </h2>

          <h3 className="mt-6 text-xl font-semibold text-green-700">
            {tip.title}
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
            {tip.description}
          </p>

          <Link
  href={`/recipes/${tip.recipeSlug}`}
  className="mt-8 inline-flex rounded-xl bg-green-700 px-6 py-3 font-medium text-white transition hover:bg-green-800"
>
  {tip.buttonText} →
</Link>
        </div>
      </Container>
    </section>
  );
}