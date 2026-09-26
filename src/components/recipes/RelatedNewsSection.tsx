import { Link } from "@/i18n/navigation";

type RelatedNewsSectionProps = {
  articles: Array<{
    slug: string;
    category: string;
    title: string;
    excerpt: string;
  }>;
};

export default function RelatedNewsSection({
  articles,
}: RelatedNewsSectionProps) {
  if (articles.length === 0) return null;

  return (
    <section className="border-t border-gray-200 pt-10">
      <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
        Related from Healthy Mezze
      </h2>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {articles.map((article) => (
          <Link
            key={`${article.category}-${article.slug}`}
            href={`/news/${article.category}/${article.slug}`}
            className="rounded-2xl border border-gray-200 bg-white p-5 transition hover:border-green-300 hover:shadow-md"
          >
            <h3 className="font-bold text-gray-900">{article.title}</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              {article.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
