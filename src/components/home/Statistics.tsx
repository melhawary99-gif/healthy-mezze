import Container from "@/components/ui/Container";

export default function Statistics() {
  const stats = [
    {
      value: "100+",
      label: "Healthy Recipes",
    },
    {
      value: "10",
      label: "Recipe Categories",
    },
    {
      value: "20+",
      label: "Mediterranean Cuisines",
    },
    {
      value: "100%",
      label: "Fresh Inspiration",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-stone-200 bg-[#FAFAF7] p-8 text-center transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-4xl font-bold text-green-700">
                {stat.value}
              </h3>

              <p className="mt-3 text-stone-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}