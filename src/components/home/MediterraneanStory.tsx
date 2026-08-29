"use client";

import {
  BookOpen,
  HeartPulse,
  Leaf,
  Users,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { useTranslations } from "next-intl";

const researchLinks = [
  {
    key: "predimed",
    href: "https://pubmed.ncbi.nlm.nih.gov/29897866/",
  },
  {
    key: "diabetes",
    href: "https://pubmed.ncbi.nlm.nih.gov/41241045/",
  },
  {
    key: "unesco",
    href: "https://ich.unesco.org/en/RL/mediterranean-diet-00884",
  },
];

export default function MediterraneanStory() {
  const t = useTranslations("MediterraneanStory");

  const benefits = [
    {
      key: "heart",
      icon: HeartPulse,
    },
    {
      key: "plant",
      icon: Leaf,
    },
    {
      key: "flavor",
      icon: Sparkles,
    },
    {
      key: "sharing",
      icon: Users,
    },
  ];

  return (
    <section
      aria-labelledby="mediterranean-story-title"
      className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-24 top-16 h-48 w-48 rounded-full bg-green-100/60 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-56 w-56 rounded-full bg-amber-100/60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-green-900/15 bg-gradient-to-br from-[#fbfaf3] via-white to-[#f5f7ed] shadow-[0_24px_70px_rgba(44,62,40,0.10)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-3 rounded-[1.65rem] border border-green-900/10"
          />

          <div className="relative px-6 pb-8 pt-10 text-center sm:px-10 sm:pt-14 lg:px-20">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-800/15 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-green-800 shadow-sm">
              <Leaf className="h-4 w-4" aria-hidden="true" />
              {t("badge")}
            </div>

            <h2
              id="mediterranean-story-title"
              className="mx-auto max-w-4xl font-serif text-3xl font-bold leading-tight tracking-tight text-green-950 sm:text-4xl lg:text-5xl"
            >
              {t("title")}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              {t("subtitle")}
            </p>

            <div className="mx-auto mt-7 h-px max-w-xs bg-gradient-to-r from-transparent via-green-800/30 to-transparent" />
          </div>

          <article className="relative px-6 pb-10 sm:px-10 lg:px-20">
            <div className="mx-auto max-w-4xl space-y-7 text-[15px] leading-8 text-gray-700 sm:text-base">
              <p className="text-lg leading-8 text-gray-800 sm:text-xl sm:leading-9">
                {t("story.intro")}
              </p>

              <p>{t("story.paragraph1")}</p>

              <p>{t("story.paragraph2")}</p>

              <p>{t("story.paragraph3")}</p>

              <div className="rounded-3xl border border-green-900/10 bg-white/75 p-6 shadow-sm sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-green-800">
                    <BookOpen className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-green-950">
                      {t("what.title")}
                    </h3>

                    <p className="mt-3 leading-7 text-gray-700">
                      {t("what.text")}
                    </p>
                  </div>
                </div>
              </div>

              <p>
                {t("story.question")}
              </p>

              <blockquote className="border-l-4 border-green-700 pl-5 font-serif text-xl italic leading-8 text-green-900 sm:text-2xl">
                {t("story.question")}
              </blockquote>

              <h3 className="pt-4 text-2xl font-bold text-green-950 sm:text-3xl">
                {t("story.scienceTitle")}
              </h3>

              <p>{t("story.science1")}</p>
              <p>{t("story.science2")}</p>
              <p>{t("story.science3")}</p>

              <h3 className="pt-4 text-2xl font-bold text-green-950 sm:text-3xl">
                {t("benefits.sectionTitle")}
              </h3>
            </div>

            <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.key}
                    className="rounded-3xl border border-green-900/10 bg-white/80 p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-green-100 text-green-800">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>

                    <h4 className="text-lg font-bold text-green-950">
                      {t(`benefits.${benefit.key}.title`)}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {t(`benefits.${benefit.key}.text`)}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mx-auto mt-10 max-w-4xl space-y-7 text-[15px] leading-8 text-gray-700 sm:text-base">
              <h3 className="pt-2 text-2xl font-bold text-green-950 sm:text-3xl">
                {t("story.metabolicTitle")}
              </h3>

              <p>{t("story.metabolic1")}</p>
              <p>{t("story.metabolic2")}</p>

              <h3 className="pt-2 text-2xl font-bold text-green-950 sm:text-3xl">
                {t("story.colorTitle")}
              </h3>

              <p>{t("story.color1")}</p>
              <p>{t("story.color2")}</p>

              <h3 className="pt-2 text-2xl font-bold text-green-950 sm:text-3xl">
                {t("story.togetherTitle")}
              </h3>

              <p>{t("story.together1")}</p>
              <p>{t("story.together2")}</p>
              <p>{t("story.together3")}</p>
              <p>{t("story.together4")}</p>

              <h3 className="pt-2 text-2xl font-bold text-green-950 sm:text-3xl">
                {t("story.lessonTitle")}
              </h3>

              <p>{t("story.lesson1")}</p>
              <p>{t("story.lesson2")}</p>
              <p>{t("story.lesson3")}</p>

              <div className="rounded-3xl border border-amber-900/10 bg-amber-50/70 p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-green-950">
                  {t("story.researchTitle")}
                </h3>

                <p className="mt-4 leading-8 text-gray-700">
                  {t("story.research1")}
                </p>

                <p className="mt-4 leading-8 text-gray-700">
                  {t("story.research2")}
                </p>
              </div>

              <div className="rounded-3xl bg-green-900 px-6 py-8 text-white shadow-lg sm:px-8">
                <h3 className="text-2xl font-bold sm:text-3xl">
                  {t("story.healthyTitle")}
                </h3>

                <p className="mt-4 leading-8 text-green-50">
                  {t("story.healthy1")}
                </p>

                <p className="mt-4 leading-8 text-green-50">
                  {t("story.healthy2")}
                </p>

                <p className="mt-4 font-serif text-lg italic leading-8 text-white">
                  {t("story.healthyQuote")}
                </p>
              </div>

              <div className="pt-4">
                <div className="mb-5">
                  <h3 className="text-2xl font-bold text-green-950 sm:text-3xl">
                    {t("story.sourcesTitle")}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {t("story.sourcesIntro")}
                  </p>
                </div>

                <div className="space-y-4">
                  {researchLinks.map((research) => (
                    <a
                      key={research.key}
                      href={research.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block rounded-2xl border border-green-900/10 bg-white/80 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-green-800/20 hover:bg-white hover:shadow-md"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="font-bold text-green-900 group-hover:text-green-700">
                            {t(`research.${research.key}.title`)}
                          </h4>

                          <p className="mt-2 text-sm leading-6 text-gray-600">
                            {t(`research.${research.key}.description`)}
                          </p>

                          <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-green-700">
                            {t(`research.${research.key}.source`)}
                            <ExternalLink
                              className="h-3.5 w-3.5"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <p className="border-t border-green-900/10 pt-6 text-xs leading-6 text-gray-500">
                {t("story.healthNote")}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
