"use client";

import Image from "next/image";
import { useState } from "react";

interface VideoPlayerProps {
  image: string;
  isArabic: boolean;
}

export default function VideoPlayer({
  image,
  isArabic,
}: VideoPlayerProps) {
  const [videoStarted, setVideoStarted] = useState(false);

  return (
    <div className="mb-5 overflow-hidden rounded-[1.5rem] bg-white p-2 shadow-sm">
      <div className="relative aspect-video overflow-hidden rounded-[1.15rem] bg-[#183b3f]">
        {videoStarted ? (
          <iframe
            src="https://www.youtube-nocookie.com/embed/ARaeeUyUfs8?autoplay=1&playsinline=1&rel=0"
            title={
              isArabic
                ? "فيديو لاتيه الماتشا بالفراولة والثلج"
                : "Strawberry Ice Matcha Latte video"
            }
            className="absolute inset-0 h-full w-full border-0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setVideoStarted(true)}
            className="group absolute inset-0 h-full w-full"
            aria-label={
              isArabic
                ? "تشغيل فيديو لاتيه الماتشا بالفراولة والثلج"
                : "Play Strawberry Ice Matcha Latte video"
            }
          >
            <Image
              src={image}
              alt={
                isArabic
                  ? "لاتيه الماتشا بالفراولة والثلج"
                  : "Strawberry Ice Matcha Latte"
              }
              fill
              sizes="(max-width: 1024px) 100vw, 32vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-[#183b3f]/30 transition duration-300 group-hover:bg-[#183b3f]/40" />

            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#ff7043] text-2xl text-white shadow-2xl transition duration-300 group-hover:scale-110 group-hover:bg-[#ffd166] group-hover:text-[#183b3f]">
              ▶
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
