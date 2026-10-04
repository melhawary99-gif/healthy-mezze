"use client";

import { useEffect, useRef } from "react";
import { loadAdsterraIframe } from "./loadAdsterraIframe";

export default function Adsterra160x600Banner() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    loadAdsterraIframe(container, {
      key: "b309330bc1f14b288a2348b2300ae338",
      width: 160,
      height: 600,
    }).catch(() => {});

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div className="my-10 flex w-full justify-center overflow-hidden">
      <div
        ref={containerRef}
        className="h-[600px] w-[160px] max-w-full"
      />
    </div>
  );
}
