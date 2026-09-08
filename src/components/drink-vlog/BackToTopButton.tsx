"use client";

export default function BackToTopButton({
  label,
}: {
  label: string;
}) {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center justify-center rounded-full bg-[#183b3f] px-7 py-3.5 text-sm font-black uppercase tracking-[0.12em] text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#102d30] hover:shadow-md"
    >
      ↑ {label}
    </button>
  );
}
