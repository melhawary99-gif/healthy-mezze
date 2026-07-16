import { features } from "@/data/features";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function WhyHealthyMezze() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          title="Why Healthy Mezze?"
          subtitle="Simple, nourishing recipes inspired by Mediterranean traditions."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.id}
              className="rounded-3xl bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-5xl">
                {feature.icon}
              </div>

              <h3 className="mt-5 text-2xl font-bold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}