"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="rounded-xl border border-green-700 px-5 py-3 font-semibold text-green-700 transition-all duration-300 hover:bg-green-700 hover:text-white hover:shadow-md"
      aria-label="Print recipe"
    >
      🖨 Print Recipe
    </button>
  );
}