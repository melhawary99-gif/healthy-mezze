"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Heart, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import MobileMenu from "@/components/MobileMenu";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Recipes", href: "/recipes" },
  { label: "Categories", href: "/categories" },
  { label: "Favorites", href: "/favorites" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const pathname = usePathname() || "/";
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 10);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-gray-200/70 bg-white/85 backdrop-blur-md transition-shadow duration-300 ${
        hasScrolled ? "shadow-lg shadow-gray-900/10" : "shadow-none"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-2xl font-bold text-green-700">
          Healthy Mezze
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
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

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Search"
            className="hidden h-11 w-11 items-center justify-center rounded-2xl bg-white text-gray-700 shadow-sm transition hover:bg-green-50 md:inline-flex"
          >
            <Search className="h-5 w-5" />
          </button>

          <Link
            href="/favorites"
            aria-label="Favorites"
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
