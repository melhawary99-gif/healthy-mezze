import Container from "@/components/ui/Container";

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-900">
      <Container>
        <section className="pt-20 pb-16 sm:pt-24 sm:pb-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
              Contact Healthy Mezze
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Contact Healthy Mezze
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
              We would love to hear from you. Share your questions, recipe ideas, or feedback.
            </p>
          </div>
        </section>

        <section className="mb-20 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-[2rem] border border-green-100 bg-green-50 p-8 shadow-sm sm:p-10">
            <h2 className="text-2xl font-semibold text-gray-900">Get in touch</h2>
            <p className="mt-4 text-gray-700">
              Have a recipe suggestion or feedback? Get in touch with us.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                  Email
                </p>
                <p className="mt-3 text-base text-gray-900">hello@healthymezze.com</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                  Message
                </p>
                <p className="mt-3 text-gray-700">
                  Have a recipe suggestion or feedback? Get in touch with us.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-green-100 bg-white p-8 shadow-sm sm:p-10">
            <form action="#" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="mt-3 w-full rounded-3xl border border-green-100 bg-green-50 px-4 py-3 text-gray-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-3 w-full rounded-3xl border border-green-100 bg-green-50 px-4 py-3 text-gray-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell us what's on your mind"
                  className="mt-3 w-full rounded-3xl border border-green-100 bg-green-50 px-4 py-3 text-gray-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full justify-center rounded-full bg-green-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </Container>
    </main>
  );
}
