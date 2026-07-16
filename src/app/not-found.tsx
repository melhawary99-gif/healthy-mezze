import Link from "next/link";
import Container from "@/components/ui/Container";

export default function NotFoundPage() {
  return (
    <main className="bg-white py-24">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="text-6xl">🥗</div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Oops! Page Not Found
          </h1>
          <p className="mt-4 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
            The page you're looking for doesn't exist or may have been moved.
          </p>

          <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/recipes"
              className="inline-flex w-full items-center justify-center rounded-full bg-green-600 px-8 py-3 text-base font-semibold text-white transition hover:bg-green-700 sm:w-auto"
            >
              Browse Recipes
            </Link>
            <Link
              href="/"
              className="inline-flex w-full items-center justify-center rounded-full border border-green-600 bg-white px-8 py-3 text-base font-semibold text-green-700 transition hover:bg-green-50 sm:w-auto"
            >
              Go Home
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
