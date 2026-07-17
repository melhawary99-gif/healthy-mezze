import Container from "@/components/ui/Container";
import Newsletter from "@/components/Newsletter";

export default function ContactPage() {
  return (
    <main className="bg-[#FAFAF7] text-gray-900">
      <Container>
        <section className="pt-20 pb-10 sm:pt-24 sm:pb-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
              Contact Healthy Mezze
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Say hello to fresh Mediterranean cooking.
            </h1>
            <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
              Have a question, feedback, or recipe idea? We’re here to help and make your kitchen feel inspired.
            </p>
          </div>
        </section>

        <section className="mb-16 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-4xl border border-green-100 bg-green-50 p-8 shadow-sm sm:p-10">
            <h2 className="text-2xl font-semibold text-gray-900">Contact information</h2>
            <p className="mt-4 text-gray-700">
              Reach out for recipe support, ingredient questions, or just to say hi.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                  Email
                </p>
                <a href="mailto:hello@healthymezze.com" className="mt-3 block text-base font-semibold text-gray-900 hover:text-green-700">
                  hello@healthymezze.com
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                  Social media
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {[
                    { label: "Instagram", href: "#" },
                    { label: "Pinterest", href: "#" },
                    { label: "TikTok", href: "#" },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-green-300 hover:text-green-700"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                  Response time
                </p>
                <p className="mt-3 text-base text-gray-700">
                  Our team typically replies within 1-2 business days.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                  Friendly support
                </p>
                <p className="mt-3 text-base text-gray-700">
                  We’re here to make your cooking journey easier, more delicious, and more joyful.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-4xl border border-green-100 bg-white p-8 shadow-sm sm:p-10">
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
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to ask?"
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
                Send message
              </button>
            </form>
          </div>
        </section>

        <section className="mb-16">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-4xl border border-green-100 bg-white p-8 shadow-sm sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
                FAQ preview
              </p>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Answers to common questions
              </h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {[
                  {
                    question: "Can I submit my own recipe?",
                    answer: "We love hearing your ideas! Submit your recipe concept and we’ll review it for inspiration.",
                  },
                  {
                    question: "Are recipes beginner friendly?",
                    answer: "Yes — our recipes are crafted for home cooks at every level with clear steps and approachable ingredients.",
                  },
                  {
                    question: "How often are new recipes added?",
                    answer: "We regularly add fresh Mediterranean recipes so you can keep your meal plan exciting.",
                  },
                ].map((item) => (
                  <div key={item.question} className="rounded-3xl border border-green-100 bg-green-50 p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                    <p className="mt-3 text-sm leading-6 text-gray-600">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <Newsletter variant="hero" />
        </section>
      </Container>
    </main>
  );
}
