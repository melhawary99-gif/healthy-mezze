"use client";

import { useEffect, useRef } from "react";
import { loadAdsterraIframe } from "./loadAdsterraIframe";

export default function Adsterra300x250Banner() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    loadAdsterraIframe(container, {
      key: "35e078ad77d5b65ab1e6a63a564dc7c8",
      width: 300,
      height: 250,
    }).catch(() => {});

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div className="my-10 flex w-full justify-center overflow-hidden">
      <div
        ref={containerRef}
        className="h-[250px] w-[300px] max-w-full"
      />
    </div>
  );
}
