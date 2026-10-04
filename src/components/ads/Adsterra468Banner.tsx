"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    atOptions?: {
      key: string;
      format: string;
      height: number;
      width: number;
      params: Record<string, unknown>;
    };
  }
}

export default function Adsterra468Banner() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    window.atOptions = {
      key: "4dc55c216510d66699f14dfccfbe85e7",
      format: "iframe",
      height: 60,
      width: 468,
      params: {},
    };

    const script = document.createElement("script");
    script.src =
      "https://bauval.org/22/4dc55c216510d66699f14dfccfbe85e7";
    script.async = true;

    containerRef.current.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="my-16 flex w-full justify-center overflow-hidden">
      <div
        ref={containerRef}
        className="h-[60px] w-[468px] max-w-full"
      />
    </div>
  );
}
