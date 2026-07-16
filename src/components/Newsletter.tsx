type NewsletterProps = {
  variant?: "hero" | "footer";
};

function NewsletterForm({ idSuffix, compact }: { idSuffix: string; compact?: boolean }) {
  const inputId = `newsletter-email-${idSuffix}`;
  const inputClasses = compact
    ? "w-full rounded-full border border-green-100 bg-white px-4 py-2 text-gray-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
    : "w-full rounded-3xl border border-green-100 bg-white px-5 py-4 text-gray-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100";

  const buttonClasses = compact
    ? "inline-flex items-center justify-center rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
    : "inline-flex items-center justify-center rounded-3xl bg-green-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2";

  const formLayout = compact
    ? "mt-4 flex w-full items-center gap-3"
    : "mt-8 grid gap-4 sm:grid-cols-[1fr_auto]";

  return (
    <form action="#" className={formLayout}>
      <label htmlFor={inputId} className="sr-only">
        Email address
      </label>
      <input id={inputId} name="email" type="email" placeholder="Enter your email" className={inputClasses} />
      <button type="submit" className={buttonClasses}>
        Subscribe
      </button>
    </form>
  );
}

export default function Newsletter({ variant = "hero" }: NewsletterProps) {
  const isHero = variant === "hero";

  if (isHero) {
    return (
      <section className="rounded-[2rem] border border-green-100 bg-green-50 p-6 shadow-sm sm:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">Join the Healthy Mezze Newsletter 🌿</p>
          <h2 className="mt-4 text-3xl font-semibold text-gray-900 sm:text-4xl">
            Get fresh Mediterranean recipes, healthy cooking tips, and meal ideas delivered to you.
          </h2>

          <NewsletterForm idSuffix="hero" compact={false} />
        </div>
      </section>
    );
  }

  // footer / compact variant
  return (
    <div className="w-full">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-0 text-left sm:px-0">
        <div>
          <p className="text-sm font-semibold text-gray-900">Stay Updated 🌿</p>
          <p className="mt-1 text-sm text-gray-600">Get our latest Mediterranean recipes.</p>
        </div>

        <div className="ml-4 hidden w-2/5 sm:block">
          <NewsletterForm idSuffix="footer" compact={true} />
        </div>

        <div className="w-full sm:hidden">
          <NewsletterForm idSuffix="footer-mobile" compact={true} />
        </div>
      </div>
    </div>
  );
}
