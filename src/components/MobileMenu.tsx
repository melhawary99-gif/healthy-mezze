"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [newsOpen, setNewsOpen] = useState(false);

  const t = useTranslations("Buttons");
  const nav = useTranslations("Navigation");

  const closeMenu = () => {
    setOpen(false);
    setNewsOpen(false);
  };

  return (
    <div className="relative shrink-0 md:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-green-200 bg-white text-green-700 transition hover:border-green-300 hover:bg-green-50 sm:h-11 sm:w-11"
        aria-label={open ? t("closeMenu") : t("openMenu")}
        aria-expanded={open}
        aria-controls="mobile-navigation"
      >
        {open ? (
          <X className="h-5 w-5" aria-hidden="true" />
        ) : (
          <Menu className="h-5 w-5" aria-hidden="true" />
        )}
      </button>

      {open && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 top-[76px] z-40 overflow-hidden rounded-b-3xl border-t border-green-100 bg-white shadow-xl transition duration-300 md:hidden"
        >
          <nav
            aria-label={nav("primaryNavigation")}
            className="flex flex-col gap-1 px-4 py-4"
          >
            <Link
              href="/"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-green-800 transition hover:bg-green-50"
            >
              {nav("home")}
            </Link>

            <Link
              href="/recipes"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-green-800 transition hover:bg-green-50"
            >
              {nav("recipes")}
            </Link>

            <Link
              href="/categories"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-green-800 transition hover:bg-green-50"
            >
              {nav("categories")}
            </Link>

            <Link
              href="/drink-vlog"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-green-800 transition hover:bg-green-50"
            >
              {nav("drinkVlog")}
            </Link>

            {/* News */}
            <div className="rounded-2xl">
              <div className="flex items-center">
                <Link
                  href="/news"
                  onClick={closeMenu}
                  className="flex-1 rounded-l-2xl px-4 py-3 text-sm font-medium text-green-800 transition hover:bg-green-50"
                >
                  {nav("news")}
                </Link>

                <button
                  type="button"
                  onClick={() => setNewsOpen((prev) => !prev)}
                  className="rounded-r-2xl px-4 py-3 text-green-700 transition hover:bg-green-50"
                  aria-label={nav("news")}
                  aria-expanded={newsOpen}
                  aria-controls="mobile-news-submenu"
                >
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      newsOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </div>

              {newsOpen && (
                <div
                  id="mobile-news-submenu"
                  className="mx-2 mb-2 rounded-2xl bg-green-50/70 p-2"
                >
                  <Link
                    href="/news/ingredient-benefits"
                    onClick={closeMenu}
                    className="block rounded-xl px-4 py-2.5 text-sm text-green-800 transition hover:bg-white"
                  >
                    {nav("newsIngredientBenefits")}
                  </Link>

                  <Link
                    href="/news/kitchen-equipment"
                    onClick={closeMenu}
                    className="block rounded-xl px-4 py-2.5 text-sm text-green-800 transition hover:bg-white"
                  >
                    {nav("newsKitchenEquipment")}
                  </Link>

                  <Link
                    href="/news/cooking-tips"
                    onClick={closeMenu}
                    className="block rounded-xl px-4 py-2.5 text-sm text-green-800 transition hover:bg-white"
                  >
                    {nav("newsCookingTips")}
                  </Link>

                  <Link
                    href="/news/culture-heritage"
                    onClick={closeMenu}
                    className="block rounded-xl px-4 py-2.5 text-sm text-green-800 transition hover:bg-white"
                  >
                    {nav("newsCultureHeritage")}
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/favorites"
              prefetch={false}
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-green-800 transition hover:bg-green-50"
            >
              {nav("favorites")}
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-green-800 transition hover:bg-green-50"
            >
              {nav("about")}
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
