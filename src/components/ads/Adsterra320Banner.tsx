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

export default function Adsterra320Banner() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    window.atOptions = {
      key: "22d6bcc7c8c017adc68fc499244e2e10",
      format: "iframe",
      height: 50,
      width: 320,
      params: {},
    };

    const script = document.createElement("script");
    script.src =
      "https://bauval.org/22/22d6bcc7c8c017adc68fc499244e2e10";
    script.async = true;

    containerRef.current.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="my-10 flex w-full justify-center overflow-hidden">
      <div
        ref={containerRef}
        className="h-[50px] w-[320px] max-w-full"
      />
    </div>
  );
}
