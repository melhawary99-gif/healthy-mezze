import { tips } from "@/data/tips";
import Container from "@/components/ui/Container";

export default function HealthyTip() {
  const tip = tips[0];

  return (
    <section className="bg-green-50 py-20">
      <Container>
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 text-center shadow-sm md:p-12">
          <div className="text-5xl">
            🌿
          </div>

          <h2 className="mt-5 text-3xl font-bold text-gray-900">
            Healthy Tip of the Week
          </h2>

          <h3 className="mt-4 text-xl font-semibold text-green-700">
            {tip.title}
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            {tip.description}
          </p>

          <button className="mt-6 rounded-xl bg-green-700 px-6 py-3 font-medium text-white transition hover:bg-green-800">
            Learn More →
          </button>
        </div>
      </Container>
    </section>
  );
}