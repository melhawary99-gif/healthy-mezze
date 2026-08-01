"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { categories } from "@/data/categories";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import Container from "@/components/ui/Container";

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/cookies", label: "Cookie Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/editorial-policy", label: "Editorial Policy" },
];

const socialLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=61592169398824",
    label: "Facebook",
    icon: FaFacebookF,
  },
  {
    href: "https://www.instagram.com/healthymezze/",
    label: "Instagram",
    icon: FaInstagram,
  },
  {
    href: "https://ca.pinterest.com/healthymezze/",
    label: "Pinterest",
    icon: FaPinterestP,
  },
];

export default function Footer() {
  const t = useTranslations("Footer");
  const nav = useTranslations("Navigation");

  const navLinks = [
    { href: "/", label: nav("home") },
    { href: "/recipes", label: nav("recipes") },
    { href: "/categories", label: nav("categories") },
    { href: "/favorites", label: nav("favorites") },
    { href: "/about", label: nav("about") },
    { href: "/contact", label: nav("contact") },
    { href: "/faq", label: "FAQ" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <Container>
        <div className="grid gap-10 pb-12 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-2xl font-semibold text-gray-900">Healthy Mezze</p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-600">{t("description")}</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
              {t("explore")}
            </p>
            <ul className="mt-5 space-y-3 text-sm text-gray-600">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-green-700">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
              {t("categories")}
            </p>
            <ul className="mt-5 space-y-3 text-sm text-gray-600">
              {categories.slice(0, 6).map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/categories/${category.slug}`}
                    className="transition hover:text-green-700"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
              {t("stayInTouch")}
            </p>
            <p className="mt-5 text-sm leading-7 text-gray-600">{t("contactDescription")}</p>

            <div className="mt-5">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700 transition hover:bg-green-100"
              >
                {t("contactUs")}
              </Link>

              <p className="mt-3 text-sm text-gray-600">
                <a href="mailto:contact@healthymezze.com" className="hover:text-green-700">
                  contact@healthymezze.com
                </a>
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-200 bg-white text-gray-700 transition hover:border-green-300 hover:text-green-700"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 py-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
            {t("legal")}
          </p>

          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-600">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-green-700">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-100 pt-6 text-sm text-gray-500">
          © {currentYear} {t("copyright")}
        </div>
      </Container>
    </footer>
  );
}
