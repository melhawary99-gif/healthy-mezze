"use client";

import { useEffect, useRef } from "react";
import { loadAdsterraIframe } from "./loadAdsterraIframe";

export default function Adsterra728Banner() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let cancelled = false;
    let script: HTMLScriptElement | undefined;

    loadAdsterraIframe(containerRef.current, {
      key: "5684b38298b5158c9e243d04765ddf24",
      width: 728,
      height: 90,
    })
      .then((loadedScript) => {
        if (cancelled) {
          loadedScript.remove();
        } else {
          script = loadedScript;
        }
      })
      .catch(() => {});

    return () => {
      cancelled = true;
      script?.remove();
    };
  }, []);

  return (
    <div className="my-10 flex w-full justify-center overflow-hidden">
      <div
        ref={containerRef}
        className="h-[90px] w-[728px] max-w-full"
      />
    </div>
  );
}
