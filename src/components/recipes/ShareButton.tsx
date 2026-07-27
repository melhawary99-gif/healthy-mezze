"use client";

import { Share2 } from "lucide-react";
import { useState } from "react";

interface ShareButtonProps {
  title: string;
  description: string;
}

export default function ShareButton({
  title,
  description,
}: ShareButtonProps) {
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

Discover more healthy Mediterranean recipes:
https://healthymezze.com`;

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
    <div className="relative">
      <button
        type="button"
        onClick={handleShare}
        className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:bg-green-50 hover:text-green-700 hover:shadow-md"
        aria-label="Share this recipe"
      >
        <Share2 className="h-5 w-5" />
        Share Recipe
      </button>

      {copied && (
  <div className="absolute right-0 top-full z-20 mt-3 w-72 rounded-xl bg-green-600 px-4 py-3 text-sm text-white shadow-xl">
    <p className="font-semibold">
      ✅ Recipe copied!
    </p>

    <p className="mt-1 text-green-100">
      Ready to paste into WhatsApp, Messenger, Telegram or Email.
    </p>
  </div>
)}
    </div>
  );
}