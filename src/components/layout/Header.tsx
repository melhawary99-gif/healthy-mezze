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
