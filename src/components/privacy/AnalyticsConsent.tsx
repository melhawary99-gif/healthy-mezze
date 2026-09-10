"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { STORAGE_KEY } from "./CookieConsent";

export default function AnalyticsConsent() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const readConsent = () => {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);

        if (!raw) {
          setAllowed(false);
          return;
        }

        const consent = JSON.parse(raw) as {
          analytics?: boolean;
        };

        setAllowed(consent.analytics === true);
      } catch {
        setAllowed(false);
      }
    };

    readConsent();

    const handleConsentChange = (event: Event) => {
      const customEvent = event as CustomEvent<{ analytics?: boolean }>;
      setAllowed(customEvent.detail?.analytics === true);
    };

    window.addEventListener(
      "healthymezze:consent-changed",
      handleConsentChange
    );

    return () => {
      window.removeEventListener(
        "healthymezze:consent-changed",
        handleConsentChange
      );
    };
  }, []);

  if (!allowed || !process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
    return null;
  }

  return <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />;
}
