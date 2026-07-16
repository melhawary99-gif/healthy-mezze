"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-green-200 bg-white text-green-700 transition hover:border-green-300 hover:bg-green-50"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div className="fixed inset-x-0 top-16 z-40 overflow-hidden rounded-b-3xl border-t border-green-100 bg-white shadow-xl transition duration-300 md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-green-800 transition hover:bg-green-50"
            >
              Home
            </Link>
            <Link
              href="/recipes"
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-green-800 transition hover:bg-green-50"
            >
              Recipes
            </Link>
            <Link
              href="/categories"
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-green-800 transition hover:bg-green-50"
            >
              Categories
            </Link>
            <Link
              href="/favorites"
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-green-800 transition hover:bg-green-50"
            >
              Favorites
            </Link>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-green-800 transition hover:bg-green-50"
            >
              About
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
