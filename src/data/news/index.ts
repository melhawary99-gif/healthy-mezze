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
    slug: "10-simple-kitchen-hacks-home-cooks-swear-by",
    category: "cooking-tips",
    publishedAt: "2026-09-30",

    en: {
      title: "10 Simple Kitchen Hacks Home Cooks Swear By",
      excerpt:
        "Ten simple cooking tips and kitchen hacks that home cooks say actually work — from making quick buttermilk to keeping herbs fresh and balancing salty food.",
      sections: [
        {
          heading: "10 Simple Hacks Worth Trying",
          paragraphs: [
            "These are the little cooking tricks that can save time, reduce cleanup and make everyday kitchen jobs easier. Some are simple substitutions, some are storage tricks, and others are small techniques that can make a noticeable difference.",
            "Here are ten practical kitchen hacks that home cooks swear by. Try the ones that fit the way you cook and see which ones earn a permanent place in your kitchen routine.",
          ],
        },
        {
          heading: "01 — No Buttermilk? No Problem",
          paragraphs: [
            "Need only a little buttermilk for a recipe? Mix 1 cup of milk with 1 tablespoon of lemon juice and let it sit for about 10 minutes.",
            "You do not need to buy a whole bottle of buttermilk when a recipe only calls for a small amount. This simple mixture can be a convenient substitute for many recipes that call for buttermilk.",
          ],
        },
        {
          heading: "02 — Use Your Kitchen Scissors",
          paragraphs: [
            "Your kitchen scissors can do more than open food packages. For certain quick jobs, you can use them to cut herbs and smaller vegetables directly over the sink or a bowl.",
            "It can save you from reaching for a knife and cutting board when the job is small, which also means less washing afterward.",
          ],
        },
        {
          heading: "03 — Give Lettuce and Mint a Paper-Towel Layer",
          paragraphs: [
            "Fresh lettuce and mint can become limp surprisingly quickly. Place a paper towel around or alongside them before storing them in a container.",
            "The paper towel can help manage excess moisture and may help delicate greens stay fresh longer. It is a small storage trick that is especially useful when you have bought more herbs than you can use in one meal.",
          ],
        },
        {
          heading: "04 — Peel Garlic Faster",
          paragraphs: [
            "If peeling garlic feels like one of those small kitchen jobs that takes forever, there are a couple of simple tricks you can try.",
            "One method is to microwave the garlic for about 10 seconds, which can loosen the skins. If you prefer not to use a microwave, place the flat side of a knife over the clove and gently flatten it. The skin becomes much easier to remove.",
          ],
        },
        {
          heading: "05 — Want Fluffy Eggs? Try a Little Cream",
          paragraphs: [
            "For softer, fluffier eggs, add a small amount of heavy cream and whisk thoroughly before cooking.",
            "You do not need much cream. Whisk the eggs and cream together for around 25 seconds, then cook them as usual. The key is using a little rather than overwhelming the eggs with cream.",
          ],
        },
        {
          heading: "06 — Freeze It Before It Goes Bad",
          paragraphs: [
            "Have extra fruit, vegetables or bread that you are not going to use soon? Freezing can help extend their useful storage life and gives you another option before food goes to waste.",
            "How long food keeps its best quality in the freezer varies by the ingredient, packaging and freezer conditions, so follow appropriate storage guidance for the specific food. The useful habit is simple: freeze food you will not use soon instead of waiting until it is no longer usable.",
          ],
        },
        {
          heading: "07 — Keep Those Peanut-Butter Jar Lids",
          paragraphs: [
            "Have a 16 oz peanut-butter jar? Keep the lid before throwing it away.",
            "These lids can be useful with some similarly sized storage jars, and plastic lids do not have the same rust issue that metal lids can develop. Before discarding a container lid, check whether it has another useful job in your kitchen.",
          ],
        },
        {
          heading: "08 — Stop Your Cutting Board From Sliding",
          paragraphs: [
            "Place a slightly damp paper towel underneath your cutting board before you start chopping.",
            "The extra grip can help keep the board from sliding around while you work. A stable cutting board makes chopping more comfortable and gives you a steadier surface for food preparation.",
          ],
        },
        {
          heading: "09 — A Simple Rice-Cooking Routine",
          paragraphs: [
            "For a simple rice routine, start by rinsing the rice until the water becomes clearer. Then use approximately a 1.5:1 water-to-rice ratio.",
            "Add a little olive oil and salt from the beginning. Bring the rice and water to a boil, reduce to a simmer, and cook for about 15 minutes without opening the lid.",
            "Keeping the lid closed is part of the trick. Let the rice cook without repeatedly checking it, then remove it from the heat when it is done.",
          ],
        },
        {
          heading: "10 — If More Salt Isn't Helping, Try Some Acid",
          paragraphs: [
            "You tasted your food, added salt and still feel that something is missing. Before adding more salt, try a little acid.",
            "A small amount of lemon juice or vinegar can brighten flavors and make a dish taste more balanced. Sometimes the food does not need more salt — it needs contrast.",
          ],
        },
        {
          heading: "Put These Kitchen Hacks to Work",
          paragraphs: [
            "The best kitchen hacks are the ones you actually use. Try these simple ideas while making some of the Healthy Mezze recipes below.",
            "You will find recipes that make use of ingredients and techniques featured throughout these tips, including fresh herbs, garlic, lemon, vegetables, rice and simple seasoning.",
          ],
        },
      ],
    },

    ar: {
      title: "10 حيل بسيطة في المطبخ يقسم بها الطهاة المنزليون",
      excerpt:
        "عشر نصائح وحيل بسيطة في الطبخ يقول الطهاة المنزليون إنها مفيدة فعلًا، من تحضير بديل سريع للبن الرائب إلى حفظ الأعشاب وتوازن النكهات.",
      sections: [
        {
          heading: "10 حيل بسيطة تستحق التجربة",
          paragraphs: [
            "هذه من الحيل الصغيرة التي يمكن أن توفر الوقت وتقلل التنظيف وتجعل بعض مهام المطبخ اليومية أسهل. بعضها يعتمد على بدائل بسيطة، وبعضها يتعلق بالتخزين، وبعضها مجرد طريقة مختلفة للتعامل مع مكونات نستخدمها باستمرار.",
            "إليك عشر حيل عملية يقسم بها الطهاة المنزليون. جرّب ما يناسب طريقة طبخك واكتشف أي منها سيصبح جزءًا دائمًا من روتين مطبخك.",
          ],
        },
        {
          heading: "01 — لا يوجد لبن رائب؟ لا مشكلة",
          paragraphs: [
            "إذا كنت تحتاج إلى كمية صغيرة فقط من اللبن الرائب لوصفة معينة، اخلط كوبًا واحدًا من الحليب مع ملعقة كبيرة من عصير الليمون واتركه لمدة حوالي 10 دقائق.",
            "لا تحتاج إلى شراء عبوة كاملة من اللبن الرائب عندما تحتاج إلى كمية صغيرة فقط. يمكن أن يكون هذا الخليط بديلًا عمليًا في العديد من الوصفات التي تستخدم اللبن الرائب.",
          ],
        },
        {
          heading: "02 — استخدم مقص المطبخ",
          paragraphs: [
            "مقص المطبخ ليس فقط لفتح عبوات الطعام. في بعض المهام السريعة، يمكنك استخدامه لتقطيع الأعشاب والخضروات الصغيرة مباشرة فوق الحوض أو الوعاء.",
            "بهذه الطريقة قد لا تحتاج إلى استخدام السكين ولوح التقطيع عندما تكون المهمة بسيطة، وهذا يعني أيضًا تنظيفًا أقل بعد الانتهاء.",
          ],
        },
        {
          heading: "03 — ضع منشفة ورقية مع الخس والنعناع",
          paragraphs: [
            "يمكن أن يذبل الخس والنعناع الطازج بسرعة. ضع منشفة ورقية حولهما أو بجانبهما قبل تخزينهما في وعاء.",
            "يمكن أن تساعد المنشفة الورقية على التعامل مع الرطوبة الزائدة، وقد تساعد الأوراق والأعشاب الحساسة على البقاء طازجة لفترة أطول.",
          ],
        },
        {
          heading: "04 — قشّر الثوم بشكل أسرع",
          paragraphs: [
            "إذا كان تقشير الثوم من المهام الصغيرة التي تستغرق وقتًا أكثر مما تتوقع، فهناك طريقتان بسيطتان يمكنك تجربتهما.",
            "يمكنك تسخين الثوم في الميكروويف لمدة حوالي 10 ثوانٍ، مما قد يساعد على إرخاء القشرة. وإذا كنت لا تفضل استخدام الميكروويف، ضع الجانب المسطح من السكين فوق فص الثوم واضغط عليه برفق. ستصبح القشرة أسهل في الإزالة.",
          ],
        },
        {
          heading: "05 — تريد بيضًا هشًا وخفيفًا؟ جرّب قليلًا من الكريمة",
          paragraphs: [
            "للحصول على بيض أكثر نعومة وخفة، أضف كمية صغيرة من كريمة الخفق واخفق البيض جيدًا قبل الطهي.",
            "لا تحتاج إلى كمية كبيرة من الكريمة. اخفق البيض والكريمة معًا لمدة حوالي 25 ثانية، ثم اطههما كالمعتاد.",
          ],
        },
        {
          heading: "06 — جمّد الطعام قبل أن يفسد",
          paragraphs: [
            "لديك فواكه أو خضروات أو خبز إضافي ولن تستخدمه قريبًا؟ يمكن أن يساعد التجميد على إطالة مدة الاحتفاظ به ويمنحك خيارًا آخر قبل أن يصبح الطعام غير صالح للاستخدام.",
            "تختلف مدة الحفاظ على أفضل جودة في الفريزر حسب نوع الطعام والتغليف وظروف التجميد، لذلك اتبع إرشادات التخزين المناسبة لكل نوع. الفكرة البسيطة هي تجميد ما لن تستخدمه قريبًا بدلًا من الانتظار حتى يفسد.",
          ],
        },
        {
          heading: "07 — احتفظ بأغطية عبوات زبدة الفول السوداني",
          paragraphs: [
            "هل لديك عبوة زبدة فول سوداني بحجم 16 أونصة؟ احتفظ بالغطاء قبل التخلص منه.",
            "يمكن أن تكون هذه الأغطية مفيدة مع بعض أوعية التخزين ذات الأحجام المتقاربة، كما أن الأغطية البلاستيكية لا تعاني من مشكلة الصدأ نفسها التي قد تظهر في الأغطية المعدنية.",
          ],
        },
        {
          heading: "08 — امنع لوح التقطيع من الانزلاق",
          paragraphs: [
            "ضع منشفة ورقية مبللة قليلًا تحت لوح التقطيع قبل البدء في التقطيع.",
            "يمكن أن تساعد هذه الطبقة على زيادة الاحتكاك ومنع اللوح من الحركة أثناء العمل. لوح التقطيع الثابت يجعل تحضير الطعام أكثر راحة.",
          ],
        },
        {
          heading: "09 — طريقة بسيطة لطهي الأرز",
          paragraphs: [
            "ابدأ بغسل الأرز حتى يصبح الماء أكثر صفاءً. ثم استخدم تقريبًا نسبة 1.5 إلى 1 بين الماء والأرز.",
            "أضف قليلًا من زيت الزيتون والملح من البداية. ارفع الخليط إلى الغليان، ثم خفف الحرارة واتركه على نار هادئة لمدة حوالي 15 دقيقة دون فتح الغطاء.",
            "إبقاء الغطاء مغلقًا جزء مهم من الطريقة. اترك الأرز يطهى دون فتحه باستمرار، ثم ارفعه عن النار عندما ينضج.",
          ],
        },
        {
          heading: "10 — إذا لم يساعد المزيد من الملح، جرّب القليل من الحموضة",
          paragraphs: [
            "تذوقت الطعام وأضفت الملح وما زلت تشعر أن شيئًا ناقصًا؟ قبل إضافة المزيد من الملح، جرّب القليل من الحموضة.",
            "يمكن لكمية صغيرة من عصير الليمون أو الخل أن تجعل النكهات أكثر إشراقًا وتوازنًا. أحيانًا لا يحتاج الطعام إلى مزيد من الملح، بل يحتاج إلى تباين في النكهات.",
          ],
        },
        {
          heading: "طبّق هذه الحيل في مطبخك",
          paragraphs: [
            "أفضل حيل المطبخ هي التي تستخدمها فعلًا. جرّب هذه الأفكار البسيطة أثناء تحضير بعض وصفات Healthy Mezze أدناه.",
            "ستجد وصفات تعتمد على بعض المكونات والتقنيات الموجودة في هذه النصائح، مثل الأعشاب الطازجة والثوم والليمون والخضروات والأرز والتتبيل البسيط.",
          ],
        },
      ],
    },

    relatedRecipes: [
      "tomato-basil-soup",
      "lentil-soup",
      "chicken-orzo-soup",
      "greek-salad",
      "mediterranean-chickpea-salad",
      "white-bean-salad",
      "chicken-shawarma",
      "shish-tawook",
      "baked-herb-fish",
      "classic-hummus",
      "baba-ganoush",
      "herb-roasted-cauliflower",
    ],
  },


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

  {
    slug: "oregano-the-little-herb-that-makes-mediterranean-food-sing",
    category: "ingredient-benefits",
    image: "/images/news/ingredient-benefits/oregano/oregano.webp",
    imageAlt: {
      en: "Fresh oregano sprigs on a kitchen table",
      ar: "أغصان الأوريجانو الطازج على طاولة المطبخ",
    },
    publishedAt: "2026-09-26",

    en: {
      title: "Oregano: The Little Herb That Makes Mediterranean Food Sing",
      excerpt:
        "A personal look at oregano in Egyptian and Lebanese kitchens, from fresh leaves and old-fashioned drying to olive oil, everyday cooking, and what the research actually tells us about this intensely aromatic herb.",
      sections: [
        {
          heading: "A Little Herb With a Big Personality",
          paragraphs: [
            "Oregano is one of those herbs that can change the character of a dish with only a small amount. Its aroma is unmistakable, while the leaves bring a rich herbal warmth with peppery, grassy and slightly mint-like notes.",
            "In our kitchen, oregano is not something reserved for one particular recipe. We use it with meat marinades, salads, soups and chicken, and it has a natural place beside olive oil, lemon and other Mediterranean flavors.",
          ],
        },
        {
          heading: "Oregano Belongs in the Summer",
          paragraphs: [
            "Oregano loves warmth, and summer is when it feels most at home. When the plant is growing strongly, the young flower buds appearing at the tips of the branches can also be eaten.",
            "Oregano is widely available across the Middle East, and it has a familiar place in Egyptian and Lebanese kitchens. Its warm climate, strong aroma and ability to dry well make it especially practical for everyday cooking.",
          ],
          image: "/images/news/ingredient-benefits/oregano/oregano.webp",
          imageAlt: "Fresh oregano sprigs ready to be prepared",
        },
        {
          heading: "Fresh Oregano and Dried Oregano Are Not the Same",
          paragraphs: [
            "One of the most common beginner mistakes is treating fresh and dried oregano as though they have the same strength. They do not. Once the leaves are dried, water is removed and the flavor becomes much more concentrated.",
            "As a general cooking guide, extension food-preservation guidance uses about one teaspoon of dried herbs for one tablespoon of fresh herbs. That is roughly one part dried to three parts fresh, although the exact amount should always be adjusted to the herb and the dish.",
          ],
        },
        {
          heading: "How We Used to Dry Oregano",
          paragraphs: [
            "Today, a food dehydrator makes drying herbs simple. But in the past, we washed the oregano, tied it into bunches and hung it upside down in a dry place away from direct sun.",
            "Once the leaves were completely dry and crisp, we removed them from the stems and stored them in a clean, sealed container. The goal was simple: keep moisture, heat and light away from the dried herb so its aroma would last.",
          ],
          image: "/images/news/ingredient-benefits/oregano/benefits-of-oregano.webp",
          imageAlt: "Oregano health and preparation infographic",
        },
        {
          heading: "Oregano's Best Friend: Olive Oil",
          paragraphs: [
            "If there is one ingredient I naturally pair with oregano, it is olive oil. The two together create a warm, deeply aromatic flavor that works beautifully in salad dressings, marinades and simple vegetable dishes.",
            "My mom used to make oregano-infused olive oil, and that combination became one of those simple kitchen memories that stayed with me. Today, I would keep the family tradition but prepare infused oils using a food-safe method rather than leaving fresh herbs submerged in oil at room temperature for weeks.",
          ],
        },
        {
          heading: "Where Oregano Shows Up in Our Cooking",
          paragraphs: [
            "Oregano is especially useful when you want an earthy, warm herbal note without making a dish complicated. We use it in meat marinades, on salads and in soups.",
            "It works particularly well with roasted chicken, grilled or marinated meats, tomato-based soups and Mediterranean-style salads. You can add it during cooking or use it in a dressing, depending on whether you want the herb to become part of the dish or remain more noticeable.",
          ],
        },
        {
          heading: "Tomato Soup Is a Natural Match",
          paragraphs: [
            "Tomato and oregano are an easy combination because the herb adds warmth and depth to the bright acidity of tomatoes. A small amount can make a simple soup taste more rounded without taking over the whole bowl.",
            "Our Tomato Basil Soup is a good place to experiment with that combination. Start modestly, taste, and add more only if the oregano still needs to come forward.",
          ],
        },
        {
          heading: "How Much Oregano Should You Use?",
          paragraphs: [
            "In our kitchen, one to two tablespoons of dried oregano can be enough when we are seasoning a larger dish or marinade, but the right amount depends on the recipe and how prominent we want the herb to be.",
            "Fresh oregano is much lighter and more delicate, so you may need several times as much to get a similar herbal presence. The best rule is to start with less dried oregano, taste the dish, and build the flavor gradually.",
          ],
        },
        {
          heading: "What Gives Oregano Its Powerful Aroma?",
          paragraphs: [
            "Oregano contains many volatile compounds, and research has paid particular attention to compounds such as carvacrol and thymol. These compounds are important contributors to the characteristic chemistry and aroma of oregano and its essential oil.",
            "Research on oregano essential oils and extracts has also found antioxidant and antimicrobial activity in laboratory and food-related studies. However, the concentration of these compounds varies considerably between oregano species, growing conditions, harvest time and preparation.",
          ],
        },
        {
          heading: "The Health Side of Oregano",
          paragraphs: [
            "Oregano does contain nutrients and plant compounds, but it is usually eaten in relatively small quantities. USDA food-composition resources show that oregano contains dietary fiber and a range of vitamins and minerals, while dried oregano is particularly concentrated because much of its water has been removed.",
            "That makes oregano a useful flavoring herb, but it is important not to turn a small culinary serving into a medical dose. The nutritional contribution of a sprinkle of oregano is different from the concentrated amounts used in supplements or essential oils.",
          ],
        },
        {
          heading: "Antioxidant and Antimicrobial Research",
          paragraphs: [
            "Studies of oregano essential oil have reported antioxidant and antimicrobial activity, with carvacrol and thymol among the compounds most often discussed. Some laboratory studies have shown activity against bacteria and fungi, which helps explain why oregano has attracted so much scientific interest.",
            "Much of the strongest evidence concerns concentrated essential oils, extracts or laboratory experiments. Those results do not mean that eating oregano as a seasoning treats an infection or replaces medical treatment.",
          ],
        },
        {
          heading: "What About Oregano Tea?",
          paragraphs: [
            "Oregano tea has a long history as a traditional herbal preparation, and people in different cultures have used it for its strong herbal flavor and as a traditional digestive drink.",
            "It can certainly be enjoyed as a tea, but I would not describe it as a proven treatment for infections, coughs or other illnesses. Traditional use and laboratory research are interesting, but they are not the same thing as strong clinical evidence in humans.",
          ],
        },
        {
          heading: "Oregano in Egyptian and Lebanese Kitchens",
          paragraphs: [
            "For me, oregano belongs to the wider family of flavors that make Middle Eastern and Mediterranean cooking feel familiar: olive oil, lemon, garlic, herbs and warm spices working together rather than one ingredient doing all the work.",
            "It is especially useful when marinating meat or chicken, seasoning vegetables, building a soup or finishing a salad. The herb does not need to dominate. Often, its job is simply to make everything around it taste more complete.",
          ],
        },
        {
          heading: "The Beginner Mistake: Using Too Much Dried Oregano",
          paragraphs: [
            "Because fresh oregano looks so abundant, it is easy to think you need a similar volume of dried leaves. That can quickly make a dish bitter, dusty or overwhelmingly herbal.",
            "Remember the simple kitchen rule: dried oregano is much more concentrated than fresh. Start with less, let the dish cook, taste, and then decide whether it needs another pinch.",
          ],
        },
        {
          heading: "Oregano Is More Than a Health Ingredient",
          paragraphs: [
            "The most important reason I keep oregano in the kitchen is not a supplement label or a list of health claims. It is because it makes food taste better.",
            "A handful of fresh leaves, a spoon of dried oregano in a marinade, or a little oregano meeting olive oil in a salad dressing can completely change a simple meal. That is the kind of ingredient I want in Healthy Mezze: useful, flavorful and connected to the way people actually cook.",
          ],
        },
        {
          heading: "Our Final Take on Oregano",
          paragraphs: [
            "Oregano is one of those small ingredients that earns its place by being incredibly practical. It grows well in warm weather, can be used fresh, can be dried for later, and works across meats, chicken, soups, salads and dressings.",
            "Its plant compounds are genuinely interesting to researchers, especially carvacrol and thymol, but the strongest antimicrobial and antioxidant findings often come from concentrated oils and extracts rather than ordinary culinary servings. Enjoy oregano for what it does best: bring aroma, warmth and character to the food on your table.",
          ],
        },
        {
          heading: "What the Research Says",
          paragraphs: [
            "The research behind this article covers oregano's composition, drying and storage, the chemistry of oregano essential oil, and the laboratory evidence surrounding compounds such as carvacrol and thymol. The sources below are provided so you can read the evidence directly.",
            "As with any food or herb discussed for health purposes, research on a plant compound does not automatically establish a medical treatment. Oregano is best understood here as a culinary herb with interesting nutritional and biological properties.",
          ],
        },
      ],
    },

    ar: {
      title: "الأوريجانو: العشبة الصغيرة التي تجعل أطباق البحر المتوسط تنبض بالنكهة",
      excerpt:
        "نظرة من مطبخنا على الأوريجانو في المطبخين المصري واللبناني، من الأوراق الطازجة وتجفيفها بالطريقة القديمة إلى زيت الزيتون والطبخ اليومي، وما تقوله الأبحاث فعلًا عن هذه العشبة العطرية القوية.",
      sections: [
        {
          heading: "عشبة صغيرة بشخصية كبيرة",
          paragraphs: [
            "الأوريجانو من الأعشاب التي يمكنها أن تغيّر شخصية الطبق بكمية صغيرة فقط. رائحته مميزة جدًا، وأوراقه تحمل نكهة عشبية دافئة وغنية مع لمسات فلفلية وعشبية وقريبة قليلًا من النعناع.",
            "في مطبخنا لا نستخدم الأوريجانو في وصفة واحدة فقط. ندخله في تتبيلات اللحوم، والسلطات، والشوربات والدجاج، وله مكان طبيعي بجانب زيت الزيتون والليمون وغيرها من نكهات البحر المتوسط.",
          ],
        },
        {
          heading: "الأوريجانو يحب الصيف",
          paragraphs: [
            "الأوريجانو يحب الدفء، ولذلك يبدو الصيف وكأنه موسمه الطبيعي. وعندما ينمو النبات بقوة، يمكن أيضًا تناول براعم الأزهار الصغيرة التي تظهر عند أطراف الفروع.",
            "الأوريجانو متوفر على نطاق واسع في الشرق الأوسط، وله حضور معروف في المطابخ المصرية واللبنانية. الجو الدافئ ورائحته القوية وقدرته على التجفيف تجعل منه عشبة عملية جدًا للاستخدام اليومي.",
          ],
          image: "/images/news/ingredient-benefits/oregano/oregano.webp",
          imageAlt: "أغصان أوريجانو طازجة جاهزة للتحضير",
        },
        {
          heading: "الأوريجانو الطازج والمجفف ليسا شيئًا واحدًا",
          paragraphs: [
            "من أكثر الأخطاء شيوعًا عند المبتدئين التعامل مع الأوريجانو الطازج والمجفف بنفس الكمية. هذا غير صحيح. عند تجفيف الأوراق تفقد الماء وتصبح النكهة أكثر تركيزًا.",
            "كقاعدة عامة للطبخ، تستخدم إرشادات حفظ الأعشاب نحو ملعقة صغيرة من العشب المجفف بدل ملعقة كبيرة من الطازج. أي أن المجفف يعادل تقريبًا ثلث كمية الطازج، مع ضرورة تعديل الكمية حسب العشبة والوصفة.",
          ],
        },
        {
          heading: "كيف كنا نجفف الأوريجانو في الماضي؟",
          paragraphs: [
            "اليوم أصبح جهاز تجفيف الطعام يجعل تجفيف الأعشاب سهلًا جدًا. لكن في الماضي كنا نغسل الأوريجانو، ونربطه في حزم، ثم نعلقه مقلوبًا في مكان جاف بعيدًا عن الشمس المباشرة.",
            "بعد أن تصبح الأوراق جافة وهشة تمامًا، نفصلها عن السيقان ونضعها في وعاء نظيف ومحكم الإغلاق. الفكرة بسيطة: إبعاد الرطوبة والحرارة والضوء عن العشبة المجففة حتى تحتفظ برائحتها ونكهتها.",
          ],
          image: "/images/news/ingredient-benefits/oregano/benefits-of-oregano.webp",
          imageAlt: "إنفوجرافيك عن فوائد الأوريجانو وطريقة تحضيره",
        },
        {
          heading: "صديق الأوريجانو المفضل: زيت الزيتون",
          paragraphs: [
            "إذا كان هناك مكوّن واحد أضعه بجانب الأوريجانو بشكل طبيعي فهو زيت الزيتون. معًا يصنعان نكهة دافئة وعطرية جدًا تناسب تتبيلات السلطات واللحوم والخضار.",
            "كانت أمي تحضر زيت زيتون منكهًا بالأوريجانو، وأصبحت هذه الوصفة البسيطة واحدة من ذكريات المطبخ التي بقيت معي. اليوم يمكننا الاحتفاظ بروح هذه العادة مع اتباع طريقة آمنة حديثة بدل ترك الأعشاب الطازجة مغمورة في الزيت بدرجة حرارة الغرفة لأسابيع.",
          ],
        },
        {
          heading: "الجانب الصحي للأوريجانو",
          paragraphs: [
            "الأوريجانو يحتوي على عناصر غذائية ومركبات نباتية، لكنه عادة ما يؤكل بكميات صغيرة نسبيًا. وتوضح قواعد بيانات تركيب الأغذية التابعة لوزارة الزراعة الأمريكية أن الأوريجانو يحتوي على الألياف ومجموعة من الفيتامينات والمعادن، بينما يصبح الأوريجانو المجفف أكثر تركيزًا بسبب إزالة جزء كبير من الماء.",
            "وهذا يجعل الأوريجانو إضافة غذائية مفيدة كعشبة منكهة، لكن من المهم ألا نحول الكمية الصغيرة المستخدمة في الطعام إلى جرعة علاجية. القيمة الغذائية لرشة من الأوريجانو تختلف تمامًا عن التركيزات الموجودة في المكملات أو الزيوت العطرية.",
          ],
        },
        {
          heading: "ماذا تقول الأبحاث؟",
          paragraphs: [
            "أظهرت دراسات على زيت الأوريجانو العطري نشاطًا مضادًا للأكسدة والميكروبات، وكان الكارفاكرول والثيمول من أكثر المركبات التي تمت دراستها. لكن جزءًا كبيرًا من هذه الأدلة يأتي من الزيوت والمستخلصات المركزة والدراسات المخبرية.",
            "لذلك لا يعني وجود هذه النتائج أن تناول الأوريجانو كتوابل يعالج العدوى أو يحل محل العلاج الطبي. ننظر إلى الأوريجانو هنا باعتباره عشبة طهي ذات خصائص غذائية وبيولوجية مثيرة للاهتمام.",
          ],
        },
      ],
    },
    relatedRecipes: [
      "greek-salad",
      "olive-tapenade",
      "cheese-fatayer",
      "baked-herb-fish",
      "white-bean-salad",
      "stuffed-eggplant",
      "roasted-chickpeas",
      "tomato-basil-soup",
      "chicken-orzo-soup",
      "vegetable-moussaka",
      "stuffed-bell-peppers",
      "vegetable-barley-soup",
      "spinach-chickpea-stew",
      "spinach-feta-omelette",
      "herb-roasted-cauliflower",
      "baked-eggs-spinach-tomatoes",
      "mediterranean-chickpea-salad",
      "mediterranean-vegetable-bake",
      "mediterranean-breakfast-wrap",
      "roasted-vegetable-quinoa-bowl",
      "eggplant-parmesan-mediterranean",
      "shish-tawook",
      "mediterranean-grilled-chicken-plate",
      "spinach-feta-stuffed-zucchini-boats",
      "mediterranean-stuffed-portobello-mushrooms",
    ],

    sources: [
      {
        title: "USDA FoodData Central",
        url: "https://fdc.nal.usda.gov/",
        description: "USDA food-composition database used as the nutrition reference.",
      },
      {
        title: "Penn State Extension — Herb Garden Plants: Oregano",
        url: "https://extension.psu.edu/herb-garden-plants-oregano",
        description: "Oregano plant characteristics, flowers, growing information and culinary context.",
      },
      {
        title: "Penn State Extension — Preserving Herbs by Drying",
        url: "https://extension.psu.edu/preserving-herbs-by-drying",
        description: "Drying methods, storage guidance and fresh-to-dried herb conversion.",
      },
      {
        title: "PubMed — Oregano Essential Oil as an Antimicrobial and Antioxidant Additive in Food Products",
        url: "https://pubmed.ncbi.nlm.nih.gov/25763467/",
        description: "Review of oregano essential oil, including carvacrol, thymol, antioxidant and antimicrobial activity.",
      },
      {
        title: "PubMed — Carvacrol and Human Health: A Comprehensive Review",
        url: "https://pubmed.ncbi.nlm.nih.gov/29744941/",
        description: "Review of carvacrol biology and the limitations of human clinical evidence.",
      },
      {
        title: "PubMed — Chemical Composition, Biological Activity, and Potential Uses of Oregano",
        url: "https://pubmed.ncbi.nlm.nih.gov/40006079/",
        description: "Recent review covering oregano and oregano essential oil composition and biological activity.",
      },
      {
        title: "University of Minnesota Extension — Oil-Based Products and Food Safety",
        url: "https://extension.umn.edu/about/our-stories/news/cottage-food-connection/chili-oil-and-oil-based-products",
        description: "Food-safety guidance on fresh herbs and other low-acid ingredients stored in oil at room temperature.",
      },
    ],
  },

  {
    slug: "fruits-vegetables-dehydrator",
    category: "kitchen-equipment",
    image: "/images/news/kitchen-equipment/fruits-vegetables-dehydrator/dehydrator-fruit-trays.webp",
    imageAlt: {
      en: "Fresh fruit arranged on trays for dehydration",
      ar: "فواكه طازجة مرتبة على صواني للتجفيف",
    },
    publishedAt: "2026-09-27",

    en: {
      title:
        "Fruits & Vegetables Dehydrator: Turning Extra Produce Into Snacks, Ingredients & More",
      excerpt:
        "A practical look at why I use a food dehydrator, what I dry in it, the snacks my guests love, and the mistakes that can turn a good batch into a spoiled one.",
      sections: [
        {
          heading: "Why I Love Having a Dehydrator in the Kitchen",
          paragraphs: [
            "A food dehydrator is one of those kitchen appliances that can look very simple until you start using it regularly. It removes moisture from food with controlled heat and airflow, allowing fruits, vegetables and herbs to become lighter, concentrated ingredients that can be stored and used later.",
            "For me, the biggest attraction is not simply making dried fruit. It is being able to save extra produce instead of watching it go to waste, make snacks that guests actually enjoy, and keep ingredients around for cooking and drinks.",
          ],
        },
        {
          heading: "What a Food Dehydrator Actually Does",
          paragraphs: [
            "A dehydrator uses a controlled heat source together with air circulation to remove moisture from food. As the water leaves the food, the pieces shrink dramatically and become much lighter.",
            "Removing water also makes the food more practical to store. Properly dried foods take up much less space, although they still need to be cooled, conditioned when appropriate, and stored correctly to protect them from moisture.",
          ],
        },
        {
          heading: "A Simple Way to Save Extra Produce",
          paragraphs: [
            "One reason many people like dehydrating is that it gives extra produce another life. Instead of trying to use everything immediately, you can turn suitable fruits, vegetables and herbs into ingredients and snacks that can be kept for later.",
            "It can also help reduce grocery waste. When produce is plentiful or you have bought more than you can use fresh, dehydration gives you another option besides freezing or cooking everything immediately.",
          ],
        },
        {
          heading: "What Happens to Fruit During Dehydration?",
          image:
            "/images/news/kitchen-equipment/fruits-vegetables-dehydrator/dehydrated-fruits.webp",
          imageAlt: "Assorted dehydrated fruits",
          paragraphs: [
            "Fruit becomes dramatically lighter because much of its water is removed. The calories, fiber and minerals do not disappear simply because the water is gone, so dried fruit becomes much more concentrated by weight than fresh fruit.",
            "Some nutrients are more sensitive to heat than others. Vitamin C, for example, can be reduced during drying, while minerals are generally much more stable. The exact nutritional change depends on the fruit, pretreatment, temperature and drying process.",
            "I sometimes describe the difference by looking at the weight before and after drying: a large fresh apple can become surprisingly tiny once most of its water has been removed. The exact final weight varies, so I would never treat one weight-loss example as a universal rule.",
          ],
        },
        {
          heading: "The Fruits I Like to Dehydrate",
          paragraphs: [
            "For the best flavor, I prefer fruit that is fresh, ripe and still in good condition. Overripe fruit is not something I recommend using simply because the dehydrator will not turn poor-quality produce into great-tasting food.",
            "Some of the fruits that work well for home dehydration include pears, peaches, cherries, apples, apricots, prunes, nectarines, coconut, dates, berries, bananas, blueberries, limes and lemons.",
          ],
        },
        {
          heading: "Vegetables I Usually Dehydrate",
          paragraphs: [
            "Vegetables can also be very useful in a dehydrator. I especially like chili peppers, tomatoes, sweet potatoes, sweet corn, mushrooms and selected herbs.",
            "Vegetables are different from fruit because they are generally dried much further. Properly dried vegetables should be brittle or crisp rather than soft and leathery.",
          ],
        },
        {
          heading: "Don't Forget the Herbs",
          paragraphs: [
            "A dehydrator is also extremely useful when you have fresh herbs that you do not want to lose. I use or recommend it for basil, bay leaves, chives, cilantro, dill, fennel microgreens, ginger leaves, marjoram, mint, oregano, parsley, rosemary, sage, shiso, tarragon and thyme.",
            "Dried herbs become much more concentrated in flavor because their water is removed, so remember that fresh and dried herbs are not interchangeable in equal amounts.",
          ],
        },
        {
          heading: "The Dehydrator Snacks My Guests Love",
          paragraphs: [
            "This is where the dehydrator becomes especially fun. I use it to make snacks for guests, and they are often surprised by how much flavor can come from something as simple as sliced fruit or vegetables.",
            "For fruit, my favorites include apple rings or chips with cinnamon, banana coins or chips, mango slices, pineapple chunks or rings, strawberry slices, blueberries, peach or nectarine wedges, watermelon with lime and Tajín, citrus wheels, and fruit leather made from fruits such as berries, apples or mangoes.",
            "For savory snacks, I like kale chips, zucchini chips, sweet potato chips or fries, dried cherry or plum tomatoes, seasoned chickpeas, coconut flakes with smoky seasoning, and mushroom jerky.",
          ],
        },
        {
          heading: "How I Prepare Produce Before Drying",
          paragraphs: [
            "Preparation matters. I slice fruits and vegetables into pieces of similar thickness so they dry at a similar rate. Grapes and tomatoes can be cut in half so the inside is exposed and moisture can escape more easily.",
            "For fruits that brown easily, an ascorbic-acid or suitable fruit-juice dip can help preserve color. Lemon juice is a familiar kitchen option, while measured ascorbic-acid treatments are also used in home food-preservation guidance.",
            "Vegetables may require blanching depending on the vegetable and preservation method. Always check a reliable preservation guide and your dehydrator manual for the particular food rather than assuming every fruit or vegetable should be treated the same way.",
          ],
        },
        {
          heading: "The Beginner Mistakes I See Most Often",
          paragraphs: [
            "Inconsistent sizing is one of the easiest mistakes to make. Thin pieces can become too dry while thick pieces are still moist. Similar-sized pieces make it much easier to get an even batch.",
            "Another mistake is overcrowding or overlapping the trays. Air needs to circulate around the food, so piling pieces together can slow drying and create uneven results.",
            "Whole berries, grapes and other foods with tough skins can also be difficult to dry evenly. Piercing, cutting or following the recommended pretreatment for the particular food can help moisture escape.",
            "Another common mistake is using the wrong temperature. Too much heat can harden the outside of high-sugar fruit while the inside remains moist. Always follow the manufacturer's instructions and a tested food-preservation guide for the food you are drying.",
          ],
        },
        {
          heading: "Tray Rotation and Sticking",
          paragraphs: [
            "Depending on the design of the dehydrator, trays may dry differently. I like to pay attention to the manufacturer's instructions about rotating trays so the batch dries evenly.",
            "Fruit and thinly sliced vegetables can also stick to trays. A suitable dehydrator liner or the method recommended by the manufacturer can make removal much easier. I especially pay attention to this when working with sweet fruit.",
          ],
        },
        {
          heading: "Cooling and Conditioning Are Part of the Process",
          paragraphs: [
            "One mistake I do not want to make is packing food while it is still warm. Warm food can release moisture into the container and create condensation, which can contribute to spoilage.",
            "Dried fruit also benefits from conditioning. After the fruit has cooled, home-preservation guidance recommends loosely packing it in glass or plastic containers for about seven to ten days, shaking the container daily and checking for condensation. If moisture appears, the fruit needs additional drying.",
            "Vegetables are normally dried much further, until brittle or crisp, and do not require the same conditioning process used for dried fruit.",
          ],
        },
        {
          heading: "How I Store Dehydrated Food",
          paragraphs: [
            "For storage, I like sealed glass jars or other airtight containers. Suitable food-storage bags can also work when they provide an appropriate moisture barrier.",
            "The important thing is protecting the dried food from humidity. Store it in a cool, dry, dark place and check it occasionally. If moisture gets back into the food, the shelf life and safety can change.",
            "Drying does not mean food can be forgotten forever. Storage time depends on the food, how completely it was dried, packaging and storage conditions.",
          ],
        },
        {
          heading: "Why I Avoid Adding Oil Before Dehydrating",
          paragraphs: [
            "I do not recommend adding oil or fat to foods simply because you want to dehydrate them. Fat can become rancid and can complicate storage.",
            "For the same reason, I keep the dehydrator focused on foods and preparations that are appropriate for drying rather than trying to turn every recipe into a dehydrated version.",
          ],
        },
        {
          heading: "What About Meat and Jerky?",
          paragraphs: [
            "This is where I draw a clear line between casual fruit and vegetable drying and meat dehydration. Meat requires specific food-safety procedures because drying at a low temperature alone is not enough to make unsafe meat safe.",
            "If you are making jerky, follow a tested jerky method and the safety instructions from a reliable food-preservation source and your dehydrator manufacturer. Do not simply apply fruit-and-vegetable drying temperatures to meat.",
          ],
        },
        {
          heading: "What I Look for in a Dehydrator",
          image:
            "/images/news/kitchen-equipment/fruits-vegetables-dehydrator/food-dehydrator.webp",
          imageAlt: "Food dehydrator with fruit trays",
          paragraphs: [
            "I recommend investing in a good-quality dehydrator rather than buying the cheapest machine available. Look for a unit with controlled temperature, good airflow and trays that are practical to clean.",
            "I personally like sturdy metal trays, but tray material by itself should not be treated as a guarantee of safety. Good construction, appropriate food-contact materials, airflow and reliable temperature control matter more than simply choosing one material.",
            "Most importantly, read the manual. Different machines have different airflow patterns, tray capacities and temperature controls, so the manufacturer's instructions should be part of your drying routine.",
          ],
        },
        {
          heading: "How a Dehydrator Fits Into Healthy Mezze",
          paragraphs: [
            "A dehydrator fits naturally into the way we cook at Healthy Mezze because so many recipes rely on herbs, fruits, vegetables and concentrated flavors.",
            "Dried herbs can be ready when fresh herbs are out of season. Dried fruit can become a snack or an ingredient in drinks. Dried vegetables can be stored for later cooking. And having preserved ingredients available can make future meal preparation easier.",
            "For me, the biggest benefit is simple: instead of thinking of extra produce as something that has to be used immediately, I can think about how to preserve it and use it another day.",
          ],
        },
        {
          heading: "My Final Take",
          paragraphs: [
            "A food dehydrator is not a magic machine that makes every food better. It is a practical preservation tool, and the results depend on choosing good produce, preparing it correctly, controlling the drying process and storing the finished food properly.",
            "But once you learn those basics, it becomes one of the most useful appliances for turning fresh produce into lightweight snacks, concentrated ingredients and pantry staples.",
            "And when guests start asking where those crispy fruit slices came from, you may find yourself using it a lot more than you expected.",
          ],
        },
      ],
    },

    ar: {
      title:
        "مجفف الفواكه والخضروات: كيف أحوّل فائض المنتجات إلى وجبات خفيفة ومكونات مفيدة",
      excerpt:
        "تجربتي العملية مع مجفف الطعام، من حفظ الفواكه والخضروات والأعشاب إلى تحضير وجبات خفيفة يحبها الضيوف، مع أهم الأخطاء التي يجب تجنبها أثناء التجفيف والتخزين.",
      sections: [
        {
          heading: "لماذا أحب وجود مجفف الطعام في المطبخ؟",
          paragraphs: [
            "مجفف الطعام من الأجهزة التي تبدو بسيطة جدًا، لكنك تكتشف فائدتها الحقيقية بعد استخدامها بشكل منتظم. فهو يزيل الرطوبة من الطعام باستخدام حرارة وتدفق هواء مضبوطين، مما يجعل الفواكه والخضروات والأعشاب أخف وزنًا وأكثر تركيزًا ويمكن تخزينها واستخدامها لاحقًا.",
            "بالنسبة لي، أهم فائدة ليست فقط إعداد الفواكه المجففة، بل القدرة على الاستفادة من المنتجات الزائدة بدلًا من تركها تفسد، وتحضير وجبات خفيفة يحبها الضيوف، والاحتفاظ بمكونات يمكن استخدامها لاحقًا في الطبخ والمشروبات.",
          ],
        },
        {
          heading: "ماذا يفعل مجفف الطعام فعليًا؟",
          paragraphs: [
            "يستخدم المجفف مصدر حرارة مضبوطًا مع حركة مستمرة للهواء لإزالة الرطوبة من الطعام. ومع خروج الماء تنكمش القطع ويصبح وزنها أخف بكثير.",
            "إزالة الماء تجعل الطعام أسهل في التخزين وأقل حجمًا، لكن يجب تبريده جيدًا وتكييف الفواكه المجففة عند الحاجة وتخزينها بطريقة تحميها من الرطوبة.",
          ],
        },
        {
          heading: "طريقة عملية للاستفادة من المنتجات الزائدة",
          paragraphs: [
            "من أكثر الأشياء التي أحبها في التجفيف أنه يعطي المنتجات الزائدة فرصة جديدة. بدلًا من محاولة استخدام كل شيء طازجًا في وقت قصير، يمكنك تحويل الفواكه والخضروات والأعشاب المناسبة إلى مكونات ووجبات خفيفة للاستخدام لاحقًا.",
            "وهذا قد يساعد أيضًا على تقليل هدر الطعام ومصاريف التسوق. عندما يكون لديك فائض من المنتجات، يصبح التجفيف خيارًا آخر إلى جانب التجميد أو الطهي المباشر.",
          ],
        },
        {
          heading: "ماذا يحدث للفواكه أثناء التجفيف؟",
          image:
            "/images/news/kitchen-equipment/fruits-vegetables-dehydrator/dehydrated-fruits.webp",
          imageAlt: "فواكه مجففة متنوعة",
          paragraphs: [
            "تصبح الفاكهة أخف بكثير لأن جزءًا كبيرًا من الماء الموجود فيها يتم التخلص منه. الألياف والمعادن والسعرات الحرارية لا تختفي لمجرد إزالة الماء، ولذلك تصبح العناصر الغذائية والسعرات أكثر تركيزًا بالنسبة إلى الوزن.",
            "بعض العناصر الغذائية أكثر حساسية للحرارة من غيرها. فيتامين C مثلًا قد ينخفض أثناء التجفيف، بينما تكون المعادن أكثر ثباتًا عمومًا. وتختلف النتيجة حسب نوع الفاكهة ودرجة الحرارة وطريقة المعالجة ومدة التجفيف.",
          ],
        },
        {
          heading: "الفواكه التي أحب تجفيفها",
          paragraphs: [
            "أفضل النتائج تبدأ بفاكهة طازجة وناضجة وفي حالة جيدة. الفاكهة شديدة النضج أو التي بدأت تفسد لن تتحول إلى منتج ممتاز لمجرد وضعها في المجفف.",
            "من الفواكه التي يمكن تجفيفها التفاح والكمثرى والخوخ والكرز والمشمش والقراصيا والنكتارين وجوز الهند والتمر والتوت والموز والتوت الأزرق والليمون واللايم.",
          ],
        },
        {
          heading: "الخضروات التي أجففها عادةً",
          paragraphs: [
            "يمكن أيضًا استخدام المجفف مع الكثير من الخضروات. ومن الأشياء التي أحب تجفيفها الفلفل الحار والطماطم والبطاطا الحلوة والذرة الحلوة والفطر وبعض الأعشاب.",
            "الخضروات تختلف عن الفواكه في درجة الجفاف المطلوبة؛ وعادةً يتم تجفيفها حتى تصبح هشة أو مقرمشة.",
          ],
        },
        {
          heading: "ولا ننسى الأعشاب",
          paragraphs: [
            "المجفف مفيد جدًا عندما يكون لديك أعشاب طازجة لا تريد خسارتها. ويمكن استخدامه مع الريحان وورق الغار والثوم المعمر والكزبرة والشبت والبردقوش والنعناع والأوريجانو والبقدونس وإكليل الجبل والميرمية والطرخون والزعتر وغيرها.",
            "عندما تجف الأعشاب يصبح طعمها أكثر تركيزًا، لذلك لا تستخدم نفس الكمية من العشب الطازج والمجفف وكأنهما متساويان في القوة.",
          ],
        },
        {
          heading: "وجباتي الخفيفة المفضلة من المجفف",
          paragraphs: [
            "هنا يصبح المجفف ممتعًا جدًا. أستخدمه لتحضير وجبات خفيفة للضيوف، وغالبًا ما يتفاجؤون بكمية النكهة التي يمكن الحصول عليها من شرائح الفاكهة والخضروات.",
            "من المفضلات لدي حلقات أو رقائق التفاح بالقرفة، شرائح الموز، شرائح المانجو، قطع أو حلقات الأناناس، شرائح الفراولة، التوت الأزرق، شرائح الخوخ أو النكتارين، البطيخ مع الليمون وتاجين، شرائح الحمضيات، وفاكهة مجففة على شكل جلد الفاكهة.",
            "وللوجبات المالحة أحب رقائق الكرنب والكوسا والبطاطا الحلوة والطماطم المجففة والحمص المتبل وجوز الهند المتبل والفطر المتبل.",
          ],
        },
        {
          heading: "كيف أجهز المنتجات قبل التجفيف؟",
          paragraphs: [
            "التحضير مهم جدًا. أقطع الفواكه والخضروات إلى قطع متقاربة في السماكة حتى تجف بمعدل متقارب. أما العنب والطماطم فيمكن تقطيعهما إلى نصفين حتى يصبح الجزء الداخلي مكشوفًا ويسهل خروج الرطوبة.",
            "بالنسبة لبعض الفواكه التي يتغير لونها بسرعة، يمكن استخدام محلول حمض الأسكوربيك أو عصير فواكه مناسب للمساعدة في الحفاظ على اللون. وعند تجفيف بعض الخضروات قد تكون عملية السلق المسبق ضرورية حسب نوع الخضار وطريقة الحفظ.",
            "لا تفترض أن كل الفواكه والخضروات تحتاج إلى المعالجة نفسها؛ اتبع دليل الجهاز ومصدرًا موثوقًا لحفظ الطعام لكل نوع.",
          ],
        },
        {
          heading: "أخطاء المبتدئين التي يجب تجنبها",
          paragraphs: [
            "تفاوت سماكة القطع من أكثر الأخطاء شيوعًا. القطع الرقيقة قد تجف أكثر من اللازم بينما تبقى القطع السميكة رطبة.",
            "كذلك لا تكدس القطع فوق بعضها ولا تجعلها متداخلة، لأن الهواء يحتاج إلى المرور حول الطعام حتى تتبخر الرطوبة بشكل متساوٍ.",
            "الفواكه الصغيرة ذات القشرة السميكة مثل العنب وبعض أنواع التوت قد تحتاج إلى ثقب أو تقطيع أو معالجة مناسبة حتى تصل الحرارة والرطوبة إلى الداخل.",
            "ومن الأخطاء أيضًا استخدام حرارة أعلى من اللازم. الحرارة المرتفعة قد تجعل الفواكه الغنية بالسكر تتصلب أو تحترق من الخارج بينما يبقى الداخل رطبًا. اتبع دائمًا تعليمات الجهاز وإرشادات حفظ الطعام المختبرة.",
          ],
        },
        {
          heading: "تبريد الطعام وتكييف الفواكه المجففة",
          paragraphs: [
            "لا أحب وضع الطعام الدافئ مباشرة داخل وعاء التخزين، لأن الحرارة والرطوبة المحبوسة قد تؤدي إلى تكاثف الماء وتزيد خطر التلف.",
            "بعد أن تبرد الفاكهة المجففة، توصي إرشادات حفظ الطعام المنزلية بتكييفها داخل أوعية زجاجية أو بلاستيكية لمدة سبعة إلى عشرة أيام، مع رج الوعاء يوميًا ومراقبة أي تكاثف. إذا ظهرت رطوبة، يجب إعادة الفاكهة إلى المجفف لمزيد من التجفيف.",
            "أما الخضروات فعادةً تجف حتى تصبح هشة أو مقرمشة، ولا تحتاج إلى نفس عملية التكييف الخاصة بالفواكه.",
          ],
        },
        {
          heading: "كيف أخزن الطعام المجفف؟",
          paragraphs: [
            "أفضل استخدام أوعية زجاجية محكمة الإغلاق أو أوعية مناسبة لحفظ الطعام. ويمكن أيضًا استخدام أكياس تخزين مناسبة عندما تكون حاجزًا جيدًا أمام الرطوبة.",
            "المهم هو حماية الطعام المجفف من الرطوبة. خزنه في مكان بارد وجاف ومظلم وافحصه من وقت لآخر.",
          ],
        },
        {
          heading: "لماذا لا أحب إضافة الزيت قبل التجفيف؟",
          paragraphs: [
            "لا أنصح بإضافة الزيت أو الدهون إلى الطعام لمجرد تجفيفه. الدهون قد تتزنخ مع الوقت وتجعل التخزين أكثر صعوبة.",
            "لهذا أفضل أن أستخدم المجفف مع الأطعمة والتحضيرات المناسبة للتجفيف بدل محاولة تحويل كل وصفة إلى نسخة مجففة.",
          ],
        },
        {
          heading: "وماذا عن اللحوم والـ Jerky؟",
          paragraphs: [
            "هنا يجب أن نكون أكثر حذرًا. تجفيف اللحوم يختلف عن تجفيف الفواكه والخضروات لأن هناك اعتبارات خاصة بسلامة الغذاء.",
            "إذا كنت ستصنع اللحم المجفف، فاتبع وصفة مختبرة وتعليمات السلامة الخاصة باللحوم وتعليمات الشركة المصنعة للجهاز. لا تستخدم درجات حرارة تجفيف الفواكه والخضروات بشكل عشوائي مع اللحوم.",
          ],
        },
        {
          heading: "ما الذي أبحث عنه عند شراء مجفف؟",
          image:
            "/images/news/kitchen-equipment/fruits-vegetables-dehydrator/food-dehydrator.webp",
          imageAlt: "مجفف طعام مع صواني الفواكه",
          paragraphs: [
            "أنصح بشراء جهاز جيد بدل اختيار أرخص جهاز ممكن. ابحث عن جهاز يتمتع بدرجة حرارة قابلة للتحكم وتدفق هواء جيد وصوانٍ يسهل تنظيفها.",
            "أنا شخصيًا أفضل الصواني المعدنية القوية، لكن مادة الصينية وحدها ليست ضمانًا للسلامة. جودة التصنيع والمواد المناسبة للطعام وتدفق الهواء والتحكم الجيد في الحرارة أهم من المادة وحدها.",
            "والأهم من ذلك هو قراءة دليل الجهاز، لأن كل جهاز يختلف في طريقة توزيع الهواء وسعة الصواني ودرجات الحرارة.",
          ],
        },
        {
          heading: "كيف يناسب المجفف مطبخ Healthy Mezze؟",
          paragraphs: [
            "المجفف يناسب أسلوب الطبخ في Healthy Mezze بشكل طبيعي، لأن الكثير من وصفاتنا تعتمد على الأعشاب والفواكه والخضروات والنكهات المركزة.",
            "يمكن أن تكون الأعشاب المجففة جاهزة عندما لا تتوفر الأعشاب الطازجة، ويمكن استخدام الفواكه المجففة كوجبة خفيفة أو كمكون في المشروبات، كما يمكن الاحتفاظ ببعض الخضروات المجففة لاستخدامها في الطبخ لاحقًا.",
            "بالنسبة لي، الفائدة الأكبر بسيطة: بدل أن أفكر في المنتجات الزائدة على أنها شيء يجب استخدامه فورًا، أستطيع التفكير في طريقة لحفظها واستخدامها في يوم آخر.",
          ],
        },
        {
          heading: "الخلاصة",
          paragraphs: [
            "مجفف الطعام ليس جهازًا سحريًا يجعل كل شيء أفضل. إنه أداة عملية لحفظ الطعام، والنتيجة تعتمد على جودة المنتجات وطريقة تحضيرها ودرجة الحرارة والوقت وطريقة التخزين.",
            "لكن عندما تتعلم الأساسيات، يصبح جهازًا مفيدًا جدًا لتحويل المنتجات الطازجة إلى وجبات خفيفة ومكونات مركزة وأطعمة يمكن الاحتفاظ بها في المخزن.",
            "وعندما يبدأ الضيوف في سؤالك عن مصدر شرائح الفاكهة المقرمشة، قد تجد نفسك تستخدم المجفف أكثر بكثير مما توقعت.",
          ],
        },
      ],
    },

    relatedRecipes: [
      "tomato-basil-soup",
      "chicken-orzo-soup",
      "vegetable-barley-soup",
      "greek-salad",
      "white-bean-salad",
      "mediterranean-chickpea-salad",
      "baked-herb-fish",
      "shish-tawook",
      "mediterranean-grilled-chicken-plate",
      "herb-roasted-cauliflower",
      "mediterranean-vegetable-bake",
      "spinach-feta-stuffed-zucchini-boats",
    ],

    sources: [
      {
        title: "National Center for Home Food Preservation — Food Dehydrators",
        url: "https://nchfp.uga.edu/how/dry/drying-general/food-dehydrators/",
        description:
          "Guidance on how food dehydrators work and features to consider.",
      },
      {
        title: "National Center for Home Food Preservation — Packaging and Storing Dried Foods",
        url: "https://nchfp.uga.edu/how/dry/drying-general/packaging-and-storing-dried-foods/",
        description:
          "Guidance on cooling, conditioning, storage and moisture control.",
      },
      {
        title: "Utah State University Extension — Home Drying Foods",
        url: "https://extension.usu.edu/preserve-the-harvest/research/home-drying-foods",
        description:
          "Information on nutritional changes, drying and pretreatment.",
      },
      {
        title: "Utah State University Extension — Drying Pretreatment",
        url: "https://extension.usu.edu/preserve-the-harvest/research/drying-pretreatment",
        description:
          "Guidance on ascorbic-acid and fruit-juice pretreatments.",
      },
      {
        title: "National Center for Home Food Preservation — Jerky",
        url: "https://nchfp.uga.edu/how/dry/recipes/jerky/",
        description:
          "Tested food-safety guidance for making meat jerky.",
      },
    ],
  },

];
