import Container from "@/components/ui/Container";

export default function Newsletter() {
  return (
    <section className="py-20">
      <Container>
        <div className="rounded-3xl bg-green-700 px-6 py-12 text-center text-white md:px-12">
          <h2 className="text-3xl font-bold md:text-4xl">
            Join Healthy Mezze
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-green-100">
            Get healthy Mediterranean recipes, cooking inspiration,
            and wellness tips delivered to you.
          </p>

          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-xl px-5 py-3 text-gray-900 outline-none"
            />

            <button
              type="submit"
              className="rounded-xl bg-white px-6 py-3 font-medium text-green-700 transition hover:bg-green-50"
            >
              Subscribe
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}