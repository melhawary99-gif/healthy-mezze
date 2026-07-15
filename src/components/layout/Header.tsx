import Link from "next/link";
import { Heart, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-2xl font-bold text-green-700"
        >
          Healthy Mezze
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/">Home</Link>
          <Link href="/recipes">Recipes</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/favorites">Favorites</Link>
          <Link href="/about">About</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Search className="h-5 w-5 cursor-pointer" />
          <Heart className="h-5 w-5 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}