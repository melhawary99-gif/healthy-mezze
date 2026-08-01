import Image from "next/image";
import { Link } from "@/i18n/navigation";
import heroFood from "@/../public/images/hero-food.webp";
import { useTranslations, useLocale } from "next-intl";

export default function Hero() {
  const t = useTranslations("Home");
  const buttons = useTranslations("Buttons");
  const locale = useLocale();

  console.log("Hero locale:", locale);
  return (
    <section className="bg-gradient-to-b from-[#FAFAF7] to-green-50">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 py-20 lg:flex-row">
        {/* Left Side */}
        <div className="flex-1 text-center lg:text-left">
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            {t("badge")}
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">
            {t("titleLine1")}
            <br />
            {t("titleLine2")}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">{t("description")}</p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row lg:justify-start">
            <Link
              href="/recipes"
              className="rounded-xl bg-green-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-green-700"
            >
              {buttons("browseRecipes")}
            </Link>

            <Link
              href="/categories"
              className="rounded-xl border border-green-600 px-8 py-4 font-semibold text-green-700 transition hover:bg-green-50"
            >
              {buttons("exploreCategories")}
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 text-sm font-medium text-gray-700 lg:justify-start">
            <span className="rounded-full bg-white px-4 py-2 shadow">
              🥗 {t("freshIngredients")}
            </span>

            <span className="rounded-full bg-white px-4 py-2 shadow">📊 {t("nutritionFacts")}</span>

            <span className="rounded-full bg-white px-4 py-2 shadow">👨‍🍳 {t("easyRecipes")}</span>

            <span className="rounded-full bg-white px-4 py-2 shadow">
              🌿 {t("mediterraneanCuisine")}
            </span>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-1 justify-center">
          <Image
            src={heroFood}
            alt="Healthy Mediterranean dishes with fresh vegetables, hummus, salads, and wraps"
            width={700}
            height={700}
            priority
            fetchPriority="high"
            quality={70}
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 50vw"
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
