import type { Metadata } from "next";
import Image from "next/image";
import VideoPlayer from "./VideoPlayer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDrinkVlogBySlug } from "@/data/drink-vlogs";

interface DrinkVlogRecipePageProps {
  params: Promise<{
    locale: "en" | "ar";
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: DrinkVlogRecipePageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const drink = getDrinkVlogBySlug(slug);

  if (!drink) {
    return {};
  }

  const isArabic = locale === "ar";

  return {
    title: `${isArabic ? "لاتيه الماتشا بالفراولة والثلج" : drink.title} | Healthy Mezze`,
    description: isArabic
      ? "تعرّف على طريقة تحضير لاتيه الماتشا بالفراولة والثلج الكريمي باستخدام شراب الفراولة والماتشا والحليب وشراب الفانيليا والثلج وكريمة الحليب."
      : "Learn how to make a creamy Strawberry Ice Matcha Latte with strawberry syrup, matcha, milk, vanilla syrup, ice, and milk cream.",
    openGraph: {
      title: `${isArabic ? "لاتيه الماتشا بالفراولة والثلج" : drink.title} | Healthy Mezze`,
      description: isArabic
        ? "لاتيه ماتشا مثلج وكريمي بطبقات من نكهة الفراولة والحليب والفانيليا والثلج والماتشا وكريمة الحليب."
        : "A creamy iced matcha latte layered with strawberry flavor, milk, vanilla, ice, matcha, and milk cream.",
      type: "article",
      images: [
        {
          url: drink.image,
          alt: isArabic ? "لاتيه الماتشا بالفراولة والثلج" : drink.title,
        },
      ],
    },
  };
}

export default async function DrinkVlogRecipePage({
  params,
}: DrinkVlogRecipePageProps) {
  const { locale, slug } = await params;
  const drink = getDrinkVlogBySlug(slug);

  if (!drink) {
    notFound();
  }

  const isArabic = locale === "ar";

  const ingredients = isArabic
    ? [
        "2 غرام من الماتشا",
        "شراب الفراولة",
        "22 مل من شراب السكر — استخدم جرعة كاملة واحدة إذا كنت تفضل المشروب أكثر حلاوة",
        "250 مل من الحليب",
        "22 مل من شراب الفانيليا (نصف جرعة)",
        "مكعبات الثلج",
        "كريمة الحليب",
      ]
    : [
        "2 gram of matcha",
        "Strawberry syrup",
        "22 ml sugar syrup — use 1 full shot if you prefer it sweeter",
        "250 ml milk",
        "22 ml vanilla syrup (half a shot)",
        "Ice cubes",
        "Milk cream",
      ];

  const equipment = isArabic
    ? [
        "كوب سعة 400 مل",
        "وعاء صغير لخلط الماتشا",
        "مصفاة صغيرة",
        "خلاط يدوي صغير",
      ]
    : [
        "400 ml cup",
        "Small bowl for blending matcha",
        "Small strainer",
        "Small hand blender",
      ];

  const steps = isArabic
    ? [
        "وزّع شراب الفراولة حول الجزء الداخلي من الكوب لتكوين طبقة ونقوش من شراب الفراولة على جوانب الكوب.",
        "أضف مكعبات الثلج حتى يمتلئ الكوب بحوالي ثلاثة أرباعه.",
        "أضف الحليب حتى يصل مستوى المشروب إلى حوالي 80% من الكوب.",
        "أضف 22 مل من شراب السكر. ويمكنك استخدام جرعة كاملة واحدة إذا كنت تفضل المشروب أكثر حلاوة.",
        "انخل 2 غرام من مسحوق الماتشا في وعاء صغير للتخلص من أي تكتلات.",
        "أضف 22 مل من شراب الفانيليا إلى الماتشا المنخول.",
        "أضف 0.04 مل من الماء الساخن، ثم اخلط الماتشا وشراب الفانيليا والماء الساخن بقوة باستخدام خلاط يدوي صغير حتى يصبح الخليط كريميًا أو رغويًا على السطح.",
        "اسكب خليط الماتشا ببطء داخل الكوب بحركة دائرية، بحيث يتوزع خليط الماتشا حول الحواف الداخلية للكوب.",
        "أضف كريمة الحليب إلى الأعلى وزيّن المشروب بشراب الفراولة.",
        "قدّم المشروب مع شفاطة رفيعة واستمتع به ببطء.",
      ]
    : [
        "Swirl strawberry syrup around the inside of the cup, creating a strawberry-coated pattern along the glass.",
        "Add ice cubes until the cup is about three-quarters full.",
        "Top with milk until the cup is approximately 80% full.",
        "Add 22 ml of sugar syrup. You can use 1 full shot if you prefer a sweeter drink.",
        "Strain 2 gram of matcha powder into a small bowl to remove any lumps.",
        "Add 22 ml of vanilla syrup to the strained matcha.",
        "Add 0.04 ml of hot water and blend the matcha, vanilla syrup, and hot water vigorously with a small hand blender until the mixture becomes creamy or foamy on the surface.",
        "Slowly pour the matcha mixture into the cup in a circular motion, allowing the matcha mixture to distribute around the inside edges of the cup.",
        "Top with milk cream and decorate with strawberry syrup.",
        "Serve with a thin straw and enjoy slowly.",
      ];

  const labels = isArabic
    ? {
        episode: "الحلقة",
        latest: "أحدث مشروب",
        ingredients: "المكونات",
        equipment: "الأدوات",
        method: "طريقة التحضير",
        howTo: "طريقة عمل المشروب",
        serving: "طريقة التقديم",
        servingTitle: "استمتع به ببطء",
        servingText:
          "قدّم لاتيه الماتشا بالفراولة والثلج مع شفاطة رفيعة للاستمتاع بالمشروب وطبقاته المنعشة لفترة أطول.",
        watch: "شاهد الفيديو",
        back: "العودة إلى مدونة المشروبات",
        recipeDetails: "تفاصيل المشروب",
        cup: "حجم الكوب",
        matcha: "الماتشا",
        milk: "الحليب",
        vanilla: "الفانيليا",
        faq: "الأسئلة الشائعة",
        sweet: "درجة الحلاوة",
        sweetAnswer:
          "تستخدم الوصفة 22 مل من شراب السكر، ويمكن استخدام جرعة كاملة واحدة إذا كنت تفضل المشروب أكثر حلاوة.",
        cupQuestion: "ما حجم الكوب المناسب؟",
        cupAnswer: "هذه الوصفة مصممة لكوب بسعة 400 مل.",
        makeQuestion: "كيف يتم تحضير لاتيه الماتشا بالفراولة والثلج؟",
        makeAnswer:
          "يُوزّع شراب الفراولة داخل كوب سعة 400 مل، ثم يُضاف الثلج حتى ثلاثة أرباع الكوب والحليب حتى حوالي 80% منه. أضف 22 مل من شراب السكر. في وعاء صغير، انخل 2 غرام من الماتشا واخلطها مع 22 مل من شراب الفانيليا و0.04 مل من الماء الساخن حتى تصبح كريمية أو رغوية. اسكب خليط الماتشا ببطء داخل الكوب، ثم أضف كريمة الحليب وزيّن بشراب الفراولة.",
      }
    : {
        episode: "EPISODE",
        latest: "LATEST POUR",
        ingredients: "Ingredients",
        equipment: "Equipment",
        method: "THE METHOD",
        howTo: "How to make it",
        serving: "SERVING TIP",
        servingTitle: "Take your time with it.",
        servingText:
          "Serve the finished Strawberry Ice Matcha Latte with a thin straw so you can enjoy the drink and its layers slowly.",
        watch: "WATCH THE VIDEO",
        back: "BACK TO DRINK VLOG",
        recipeDetails: "Recipe details",
        cup: "Cup",
        matcha: "Matcha",
        milk: "Milk",
        vanilla: "Vanilla",
        faq: "Frequently asked questions",
        sweet: "How sweet is it?",
        sweetAnswer:
          "The recipe uses 22 ml of sugar syrup, but you can use 1 full shot if you prefer a sweeter drink.",
        cupQuestion: "What size cup should I use?",
        cupAnswer: "This recipe is designed for a 400 ml cup.",
        makeQuestion: "How do you make Strawberry Ice Matcha Latte?",
        makeAnswer:
          "Swirl strawberry syrup inside a 400 ml cup, add ice to about three-quarters full, and top with milk to approximately 80% of the cup. Add 22 ml sugar syrup. Separately, strain 2 gram of matcha and blend it with 22 ml vanilla syrup and 0.04 ml hot water until creamy or foamy. Slowly pour the matcha mixture into the cup, then finish with milk cream and strawberry syrup."
      };

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="bg-[#f6f0e8] text-[#183b3f]"
    >
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#2d9caf] py-12 sm:py-16 lg:py-20">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[28px] border-[#ffd166]/40"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full border-[24px] border-[#ff7043]/35"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.25em] text-white">
                <span className="rounded-full bg-[#ffd166] px-4 py-2 text-[#183b3f]">
                  {labels.episode}{" "}
                  {String(drink.episode).padStart(2, "0")}
                </span>

                <span className="text-white/75">
                  {labels.latest}
                </span>
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-[0.92] tracking-[-0.045em] text-[#fff8ef] sm:text-6xl lg:text-7xl">
                {isArabic ? "لاتيه الماتشا بالفراولة والثلج" : drink.title}
              </h1>

              <div className="mt-7 h-1 w-20 bg-[#ff7043]" />

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
                {isArabic ? "لاتيه ماتشا مثلج وكريمي بطبقات من نكهة الفراولة الحلوة، والماتشا الغني، والكثير من الثلج لمشروب منعش يجمع بين الطعم والجمال." : drink.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={drink.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-[#ff7043] px-6 py-3.5 text-sm font-black uppercase tracking-[0.08em] text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#eb5e35]"
                >
                  {labels.watch}
                  <span aria-hidden="true">↗</span>
                </a>

                <Link
                  href={`/${locale}/drink-vlog`}
                  className="inline-flex items-center rounded-full border border-white/40 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-white/10"
                >
                  {labels.back}
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[620px]">
              <div
                className="absolute -right-4 -top-4 h-full w-full border border-[#183b3f]/60 sm:-right-6 sm:-top-6"
                aria-hidden="true"
              />

              <div className="relative aspect-[2/3] overflow-hidden rounded-[1.5rem] bg-[#f3e9dc]">
                <Image
                  src={drink.image}
                  alt={isArabic ? "لاتيه الماتشا بالفراولة والثلج" : drink.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 50vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECIPE CONTENT */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            {/* SIDEBAR */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#2d9caf]">
                {isArabic ? "ماتشا الفراولة" : "Strawberry Matcha"}
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.035em] sm:text-5xl">
                {labels.howTo}
              </h2>

              <div className="mt-6 h-1 w-16 bg-[#ff7043]" />

              <p className="mt-6 max-w-md text-base leading-8 text-[#49666a]">
                {isArabic ? "لاتيه ماتشا مثلج وكريمي بطبقات من نكهة الفراولة الحلوة، والماتشا الغني، والكثير من الثلج لمشروب منعش يجمع بين الطعم والجمال." : drink.description}
              </p>

              {/* YOUTUBE VIDEO */}
              <VideoPlayer
                videoId="ARaeeUyUfs8"
                title={isArabic ? "لاتيه الماتشا بالفراولة والثلج" : drink.title}
              />


            </aside>

            {/* MAIN CONTENT */}
            <div className="space-y-14">
              {/* INGREDIENTS */}
              <section>
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                  {labels.ingredients}
                </h2>

                <div className="mt-7 overflow-hidden rounded-[1.5rem] border border-[#183b3f]/10 bg-white">
                  {ingredients.map((ingredient, index) => (
                    <div
                      key={ingredient}
                      className={`flex gap-4 px-6 py-4 ${
                        index !== ingredients.length - 1
                          ? "border-b border-[#183b3f]/10"
                          : ""
                      }`}
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ffd166] text-xs font-black text-[#183b3f]">
                        {index + 1}
                      </span>

                      <span className="leading-7 text-[#49666a]">
                        {ingredient}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* EQUIPMENT */}
              <section>
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                  {labels.equipment}
                </h2>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {equipment.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[#183b3f]/10 bg-white px-5 py-4 text-sm font-semibold text-[#49666a]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              {/* METHOD */}
              <section>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#2d9caf]">
                  {labels.method}
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  {labels.howTo}
                </h2>

                <div className="mt-8 space-y-5">
                  {steps.map((step, index) => (
                    <div
                      key={step}
                      className="grid grid-cols-[48px_1fr] gap-4 rounded-[1.5rem] bg-white p-5 shadow-sm"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2d9caf] text-lg font-black text-white">
                        {index + 1}
                      </div>

                      <p className="pt-1 text-base leading-8 text-[#49666a]">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* SERVING */}
              <section className="rounded-[2rem] bg-[#183b3f] p-7 text-white sm:p-10">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#ffd166]">
                  {labels.serving}
                </p>

                <h2 className="mt-3 text-3xl font-black">
                  {labels.servingTitle}
                </h2>

                <p className="mt-5 max-w-2xl leading-8 text-white/75">
                  {labels.servingText}
                </p>
              </section>

              {/* MATCHA BENEFITS */}
              <section className="mt-16 rounded-[2rem] bg-[#183b3f] p-7 text-white sm:mt-20 sm:p-10 lg:p-12">
                <div className="max-w-3xl">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-[#ffd166]">
                    {isArabic ? "فوائد الماتشا" : "MATCHA BENEFITS"}
                  </p>

                  <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                    {isArabic
                      ? "لماذا الماتشا خيار رائع؟"
                      : "Why Matcha Is a Great Choice"}
                  </h2>

                  <p className="mt-5 leading-8 text-white/70">
                    {isArabic
                      ? "الماتشا هو شاي أخضر ياباني مطحون ناعماً، ولذلك يتم تناول مسحوق أوراق الشاي نفسها بدلاً من نقعها ثم التخلص منها. ويحتوي بشكل طبيعي على الكاتيكينات مثل EGCG، بالإضافة إلى L-theanine والكافيين."
                      : "Matcha is finely powdered Japanese green tea, so you consume the tea leaf itself rather than simply infusing and discarding the leaves. It naturally contains catechins such as EGCG, along with L-theanine and caffeine."}
                  </p>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      number: "01",
                      title: isArabic
                        ? "غني بمضادات الأكسدة"
                        : "Rich in antioxidants",
                      text: isArabic
                        ? "الماتشا غني بشكل طبيعي بالكاتيكينات والبوليفينولات التي تتمتع بنشاط مضاد للأكسدة. ويُعد EGCG من أكثر كاتيكينات الشاي الأخضر دراسة."
                        : "Matcha is naturally rich in catechins and other polyphenols with antioxidant activity. EGCG is one of the most studied catechins found in green tea.",
                    },
                    {
                      number: "02",
                      title: isArabic
                        ? "مصدر طبيعي للكافيين"
                        : "Natural source of caffeine",
                      text: isArabic
                        ? "يوفر الماتشا الكافيين بشكل طبيعي، مما يجعله خياراً مناسباً عندما ترغب في مشروب يحتوي على الكافيين بدلاً من القهوة."
                        : "Matcha naturally provides caffeine, making it a useful alternative to coffee when you want a naturally caffeinated drink.",
                    },
                    {
                      number: "03",
                      title: isArabic
                        ? "يحتوي على L-theanine"
                        : "Contains L-theanine",
                      text: isArabic
                        ? "يحتوي الماتشا على L-theanine، وهو حمض أميني موجود بشكل طبيعي في الشاي. وقد بحثت الدراسات في تأثيره مع الكافيين على الانتباه وبعض جوانب الأداء المعرفي."
                        : "Matcha contains L-theanine, an amino acid naturally found in tea. Research on L-theanine together with caffeine has explored potential effects on attention and some cognitive outcomes.",
                    },
                    {
                      number: "04",
                      title: isArabic
                        ? "شكل مركز من الشاي الأخضر"
                        : "A concentrated form of green tea",
                      text: isArabic
                        ? "لأن الماتشا يستخدم مسحوق أوراق الشاي نفسها، يمكن أن يوفر مصدراً مركزاً لمركبات الشاي مقارنة بالشاي الذي يتم نقعه ثم التخلص من أوراقه."
                        : "Because matcha uses powdered tea leaves rather than simply infusing and discarding them, it can provide a concentrated source of tea compounds.",
                    },
                  ].map((benefit) => (
                    <article
                      key={benefit.number}
                      className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6"
                    >
                      <span className="text-xs font-black tracking-[0.2em] text-[#ffd166]">
                        {benefit.number}
                      </span>

                      <h3 className="mt-4 text-xl font-black">
                        {benefit.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-white/65">
                        {benefit.text}
                      </p>
                    </article>
                  ))}
                </div>

                <div className="mt-6 rounded-[1.25rem] border border-[#ffd166]/20 bg-[#ffd166]/[0.07] p-5">
                  <p className="text-sm leading-7 text-white/65">
                    <strong className="text-[#ffd166]">
                      {isArabic ? "ملاحظة: " : "A note on health claims: "}
                    </strong>
                    {isArabic
                      ? "تختلف قوة الأدلة العلمية حول الفوائد الصحية طويلة المدى للماتشا والشاي الأخضر. لذلك نتجنب الادعاءات المبالغ فيها ونركز على الفوائد التي تدعمها الأدلة بشكل أفضل."
                      : "The strength of scientific evidence varies for specific long-term health outcomes. For that reason, we avoid exaggerated claims and focus on benefits that are better supported by research."}
                  </p>
                </div>
              </section>

              {/* FAQ */}
              <section>
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                  {labels.faq}
                </h2>

                <div className="mt-7 space-y-4">
                  <details className="group rounded-[1.25rem] border border-[#183b3f]/10 bg-white p-5">
                    <summary className="cursor-pointer list-none font-bold text-[#183b3f]">
                      {labels.makeQuestion}
                    </summary>

                    <p className="mt-4 leading-7 text-[#49666a]">
                      {labels.makeAnswer}
                    </p>
                  </details>

                  <details className="group rounded-[1.25rem] border border-[#183b3f]/10 bg-white p-5">
                    <summary className="cursor-pointer list-none font-bold text-[#183b3f]">
                      {isArabic
                        ? "ما نوع الماتشا المناسب لهذا اللاتيه؟"
                        : "What matcha brand is good for this latte?"}
                    </summary>

                    <p className="mt-4 leading-7 text-[#49666a]">
                      {isArabic
                        ? "نوصي بماتشا Ippodo Tea Ikuyo لهذا المشروب. تصفه Ippodo بأنه خيار موصى به للاتيه، بطعم متوازن يجمع بين الأومامي والحلاوة ودرجة خفيفة من المرارة، مما يجعله مناسبًا مع الحليب."
                        : "Ippodo Tea Ikuyo is a great choice for this drink. Ippodo specifically lists Ikuyo among its top recommendations for matcha lattes. It has a balanced flavor with umami, sweetness, and a light astringency that pairs well with milk."}{" "}
                      <a
                        href="https://ippodotea.com/collections/all/products/ikuyo-20"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-[#2d9caf] underline underline-offset-2"
                      >
                        {isArabic ? "شاهد الماتشا" : "View the matcha"}
                      </a>
                    </p>
                  </details>

                  <details className="group rounded-[1.25rem] border border-[#183b3f]/10 bg-white p-5">
                    <summary className="cursor-pointer list-none font-bold text-[#183b3f]">
                      {isArabic
                        ? "ما نوع الحليب المناسب؟"
                        : "What type of milk should I use?"}
                    </summary>

                    <p className="mt-4 leading-7 text-[#49666a]">
                      {isArabic
                        ? "يمكنك استخدام الحليب كامل الدسم أو نصف الدسم حسب القوام الذي تفضله. الحليب كامل الدسم يعطي المشروب قوامًا أغنى وأكثر كريمية، بينما يمنح الحليب نصف الدسم نتيجة أخف."
                        : "You can use either full-cream milk or half-cream milk. Full-cream milk gives the latte a richer, creamier texture, while half-cream milk creates a lighter drink."}
                    </p>
                  </details>

                  <details className="group rounded-[1.25rem] border border-[#183b3f]/10 bg-white p-5">
                    <summary className="cursor-pointer list-none font-bold text-[#183b3f]">
                      {isArabic
                        ? "هل يمكنني جعل المشروب أكثر حلاوة؟"
                        : "Can I make the latte sweeter?"}
                    </summary>

                    <p className="mt-4 leading-7 text-[#49666a]">
                      {isArabic
                        ? "نعم. الوصفة تستخدم 22 مل من شراب السكر. إذا كنت تفضل مشروبًا أكثر حلاوة، يمكنك استخدام جرعة كاملة واحدة من شراب السكر."
                        : "Yes. The recipe uses 22 ml of sugar syrup. If you prefer a sweeter latte, you can use 1 full shot of sugar syrup."}
                    </p>
                  </details>

                  <details className="group rounded-[1.25rem] border border-[#183b3f]/10 bg-white p-5">
                    <summary className="cursor-pointer list-none font-bold text-[#183b3f]">
                      {isArabic
                        ? "لماذا يجب نخل مسحوق الماتشا؟"
                        : "Why should I strain the matcha?"}
                    </summary>

                    <p className="mt-4 leading-7 text-[#49666a]">
                      {isArabic
                        ? "يساعد نخل الماتشا على تفكيك التكتلات قبل الخلط، مما يعطي خليطًا أنعم وأسهل في الدمج مع شراب الفانيليا والماء الساخن."
                        : "Straining the matcha helps break up natural clumps before blending, giving you a smoother mixture that combines more easily with the vanilla syrup and hot water."}
                    </p>
                  </details>

                  <details className="group rounded-[1.25rem] border border-[#183b3f]/10 bg-white p-5">
                    <summary className="cursor-pointer list-none font-bold text-[#183b3f]">
                      {labels.cupQuestion}
                    </summary>

                    <p className="mt-4 leading-7 text-[#49666a]">
                      {labels.cupAnswer}
                    </p>
                  </details>
                </div>
              </section>

              {/* BOTTOM NAVIGATION */}
              <div className="flex flex-wrap gap-4 border-t border-[#183b3f]/10 pt-8">
                <Link
                  href={`/${locale}/drink-vlog`}
                  className="inline-flex items-center rounded-full bg-[#183b3f] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#102d30]"
                >
                  {labels.back}
                </Link>

                <a
                  href={drink.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-[#ff7043] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#eb5e35]"
                >
                  {labels.watch} ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECIPE STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Recipe",
            name: drink.title,
            description:
              "A creamy iced Strawberry Ice Matcha Latte made with strawberry syrup, matcha, milk, vanilla syrup, ice, and milk cream.",
            image: [drink.image],
            recipeIngredient: ingredients,
            recipeInstructions: steps.map((step, index) => ({
              "@type": "HowToStep",
              position: index + 1,
              text: step,
            })),
            recipeCategory: "Drink",
            keywords:
              "Strawberry Ice Matcha Latte, strawberry matcha latte, iced matcha latte",
            video: {
              "@type": "VideoObject",
              name: drink.title,
              description:
                "Strawberry Ice Matcha Latte Drink Vlog episode.",
              contentUrl: drink.youtubeUrl,
            },
          }),
        }}
      />
    </main>
  );
}
