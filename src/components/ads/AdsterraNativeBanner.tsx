"use client";

import Script from "next/script";

export default function AdsterraNativeBanner() {
  return (
    <div className="my-10 w-full overflow-hidden">
      <Script
        async
        src="https://bauval.org/21/60cc88807d271f6f43ec045ba1bab714"
        data-cfasync="false"
        strategy="afterInteractive"
      />

      <div
        id="container-60cc88807d271f6f43ec045ba1bab714"
        className="w-full"
      />
    </div>
  );
}
