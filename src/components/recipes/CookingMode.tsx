"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface CookingModeProps {
  title: string;
  instructions: string[];
  locale: "en" | "ar";
}

interface SpeechRecognitionEventLike extends Event {
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionErrorEventLike extends Event {
  error: string;
}

interface SpeechRecognitionLike {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  start: () => void;
  stop: () => void;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEventLike) => void) | null;
  onend: (() => void) | null;
}

type SpeechRecognitionConstructor = new () => SpeechRecognitionLike;

declare global {
  interface Window {
    SpeechRecognition?: SpeechRecognitionConstructor;
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
  }
}

export default function CookingMode({
  title,
  instructions,
  locale,
}: CookingModeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [wakeLock, setWakeLock] = useState<WakeLockSentinel | null>(null);
  const [isListening, setIsListening] = useState(false);
  const [voiceSupported, setVoiceSupported] = useState(false);
  const [voiceMessage, setVoiceMessage] = useState("");
  const [speechRate, setSpeechRate] = useState(1);
  const [speechVoices, setSpeechVoices] = useState<SpeechSynthesisVoice[]>([]);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const shouldListenRef = useRef(false);

  const isArabic = locale === "ar";

  const labels = useMemo(
    () =>
      isArabic
        ? {
            open: "وضع الطبخ بدون استخدام اليدين",
            close: "إغلاق وضع الطبخ",
            step: "الخطوة",
            of: "من",
            previous: "السابق",
            next: "التالي",
            finish: "إنهاء",
            listening: "جاري الاستماع...",
            startVoice: "تشغيل التحكم الصوتي",
            stopVoice: "إيقاف التحكم الصوتي",
            unsupported: "التحكم الصوتي غير متاح في هذا المتصفح",
            stopped: "تم إيقاف القراءة",
          }
        : {
            open: "Hands-Free Cooking Mode",
            close: "Close Cooking Mode",
            step: "Step",
            of: "of",
            previous: "Previous",
            next: "Next",
            finish: "Finish",
            listening: "Listening...",
            startVoice: "Start Voice Control",
            stopVoice: "Stop Voice Control",
            unsupported: "Voice control is not available in this browser",
            stopped: "Reading stopped",
          },
    [isArabic]
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    setVoiceSupported(
      Boolean(window.SpeechRecognition || window.webkitSpeechRecognition)
    );

    if (!("speechSynthesis" in window)) return;

    const loadVoices = () => {
      setSpeechVoices(window.speechSynthesis.getVoices());
    };

    loadVoices();
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);

    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      shouldListenRef.current = false;

      if (recognitionRef.current) {
        recognitionRef.current.stop();
        recognitionRef.current = null;
      }

      setIsListening(false);
      setVoiceMessage("");

      return;
    }
  }, [isOpen]);

  const goNext = useCallback(() => {
    setCurrentStep((step) =>
      Math.min(step + 1, instructions.length - 1)
    );
  }, [instructions.length]);

  const goPrevious = useCallback(() => {
    setCurrentStep((step) => Math.max(step - 1, 0));
  }, []);

  const selectBestVoice = useCallback(
    (voices: SpeechSynthesisVoice[]) => {
      const languagePrefix = isArabic ? "ar" : "en";

      const languageVoices = voices.filter((voice) =>
        voice.lang.toLowerCase().startsWith(languagePrefix)
      );

      if (!languageVoices.length) return undefined;

      const preferredNames = isArabic
        ? [
            "female",
            "zira",
            "sahar",
            "laila",
            "hoda",
            "maged",
            "google arabic",
          ]
        : [
            "female",
            "samantha",
            "aria",
            "jenny",
            "sara",
            "zira",
            "google us english",
            "google uk english",
          ];

      const scored = languageVoices.map((voice) => {
        const name = voice.name.toLowerCase();
        let score = 0;

        if (voice.default) score += 10;
        if (voice.localService) score += 3;

        preferredNames.forEach((preferredName, index) => {
          if (name.includes(preferredName)) {
            score += 30 - index;
          }
        });

        if (name.includes("male")) score -= 20;
        if (name.includes("compact")) score -= 2;

        return { voice, score };
      });

      scored.sort((a, b) => b.score - a.score);

      return scored[0]?.voice;
    },
    [isArabic]
  );

  const speak = useCallback(
    (text: string, rate = speechRate) => {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) {
        return;
      }

      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = isArabic ? "ar-SA" : "en-US";
      utterance.rate = rate;
      utterance.pitch = isArabic ? 1.08 : 1.12;

      const voice = selectBestVoice(speechVoices);

      if (voice) {
        utterance.voice = voice;
      }

      window.speechSynthesis.speak(utterance);
    },
    [isArabic, selectBestVoice, speechRate, speechVoices]
  );

  const speakCurrentStep = useCallback(() => {
    speak(instructions[currentStep]);
  }, [currentStep, instructions, speak]);

  useEffect(() => {
    if (!isOpen) return;

    speakCurrentStep();

    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isOpen, currentStep, speakCurrentStep]);

  const handleVoiceCommand = useCallback(
    (rawCommand: string) => {
      const command = rawCommand.toLowerCase().trim();

      const isArabicCommand =
        /التالي|الخطوة التالية|اذهب للخطوة|اذهب إلى الخطوة|السابق|ارجع|كرر|أعد|اقرأ ببطء|ما الخطوة التالية|اغلق|إغلاق/.test(
          command
        );

      if (
        command.includes("close cooking mode") ||
        command.includes("close") ||
        command.includes("exit") ||
        command.includes("finish") ||
        /اغلق|إغلاق|إنهاء/.test(command)
      ) {
        setIsOpen(false);
        return;
      }

      if (
        command.includes("read slower") ||
        command.includes("slower") ||
        /اقرأ ببطء|ببطء/.test(command)
      ) {
        const newRate = Math.max(speechRate - 0.15, 0.55);
        setSpeechRate(newRate);
        speak(instructions[currentStep], newRate);
        return;
      }

      if (
        command.includes("read faster") ||
        command.includes("faster") ||
        /اقرأ أسرع|بسرعة|أسرع/.test(command)
      ) {
        const newRate = Math.min(speechRate + 0.15, 1.5);
        setSpeechRate(newRate);
        speak(instructions[currentStep], newRate);
        return;
      }

      if (
        command.includes("stop reading") ||
        command.includes("stop speaking") ||
        command === "stop" ||
        /أوقف القراءة|توقف عن القراءة|أوقف الكلام|توقف/.test(command)
      ) {
        if (typeof window !== "undefined" && "speechSynthesis" in window) {
          window.speechSynthesis.cancel();
        }

        setVoiceMessage(labels.stopped);
        return;
      }

      if (
        command.includes("repeat") ||
        command.includes("again") ||
        /كرر|أعد/.test(command)
      ) {
        speak(instructions[currentStep]);
        return;
      }

      if (
        command.includes("what's next") ||
        command.includes("what is next") ||
        command.includes("next step") ||
        /ما الخطوة التالية|الخطوة التالية/.test(command)
      ) {
        const nextStep = Math.min(
          currentStep + 1,
          instructions.length - 1
        );

        speak(instructions[nextStep]);

        if (nextStep !== currentStep) {
          setCurrentStep(nextStep);
        }

        return;
      }

      const englishStepMatch = command.match(
        /(?:go to step|step)\s*(\d+)/
      );

      const arabicStepMatch = command.match(
        /(?:اذهب للخطوة|اذهب إلى الخطوة)\s*(\d+)/
      );

      const stepMatch = englishStepMatch || arabicStepMatch;

      if (stepMatch) {
        const requestedStep = Number(stepMatch[1]) - 1;

        if (
          Number.isInteger(requestedStep) &&
          requestedStep >= 0 &&
          requestedStep < instructions.length
        ) {
          setCurrentStep(requestedStep);
          speak(instructions[requestedStep]);
        }

        return;
      }

      if (
        command === "next" ||
        command.includes("next step") ||
        command.includes("go next") ||
        /التالي|الخطوة التالية/.test(command)
      ) {
        const nextStep = Math.min(
          currentStep + 1,
          instructions.length - 1
        );

        setCurrentStep(nextStep);
        speak(instructions[nextStep]);
        return;
      }

      if (
        command === "back" ||
        command === "previous" ||
        command.includes("go back") ||
        command.includes("previous step") ||
        /السابق|ارجع|الخطوة السابقة/.test(command)
      ) {
        const previousStep = Math.max(currentStep - 1, 0);

        setCurrentStep(previousStep);
        speak(instructions[previousStep]);
        return;
      }

      if (isArabicCommand) {
        setVoiceMessage("لم أفهم الأمر");
      } else {
        setVoiceMessage("I didn't understand that command");
      }
    },
    [currentStep, instructions, isArabic, labels.stopped, speak, speechRate]
  );

  const startVoiceControl = useCallback(() => {
    if (typeof window === "undefined") return;

    const Recognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!Recognition) {
      setVoiceSupported(false);
      setVoiceMessage(labels.unsupported);
      return;
    }

    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }

    const recognition = new Recognition();

    recognition.lang = isArabic ? "ar-SA" : "en-US";
    recognition.continuous = true;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const lastResult = event.results[event.results.length - 1];

      if (!lastResult || !lastResult[0]) return;

      const transcript = lastResult[0].transcript;

      setVoiceMessage(transcript);
      handleVoiceCommand(transcript);
    };

    recognition.onerror = (event) => {
      if (event.error === "not-allowed" || event.error === "service-not-allowed") {
        shouldListenRef.current = false;
        setIsListening(false);
        setVoiceMessage(
          isArabic
            ? "يرجى السماح للمتصفح باستخدام الميكروفون."
            : "Please allow microphone access."
        );
        return;
      }

      if (event.error !== "aborted") {
        setVoiceMessage(
          isArabic
            ? "حدث خطأ في التعرف على الصوت."
            : "Voice recognition encountered an error."
        );
      }
    };

    recognition.onend = () => {
      if (shouldListenRef.current) {
        try {
          recognition.start();
        } catch {
          // Browser may reject an immediate restart.
        }
      } else {
        setIsListening(false);
      }
    };

    recognitionRef.current = recognition;
    shouldListenRef.current = true;
    setVoiceMessage("");
    setIsListening(true);

    try {
      recognition.start();
    } catch {
      shouldListenRef.current = false;
      setIsListening(false);
    }
  }, [handleVoiceCommand, isArabic, labels.unsupported]);

  const stopVoiceControl = useCallback(() => {
    shouldListenRef.current = false;

    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }

    setIsListening(false);
    setVoiceMessage("");
  }, []);

  useEffect(() => {
    return () => {
      shouldListenRef.current = false;

      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }

      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      if (wakeLock) {
        wakeLock.release().catch(() => {});
        setWakeLock(null);
      }
      return;
    }

    let cancelled = false;

    const requestWakeLock = async () => {
      try {
        if ("wakeLock" in navigator) {
          const lock = await navigator.wakeLock.request("screen");

          if (!cancelled) {
            setWakeLock(lock);
          } else {
            await lock.release();
          }
        }
      } catch {
        // Wake Lock is optional.
      }
    };

    requestWakeLock();

    return () => {
      cancelled = true;
    };
  }, [isOpen]);

  useEffect(() => {
    const handleVisibilityChange = async () => {
      if (
        document.visibilityState === "visible" &&
        isOpen &&
        !wakeLock &&
        "wakeLock" in navigator
      ) {
        try {
          const lock = await navigator.wakeLock.request("screen");
          setWakeLock(lock);
        } catch {
          // Wake Lock is optional.
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isOpen, wakeLock]);

  const openMode = () => {
    setCurrentStep(0);
    setIsOpen(true);
  };

  const closeMode = () => {
    setIsOpen(false);
    setCurrentStep(0);
  };

  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={openMode}
        className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      >
        🎙️ {labels.open}
      </button>
    );
  }

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === instructions.length - 1;

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className="fixed inset-0 z-[100] flex min-h-screen flex-col bg-white"
      role="dialog"
      aria-modal="true"
      aria-label={labels.open}
    >
      <header className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-emerald-600">
            {labels.open}
          </p>

          <h2 className="truncate text-lg font-bold text-gray-900">
            {title}
          </h2>
        </div>

        <button
          type="button"
          onClick={closeMode}
          aria-label={labels.close}
          className="ml-4 rounded-full px-4 py-2 text-sm font-semibold text-gray-600 transition hover:bg-gray-100"
        >
          ✕
        </button>
      </header>

      <main className="flex flex-1 flex-col justify-center px-6 py-10 sm:px-10">
        <div className="mx-auto w-full max-w-3xl">
          <div className="mb-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
              {labels.step} {currentStep + 1} {labels.of} {instructions.length}
            </p>
          </div>

          <div className="rounded-3xl border border-emerald-100 bg-emerald-50/50 p-7 shadow-sm sm:p-10">
            <p className="text-center text-2xl font-medium leading-relaxed text-gray-900 sm:text-3xl">
              {instructions[currentStep]}
            </p>
          </div>

          <div className="mt-8 rounded-3xl border border-gray-200 bg-gray-50 p-5 text-center">
            {voiceSupported ? (
              <>
                <button
                  type="button"
                  onClick={
                    isListening ? stopVoiceControl : startVoiceControl
                  }
                  className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition ${
                    isListening
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-gray-900 hover:bg-gray-800"
                  }`}
                >
                  {isListening ? "🎙️" : "🎤"}{" "}
                  {isListening ? labels.stopVoice : labels.startVoice}
                </button>

                <p
                  className="mt-3 min-h-5 text-sm text-gray-600"
                  aria-live="polite"
                >
                  {isListening ? labels.listening : voiceMessage}
                </p>
              </>
            ) : (
              <p className="text-sm text-gray-500">
                {labels.unsupported}
              </p>
            )}
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={goPrevious}
              disabled={isFirstStep}
              className="rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              ← {labels.previous}
            </button>

            {isLastStep ? (
              <button
                type="button"
                onClick={closeMode}
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                {labels.finish}
              </button>
            ) : (
              <button
                type="button"
                onClick={goNext}
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                {labels.next} →
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
