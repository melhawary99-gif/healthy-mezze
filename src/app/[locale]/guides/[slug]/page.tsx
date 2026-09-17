import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import { getLocalizedRecipe } from "@/lib/localizedRecipes";
import { guideRecipeLinks } from "@/data/guideRecipeLinks";
import { guideCategoryLinks } from "@/data/guideCategoryLinks";
import { categories } from "@/data/categories";
import { SITE_URL, getLanguageAlternates } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: "en" | "ar"; slug: string }>;
};

type GuideSection = {
  title: string;
  body: string;
};

type Guide = {
  en: {
    title: string;
    intro: string;
    sections: GuideSection[];
  };
  ar: {
    title: string;
    intro: string;
    sections: GuideSection[];
  };
};

const guides: Record<string, Guide> = {
  "egyptian-cuisine-guide": {
    en: {
      title: "Egyptian Cuisine Guide",
      intro:
        "Egyptian home cooking is built around familiar ingredients, generous shared meals, and practical ways of turning beans, lentils, grains, vegetables, herbs, and spices into satisfying food. At Healthy Mezze, we approach these dishes as food we can actually make at home or in our café, while respecting the traditions behind them and making practical adjustments when needed.",
      sections: [
        {
          title: "The foundation of Egyptian home cooking",
          body:
            "Beans, lentils, rice, wheat, vegetables, herbs, garlic, onions, cumin, coriander, lemon, vinegar, and cooking oils appear throughout Egyptian cooking. These ingredients are not complicated, but the way they are combined creates layers of flavor. Ful medames is a good example: humble fava beans become a complete-feeling meal when seasoned with cumin, garlic, lemon, and oil and served with vegetables and bread.",
        },
        {
          title: "Food for the everyday table",
          body:
            "Egyptian food is not limited to famous dishes such as koshari. Everyday meals can include beans and legumes, rice dishes, vegetable preparations, soups, grilled foods, breads, pickles, desserts, and drinks. What is placed on the table often depends on what is available, what the family enjoys, and how much time there is to prepare the meal.",
        },
        {
          title: "How Egyptian flavors are built",
          body:
            "Garlic, onion, cumin, coriander, lemon, vinegar, fresh herbs, and chili are useful flavor builders. Browning onions can add depth, gently cooking garlic and other aromatics can soften their sharpness, and adding lemon or vinegar at the right stage can bring a dish into balance. We find that tasting as we cook is one of the simplest ways to understand whether the flavors are working together.",
        },
        {
          title: "A practical way to balance a dish",
          body:
            "When we cook, we do not rely only on a fixed amount of seasoning. We taste along the way and adjust according to the ingredients and the final balance we want. A little extra lemon may brighten a dish, more spice can add heat, and a small adjustment of salt can bring other flavors forward. The same idea works with salad dressings: mix them, taste them, and then decide whether they need more salt, acidity, or another adjustment.",
        },
        {
          title: "Traditional cooking and practical adaptations",
          body:
            "Traditional recipes naturally change as families move between regions and generations, especially when certain ingredients or preparation methods are not available. We treat healthier and more practical adaptations as part of our cooking approach rather than pretending that every version is identical to an older preparation. Depending on the dish, this can mean using the oven instead of frying, increasing vegetables or legumes, adjusting the amount of oil, or offering a practical ingredient substitute.",
        },
        {
          title: "Cooking with what you have",
          body:
            "One of the useful lessons from home cooking is that a missing ingredient does not always mean the recipe has to stop. Some substitutions work well, while others change the character of the dish. We encourage checking the individual recipe for suggested alternatives and using the What If and Recipe Rescue sections when available. The goal is to help you understand the role of an ingredient before deciding how to change it.",
        },
        {
          title: "How we approach cooking proteins",
          body:
            "For chicken and other proteins, flavor is only part of the process. We also pay attention to whether the food is fully cooked. When preparing something in the oven, for example, we may remove the tray and cut into a small piece to check the doneness rather than relying on time alone. Cooking times can vary with the size of the pieces, the equipment, and the starting temperature of the ingredients.",
        },
        {
          title: "Where to start exploring Egyptian food",
          body:
            "A useful starting point is ful medames, Egyptian koshari, lentil soup, vegetable dishes, grilled foods, and Egyptian drinks. As you cook, pay attention to how legumes, grains, vegetables, herbs, acidity, and spices work together. Learning those combinations makes it easier to understand Egyptian food and to adapt individual dishes to your own kitchen.",
        },
      ],
    },
    ar: {
      title: "دليل المطبخ المصري",
      intro:
        "يقوم الطبخ المصري المنزلي على مكونات مألوفة ووجبات تُشارك حول المائدة وطرق عملية لتحويل الفول والعدس والحبوب والخضروات والأعشاب والتوابل إلى أطعمة مشبعة وغنية بالنكهة. في Healthy Mezze نتعامل مع هذه الأطباق كطعام يمكننا تحضيره فعلًا في المنزل أو في مقهانا، مع احترام التقاليد التي تقف وراءها وإجراء تعديلات عملية عند الحاجة.",
      sections: [
        {
          title: "أساسيات الطبخ المصري المنزلي",
          body:
            "يظهر الفول والعدس والأرز والقمح والخضروات والأعشاب والثوم والبصل والكمون والكزبرة والليمون والخل وزيوت الطهي في الكثير من الأطباق المصرية. هذه المكونات بسيطة في حد ذاتها، لكن طريقة جمعها تمنح الطعام طبقات من النكهة. ويُعد الفول المدمس مثالًا واضحًا؛ فحبوب الفول البسيطة تصبح وجبة مشبعة عند تتبيلها بالكمون والثوم والليمون والزيت وتقديمها مع الخضروات والخبز.",
        },
        {
          title: "طعام المائدة اليومية",
          body:
            "لا يقتصر المطبخ المصري على الأطباق المعروفة مثل الكشري. يمكن أن تشمل الوجبات اليومية الفول والبقوليات وأطباق الأرز والخضروات والشوربات والمشاوي والخبز والمخللات والحلويات والمشروبات. وما يوضع على المائدة يعتمد في كثير من الأحيان على المكونات المتوفرة وما تحبه العائلة والوقت المتاح لتحضير الطعام.",
        },
        {
          title: "كيف نبني النكهة المصرية",
          body:
            "يُعد الثوم والبصل والكمون والكزبرة والليمون والخل والأعشاب الطازجة والفلفل الحار من أهم العناصر التي تساعد على بناء النكهة. يمكن لتحمير البصل أن يضيف عمقًا، كما أن طهي الثوم والمكونات العطرية بهدوء يساعد على تخفيف حدتها، بينما يمكن لإضافة الليمون أو الخل في الوقت المناسب أن تحقق توازنًا أفضل. ونجد أن تذوق الطعام أثناء الطبخ من أبسط الطرق لمعرفة ما إذا كانت النكهات منسجمة.",
        },
        {
          title: "طريقة عملية لموازنة النكهة",
          body:
            "عندما نطبخ، لا نعتمد دائمًا على كمية ثابتة من التوابل دون تذوق. نتذوق الطعام أثناء التحضير ونعدّل النكهة حسب المكونات والتوازن الذي نريده في النهاية. قد تضيف كمية إضافية من الليمون إشراقًا للطبق، بينما يمكن للمزيد من التوابل أن يضيف حرارة، وقد تساعد زيادة بسيطة في الملح على إبراز النكهات الأخرى. وينطبق الأمر نفسه على تتبيلات السلطة: نخلطها ونتذوقها ثم نقرر ما إذا كانت تحتاج إلى مزيد من الملح أو الحموضة أو أي تعديل آخر.",
        },
        {
          title: "الطبخ التقليدي والتعديلات العملية",
          body:
            "تتغير الوصفات التقليدية طبيعيًا مع انتقال العائلات بين المناطق ومع مرور الأجيال، خاصة عندما لا تتوفر بعض المكونات أو طرق التحضير. نحن نتعامل مع التعديلات الصحية والعملية باعتبارها جزءًا من أسلوب الطبخ، من دون الادعاء بأن كل نسخة مطابقة لوصفة أقدم. وبحسب الطبق، قد يعني ذلك استخدام الفرن بدلًا من القلي، أو زيادة الخضروات والبقوليات، أو تعديل كمية الزيت، أو تقديم بديل عملي لأحد المكونات.",
        },
        {
          title: "الطبخ بالمكونات المتوفرة لديك",
          body:
            "من الدروس المفيدة في الطبخ المنزلي أن عدم توفر أحد المكونات لا يعني دائمًا توقف الوصفة. بعض البدائل تعمل بشكل جيد، بينما قد تغيّر بدائل أخرى شخصية الطبق. لذلك نشجعك على مراجعة البدائل المقترحة في كل وصفة واستخدام أقسام What If وRecipe Rescue عندما تكون متاحة. الهدف هو مساعدتك على فهم دور المكون قبل أن تقرر كيفية تغييره.",
        },
        {
          title: "كيف نتعامل مع طهي البروتينات",
          body:
            "عند تحضير الدجاج والبروتينات الأخرى، لا نهتم بالنكهة فقط، بل ننتبه أيضًا إلى اكتمال النضج. عند تحضير الطعام في الفرن مثلًا، قد نخرج الصينية ونقطع جزءًا صغيرًا للتحقق من النضج بدلًا من الاعتماد على الوقت وحده. فقد تختلف مدة الطهي حسب حجم القطع والمعدات ودرجة حرارة المكونات عند بدء التحضير.",
        },
        {
          title: "من أين تبدأ استكشاف الطعام المصري؟",
          body:
            "يمكنك البدء بالفول المدمس والكشري وشوربة العدس وأطباق الخضروات والمشاوي والمشروبات المصرية. وأثناء الطبخ، حاول ملاحظة طريقة اجتماع البقوليات والحبوب والخضروات والأعشاب والحموضة والتوابل. فهم هذه التركيبات يجعل من السهل التعرف على أسلوب الطبخ المصري وتكييف الأطباق المختلفة مع مطبخك الخاص.",
        },
      ],
    },
  },

  "lebanese-cuisine-guide": {
    en: {
      title: "Lebanese Cuisine Guide",
      intro:
        "Lebanese home cooking brings together fresh vegetables, legumes, grains, herbs, spices, olive oil, tahini, yogurt, and bright citrus flavors. At Healthy Mezze, we approach Lebanese food as something meant to be shared, enjoyed at home, and adapted thoughtfully when ingredients, time, or personal preferences require a change.",
      sections: [
        {
          title: "The foundation of Lebanese home cooking",
          body:
            "Vegetables, legumes, grains, herbs, olive oil, garlic, lemon, tahini, yogurt, and warm spices form an important part of Lebanese cooking. Many dishes begin with simple ingredients and become distinctive through seasoning, texture, and balance. Hummus, tabbouleh, fattoush, and mujaddara each show a different way of combining familiar ingredients into a satisfying dish.",
        },
        {
          title: "The Lebanese table is built for sharing",
          body:
            "Lebanese meals often bring several dishes together rather than relying on one large centerpiece. Mezze can include salads, dips, vegetables, grains, breads, and other small dishes that people can share. This style of eating makes it easy to build a meal around what is available and what everyone at the table enjoys.",
        },
        {
          title: "Freshness and acidity matter",
          body:
            "Lemon, fresh herbs, garlic, olive oil, and vegetables help give Lebanese dishes their recognizable freshness. Acidity can brighten rich ingredients such as tahini or yogurt, while fresh herbs can add a lighter contrast to grains and legumes. We like to taste as we cook because the amount of lemon, salt, garlic, or herbs that works best can depend on the ingredients themselves.",
        },
        {
          title: "How we balance Lebanese flavors",
          body:
            "When preparing a dressing, dip, or cooked dish, we do not treat the written measurements as the only possible final answer. We taste the mixture and adjust it according to the balance we want. A little more lemon can add brightness, additional salt can bring other flavors forward, and extra herbs or spice can change the character of the dish. The goal is a balanced plate rather than one ingredient overpowering everything else.",
        },
        {
          title: "Tahini, yogurt, and olive oil",
          body:
            "Tahini and yogurt are useful foundations for many Lebanese-style preparations because they provide creamy texture and pair well with lemon, garlic, herbs, and spices. Olive oil adds richness and is often used both during preparation and as a finishing ingredient. When working with tahini, adding liquid gradually and tasting as you go can help you reach the texture and acidity you prefer.",
        },
        {
          title: "Traditional recipes and modern adaptations",
          body:
            "Lebanese recipes have been prepared across generations and naturally vary between families and regions. Ingredients, proportions, cooking methods, and serving styles can change depending on what is available and how a family cooks. At Healthy Mezze, we distinguish traditional preparations from healthier or more practical adaptations, such as using the oven instead of frying, adjusting oil, increasing vegetables or legumes, or offering ingredient substitutions.",
        },
        {
          title: "Making Lebanese food practical at home",
          body:
            "A missing ingredient does not always mean you have to abandon a recipe. Some substitutions preserve the main character of a dish, while others can noticeably change its flavor or texture. We recommend checking the individual recipe for suggested alternatives and using the What If and Recipe Rescue sections when available. Understanding what an ingredient contributes makes it easier to decide whether a substitution will work for your meal.",
        },
        {
          title: "Where to start exploring Lebanese food",
          body:
            "Start with familiar dishes such as hummus, tabbouleh, fattoush, baba ganoush, mujaddara, and grilled dishes. Pay attention to the relationship between fresh herbs, lemon, garlic, olive oil, tahini, yogurt, grains, and legumes. Once you understand those combinations, it becomes easier to explore more Lebanese dishes and adjust recipes confidently in your own kitchen.",
        },
      ],
    },
    ar: {
      title: "دليل المطبخ اللبناني",
      intro:
        "يجمع الطبخ اللبناني المنزلي بين الخضروات الطازجة والبقوليات والحبوب والأعشاب والتوابل وزيت الزيتون والطحينة والزبادي والنكهات الحمضية المنعشة. في Healthy Mezze نتعامل مع الطعام اللبناني كطعام يُحضّر للمشاركة والاستمتاع به في المنزل، مع إجراء تعديلات مدروسة عندما تتطلب المكونات المتاحة أو الوقت أو التفضيلات الشخصية ذلك.",
      sections: [
        {
          title: "أساسيات الطبخ اللبناني المنزلي",
          body:
            "تشكّل الخضروات والبقوليات والحبوب والأعشاب وزيت الزيتون والثوم والليمون والطحينة والزبادي والتوابل الدافئة جزءًا مهمًا من الطبخ اللبناني. تبدأ الكثير من الأطباق بمكونات بسيطة ثم تتميز من خلال التتبيل والقوام والتوازن. ويُظهر الحمص والتبولة والفتوش والمجدرة طرقًا مختلفة لجمع مكونات مألوفة في أطباق مشبعة وغنية بالنكهة.",
        },
        {
          title: "المائدة اللبنانية مصممة للمشاركة",
          body:
            "تجمع الوجبات اللبنانية في كثير من الأحيان عدة أطباق معًا بدلًا من الاعتماد على طبق رئيسي واحد كبير. ويمكن أن تشمل المازات السلطات والغموس والخضروات والحبوب والخبز وأطباقًا صغيرة أخرى يتشاركها الجميع. هذا الأسلوب يجعل من السهل بناء وجبة حسب المكونات المتوفرة وما يستمتع به أفراد المائدة.",
        },
        {
          title: "أهمية الطزاجة والحموضة",
          body:
            "يساعد الليمون والأعشاب الطازجة والثوم وزيت الزيتون والخضروات على منح الأطباق اللبنانية نكهتها المنعشة. ويمكن للحموضة أن تضيف إشراقًا إلى المكونات الغنية مثل الطحينة أو الزبادي، بينما تضيف الأعشاب الطازجة تباينًا خفيفًا مع الحبوب والبقوليات. ونحب أن نتذوق أثناء الطبخ لأن كمية الليمون أو الملح أو الثوم أو الأعشاب المناسبة قد تختلف حسب المكونات نفسها.",
        },
        {
          title: "كيف نوازن النكهات اللبنانية",
          body:
            "عند تحضير تتبيلة أو غموس أو طبق مطبوخ، لا نتعامل مع المقادير المكتوبة باعتبارها النتيجة النهائية الوحيدة الممكنة. نتذوق الخليط ونعدّله حسب التوازن الذي نريده. قد تضيف كمية إضافية من الليمون إشراقًا، بينما يمكن لمزيد من الملح أن يساعد على إبراز النكهات الأخرى، كما يمكن للأعشاب أو التوابل الإضافية أن تغير شخصية الطبق. الهدف هو الوصول إلى طبق متوازن دون أن تطغى نكهة مكون واحد على باقي المكونات.",
        },
        {
          title: "الطحينة والزبادي وزيت الزيتون",
          body:
            "تُعد الطحينة والزبادي من المكونات المفيدة في العديد من التحضيرات على الطريقة اللبنانية، لأنهما يمنحان قوامًا كريميًا ويتوافقان جيدًا مع الليمون والثوم والأعشاب والتوابل. ويضيف زيت الزيتون غنىً إلى الطعام ويُستخدم أثناء التحضير أو كلمسة نهائية. وعند استخدام الطحينة، يمكن إضافة السائل تدريجيًا مع التذوق للوصول إلى القوام ودرجة الحموضة التي تفضلها.",
        },
        {
          title: "الوصفات التقليدية والتعديلات الحديثة",
          body:
            "توارثت العائلات الوصفات اللبنانية عبر أجيال، ولذلك تختلف الوصفات طبيعيًا بين العائلات والمناطق. وقد تتغير المكونات والنسب وطرق الطهي وأساليب التقديم حسب المتوفر وطريقة الطبخ في كل منزل. في Healthy Mezze نحرص على التمييز بين التحضير التقليدي والتعديلات الصحية أو العملية، مثل استخدام الفرن بدلًا من القلي أو تعديل كمية الزيت أو زيادة الخضروات والبقوليات أو تقديم بدائل لبعض المكونات.",
        },
        {
          title: "جعل الطعام اللبناني عمليًا في المنزل",
          body:
            "عدم توفر أحد المكونات لا يعني دائمًا ضرورة التخلي عن الوصفة. بعض البدائل تحافظ على الشخصية الأساسية للطبق، بينما قد تغير بدائل أخرى النكهة أو القوام بشكل واضح. ننصحك بمراجعة البدائل المقترحة في كل وصفة واستخدام أقسام What If وRecipe Rescue عندما تكون متاحة. وفهم الدور الذي يؤديه المكون يجعل من الأسهل تحديد ما إذا كان البديل مناسبًا لوجبتك.",
        },
        {
          title: "من أين تبدأ استكشاف الطعام اللبناني؟",
          body:
            "ابدأ بأطباق معروفة مثل الحمص والتبولة والفتوش وبابا غنوج والمجدرة والأطباق المشوية. انتبه إلى العلاقة بين الأعشاب الطازجة والليمون والثوم وزيت الزيتون والطحينة والزبادي والحبوب والبقوليات. وعندما تفهم هذه التركيبات، يصبح من الأسهل استكشاف المزيد من الأطباق اللبنانية وتعديل الوصفات بثقة في مطبخك.",
        },
      ],
    },
  },
  "eastern-mediterranean-food-guide": {
    en: {
      title: "Eastern Mediterranean Food Guide",
      intro:
        "Eastern Mediterranean food cultures share many ingredients and techniques while retaining distinct regional identities. Egyptian and Lebanese cooking provide two useful perspectives on how grains, legumes, vegetables, herbs, breads, and fresh flavors shape everyday meals.",
      sections: [
        {
          title: "What connects the region",
          body:
            "Olive oil, legumes, grains, fresh herbs, garlic, lemon, vegetables, yogurt, sesame, spices, and flatbreads appear across many Eastern Mediterranean kitchens. Similar ingredients can be transformed into very different dishes depending on local traditions.",
        },
        {
          title: "Shared ingredients do not mean identical cuisines",
          body:
            "A common pantry should not be mistaken for a single cuisine. Egyptian ful, Lebanese hummus, regional flatbreads, different rice dishes, salads, pickles, and spice combinations each have their own histories and customary preparations.",
        },
        {
          title: "The importance of bread and grains",
          body:
            "Bread, rice, bulgur, and other grains help structure meals and provide practical ways to serve legumes, vegetables, dips, and grilled foods. Choosing portions thoughtfully can keep the meal balanced while preserving the traditional role of grains.",
        },
        {
          title: "Fresh herbs and acidity",
          body:
            "Parsley, mint, coriander, lemon, sumac, and other bright ingredients provide contrast to legumes, grains, grilled foods, and rich dips. Adding freshness near the end of cooking or just before serving can make a simple dish taste more complete.",
        },
        {
          title: "A healthy regional pattern",
          body:
            "A balanced Eastern Mediterranean meal can emphasize vegetables and legumes, include suitable portions of grains or bread, add a protein when desired, and use olive oil, tahini, nuts, or dairy in sensible quantities. Variety across meals matters more than making every individual dish low in calories.",
        },
        {
          title: "How to explore responsibly",
          body:
            "Use regional names accurately and avoid treating neighboring cuisines as interchangeable. When adapting a dish for a modern kitchen, explain meaningful changes while preserving the flavor combinations and techniques that give the original its character.",
        },
      ],
    },
    ar: {
      title: "دليل طعام شرق المتوسط",
      intro:
        "تشترك ثقافات الطعام في شرق المتوسط في كثير من المكونات والتقنيات مع احتفاظ كل منطقة بهويتها الخاصة. ويقدم المطبخان المصري واللبناني مثالين واضحين على دور الحبوب والبقوليات والخضروات والأعشاب والخبز والنكهات الطازجة.",
      sections: [
        {
          title: "ما الذي يجمع المنطقة",
          body:
            "يظهر زيت الزيتون والبقوليات والحبوب والأعشاب الطازجة والثوم والليمون والخضروات والزبادي والسمسم والتوابل والخبز المسطح في كثير من مطابخ شرق المتوسط. ويمكن للمكونات نفسها أن تتحول إلى أطباق مختلفة حسب التقاليد المحلية.",
        },
        {
          title: "تشابه المكونات لا يعني تطابق المطابخ",
          body:
            "وجود مكونات مشتركة لا يعني أن المنطقة تمتلك مطبخًا واحدًا. فالفول المصري والحمص اللبناني وأنواع الخبز وأطباق الأرز والسلطات والمخللات وخلطات التوابل لكل منها تقاليدها وتحضيراتها الخاصة.",
        },
        {
          title: "أهمية الخبز والحبوب",
          body:
            "يساعد الخبز والأرز والبرغل والحبوب الأخرى في بناء الوجبة، كما توفر وسيلة عملية لتقديم البقوليات والخضروات والغموسات والمشاوي. ويمكن ضبط الكمية للحفاظ على توازن الوجبة مع احترام الدور التقليدي للحبوب.",
        },
        {
          title: "الأعشاب الطازجة والحموضة",
          body:
            "يمنح البقدونس والنعناع والكزبرة والليمون والسماق وغيرها من المكونات المنعشة تباينًا واضحًا مع البقوليات والحبوب والمشاوي والغموسات الغنية. وإضافة العناصر الطازجة قرب نهاية الطهي أو قبل التقديم تجعل الطبق أكثر حيوية.",
        },
        {
          title: "نمط غذائي متوسطي متوازن",
          body:
            "يمكن أن تركز الوجبة المتوازنة في شرق المتوسط على الخضروات والبقوليات، مع كمية مناسبة من الحبوب أو الخبز، ومصدر بروتين حسب الحاجة، واستخدام زيت الزيتون والطحينة والمكسرات ومنتجات الألبان باعتدال. التنوع بين الوجبات أهم من جعل كل طبق منخفض السعرات.",
        },
        {
          title: "كيف تستكشف المطابخ باحترام",
          body:
            "استخدم أسماء الأطباق والمناطق بدقة ولا تتعامل مع المطابخ المتجاورة على أنها شيء واحد. وعند تكييف وصفة للمطبخ الحديث، وضح التغييرات المهمة مع الحفاظ على تركيبات النكهة والتقنيات التي تمنح الطبق هويته.",
        },
      ],
    },
  },

  "egyptian-breakfast-guide": {
    en: {
      title: "Egyptian Breakfast Guide",
      intro:
        "Egyptian breakfast is often built around filling, familiar foods that are easy to share and practical enough for everyday life. Beans, eggs, vegetables, cheese, bread, herbs, and simple seasonings can come together in many different ways. At Healthy Mezze, we approach breakfast from the perspective of food we actually enjoy preparing at home, while keeping traditional flavors and practical adaptations in mind.",
      sections: [
        {
          title: "The foundation of an Egyptian breakfast",
          body:
            "Ful medames is one of the most familiar foundations of Egyptian breakfast, but the morning table can include much more than beans. Eggs, vegetables, cheese, bread, herbs, pickles, yogurt, and simple dips can all have a place. The combination depends on the household, what is available, and how much time there is to prepare the meal.",
        },
        {
          title: "Why ful medames matters",
          body:
            "Fava beans are a practical breakfast ingredient because they are filling and can be seasoned in several different ways. Cumin, garlic, lemon, olive oil, chili, and fresh vegetables can change the character of the same basic beans. We like to treat ful as a flexible dish: start with the main ingredients, taste them, and adjust the seasoning to suit the table.",
        },
        {
          title: "Building a balanced breakfast plate",
          body:
            "A satisfying breakfast does not have to depend on one food alone. Combining legumes or eggs with vegetables, herbs, bread, yogurt, or other foods can create different textures and flavors. Fresh tomato, cucumber, herbs, lemon, and pickles can also provide contrast to richer or softer foods.",
        },
        {
          title: "How we season breakfast dishes",
          body:
            "We prefer tasting breakfast dishes as they come together instead of assuming that one fixed amount of seasoning will work every time. Lemon can brighten beans or eggs, cumin can add warmth, chili can increase heat, and a little salt can bring the other flavors forward. If something tastes too strong, adjusting another part of the dish can often restore the balance.",
        },
        {
          title: "Eggs, vegetables, and simple preparations",
          body:
            "Eggs are useful for a quick breakfast because they can be combined with vegetables, herbs, and spices without requiring complicated preparation. Baking is also one of the methods we use when it suits the dish. It can provide a practical alternative to frying while still allowing vegetables and other ingredients to develop flavor.",
        },
        {
          title: "Traditional breakfast and healthier adaptations",
          body:
            "Breakfast traditions naturally differ between families and generations. When we adapt a dish, we try to keep the main character of the food while making practical changes where they make sense. Depending on the recipe, that may involve using the oven instead of frying, adjusting oil, adding more vegetables or legumes, or providing substitutions when an ingredient is unavailable.",
        },
        {
          title: "Making breakfast work with what you have",
          body:
            "Home cooking rarely happens with a perfectly stocked kitchen. When an ingredient is missing, the important question is what role that ingredient plays in the recipe. Some replacements work naturally, while others change the final flavor or texture. Check the individual recipe for suggested substitutions and use the What If and Recipe Rescue sections when available.",
        },
        {
          title: "A practical Egyptian breakfast routine",
          body:
            "For an easy breakfast, start with one filling base such as beans or eggs, then add fresh vegetables, herbs, bread, or another side that gives the meal contrast. Taste the main dish before serving and adjust lemon, salt, spice, or oil as needed. The goal is not to make breakfast complicated, but to build a plate that feels satisfying and enjoyable.",
        },
      ],
    },
    ar: {
      title: "دليل الإفطار المصري",
      intro:
        "غالبًا ما يعتمد الإفطار المصري على أطعمة مشبعة ومألوفة يسهل مشاركتها وتناسب الحياة اليومية. يمكن الجمع بين الفول والبيض والخضروات والجبن والخبز والأعشاب والتتبيلات البسيطة بطرق مختلفة. في Healthy Mezze ننظر إلى الإفطار من منظور الأطعمة التي نستمتع فعلًا بتحضيرها في المنزل، مع الحفاظ على النكهات التقليدية وإجراء تعديلات عملية عند الحاجة.",
      sections: [
        {
          title: "أساسيات الإفطار المصري",
          body:
            "يُعد الفول المدمس من أشهر أساسيات الإفطار المصري، لكن مائدة الصباح يمكن أن تشمل أكثر بكثير من الفول. يمكن أن يكون للبيض والخضروات والجبن والخبز والأعشاب والمخللات والزبادي والغموس البسيط مكان على المائدة. ويختلف الجمع بينها حسب كل منزل والمكونات المتوفرة والوقت المتاح لتحضير الوجبة.",
        },
        {
          title: "لماذا يُعد الفول المدمس مهمًا؟",
          body:
            "يُعد الفول من المكونات العملية للإفطار لأنه مشبع ويمكن تتبيله بطرق مختلفة. ويمكن للكمون والثوم والليمون وزيت الزيتون والفلفل والخضروات الطازجة أن تغير شخصية الطبق نفسه. نحن نحب التعامل مع الفول كطبق مرن: ابدأ بالمكونات الأساسية ثم تذوق وعدّل التتبيل بما يناسب المائدة.",
        },
        {
          title: "بناء طبق إفطار متوازن",
          body:
            "لا يجب أن يعتمد الإفطار المشبع على نوع واحد من الطعام. يمكن للجمع بين البقوليات أو البيض والخضروات والأعشاب والخبز والزبادي أو غيرها من الأطعمة أن يقدم قوامات ونكهات مختلفة. كما يمكن للطماطم والخيار والأعشاب الطازجة والليمون والمخللات أن تضيف تباينًا مع الأطعمة الأكثر غنى أو نعومة.",
        },
        {
          title: "كيف نتبل أطباق الإفطار",
          body:
            "نفضل تذوق أطباق الإفطار أثناء تحضيرها بدلًا من افتراض أن كمية ثابتة من التتبيل ستناسب كل مرة. يمكن للليمون أن يضيف إشراقًا إلى الفول أو البيض، بينما يضيف الكمون دفئًا ويمكن للفلفل أن يزيد الحرارة، كما تساعد كمية بسيطة من الملح على إبراز النكهات الأخرى. وإذا كانت نكهة ما قوية أكثر من اللازم، فقد يساعد تعديل عنصر آخر في إعادة التوازن.",
        },
        {
          title: "البيض والخضروات والتحضيرات البسيطة",
          body:
            "يُعد البيض مناسبًا للإفطار السريع لأنه يمكن جمعه مع الخضروات والأعشاب والتوابل دون الحاجة إلى تحضير معقد. كما نستخدم الخَبز في الفرن عندما يناسب الطبق، ويمكن أن يكون بديلًا عمليًا للقلي مع السماح للخضروات والمكونات الأخرى بتطوير نكهتها.",
        },
        {
          title: "الإفطار التقليدي والتعديلات الصحية",
          body:
            "تختلف تقاليد الإفطار طبيعيًا بين العائلات والأجيال. وعندما نعدّل طبقًا، نحاول الحفاظ على شخصيته الأساسية مع إجراء تغييرات عملية عندما تكون مناسبة. وبحسب الوصفة، قد يشمل ذلك استخدام الفرن بدلًا من القلي أو تعديل كمية الزيت أو إضافة المزيد من الخضروات والبقوليات أو تقديم بدائل عندما لا يتوفر أحد المكونات.",
        },
        {
          title: "تحضير الإفطار بالمكونات المتوفرة لديك",
          body:
            "نادراً ما يحدث الطبخ المنزلي في مطبخ يحتوي على جميع المكونات بشكل مثالي. وعندما ينقص أحد المكونات، من المهم معرفة الدور الذي يؤديه داخل الوصفة. بعض البدائل تعمل بشكل طبيعي، بينما قد تغير بدائل أخرى النكهة أو القوام النهائي. راجع الوصفة نفسها لمعرفة البدائل المقترحة واستخدم أقسام What If وRecipe Rescue عندما تكون متاحة.",
        },
        {
          title: "روتين عملي للإفطار المصري",
          body:
            "لإعداد إفطار سهل، ابدأ بمكون مشبع مثل الفول أو البيض، ثم أضف الخضروات الطازجة والأعشاب والخبز أو طبقًا جانبيًا يمنح الوجبة تباينًا. تذوق الطبق الأساسي قبل التقديم وعدّل الليمون أو الملح أو التوابل أو الزيت حسب الحاجة. الهدف ليس جعل الإفطار معقدًا، بل بناء طبق مشبع وممتع.",
        },
      ],
    },
  },
  "lebanese-mezze-guide": {
    en: {
      title: "Lebanese Mezze Guide",
      intro:
        "Lebanese mezze is built around sharing: small plates of vegetables, dips, salads, grains, herbs, breads, and other dishes brought together around the table. At Healthy Mezze, we see mezze as a practical way to create a varied meal from simple ingredients while keeping fresh flavors, textures, and balance at the center.",
      sections: [
        {
          title: "What is Lebanese mezze?",
          body:
            "Mezze describes a style of eating as much as it describes a collection of dishes. Several smaller preparations can be served together so everyone can taste different flavors and textures. A mezze table may include hummus, salads, vegetables, dips, grains, bread, pickles, and other dishes depending on the occasion and what the household has available.",
        },
        {
          title: "The building blocks of a mezze table",
          body:
            "A useful mezze table usually combines different textures and flavors rather than repeating the same type of dish. Creamy hummus or baba ganoush can sit alongside crisp vegetables and salads, while bread and grains provide a more substantial element. Fresh herbs, lemon, garlic, olive oil, tahini, and yogurt can connect the different dishes.",
        },
        {
          title: "Fresh salads bring contrast",
          body:
            "Tabbouleh and fattoush are good examples of how fresh vegetables, herbs, acidity, and texture can bring contrast to a shared meal. The amount of lemon, herbs, vegetables, and seasoning can be adjusted according to the ingredients available. We prefer tasting salads and dressings before serving so the acidity, salt, and other flavors stay balanced.",
        },
        {
          title: "Dips are about texture and balance",
          body:
            "Hummus, baba ganoush, and tahini-based dips can be simple to prepare, but their final texture and flavor depend on the ingredients and the amount of liquid added. We recommend adding liquid gradually, mixing thoroughly, and tasting as you go. Lemon, garlic, salt, and tahini can then be adjusted until the dip has the balance you want.",
        },
        {
          title: "How to build a practical mezze meal",
          body:
            "You do not need a large number of dishes to create a satisfying mezze table. Start with one or two dips, add a fresh salad or vegetable dish, then include bread, grains, legumes, or another filling preparation. A grilled or baked dish can be added when you want more protein. This approach makes it easier to use what you already have in the kitchen.",
        },
        {
          title: "Traditional mezze and healthier adaptations",
          body:
            "Mezze traditions vary between families and regions, and individual recipes can change over generations. When we make a healthier adaptation, we try to keep the character of the dish while making practical changes where they make sense. Depending on the preparation, this may include baking instead of frying, adjusting oil, increasing vegetables or legumes, or providing a suitable ingredient substitution.",
        },
        {
          title: "Making mezze work for your kitchen",
          body:
            "A mezze table is naturally flexible, which makes it useful when ingredients are missing or when different people have different preferences. Some substitutions preserve the character of a dish while others change its flavor or texture. Check each recipe for suggested alternatives and use the What If and Recipe Rescue sections when available to help decide how to adjust a dish.",
        },
        {
          title: "A simple mezze table to start with",
          body:
            "For a practical starting point, combine hummus with tabbouleh or fattoush, fresh vegetables, bread, and one additional dish such as grilled vegetables, legumes, or a protein. Taste each preparation before serving and adjust lemon, salt, herbs, or spice as needed. Mezze is meant to be shared, so leave room for everyone to add their own preferences and discover combinations they enjoy.",
        },
      ],
    },
    ar: {
      title: "دليل المازات اللبنانية",
      intro:
        "تعتمد المازات اللبنانية على المشاركة، حيث تجتمع أطباق صغيرة من الخضروات والغموس والسلطات والحبوب والأعشاب والخبز وغيرها حول المائدة. في Healthy Mezze نرى المازات كطريقة عملية لبناء وجبة متنوعة من مكونات بسيطة، مع الحفاظ على النكهات الطازجة وتنوع القوام والتوازن في مقدمة المائدة.",
      sections: [
        {
          title: "ما هي المازات اللبنانية؟",
          body:
            "كلمة المازات تصف أسلوبًا في تناول الطعام بقدر ما تصف مجموعة من الأطباق. يمكن تقديم عدة أطباق صغيرة معًا حتى يتمكن الجميع من تجربة نكهات وقوامات مختلفة. وقد تشمل مائدة المازات الحمص والسلطات والخضروات والغموس والحبوب والخبز والمخللات وأطباقًا أخرى بحسب المناسبة وما يتوفر في المنزل.",
        },
        {
          title: "مكونات مائدة المازات",
          body:
            "تجمع مائدة المازات الجيدة عادةً بين قوامات ونكهات مختلفة بدلًا من تكرار النوع نفسه من الطعام. يمكن أن يأتي الحمص أو بابا غنوج الكريمي إلى جانب الخضروات والسلطات المقرمشة، بينما يوفر الخبز والحبوب عنصرًا أكثر إشباعًا. ويمكن للأعشاب الطازجة والليمون والثوم وزيت الزيتون والطحينة والزبادي أن تربط الأطباق المختلفة معًا.",
        },
        {
          title: "السلطات الطازجة تضيف التباين",
          body:
            "تُعد التبولة والفتوش مثالين جيدين على طريقة إضافة الخضروات والأعشاب الطازجة والحموضة والقوام إلى الوجبة المشتركة. ويمكن تعديل كمية الليمون والأعشاب والخضروات والتتبيل حسب المكونات المتوفرة. ونفضل تذوق السلطات والتتبيلات قبل التقديم للتأكد من بقاء الحموضة والملوحة وبقية النكهات متوازنة.",
        },
        {
          title: "الغموس يعتمد على القوام والتوازن",
          body:
            "يمكن أن تكون أطباق مثل الحمص وبابا غنوج والغموس المعتمد على الطحينة بسيطة في التحضير، لكن القوام والنكهة النهائية يعتمدان على المكونات وكمية السائل المضاف. ننصح بإضافة السائل تدريجيًا مع الخلط والتذوق أثناء التحضير. وبعد ذلك يمكن تعديل الليمون والثوم والملح والطحينة حتى تصل إلى التوازن الذي تفضله.",
        },
        {
          title: "كيف تبني وجبة مازات عملية؟",
          body:
            "لا تحتاج إلى عدد كبير من الأطباق لإنشاء مائدة مازات مشبعة. ابدأ بطبق أو طبقين من الغموس، ثم أضف سلطة طازجة أو طبق خضروات، وبعد ذلك الخبز أو الحبوب أو البقوليات أو طبقًا آخر أكثر إشباعًا. ويمكن إضافة طبق مشوي أو مخبوز عندما ترغب في مزيد من البروتين. بهذه الطريقة يصبح من الأسهل استخدام ما لديك بالفعل في المطبخ.",
        },
        {
          title: "المازات التقليدية والتعديلات الصحية",
          body:
            "تختلف تقاليد المازات بين العائلات والمناطق، كما يمكن أن تتغير الوصفات الفردية مع مرور الأجيال. وعندما نقدم تعديلًا صحيًا، نحاول الحفاظ على شخصية الطبق مع إجراء تغييرات عملية عندما تكون مناسبة. وبحسب الوصفة، قد يشمل ذلك استخدام الفرن بدلًا من القلي أو تعديل كمية الزيت أو زيادة الخضروات والبقوليات أو تقديم بديل مناسب لأحد المكونات.",
        },
        {
          title: "جعل المازات مناسبة لمطبخك",
          body:
            "تتميز المازات بمرونتها الطبيعية، مما يجعلها مناسبة عندما تنقص بعض المكونات أو عندما تختلف تفضيلات الأشخاص على المائدة. بعض البدائل تحافظ على شخصية الطبق، بينما قد تغير بدائل أخرى النكهة أو القوام. راجع كل وصفة لمعرفة البدائل المقترحة واستخدم أقسام What If وRecipe Rescue عندما تكون متاحة للمساعدة في تحديد طريقة تعديل الطبق.",
        },
        {
          title: "مائدة مازات بسيطة للبدء",
          body:
            "لبداية عملية، اجمع بين الحمص والتبولة أو الفتوش والخضروات الطازجة والخبز، ثم أضف طبقًا آخر مثل الخضروات المشوية أو البقوليات أو أحد أطباق البروتين. تذوق كل طبق قبل التقديم وعدّل الليمون أو الملح أو الأعشاب أو التوابل حسب الحاجة. المازات مصممة للمشاركة، لذلك اترك مساحة للجميع لإضافة تفضيلاتهم واكتشاف التركيبات التي يستمتعون بها.",
        },
      ],
    },
  },
  "egyptian-pantry-essentials": {
    en: {
      title: "Egyptian Pantry Essentials",
      intro:
        "A useful Egyptian pantry does not need to be complicated. A small collection of beans, grains, spices, aromatics, oils, and shelf-stable ingredients can provide the foundation for many everyday meals. At Healthy Mezze, we focus on practical ingredients that we actually use when preparing familiar Egyptian food at home or in our café.",
      sections: [
        {
          title: "The everyday Egyptian pantry",
          body:
            "Fava beans, lentils, rice, wheat-based grains, onions, garlic, cumin, coriander, olive oil, vinegar, and tomato-based ingredients are useful foundations for Egyptian cooking. Fresh vegetables and herbs complete many meals, but keeping these pantry staples available makes it easier to prepare filling food without needing a complicated shopping list.",
        },
        {
          title: "Beans and legumes",
          body:
            "Beans and legumes are central to many practical meals. Ful medames uses fava beans as its base, while lentils can become soups and other satisfying dishes. Keeping dried or prepared legumes available gives you flexibility when planning meals and makes it easier to build a dish around an inexpensive, filling ingredient.",
        },
        {
          title: "Rice, grains, and the Egyptian table",
          body:
            "Rice and other grains can provide the foundation or supporting element for many meals. Egyptian cooking also shows how grains can be combined with legumes, vegetables, sauces, and seasonings to create food with different textures. When preparing grain-based dishes, we pay attention to texture rather than treating cooking time as the only measure of readiness.",
        },
        {
          title: "Spices and flavor builders",
          body:
            "Cumin, coriander, garlic, onion, chili, lemon, and vinegar are useful flavor builders. They can be used individually or combined to create very different results from simple ingredients. We prefer adding seasoning gradually and tasting as we cook so that one strong ingredient does not overwhelm the rest of the dish.",
        },
        {
          title: "Oil, acidity, and balance",
          body:
            "Oil contributes richness, while lemon and vinegar provide acidity that can brighten a dish. The amount needed depends on the other ingredients and the style of preparation. When making a dressing or seasoning a cooked dish, we mix and taste before deciding whether it needs more salt, acidity, oil, or spice.",
        },
        {
          title: "Building a healthier pantry",
          body:
            "A pantry can support healthier cooking when it makes it easy to reach for legumes, grains, vegetables, herbs, and simple seasonings. We often prefer oven cooking when it suits the recipe because it can provide a practical alternative to frying. This does not mean every traditional dish needs to be changed; the goal is to understand where a practical adaptation works for the particular recipe.",
        },
        {
          title: "Substitutions when something is missing",
          body:
            "A well-stocked pantry still will not contain every ingredient. Before replacing something, consider what it contributes to the dish: flavor, acidity, texture, moisture, or structure. Some substitutions are straightforward while others noticeably change the result. Check the individual recipe and use the What If and Recipe Rescue sections when available.",
        },
        {
          title: "A practical pantry starting list",
          body:
            "If you are building an Egyptian-inspired pantry from scratch, start with fava beans or lentils, rice, onions, garlic, cumin, coriander, olive oil, vinegar, and a few shelf-stable vegetables or tomato products. Add fresh lemons, herbs, tomatoes, and cucumbers when shopping. With these basics, you can create a range of breakfasts, soups, salads, grain dishes, and everyday meals without keeping dozens of specialty ingredients on hand.",
        },
      ],
    },
    ar: {
      title: "أساسيات خزانة المطبخ المصري",
      intro:
        "لا تحتاج خزانة المطبخ المصري إلى أن تكون معقدة. يمكن لمجموعة صغيرة من الفول والبقوليات والحبوب والتوابل والمكونات العطرية والزيوت والمكونات التي يمكن حفظها لفترة طويلة أن توفر أساسًا للكثير من الوجبات اليومية. في Healthy Mezze نركز على المكونات العملية التي نستخدمها فعلًا عند تحضير الطعام المصري المألوف في المنزل أو في مقهانا.",
      sections: [
        {
          title: "خزانة المطبخ المصري اليومية",
          body:
            "يُعد الفول والعدس والأرز والحبوب والبصل والثوم والكمون والكزبرة وزيت الزيتون والخل والمكونات المعتمدة على الطماطم من الأساسيات المفيدة في الطبخ المصري. وتكمل الخضروات والأعشاب الطازجة الكثير من الوجبات، لكن الاحتفاظ بهذه المكونات الأساسية يجعل تحضير طعام مشبع أسهل دون الحاجة إلى قائمة مشتريات معقدة.",
        },
        {
          title: "الفول والبقوليات",
          body:
            "تدخل البقوليات في الكثير من الوجبات العملية. يعتمد الفول المدمس على الفول كمكون أساسي، بينما يمكن أن يتحول العدس إلى شوربات وأطباق مشبعة أخرى. ويساعد الاحتفاظ بالبقوليات المجففة أو الجاهزة على منحك مرونة أكبر عند تخطيط الوجبات، كما يجعل من السهل بناء طبق حول مكون مشبع وغير مكلف.",
        },
        {
          title: "الأرز والحبوب على المائدة المصرية",
          body:
            "يمكن أن يكون الأرز والحبوب أساسًا للوجبة أو عنصرًا مكملًا لها. ويظهر في الطبخ المصري أيضًا كيف يمكن الجمع بين الحبوب والبقوليات والخضروات والصلصات والتتبيلات لصنع أطعمة ذات قوامات مختلفة. وعند تحضير أطباق الحبوب، نهتم بالقوام بدلًا من التعامل مع وقت الطهي وحده باعتباره المقياس الوحيد لتمام النضج.",
        },
        {
          title: "التوابل وبناء النكهة",
          body:
            "يُعد الكمون والكزبرة والثوم والبصل والفلفل والليمون والخل من المكونات المفيدة لبناء النكهة. ويمكن استخدامها منفردة أو مجتمعة للحصول على نتائج مختلفة جدًا من مكونات بسيطة. نفضل إضافة التتبيل تدريجيًا والتذوق أثناء الطبخ حتى لا تطغى نكهة قوية على بقية مكونات الطبق.",
        },
        {
          title: "الزيت والحموضة والتوازن",
          body:
            "يضيف الزيت الغنى إلى الطعام، بينما يمنح الليمون والخل حموضة تساعد على إبراز النكهات. وتختلف الكمية المناسبة حسب بقية المكونات وطريقة التحضير. وعند إعداد تتبيلة أو تتبيل طبق مطبوخ، نخلط ونتذوق قبل أن نقرر ما إذا كان يحتاج إلى المزيد من الملح أو الحموضة أو الزيت أو التوابل.",
        },
        {
          title: "بناء خزانة مطبخ تدعم الطبخ الصحي",
          body:
            "يمكن لخزانة المطبخ أن تساعد على الطبخ بطريقة أكثر توازنًا عندما تجعل البقوليات والحبوب والخضروات والأعشاب والتتبيلات البسيطة خيارات سهلة ومتاحة. وغالبًا ما نفضل استخدام الفرن عندما يناسب الوصفة لأنه قد يكون بديلًا عمليًا للقلي. وهذا لا يعني ضرورة تغيير كل طبق تقليدي، بل فهم المواضع التي يكون فيها التعديل العملي مناسبًا للوصفة نفسها.",
        },
        {
          title: "البدائل عند عدم توفر أحد المكونات",
          body:
            "حتى خزانة المطبخ الجيدة لن تحتوي دائمًا على كل المكونات. قبل استبدال أي مكون، فكر في الدور الذي يؤديه داخل الطبق: النكهة أو الحموضة أو القوام أو الرطوبة أو البنية. بعض البدائل بسيطة، بينما قد تغير بدائل أخرى النتيجة بشكل واضح. راجع الوصفة نفسها واستخدم أقسام What If وRecipe Rescue عندما تكون متاحة.",
        },
        {
          title: "قائمة عملية للبدء",
          body:
            "إذا كنت تبني خزانة مطبخ مستوحاة من الطبخ المصري من الصفر، ابدأ بالفول أو العدس والأرز والبصل والثوم والكمون والكزبرة وزيت الزيتون والخل وبعض المكونات التي يمكن حفظها مثل منتجات الطماطم. وأضف الليمون والأعشاب والطماطم والخيار الطازج عند التسوق. بهذه الأساسيات يمكنك تحضير مجموعة متنوعة من الإفطار والشوربات والسلطات وأطباق الحبوب والوجبات اليومية دون الحاجة إلى الاحتفاظ بعشرات المكونات المتخصصة.",
        },
      ],
    },
  },
  "lebanese-pantry-essentials": {
    en: {
      title: "Lebanese Pantry Essentials",
      intro:
        "A Lebanese-inspired pantry can be built around a practical group of grains, legumes, herbs, spices, tahini, olive oil, and other everyday ingredients. These basics make it easier to prepare dips, salads, grains, soups, and shared mezze without keeping an enormous collection of specialty products.",
      sections: [
        {
          title: "The foundation of a Lebanese pantry",
          body:
            "Chickpeas, lentils, bulgur, rice, tahini, olive oil, garlic, onions, lemon, vinegar, and common herbs and spices are useful foundations for Lebanese cooking. Fresh vegetables and herbs are added when needed, but these pantry staples can support many everyday preparations.",
        },
        {
          title: "Chickpeas and other legumes",
          body:
            "Chickpeas are particularly useful because they can become hummus, salads, bowls, and other dishes. Lentils are another practical staple for soups and grain-based meals. Keeping legumes available gives you a simple way to add substance to a meal without depending on a large amount of meat.",
        },
        {
          title: "Bulgur, rice, and grains",
          body:
            "Bulgur and rice can provide texture and substance to salads, side dishes, and complete meals. When cooking grains, we pay attention to their final texture and how they will work with the other ingredients rather than relying only on a fixed cooking time. The amount of liquid and the starting temperature can affect the result.",
        },
        {
          title: "Tahini and olive oil",
          body:
            "Tahini is a useful ingredient for hummus, sauces, dressings, and other preparations, while olive oil can be used during cooking or as a finishing ingredient. When working with tahini, adding liquid gradually helps control the texture. Lemon, garlic, and salt can then be adjusted according to the final balance you want.",
        },
        {
          title: "Herbs, spices, and acidity",
          body:
            "Parsley, mint, garlic, lemon, sumac, za'atar, cumin, and other seasonings can give simple ingredients a distinctive character. Acidity is especially useful when balancing creamy or rich foods. We prefer tasting as we go because the amount of lemon, salt, herbs, or spices needed can change depending on the ingredients.",
        },
        {
          title: "Building a pantry for practical cooking",
          body:
            "A useful pantry should make everyday cooking easier rather than create more work. We like keeping ingredients that can be combined in several ways, allowing the same staples to support breakfast, salads, soups, dips, mezze, and main dishes. This also makes it easier to cook when there is limited time.",
        },
        {
          title: "Healthier choices and adaptations",
          body:
            "A pantry stocked with legumes, grains, vegetables, herbs, and simple seasonings can support a variety of balanced meals. When a recipe allows it, we often prefer oven cooking as a practical alternative to frying. We do not treat every traditional preparation as something that must be changed; instead, we consider whether an adaptation improves practicality or fits the way we want to cook.",
        },
        {
          title: "Substitutions when your pantry is missing something",
          body:
            "Before replacing an ingredient, think about its purpose in the recipe. A substitute may provide a similar flavor but a different texture, or it may change the character of the entire dish. Check the individual recipe for suggested alternatives and use the What If and Recipe Rescue sections when available before making a change.",
        },
      ],
    },
    ar: {
      title: "أساسيات خزانة المطبخ اللبناني",
      intro:
        "يمكن بناء خزانة مطبخ مستوحاة من المطبخ اللبناني حول مجموعة عملية من الحبوب والبقوليات والأعشاب والتوابل والطحينة وزيت الزيتون وغيرها من المكونات اليومية. تساعد هذه الأساسيات على تحضير الغموس والسلطات والحبوب والشوربات والمازات المتنوعة دون الحاجة إلى الاحتفاظ بمجموعة ضخمة من المنتجات المتخصصة.",
      sections: [
        {
          title: "أساسيات خزانة المطبخ اللبناني",
          body:
            "يُعد الحمص والعدس والبرغل والأرز والطحينة وزيت الزيتون والثوم والبصل والليمون والخل ومجموعة من الأعشاب والتوابل من الأساسيات المفيدة في الطبخ اللبناني. ويمكن إضافة الخضروات والأعشاب الطازجة عند الحاجة، بينما تساعد هذه المكونات المخزنة على تحضير الكثير من الأطباق اليومية.",
        },
        {
          title: "الحمص والبقوليات الأخرى",
          body:
            "يُعد الحمص مكونًا عمليًا بشكل خاص لأنه يمكن استخدامه في الحمص والسلطات والأطباق المختلفة. كما يُعد العدس من المكونات المفيدة للشوربات والوجبات المعتمدة على الحبوب. ويساعد الاحتفاظ بالبقوليات على إضافة مكونات مشبعة إلى الوجبة دون الاعتماد على كمية كبيرة من اللحوم.",
        },
        {
          title: "البرغل والأرز والحبوب",
          body:
            "يمكن أن يمنح البرغل والأرز السلطات والأطباق الجانبية والوجبات الكاملة قوامًا وشبعًا. وعند طهي الحبوب، نهتم بالقوام النهائي وكيف سيتناسب مع بقية المكونات بدلًا من الاعتماد على وقت طهي ثابت فقط. كما يمكن لكمية السائل ودرجة حرارة المكونات عند البدء أن تؤثرا في النتيجة.",
        },
        {
          title: "الطحينة وزيت الزيتون",
          body:
            "تُعد الطحينة مكونًا مفيدًا للحمص والصلصات والتتبيلات وغيرها من التحضيرات، بينما يمكن استخدام زيت الزيتون أثناء الطهي أو كلمسة نهائية. وعند استخدام الطحينة، تساعد إضافة السائل تدريجيًا على التحكم في القوام. وبعد ذلك يمكن تعديل الليمون والثوم والملح حسب التوازن النهائي الذي تفضله.",
        },
        {
          title: "الأعشاب والتوابل والحموضة",
          body:
            "يمكن للبقدونس والنعناع والثوم والليمون والسماق والزعتر والكمون وغيرها من التوابل أن تمنح المكونات البسيطة شخصية مميزة. وتفيد الحموضة بشكل خاص في موازنة الأطعمة الكريمية أو الغنية. نفضل التذوق أثناء التحضير لأن كمية الليمون أو الملح أو الأعشاب أو التوابل المطلوبة قد تختلف حسب المكونات.",
        },
        {
          title: "بناء خزانة مطبخ للطبخ العملي",
          body:
            "من الأفضل أن تجعل خزانة المطبخ عملية الطبخ اليومية أسهل بدلًا من أن تزيدها تعقيدًا. نحب الاحتفاظ بمكونات يمكن جمعها بطرق متعددة، بحيث تدعم المكونات الأساسية نفسها الإفطار والسلطات والشوربات والغموس والمازات والأطباق الرئيسية. وهذا يجعل الطبخ أسهل عندما يكون الوقت محدودًا.",
        },
        {
          title: "الخيارات الصحية والتعديلات العملية",
          body:
            "يمكن لخزانة مليئة بالبقوليات والحبوب والخضروات والأعشاب والتتبيلات البسيطة أن تدعم مجموعة متنوعة من الوجبات المتوازنة. وعندما تسمح الوصفة، نفضل غالبًا استخدام الفرن كبديل عملي للقلي. ولا نتعامل مع كل تحضير تقليدي على أنه يحتاج إلى تغيير، بل ننظر إلى ما إذا كان التعديل مناسبًا لطريقة الطبخ التي نريدها أو يجعل الوصفة أكثر عملية.",
        },
        {
          title: "البدائل عندما ينقص أحد مكونات خزانة مطبخك",
          body:
            "قبل استبدال أحد المكونات، فكر في وظيفته داخل الوصفة. قد يقدم البديل نكهة مشابهة لكنه يختلف في القوام، أو قد يغير شخصية الطبق بالكامل. راجع الوصفة نفسها لمعرفة البدائل المقترحة واستخدم أقسام What If وRecipe Rescue عندما تكون متاحة قبل إجراء أي تغيير.",
        },
      ],
    },
  },
  "mediterranean-herbs-spices-guide": {
    en: {
      title: "Mediterranean Herbs & Spices Guide",
      intro:
        "Herbs and spices are one of the easiest ways to build flavor from simple ingredients. Across Egyptian, Lebanese, and wider Mediterranean cooking, ingredients such as cumin, coriander, parsley, mint, za'atar, sumac, garlic, and lemon can completely change a dish. At Healthy Mezze, we use them as practical tools for creating balanced food rather than simply adding seasoning by habit.",
      sections: [
        {
          title: "Why herbs and spices matter",
          body:
            "A small amount of seasoning can change the aroma, warmth, freshness, acidity, or depth of a dish. The same basic ingredients can taste very different depending on how they are seasoned. We prefer adding strong seasonings gradually and tasting as we cook so that they support the main ingredients instead of overpowering them.",
        },
        {
          title: "Cumin and coriander",
          body:
            "Cumin brings a warm, earthy character that works especially well with beans, lentils, vegetables, and savory dishes. Coriander can provide a lighter citrus-like spice note. Both are useful in Egyptian-inspired cooking and can be combined with garlic, lemon, or chili depending on the dish.",
        },
        {
          title: "Parsley and mint",
          body:
            "Fresh herbs can bring a different kind of freshness than dried spices. Parsley is useful in salads, grain dishes, dips, and garnishes, while mint can add a cooling herbal note. When using fresh herbs, we consider when they are added because keeping some herbs fresh until serving can preserve their aroma and texture.",
        },
        {
          title: "Za'atar and sumac",
          body:
            "Za'atar and sumac are especially useful for adding distinctive flavor without complicated preparation. Za'atar can provide an earthy herbal and savory character, while sumac contributes a tart, lemon-like acidity. Both can work as finishing seasonings, but their role depends on the recipe and the other flavors already present.",
        },
        {
          title: "Garlic, lemon, and acidity",
          body:
            "Garlic and lemon are important flavor builders in many dishes across the region. Garlic can become softer and sweeter when cooked, while raw garlic has a sharper character. Lemon can brighten vegetables, legumes, salads, sauces, and grilled foods. We usually add acidity gradually and taste it rather than adding a large amount at once.",
        },
        {
          title: "How we balance seasoning",
          body:
            "Our approach is simple: season, taste, and adjust. If a dish feels flat, it may need salt, acidity, herbs, spice, or another supporting flavor rather than simply more of the strongest seasoning. For dressings and dips, mixing everything first and tasting before serving helps us decide whether the balance needs another adjustment.",
        },
        {
          title: "Fresh versus dried herbs",
          body:
            "Fresh and dried herbs are not always interchangeable in equal amounts. Fresh herbs can contribute moisture, texture, and a brighter aroma, while dried herbs are concentrated and convenient for cooking. When substituting one for another, consider how much flavor and moisture the recipe needs and check the individual recipe for guidance.",
        },
        {
          title: "Building your own seasoning style",
          body:
            "Once you understand what each herb or spice contributes, you can become more confident making small adjustments. Start with the recipe's intended balance, taste the food, and then make one change at a time. A little extra lemon, cumin, sumac, mint, or chili can move a dish in a different direction without requiring a completely new recipe.",
        },
      ],
    },
    ar: {
      title: "دليل الأعشاب والتوابل المتوسطية",
      intro:
        "تُعد الأعشاب والتوابل من أسهل الطرق لبناء النكهة انطلاقًا من مكونات بسيطة. ففي الطبخ المصري واللبناني وطبخ منطقة البحر المتوسط بشكل أوسع، يمكن لمكونات مثل الكمون والكزبرة والبقدونس والنعناع والزعتر والسماق والثوم والليمون أن تغير شخصية الطبق بالكامل. في Healthy Mezze نستخدمها كأدوات عملية لصنع طعام متوازن، وليس فقط كتوابل تضاف بشكل عشوائي.",
      sections: [
        {
          title: "لماذا تهم الأعشاب والتوابل؟",
          body:
            "يمكن لكمية صغيرة من التوابل أن تغير رائحة الطعام ودفئه وانتعاشه وحموضته وعمق نكهته. ويمكن للمكونات الأساسية نفسها أن تعطي نتائج مختلفة جدًا حسب طريقة تتبيلها. نفضل إضافة التوابل القوية تدريجيًا والتذوق أثناء الطبخ حتى تدعم المكونات الأساسية بدلًا من أن تطغى عليها.",
        },
        {
          title: "الكمون والكزبرة",
          body:
            "يمنح الكمون نكهة دافئة وترابية تتناسب بشكل خاص مع الفول والعدس والخضروات والأطباق المالحة. ويمكن للكزبرة أن تضيف لمسة توابل أخف ذات طابع حمضي. ويُستخدم كلاهما في الكثير من الأطباق المستوحاة من المطبخ المصري، ويمكن جمعهما مع الثوم أو الليمون أو الفلفل حسب الطبق.",
        },
        {
          title: "البقدونس والنعناع",
          body:
            "يمكن للأعشاب الطازجة أن تضيف نوعًا مختلفًا من الانتعاش مقارنة بالتوابل المجففة. يفيد البقدونس في السلطات وأطباق الحبوب والغموس والتزيين، بينما يضيف النعناع نكهة عشبية منعشة. وعند استخدام الأعشاب الطازجة، نهتم بوقت إضافتها لأن الاحتفاظ ببعضها طازجًا حتى التقديم قد يحافظ على رائحتها وقوامها.",
        },
        {
          title: "الزعتر والسماق",
          body:
            "يُعد الزعتر والسماق من المكونات المفيدة لإضافة نكهة مميزة دون الحاجة إلى تحضير معقد. يمكن للزعتر أن يمنح نكهة عشبية وترابية ومالحة، بينما يضيف السماق حموضة تشبه نكهة الليمون. ويمكن استخدامهما كتوابل نهائية، لكن دور كل منهما يعتمد على الوصفة وبقية النكهات الموجودة فيها.",
        },
        {
          title: "الثوم والليمون والحموضة",
          body:
            "يُعد الثوم والليمون من العناصر المهمة لبناء النكهة في الكثير من الأطباق في المنطقة. يمكن للثوم أن يصبح أكثر نعومة وحلاوة عند طهيه، بينما يكون الثوم النيئ أكثر حدة. ويمكن للليمون أن ينعش الخضروات والبقوليات والسلطات والصلصات والأطعمة المشوية. وعادةً نضيف الحموضة تدريجيًا ونتذوقها بدلًا من إضافة كمية كبيرة دفعة واحدة.",
        },
        {
          title: "كيف نوازن التتبيل؟",
          body:
            "طريقتنا بسيطة: تبّل، تذوق، ثم عدّل. إذا كان الطبق يبدو باهتًا، فقد يحتاج إلى الملح أو الحموضة أو الأعشاب أو التوابل أو نكهة مساندة أخرى، وليس بالضرورة إلى المزيد من أقوى توابل مستخدمة. وعند إعداد التتبيلات والغموس، يساعد خلط المكونات أولًا ثم تذوقها قبل التقديم على معرفة ما إذا كانت تحتاج إلى تعديل آخر.",
        },
        {
          title: "الأعشاب الطازجة مقابل المجففة",
          body:
            "لا يمكن دائمًا استبدال الأعشاب الطازجة بالمجففة بنفس الكمية. قد تضيف الأعشاب الطازجة الرطوبة والقوام ورائحة أكثر إشراقًا، بينما تكون الأعشاب المجففة أكثر تركيزًا وأسهل في الاستخدام أثناء الطهي. وعند استبدال أحدهما بالآخر، فكر في كمية النكهة والرطوبة التي تحتاجها الوصفة وراجع تعليمات الوصفة نفسها عند توفر إرشادات.",
        },
        {
          title: "بناء أسلوبك الخاص في التتبيل",
          body:
            "عندما تفهم ما تضيفه كل عشبة أو بهار، تصبح أكثر ثقة في إجراء تعديلات صغيرة. ابدأ بالتوازن المقصود في الوصفة، تذوق الطعام، ثم أجرِ تغييرًا واحدًا في كل مرة. يمكن لكمية إضافية صغيرة من الليمون أو الكمون أو السماق أو النعناع أو الفلفل أن تنقل الطبق إلى اتجاه مختلف دون الحاجة إلى تغيير الوصفة بالكامل.",
        },
      ],
    },
  },
  "tahini-guide": {
    en: {
      title: "Tahini Guide",
      intro:
        "Tahini is one of the most useful ingredients in the Healthy Mezze pantry. Made from ground sesame seeds, it can become a creamy sauce, dip, dressing, or finishing ingredient and works especially well with lemon, garlic, vegetables, legumes, and grilled foods. The key is learning how to control its texture and balance its flavor.",
      sections: [
        {
          title: "What is tahini?",
          body:
            "Tahini is a paste made from ground sesame seeds. Its rich, nutty character makes it useful in both savory dishes and some sweets. In Egyptian, Lebanese, and wider Eastern Mediterranean cooking, tahini is commonly paired with ingredients such as lemon, garlic, chickpeas, vegetables, and grilled foods.",
        },
        {
          title: "The basic tahini sauce",
          body:
            "A simple tahini sauce can be built from tahini, lemon, garlic, salt, and liquid. The important part is adding the liquid gradually and mixing as you go. Tahini can thicken noticeably when liquid is first introduced, then become smoother as more liquid is incorporated. This makes gradual mixing much easier to control.",
        },
        {
          title: "How we balance tahini",
          body:
            "Tahini has a naturally rich flavor, so acidity is useful for creating balance. We usually add lemon gradually, mix, and taste before deciding whether more is needed. Salt can bring the sesame flavor forward, while garlic can add another layer of intensity. The final balance depends on what the sauce will be served with.",
        },
        {
          title: "Controlling the texture",
          body:
            "The amount of liquid determines much of the final texture. A thicker sauce can work well as a dip, while a thinner consistency may be easier to drizzle over vegetables, salads, bowls, or grilled food. Add water or another recipe-specified liquid a little at a time rather than adding a large amount immediately.",
        },
        {
          title: "Tahini with vegetables and legumes",
          body:
            "Tahini pairs naturally with roasted or grilled vegetables and legumes. It can add richness to chickpeas, cauliflower, eggplant, salads, and grain-based dishes. Lemon and herbs can keep the final dish tasting fresh while the tahini provides a creamy element.",
        },
        {
          title: "Using tahini in healthier meals",
          body:
            "Tahini can be part of a varied meal alongside vegetables, legumes, grains, and other ingredients. We focus on how the whole dish comes together rather than treating one ingredient as automatically healthy or unhealthy. Using tahini as a sauce or dressing can also make simple vegetables and legumes more enjoyable.",
        },
        {
          title: "Common tahini mistakes",
          body:
            "Adding too much liquid at once can make texture harder to control, while adding too much lemon or garlic before tasting can make the sauce overly sharp. Another common mistake is judging the sauce before it has been mixed thoroughly. We recommend mixing well, tasting, and adjusting one ingredient at a time.",
        },
        {
          title: "How to make tahini your own",
          body:
            "Once you understand the basic balance, tahini is easy to adapt. You can make it more lemony, more garlicky, thinner for drizzling, or thicker for dipping. The important step is to make small adjustments and taste after each one. Our What If and Recipe Rescue sections can also help when you want to adapt a recipe around the ingredients you have.",
        },
      ],
    },
    ar: {
      title: "دليل الطحينة",
      intro:
        "الطحينة من أكثر المكونات فائدة في خزانة Healthy Mezze. تُصنع من بذور السمسم المطحونة، ويمكن تحويلها إلى صلصة كريمية أو غموس أو تتبيلة أو استخدامها كلمسة نهائية، كما تتناسب بشكل خاص مع الليمون والثوم والخضروات والبقوليات والأطعمة المشوية. والمفتاح هو تعلم كيفية التحكم في قوامها وموازنة نكهتها.",
      sections: [
        {
          title: "ما هي الطحينة؟",
          body:
            "الطحينة هي معجون يُصنع من بذور السمسم المطحونة. وتتميز بنكهة غنية تشبه المكسرات، مما يجعلها مفيدة في الأطباق المالحة وبعض الحلويات. وفي الطبخ المصري واللبناني وطبخ منطقة شرق المتوسط بشكل أوسع، غالبًا ما تُجمع الطحينة مع مكونات مثل الليمون والثوم والحمص والخضروات والأطعمة المشوية.",
        },
        {
          title: "صلصة الطحينة الأساسية",
          body:
            "يمكن تحضير صلصة طحينة بسيطة من الطحينة والليمون والثوم والملح والسائل. والأهم هو إضافة السائل تدريجيًا مع الخلط. قد تزداد سماكة الطحينة بشكل واضح عند إضافة السائل في البداية، ثم تصبح أكثر نعومة مع دمج كمية إضافية. لذلك فإن الإضافة التدريجية تجعل التحكم بالقوام أسهل.",
        },
        {
          title: "كيف نوازن نكهة الطحينة",
          body:
            "تتميز الطحينة بنكهة غنية بطبيعتها، لذلك تساعد الحموضة على تحقيق التوازن. نضيف الليمون عادةً تدريجيًا ثم نخلط ونتذوق قبل تحديد الحاجة إلى المزيد. ويمكن للملح أن يبرز نكهة السمسم، بينما يضيف الثوم طبقة أخرى من القوة. ويعتمد التوازن النهائي على الطعام الذي ستقدم معه الصلصة.",
        },
        {
          title: "التحكم في القوام",
          body:
            "تحدد كمية السائل جزءًا كبيرًا من القوام النهائي. يمكن أن يكون القوام السميك مناسبًا للغموس، بينما يكون القوام الأخف أسهل في توزيعه فوق الخضروات أو السلطات أو الأطباق المختلفة أو الأطعمة المشوية. أضف الماء أو السائل المحدد في الوصفة تدريجيًا بدلًا من إضافة كمية كبيرة دفعة واحدة.",
        },
        {
          title: "الطحينة مع الخضروات والبقوليات",
          body:
            "تتناسب الطحينة بشكل طبيعي مع الخضروات المشوية أو المحمصة والبقوليات. ويمكنها إضافة غنى إلى الحمص والقرنبيط والباذنجان والسلطات وأطباق الحبوب. ويساعد الليمون والأعشاب على الحفاظ على إحساس منعش في الطبق بينما تضيف الطحينة عنصرًا كريميًا.",
        },
        {
          title: "استخدام الطحينة في وجبات أكثر توازنًا",
          body:
            "يمكن أن تكون الطحينة جزءًا من وجبة متنوعة إلى جانب الخضروات والبقوليات والحبوب وغيرها من المكونات. نحن نركز على كيفية اجتماع الطبق كاملًا بدلًا من اعتبار مكون واحد صحيًا أو غير صحي بشكل مطلق. كما يمكن لاستخدام الطحينة كصلصة أو تتبيلة أن يجعل الخضروات والبقوليات البسيطة أكثر متعة.",
        },
        {
          title: "أخطاء شائعة عند تحضير الطحينة",
          body:
            "قد تجعل إضافة كمية كبيرة من السائل دفعة واحدة التحكم في القوام أكثر صعوبة، كما أن إضافة الكثير من الليمون أو الثوم قبل التذوق قد تجعل الصلصة حادة أكثر من اللازم. ومن الأخطاء أيضًا الحكم على الصلصة قبل خلطها جيدًا. ننصح بالخلط جيدًا ثم التذوق وتعديل مكون واحد في كل مرة.",
        },
        {
          title: "كيف تجعل الطحينة مناسبة لذوقك؟",
          body:
            "عندما تفهم التوازن الأساسي، يصبح تعديل الطحينة سهلًا. يمكنك جعلها أكثر حموضة بالليمون أو أكثر قوة بالثوم، أو تخفيفها لتصبح مناسبة للتوزيع، أو جعلها أكثر سماكة للغموس. المهم هو إجراء تعديلات صغيرة والتذوق بعد كل تعديل. ويمكن لأقسام What If وRecipe Rescue أن تساعدك أيضًا عندما تريد تعديل وصفة حسب المكونات المتوفرة لديك.",
        },
      ],
    },
  },
  "zaatar-guide": {
    en: {
      title: "Za'atar Guide",
      intro:
        "Za'atar is one of the most recognizable seasoning blends in Eastern Mediterranean cooking. Its herbal, savory, and slightly tangy character makes it useful with bread, vegetables, yogurt, salads, nuts, and other everyday foods. At Healthy Mezze, we use za'atar as a simple way to add flavor while paying attention to how it balances with the rest of the dish.",
      sections: [
        {
          title: "What is za'atar?",
          body:
            "Za'atar commonly refers to a seasoning blend associated with Levantine and wider Eastern Mediterranean cooking. The exact blend can vary, but it often includes dried herbs, sesame seeds, and a tart ingredient such as sumac. Different blends can therefore have noticeably different flavor, aroma, and texture.",
        },
        {
          title: "How za'atar is used",
          body:
            "Za'atar can be sprinkled over bread, mixed with olive oil, added to yogurt or labneh, used with vegetables, or incorporated into salads and other dishes. Because it already contains several flavors, a small amount can have a noticeable effect. We prefer starting modestly and tasting before adding more.",
        },
        {
          title: "Za'atar and olive oil",
          body:
            "One of the simplest combinations is za'atar with olive oil. The oil helps carry the seasoning and creates a spreadable mixture that works well with bread and other foods. The balance depends on the blend and the amount of oil, so mixing gradually gives you more control over the final texture.",
        },
        {
          title: "Za'atar with yogurt and labneh",
          body:
            "The herbal and tangy character of za'atar pairs naturally with creamy yogurt and labneh. A drizzle of olive oil can add richness, while vegetables or bread provide contrast. This combination can turn a few simple ingredients into an easy breakfast, snack, or mezze component.",
        },
        {
          title: "Using za'atar with vegetables and salads",
          body:
            "Za'atar can add depth to roasted vegetables, fresh vegetables, salads, and grain-based dishes. Its herbal and savory notes can work particularly well when balanced with lemon or another acidic ingredient. As always, we recommend tasting the finished combination before deciding whether it needs more seasoning.",
        },
        {
          title: "Understanding different za'atar blends",
          body:
            "Not every za'atar blend tastes the same. One mixture may be more herbal, another more tart, and another may contain more sesame. When following a recipe, consider the blend you have rather than assuming every product will behave identically. You may need to adjust the amount slightly after tasting.",
        },
        {
          title: "Za'atar in a practical kitchen",
          body:
            "Keeping za'atar available is useful because it can quickly add character to simple ingredients. It can help turn bread, vegetables, yogurt, nuts, or a basic grain dish into something more flavorful without requiring a long preparation. Store it properly and use the aroma and taste as a guide to its freshness.",
        },
        {
          title: "How to make za'atar work for your taste",
          body:
            "If you prefer a stronger herbal flavor, you can gradually increase the amount. If the blend tastes too sharp, pairing it with creamy ingredients, olive oil, or other mild foods can soften the overall impression. Our What If and Recipe Rescue sections can also help when you want to adapt a recipe around the ingredients already in your kitchen.",
        },
      ],
    },
    ar: {
      title: "دليل الزعتر",
      intro:
        "يُعد الزعتر من أشهر خلطات التتبيل في مطبخ بلاد الشام وشرق المتوسط. وتجعله نكهته العشبية والمالحة والحامضة قليلًا مناسبًا للخبز والخضروات والزبادي والسلطات والمكسرات وغيرها من الأطعمة اليومية. في Healthy Mezze نستخدم الزعتر كطريقة بسيطة لإضافة النكهة مع الانتباه إلى توازنه مع بقية مكونات الطبق.",
      sections: [
        {
          title: "ما هو الزعتر؟",
          body:
            "تشير كلمة الزعتر غالبًا إلى خلطة توابل مرتبطة بمطبخ بلاد الشام وطبخ منطقة شرق المتوسط بشكل أوسع. وقد تختلف الخلطة من مكان إلى آخر، لكنها غالبًا ما تضم أعشابًا مجففة وبذور السمسم ومكونًا حامضًا مثل السماق. لذلك يمكن أن تختلف الخلطات في النكهة والرائحة والقوام.",
        },
        {
          title: "كيف يُستخدم الزعتر؟",
          body:
            "يمكن رش الزعتر فوق الخبز أو خلطه بزيت الزيتون أو إضافته إلى الزبادي أو اللبنة أو استخدامه مع الخضروات والسلطات وغيرها من الأطباق. ولأنه يحتوي أصلًا على عدة نكهات، يمكن لكمية صغيرة منه أن تكون واضحة في الطبق. نفضل البدء بكمية معتدلة ثم التذوق قبل إضافة المزيد.",
        },
        {
          title: "الزعتر وزيت الزيتون",
          body:
            "من أبسط التركيبات الجمع بين الزعتر وزيت الزيتون. يساعد الزيت على حمل التوابل ويكوّن خليطًا قابلًا للدهن يمكن تقديمه مع الخبز وغيرها من الأطعمة. ويعتمد التوازن على نوع الخلطة وكمية الزيت، لذلك يساعد الخلط التدريجي على التحكم بشكل أفضل في القوام النهائي.",
        },
        {
          title: "الزعتر مع الزبادي واللبنة",
          body:
            "تتناسب النكهة العشبية والحامضة للزعتر بشكل طبيعي مع الزبادي واللبنة الكريمية. ويمكن لرشة من زيت الزيتون أن تضيف الغنى، بينما توفر الخضروات أو الخبز تباينًا في القوام. ويمكن لهذا الجمع أن يحول بعض المكونات البسيطة إلى إفطار أو وجبة خفيفة أو عنصر سهل على مائدة المازات.",
        },
        {
          title: "استخدام الزعتر مع الخضروات والسلطات",
          body:
            "يمكن للزعتر أن يضيف عمقًا إلى الخضروات المشوية والخضروات الطازجة والسلطات وأطباق الحبوب. وتعمل نكهته العشبية والمالحة بشكل جيد عندما تتوازن مع الليمون أو مكون حمضي آخر. وكالعادة، ننصح بتذوق التركيبة النهائية قبل تحديد ما إذا كانت تحتاج إلى المزيد من التتبيل.",
        },
        {
          title: "فهم اختلاف خلطات الزعتر",
          body:
            "ليست كل خلطات الزعتر متطابقة في النكهة. قد تكون إحدى الخلطات أكثر عشبية، بينما تكون أخرى أكثر حموضة، وقد تحتوي خلطة ثالثة على كمية أكبر من السمسم. عند اتباع وصفة، ضع في اعتبارك الخلطة التي لديك بدلًا من افتراض أن كل المنتجات ستعطي النتيجة نفسها. وقد تحتاج إلى تعديل الكمية قليلًا بعد التذوق.",
        },
        {
          title: "الزعتر في المطبخ العملي",
          body:
            "من المفيد الاحتفاظ بالزعتر لأنه يستطيع إضافة شخصية إلى المكونات البسيطة بسرعة. ويمكنه تحويل الخبز أو الخضروات أو الزبادي أو المكسرات أو طبق حبوب بسيط إلى طعام أكثر نكهة دون الحاجة إلى تحضير طويل. احفظه بطريقة مناسبة واستخدم الرائحة والطعم كدليل على جودته.",
        },
        {
          title: "كيف تجعل الزعتر مناسبًا لذوقك؟",
          body:
            "إذا كنت تفضل نكهة عشبية أقوى، يمكنك زيادة الكمية تدريجيًا. وإذا كانت الخلطة حادة أكثر من اللازم، فإن تقديمها مع مكونات كريمية أو زيت الزيتون أو أطعمة خفيفة النكهة يمكن أن يخفف الانطباع العام. ويمكن لأقسام What If وRecipe Rescue أن تساعدك أيضًا عندما تريد تعديل وصفة حسب المكونات الموجودة لديك.",
        },
      ],
    },
  },
  "sumac-guide": {
    en: {
      title: "Sumac Guide",
      intro:
        "Sumac is a distinctive Eastern Mediterranean seasoning known for its tart, citrus-like character. It can brighten salads, onions, vegetables, dips, grilled foods, and other simple dishes without requiring complicated preparation. At Healthy Mezze, we use sumac thoughtfully, tasting as we go so its acidity supports rather than overwhelms the other flavors.",
      sections: [
        {
          title: "What is sumac?",
          body:
            "Sumac is a reddish-purple spice with a naturally tart flavor. It is widely associated with Levantine and Eastern Mediterranean cooking and is often used to add acidity and a fresh, citrus-like note. Its flavor makes it useful when you want brightness without adding more liquid.",
        },
        {
          title: "How sumac is used",
          body:
            "Sumac can be sprinkled over salads, onions, vegetables, hummus, yogurt, grilled foods, and other dishes. It can be used during preparation or added near the end as a finishing seasoning. Because its flavor is naturally noticeable, we prefer starting with a small amount and adjusting after tasting.",
        },
        {
          title: "Sumac and onions",
          body:
            "Sumac pairs especially well with sliced onions. Its tartness can balance the sharpness of the onion and create a simple side or garnish. A little lemon, parsley, olive oil, or another fresh ingredient can complement the combination, depending on how it is being served.",
        },
        {
          title: "Sumac in salads",
          body:
            "Fresh salads can benefit from the acidity of sumac, particularly when vegetables, herbs, and grains need a brighter flavor. Sumac can work alongside lemon or sometimes provide part of the acidic element itself. Taste the finished salad before adding more so that the seasoning remains balanced.",
        },
        {
          title: "Sumac with hummus and creamy foods",
          body:
            "The tartness of sumac provides contrast to creamy foods such as hummus, yogurt, and tahini-based preparations. A small sprinkle can make a rich dip taste brighter without changing its basic texture. Olive oil and fresh herbs can be used alongside it when they suit the dish.",
        },
        {
          title: "Using sumac with grilled and roasted foods",
          body:
            "Sumac can provide a fresh finishing note for grilled meats, chicken, vegetables, and roasted dishes. Adding it after cooking can preserve its distinctive tart character. The amount needed depends on the seasoning already used, so tasting the finished food is the easiest way to decide how much more is appropriate.",
        },
        {
          title: "Sumac versus lemon",
          body:
            "Sumac and lemon can both contribute acidity, but they do not behave exactly the same way. Lemon adds liquid as well as acidity, while sumac adds a dry seasoning with a distinctive tart flavor. They can sometimes be used together, but the balance should be adjusted rather than assuming one is a direct replacement for the other.",
        },
        {
          title: "How to make sumac work for your kitchen",
          body:
            "Start with a modest amount and taste the dish before adding more. If the flavor is too sharp, combine it with milder or creamy ingredients, or balance it with the other components of the recipe. Our What If and Recipe Rescue sections can also help when you want to adapt a recipe around the ingredients available in your kitchen.",
        },
      ],
    },
    ar: {
      title: "دليل السماق",
      intro:
        "السماق من التوابل المميزة في مطبخ شرق المتوسط، ويشتهر بنكهته الحامضة التي تشبه الحمضيات. ويمكنه أن يضيف إشراقًا إلى السلطات والبصل والخضروات والغموس والأطعمة المشوية وغيرها من الأطباق البسيطة دون الحاجة إلى تحضير معقد. في Healthy Mezze نستخدم السماق باعتدال ونتذوق أثناء التحضير حتى تدعم حموضته بقية النكهات بدلًا من أن تطغى عليها.",
      sections: [
        {
          title: "ما هو السماق؟",
          body:
            "السماق من التوابل ذات اللون الأحمر الأرجواني والنكهة الحامضة الطبيعية. ويرتبط بشكل واسع بمطبخ بلاد الشام وشرق المتوسط، ويُستخدم لإضافة الحموضة ولمسة منعشة تشبه الحمضيات. وتجعله هذه النكهة مفيدًا عندما تريد إضافة إشراق إلى الطبق دون زيادة كمية السوائل.",
        },
        {
          title: "كيف يُستخدم السماق؟",
          body:
            "يمكن رش السماق فوق السلطات والبصل والخضروات والحمص والزبادي والأطعمة المشوية وغيرها من الأطباق. ويمكن استخدامه أثناء التحضير أو إضافته في النهاية كنوع من التتبيل النهائي. ولأن نكهته واضحة بطبيعتها، نفضل البدء بكمية صغيرة ثم تعديلها بعد التذوق.",
        },
        {
          title: "السماق مع البصل",
          body:
            "يتناسب السماق بشكل خاص مع البصل المقطع. ويمكن لحموضته أن توازن حدة البصل وتحوّله إلى طبق جانبي بسيط أو إضافة مناسبة للتزيين. ويمكن لقليل من الليمون أو البقدونس أو زيت الزيتون أو مكون طازج آخر أن يكمل هذا الجمع حسب طريقة التقديم.",
        },
        {
          title: "السماق في السلطات",
          body:
            "يمكن للسلطات الطازجة أن تستفيد من حموضة السماق، خاصة عندما تحتاج الخضروات والأعشاب والحبوب إلى نكهة أكثر إشراقًا. ويمكن للسماق أن يعمل إلى جانب الليمون أو أن يوفر جزءًا من عنصر الحموضة بنفسه. تذوق السلطة النهائية قبل إضافة المزيد حتى يبقى التتبيل متوازنًا.",
        },
        {
          title: "السماق مع الحمص والأطعمة الكريمية",
          body:
            "توفر حموضة السماق تباينًا لطيفًا مع الأطعمة الكريمية مثل الحمص والزبادي والتحضيرات المعتمدة على الطحينة. ويمكن لرشة صغيرة أن تجعل الغموس الغني أكثر انتعاشًا دون تغيير قوامه الأساسي. ويمكن استخدام زيت الزيتون والأعشاب الطازجة معه عندما تناسب الطبق.",
        },
        {
          title: "استخدام السماق مع الأطعمة المشوية والمحمصة",
          body:
            "يمكن للسماق أن يضيف لمسة منعشة عند الانتهاء من تحضير اللحوم والدجاج والخضروات المشوية أو المحمصة. وقد تساعد إضافته بعد الطهي على الحفاظ على نكهته الحامضة المميزة. وتختلف الكمية المناسبة حسب التتبيل المستخدم مسبقًا، لذلك فإن تذوق الطعام النهائي هو أسهل طريقة لتحديد الحاجة إلى المزيد.",
        },
        {
          title: "السماق مقابل الليمون",
          body:
            "يمكن لكل من السماق والليمون إضافة الحموضة، لكنهما لا يعملان بالطريقة نفسها تمامًا. يضيف الليمون السائل إلى جانب الحموضة، بينما يضيف السماق توابل جافة ذات نكهة حامضة مميزة. ويمكن أحيانًا استخدامهما معًا، لكن يجب ضبط التوازن بدلًا من اعتبار أحدهما بديلًا مباشرًا للآخر.",
        },
        {
          title: "كيف تجعل السماق مناسبًا لمطبخك؟",
          body:
            "ابدأ بكمية معتدلة وتذوق الطبق قبل إضافة المزيد. وإذا كانت النكهة حادة أكثر من اللازم، يمكنك جمع السماق مع مكونات أكثر اعتدالًا أو كريمية، أو موازنتها مع بقية مكونات الوصفة. ويمكن لأقسام What If وRecipe Rescue أن تساعدك أيضًا عندما تريد تعديل وصفة حسب المكونات المتوفرة في مطبخك.",
        },
      ],
    },
  },
  "healthy-mezze-table-guide": {
    en: {
      title: "Healthy Mezze Table Guide",
      intro:
        "A healthy mezze table is less about following a fixed list of dishes and more about bringing together vegetables, legumes, grains, herbs, dips, and other foods in a way that feels satisfying and varied. At Healthy Mezze, we build our tables around the foods we actually enjoy making, tasting as we go and adjusting recipes to suit the people sharing the meal.",
      sections: [
        {
          title: "What makes a mezze table work?",
          body:
            "A good mezze table brings together different flavors, colors, textures, and levels of richness. Creamy hummus or tahini can be paired with fresh salads and vegetables, while grains, beans, or bread can provide more substance. The aim is variety rather than making every dish heavy or relying on one centerpiece.",
        },
        {
          title: "Start with vegetables",
          body:
            "Fresh and cooked vegetables can provide color, texture, and freshness across the table. Salads, roasted vegetables, herbs, cucumbers, tomatoes, and other seasonal ingredients can be combined with dips and grains. We like using vegetables in different forms so that the table does not feel repetitive.",
        },
        {
          title: "Use legumes for substance",
          body:
            "Chickpeas, lentils, beans, and other legumes can make a mezze meal more filling while fitting naturally alongside vegetables and grains. Hummus is one familiar example, but legumes can also appear in salads, soups, patties, and other preparations. Keeping legumes available makes it easier to build a meal without depending on meat for every dish.",
        },
        {
          title: "Balance creamy, fresh, and acidic flavors",
          body:
            "Rich or creamy foods can be balanced with fresh vegetables, herbs, and acidic ingredients such as lemon or sumac. We use this approach when tasting our own dishes: if one element feels too rich, something fresh or acidic can provide contrast. The same principle works across the whole table.",
        },
        {
          title: "Choose cooking methods thoughtfully",
          body:
            "The cooking method can change both the texture and character of a dish. When it suits the recipe, we often prefer baking or roasting instead of frying. This is not about changing every traditional dish, but about recognizing when an oven-based method can be a practical option while still producing food we enjoy.",
        },
        {
          title: "Build around what you already have",
          body:
            "A mezze table is naturally flexible, so you can work with the ingredients already in your kitchen. Start with one filling element, add a fresh salad or vegetable dish, then choose a dip, bread, grain, or additional preparation. When something is missing, check the individual recipe and use the What If and Recipe Rescue sections when available.",
        },
        {
          title: "Taste before serving",
          body:
            "We believe tasting is part of cooking rather than something saved for the end. Try a small spoonful of each preparation and check the salt, acidity, herbs, spice, and overall balance. For salad dressings and dips especially, a final taste can tell you whether a small adjustment will make the dish work better with the rest of the table.",
        },
        {
          title: "Create a table people want to share",
          body:
            "The most important part of a mezze table is that people enjoy sitting around it together. Leave room for different preferences and let everyone combine dishes in their own way. If you discover a substitution, an easier step, or a small adjustment that made your meal better, share it with us and help other home cooks make their own version.",
        },
      ],
    },
    ar: {
      title: "دليل مائدة المازات الصحية",
      intro:
        "لا تعتمد مائدة المازات الصحية على قائمة ثابتة من الأطباق بقدر ما تعتمد على الجمع بين الخضروات والبقوليات والحبوب والأعشاب والغموس وغيرها من الأطعمة بطريقة مشبعة ومتنوعة. في Healthy Mezze نبني موائدنا حول الأطعمة التي نستمتع فعلًا بتحضيرها، مع تذوق الطعام أثناء التحضير وتعديل الوصفات حسب الأشخاص الذين يشاركوننا المائدة.",
      sections: [
        {
          title: "ما الذي يجعل مائدة المازات ناجحة؟",
          body:
            "تجمع مائدة المازات الجيدة بين نكهات وألوان وقوامات ودرجات مختلفة من الغنى. يمكن تقديم الحمص أو الطحينة الكريمية مع السلطات والخضروات الطازجة، بينما تضيف الحبوب أو الفول أو الخبز عنصرًا أكثر إشباعًا. الهدف هو التنوع بدلًا من جعل كل طبق ثقيلًا أو الاعتماد على طبق رئيسي واحد.",
        },
        {
          title: "ابدأ بالخضروات",
          body:
            "يمكن للخضروات الطازجة والمطبوخة أن تضيف اللون والقوام والانتعاش إلى المائدة. ويمكن الجمع بين السلطات والخضروات المشوية والأعشاب والخيار والطماطم وغيرها من المكونات الموسمية مع الغموس والحبوب. نحب استخدام الخضروات بطرق مختلفة حتى لا تبدو المائدة متكررة.",
        },
        {
          title: "استخدم البقوليات لإضافة الشبع",
          body:
            "يمكن للحمص والعدس والفول وغيرها من البقوليات أن تجعل وجبة المازات أكثر إشباعًا مع تناسبها الطبيعي مع الخضروات والحبوب. ويُعد الحمص مثالًا معروفًا، لكن يمكن أن تظهر البقوليات أيضًا في السلطات والشوربات والأقراص وغيرها من التحضيرات. ويساعد الاحتفاظ بالبقوليات على بناء وجبة دون الاعتماد على اللحوم في كل طبق.",
        },
        {
          title: "وازن بين النكهات الكريمية والطازجة والحامضة",
          body:
            "يمكن موازنة الأطعمة الغنية أو الكريمية بالخضروات الطازجة والأعشاب والمكونات الحمضية مثل الليمون أو السماق. نستخدم هذا الأسلوب عند تذوق أطباقنا؛ فإذا بدا أحد العناصر غنيًا أكثر من اللازم، يمكن لمكون طازج أو حامض أن يضيف التباين. وينطبق المبدأ نفسه على المائدة كاملة.",
        },
        {
          title: "اختر طرق الطهي بعناية",
          body:
            "يمكن لطريقة الطهي أن تغير قوام الطبق وشخصيته. وعندما تناسب الوصفة، نفضل غالبًا الخَبز أو التحميص بدلًا من القلي. ولا يتعلق الأمر بتغيير كل طبق تقليدي، بل بمعرفة متى يمكن أن تكون طريقة الفرن خيارًا عمليًا مع الحفاظ على طعام نستمتع بتناوله.",
        },
        {
          title: "ابنِ المائدة حول ما لديك",
          body:
            "تتميز مائدة المازات بمرونتها الطبيعية، لذلك يمكنك العمل بالمكونات الموجودة في مطبخك. ابدأ بعنصر مشبع، ثم أضف سلطة طازجة أو طبق خضروات، وبعد ذلك اختر غموسًا أو خبزًا أو حبوبًا أو طبقًا إضافيًا. وعندما ينقص أحد المكونات، راجع الوصفة نفسها واستخدم أقسام What If وRecipe Rescue عندما تكون متاحة.",
        },
        {
          title: "تذوق الطعام قبل التقديم",
          body:
            "نؤمن بأن التذوق جزء من الطبخ وليس خطوة نؤجلها إلى النهاية. خذ ملعقة صغيرة من كل تحضير وتحقق من الملح والحموضة والأعشاب والتوابل والتوازن العام. وبالنسبة لتتبيلات السلطات والغموس بشكل خاص، يمكن للتذوق النهائي أن يخبرك ما إذا كان تعديل بسيط سيجعل الطبق أكثر انسجامًا مع بقية المائدة.",
        },
        {
          title: "اصنع مائدة يرغب الجميع في مشاركتها",
          body:
            "أهم جزء في مائدة المازات هو أن يستمتع الناس بالجلوس حولها معًا. اترك مساحة للتفضيلات المختلفة ودع الجميع يجمع الأطباق بالطريقة التي يحبها. وإذا اكتشفت بديلًا لمكون أو خطوة أسهل أو تعديلًا صغيرًا جعل وجبتك أفضل، شاركه معنا وساعد غيرك من الطهاة في المنزل على إعداد نسختهم الخاصة.",
        },
      ],
    },
  },
  "healthy-mediterranean-meal-planning": {
    en: {
      title: "Healthy Mediterranean Meal Planning",
      intro:
        "Mediterranean-style meal planning becomes easier when you focus on a small group of flexible ingredients rather than trying to prepare complicated meals every day. At Healthy Mezze, we build meals around vegetables, legumes, grains, herbs, healthy fats, and practical protein options, then adjust seasoning and preparation according to what we have available.",
      sections: [
        {
          title: "Start with a simple meal structure",
          body:
            "A practical meal can begin with one main protein or legume, several vegetables, and a grain, bread, or other filling element. From there, herbs, lemon, spices, sauces, or dips can add flavor. This structure gives you flexibility without requiring a completely different shopping list for every meal.",
        },
        {
          title: "Keep useful ingredients available",
          body:
            "A small collection of vegetables, legumes, grains, herbs, olive oil, lemons, garlic, and common spices can support many different meals. We find that keeping versatile ingredients available makes it easier to cook at home and adapt when plans change or a particular ingredient is unavailable.",
        },
        {
          title: "Plan around legumes and vegetables",
          body:
            "Chickpeas, lentils, beans, and other legumes can provide substance for soups, salads, bowls, dips, and patties. Vegetables can then add freshness, color, and different textures. Combining these ingredients in different forms helps prevent meals from feeling repetitive.",
        },
        {
          title: "Use grains thoughtfully",
          body:
            "Rice, bulgur, barley, and other grains can provide a filling base for meals. They can be paired with vegetables, legumes, herbs, sauces, or protein. When planning ahead, cooked grains can also make later meals easier to assemble, provided they are stored and handled appropriately.",
        },
        {
          title: "Build flavor with herbs, spices, and acidity",
          body:
            "Healthy meals do not have to depend on complicated sauces to taste good. Garlic, cumin, coriander, mint, parsley, za'atar, sumac, lemon, and vinegar can create very different flavor profiles from the same basic ingredients. We recommend seasoning gradually, tasting, and adjusting rather than adding everything at once.",
        },
        {
          title: "Choose cooking methods that fit the dish",
          body:
            "Baking, roasting, grilling, simmering, and other cooking methods can all have a place in Mediterranean-style cooking. When it suits the recipe, we often use the oven instead of frying. The goal is not to eliminate traditional methods, but to choose a practical method that works well for the particular dish.",
        },
        {
          title: "Plan for leftovers and flexible meals",
          body:
            "Planning does not mean every meal needs to be prepared from scratch at the same time. Extra cooked grains, roasted vegetables, legumes, or sauces can become components of another meal. We like thinking in terms of building blocks so that one preparation can make the next meal easier without making it feel exactly the same.",
        },
        {
          title: "Taste and adjust instead of following blindly",
          body:
            "Recipes provide a starting point, but ingredients vary and personal preferences differ. Taste your food as you cook and adjust salt, lemon, spice, herbs, or other ingredients when needed. If you need to change an ingredient, check the recipe's What If and Recipe Rescue sections when available so you understand what role the ingredient plays before replacing it.",
        },
      ],
    },
    ar: {
      title: "دليل تخطيط الوجبات المتوسطية الصحية",
      intro:
        "يصبح تخطيط الوجبات على الطريقة المتوسطية أسهل عندما تركز على مجموعة صغيرة من المكونات المرنة بدلًا من محاولة إعداد وجبات معقدة كل يوم. في Healthy Mezze نبني وجباتنا حول الخضروات والبقوليات والحبوب والأعشاب والدهون المفيدة وخيارات البروتين العملية، ثم نعدّل التتبيل وطريقة التحضير حسب ما يتوفر لدينا.",
      sections: [
        {
          title: "ابدأ بهيكل بسيط للوجبة",
          body:
            "يمكن أن تبدأ الوجبة العملية بمصدر بروتين أو بقوليات، مع عدة أنواع من الخضروات وحبوب أو خبز أو عنصر آخر مشبع. وبعد ذلك يمكن للأعشاب والليمون والتوابل والصلصات أو الغموس أن تضيف النكهة. يمنحك هذا الهيكل مرونة دون الحاجة إلى قائمة مشتريات مختلفة تمامًا لكل وجبة.",
        },
        {
          title: "احتفظ بالمكونات المفيدة في مطبخك",
          body:
            "يمكن لمجموعة صغيرة من الخضروات والبقوليات والحبوب والأعشاب وزيت الزيتون والليمون والثوم والتوابل الشائعة أن تدعم الكثير من الوجبات المختلفة. ونجد أن الاحتفاظ بالمكونات متعددة الاستخدامات يجعل الطبخ في المنزل أسهل ويساعد على التكيف عندما تتغير الخطط أو لا يتوفر مكون معين.",
        },
        {
          title: "خطط حول البقوليات والخضروات",
          body:
            "يمكن للحمص والعدس والفول وغيرها من البقوليات أن توفر أساسًا للشوربات والسلطات والأطباق المختلفة والغموس والأقراص. ويمكن للخضروات أن تضيف الانتعاش والألوان والقوامات المختلفة. ويساعد الجمع بين هذه المكونات بطرق مختلفة على منع الوجبات من أن تصبح متكررة.",
        },
        {
          title: "استخدم الحبوب بطريقة عملية",
          body:
            "يمكن للأرز والبرغل والشعير وغيرها من الحبوب أن توفر أساسًا مشبعًا للوجبات. ويمكن جمعها مع الخضروات والبقوليات والأعشاب والصلصات أو البروتين. وعند التخطيط مسبقًا، يمكن للحبوب المطبوخة أيضًا أن تجعل تجميع الوجبات اللاحقة أسهل، مع مراعاة تخزينها والتعامل معها بطريقة مناسبة.",
        },
        {
          title: "ابنِ النكهة بالأعشاب والتوابل والحموضة",
          body:
            "لا تحتاج الوجبات الصحية إلى صلصات معقدة حتى تكون لذيذة. يمكن للثوم والكمون والكزبرة والنعناع والبقدونس والزعتر والسماق والليمون والخل أن تصنع أنماطًا مختلفة جدًا من النكهة باستخدام المكونات الأساسية نفسها. ننصح بإضافة التتبيل تدريجيًا والتذوق والتعديل بدلًا من إضافة كل شيء دفعة واحدة.",
        },
        {
          title: "اختر طريقة الطهي المناسبة للطبق",
          body:
            "يمكن أن يكون الخَبز والتحميص والشواء والطهي على نار هادئة وغيرها من الطرق جزءًا من الطبخ على الطريقة المتوسطية. وعندما تناسب الوصفة، نستخدم الفرن غالبًا بدلًا من القلي. الهدف ليس إلغاء طرق الطهي التقليدية، بل اختيار طريقة عملية تناسب الطبق نفسه.",
        },
        {
          title: "خطط لبقايا الطعام والوجبات المرنة",
          body:
            "لا يعني التخطيط أن كل وجبة يجب أن تُحضّر من الصفر في الوقت نفسه. يمكن للخضروات المحمصة أو الحبوب المطبوخة أو البقوليات أو الصلصات الإضافية أن تصبح مكونات لوجبة أخرى. نحب التفكير في هذه المكونات كأساسيات يمكن جمعها بطرق مختلفة، بحيث تسهّل وجبة اليوم التالي دون أن تبدو مطابقة تمامًا للوجبة السابقة.",
        },
        {
          title: "تذوق وعدّل بدلًا من اتباع الوصفة بشكل أعمى",
          body:
            "الوصفات تقدم نقطة بداية، لكن المكونات تختلف والتفضيلات الشخصية تختلف أيضًا. تذوق الطعام أثناء الطبخ وعدّل الملح أو الليمون أو التوابل أو الأعشاب أو غيرها عند الحاجة. وإذا احتجت إلى تغيير أحد المكونات، راجع أقسام What If وRecipe Rescue عندما تكون متاحة حتى تفهم وظيفة المكون قبل استبداله.",
        },
      ],
    },
  },
  "mediterranean-cooking-techniques": {
    en: {
      title: "Mediterranean Cooking Techniques",
      intro:
        "Mediterranean cooking is not defined by one technique. Roasting, baking, grilling, simmering, sautéing, and fresh preparation all have a place in the kitchen. At Healthy Mezze, we focus on practical methods that bring out the natural flavor of ingredients while making everyday cooking easier.",
      sections: [
        {
          title: "Roasting vegetables for deeper flavor",
          body:
            "Roasting can turn simple vegetables into a flavorful part of a meal. The heat helps develop browning while allowing vegetables such as cauliflower, eggplant, peppers, onions, and tomatoes to become tender. We like using roasting when it suits the dish because it can build flavor without requiring deep frying.",
        },
        {
          title: "Baking for practical everyday cooking",
          body:
            "Baking is useful when you want to prepare a complete dish with relatively little active cooking time. Fish, chicken, vegetables, stuffed dishes, and casseroles can all work well in the oven. Cooking time still depends on the size and starting temperature of the ingredients, so we pay attention to doneness rather than relying on the clock alone.",
        },
        {
          title: "Grilling and developing char",
          body:
            "Grilling adds a distinctive smoky and lightly charred character to vegetables, chicken, and other foods. Marinades containing lemon, garlic, herbs, spices, yogurt, or olive oil can add flavor before cooking. The key is to allow the food to develop color without letting the outside burn before the inside is properly cooked.",
        },
        {
          title: "Simmering soups, legumes, and sauces",
          body:
            "Gentle simmering is useful for soups, lentils, beans, sauces, and other dishes that benefit from time for their flavors to come together. Keeping the heat controlled can help ingredients soften gradually while preserving the character of the dish. Taste during cooking and adjust seasoning as the flavors develop.",
        },
        {
          title: "Building flavor with aromatics",
          body:
            "Onion, garlic, herbs, and spices are important building blocks in many Mediterranean and Eastern Mediterranean dishes. Cooking these ingredients at the right stage can soften their sharpness and release their aromas. Cumin, coriander, mint, parsley, za'atar, sumac, lemon, and other flavor builders can then be used to give the dish its own character.",
        },
        {
          title: "Balancing acidity, salt, and richness",
          body:
            "A good dish often depends on balance rather than one dominant flavor. Lemon and vinegar can add acidity, salt can bring other flavors forward, and ingredients such as tahini, olive oil, yogurt, or legumes can provide richness and body. We recommend tasting as you go and making small adjustments instead of adding a large amount of seasoning at once.",
        },
        {
          title: "Knowing when to adapt a traditional method",
          body:
            "Traditional cooking methods are valuable, but home cooks sometimes need practical alternatives. Depending on the dish, baking can replace frying, vegetables can be roasted instead of cooked in a large amount of oil, and available ingredients can be substituted when appropriate. We distinguish these adaptations from traditional preparations rather than presenting them as identical.",
        },
        {
          title: "The most important technique: taste and observe",
          body:
            "Cooking is more than following a timer. Look at color, texture, aroma, and doneness, and taste when it is appropriate. If a dressing tastes flat, it may need acidity or salt. If a dish is too sharp, richness or another balancing ingredient may help. With proteins, check the actual doneness rather than assuming that a fixed cooking time guarantees the result. These small observations make recipes easier to understand and adapt.",
        },
      ],
    },
    ar: {
      title: "دليل تقنيات الطبخ المتوسطي",
      intro:
        "لا يعتمد الطبخ المتوسطي على طريقة واحدة فقط. فالتحميص والخَبز والشواء والطهي على نار هادئة والتشويح والتحضير الطازج كلها طرق لها مكانها في المطبخ. في Healthy Mezze نركز على طرق عملية تساعد على إبراز النكهة الطبيعية للمكونات وتجعل الطبخ اليومي أسهل.",
      sections: [
        {
          title: "تحميص الخضروات لإضافة نكهة أعمق",
          body:
            "يمكن للتحميص أن يحول الخضروات البسيطة إلى جزء غني بالنكهة من الوجبة. تساعد الحرارة على تكوين لون ونكهة أعمق، بينما تصبح خضروات مثل القرنبيط والباذنجان والفلفل والبصل والطماطم طرية. نحب استخدام التحميص عندما يناسب الطبق لأنه يمكن أن يبني النكهة دون الحاجة إلى القلي العميق.",
        },
        {
          title: "الخَبز للطبخ اليومي العملي",
          body:
            "يُعد الخَبز مفيدًا عندما تريد تحضير طبق كامل مع وقت أقل من العمل المباشر. يمكن أن تنجح في الفرن أطباق السمك والدجاج والخضروات والأطباق المحشوة والطواجن. ومع ذلك، تعتمد مدة الطهي على حجم المكونات ودرجة حرارتها عند البداية، لذلك نهتم باكتمال النضج بدلًا من الاعتماد على الوقت وحده.",
        },
        {
          title: "الشواء وتكوين النكهة المحمصة",
          body:
            "يضيف الشواء طابعًا مميزًا مدخنًا ولمسة محمصة إلى الخضروات والدجاج وغيرها من الأطعمة. ويمكن للتتبيلات التي تحتوي على الليمون والثوم والأعشاب والتوابل والزبادي أو زيت الزيتون أن تضيف النكهة قبل الطهي. المهم هو السماح للطعام باكتساب اللون دون أن يحترق السطح قبل اكتمال نضج الداخل.",
        },
        {
          title: "الطهي على نار هادئة للشوربات والبقوليات والصلصات",
          body:
            "يفيد الطهي الهادئ للشوربات والعدس والفول والصلصات والأطباق الأخرى التي تحتاج إلى وقت حتى تمتزج نكهاتها. يساعد التحكم في الحرارة على تليين المكونات تدريجيًا مع الحفاظ على شخصية الطبق. تذوق الطعام أثناء الطهي وعدّل التتبيل مع تطور النكهات.",
        },
        {
          title: "بناء النكهة بالمكونات العطرية",
          body:
            "يُعد البصل والثوم والأعشاب والتوابل من العناصر الأساسية في كثير من أطباق البحر المتوسط وشرق المتوسط. يساعد طهي هذه المكونات في المرحلة المناسبة على تخفيف حدتها وإطلاق روائحها. ويمكن بعد ذلك استخدام الكمون والكزبرة والنعناع والبقدونس والزعتر والسماق والليمون وغيرها من العناصر لبناء شخصية الطبق.",
        },
        {
          title: "موازنة الحموضة والملح والقوام الغني",
          body:
            "يعتمد نجاح الطبق في كثير من الأحيان على التوازن وليس على نكهة واحدة طاغية. يمكن لليمون والخل أن يضيفا الحموضة، بينما يساعد الملح على إبراز النكهات الأخرى، ويمكن لمكونات مثل الطحينة وزيت الزيتون والزبادي والبقوليات أن تضيف الغنى والقوام. ننصح بالتذوق أثناء الطبخ وإجراء تعديلات صغيرة بدلًا من إضافة كمية كبيرة من التتبيل دفعة واحدة.",
        },
        {
          title: "متى نعدّل طريقة تقليدية؟",
          body:
            "تظل طرق الطبخ التقليدية مهمة، لكن الطاهي في المنزل قد يحتاج أحيانًا إلى بدائل عملية. وبحسب الطبق، يمكن أن يحل الخَبز محل القلي، أو يمكن تحميص الخضروات بدلًا من طهيها في كمية كبيرة من الزيت، كما يمكن استبدال بعض المكونات عندما يكون ذلك مناسبًا. ونوضح الفرق بين هذه التعديلات والوصفات التقليدية بدلًا من تقديمها على أنها متطابقة.",
        },
        {
          title: "أهم تقنية: تذوق الطعام ومراقبته",
          body:
            "الطبخ أكثر من مجرد اتباع مؤقت. راقب اللون والقوام والرائحة ودرجة النضج، وتذوق الطعام عندما يكون ذلك مناسبًا. إذا كانت التتبيلة تفتقر إلى الحيوية فقد تحتاج إلى مزيد من الحموضة أو الملح. وإذا كانت النكهة حادة جدًا فقد يساعد مكون غني أو عنصر آخر على تحقيق التوازن. ومع البروتينات، تحقق من النضج الفعلي بدلًا من افتراض أن مدة طهي ثابتة تضمن النتيجة. هذه الملاحظات الصغيرة تجعل فهم الوصفات وتعديلها أسهل.",
        },
      ],
    },
  },
  "healthier-mediterranean-recipes-guide": {
    en: {
      title: "Healthier Mediterranean Recipes Guide",
      intro:
        "Making a Mediterranean-inspired meal feel lighter does not require removing the character from the food. At Healthy Mezze, we focus on practical changes such as using more vegetables and legumes, choosing cooking methods thoughtfully, balancing sauces and dressings, and adjusting ingredients when needed while keeping the flavors that make the food enjoyable.",
      sections: [
        {
          title: "Start with the ingredients, not a label",
          body:
            "We do not treat the word healthy as a substitute for understanding what is actually in a dish. Vegetables, legumes, herbs, spices, grains, olive oil, and practical protein choices can all have a place in a balanced meal. The overall combination, portion, preparation method, and your own dietary needs matter when deciding whether a particular recipe works for you.",
        },
        {
          title: "Use vegetables to add volume and variety",
          body:
            "Vegetables can bring color, texture, freshness, and flavor to a meal. Roasting, grilling, baking, or serving them fresh can create very different results from the same ingredient. We often look for opportunities to make vegetables a meaningful part of the plate rather than treating them only as a side dish.",
        },
        {
          title: "Make legumes part of the meal",
          body:
            "Chickpeas, lentils, beans, and fava beans are useful ingredients across Egyptian, Lebanese, and wider Mediterranean cooking. They can form the base of soups, salads, dips, bowls, and patties. Using legumes in different preparations is one practical way to create filling meals without relying on the same protein source every time.",
        },
        {
          title: "Choose cooking methods thoughtfully",
          body:
            "The way food is cooked can change both its texture and the amount of added fat needed. When it works for the recipe, we often prefer baking, roasting, grilling, or simmering instead of deep frying. This does not mean traditional frying has no place in cooking; some dishes depend on it. The important point is choosing a method that fits the dish and the result you want.",
        },
        {
          title: "Build flavor without overwhelming the dish",
          body:
            "Healthy cooking should still taste good. Garlic, onion, herbs, cumin, coriander, za'atar, sumac, lemon, vinegar, and other seasonings can create strong flavor without requiring complicated preparation. We recommend adding seasoning gradually and tasting as you go so that one ingredient does not overwhelm everything else.",
        },
        {
          title: "Adjust sauces and dressings to your taste",
          body:
            "A dressing or sauce can change the character of an entire meal. Start with the recipe's proportions, mix everything together, and taste before serving. If it needs more acidity, lemon or vinegar may help. If it needs more seasoning, adjust the salt or herbs. Small changes can make a sauce work better for your own preferences.",
        },
        {
          title: "Make practical substitutions",
          body:
            "Not every ingredient is available in every kitchen, and dietary preferences can also require changes. Some substitutions preserve the role of the original ingredient while others significantly change the dish. When a recipe includes What If or Recipe Rescue guidance, use it to understand possible swaps, texture changes, and flavor adjustments before making your decision.",
        },
        {
          title: "Keep traditional food recognizable",
          body:
            "Our approach is not to remove the identity from traditional food in the name of making it lighter. Recipes naturally change as they move between families, regions, and generations, and practical adaptations are part of that process. When we make a healthier or easier adjustment, we aim to make the distinction clear so you can understand what is traditional and what has been adapted.",
        },
        {
          title: "Cook, taste, and make the recipe your own",
          body:
            "A recipe is a starting point rather than a reason to stop thinking in the kitchen. Taste as you cook, observe texture and doneness, and make small adjustments when appropriate. Add more lemon if you prefer more acidity, increase the spice if you enjoy heat, or use a suitable substitute when an ingredient is unavailable. The goal is food that works in your real kitchen and that you genuinely enjoy eating.",
        },
      ],
    },
    ar: {
      title: "دليل الوصفات المتوسطية الصحية",
      intro:
        "جعل الوجبة المستوحاة من المطبخ المتوسطي أخف لا يعني بالضرورة التخلي عن شخصية الطعام ونكهته. في Healthy Mezze نركز على تعديلات عملية مثل زيادة الخضروات والبقوليات، واختيار طرق الطهي بعناية، وموازنة الصلصات والتتبيلات، وتعديل بعض المكونات عند الحاجة مع الحفاظ على النكهات التي تجعل الطعام ممتعًا.",
      sections: [
        {
          title: "ابدأ بالمكونات وليس بالتصنيف",
          body:
            "لا نتعامل مع كلمة صحي باعتبارها بديلًا عن فهم ما يوجد فعليًا في الطبق. يمكن أن يكون للخضروات والبقوليات والأعشاب والتوابل والحبوب وزيت الزيتون وخيارات البروتين العملية مكان في الوجبة المتوازنة. ويجب النظر إلى المجموعة الكاملة من المكونات وطريقة التحضير واحتياجاتك الغذائية الشخصية عند تحديد ما إذا كانت وصفة معينة مناسبة لك.",
        },
        {
          title: "استخدم الخضروات لإضافة التنوع والحجم",
          body:
            "يمكن للخضروات أن تضيف الألوان والقوام والانتعاش والنكهة إلى الوجبة. ويمكن أن ينتج عن تحميصها أو شويها أو خبزها أو تقديمها طازجة نتائج مختلفة تمامًا باستخدام المكون نفسه. ونحاول غالبًا إيجاد طرق تجعل الخضروات جزءًا مهمًا من الطبق بدلًا من التعامل معها كطبق جانبي فقط.",
        },
        {
          title: "اجعل البقوليات جزءًا من وجبتك",
          body:
            "يُعد الحمص والعدس والفول والفول المدمس من المكونات المفيدة في الطبخ المصري واللبناني والمطبخ المتوسطي الأوسع. ويمكن استخدامها في الشوربات والسلطات والغموس والأطباق المختلفة والأقراص. ويساعد استخدامها بطرق مختلفة على إعداد وجبات مشبعة دون الاعتماد دائمًا على مصدر البروتين نفسه.",
        },
        {
          title: "اختر طرق الطهي بعناية",
          body:
            "يمكن لطريقة الطهي أن تغير القوام وكمية الدهون المضافة المطلوبة. وعندما تناسب الوصفة، نفضل غالبًا الخَبز أو التحميص أو الشواء أو الطهي على نار هادئة بدلًا من القلي العميق. وهذا لا يعني أن القلي التقليدي ليس له مكان في الطبخ؛ فبعض الأطباق تعتمد عليه. المهم هو اختيار الطريقة التي تناسب الطبق والنتيجة التي تريدها.",
        },
        {
          title: "ابنِ النكهة دون أن تطغى على الطبق",
          body:
            "يجب أن يكون الطعام الصحي لذيذًا أيضًا. يمكن للثوم والبصل والأعشاب والكمون والكزبرة والزعتر والسماق والليمون والخل وغيرها من التوابل أن تصنع نكهة قوية دون الحاجة إلى تحضير معقد. ننصح بإضافة التتبيل تدريجيًا والتذوق أثناء الطبخ حتى لا يطغى مكون واحد على بقية النكهات.",
        },
        {
          title: "عدّل الصلصات والتتبيلات حسب ذوقك",
          body:
            "يمكن للتتبيلة أو الصلصة أن تغير شخصية الوجبة بالكامل. ابدأ بالنسب الموجودة في الوصفة، واخلط المكونات ثم تذوقها قبل التقديم. إذا كانت تحتاج إلى مزيد من الحموضة، فقد يساعد الليمون أو الخل. وإذا كانت تحتاج إلى مزيد من التتبيل، عدّل كمية الملح أو الأعشاب. يمكن للتعديلات الصغيرة أن تجعل الصلصة أكثر ملاءمة لذوقك.",
        },
        {
          title: "استخدم بدائل عملية للمكونات",
          body:
            "لا يتوفر كل مكون في كل مطبخ، كما قد تتطلب بعض التفضيلات الغذائية إجراء تغييرات. بعض البدائل تحافظ على وظيفة المكون الأصلي، بينما قد تغير بدائل أخرى شخصية الطبق بشكل واضح. عندما تحتوي الوصفة على إرشادات What If أو Recipe Rescue، استخدمها لفهم البدائل الممكنة والتغييرات التي قد تحدث في القوام والنكهة قبل اتخاذ قرارك.",
        },
        {
          title: "حافظ على هوية الطعام التقليدي",
          body:
            "لا يتمثل أسلوبنا في إزالة هوية الطعام التقليدي بحجة جعله أخف. تتغير الوصفات طبيعيًا مع انتقالها بين العائلات والمناطق والأجيال، والتعديلات العملية جزء من هذه العملية. وعندما نجري تعديلًا صحيًا أو أسهل، نحاول توضيح الفرق حتى تتمكن من معرفة ما هو تقليدي وما تم تعديله.",
        },
        {
          title: "اطبخ وتذوق واجعل الوصفة تناسبك",
          body:
            "الوصفة نقطة بداية وليست سببًا للتوقف عن التفكير في المطبخ. تذوق أثناء الطبخ، وراقب القوام ودرجة النضج، وأجرِ تعديلات صغيرة عندما يكون ذلك مناسبًا. أضف المزيد من الليمون إذا كنت تفضل الحموضة، وزد التوابل إذا كنت تحب الحرارة، أو استخدم بديلًا مناسبًا عندما لا يتوفر أحد المكونات. الهدف هو طعام يناسب مطبخك الحقيقي وتستمتع فعلًا بتناوله.",
        },
      ],
    },
  }
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
  const t = await getTranslations({ locale });

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
  const t = await getTranslations({ locale });
  const guide = guides[slug];

  if (!guide) notFound();

  const recipeSlugs = guideRecipeLinks[slug] ?? [];
  const guideRecipes = (
    await Promise.all(
      recipeSlugs.map((recipeSlug) => getLocalizedRecipe(recipeSlug, locale))
    )
  ).filter((recipe): recipe is NonNullable<typeof recipe> => recipe !== null);

  const content = locale === "ar" ? guide.ar : guide.en;

  const categorySlugs = guideCategoryLinks[slug] ?? [];

  const guideCategories = categorySlugs
    .map((categorySlug) =>
      categories.find((category) => category.slug === categorySlug)
    )
    .filter(
      (category): category is NonNullable<typeof category> =>
        category !== undefined
    );

  const pageUrl = `${SITE_URL}/${locale}/guides/${slug}`;
  const homeUrl = `${SITE_URL}/${locale}`;
  const guidesUrl = `${SITE_URL}/${locale}/guides`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: content.title,
    description: content.intro,
    url: pageUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    inLanguage: locale,
    author: {
      "@type": "Organization",
      name: "Healthy Mezze",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Healthy Mezze",
      url: SITE_URL,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: locale === "ar" ? "الرئيسية" : "Home",
        item: homeUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: locale === "ar" ? "الأدلة" : "Guides",
        item: guidesUrl,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: content.title,
        item: pageUrl,
      },
    ],
  };

  return (
    <main className="bg-[#FAFAF7] py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

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

          {guideRecipes.length > 0 && (
            <section className="mt-14">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {locale === "ar"
                    ? "وصفات مرتبطة بهذا الدليل"
                    : "Recipes from this guide"}
                </h2>

                <p className="mt-2 leading-7 text-gray-600">
                  {locale === "ar"
                    ? "جرّب هذه الوصفات لتطبيق الأفكار والمكونات التي تناولها هذا الدليل."
                    : "Try these recipes to put the ideas and ingredients from this guide into practice."}
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {guideRecipes.map((recipe) => (
                  <Link
                    key={recipe.slug}
                    href={`/recipes/${recipe.slug}`}
                    className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    {recipe.image && (
                      <img
                        src={recipe.image}
                        alt={recipe.imageAlt || recipe.title}
                        className="aspect-[4/3] w-full object-cover"
                      />
                    )}

                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-900 transition group-hover:text-emerald-700">
                        {recipe.title}
                      </h3>

                      {recipe.description && (
                        <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">
                          {recipe.description}
                        </p>
                      )}

                      <span className="mt-4 inline-flex font-semibold text-emerald-700">
                        {locale === "ar" ? "عرض الوصفة ←" : "View recipe →"}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              <Link
                href="/recipes"
                className="mt-6 inline-flex font-semibold text-emerald-700 hover:text-emerald-900"
              >
                {locale === "ar"
                  ? "تصفح جميع الوصفات →"
                  : "Browse all recipes →"}
              </Link>


              {guideCategories.length > 0 && (
                <div className="mt-12 border-t border-gray-200 pt-8">
                  <h3 className="text-xl font-bold text-gray-900">
                    {locale === "ar"
                      ? "استكشف حسب الفئة"
                      : "Explore by category"}
                  </h3>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {guideCategories.map((category) => (
                      <Link
                        key={category.slug}
                        href={`/categories/${category.slug}`}
                        className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800 transition hover:border-emerald-300 hover:bg-emerald-100"
                      >
                        {t(category.nameKey)}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}
        </article>
      </Container>
    </main>
  );
}
