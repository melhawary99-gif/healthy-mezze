"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface CookingModeProps {
  title: string;
  ingredients: { name: string; amount?: string | number; unit?: string; note?: string }[];
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
  ingredients,
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
  const mainRef = useRef<HTMLElement | null>(null);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const shouldListenRef = useRef(false);
  const currentStepRef = useRef(0);
  const speechRateRef = useRef(1);
  const speechStoppedRef = useRef(false);

  const isArabic = locale === "ar";

  useEffect(() => {
    currentStepRef.current = currentStep;
  }, [currentStep]);

  useEffect(() => {
    speechRateRef.current = speechRate;
  }, [speechRate]);

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

    setVoiceSupported(Boolean(window.SpeechRecognition || window.webkitSpeechRecognition));

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
    setCurrentStep((step) => Math.min(step + 1, instructions.length - 1));
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
        ? ["female", "zira", "sahar", "laila", "hoda", "maged", "google arabic"]
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

  const speechIdRef = useRef(0);

  /*
   * Speech and microphone are deliberately independent.
   *
   * SpeechRecognition keeps listening while SpeechSynthesis is speaking.
   * Every speech utterance receives an ID so an old utterance can never
   * restart itself after the user interrupts it.
   */

  const stopSpeaking = useCallback(() => {
    speechStoppedRef.current = true;
    speechIdRef.current += 1;

    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      window.speechSynthesis.pause();
      window.speechSynthesis.cancel();
    }
  }, []);

  const speak = useCallback(
    (text: string, rate = speechRateRef.current) => {
      if (
        typeof window === "undefined" ||
        !("speechSynthesis" in window) ||
        speechStoppedRef.current ||
        !text
      ) {
        return;
      }

      const speechId = ++speechIdRef.current;

      window.speechSynthesis.cancel();
      window.speechSynthesis.resume();

      const utterance = new SpeechSynthesisUtterance(text);

      utterance.lang = isArabic ? "ar-SA" : "en-US";
      utterance.rate = rate;
      utterance.pitch = isArabic ? 1.08 : 1.12;

      const availableVoices = window.speechSynthesis.getVoices();
      const voice = selectBestVoice(availableVoices);

      if (voice) {
        utterance.voice = voice;
      }

      const isCancelled = () => speechStoppedRef.current || speechId !== speechIdRef.current;

      utterance.onstart = () => {
        if (isCancelled()) {
          window.speechSynthesis.cancel();
        }
      };

      utterance.onresume = () => {
        if (isCancelled()) {
          window.speechSynthesis.cancel();
        }
      };

      utterance.onboundary = () => {
        if (isCancelled()) {
          window.speechSynthesis.cancel();
        }
      };

      window.speechSynthesis.speak(utterance);
    },
    [isArabic, selectBestVoice]
  );

  const speakCurrentStep = useCallback(() => {
    const step = currentStepRef.current;

    if (speechStoppedRef.current) return;

    speak(instructions[step], speechRateRef.current);
  }, [instructions, speak]);

  const moveToStep = useCallback(
    (targetStep: number) => {
      const target = Math.max(0, Math.min(targetStep, instructions.length - 1));

      currentStepRef.current = target;
      speechStoppedRef.current = true;
      speechIdRef.current += 1;

      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }

      setCurrentStep(target);
    },
    [instructions.length]
  );

  useEffect(() => {
    if (!isOpen) return;

    speechStoppedRef.current = true;
    speechIdRef.current += 1;

    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }

    return () => {
      speechIdRef.current += 1;

      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isOpen]);
  const handleVoiceCommand = useCallback(
    (rawCommand: string) => {
      const command = rawCommand
        .toLowerCase()
        .trim()
        .replace(/[!?.,]/g, "")
        .replace(/\s+/g, " ");

      if (!command) return;

      const arabic = /[\u0600-\u06FF]/.test(command);
      const step = currentStepRef.current;

      if (command === "scroll down" || command === "scroll lower" || command === "go down") {
        mainRef.current?.scrollBy({ top: mainRef.current.clientHeight * 0.7, behavior: "smooth" });
        setVoiceMessage("Scrolling down");
        return;
      }

      if (command === "scroll up" || command === "scroll higher" || command === "go up") {
        mainRef.current?.scrollBy({
          top: -(mainRef.current.clientHeight * 0.7),
          behavior: "smooth",
        });
        setVoiceMessage("Scrolling up");
        return;
      }

      /*
       * READ
       *
       * Start reading the current step without changing the step.
       */
      if (
        command === "read" ||
        command === "read step" ||
        command === "start reading" ||
        command === "read this" ||
        /^(اقرأ|اقرأ الخطوة|ابدأ القراءة|اقرأ هذه)$/.test(command)
      ) {
        speechStoppedRef.current = false;
        speechIdRef.current += 1;

        if (typeof window !== "undefined" && "speechSynthesis" in window) {
          window.speechSynthesis.cancel();
        }

        speak(instructions[step], speechRateRef.current);

        setVoiceMessage(arabic ? "أقرأ الخطوة الحالية" : "Reading current step");

        return;
      }

      /*
       * STOP
       *
       * Stop speech only.
       * The microphone remains active so the user can immediately say
       * another command.
       */
      if (
        command === "stop" ||
        command === "pause" ||
        command === "stop reading" ||
        command === "stop speaking" ||
        command === "stop talking" ||
        command === "be quiet" ||
        command === "quiet" ||
        /^(أوقف|توقف|اسكت|كفى|توقف عن القراءة|أوقف القراءة|أوقف الصوت)$/.test(command)
      ) {
        stopSpeaking();

        setVoiceMessage(arabic ? "تم إيقاف القراءة" : "Reading stopped");

        return;
      }

      /*
       * FINISH
       */
      if (
        command === "finish" ||
        command === "done" ||
        command === "close" ||
        command === "exit" ||
        command === "finish cooking" ||
        command === "close cooking" ||
        /^(إنهاء|انهاء|اغلق|أغلق|إغلاق|خروج|انتهيت)$/.test(command)
      ) {
        shouldListenRef.current = false;

        if (recognitionRef.current) {
          recognitionRef.current.stop();
          recognitionRef.current = null;
        }

        stopSpeaking();
        setIsListening(false);
        setIsOpen(false);

        return;
      }

      /*
       * REPEAT
       */
      if (
        command === "repeat" ||
        command === "again" ||
        command === "repeat step" ||
        command === "say that again" ||
        /^(كرر|أعد|مرة أخرى|اعد)$/.test(command)
      ) {
        speechStoppedRef.current = false;
        speechIdRef.current += 1;

        if (typeof window !== "undefined" && "speechSynthesis" in window) {
          window.speechSynthesis.cancel();
        }

        speak(instructions[step], speechRateRef.current);

        setVoiceMessage(arabic ? "أعيد الخطوة الحالية" : "Repeating current step");

        return;
      }

      /*
       * WHAT'S NEXT?
       *
       * Reads the next step without changing the current step.
       */
      if (
        command === "what's next" ||
        command === "what is next" ||
        command === "tell me what's next" ||
        command === "tell me what is next" ||
        command === "what comes next" ||
        /^(ما الخطوة التالية|ما هي الخطوة التالية|ماذا بعد)$/.test(command)
      ) {
        const next = Math.min(step + 1, instructions.length - 1);

        speechStoppedRef.current = false;
        speechIdRef.current += 1;

        if (typeof window !== "undefined" && "speechSynthesis" in window) {
          window.speechSynthesis.cancel();
        }

        speak(instructions[next], speechRateRef.current);

        setVoiceMessage(arabic ? `الخطوة التالية هي ${next + 1}` : `The next step is ${next + 1}`);

        return;
      }

      /*
       * READ SLOWER
       */
      if (
        command === "read slower" ||
        command === "slower" ||
        command === "speak slower" ||
        command === "talk slower" ||
        /^(اقرأ ببطء|ببطء|تحدث ببطء)$/.test(command)
      ) {
        speechStoppedRef.current = false;
        speechIdRef.current += 1;

        if (typeof window !== "undefined" && "speechSynthesis" in window) {
          window.speechSynthesis.cancel();
        }

        const newRate = Math.max(0.55, speechRateRef.current - 0.15);

        speechRateRef.current = newRate;
        setSpeechRate(newRate);

        speak(instructions[step], newRate);

        setVoiceMessage(arabic ? "سأقرأ ببطء أكثر" : "Reading slower");

        return;
      }

      /*
       * READ FASTER
       */
      if (
        command === "read faster" ||
        command === "faster" ||
        command === "speak faster" ||
        command === "talk faster" ||
        /^(اقرأ بسرعة|بسرعة|تحدث بسرعة)$/.test(command)
      ) {
        speechStoppedRef.current = false;
        speechIdRef.current += 1;

        if (typeof window !== "undefined" && "speechSynthesis" in window) {
          window.speechSynthesis.cancel();
        }

        const newRate = Math.min(1.5, speechRateRef.current + 0.15);

        speechRateRef.current = newRate;
        setSpeechRate(newRate);

        speak(instructions[step], newRate);

        setVoiceMessage(arabic ? "سأقرأ بسرعة أكبر" : "Reading faster");

        return;
      }

      /*
       * GO TO STEP N
       */
      const spokenNumbers: Record<string, number> = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        ten: 10,
        eleven: 11,
        twelve: 12,
        thirteen: 13,
        fourteen: 14,
        fifteen: 15,
        sixteen: 16,
        seventeen: 17,
        eighteen: 18,
        nineteen: 19,
        twenty: 20,
      };

      const normalizedCommand = command.replace(
        /\b(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty)\b/g,
        (word) => String(spokenNumbers[word])
      );

      const englishStepMatch = normalizedCommand.match(
        /(?:go to|jump to|move to|take me to)\s+(?:step|slide)\s+(\d+)/
      );

      const arabicStepMatch = normalizedCommand.match(
        /(?:اذهب إلى|اذهب للخطوة|انتقل إلى|انتقل للخطوة)\s*(?:الخطوة\s*)?(\d+)/
      );

      const stepMatch = englishStepMatch || arabicStepMatch;

      if (stepMatch) {
        const requestedNumber = Number(stepMatch[1]);

        if (
          Number.isInteger(requestedNumber) &&
          requestedNumber >= 1 &&
          requestedNumber <= instructions.length
        ) {
          currentStepRef.current = requestedNumber - 1;
          setCurrentStep(requestedNumber - 1);

          setVoiceMessage(
            arabic ? `الانتقال إلى الخطوة ${requestedNumber}` : `Going to step ${requestedNumber}`
          );
        } else {
          setVoiceMessage(
            arabic ? `لا توجد خطوة رقم ${requestedNumber}` : `There is no step ${requestedNumber}`
          );
        }

        return;
      }

      /*
       * NEXT
       *
       * Includes "next slide" because users naturally think of the
       * full-screen recipe steps as slides.
       */
      if (
        command === "next" ||
        command === "next step" ||
        command === "next slide" ||
        command === "go next" ||
        command === "move next" ||
        command === "continue" ||
        command === "continue to the next step" ||
        command === "go to the next step" ||
        command === "move to the next step" ||
        command === "take me to the next step" ||
        /^(التالي|الخطوة التالية|انتقل للخطوة التالية|اذهب للخطوة التالية)$/.test(command)
      ) {
        if (step < instructions.length - 1) {
          moveToStep(step + 1);

          setVoiceMessage(arabic ? `الخطوة ${step + 2}` : `Step ${step + 2}`);
        } else {
          setVoiceMessage(arabic ? "هذه آخر خطوة" : "This is the last step");
        }

        return;
      }

      /*
       * BACK / PREVIOUS
       */
      if (
        command === "back" ||
        command === "previous" ||
        command === "previous step" ||
        command === "previous slide" ||
        command === "go back" ||
        command === "go to the previous step" ||
        command === "move to the previous step" ||
        /^(السابق|الخطوة السابقة|ارجع|ارجع للخطوة السابقة)$/.test(command)
      ) {
        if (step > 0) {
          moveToStep(step - 1);

          setVoiceMessage(arabic ? `الخطوة ${step}` : `Step ${step}`);
        } else {
          setVoiceMessage(arabic ? "هذه أول خطوة" : "This is the first step");
        }

        return;
      }

      setVoiceMessage(arabic ? "لم أفهم الأمر" : "I didn't understand that command");
    },
    [instructions, isArabic, moveToStep, speak, stopSpeaking]
  );

  const startVoiceControl = useCallback(() => {
    if (typeof window === "undefined") return;

    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!Recognition) {
      setVoiceSupported(false);
      setVoiceMessage(labels.unsupported);
      return;
    }

    shouldListenRef.current = true;
    setIsListening(true);
    setVoiceMessage("");

    let restartTimer: number | null = null;

    const listen = () => {
      if (!shouldListenRef.current) return;

      const recognition = new Recognition();

      recognition.lang = isArabic ? "ar-SA" : "en-US";
      recognition.continuous = false;
      recognition.interimResults = false;

      let receivedResult = false;

      recognition.onresult = (event) => {
        const lastResult = event.results[event.results.length - 1];

        if (!lastResult || !lastResult[0]) return;

        const transcript = lastResult[0].transcript.trim();

        if (!transcript) return;

        receivedResult = true;
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
        }
      };

      recognition.onend = () => {
        if (recognitionRef.current === recognition) {
          recognitionRef.current = null;
        }

        if (!shouldListenRef.current) {
          setIsListening(false);
          return;
        }

        if (restartTimer !== null) {
          window.clearTimeout(restartTimer);
        }

        restartTimer = window.setTimeout(
          () => {
            restartTimer = null;

            if (shouldListenRef.current) {
              listen();
            }
          },
          receivedResult ? 350 : 600
        );
      };

      recognitionRef.current = recognition;

      try {
        recognition.start();
      } catch {
        recognitionRef.current = null;

        if (shouldListenRef.current) {
          restartTimer = window.setTimeout(() => {
            restartTimer = null;

            if (shouldListenRef.current) {
              listen();
            }
          }, 600);
        }
      }
    };

    listen();
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
        className="mt-6 flex w-full items-center justify-center rounded-2xl bg-emerald-600 px-6 py-4 text-base font-bold text-white shadow-lg transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 sm:text-lg"
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
          <p className="text-sm font-semibold text-emerald-600">{labels.open}</p>

          <h2 className="truncate text-lg font-bold text-gray-900">{title}</h2>
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

      <main ref={mainRef} className="min-h-0 flex-1 overflow-y-auto px-6 py-8 sm:px-10">
        <div className="mx-auto grid w-full max-w-[1400px] items-start gap-6 lg:grid-cols-[260px_minmax(0,1fr)_260px]">
          <section className="order-2 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:order-1 lg:col-start-1">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-xl">
                🎙️
              </span>

              <div>
                <h3 className="font-semibold text-gray-900">
                  {isArabic ? "الأوامر الصوتية" : "Voice Commands"}
                </h3>

                <p className="text-xs text-gray-500">
                  {isArabic ? "تحدث بشكل طبيعي أثناء الطبخ" : "Speak naturally while you cook"}
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-xl bg-gray-50 p-4">
                <h4 className="mb-3 text-xs font-bold uppercase tracking-wide text-gray-500">
                  English
                </h4>

                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <strong>“Next”</strong> — next step
                  </li>
                  <li>
                    <strong>“Back”</strong> — previous step
                  </li>
                  <li>
                    <strong>“Repeat”</strong> — repeat current step
                  </li>
                  <li>
                    <strong>“What’s next?”</strong> — hear the next step
                  </li>
                  <li>
                    <strong>“Go to step 4”</strong> — jump to a step
                  </li>
                  <li>
                    <strong>“Read slower”</strong> — slow speech
                  </li>
                  <li>
                    <strong>“Read faster”</strong> — speed up speech
                  </li>
                  <li>
                    <strong>“Stop reading”</strong> — stop speech
                  </li>
                  <li>
                    <strong>“Finish”</strong> — close cooking mode
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-gray-50 p-4 text-right">
                <h4 className="mb-3 text-xs font-bold uppercase tracking-wide text-gray-500">
                  العربية
                </h4>

                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <strong>“التالي”</strong> — الخطوة التالية
                  </li>
                  <li>
                    <strong>“السابق”</strong> — الخطوة السابقة
                  </li>
                  <li>
                    <strong>“كرر”</strong> — إعادة الخطوة الحالية
                  </li>
                  <li>
                    <strong>“ما الخطوة التالية؟”</strong> — سماع الخطوة التالية
                  </li>
                  <li>
                    <strong>“اذهب إلى الخطوة 4”</strong> — الانتقال إلى خطوة
                  </li>
                  <li>
                    <strong>“اقرأ ببطء”</strong> — إبطاء الصوت
                  </li>
                  <li>
                    <strong>“اقرأ بسرعة”</strong> — تسريع الصوت
                  </li>
                  <li>
                    <strong>“أوقف القراءة”</strong> — إيقاف الصوت
                  </li>
                  <li>
                    <strong>“إنهاء”</strong> — إغلاق وضع الطبخ
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="order-1 min-w-0 lg:order-2 lg:col-start-2">
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
                    onClick={isListening ? stopVoiceControl : startVoiceControl}
                    className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition ${
                      isListening ? "bg-red-600 hover:bg-red-700" : "bg-gray-900 hover:bg-gray-800"
                    }`}
                  >
                    {isListening ? "🎙️" : "🎤"} {isListening ? labels.stopVoice : labels.startVoice}
                  </button>

                  <p className="mt-3 min-h-5 text-sm text-gray-600" aria-live="polite">
                    {isListening ? labels.listening : voiceMessage}
                  </p>
                </>
              ) : (
                <p className="text-sm text-gray-500">{labels.unsupported}</p>
              )}
            </div>

            <section className="mt-6 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="mb-4 text-lg font-bold text-gray-900">
                {isArabic ? "المكونات" : "Ingredients"}
              </h3>

              <ul className="space-y-3">
                {ingredients.map((ingredient, index) => (
                  <li
                    key={`${ingredient}-${index}`}
                    className="flex items-start gap-3 rounded-xl bg-gray-50 p-3 text-sm text-gray-700"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
                      {index + 1}
                    </span>
                    <span className="leading-relaxed">
                      {ingredient.amount ? `${ingredient.amount} ` : ""}
                      {ingredient.unit ? `${ingredient.unit} ` : ""}
                      {ingredient.name}
                      {ingredient.note ? ` — ${ingredient.note}` : ""}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

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
          </section>

          <aside className="order-3 rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5 lg:col-start-3">
            <h3 className="mb-3 font-semibold text-gray-900">
              {isArabic ? "طريقة الاستخدام" : "Hands-Free Tips"}
            </h3>

            <ul className={`space-y-3 text-sm text-gray-600 ${isArabic ? "text-right" : ""}`}>
              <li>
                🎙️ {isArabic ? "اضغط على الميكروفون ثم تحدث." : "Tap the microphone, then speak."}
              </li>

              <li>
                🔊{" "}
                {isArabic
                  ? "قل «اقرأ» لسماع الخطوة الحالية."
                  : 'Say "Read" to hear the current step.'}
              </li>

              <li>
                👆{" "}
                {isArabic
                  ? "يمكنك دائماً استخدام أزرار اللمس."
                  : "Touch controls are always available."}
              </li>

              <li>
                💡{" "}
                {isArabic
                  ? "يمكنك قول رقم الخطوة للانتقال إليها مباشرة."
                  : "Say a step number to jump directly to it."}
              </li>

              <li>
                ↕️{" "}
                {isArabic
                  ? "قل «مرر لأسفل» أو «مرر لأعلى» للتنقل في الشاشة بدون لمسها."
                  : 'Say "scroll down" or "scroll up" to move through the screen without touching it.'}
              </li>
            </ul>
          </aside>
        </div>
      </main>
    </div>
  );
}
