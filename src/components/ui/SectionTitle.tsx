type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}