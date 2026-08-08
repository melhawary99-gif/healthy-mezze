"use client";

import { useEffect, useState } from "react";
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
      className={`sticky top-0 z-50 border-b border-gray-200/70 bg-white/85 backdrop-blur-md transition-shadow duration-300 ${
        hasScrolled ? "shadow-lg shadow-gray-900/10" : "shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo / Home */}
        <Link
          href="/"
          aria-label={t("homeAriaLabel")}
          className="text-xl font-bold tracking-tight text-gray-900 transition hover:text-green-700"
        >
          Healthy Mezze
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex" aria-label={t("primaryNavigation")}>
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition ${
                  isActive ? "text-green-700" : "text-gray-700 hover:text-green-700"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Language Switcher */}
        <div className="hidden items-center gap-2 md:flex">
          <Link
            href={pathname}
            locale={locale === "en" ? "ar" : "en"}
            className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium transition hover:bg-green-50"
          >
            {locale === "en" ? "العربية" : "English"}
          </Link>
        </div>

        {/* Favorites + Mobile Menu */}
        <div className="flex items-center gap-3">
          <Link
            href="/favorites"
            aria-label={t("favoritesAriaLabel")}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-green-700 shadow-sm transition hover:bg-green-50"
          >
            <Heart className="h-5 w-5" />
          </Link>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
