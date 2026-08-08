"use client";

import { Share2 } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";

interface ShareButtonProps {
  title: string;
  description: string;
}

export default function ShareButton({ title, description }: ShareButtonProps) {
  const t = useTranslations("Buttons");

  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = window.location.href;

    const shareData = {
      title,
      text: `${title}\n\n${description}`,
      url,
    };

    const clipboardText = `🥗 ${title}

${description}

🔗 ${url}

${t("discoverMoreRecipes")}`;

    try {
      // Native sharing (mobile & supported desktop browsers)
      if (navigator.share && navigator.canShare?.(shareData)) {
        await navigator.share(shareData);
        return;
      }

      // Fallback: copy rich text
      await navigator.clipboard.writeText(clipboardText);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2500);
    } catch (err) {
      console.error("Share failed:", err);
    }
  }

  return (
    <div className="flex flex-col items-center">
      <button
        type="button"
        onClick={handleShare}
        aria-label={t("shareRecipe")}
        className="inline-flex items-center gap-2 rounded-xl border border-green-700 px-5 py-3 font-semibold text-green-700 transition-all duration-300 hover:bg-green-700 hover:text-white hover:shadow-md"
      >
        <Share2 className="h-5 w-5" />
        {t("shareRecipe")}
      </button>

      {copied && <p className="mt-1 text-sm text-green-700">{t("shareCopied")}</p>}

      {copied && <p className="mt-1 text-sm text-green-600">{t("shareInstructions")}</p>}
    </div>
  );
}
