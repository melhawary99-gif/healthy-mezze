"use client";

type VideoPlayerProps = {
  videoId: string;
  title: string;
};

export default function VideoPlayer({
  videoId,
  title,
}: VideoPlayerProps) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Watch ${title} on YouTube`}
      className="group relative mx-auto block aspect-[9/16] w-full max-w-[280px] overflow-hidden rounded-[1.5rem] bg-black shadow-sm"
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
      />

      <div className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/40" />

      <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#183b3f] shadow-xl transition-transform duration-300 group-hover:scale-110">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="ml-1 h-8 w-8"
          aria-hidden="true"
        >
          <path d="M8 5.14v13.72a1 1 0 0 0 1.53.85l10.29-6.86a1 1 0 0 0 0-1.66L9.53 4.29A1 1 0 0 0 8 5.14Z" />
        </svg>
      </span>

      <span className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/95 px-5 py-2.5 text-sm font-semibold text-[#183b3f] shadow-lg">
        Watch on YouTube
      </span>
    </a>
  );
}
