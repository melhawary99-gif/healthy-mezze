import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import { SITE_URL, getLanguageAlternates } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: "en" | "ar"; slug: string }>;
};

const guides: Record<string, {
  en: { title: string; intro: string; sections: { title: string; body: string }[] };
  ar: { title: string; intro: string; sections: { title: string; body: string }[] };
}> = {
  "egyptian-cuisine-guide": {
    en: {
      title: "Egyptian Cuisine Guide",
      intro: "Egyptian cooking is shaped by the Nile, agricultural traditions, grains, legumes, vegetables, aromatic spices, and a strong culture of shared meals. It is a cuisine where inexpensive ingredients can become deeply satisfying food.",
      sections: [
        {
          title: "The foundation of Egyptian cooking",
          body: "Beans, lentils, rice, wheat, vegetables, herbs, garlic, onions, cumin, coriander, lemon, and olive or other cooking oils appear across many everyday dishes. Ful medames is one of the best examples: humble fava beans are transformed with garlic, cumin, lemon, vegetables, and oil into a filling breakfast or meal.",
        },
        {
          title: "Egyptian food is more than koshari",
          body: "Koshari is famous internationally, but Egyptian food is much broader. Breakfasts, vegetable dishes, soups, grilled foods, breads, pickles, desserts, and drinks all contribute to the food culture. Recipes often balance legumes or grains with vegetables, herbs, acidity, and spices.",
        },
        {
          title: "A practical healthy approach",
          body: "Healthy Egyptian cooking does not require removing the character from traditional dishes. Useful changes can include increasing vegetables and legumes, using sensible amounts of oil, choosing whole-food ingredients, balancing starches with protein and vegetables, and keeping sauces and fried toppings portion-aware.",
        },
        {
          title: "Recipes to explore",
          body: "Start with ful medames, Egyptian koshari, molokhia-inspired dishes, lentil soups, vegetable recipes, and traditional Egyptian drinks. Use each recipe as a starting point for learning how Egyptian ingredients work together.",
        },
      ],
    },
    ar: {
      title: "دليل المطبخ المصري",
      intro: "يتشكل المطبخ المصري بتأثير النيل والزراعة والحبوب والبقوليات والخضروات والتوابل العطرية وثقافة مشاركة الطعام. وهو مطبخ يستطيع تحويل المكونات البسيطة إلى أطباق مشبعة وغنية بالنكهة.",
      sections: [
        {
          title: "أساسيات الطبخ المصري",
          body: "تظهر الفول والعدس والأرز والقمح والخضروات والأعشاب والثوم والبصل والكمون والكزبرة والليمون والزيوت في الكثير من الأطباق اليومية. ويُعد الفول المدمس مثالاً واضحاً على ذلك، حيث تتحول حبوب الفول البسيطة إلى وجبة مشبعة مع الثوم والكمون والليمون والخضروات والزيت.",
        },
        {
          title: "المطبخ المصري أكبر من الكشري",
          body: "الكشري معروف عالمياً، لكن المطبخ المصري أوسع بكثير. هناك أطباق الفطور والخضروات والشوربات والمشاوي والخبز والمخللات والحلويات والمشروبات. وغالباً ما تجمع الوصفات بين الحبوب أو البقوليات والخضروات والأعشاب والحموضة والتوابل.",
        },
        {
          title: "كيف نجعل الطبخ المصري أكثر توازناً",
          body: "لا يحتاج الطبخ المصري الصحي إلى فقدان شخصيته. يمكن زيادة الخضروات والبقوليات، واستخدام الزيت بكمية مناسبة، والاعتماد على مكونات كاملة، وموازنة النشويات مع البروتين والخضروات، والانتباه إلى كميات الصلصات والإضافات المقلية.",
        },
        {
          title: "وصفات تستحق التجربة",
          body: "ابدأ بالفول المدمس والكشري المصري وشوربات العدس وأطباق الخضروات والمشروبات المصرية التقليدية، واستخدم كل وصفة كفرصة لفهم طريقة اجتماع المكونات والنكهات المصرية.",
        },
      ],
    },
  },

  "lebanese-cuisine-guide": {
    en: {
      title: "Lebanese Cuisine Guide",
      intro: "Lebanese cuisine is built around freshness, herbs, grains, legumes, vegetables, olive oil, lemon, garlic, sesame, and a tradition of sharing many dishes around one table.",
      sections: [
        {
          title: "Freshness is central",
          body: "Parsley, mint, tomatoes, cucumber, lemon, garlic, olive oil, and seasonal vegetables appear repeatedly. These ingredients provide brightness and contrast, which is one reason Lebanese food can feel generous without depending on heavy sauces.",
        },
        {
          title: "The role of mezze",
          body: "Mezze is a style of eating as much as a collection of dishes. Hummus, baba ghanoush, tabbouleh, fattoush, labneh, pickles, vegetables, bread, and other small plates can be served together so diners can build different combinations throughout the meal.",
        },
        {
          title: "Staples worth knowing",
          body: "Tahini, bulgur, chickpeas, lentils, parsley, mint, sumac, za'atar, pomegranate molasses, garlic, lemon, and olive oil form a useful Lebanese pantry. Learning these ingredients makes many recipes easier to understand and adapt.",
        },
        {
          title: "Healthy without losing character",
          body: "A balanced Lebanese table can naturally include vegetables, legumes, herbs, whole grains, fermented dairy, and healthy fats. The goal is not to turn traditional dishes into diet food, but to preserve their flavor while building a varied meal.",
        },
      ],
    },
    ar: {
      title: "دليل المطبخ اللبناني",
      intro: "يقوم المطبخ اللبناني على الطزاجة والأعشاب والحبوب والبقوليات والخضروات وزيت الزيتون والليمون والثوم والسمسم، وعلى تقليد مشاركة العديد من الأطباق حول مائدة واحدة.",
      sections: [
        {
          title: "الطزاجة عنصر أساسي",
          body: "يتكرر استخدام البقدونس والنعناع والطماطم والخيار والليمون والثوم وزيت الزيتون والخضروات الموسمية. تمنح هذه المكونات الطعام حيوية وتوازناً من دون الاعتماد دائماً على الصلصات الثقيلة.",
        },
        {
          title: "دور المازة",
          body: "المازة ليست مجرد مجموعة أطباق صغيرة، بل أسلوب في تناول الطعام. يمكن تقديم الحمص والمتبل والتبولة والفتوش واللبنة والمخللات والخضروات والخبز معاً، ليصنع كل شخص تركيبته الخاصة أثناء الوجبة.",
        },
        {
          title: "مكونات أساسية تستحق المعرفة",
          body: "الطحينة والبرغل والحمص والعدس والبقدونس والنعناع والسماق والزعتر ودبس الرمان والثوم والليمون وزيت الزيتون تشكل أساساً مهماً في المطبخ اللبناني. معرفة هذه المكونات تجعل فهم الوصفات وتعديلها أسهل.",
        },
        {
          title: "الطبخ الصحي من دون فقدان الهوية",
          body: "يمكن لمائدة لبنانية متوازنة أن تجمع الخضروات والبقوليات والأعشاب والحبوب الكاملة ومنتجات الألبان والدهون الصحية. الهدف ليس تحويل الأطباق التقليدية إلى طعام حمية، بل الحفاظ على نكهتها ضمن وجبة متنوعة.",
        },
      ],
    },
  },

  "egyptian-breakfast-guide": {
    en: {
      title: "Egyptian Breakfast Guide",
      intro: "Egyptian breakfast is often hearty, affordable, and built around foods that provide lasting satisfaction. Ful medames sits at the center of the tradition, joined by bread, vegetables, eggs, cheese, pickles, and fresh herbs.",
      sections: [
        {
          title: "Ful is a breakfast staple",
          body: "Slow-cooked fava beans can be seasoned simply with cumin, garlic, lemon, and oil, then finished with fresh vegetables and herbs. The dish is flexible enough to serve as breakfast, lunch, or part of a larger table.",
        },
        {
          title: "Build a balanced breakfast",
          body: "A practical breakfast can combine legumes or eggs with vegetables, whole-grain or higher-fiber bread when available, fresh herbs, and a modest amount of healthy fat. The goal is variety rather than one perfect plate.",
        },
        {
          title: "Why the table matters",
          body: "Breakfast is often social and shared. Bread, beans, vegetables, cheese, eggs, and condiments can sit in the middle of the table, allowing everyone to assemble bites according to preference.",
        },
      ],
    },
    ar: {
      title: "دليل الفطور المصري",
      intro: "يتميز الفطور المصري بأنه مشبع وبسيط ومبني على أطعمة تمنح شعوراً جيداً بالشبع. ويأتي الفول المدمس في قلب هذا التقليد إلى جانب الخبز والخضروات والبيض والجبن والمخللات والأعشاب.",
      sections: [
        {
          title: "الفول من أساسيات الفطور",
          body: "يمكن تتبيل الفول المطهو ببطء بالكمون والثوم والليمون والزيت، ثم إضافة الخضروات والأعشاب الطازجة. ويمكن تقديمه للفطور أو الغداء أو ضمن مائدة أكبر.",
        },
        {
          title: "كيف تبني فطوراً متوازناً",
          body: "يمكن الجمع بين البقوليات أو البيض والخضروات والخبز الأعلى في الألياف عند توفره والأعشاب الطازجة وكمية مناسبة من الدهون الصحية. التنوع أهم من البحث عن طبق مثالي واحد.",
        },
        {
          title: "أهمية المائدة",
          body: "غالباً ما يكون الفطور اجتماعياً ومشتركاً. يوضع الخبز والفول والخضروات والجبن والبيض والمرافِقات في منتصف المائدة، ويستطيع كل شخص تكوين لقيماته حسب ذوقه.",
        },
      ],
    },
  },

  "lebanese-mezze-guide": {
    en: {
      title: "Lebanese Mezze Guide",
      intro: "Lebanese mezze is a shared-table tradition built around variety. The table may include creamy dips, fresh salads, vegetables, grains, pickles, bread, and grilled foods, allowing many flavors and textures to appear in one meal.",
      sections: [
        {
          title: "Think in combinations, not isolated dishes",
          body: "A mezze table works because dishes complement one another. A creamy dip can sit beside an acidic salad; fresh herbs balance richer foods; bread connects dips and vegetables; grilled foods add warmth and protein.",
        },
        {
          title: "A simple balanced table",
          body: "Start with two or three vegetable-forward dishes, add a legume-based dip, include a grain or bread, then add a protein if desired. Fresh herbs, lemon, pickles, and olives can provide contrast.",
        },
        {
          title: "Portion variety is part of the experience",
          body: "Because many dishes are shared, diners can taste small portions of several foods. This makes mezze naturally suited to variety and social eating rather than one oversized main plate.",
        },
      ],
    },
    ar: {
      title: "دليل المازة اللبنانية",
      intro: "المازة اللبنانية تقليد قائم على مائدة مشتركة وتنوع كبير. قد تضم المائدة المقبلات الكريمية والسلطات والخضروات والحبوب والمخللات والخبز والمشاوي، لتجمع نكهات وقوامات مختلفة في وجبة واحدة.",
      sections: [
        {
          title: "فكر في تناغم الأطباق",
          body: "تنجح مائدة المازة لأن الأطباق تكمل بعضها. يمكن لمقبل كريمي أن يأتي بجانب سلطة حامضة، وتوازن الأعشاب الطازجة الأطعمة الأغنى، بينما يربط الخبز بين المقبلات والخضروات وتضيف المشاوي الدفء والبروتين.",
        },
        {
          title: "مائدة متوازنة ببساطة",
          body: "ابدأ بطبقين أو ثلاثة من الخضروات، ثم أضف مقبلاً يعتمد على البقوليات وخبزاً أو حبوباً، ويمكن إضافة مصدر بروتين حسب الرغبة. تمنح الأعشاب والليمون والمخللات والزيتون المائدة تبايناً واضحاً.",
        },
        {
          title: "التنوع جزء من التجربة",
          body: "لأن الأطباق مشتركة، يستطيع الجميع تذوق كميات صغيرة من أطعمة متعددة. وهذا يجعل المازة مناسبة للتنوع والأكل الاجتماعي بدلاً من الاعتماد على طبق رئيسي ضخم واحد.",
        },
      ],
    },
  },

  "mediterranean-ingredients-guide": {
    en: {
      title: "Mediterranean Ingredients Guide",
      intro: "Understanding a small group of ingredients unlocks a surprising number of Mediterranean recipes. Many are simple pantry staples, but each contributes a distinct role in flavor, texture, acidity, or richness.",
      sections: [
        {
          title: "Olive oil",
          body: "Olive oil contributes aroma, richness, and a familiar Mediterranean character. It works in dressings, marinades, dips, vegetables, grains, and finishing applications.",
        },
        {
          title: "Tahini",
          body: "Tahini is ground sesame paste with a nutty, savory flavor. It is central to dishes such as hummus and many sauces. Lemon and water can transform its thick texture into a smooth dressing.",
        },
        {
          title: "Sumac and za'atar",
          body: "Sumac provides a tart, lemon-like character, while za'atar combines herbs and spices into a fragrant seasoning. Both can add complexity without relying on heavy sauces.",
        },
        {
          title: "Legumes and grains",
          body: "Chickpeas, lentils, fava beans, bulgur, rice, and other grains provide substance to many Mediterranean meals. Combining them with vegetables, herbs, and acidity creates meals that are satisfying and varied.",
        },
      ],
    },
    ar: {
      title: "دليل مكونات المطبخ المتوسطي",
      intro: "فهم مجموعة صغيرة من المكونات يفتح الباب أمام عدد كبير من وصفات البحر المتوسط. كثير منها مكونات أساسية بسيطة، لكن لكل مكوّن دور واضح في النكهة والقوام والحموضة والغنى.",
      sections: [
        {
          title: "زيت الزيتون",
          body: "يضيف زيت الزيتون الرائحة والغنى والطابع المتوسطي المميز. ويستخدم في التتبيلات والصلصات والمقبلات والخضروات والحبوب وكلمسة نهائية.",
        },
        {
          title: "الطحينة",
          body: "الطحينة هي معجون السمسم المطحون بطعم غني ومميز. تدخل في الحمص والعديد من الصلصات. ويمكن أن يحولها الليمون والماء من معجون كثيف إلى صلصة ناعمة.",
        },
        {
          title: "السماق والزعتر",
          body: "يمنح السماق نكهة حامضة تشبه الليمون، بينما يجمع الزعتر الأعشاب والتوابل في خلطة عطرية. ويمكن لكليهما إضافة عمق للطبق دون الاعتماد على صلصات ثقيلة.",
        },
        {
          title: "البقوليات والحبوب",
          body: "الحمص والعدس والفول والبرغل والأرز وغيرها من الحبوب تشكل أساساً مهماً للعديد من الوجبات. وعند جمعها مع الخضروات والأعشاب والحموضة تصبح الوجبة أكثر تنوعاً وإشباعاً.",
        },
      ],
    },
  },

  "healthy-mezze-table-guide": {
    en: {
      title: "How to Build a Healthy Mezze Table",
      intro: "A good mezze table is about balance and variety rather than making every dish light. Combining vegetables, legumes, grains, fresh herbs, dips, bread, and protein creates a meal with different textures and flavors.",
      sections: [
        {
          title: "Start with vegetables",
          body: "Choose one fresh salad and one cooked or grilled vegetable dish. This gives the table color, freshness, fiber, and contrast.",
        },
        {
          title: "Add legumes",
          body: "Hummus, ful, lentil dishes, and other bean-based foods add substance and plant protein. They also work well with bread and vegetables.",
        },
        {
          title: "Use dips strategically",
          body: "Tahini-based sauces, yogurt dips, hummus, and vegetable spreads can bring richness. Several small portions usually create more variety than one very large serving.",
        },
        {
          title: "Finish with protein and fresh elements",
          body: "Add grilled chicken, fish, eggs, or another protein if desired. Finish the table with herbs, lemon, olives, pickles, and seasonal fruit or a simple dessert.",
        },
      ],
    },
    ar: {
      title: "كيف تبني مائدة مازة صحية",
      intro: "المائدة الجيدة لا تعني أن كل طبق يجب أن يكون خفيفاً، بل أن تكون الوجبة متنوعة ومتوازنة. جمع الخضروات والبقوليات والحبوب والأعشاب والمقبلات والخبز والبروتين يخلق وجبة غنية بالنكهات والقوامات.",
      sections: [
        {
          title: "ابدأ بالخضروات",
          body: "اختر سلطة طازجة وطبقاً من الخضروات المطهية أو المشوية. يمنح ذلك المائدة اللون والطزاجة والألياف والتباين.",
        },
        {
          title: "أضف البقوليات",
          body: "الحمص والفول وأطباق العدس والبقوليات الأخرى تضيف الشبع والبروتين النباتي، كما تنسجم جيداً مع الخبز والخضروات.",
        },
        {
          title: "استخدم المقبلات بتوازن",
          body: "يمكن لصلصات الطحينة ومقبلات اللبن والحمص ومهروس الخضروات أن تضيف الغنى. وتمنح الكميات الصغيرة المتعددة تنوعاً أكبر من طبق واحد ضخم.",
        },
        {
          title: "اختم بالبروتين والمكونات الطازجة",
          body: "يمكن إضافة الدجاج أو السمك أو البيض أو مصدر بروتين آخر حسب الرغبة، ثم إنهاء المائدة بالأعشاب والليمون والزيتون والمخللات وفاكهة موسمية أو حلو بسيط.",
        },
      ],
    },
  },
};

export async function generateStaticParams() {
  return Object.keys(guides).flatMap((slug) => [
    { slug, locale: "en" },
    { slug, locale: "ar" },
  ]);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const guide = guides[slug];

  if (!guide) return {};

  const content = locale === "ar" ? guide.ar : guide.en;

  return {
    title: `${content.title} | Healthy Mezze`,
    description: content.intro,
    alternates: {
      canonical: `${SITE_URL}/${locale}/guides/${slug}`,
      languages: getLanguageAlternates(`/guides/${slug}`),
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { locale, slug } = await params;
  const guide = guides[slug];

  if (!guide) notFound();

  const content = locale === "ar" ? guide.ar : guide.en;

  return (
    <main className="bg-[#FAFAF7] py-20">
      <Container>
        <article className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
            {locale === "ar" ? "دليل Healthy Mezze" : "Healthy Mezze Guide"}
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {content.title}
          </h1>

          <p className="mt-7 text-xl leading-9 text-gray-600">
            {content.intro}
          </p>

          <div className="mt-12 space-y-10">
            {content.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-bold text-gray-900">
                  {section.title}
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-700">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-14 rounded-3xl bg-emerald-50 p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {locale === "ar" ? "استكشف وصفاتنا" : "Explore the recipes"}
            </h2>
            <p className="mt-3 leading-7 text-gray-700">
              {locale === "ar"
                ? "حوّل ما تعلمته إلى وجبة حقيقية مع مجموعة وصفات Healthy Mezze."
                : "Turn what you learned into a real meal with the Healthy Mezze recipe collection."}
            </p>
            <a
              href={`/${locale}/recipes`}
              className="mt-5 inline-flex font-semibold text-emerald-700"
            >
              {locale === "ar" ? "تصفح الوصفات ←" : "Browse recipes →"}
            </a>
          </div>
        </article>
      </Container>
    </main>
  );
}
