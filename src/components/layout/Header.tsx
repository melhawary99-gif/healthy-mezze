"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import MobileMenu from "@/components/MobileMenu";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

export default function Header() {
  const pathname = usePathname() || "/";
  const t = useTranslations("Navigation");
  const locale = useLocale();

  const navLinks = [
    { label: t("home"), href: "/" },
    { label: t("recipes"), href: "/recipes" },
    { label: t("categories"), href: "/categories" },
    { label: t("drinkVlog"), href: "/drink-vlog" },
    { label: t("favorites"), href: "/favorites" },
    { label: t("about"), href: "/about" },
  ];

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-gray-200/70 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
        hasScrolled ? "shadow-lg shadow-gray-900/10" : "shadow-none"
      }`}
    >
      <div className="mx-auto flex h-[76px] w-full max-w-7xl items-center justify-between px-2.5 sm:px-6 lg:px-8">
        {/* Logo / Home */}
        <Link
          href="/"
          aria-label={t("homeAriaLabel")}
          className="flex min-w-0 shrink-0 items-center gap-1.5 transition-opacity hover:opacity-90 sm:gap-2.5"
        >
          <Image
            src="/logo.png"
            alt="Healthy Mezze"
            width={52}
            height={52}
            priority
            className="h-9 w-9 shrink-0 object-contain sm:h-14 sm:w-14"
          />

          <div className="flex min-w-0 flex-col justify-center leading-none">
            <span className="truncate whitespace-nowrap text-[18px] font-bold tracking-tight text-green-800 sm:text-[23px]">
              Healthy Mezze
            </span>

            <span className="mt-1 hidden truncate whitespace-nowrap text-[9px] font-medium tracking-wide text-gray-500 sm:block sm:text-[10px]">
              Healthy Mediterranean Recipes
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label={t("primaryNavigation")}
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition ${
                  isActive
                    ? "text-green-700"
                    : "text-gray-700 hover:text-green-700"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* News dropdown */}
          <div className="group relative">
            <Link
              href="/news"
              className={`inline-flex items-center text-sm font-medium transition ${
                pathname.startsWith("/news")
                  ? "text-green-700"
                  : "text-gray-700 hover:text-green-700"
              }`}
              aria-haspopup="true"
            >
              {t("news")}
              <span
                className="ml-1 text-[10px] transition-transform duration-200 group-hover:rotate-180"
                aria-hidden="true"
              >
                ▾
              </span>
            </Link>

            <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="rounded-2xl border border-gray-200 bg-white p-2 shadow-xl shadow-gray-900/10">
                <Link
                  href="/news/ingredient-benefits"
                  className="block rounded-xl px-4 py-3 transition hover:bg-green-50"
                >
                  <span className="block text-sm font-semibold text-gray-900">
                    {t("newsIngredientBenefits")}
                  </span>
                  <span className="mt-1 block text-xs text-gray-500">
                    {locale === "ar"
                      ? "مقالات عن المكونات وفوائدها."
                      : "Articles about ingredients and their benefits."}
                  </span>
                </Link>

                <Link
                  href="/news/kitchen-equipment"
                  className="block rounded-xl px-4 py-3 transition hover:bg-green-50"
                >
                  <span className="block text-sm font-semibold text-gray-900">
                    {t("newsKitchenEquipment")}
                  </span>
                  <span className="mt-1 block text-xs text-gray-500">
                    {locale === "ar"
                      ? "أدوات ومعدات تساعدك في المطبخ."
                      : "Kitchen tools and equipment that help you cook."}
                  </span>
                </Link>

                <Link
                  href="/news/cooking-tips"
                  className="block rounded-xl px-4 py-3 transition hover:bg-green-50"
                >
                  <span className="block text-sm font-semibold text-gray-900">
                    {t("newsCookingTips")}
                  </span>
                  <span className="mt-1 block text-xs text-gray-500">
                    {locale === "ar"
                      ? "نصائح وحيل عملية للطبخ."
                      : "Practical cooking tips and useful hacks."}
                  </span>
                </Link>

                <Link
                  href="/news/culture-heritage"
                  className="block rounded-xl px-4 py-3 transition hover:bg-green-50"
                >
                  <span className="block text-sm font-semibold text-gray-900">
                    {t("newsCultureHeritage")}
                  </span>
                  <span className="mt-1 block text-xs text-gray-500">
                    {locale === "ar"
                      ? "قصص عن الطعام والثقافة والتراث."
                      : "Stories about food, culture, and heritage."}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Language + Favorites + Mobile Menu */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2.5">
          {/* Desktop Language Switcher */}
          <Link
            href={pathname}
            locale={locale === "en" ? "ar" : "en"}
            aria-label={
              locale === "en" ? "Switch to Arabic" : "Switch to English"
            }
            className="hidden h-11 items-center justify-center rounded-xl border border-gray-200 bg-white px-3.5 text-sm font-medium text-gray-700 shadow-sm transition hover:border-green-200 hover:bg-green-50 hover:text-green-700 md:inline-flex"
          >
            {locale === "en" ? "العربية" : "English"}
          </Link>

          {/* Mobile Language Switcher */}
          <Link
            href={pathname}
            locale={locale === "en" ? "ar" : "en"}
            aria-label={
              locale === "en" ? "Switch to Arabic" : "Switch to English"
            }
            className="inline-flex h-10 min-w-10 shrink-0 items-center justify-center rounded-2xl border border-green-100 bg-white px-2 text-xs font-bold tracking-wide text-green-700 shadow-sm transition hover:bg-green-50 sm:h-11 sm:min-w-11 sm:px-2.5 md:hidden"
          >
            {locale === "en" ? "AR" : "EN"}
          </Link>

          {/* Favorites */}
          <Link
            href="/favorites"
            prefetch={false}
            aria-label={t("favoritesAriaLabel")}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-green-700 shadow-sm transition hover:bg-green-50 sm:h-11 sm:w-11"
          >
            <Heart className="h-5 w-5" />
          </Link>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
