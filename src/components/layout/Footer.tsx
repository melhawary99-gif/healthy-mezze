import Link from "next/link";
import Newsletter from "@/components/Newsletter";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/recipes", label: "Recipes" },
  { href: "/categories", label: "Categories" },
  { href: "/favorites", label: "Favorites" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-green-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10">
        <div className="mb-10">
          <Newsletter variant="footer" />
        </div>

        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr] lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="text-2xl font-semibold text-gray-900">Healthy Mezze</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-gray-600">
              Fresh Mediterranean recipes made simple, healthy, and delicious.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
                Navigation
              </p>
              <ul className="mt-5 space-y-3 text-sm text-gray-600">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition hover:text-emerald-700"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-green-100 pt-6 text-sm text-gray-500">
          © 2026 Healthy Mezze. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
