import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
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
        "Egyptian cuisine is shaped by the Nile, agriculture, grains, legumes, vegetables, aromatic spices, and a strong tradition of shared meals. Its everyday cooking shows how simple, affordable ingredients can become deeply satisfying food.",
      sections: [
        {
          title: "The foundation of Egyptian cooking",
          body:
            "Beans, lentils, rice, wheat, vegetables, herbs, garlic, onions, cumin, coriander, lemon, and cooking oils appear across many everyday dishes. Ful medames is a classic example: humble fava beans are seasoned with ingredients such as cumin, garlic, lemon, and oil and served with fresh vegetables and bread.",
        },
        {
          title: "The Nile and agricultural traditions",
          body:
            "Egypt's long agricultural history and dependence on the Nile have strongly influenced what people cook and eat. Grains, legumes, vegetables, herbs, and seasonal produce have remained important because they are practical ingredients that can feed families while adapting to local availability.",
        },
        {
          title: "Beyond koshari",
          body:
            "Koshari is internationally recognizable, but Egyptian food is much broader. Breakfasts, vegetable dishes, soups, rice preparations, grilled foods, breads, pickles, desserts, and drinks all contribute to the cuisine. Many meals combine starches or legumes with vegetables, herbs, acidity, and spices.",
        },
        {
          title: "Common Egyptian flavor builders",
          body:
            "Garlic, onion, cumin, coriander, lemon, vinegar, fresh herbs, and chili can change the character of a dish without requiring complicated techniques. Browning onions, gently cooking aromatics, and adding acidity at the right stage are useful habits in Egyptian home cooking.",
        },
        {
          title: "A practical healthy approach",
          body:
            "Making Egyptian food more balanced does not require removing its identity. Useful choices include increasing vegetables and legumes, using sensible amounts of oil, balancing rice or bread with protein and vegetables, and keeping fried toppings or rich sauces portion-aware.",
        },
        {
          title: "Recipes worth exploring",
          body:
            "Start with ful medames, Egyptian koshari, lentil soup, vegetable dishes, grilled foods, and traditional Egyptian drinks. Pay attention to how each recipe uses legumes, grains, herbs, acidity, and spices so you learn techniques rather than memorizing isolated recipes.",
        },
      ],
    },
    ar: {
      title: "دليل المطبخ المصري",
      intro:
        "يتشكل المطبخ المصري بتأثير النيل والزراعة والحبوب والبقوليات والخضروات والتوابل العطرية وثقافة مشاركة الطعام. ويُظهر الطبخ اليومي كيف يمكن للمكونات البسيطة والمتاحة أن تتحول إلى أطعمة مشبعة وغنية بالنكهة.",
      sections: [
        {
          title: "أساسيات الطبخ المصري",
          body:
            "تظهر الفول والعدس والأرز والقمح والخضروات والأعشاب والثوم والبصل والكمون والكزبرة والليمون والزيوت في الكثير من الأطباق اليومية. ويُعد الفول المدمس مثالاً واضحًا، حيث تتبل حبوب الفول بالكمون والثوم والليمون والزيت وتقدم مع الخضروات والخبز.",
        },
        {
          title: "النيل والتقاليد الزراعية",
          body:
            "أثر تاريخ الزراعة الطويل واعتماد مصر على النيل في نوعية الطعام الذي يُحضّر يوميًا. وظلت الحبوب والبقوليات والخضروات والأعشاب والمحاصيل الموسمية مكونات مهمة لأنها عملية ومتاحة ويمكنها إطعام العائلة مع اختلاف ما يتوفر من موسم إلى آخر.",
        },
        {
          title: "المطبخ المصري أكبر من الكشري",
          body:
            "الكشري معروف عالميًا، لكن المطبخ المصري أوسع بكثير. هناك أطباق الفطور والخضروات والشوربات وأطباق الأرز والمشاوي والخبز والمخللات والحلويات والمشروبات. وغالبًا ما تجمع الوجبة بين الحبوب أو البقوليات والخضروات والأعشاب والحموضة والتوابل.",
        },
        {
          title: "مكونات بناء النكهة",
          body:
            "يمكن للثوم والبصل والكمون والكزبرة والليمون والخل والأعشاب الطازجة والفلفل الحار أن تغير شخصية الطبق دون الحاجة إلى تقنيات معقدة. كما أن تحمير البصل وطهي المكونات العطرية بهدوء وإضافة الحموضة في الوقت المناسب من المهارات المفيدة.",
        },
        {
          title: "كيف نجعل الطبخ المصري أكثر توازنًا",
          body:
            "لا يحتاج الطبخ المصري المتوازن إلى فقدان شخصيته. يمكن زيادة الخضروات والبقوليات، واستخدام الزيت بكمية مناسبة، وموازنة الأرز أو الخبز مع البروتين والخضروات، والانتباه إلى كميات الإضافات المقلية والصلصات الغنية.",
        },
        {
          title: "وصفات تستحق الاستكشاف",
          body:
            "ابدأ بالفول المدمس والكشري وشوربة العدس وأطباق الخضروات والمشاوي والمشروبات المصرية التقليدية. وحاول ملاحظة طريقة استخدام البقوليات والحبوب والأعشاب والحموضة والتوابل حتى تتعلم الأسلوب وليس مجرد حفظ الوصفات.",
        },
      ],
    },
  },

  "lebanese-cuisine-guide": {
    en: {
      title: "Lebanese Cuisine Guide",
      intro:
        "Lebanese cuisine is built around freshness, herbs, grains, legumes, vegetables, olive oil, lemon, garlic, sesame, and a tradition of sharing many dishes around one table.",
      sections: [
        {
          title: "Freshness is central",
          body:
            "Parsley, mint, tomatoes, cucumber, lemon, garlic, olive oil, and seasonal vegetables appear repeatedly. These ingredients provide brightness and contrast, helping Lebanese meals feel generous without depending entirely on heavy sauces.",
        },
        {
          title: "The role of mezze",
          body:
            "Mezze is a style of eating as much as a collection of dishes. Hummus, baba ghanoush, tabbouleh, fattoush, labneh, pickles, vegetables, bread, and other small plates can be served together so diners can build different combinations throughout the meal.",
        },
        {
          title: "Staples worth knowing",
          body:
            "Tahini, bulgur, chickpeas, lentils, parsley, mint, sumac, za'atar, pomegranate molasses, garlic, lemon, and olive oil form a useful Lebanese pantry. Learning these ingredients makes many recipes easier to understand and adapt.",
        },
        {
          title: "How flavor is layered",
          body:
            "Lebanese cooking often builds contrast rather than relying on one dominant seasoning. Creamy tahini or yogurt can be balanced with lemon, herbs add freshness, sumac adds acidity, and toasted spices can add warmth. Learning to combine these roles is more useful than memorizing spice amounts.",
        },
        {
          title: "Healthy without losing character",
          body:
            "A balanced Lebanese table can naturally include vegetables, legumes, herbs, whole grains, fermented dairy, and healthy fats. The goal is not to turn traditional dishes into diet food, but to preserve their defining flavors while building a varied meal.",
        },
        {
          title: "Where to begin",
          body:
            "A useful starting set includes hummus, tabbouleh, fattoush, lentil dishes, grilled vegetables, chicken or fish, and simple tahini sauces. These dishes introduce many of the ingredients and techniques that appear throughout Lebanese cooking.",
        },
      ],
    },
    ar: {
      title: "دليل المطبخ اللبناني",
      intro:
        "يقوم المطبخ اللبناني على الطزاجة والأعشاب والحبوب والبقوليات والخضروات وزيت الزيتون والليمون والثوم والسمسم، وعلى تقليد مشاركة العديد من الأطباق حول مائدة واحدة.",
      sections: [
        {
          title: "الطزاجة عنصر أساسي",
          body:
            "يتكرر استخدام البقدونس والنعناع والطماطم والخيار والليمون والثوم وزيت الزيتون والخضروات الموسمية. تمنح هذه المكونات الطعام حيوية وتوازنًا من دون الاعتماد دائمًا على الصلصات الثقيلة.",
        },
        {
          title: "دور المازة",
          body:
            "المازة ليست مجرد مجموعة أطباق صغيرة، بل أسلوب في تناول الطعام. يمكن تقديم الحمص والمتبل والتبولة والفتوش واللبنة والمخللات والخضروات والخبز معًا، ليصنع كل شخص تركيبته الخاصة أثناء الوجبة.",
        },
        {
          title: "مكونات أساسية تستحق المعرفة",
          body:
            "الطحينة والبرغل والحمص والعدس والبقدونس والنعناع والسماق والزعتر ودبس الرمان والثوم والليمون وزيت الزيتون تشكل أساسًا مهمًا في المطبخ اللبناني. معرفة هذه المكونات تجعل فهم الوصفات وتعديلها أسهل.",
        },
        {
          title: "كيف تتدرج النكهات",
          body:
            "يعتمد الطبخ اللبناني كثيرًا على التباين بدل الاعتماد على نكهة واحدة قوية. يمكن موازنة الطحينة أو اللبن بالليمون، وإضافة الأعشاب للنضارة والسماق للحموضة والتوابل المحمصة للدفء. فهم أدوار هذه المكونات أهم من حفظ كميات ثابتة فقط.",
        },
        {
          title: "الطبخ الصحي من دون فقدان الهوية",
          body:
            "يمكن لمائدة لبنانية متوازنة أن تجمع الخضروات والبقوليات والأعشاب والحبوب الكاملة ومنتجات الألبان والدهون الصحية. الهدف ليس تحويل الأطباق التقليدية إلى طعام حمية، بل الحفاظ على نكهتها ضمن وجبة متنوعة.",
        },
        {
          title: "من أين تبدأ",
          body:
            "يمكن البدء بالحمص والتبولة والفتوش وأطباق العدس والخضروات المشوية والدجاج أو السمك وصلصات الطحينة البسيطة. وتقدم هذه المجموعة مدخلًا عمليًا إلى كثير من المكونات والتقنيات المتكررة في الطبخ اللبناني.",
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
        "Egyptian breakfast is often hearty, affordable, and built around foods that provide lasting satisfaction. Ful medames sits at the center of the tradition, joined by bread, vegetables, eggs, cheese, pickles, and fresh herbs.",
      sections: [
        {
          title: "Ful is a breakfast staple",
          body:
            "Slow-cooked fava beans can be seasoned with cumin, garlic, lemon, and oil, then finished with fresh vegetables and herbs. The dish is flexible enough to serve as breakfast, lunch, or part of a larger shared table.",
        },
        {
          title: "Bread and accompaniments",
          body:
            "Bread is useful for scooping ful and accompanying eggs, cheese, vegetables, and dips. Tomatoes, cucumber, herbs, pickles, and olives add freshness and contrast, while the amount of bread can be adjusted to the rest of the meal.",
        },
        {
          title: "Build a balanced breakfast",
          body:
            "A practical breakfast can combine legumes or eggs with vegetables, higher-fiber bread when available, fresh herbs, and a modest amount of healthy fat. The goal is variety rather than one perfect plate.",
        },
        {
          title: "Flavoring ful without overcomplicating it",
          body:
            "Cumin, lemon, garlic, chili, and olive oil or another cooking oil can change the character of ful. Add acidic ingredients gradually and taste as you go because the beans, lemon, and seasonings vary in intensity.",
        },
        {
          title: "Why the table matters",
          body:
            "Breakfast can be social and shared. Bread, beans, vegetables, cheese, eggs, and condiments can sit in the middle of the table, allowing everyone to assemble bites according to preference.",
        },
      ],
    },
    ar: {
      title: "دليل الفطور المصري",
      intro:
        "يتميز الفطور المصري بأنه مشبع وبسيط ومبني على أطعمة تمنح شعورًا جيدًا بالشبع. ويأتي الفول المدمس في قلب هذا التقليد إلى جانب الخبز والخضروات والبيض والجبن والمخللات والأعشاب الطازجة.",
      sections: [
        {
          title: "الفول من أساسيات الفطور",
          body:
            "يمكن تتبيل الفول المطهو ببطء بالكمون والثوم والليمون والزيت، ثم إضافة الخضروات والأعشاب الطازجة. ويمكن تقديمه للفطور أو الغداء أو ضمن مائدة أكبر.",
        },
        {
          title: "الخبز والمرافِقات",
          body:
            "يستخدم الخبز لتناول الفول ومرافقة البيض والجبن والخضروات والغموسات. وتضيف الطماطم والخيار والأعشاب والمخللات والزيتون الطزاجة والتباين، بينما يمكن ضبط كمية الخبز حسب بقية الوجبة.",
        },
        {
          title: "كيف تبني فطورًا متوازنًا",
          body:
            "يمكن الجمع بين البقوليات أو البيض والخضروات والخبز الأعلى في الألياف عند توفره والأعشاب الطازجة وكمية مناسبة من الدهون الصحية. التنوع أهم من البحث عن طبق مثالي واحد.",
        },
        {
          title: "تتبيل الفول دون تعقيد",
          body:
            "يمكن للكمون والليمون والثوم والفلفل الحار وزيت الزيتون أو زيت الطهي أن تغير شخصية الفول. أضف المكونات الحمضية تدريجيًا وتذوق أثناء التحضير لأن شدة الفول والليمون والتوابل تختلف.",
        },
        {
          title: "أهمية المائدة",
          body:
            "غالبًا ما يكون الفطور اجتماعيًا ومشتركًا. يوضع الخبز والفول والخضروات والجبن والبيض والمرافِقات في منتصف المائدة، ويستطيع كل شخص تكوين لقيماته حسب ذوقه.",
        },
      ],
    },
  },

  "lebanese-mezze-guide": {
    en: {
      title: "Lebanese Mezze Guide",
      intro:
        "Lebanese mezze is a shared-table tradition built around variety. The table may include creamy dips, fresh salads, vegetables, grains, pickles, bread, and grilled foods, allowing many flavors and textures to appear in one meal.",
      sections: [
        {
          title: "Think in combinations, not isolated dishes",
          body:
            "A mezze table works because dishes complement one another. A creamy dip can sit beside an acidic salad; fresh herbs balance richer foods; bread connects dips and vegetables; grilled foods add warmth and protein.",
        },
        {
          title: "Cold and warm dishes",
          body:
            "A well-planned mezze table can mix chilled salads and dips with warm vegetables or grilled dishes. This contrast keeps the meal interesting and makes it possible to prepare many components in advance.",
        },
        {
          title: "A simple balanced table",
          body:
            "Start with two or three vegetable-forward dishes, add a legume-based dip, include a grain or bread, then add a protein if desired. Fresh herbs, lemon, pickles, and olives can provide contrast.",
        },
        {
          title: "Portion variety is part of the experience",
          body:
            "Because many dishes are shared, diners can taste small portions of several foods. This makes mezze naturally suited to variety and social eating rather than one oversized main plate.",
        },
        {
          title: "Planning mezze for guests",
          body:
            "Choose dishes with different preparation demands. Make dips and grain dishes ahead, prepare salads close to serving, and keep bread and crisp vegetables separate until the table is ready.",
        },
      ],
    },
    ar: {
      title: "دليل المازة اللبنانية",
      intro:
        "المازة اللبنانية تقليد قائم على مائدة مشتركة وتنوع كبير. قد تضم المائدة المقبلات الكريمية والسلطات والخضروات والحبوب والمخللات والخبز والمشاوي، لتجمع نكهات وقوامات مختلفة في وجبة واحدة.",
      sections: [
        {
          title: "فكر في تناغم الأطباق",
          body:
            "تنجح مائدة المازة لأن الأطباق تكمل بعضها. يمكن لمقبل كريمي أن يأتي بجانب سلطة حامضة، وتوازن الأعشاب الطازجة الأطعمة الأغنى، بينما يربط الخبز بين المقبلات والخضروات وتضيف المشاوي الدفء والبروتين.",
        },
        {
          title: "الأطباق الباردة والدافئة",
          body:
            "يمكن لمائدة المازة الجيدة أن تجمع بين السلطات والمقبلات الباردة والخضروات الدافئة أو المشاوي. هذا التباين يجعل الوجبة أكثر تنوعًا ويسمح بتحضير كثير من المكونات مسبقًا.",
        },
        {
          title: "مائدة متوازنة ببساطة",
          body:
            "ابدأ بطبقين أو ثلاثة من الخضروات، ثم أضف مقبلًا يعتمد على البقوليات وخبزًا أو حبوبًا، ويمكن إضافة مصدر بروتين حسب الرغبة. تمنح الأعشاب والليمون والمخللات والزيتون المائدة تباينًا واضحًا.",
        },
        {
          title: "التنوع جزء من التجربة",
          body:
            "لأن الأطباق مشتركة، يستطيع الجميع تذوق كميات صغيرة من أطعمة متعددة. وهذا يجعل المازة مناسبة للتنوع والأكل الاجتماعي بدلًا من الاعتماد على طبق رئيسي ضخم واحد.",
        },
        {
          title: "تخطيط المازة للضيوف",
          body:
            "اختر أطباقًا تختلف في متطلبات التحضير. حضّر الغموسات وأطباق الحبوب مسبقًا، وجهز السلطات قرب موعد التقديم، واحفظ الخبز والخضروات المقرمشة منفصلة حتى تجهيز المائدة.",
        },
      ],
    },
  },

  "egyptian-pantry-essentials": {
    en: {
      title: "Egyptian Pantry Essentials",
      intro:
        "A useful Egyptian pantry does not need to be enormous. A focused collection of legumes, grains, spices, aromatics, oils, and practical staples can support many everyday dishes.",
      sections: [
        {
          title: "Fava beans and legumes",
          body:
            "Fava beans are central to Egyptian food, especially ful medames. Lentils, chickpeas, and other legumes also provide useful foundations for soups, salads, stews, and meat-free meals. Keeping dried or cooked legumes available makes weeknight cooking easier.",
        },
        {
          title: "Rice, grains, and bread",
          body:
            "Rice, wheat products, and breads appear in many meals. Koshari demonstrates how grains, pasta, lentils, chickpeas, tomato sauce, and onions can be combined into a substantial dish, while bread often accompanies breakfast and vegetable dishes.",
        },
        {
          title: "Aromatic vegetables",
          body:
            "Onions, garlic, tomatoes, and fresh herbs are practical flavor-building ingredients. Keeping onions and garlic on hand provides a base for soups, sauces, stews, legumes, and vegetable dishes.",
        },
        {
          title: "Spices and acidity",
          body:
            "Cumin, coriander, chili, black pepper, lemon, and vinegar can add warmth, brightness, and contrast. Egyptian cooking often benefits from balancing savory and earthy ingredients with acidity rather than relying only on salt.",
        },
        {
          title: "How to stock efficiently",
          body:
            "Buy frequently used dry goods in sensible quantities, keep spices protected from heat and moisture, and rotate older ingredients forward. Fresh herbs and vegetables should be purchased more frequently because their quality changes quickly.",
        },
      ],
    },
    ar: {
      title: "أساسيات المطبخ المصري",
      intro:
        "لا يحتاج مخزن المطبخ المصري إلى أن يكون ضخمًا. فمجموعة مركزة من البقوليات والحبوب والتوابل والمكونات العطرية والزيوت والمكونات الأساسية تكفي لدعم كثير من الأطباق اليومية.",
      sections: [
        {
          title: "الفول والبقوليات",
          body:
            "يحتل الفول مكانة مهمة في الطعام المصري، خصوصًا الفول المدمس. كما توفر العدس والحمص وغيرها من البقوليات أساسًا للشوربات والسلطات واليخنات والوجبات الخالية من اللحوم. ويسهّل الاحتفاظ بها الطبخ خلال أيام الأسبوع.",
        },
        {
          title: "الأرز والحبوب والخبز",
          body:
            "يظهر الأرز ومنتجات القمح والخبز في كثير من الوجبات. ويقدم الكشري مثالًا واضحًا على جمع الحبوب والمعكرونة والعدس والحمص وصلصة الطماطم والبصل، بينما يرافق الخبز وجبات الفطور والخضروات.",
        },
        {
          title: "الخضروات العطرية",
          body:
            "البصل والثوم والطماطم والأعشاب الطازجة من أهم المكونات العملية لبناء النكهة. والاحتفاظ بالبصل والثوم في المنزل يوفر قاعدة للشوربات والصلصات واليخنات والبقوليات وأطباق الخضروات.",
        },
        {
          title: "التوابل والحموضة",
          body:
            "يمكن للكمون والكزبرة والفلفل الأسود والفلفل الحار والليمون والخل أن تضيف الدفء والانتعاش والتباين. ويستفيد الطبخ المصري من موازنة النكهات المالحة والترابية بالحموضة بدل الاعتماد على الملح وحده.",
        },
        {
          title: "كيف تخزن بذكاء",
          body:
            "اشترِ المكونات الجافة كثيرة الاستخدام بكميات مناسبة، واحفظ التوابل بعيدًا عن الحرارة والرطوبة، واستخدم الأقدم أولًا. أما الأعشاب والخضروات الطازجة فمن الأفضل شراؤها بصورة متكررة لأن جودتها تتغير سريعًا.",
        },
      ],
    },
  },

  "lebanese-pantry-essentials": {
    en: {
      title: "Lebanese Pantry Essentials",
      intro:
        "A practical Lebanese pantry revolves around ingredients that repeatedly appear in dips, salads, grains, legumes, breads, grilled foods, and sauces. Learning what each ingredient contributes makes recipes easier to adapt.",
      sections: [
        {
          title: "Tahini and sesame",
          body:
            "Tahini is one of the most useful Lebanese pantry ingredients. It provides richness in hummus and sauces and can be loosened with lemon juice and cold water. Sesame also appears as seeds or in breads and sweets.",
        },
        {
          title: "Bulgur and legumes",
          body:
            "Bulgur is useful in salads and grain-based dishes, while chickpeas and lentils contribute protein, fiber, and substance. Keeping these ingredients available makes it easier to build meat-free meals.",
        },
        {
          title: "Herbs and bright seasonings",
          body:
            "Parsley, mint, sumac, za'atar, lemon, garlic, and pomegranate molasses are important flavor tools. They allow cooks to create contrast between rich, creamy, savory, sour, and fresh elements.",
        },
        {
          title: "Olive oil and everyday basics",
          body:
            "Olive oil is used for dressings, marinades, cooking, dipping, and finishing. Tomatoes, cucumbers, onions, garlic, yogurt, olives, and pickles also support many everyday meals.",
        },
        {
          title: "Storage and freshness",
          body:
            "Keep tahini and oils protected from excessive heat, store dry grains and legumes in dry containers, and keep herbs and vegetables chilled appropriately. Buy fresh herbs in smaller quantities so they remain vibrant when needed.",
        },
      ],
    },
    ar: {
      title: "أساسيات المطبخ اللبناني",
      intro:
        "يعتمد مخزن المطبخ اللبناني على مكونات تتكرر في المقبلات والسلطات والحبوب والبقوليات والخبز والمشاوي والصلصات. وفهم دور كل مكوّن يجعل تعديل الوصفات واستخدامها أسهل.",
      sections: [
        {
          title: "الطحينة والسمسم",
          body:
            "الطحينة من أكثر المكونات فائدة في المطبخ اللبناني. تمنح الحمص والصلصات الغنى، ويمكن تخفيفها بعصير الليمون والماء البارد. ويظهر السمسم أيضًا كبذور وفي أنواع من الخبز والحلويات.",
        },
        {
          title: "البرغل والبقوليات",
          body:
            "يستخدم البرغل في السلطات وأطباق الحبوب، بينما يضيف الحمص والعدس البروتين والألياف والقوام. والاحتفاظ بهذه المكونات في المنزل يسهل إعداد وجبات نباتية مشبعة.",
        },
        {
          title: "الأعشاب والمنكهات المنعشة",
          body:
            "البقدونس والنعناع والسماق والزعتر والليمون والثوم ودبس الرمان أدوات مهمة لبناء النكهة. وتساعد على صنع تباين بين العناصر الغنية والكريمية والمالحة والحامضة والطازجة.",
        },
        {
          title: "زيت الزيتون والأساسيات اليومية",
          body:
            "يستخدم زيت الزيتون في التتبيلات والطهي والتغميس وكلمسة نهائية. كما تدعم الطماطم والخيار والبصل والثوم والزبادي والزيتون والمخللات كثيرًا من الوجبات اليومية.",
        },
        {
          title: "الحفظ والحفاظ على الطزاجة",
          body:
            "احفظ الطحينة والزيوت بعيدًا عن الحرارة الزائدة، وخزن الحبوب والبقوليات الجافة في أوعية جافة، واحفظ الأعشاب والخضروات بالطريقة المناسبة. واشترِ الأعشاب الطازجة بكميات صغيرة حتى تبقى نضرة.",
        },
      ],
    },
  },

  "mediterranean-herbs-spices-guide": {
    en: {
      title: "Mediterranean Herbs & Spices Guide",
      intro:
        "Mediterranean cooking depends on contrast and freshness as much as on seasoning intensity. Herbs and spices can make legumes, vegetables, grains, grilled foods, and sauces more distinctive without making the food complicated.",
      sections: [
        {
          title: "Parsley and mint",
          body:
            "Parsley brings a fresh, grassy quality to salads, dips, grains, and grilled foods. Mint adds cooling brightness and works especially well with yogurt, vegetables, salads, and drinks. Both are often best added close to serving.",
        },
        {
          title: "Cumin and coriander",
          body:
            "Cumin provides warm, earthy notes and works naturally with beans, lentils, vegetables, and grilled foods. Coriander seed or ground coriander adds citrus-like spice and can complement cumin without overwhelming a dish.",
        },
        {
          title: "Sumac",
          body:
            "Sumac contributes a tart, lemon-like acidity. It can brighten salads, onions, grilled foods, hummus, and breads. Because it adds acidity as well as seasoning, taste before adding extra lemon or vinegar.",
        },
        {
          title: "Za'atar",
          body:
            "Za'atar is a fragrant seasoning blend whose exact composition varies. It commonly combines dried herbs, sesame, and sumac. It can be used with bread, olive oil, vegetables, eggs, yogurt, and simple roasted dishes.",
        },
        {
          title: "Cinnamon and warm spices",
          body:
            "Cinnamon and related warm spices can appear in both sweet and savory regional cooking. Small amounts can add depth to rice, meat, stews, desserts, and drinks without making the dish taste strongly of cinnamon.",
        },
        {
          title: "How to use spices well",
          body:
            "Add dried spices at a stage where their aroma can develop, but avoid prolonged high heat that can make delicate spices taste harsh. Fresh herbs usually benefit from shorter exposure to heat and are often best used as a finishing element.",
        },
      ],
    },
    ar: {
      title: "دليل أعشاب وتوابل البحر المتوسط",
      intro:
        "يعتمد الطبخ المتوسطي على التباين والطزاجة بقدر اعتماده على التوابل. ويمكن للأعشاب والتوابل أن تجعل البقوليات والخضروات والحبوب والمشاوي والصلصات أكثر تميزًا دون تعقيد الوصفة.",
      sections: [
        {
          title: "البقدونس والنعناع",
          body:
            "يمنح البقدونس نكهة عشبية طازجة للسلطات والغموسات والحبوب والمشاوي. ويضيف النعناع انتعاشًا واضحًا ويتناسب مع الزبادي والخضروات والسلطات والمشروبات. وغالبًا يفضل إضافتهما قرب التقديم.",
        },
        {
          title: "الكمون والكزبرة",
          body:
            "يمنح الكمون نكهة دافئة وترابية ويتناسب مع الفول والعدس والخضروات والمشاوي. وتضيف بذور الكزبرة أو الكزبرة المطحونة نكهة عطرية ذات طابع حمضي خفيف وتكمل الكمون.",
        },
        {
          title: "السماق",
          body:
            "يضيف السماق حموضة تشبه الليمون. ويمكن استخدامه مع السلطات والبصل والمشاوي والحمص والخبز. وبما أنه يضيف الحموضة أيضًا، فمن الأفضل التذوق قبل إضافة المزيد من الليمون أو الخل.",
        },
        {
          title: "الزعتر",
          body:
            "الزعتر خلطة عطرية تختلف مكوناتها حسب المنطقة والمنتج. وغالبًا تجمع الأعشاب المجففة والسمسم والسماق. ويمكن استخدامه مع الخبز وزيت الزيتون والخضروات والبيض والزبادي والأطباق المشوية البسيطة.",
        },
        {
          title: "القرفة والتوابل الدافئة",
          body:
            "يمكن أن تظهر القرفة وغيرها من التوابل الدافئة في الأطباق الحلوة والمالحة. وتكفي كمية صغيرة لإضافة عمق إلى الأرز واللحوم واليخنات والحلويات والمشروبات دون أن تصبح نكهة القرفة طاغية.",
        },
        {
          title: "كيف تستخدم التوابل جيدًا",
          body:
            "أضف التوابل الجافة في المرحلة التي تسمح لعطرها بالظهور، وتجنب الحرارة العالية لفترات طويلة حتى لا تصبح النكهة قاسية. أما الأعشاب الطازجة فعادة تستفيد من الطهي القصير وتناسب إضافتها في النهاية.",
        },
      ],
    },
  },

  "tahini-guide": {
    en: {
      title: "Tahini Guide",
      intro:
        "Tahini is a smooth paste made from ground sesame seeds and one of the most useful ingredients in Egyptian and Lebanese cooking. Its flavor is rich, nutty, slightly bitter, and highly adaptable.",
      sections: [
        {
          title: "What tahini is",
          body:
            "Tahini is made by grinding sesame seeds into a paste. The exact flavor and texture can vary depending on the sesame, roasting, grinding, and processing method. Good tahini should be pourable or easily stirred rather than permanently separated and hard.",
        },
        {
          title: "Why tahini thickens with lemon",
          body:
            "When lemon juice is first mixed into tahini, the paste can become surprisingly thick. This is normal. Gradually whisking in cold water loosens the mixture and creates a smooth, creamy sauce.",
        },
        {
          title: "Building a balanced tahini sauce",
          body:
            "A simple sauce can combine tahini, lemon, garlic, water, and salt. Add water gradually and taste as you go. If the sauce becomes too sharp, a little more tahini or water can soften it; if it is too rich, additional acidity can restore balance.",
        },
        {
          title: "Uses beyond hummus",
          body:
            "Tahini can dress roasted vegetables, grilled chicken, fish, falafel, grain bowls, salads, and sandwiches. It also works with yogurt, herbs, garlic, and spices, making it useful as a base rather than only as a dip.",
        },
        {
          title: "Buying and storing tahini",
          body:
            "Stir a separated jar thoroughly before judging its texture. Check the ingredient list when choosing between products and store it according to the package directions. Protecting it from excessive heat helps preserve quality.",
        },
        {
          title: "Using tahini in balanced meals",
          body:
            "Tahini is nutritious but energy-dense, so portion matters. Pairing it with vegetables, legumes, whole grains, herbs, and acidic ingredients creates a satisfying combination without requiring a very large amount of sauce.",
        },
      ],
    },
    ar: {
      title: "دليل الطحينة",
      intro:
        "الطحينة معجون ناعم مصنوع من السمسم المطحون، وهي من أكثر المكونات استخدامًا في المطبخين المصري واللبناني. تتميز بنكهة غنية ومكسراتية مع مرارة خفيفة وقابلية كبيرة للتنوع.",
      sections: [
        {
          title: "ما هي الطحينة",
          body:
            "تصنع الطحينة من طحن بذور السمسم حتى تتحول إلى معجون. وقد يختلف الطعم والقوام حسب نوع السمسم والتحميص والطحن وطريقة المعالجة. ويفضل أن تكون الطحينة قابلة للتحريك أو السكب بعد الخلط الجيد.",
        },
        {
          title: "لماذا تصبح الطحينة كثيفة مع الليمون",
          body:
            "عند خلط عصير الليمون بالطحينة في البداية قد تصبح كثيفة بشكل ملحوظ، وهذا طبيعي. ويساعد إدخال الماء البارد تدريجيًا مع الخفق على تحويلها إلى صلصة ناعمة وكريمية.",
        },
        {
          title: "كيف تبني صلصة طحينة متوازنة",
          body:
            "يمكن تحضير صلصة بسيطة من الطحينة والليمون والثوم والماء والملح. أضف الماء تدريجيًا وتذوق أثناء التحضير. وإذا أصبحت حامضة جدًا يمكن زيادة الطحينة أو الماء، وإذا كانت غنية أكثر من اللازم يمكن زيادة الحموضة.",
        },
        {
          title: "استخدامات تتجاوز الحمص",
          body:
            "يمكن تقديم الطحينة مع الخضروات المشوية والدجاج والسمك والفلافل وأطباق الحبوب والسلطات والسندويشات. كما يمكن دمجها مع الزبادي والأعشاب والثوم والتوابل لتصبح قاعدة لصلصات متعددة.",
        },
        {
          title: "اختيار الطحينة وحفظها",
          body:
            "إذا انفصل الزيت في العبوة، حرك الطحينة جيدًا قبل الحكم على قوامها. اقرأ المكونات عند اختيار المنتج واحفظه وفق تعليمات العبوة، وتجنب الحرارة الزائدة للحفاظ على جودته.",
        },
        {
          title: "استخدام الطحينة ضمن وجبة متوازنة",
          body:
            "الطحينة مكون غني بالطاقة، لذلك يظل حجم الحصة مهمًا. وعند جمعها مع الخضروات والبقوليات والحبوب الكاملة والأعشاب والمكونات الحمضية يمكن الحصول على وجبة مشبعة دون الحاجة إلى كمية كبيرة من الصلصة.",
        },
      ],
    },
  },

  "zaatar-guide": {
    en: {
      title: "Za'atar Guide",
      intro:
        "Za'atar is a fragrant seasoning associated with Levantine food traditions. The exact blend varies, but herbs, sesame, and sumac are common components, creating a combination that is earthy, nutty, and pleasantly tangy.",
      sections: [
        {
          title: "What is za'atar?",
          body:
            "Za'atar can refer to an herb and to a prepared spice blend. Commercial blends vary by region and producer, so there is no single universal formula. Reading the ingredient list is useful when you want to understand what flavor a particular blend will provide.",
        },
        {
          title: "The role of sumac and sesame",
          body:
            "Sumac gives the blend its characteristic tartness, while sesame contributes nuttiness and texture. Dried herbs provide the aromatic base. The combination works because the components provide different kinds of flavor rather than competing for the same role.",
        },
        {
          title: "Traditional everyday uses",
          body:
            "Za'atar is commonly paired with bread and olive oil, and it can season flatbreads, vegetables, eggs, yogurt, salads, and simple roasted dishes. Its strong aroma means a modest amount can be enough.",
        },
        {
          title: "Using za'atar in modern cooking",
          body:
            "Sprinkle it over roasted vegetables, mix it into yogurt, use it as a finishing seasoning for grain bowls, or combine it with olive oil for dipping. Add it near the end when you want its herbal and tangy notes to remain noticeable.",
        },
        {
          title: "Storage",
          body:
            "Store za'atar in an airtight container away from heat, light, and moisture. Like other dried herbs and spices, its aroma gradually fades over time, so smaller quantities that are used regularly are often more practical than very large packages.",
        },
        {
          title: "Avoiding flavor overload",
          body:
            "Because za'atar already contains several aromatic elements, it does not always need additional heavy seasoning. Taste the finished food before adding more salt, lemon, or other spices.",
        },
      ],
    },
    ar: {
      title: "دليل الزعتر",
      intro:
        "الزعتر خلطة عطرية مرتبطة بتقاليد الطعام في بلاد الشام. وتختلف مكوناته حسب المنطقة والمنتج، لكن الأعشاب والسمسم والسماق من المكونات الشائعة، مما يمنحه نكهة ترابية ومكسراتية وحامضة بشكل لطيف.",
      sections: [
        {
          title: "ما هو الزعتر؟",
          body:
            "يمكن أن تشير كلمة الزعتر إلى نبات عشبي وإلى خلطة توابل جاهزة. وتختلف الخلطات التجارية حسب المنطقة والمنتج، لذلك لا توجد تركيبة عالمية واحدة. ومن المفيد قراءة قائمة المكونات لمعرفة طبيعة النكهة.",
        },
        {
          title: "دور السماق والسمسم",
          body:
            "يمنح السماق الخلطة حموضتها المميزة، بينما يضيف السمسم نكهة مكسراتية وقوامًا خفيفًا. وتوفر الأعشاب المجففة القاعدة العطرية، وتنجح الخلطة لأن كل مكون يؤدي دورًا مختلفًا.",
        },
        {
          title: "الاستخدامات اليومية التقليدية",
          body:
            "يستخدم الزعتر كثيرًا مع الخبز وزيت الزيتون، ويمكن أن يتبل الخبز المسطح والخضروات والبيض والزبادي والسلطات والأطباق المشوية البسيطة. وبسبب قوة رائحته تكفي عادة كمية معتدلة.",
        },
        {
          title: "استخدام الزعتر في الطبخ الحديث",
          body:
            "رشّه فوق الخضروات المشوية، أو امزجه مع الزبادي، أو استخدمه كتتبيلة نهائية لأطباق الحبوب، أو اخلطه بزيت الزيتون للتغميس. وتساعد إضافته قرب النهاية على الحفاظ على نكهته العشبية والحامضة.",
        },
        {
          title: "الحفظ",
          body:
            "احفظ الزعتر في وعاء محكم بعيدًا عن الحرارة والضوء والرطوبة. وكغيره من الأعشاب والتوابل المجففة، تخف رائحته مع الوقت، لذلك قد تكون الكميات الصغيرة المستخدمة باستمرار أكثر عملية.",
        },
        {
          title: "تجنب زيادة النكهة",
          body:
            "لأن الزعتر يحتوي أصلًا على عدة مكونات عطرية، لا يحتاج دائمًا إلى الكثير من التوابل الإضافية. تذوق الطبق قبل إضافة المزيد من الملح أو الليمون أو غيرهما.",
        },
      ],
    },
  },

  "sumac-guide": {
    en: {
      title: "Sumac Guide",
      intro:
        "Sumac is a deep red spice with a bright, tart flavor that is especially useful in Eastern Mediterranean cooking. It can add acidity and color without adding liquid to a dish.",
      sections: [
        {
          title: "What sumac tastes like",
          body:
            "Ground sumac has a tangy, lemon-like character with a fruity edge. Its acidity is usually gentler and more rounded than simply adding lemon juice, which makes it useful as a finishing seasoning.",
        },
        {
          title: "How it is used",
          body:
            "Sumac can be sprinkled over salads, onions, hummus, grilled meats, vegetables, rice, flatbreads, and yogurt. It is also associated with dishes such as fattoush, where its acidity helps connect vegetables, bread, and dressing.",
        },
        {
          title: "Sumac versus lemon",
          body:
            "Both can brighten food, but they behave differently. Lemon adds liquid and fresh juice, while sumac provides dry seasoning and acidity. They can sometimes be used together, but taste the dish before adding both heavily.",
        },
        {
          title: "When to add sumac",
          body:
            "Sumac is often particularly effective near the end of preparation because its bright character can be preserved. Adding it to a hot pan for a long time can reduce the fresh quality that makes it useful.",
        },
        {
          title: "Choosing and storing it",
          body:
            "Look for a product with a vivid aroma and clean, tart flavor. Store it sealed away from moisture, heat, and strong odors. Like other ground spices, it gradually loses intensity, so freshness matters.",
        },
        {
          title: "Simple ways to start",
          body:
            "Try sumac over sliced onions, cucumber and tomato salads, hummus, roasted vegetables, eggs, or grilled chicken. These simple uses make it easier to learn how much acidity you personally prefer.",
        },
      ],
    },
    ar: {
      title: "دليل السماق",
      intro:
        "السماق من التوابل ذات اللون الأحمر الداكن والنكهة الحامضة والمنعشة، ويستخدم كثيرًا في مطابخ شرق المتوسط. ويمكنه إضافة الحموضة واللون دون إضافة سوائل إلى الطبق.",
      sections: [
        {
          title: "كيف يكون طعم السماق",
          body:
            "يتميز السماق المطحون بنكهة حامضة تشبه الليمون مع لمسة فاكهية. وتكون حموضته عادة أكثر هدوءًا من عصير الليمون، لذلك يناسب استخدامه كتتبيلة نهائية.",
        },
        {
          title: "كيف يستخدم",
          body:
            "يمكن رش السماق فوق السلطات والبصل والحمص والمشاوي والخضروات والأرز والخبز المسطح والزبادي. ويرتبط أيضًا بأطباق مثل الفتوش حيث تساعد حموضته على الربط بين الخضروات والخبز والتتبيلة.",
        },
        {
          title: "السماق أم الليمون",
          body:
            "يمكن لكليهما إنعاش الطعام، لكن تأثيرهما مختلف. يضيف الليمون السائل والعصير الطازج، بينما يضيف السماق التتبيل الجاف والحموضة. ويمكن استخدامهما معًا أحيانًا، لكن يفضل التذوق قبل الإكثار منهما.",
        },
        {
          title: "متى تضيف السماق",
          body:
            "يكون السماق فعالًا خصوصًا قرب نهاية التحضير لأن نكهته المنعشة تبقى واضحة. وقد يؤدي تركه على حرارة عالية لفترة طويلة إلى تقليل الطابع الطازج الذي يميزه.",
        },
        {
          title: "اختياره وحفظه",
          body:
            "اختر سماقًا برائحة واضحة ونكهة حامضة نظيفة. واحفظه محكم الإغلاق بعيدًا عن الرطوبة والحرارة والروائح القوية. وكغيره من التوابل المطحونة تقل قوته مع الوقت.",
        },
        {
          title: "طرق بسيطة للبدء",
          body:
            "جرب السماق فوق البصل المقطع أو سلطات الخيار والطماطم أو الحمص أو الخضروات المشوية أو البيض أو الدجاج المشوي. تساعد هذه الاستخدامات البسيطة على اكتشاف مقدار الحموضة الذي تفضله.",
        },
      ],
    },
  },

  "healthy-mezze-table-guide": {
    en: {
      title: "How to Build a Healthy Mezze Table",
      intro:
        "A good mezze table is about balance and variety rather than making every dish light. Combining vegetables, legumes, grains, fresh herbs, dips, bread, and protein creates a meal with different textures and flavors.",
      sections: [
        {
          title: "Start with vegetables",
          body:
            "Choose one fresh salad and one cooked or grilled vegetable dish. This gives the table color, freshness, fiber, and contrast while preventing richer foods from dominating the meal.",
        },
        {
          title: "Add legumes and whole-food staples",
          body:
            "Hummus, ful, lentil dishes, beans, bulgur, and other whole-food staples add substance and plant protein. They also work naturally with bread, vegetables, herbs, and acidic dressings.",
        },
        {
          title: "Use dips strategically",
          body:
            "Tahini-based sauces, yogurt dips, hummus, and vegetable spreads can bring richness. Several small portions usually create more variety than one very large serving, especially when other rich foods are present.",
        },
        {
          title: "Add protein when useful",
          body:
            "Grilled chicken, fish, eggs, or another protein can make the table more substantial. The choice depends on the rest of the meal; a mezze table does not need meat if legumes and other protein sources already provide enough substance.",
        },
        {
          title: "Finish with fresh elements",
          body:
            "Fresh herbs, lemon, olives, pickles, seasonal vegetables, and fruit can add brightness. Keep these elements crisp and fresh rather than preparing them too far ahead.",
        },
        {
          title: "Plan portions across the table",
          body:
            "Think about the whole meal rather than labeling each dish healthy or unhealthy. A rich dip can fit comfortably when surrounded by vegetables, legumes, salads, and sensible bread portions.",
        },
      ],
    },
    ar: {
      title: "كيف تبني مائدة مازة صحية",
      intro:
        "المائدة الجيدة لا تعني أن كل طبق يجب أن يكون خفيفًا، بل أن تكون الوجبة متنوعة ومتوازنة. جمع الخضروات والبقوليات والحبوب والأعشاب والمقبلات والخبز والبروتين يخلق وجبة غنية بالنكهات والقوامات.",
      sections: [
        {
          title: "ابدأ بالخضروات",
          body:
            "اختر سلطة طازجة وطبقًا من الخضروات المطهية أو المشوية. يمنح ذلك المائدة اللون والطزاجة والألياف والتباين ويمنع الأطعمة الأغنى من السيطرة على الوجبة.",
        },
        {
          title: "أضف البقوليات والمكونات الكاملة",
          body:
            "الحمص والفول وأطباق العدس والفاصوليا والبرغل وغيرها من المكونات الكاملة تضيف الشبع والبروتين النباتي. كما تنسجم طبيعيًا مع الخبز والخضروات والأعشاب والتتبيلات الحمضية.",
        },
        {
          title: "استخدم المقبلات بتوازن",
          body:
            "يمكن لصلصات الطحينة ومقبلات اللبن والحمص ومهروس الخضروات أن تضيف الغنى. وتمنح الكميات الصغيرة المتعددة تنوعًا أكبر من طبق واحد ضخم، خصوصًا عند وجود أطعمة غنية أخرى.",
        },
        {
          title: "أضف البروتين عند الحاجة",
          body:
            "يمكن للدجاج أو السمك أو البيض أو مصدر بروتين آخر أن يجعل المائدة أكثر إشباعًا. ويعتمد ذلك على بقية الوجبة؛ فلا تحتاج المائدة إلى اللحم إذا كانت البقوليات ومصادر البروتين الأخرى كافية.",
        },
        {
          title: "اختم بالمكونات الطازجة",
          body:
            "تضيف الأعشاب الطازجة والليمون والزيتون والمخللات والخضروات الموسمية والفاكهة نضارة واضحة. وحافظ على قوامها الطازج ولا تحضرها قبل وقت طويل من التقديم.",
        },
        {
          title: "وزع الحصص على مستوى المائدة",
          body:
            "فكر في الوجبة كاملة بدل تصنيف كل طبق بأنه صحي أو غير صحي. يمكن لمقبل غني أن يكون مناسبًا عندما تحيط به الخضروات والبقوليات والسلطات وكمية مناسبة من الخبز.",
        },
      ],
    },
  },

  "healthy-mediterranean-meal-planning": {
    en: {
      title: "Healthy Mediterranean Meal Planning",
      intro:
        "Mediterranean-style meal planning works best when it focuses on repeatable habits rather than complicated weekly menus. A small set of vegetables, legumes, grains, proteins, herbs, and sauces can create many different meals.",
      sections: [
        {
          title: "Build meals from components",
          body:
            "Instead of planning every dish from scratch, prepare a few useful components: cooked legumes, a grain, roasted vegetables, fresh salad ingredients, a sauce, and a protein. These can be combined differently across several meals.",
        },
        {
          title: "Plan vegetables first",
          body:
            "Vegetables provide color, fiber, freshness, and variety. Choose a mixture of raw and cooked vegetables so meals do not feel repetitive. Seasonal produce can also make planning more affordable and flavorful.",
        },
        {
          title: "Use legumes throughout the week",
          body:
            "Chickpeas, lentils, beans, and fava beans can appear in soups, salads, dips, bowls, and main dishes. Cooking a batch ahead can make healthy meals much easier to assemble.",
        },
        {
          title: "Rotate proteins and grains",
          body:
            "Alternate poultry, fish, eggs, dairy, and plant proteins according to preference. Pair them with rice, bulgur, whole grains, or bread in portions that suit the rest of the meal.",
        },
        {
          title: "Keep flavor-building ingredients ready",
          body:
            "Lemon, garlic, herbs, tahini, olive oil, sumac, za'atar, and simple yogurt sauces can make the same basic ingredients taste different. These are useful tools when meal planning starts to feel repetitive.",
        },
        {
          title: "Prepare safely and realistically",
          body:
            "Cool cooked foods promptly, refrigerate perishable ingredients, and use appropriate storage times. Plan only as much food as you can realistically store and eat so healthy preparation does not turn into unnecessary waste.",
        },
      ],
    },
    ar: {
      title: "تخطيط الوجبات المتوسطية الصحية",
      intro:
        "ينجح تخطيط الوجبات على الطريقة المتوسطية عندما يعتمد على عادات قابلة للتكرار بدل قوائم أسبوعية معقدة. ويمكن لمجموعة صغيرة من الخضروات والبقوليات والحبوب والبروتين والأعشاب والصلصات أن تصنع وجبات متنوعة.",
      sections: [
        {
          title: "ابنِ الوجبات من مكونات جاهزة",
          body:
            "بدل إعداد كل طبق من الصفر، حضّر بعض المكونات المفيدة مثل البقوليات المطهية والحبوب والخضروات المشوية ومكونات السلطة والصلصة ومصدر البروتين. ويمكن دمجها بطرق مختلفة خلال الأسبوع.",
        },
        {
          title: "خطط للخضروات أولًا",
          body:
            "توفر الخضروات اللون والألياف والطزاجة والتنوع. اختر مزيجًا من الخضروات النيئة والمطهوة حتى لا تصبح الوجبات متشابهة. كما يمكن أن تكون المنتجات الموسمية أكثر اقتصادية ونكهة.",
        },
        {
          title: "استخدم البقوليات خلال الأسبوع",
          body:
            "يمكن أن تظهر الحمص والعدس والفاصوليا والفول في الشوربات والسلطات والغموسات والأطباق الرئيسية. ويسهل طهي كمية مسبقًا إعداد الوجبات خلال أيام الأسبوع.",
        },
        {
          title: "نوّع مصادر البروتين والحبوب",
          body:
            "بدّل بين الدجاج والسمك والبيض ومنتجات الألبان والبروتين النباتي حسب تفضيلاتك. وقدم معها الأرز أو البرغل أو الحبوب الكاملة أو الخبز بكميات تناسب بقية الوجبة.",
        },
        {
          title: "احتفظ بمكونات بناء النكهة",
          body:
            "يمكن لليمون والثوم والأعشاب والطحينة وزيت الزيتون والسماق والزعتر وصلصات الزبادي البسيطة أن تجعل المكونات نفسها تبدو مختلفة. وهذه الأدوات مفيدة عندما يبدأ تخطيط الوجبات في الشعور بالتكرار.",
        },
        {
          title: "حضّر بواقعية وأمان",
          body:
            "برّد الأطعمة المطهية بسرعة واحفظ المكونات سريعة التلف في الثلاجة واتبع أوقات الحفظ المناسبة. وخطط فقط للكمية التي يمكنك حفظها وتناولها فعليًا حتى لا يتحول التحضير الصحي إلى هدر غير ضروري.",
        },
      ],
    },
  },

  "mediterranean-cooking-techniques": {
    en: {
      title: "Mediterranean Cooking Techniques",
      intro:
        "Many Mediterranean recipes rely on straightforward techniques rather than complicated equipment. Learning how to roast, grill, simmer, marinate, season, and prepare legumes and grains gives you skills that transfer across many recipes.",
      sections: [
        {
          title: "Roasting vegetables",
          body:
            "Roasting concentrates the natural sweetness of vegetables and creates browned edges. Cut vegetables into reasonably similar pieces, avoid overcrowding the pan, and season with enough oil to coat rather than saturate them.",
        },
        {
          title: "Grilling and controlled browning",
          body:
            "Grilling adds smoky notes and attractive browning to poultry, meat, fish, vegetables, and breads. Dry the surface when appropriate, preheat the cooking surface, and avoid constantly moving the food so browning can develop.",
        },
        {
          title: "Gentle simmering",
          body:
            "Legumes, soups, tomato-based dishes, and stews often benefit from gentle simmering. A controlled simmer helps ingredients soften and flavors develop without aggressively breaking apart delicate foods.",
        },
        {
          title: "Marinating",
          body:
            "Marinades can add flavor and help season food before grilling or roasting. Yogurt, lemon, garlic, olive oil, and spices are common tools. Acidic marinades should be used thoughtfully because very long exposure can change the texture of delicate ingredients.",
        },
        {
          title: "Cooking grains and legumes properly",
          body:
            "Rinse grains when appropriate and follow the cooking method suited to the ingredient. Dried legumes may require soaking or longer cooking, while canned legumes should be drained and rinsed when useful for the recipe.",
        },
        {
          title: "Balancing sauces and dressings",
          body:
            "A good dressing usually needs a balance of richness, acidity, salt, and aromatics. Tahini, yogurt, olive oil, lemon, garlic, and herbs can be adjusted with water to create the desired consistency.",
        },
      ],
    },
    ar: {
      title: "تقنيات الطبخ المتوسطي",
      intro:
        "تعتمد كثير من الوصفات المتوسطية على تقنيات واضحة لا تحتاج إلى معدات معقدة. وتعلم التحميص والشوي والطهي الهادئ والتتبيل وتحضير البقوليات والحبوب يمنحك مهارات قابلة للاستخدام في وصفات كثيرة.",
      sections: [
        {
          title: "تحميص الخضروات",
          body:
            "يساعد التحميص على تركيز الحلاوة الطبيعية للخضروات وصنع أطراف محمرة. قطّع الخضروات إلى أحجام متقاربة، وتجنب ازدحام الصينية، واستخدم كمية مناسبة من الزيت لتغليفها دون إغراقها.",
        },
        {
          title: "الشوي والتحمير المتحكم به",
          body:
            "يضيف الشوي نكهة مدخنة وتحميصًا جميلًا للدواجن واللحوم والأسماك والخضروات والخبز. جفف السطح عند الحاجة وسخن أداة الطهي مسبقًا وتجنب تحريك الطعام باستمرار حتى تتكون طبقة التحمير.",
        },
        {
          title: "الطهي الهادئ",
          body:
            "تستفيد البقوليات والشوربات وأطباق الطماطم واليخنات من الطهي الهادئ. ويساعد الغليان الخفيف على تطرية المكونات وتطوير النكهة دون تفكيك الأطعمة الحساسة بعنف.",
        },
        {
          title: "التتبيل",
          body:
            "يمكن للتتبيلات أن تضيف النكهة وتساعد على توزيعها قبل الشوي أو التحميص. ويستخدم الزبادي والليمون والثوم وزيت الزيتون والتوابل كثيرًا. وينبغي التعامل مع التتبيلات الحمضية بحذر لأن التعرض الطويل قد يغير قوام بعض المكونات.",
        },
        {
          title: "طهي الحبوب والبقوليات",
          body:
            "اغسل الحبوب عندما تكون الوصفة مناسبة لذلك واتبع طريقة الطهي الملائمة للمكوّن. وقد تحتاج البقوليات الجافة إلى النقع أو وقت أطول للطهي، بينما يمكن تصفية البقوليات المعلبة وغسلها عند الحاجة.",
        },
        {
          title: "موازنة الصلصات والتتبيلات",
          body:
            "تحتاج التتبيلة الجيدة عادة إلى توازن بين الغنى والحموضة والملح والمكونات العطرية. ويمكن تعديل الطحينة والزبادي وزيت الزيتون والليمون والثوم والأعشاب بالماء للوصول إلى القوام المطلوب.",
        },
      ],
    },
  },

  "healthier-mediterranean-recipes-guide": {
    en: {
      title: "Making Mediterranean Recipes Healthier Without Losing Flavor",
      intro:
        "Improving a Mediterranean recipe does not mean stripping away the ingredients that make it recognizable. The most useful changes usually involve balance, portions, cooking methods, vegetables, and smarter ways to build flavor.",
      sections: [
        {
          title: "Start with the whole meal",
          body:
            "A recipe should be considered in context. A richer dip can fit into a balanced meal when surrounded by vegetables, legumes, salads, and sensible bread portions. Avoid judging a single ingredient without considering the entire plate.",
        },
        {
          title: "Increase vegetables where they belong",
          body:
            "Adding vegetables works best when they make culinary sense. Serve roasted vegetables beside grilled foods, add herbs and fresh produce to grain dishes, or use vegetables to increase the volume of soups and stews without changing their defining character.",
        },
        {
          title: "Use cooking methods strategically",
          body:
            "Grilling, roasting, baking, steaming, and gentle simmering can often replace deeper frying without making a dish bland. When changing the method, compensate for lost richness with herbs, spices, acidity, and good browning.",
        },
        {
          title: "Keep flavorful fats, manage portions",
          body:
            "Olive oil, tahini, nuts, seeds, and dairy can contribute important flavor and texture. Healthier cooking does not require eliminating them; it means using enough to perform their culinary role without allowing them to overwhelm the meal.",
        },
        {
          title: "Build flavor instead of relying on salt",
          body:
            "Garlic, lemon, herbs, spices, toasted ingredients, vinegar, and sumac can create strong flavor with less dependence on salt. Taste throughout cooking so seasoning is adjusted gradually rather than added all at once.",
        },
        {
          title: "Make substitutions honestly",
          body:
            "When a recipe is adapted, explain what changed and why. A lighter version should still be recognizable as the same style of dish. Clear substitutions are more useful to readers than claiming that every traditional ingredient is unhealthy.",
        },
      ],
    },
    ar: {
      title: "كيف تجعل الوصفات المتوسطية أكثر توازنًا دون فقدان النكهة",
      intro:
        "تحسين الوصفة المتوسطية لا يعني إزالة المكونات التي تمنحها هويتها. وغالبًا ما تكون التغييرات الأكثر فائدة مرتبطة بالتوازن وحجم الحصص وطرق الطهي وزيادة الخضروات وبناء النكهة بطريقة أفضل.",
      sections: [
        {
          title: "ابدأ بالوجبة كاملة",
          body:
            "يجب النظر إلى الوصفة ضمن سياق الوجبة. يمكن لمقبل غني أن يناسب وجبة متوازنة عندما تحيط به الخضروات والبقوليات والسلطات وكمية مناسبة من الخبز. لا تحكم على مكوّن واحد دون النظر إلى الطبق كله.",
        },
        {
          title: "زد الخضروات حيث تناسب الوصفة",
          body:
            "تنجح إضافة الخضروات عندما تكون منطقية من ناحية الطبخ. قدم الخضروات المشوية مع المشاوي، وأضف الأعشاب والمكونات الطازجة إلى أطباق الحبوب، أو استخدم الخضروات لزيادة حجم الشوربات واليخنات دون تغيير شخصيتها.",
        },
        {
          title: "استخدم طرق الطهي بذكاء",
          body:
            "يمكن للشوي والتحميص والخبز والطهي على البخار والطهي الهادئ أن تحل أحيانًا محل القلي العميق دون جعل الطبق بلا نكهة. وعند تغيير طريقة الطهي، عوض عن فقدان الغنى بالأعشاب والتوابل والحموضة والتحمير الجيد.",
        },
        {
          title: "احتفظ بالدهون ذات النكهة واضبط الكمية",
          body:
            "يمكن لزيت الزيتون والطحينة والمكسرات والبذور ومنتجات الألبان أن تضيف نكهة وقوامًا مهمين. لا يتطلب الطبخ المتوازن حذفها، بل استخدامها بالقدر الذي يؤدي دورها دون أن تطغى على الوجبة.",
        },
        {
          title: "ابنِ النكهة بدل الاعتماد على الملح",
          body:
            "يمكن للثوم والليمون والأعشاب والتوابل والمكونات المحمصة والخل والسماق أن تصنع نكهة قوية مع تقليل الاعتماد على الملح. تذوق أثناء الطبخ حتى تضبط التتبيل تدريجيًا.",
        },
        {
          title: "قدم البدائل بوضوح",
          body:
            "عند تعديل وصفة، وضح ما الذي تغير ولماذا. يجب أن تظل النسخة الأخف مرتبطة بوضوح بأسلوب الطبق الأصلي. والبدائل الواضحة أكثر فائدة من الادعاء بأن كل مكوّن تقليدي غير صحي.",
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

          <div className="mt-14 rounded-3xl bg-emerald-50 p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {locale === "ar" ? "استكشف الوصفات" : "Explore the recipes"}
            </h2>

            <p className="mt-3 leading-7 text-gray-700">
              {locale === "ar"
                ? "حوّل ما تعلمته إلى وجبة حقيقية مع وصفات Healthy Mezze."
                : "Turn what you learned into a real meal with Healthy Mezze recipes."}
            </p>

            <Link
              href={`/${locale}/recipes`}
              className="mt-5 inline-flex font-semibold text-emerald-700 hover:text-emerald-900"
            >
              {locale === "ar" ? "تصفح الوصفات ←" : "Browse recipes →"}
            </Link>
          </div>
        </article>
      </Container>
    </main>
  );
}
