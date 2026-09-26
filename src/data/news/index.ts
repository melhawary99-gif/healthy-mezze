export type NewsSection = {
  heading: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
};

export type NewsSource = {
  title: string;
  url: string;
  description?: string;
};

export type NewsArticle = {
  slug: string;
  category: string;
  image?: string;
  imageAlt?: {
    en: string;
    ar: string;
  };
  publishedAt?: string;
  updatedAt?: string;

  en: {
    title: string;
    excerpt: string;
    sections: NewsSection[];
  };

  ar: {
    title: string;
    excerpt: string;
    sections: NewsSection[];
  };

  relatedRecipes?: string[];
  sources?: NewsSource[];
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "garlic-the-little-clove-behind-so-many-great-meals",
    category: "ingredient-benefits",
    image: "/images/news/ingredient-benefits/garlic/garlic-in-olive-oil.webp",
    imageAlt: {
      en: "Garlic cloves and rosemary gently infused in olive oil",
      ar: "فصوص الثوم وإكليل الجبل منقوعة بلطف في زيت الزيتون",
    },
    publishedAt: "2026-09-24",

    en: {
      title: "Garlic: The Little Clove Behind So Many Great Meals",
      excerpt:
        "Garlic is one of those small ingredients that can completely change a dish. In our kitchen, it is part of the everyday foundation of Middle Eastern cooking, from molokhia and lentil soup to shawarma, kabsa, hummus and more.",
      sections: [
        {
          heading: "Why We Use So Much Garlic",
          paragraphs: [
            "Garlic is a very important ingredient for many Middle Eastern and Asian kitchens. It adds a beautiful depth of flavor, and even the smell of garlic cooking can make you hungry before the meal is ready.",
            "In our home, garlic is one of those ingredients that appears again and again. We use it in molokhia, lentil soup, tomato soup, chicken shawarma, chicken kabsa, shish tawook and many other recipes on Healthy Mezze.",
            "There is also something nostalgic about it. I remember coming home and smelling garlic cooking and immediately trying to guess what Mom was making. My first guess was always Molokhiya because it was one of my favorites.",
          ],
        },
        {
          heading: "What Happens When You Crush Garlic?",
          paragraphs: [
            "One thing I learned over the years is that garlic changes depending on how you prepare it and when you add it.",
            "Crushing or chopping garlic breaks the cells and allows enzymes inside the garlic to interact with compounds that help form allicin and other sulfur-containing compounds. This is one reason freshly crushed garlic has such a strong aroma and sharp flavor.",
            "That does not mean every preparation has the same health effect. Raw garlic, gently cooked garlic, roasted garlic and concentrated garlic preparations are different things, and research does not allow us to treat them as interchangeable.",
          ],
        },
        {
          heading: "Raw Garlic: The Dragon Breath",
          paragraphs: [
            "Raw garlic is powerful. I call it dragon breath because it can be very strong and fiery.",
            "Raw garlic can be great in salads, dressings and other dishes when used carefully, but I personally do not like using too much of it. The flavor can become sharp very quickly, and the smell can stay with you.",
            "If you enjoy raw garlic, a little can go a long way. The goal is to let the garlic support the dish rather than completely take it over.",
          ],
        },
        {
          heading: "Lightly Cooked Garlic: My Favorite",
          paragraphs: [
            "Lightly cooked garlic is my favorite way to use it. You get a softer, warmer flavor without the sharpness of raw garlic.",
            "When frying chopped or minced garlic, I keep the heat low and watch it closely. Garlic can go from light golden brown to burnt and bitter surprisingly quickly.",
            "Starting garlic in relatively cool oil can also help it heat more gradually. Once it reaches a light golden color, I move quickly and add the next ingredients or remove it from the heat.",
          ],
        },
        {
          heading: "Roasted Garlic: A Completely Different Garlic",
          paragraphs: [
            "Roasting changes garlic again. The cloves become soft, mellow and sweeter, with a completely different character from raw garlic.",
            "Roasted garlic works beautifully in hummus and baba ganoush, and it can also be spread into sauces or used as a base for other dishes.",
          ],
          image:
            "/images/news/ingredient-benefits/garlic/garlic-raw-gently-cooked-roasted.webp",
          imageAlt:
            "Three garlic preparation stages: raw minced garlic, gently cooked garlic, and roasted garlic",
        },
        {
          heading: "The Health Side of Garlic",
          paragraphs: [
            "Garlic has been studied extensively, but this is where I think it is important to separate kitchen wisdom from medical claims.",
            "In my family, I grew up hearing that garlic was healing and could help with things like the stomach or throat. That is a family belief and part of the food culture I grew up with, not a claim that garlic cures illness.",
            "Modern research has investigated garlic and garlic preparations for several areas of health, including cardiovascular measures. The evidence varies depending on the preparation, dose and outcome being studied.",
          ],
        },
        {
          heading: "Blood Pressure",
          paragraphs: [
            "Some clinical research has found that certain garlic preparations may produce modest reductions in blood pressure in people with hypertension. That evidence mainly concerns studied garlic preparations or supplements rather than proving that eating a normal amount of garlic in a meal treats high blood pressure.",
            "So I would keep garlic where it belongs in the kitchen: as a flavorful ingredient that can be part of a balanced diet, not as a replacement for medical treatment.",
          ],
        },
        {
          heading: "Cholesterol",
          paragraphs: [
            "Garlic has also been studied for cholesterol. Some research suggests garlic preparations can have modest effects on cholesterol levels, but the results vary and the evidence should not be interpreted as saying that garlic alone will solve a cholesterol problem.",
            "For everyday cooking, I think the more useful takeaway is simple: garlic can make healthy food much more enjoyable, which makes it easier to keep cooking at home.",
          ],
        },
        {
          heading: "What About Immunity and Colds?",
          paragraphs: [
            "Garlic is often described as an immune booster or natural cold remedy. Research has looked at this question, but the evidence is limited and does not justify presenting garlic as a treatment or cure for colds.",
            "I enjoy garlic because it makes food better. That is already a pretty good reason to use it.",
          ],
        },
        {
          heading: "Garlic and the Digestive System",
          paragraphs: [
            "Too much garlic can be uncomfortable for some people. Heartburn, abdominal discomfort and strong breath or body odor are among the effects reported with garlic.",
            "This is another reason I prefer starting with a moderate amount. My Mom always said one or two cloves can be enough, and I think that is good kitchen advice when you are learning how to balance garlic.",
          ],
        },
        {
          heading: "How Much Garlic Should You Use?",
          paragraphs: [
            "There is no magic number of cloves that works for every recipe. Garlic should support the other ingredients rather than overpower them.",
            "If you are unsure, start with a little less. You can always cook more garlic separately and add it later, but removing an overpowering garlic flavor from a finished dish is much harder.",
            "If you accidentally use too much, dilution can sometimes help. Depending on the recipe, additional broth, water, yogurt or other ingredients can bring the balance back.",
          ],
        },
        {
          heading: "My Favorite Garlic Base",
          paragraphs: [
            "One of my favorite ways to start a meal is garlic in olive oil. I let the garlic warm gently, then add onions and continue building the dish with vegetable broth or other ingredients.",
            "The same idea can become a simple garlic-infused oil for salads and marinades. It is a small preparation that can give you a lot of flavor.",
          ],
          image:
            "/images/news/ingredient-benefits/garlic/garlic-in-olive-oil.webp",
          imageAlt:
            "Fresh garlic cloves and rosemary gently infused in olive oil",
        },
        {
          heading: "The Garlic Mistake I See Most Often",
          paragraphs: [
            "The biggest mistake is waiting for garlic to become dark brown because it looks like it is cooking nicely.",
            "By that point it can already be bitter and unpleasant. Garlic rewards attention. Keep the heat controlled, stay close to the pan and take it off the heat when it reaches that light golden stage.",
          ],
        },
        {
          heading: "The Garlic Peeling Trick I Use",
          paragraphs: [
            "For a quick way to peel garlic, cut off the flat end of the clove and place the flat side of a knife over it. Give it a small, controlled press to slightly crush the clove.",
            "The skin loosens and becomes much easier to remove. You do not need to completely smash the garlic unless the recipe calls for it.",
          ],
        },
        {
          heading: "The Five-Minute Garlic Pause",
          paragraphs: [
            "I like to let freshly chopped or crushed garlic sit for a few minutes before cooking it. You will sometimes hear this described as a five-minute rule.",
            "There is research showing that mechanical disruption of garlic allows enzyme activity and rapid formation of sulfur-containing compounds, and domestic-processing research has examined how preparation and heating affect those compounds.",
            "I would not describe the evidence as proving that allicin reaches an exact five-minute peak. For me, the practical lesson is simply to crush or chop the garlic and give it a short pause before continuing with the recipe.",
          ],
        },
        {
          heading: "Garlic Is Not Just About Benefits",
          paragraphs: [
            "For me, garlic is not primarily a health supplement. It is food.",
            "It creates aroma, depth and comfort. It can make a simple soup smell incredible and turn a basic sauce into something you want to keep eating.",
            "That smell of garlic cooking still reminds me of coming home and wondering what Mom was preparing. That connection is part of why I love cooking with it.",
          ],
        },
        {
          heading: "Garlic in Healthy Mezze",
          paragraphs: [
            "You will find garlic throughout Healthy Mezze because it is part of the way we actually cook. It appears in soups, marinades, sauces, chicken dishes, dips and other everyday meals.",
            "We also use the same approach we use across our recipes: taste as you go. If the garlic is taking over, adjust the balance. If the flavor is too quiet, you can add more.",
            "Cooking is not always about following a number perfectly. It is also about learning what the ingredients are doing in the pan.",
          ],
        },
        {
          heading: "Our Final Take on Garlic",
          paragraphs: [
            "Garlic is a little ingredient with a huge personality.",
            "Use it raw when you want sharpness, gently cook it when you want warmth and depth, and roast it when you want something mellow and sweet.",
            "Watch it carefully, start moderately and taste your food as you go. Most importantly, use garlic because you enjoy what it brings to the meal.",
            "That is how we use it in our kitchen, and that is why you will keep finding it throughout Healthy Mezze.",
          ],
        },
        {
          heading: "What the Research Says",
          paragraphs: [
            "The research linked below is included to support the health and garlic-processing discussion in this article. These sources discuss garlic and specific garlic preparations; they should not be read as proof that ordinary culinary garlic cures disease.",
          ],
        },
      ],
    },

    ar: {
      title: "الثوم: الفص الصغير وراء الكثير من أطباقنا الرائعة",
      excerpt:
        "الثوم من المكونات الصغيرة التي تستطيع تغيير الطبق بالكامل. في مطبخنا هو جزء أساسي من الطبخ الشرق أوسطي، من الملوخية وشوربة العدس إلى الشاورما والكبسة والحمص وغيرها.",
      sections: [
        {
          heading: "لماذا نستخدم الكثير من الثوم؟",
          paragraphs: [
            "الثوم مكوّن مهم جدًا في كثير من المطابخ الشرق أوسطية والآسيوية. فهو يضيف عمقًا جميلًا للطعم، وحتى رائحة الثوم أثناء الطهي يمكن أن تجعلك تشعر بالجوع قبل أن تجهز الوجبة.",
            "في بيتنا، الثوم من المكونات التي تتكرر في أطباق كثيرة. نستخدمه في الملوخية، وشوربة العدس، وشوربة الطماطم، وشاورما الدجاج، وكبسة الدجاج، والشيش طاووق، والعديد من وصفات Healthy Mezze.",
            "وهناك أيضًا جانب عاطفي مرتبط به. أتذكر أنني كنت أعود إلى البيت وأشم رائحة الثوم وهو يطهى وأبدأ فورًا في محاولة معرفة ماذا كانت أمي تطبخ. وكان أول تخمين لي دائمًا هو الملوخية لأنها كانت من أطباقي المفضلة.",
          ],
        },
        {
          heading: "ماذا يحدث عندما نسحق الثوم؟",
          paragraphs: [
            "من الأشياء التي تعلمتها مع الوقت أن الثوم يتغير حسب طريقة تحضيره ووقت إضافته إلى الطبق.",
            "عندما نسحق الثوم أو نقطعه، تتكسر خلاياه وتبدأ الإنزيمات الموجودة داخله بالتفاعل مع مركبات تساعد على تكوين الأليسين ومركبات كبريتية أخرى. وهذا أحد أسباب الرائحة القوية والطعم الحاد للثوم الطازج المسحوق.",
            "لكن هذا لا يعني أن كل طرق تحضير الثوم لها التأثير الصحي نفسه. فالثوم النيء والثوم المطهو بلطف والثوم المشوي ومستحضرات الثوم المركزة أشياء مختلفة، ولا تسمح لنا الأبحاث باعتبارها متطابقة.",
          ],
        },
        {
          heading: "الثوم النيء: نفس التنين!",
          paragraphs: [
            "الثوم النيء قوي جدًا. وأنا أسميه أحيانًا نفس التنين لأنه يمكن أن يكون حادًا وحارًا جدًا.",
            "يمكن استخدام الثوم النيء في السلطات والتتبيلات وأطباق أخرى، لكنني شخصيًا لا أحب الإكثار منه. فطعمه يصبح حادًا بسرعة ويمكن أن تبقى رائحته لفترة طويلة.",
            "إذا كنت تحب الثوم النيء، فالقليل منه يكفي. الفكرة هي أن يدعم الثوم الطبق بدلًا من أن يطغى عليه بالكامل.",
          ],
        },
        {
          heading: "الثوم المطهو بلطف: المفضل لدي",
          paragraphs: [
            "الثوم المطهو بلطف هو طريقتي المفضلة لاستخدامه. تحصل على طعم أكثر دفئًا ونعومة من دون حدة الثوم النيء.",
            "عند قلي الثوم المفروم أو المهروس، أحب أن أحافظ على حرارة منخفضة وأراقبه جيدًا. يمكن أن يتحول الثوم من ذهبي فاتح إلى محروق ومر خلال وقت قصير جدًا.",
            "كما أن بدء طهي الثوم في زيت غير شديد السخونة يمكن أن يساعده على التسخين تدريجيًا. وعندما يصل إلى اللون الذهبي الفاتح، أتحرك بسرعة وأضيف بقية المكونات أو أرفعه عن النار.",
          ],
        },
        {
          heading: "الثوم المشوي: ثوم مختلف تمامًا",
          paragraphs: [
            "الشوي يغير الثوم مرة أخرى. تصبح الفصوص طرية وناعمة وأكثر حلاوة، بطابع مختلف تمامًا عن الثوم النيء.",
            "الثوم المشوي رائع مع الحمص والبابا غنوج، ويمكن أيضًا هرسه داخل الصلصات أو استخدامه كأساس لأطباق أخرى.",
          ],
          image:
            "/images/news/ingredient-benefits/garlic/garlic-raw-gently-cooked-roasted.webp",
          imageAlt:
            "ثلاث مراحل لتحضير الثوم: ثوم نيء مفروم، وثوم مطهو بلطف، وثوم مشوي",
        },
        {
          heading: "الجانب الصحي للثوم",
          paragraphs: [
            "تمت دراسة الثوم بشكل واسع، لكنني أعتقد أنه من المهم هنا التفريق بين حكمة المطبخ والادعاءات الطبية.",
            "نشأت وأنا أسمع في عائلتي أن الثوم مفيد للشفاء ويمكن أن يساعد في أمور مثل المعدة أو الحلق. هذا اعتقاد عائلي وجزء من ثقافة الطعام التي نشأت عليها، وليس ادعاءً بأن الثوم يعالج الأمراض.",
            "بحثت الدراسات الحديثة في الثوم ومستحضرات الثوم في عدة مجالات صحية، بما في ذلك بعض المؤشرات المرتبطة بالقلب والأوعية الدموية. وتختلف الأدلة حسب نوع المستحضر والجرعة والنتيجة التي تتم دراستها.",
          ],
        },
        {
          heading: "ضغط الدم",
          paragraphs: [
            "وجدت بعض الدراسات السريرية أن بعض مستحضرات الثوم قد تسبب انخفاضات بسيطة في ضغط الدم لدى الأشخاص المصابين بارتفاع ضغط الدم. لكن هذه الأدلة تتعلق بشكل أساسي بمستحضرات أو مكملات الثوم التي تمت دراستها، ولا تعني أن تناول كمية عادية من الثوم في وجبة يعالج ارتفاع ضغط الدم.",
            "لذلك أفضل أن يبقى الثوم في مكانه الطبيعي في المطبخ: مكوّنًا غنيًا بالنكهة يمكن أن يكون جزءًا من نظام غذائي متوازن، وليس بديلًا عن العلاج الطبي.",
          ],
        },
        {
          heading: "الكوليسترول",
          paragraphs: [
            "تمت دراسة الثوم أيضًا فيما يتعلق بالكوليسترول. وتشير بعض الأبحاث إلى أن مستحضرات الثوم قد يكون لها تأثير بسيط على مستويات الكوليسترول، لكن النتائج تختلف ولا ينبغي تفسيرها على أن الثوم وحده سيحل مشكلة الكوليسترول.",
            "بالنسبة للطهي اليومي، أعتقد أن الفكرة الأكثر فائدة بسيطة: الثوم يمكن أن يجعل الطعام الصحي ألذ بكثير، وهذا يجعل الاستمرار في الطبخ في المنزل أسهل وأكثر متعة.",
          ],
        },
        {
          heading: "ماذا عن المناعة ونزلات البرد؟",
          paragraphs: [
            "غالبًا ما يوصف الثوم بأنه مقوٍ للمناعة أو علاج طبيعي لنزلات البرد. وقد بحثت الدراسات هذا الموضوع، لكن الأدلة محدودة ولا تبرر تقديم الثوم على أنه علاج أو دواء لنزلات البرد.",
            "أنا أحب الثوم لأنه يجعل الطعام ألذ. وهذا في حد ذاته سبب جيد لاستخدامه.",
          ],
        },
        {
          heading: "الثوم والجهاز الهضمي",
          paragraphs: [
            "الإكثار من الثوم قد يسبب عدم ارتياح لبعض الأشخاص. ومن الآثار التي تم الإبلاغ عنها حرقة المعدة وعدم الراحة في البطن وقوة رائحة النفس أو الجسم.",
            "وهذا سبب آخر يجعلني أفضل البدء بكمية معتدلة. كانت أمي دائمًا تقول إن فصًا أو فصين قد يكونان كافيين، وأعتقد أن هذه نصيحة جيدة في المطبخ عندما تتعلم كيفية موازنة الثوم.",
          ],
        },
        {
          heading: "كمية الثوم التي نستخدمها",
          paragraphs: [
            "لا توجد كمية سحرية من فصوص الثوم تناسب كل وصفة. يجب أن يدعم الثوم بقية المكونات بدلًا من أن يطغى عليها.",
            "إذا لم تكن متأكدًا، ابدأ بكمية أقل قليلًا. يمكنك دائمًا طهي كمية إضافية من الثوم وإضافتها لاحقًا، لكن إزالة طعم الثوم القوي من طبق انتهى طهيه أصعب بكثير.",
            "إذا أضفت كمية كبيرة بالخطأ، فقد يساعد التخفيف أحيانًا. وحسب الوصفة، يمكن إضافة المزيد من المرق أو الماء أو الزبادي أو مكونات أخرى لاستعادة التوازن.",
          ],
        },
        {
          heading: "قاعدة الثوم المفضلة لدي",
          paragraphs: [
            "من طرق بدء الوجبة التي أحبها الثوم مع زيت الزيتون. أترك الثوم يسخن بلطف، ثم أضيف البصل وأكمل بناء الطبق باستخدام مرق الخضار أو المكونات الأخرى.",
            "ويمكن استخدام الفكرة نفسها لعمل زيت منكه بالثوم للسلطات والتتبيلات. إنها خطوة صغيرة لكنها تعطي الكثير من النكهة.",
          ],
          image:
            "/images/news/ingredient-benefits/garlic/garlic-in-olive-oil.webp",
          imageAlt:
            "فصوص ثوم طازجة وإكليل الجبل منقوعة بلطف في زيت الزيتون",
        },
        {
          heading: "أكثر خطأ أراه عند استخدام الثوم",
          paragraphs: [
            "أكبر خطأ هو انتظار تحول الثوم إلى بني داكن لأن شكله يوحي بأنه يطهى بشكل جيد.",
            "عندها قد يكون قد أصبح مرًا وغير مستساغ. الثوم يحتاج إلى الانتباه. حافظ على حرارة مناسبة، وابق قريبًا من المقلاة، وارفعه عن النار عندما يصل إلى اللون الذهبي الفاتح.",
          ],
        },
        {
          heading: "طريقة تقشير الثوم التي أستخدمها",
          paragraphs: [
            "لتقشير الثوم بسرعة، اقطع الطرف المسطح من الفص وضع الجانب المسطح من السكين فوقه. اضغط ضغطة صغيرة ومتحكمًا بها حتى يتشقق الفص قليلًا.",
            "ستجد أن القشرة أصبحت أسهل بكثير في الإزالة. ولا تحتاج إلى سحق الثوم بالكامل إلا إذا كانت الوصفة تتطلب ذلك.",
          ],
        },
        {
          heading: "استراحة الخمس دقائق للثوم",
          paragraphs: [
            "أحب أن أترك الثوم المفروم أو المسحوق حديثًا لبضع دقائق قبل طهيه. وأحيانًا تسمى هذه الفكرة قاعدة الخمس دقائق.",
            "توجد أبحاث تشير إلى أن تكسير خلايا الثوم يسمح بنشاط الإنزيمات وتكوين سريع لمركبات كبريتية، كما درست أبحاث معالجة الثوم المنزلية تأثير طريقة التحضير والحرارة على هذه المركبات.",
            "لكنني لا أصف الأدلة بأنها تثبت أن الأليسين يصل إلى ذروة دقيقة تمامًا بعد خمس دقائق. بالنسبة لي، الفكرة العملية ببساطة هي تقطيع أو سحق الثوم وتركه لفترة قصيرة قبل متابعة الوصفة.",
          ],
        },
        {
          heading: "الثوم ليس مجرد موضوع عن الفوائد",
          paragraphs: [
            "بالنسبة لي، الثوم ليس مكملًا صحيًا في المقام الأول. إنه طعام.",
            "إنه يصنع الرائحة والعمق والشعور بالراحة. يمكن أن يجعل شوربة بسيطة ذات رائحة مذهلة، وأن يحول صلصة عادية إلى شيء تريد الاستمرار في تناوله.",
            "ولا تزال رائحة الثوم أثناء الطهي تذكرني بالعودة إلى البيت ومحاولة معرفة ماذا كانت أمي تطبخ. وهذا جزء من سبب حبي للطبخ بالثوم.",
          ],
        },
        {
          heading: "الثوم في Healthy Mezze",
          paragraphs: [
            "ستجد الثوم في الكثير من وصفات Healthy Mezze لأنه جزء من الطريقة التي نطبخ بها فعلًا. يظهر في الشوربات والتتبيلات والصلصات وأطباق الدجاج والغموس وغيرها من الوجبات اليومية.",
            "ونستخدم معه الطريقة نفسها التي نتبعها في وصفاتنا عمومًا: تذوق أثناء الطهي. إذا أصبح الثوم قويًا جدًا، عدّل التوازن. وإذا كانت النكهة ضعيفة، يمكنك إضافة المزيد.",
            "الطبخ ليس دائمًا مجرد اتباع رقم محدد بدقة. إنه أيضًا تعلم ما الذي تفعله المكونات داخل المقلاة.",
          ],
        },
        {
          heading: "خلاصة رأينا في الثوم",
          paragraphs: [
            "الثوم مكوّن صغير بشخصية كبيرة.",
            "استخدمه نيئًا عندما تريد نكهة حادة، واطهه بلطف عندما تريد الدفء والعمق، واشوه عندما تريد نكهة ناعمة وحلوة.",
            "راقبه جيدًا، وابدأ بكمية معتدلة، وتذوق طعامك أثناء الطهي. والأهم من ذلك، استخدم الثوم لأنك تحب ما يضيفه إلى الوجبة.",
            "هذه هي الطريقة التي نستخدمه بها في مطبخنا، ولهذا ستستمر في العثور عليه في وصفات Healthy Mezze.",
          ],
        },
        {
          heading: "ماذا تقول الأبحاث؟",
          paragraphs: [
            "أدرجنا المصادر البحثية أدناه لدعم النقاش المتعلق بالثوم وطرق تحضيره والفوائد الصحية التي تمت دراستها. وتتحدث هذه المصادر عن الثوم ومستحضرات محددة منه، ولا ينبغي تفسيرها على أنها دليل على أن الثوم المستخدم في الطعام يعالج الأمراض.",
          ],
        },
      ],
    },

    relatedRecipes: [
      "cucumber-yogurt-salad",
      "lentil-soup",
      "red-lentil-soup",
      "spinach-lentil-soup",
      "shish-tawook",
      "chicken-shawarma",
      "creamy-cauliflower-soup",
      "classic-baba-ganoush",
      "herbed-labneh-dip",
      "grilled-shrimp-garlic-lemon",
      "makdous",
      "mediterranean-lemon-herb-salmon",
      "mediterranean-chicken-kabsa",
      "baked-beef-kofta",
      "baked-herb-fish",
      "mediterranean-vegetable-bake",
      "olive-tapenade",
      "cauliflower-steaks-tahini",
      "creamy-tzatziki-sauce",
      "classic-toum",
      "green-zhoug-sauce",
      "harissa-yogurt-sauce",
    ],

    sources: [
      {
        title: "NCCIH — Garlic",
        url: "https://www.nccih.nih.gov/health/garlic",
        description:
          "Evidence, uses, safety information and research on garlic and garlic preparations.",
      },
      {
        title: "Food Technology and Biotechnology — Domestic Processing of Garlic",
        url: "https://www.ftb.com.hr/images/pdfarticles/2018/October-December/FTB-56-590.pdf",
        description:
          "Study examining how domestic processing affects garlic compounds.",
      },
      {
        title: "PubMed — Allicin formation and garlic processing",
        url: "https://pubmed.ncbi.nlm.nih.gov/21480265/",
        description:
          "Research discussing alliinase activity and formation of allicin after garlic disruption.",
      },
      {
        title: "PubMed — Garlic and blood pressure",
        url: "https://pubmed.ncbi.nlm.nih.gov/25239480/",
        description:
          "Systematic review and meta-analysis examining garlic preparations and blood pressure.",
      },
      {
        title: "NCCIH — High Cholesterol and Natural Products",
        url: "https://www.nccih.nih.gov/health/providers/digest/high-cholesterol-and-natural-products-science",
        description:
          "Evidence overview including research on garlic and cholesterol.",
      },
      {
        title: "NCCIH — Colds, Flu, and Complementary Health Approaches",
        url: "https://www.nccih.nih.gov/health/colds-flu-and-complementary-health-approaches",
        description:
          "Evidence and limitations concerning complementary approaches for colds and flu.",
      },
    ],
  },
];
