"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("Buttons");
  const nav = useTranslations("Navigation");

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-green-200 bg-white text-green-700 transition hover:border-green-300 hover:bg-green-50"
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
          className="fixed inset-x-0 top-16 z-40 overflow-hidden rounded-b-3xl border-t border-green-100 bg-white shadow-xl transition duration-300 md:hidden"
        >
          <nav aria-label={nav("primaryNavigation")} className="flex flex-col gap-1 px-4 py-4">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-green-800 transition hover:bg-green-50"
            >
              {nav("home")}
            </Link>

            <Link
              href="/recipes"
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-green-800 transition hover:bg-green-50"
            >
              {nav("recipes")}
            </Link>

            <Link
              href="/categories"
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-green-800 transition hover:bg-green-50"
            >
              {nav("categories")}
            </Link>

            <Link
              href="/favorites"
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-green-800 transition hover:bg-green-50"
            >
              {nav("favorites")}
            </Link>

            <Link
              href="/about"
              onClick={() => setOpen(false)}
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
