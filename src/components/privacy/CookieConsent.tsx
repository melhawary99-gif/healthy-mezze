"use client";

import { useEffect, useState } from "react";

type Consent = {
  necessary: true;
  analytics: boolean;
};

const STORAGE_KEY = "healthymezze-cookie-consent";

function getLanguage() {
  if (typeof window === "undefined") return "en";
  return window.location.pathname.startsWith("/ar") ? "ar" : "en";
}

export default function CookieConsent() {
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [consent, setConsent] = useState<Consent | null>(null);
  const [mounted, setMounted] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    setLanguage(getLanguage());

    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (saved) {
        const parsed = JSON.parse(saved) as Consent;
        setConsent(parsed);
        setAnalyticsEnabled(Boolean(parsed.analytics));
      }
    } catch {
      // Ignore malformed consent data.
    }

    setMounted(true);

    const openSettings = () => {
      setShowPreferences(true);
    };

    window.addEventListener("healthymezze:open-cookie-settings", openSettings);

    return () => {
      window.removeEventListener(
        "healthymezze:open-cookie-settings",
        openSettings
      );
    };
  }, []);

  if (!mounted) return null;

  const isArabic = language === "ar";

  const saveConsent = (analytics: boolean) => {
    const value: Consent = {
      necessary: true,
      analytics,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    setConsent(value);
    setAnalyticsEnabled(analytics);
    setShowPreferences(false);

    window.dispatchEvent(
      new CustomEvent("healthymezze:consent-changed", {
        detail: value,
      })
    );
  };

  const openPreferences = () => {
    setShowPreferences(true);
  };

  return (
    <>
      {!consent && !showPreferences && (
        <div
          dir={isArabic ? "rtl" : "ltr"}
          role="dialog"
          aria-label={isArabic ? "إعدادات ملفات تعريف الارتباط" : "Cookie settings"}
          className="fixed inset-x-0 bottom-0 z-[100] border-t border-gray-200 bg-white/95 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] backdrop-blur-md"
        >
          <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className="text-2xl" aria-hidden="true">
                    🍪
                  </span>

                  <h2 className="text-base font-semibold text-gray-900">
                    {isArabic ? "نحن نحترم خصوصيتك" : "We respect your privacy"}
                  </h2>
                </div>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {isArabic
                    ? "نستخدم ملفات تعريف الارتباط والتقنيات المشابهة لتشغيل الموقع وتحسين تجربتك وفهم كيفية استخدام Healthy Mezze. يمكنك اختيار السماح بالتحليلات أو رفضها."
                    : "Healthy Mezze uses cookies and similar technologies to keep the site working, improve your experience, and understand how visitors use the site. You can allow analytics or reject non-essential tracking."}
                </p>

                <a
                  href={isArabic ? "/ar/privacy" : "/en/privacy"}
                  className="mt-2 inline-block text-sm font-medium text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                >
                  {isArabic ? "اقرأ سياسة الخصوصية" : "Read our Privacy Policy"}
                </a>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => saveConsent(true)}
                  className="rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-800"
                >
                  {isArabic ? "السماح بالكل" : "Accept All"}
                </button>

                <button
                  type="button"
                  onClick={() => saveConsent(false)}
                  className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-800 transition hover:bg-gray-50"
                >
                  {isArabic ? "رفض غير الضروري" : "Reject Non-Essential"}
                </button>

                <button
                  type="button"
                  onClick={openPreferences}
                  className="rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  {isArabic ? "إدارة التفضيلات" : "Manage Preferences"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showPreferences && (
        <div
          dir={isArabic ? "rtl" : "ltr"}
          role="dialog"
          aria-modal="true"
          aria-label={isArabic ? "تفضيلات الخصوصية" : "Privacy preferences"}
          className="fixed inset-0 z-[110] flex items-end justify-center bg-black/40 p-4 sm:items-center"
        >
          <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  {isArabic ? "تفضيلات الخصوصية" : "Privacy Preferences"}
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {isArabic
                    ? "اختر أنواع البيانات غير الضرورية التي تسمح بها."
                    : "Choose which non-essential data collection you allow."}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                aria-label={isArabic ? "إغلاق" : "Close"}
                className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-gray-200 p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {isArabic ? "ضرورية" : "Necessary"}
                    </h3>

                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      {isArabic
                        ? "مطلوبة لتشغيل الموقع والميزات الأساسية."
                        : "Required for the website and essential functionality."}
                    </p>
                  </div>

                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    {isArabic ? "دائمًا مفعلة" : "Always On"}
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {isArabic ? "التحليلات" : "Analytics"}
                    </h3>

                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      {isArabic
                        ? "تساعدنا على فهم استخدام الموقع وتحسينه."
                        : "Helps us understand site usage and improve Healthy Mezze."}
                    </p>
                  </div>

                  <button
                    type="button"
                    role="switch"
                    aria-checked={analyticsEnabled}
                    onClick={() => setAnalyticsEnabled((value) => !value)}
                    className={`relative h-7 w-12 rounded-full transition ${
                      analyticsEnabled ? "bg-emerald-700" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ${
                        analyticsEnabled
                          ? isArabic
                            ? "right-1"
                            : "left-6"
                          : isArabic
                            ? "right-6"
                            : "left-1"
                      }`}
                    />
                  </button>
                </div>
              </div>

              <p className="text-xs leading-5 text-gray-500">
                {isArabic
                  ? "قد تعرض Google رسائل موافقة إضافية في المناطق التي تتطلب ذلك قانونيًا."
                  : "Google may display additional consent messages in regions where legally required."}
              </p>
            </div>

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => saveConsent(false)}
                className="rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50"
              >
                {isArabic ? "رفض غير الضروري" : "Reject Non-Essential"}
              </button>

              <button
                type="button"
                onClick={() => saveConsent(analyticsEnabled)}
                className="rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800"
              >
                {isArabic ? "حفظ التفضيلات" : "Save Preferences"}
              </button>
            </div>
          </div>
        </div>
      )}

      {consent && !showPreferences && (
        <button
          type="button"
          onClick={openPreferences}
          className="fixed bottom-4 left-4 z-[90] rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-700 shadow-lg transition hover:bg-gray-50"
        >
          🍪 {isArabic ? "إعدادات الخصوصية" : "Cookie Settings"}
        </button>
      )}
    </>
  );
}

export { STORAGE_KEY };
