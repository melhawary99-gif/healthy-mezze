
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { useTranslations } from "next-intl";

const featureIcons = ["🥗", "🌿", "❤️"];

export default function WhyHealthyMezze() {
  const t = useTranslations("WhyHealthyMezze");

  const features = [
    {
      id: 1,
      icon: featureIcons[0],
      title: t("features.freshIngredients.title"),
      description: t("features.freshIngredients.description"),
    },
    {
      id: 2,
      icon: featureIcons[1],
      title: t("features.mediterraneanLifestyle.title"),
      description: t("features.mediterraneanLifestyle.description"),
    },
    {
      id: 3,
      icon: featureIcons[2],
      title: t("features.madeForEveryone.title"),
      description: t("features.madeForEveryone.description"),
    },
  ];

  return (
    <section className="bg-[#FAFAF7] py-20 sm:py-24">
      <Container>
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.id}
              className="rounded-3xl bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-5xl">{feature.icon}</div>

              <h3 className="mt-5 text-2xl font-bold text-gray-900">{feature.title}</h3>

              <p className="mt-3 text-gray-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
