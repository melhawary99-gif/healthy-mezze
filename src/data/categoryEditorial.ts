export type CategoryEditorial = {
  intro: string;
  contextTitle: string;
  context: string;
  guidanceTitle: string;
  guidance: string;
  notesTitle: string;
  notes: string;
  guide?: {
    label: string;
    slug: string;
  };
};

export const categoryEditorial: Record<
  "en" | "ar",
  Record<string, CategoryEditorial>
> = {
  en: {
    breakfast: {
      intro:
        "Breakfast in Egyptian and Lebanese cooking can be simple, filling, and built around everyday ingredients. This collection brings together nourishing morning dishes with beans, eggs, vegetables, grains, yogurt, and fresh herbs.",
      contextTitle: "Breakfast in Egyptian and Lebanese cooking",
      context:
        "Traditional breakfasts across the region often combine a satisfying source of protein with vegetables, bread, legumes, dairy, or olive oil. Egyptian ful is a classic example of a bean-based breakfast, while Lebanese tables commonly include labneh, eggs, fresh vegetables, olives, and herbs. The goal is not elaborate cooking, but a balanced meal that works well at the beginning of the day.",
      guidanceTitle: "How to build a balanced breakfast",
      guidance:
        "Pair a protein-rich ingredient with vegetables or fruit and a suitable whole-grain or traditional bread portion. Use olive oil thoughtfully, include fresh herbs when available, and adjust salt according to the rest of the meal.",
      notesTitle: "Ingredient and preparation notes",
      notes:
        "Legumes can be prepared ahead and reheated gently. Eggs are best cooked just until set, while fresh vegetables and herbs are usually added shortly before serving so their texture and flavor remain bright.",
      guide: {
        label: "Explore our Egyptian Breakfast Guide",
        slug: "egyptian-breakfast-guide",
      },
    },

    salads: {
      intro:
        "Healthy Mediterranean salads are more than side dishes. They combine crisp vegetables, herbs, grains, legumes, citrus, and olive oil to create fresh dishes that can accompany a meal or become a light meal themselves.",
      contextTitle: "The role of salads on the Mediterranean table",
      context:
        "Lebanese and Egyptian cooking both make generous use of fresh produce and herbs. Tabbouleh highlights parsley and bulgur, while salads such as cucumber and tomato combinations rely on simple seasonal ingredients. Dressings are generally designed to complement the vegetables rather than hide them.",
      guidanceTitle: "How to make a satisfying salad",
      guidance:
        "Start with fresh produce, add a source of fiber or protein when making the salad a main meal, and balance the dressing with acidity, olive oil, and seasoning. Keep delicate herbs and crunchy ingredients from becoming soggy by dressing close to serving.",
      notesTitle: "Ingredient and preparation notes",
      notes:
        "Taste vegetables before seasoning because their sweetness and acidity vary by season. Cut ingredients consistently for an even bite, and allow grain-based salads enough time to absorb their dressing without becoming overly wet.",
    },

    soups: {
      intro:
        "Mediterranean soups are practical comfort foods built from vegetables, legumes, grains, herbs, and simple seasonings. They can turn inexpensive pantry ingredients into satisfying meals without relying on heavy sauces.",
      contextTitle: "Soups across Egyptian and Lebanese kitchens",
      context:
        "Lentils, beans, vegetables, and grains appear frequently in regional soups. Egyptian lentil soup is especially well known for its warming combination of lentils, vegetables, and spices, while Lebanese cooking includes a wide range of vegetable and legume-based soups.",
      guidanceTitle: "How to make nourishing soup",
      guidance:
        "Build flavor gradually by cooking aromatics before adding liquids. Legumes and vegetables provide fiber and substance, while herbs, lemon, and spices can add character without requiring large amounts of salt or fat.",
      notesTitle: "Ingredient and preparation notes",
      notes:
        "Rinse dried legumes and lentils before cooking. Add acidic ingredients such as lemon toward the end when appropriate, and adjust consistency with water or stock rather than relying on excessive cream or thickening agents.",
    },

    "main-dishes": {
      intro:
        "Main dishes are where the everyday balance of Mediterranean cooking comes together: vegetables, legumes, grains, poultry, fish, herbs, and modest amounts of healthy fats can form complete and satisfying meals.",
      contextTitle: "Building a Mediterranean-style main dish",
      context:
        "Egyptian and Lebanese meals often place several complementary foods on the table rather than relying on one oversized portion. Grilled meats may be served with salads and grains, while vegetarian dishes can use legumes, vegetables, and grains to provide substance.",
      guidanceTitle: "How to keep main dishes balanced",
      guidance:
        "Give vegetables and legumes a meaningful place on the plate and choose cooking methods such as grilling, roasting, baking, or gentle simmering. Use sauces and oils for flavor while keeping the overall meal proportionate.",
      notesTitle: "Ingredient and preparation notes",
      notes:
        "Marinating poultry or meat can improve flavor before grilling or roasting. For plant-based dishes, combine legumes with grains or serve them alongside vegetables and salads for variety in texture and nutrients.",
    },

    vegetarian: {
      intro:
        "Vegetarian Mediterranean cooking makes vegetables, legumes, grains, herbs, nuts, and dairy central to the meal rather than treating them as afterthoughts. This collection gathers meat-free dishes inspired by the region.",
      contextTitle: "Vegetarian food in regional cooking",
      context:
        "Vegetarian dishes have long been part of Egyptian and Lebanese home cooking. Lentils, chickpeas, fava beans, eggplant, tomatoes, greens, yogurt, and grains appear in many traditional preparations, giving meat-free meals plenty of flavor and substance.",
      guidanceTitle: "How to make vegetarian meals satisfying",
      guidance:
        "Combine vegetables with protein- and fiber-rich ingredients such as lentils, beans, chickpeas, yogurt, or nuts. Use herbs, spices, lemon, garlic, and olive oil to build flavor rather than depending on large amounts of cheese or added fat.",
      notesTitle: "Ingredient and preparation notes",
      notes:
        "Roasting vegetables concentrates their flavor, while legumes benefit from proper soaking or cooking when using dried varieties. Fresh herbs and acidic ingredients can be added near the end to brighten heavier dishes.",
    },

    vegan: {
      intro:
        "Vegan cooking fits naturally into many Mediterranean food traditions, where beans, chickpeas, lentils, grains, vegetables, fruit, herbs, tahini, and olive oil provide the foundation for flavorful meals.",
      contextTitle: "Plant-based traditions in the region",
      context:
        "Egyptian and Lebanese cuisines contain many naturally vegan dishes. Ful, falafel, hummus, vegetable salads, lentil soups, and grain-based dishes demonstrate how legumes and vegetables can form the center of a meal.",
      guidanceTitle: "How to build a complete vegan meal",
      guidance:
        "Include a substantial source of plant protein and fiber, then add vegetables, grains, herbs, and healthy fats for balance. Tahini, nuts, seeds, and olive oil can contribute richness while lemon and herbs keep dishes fresh.",
      notesTitle: "Ingredient and preparation notes",
      notes:
        "Check packaged ingredients such as broths, sauces, and breads when strict vegan preparation matters. Chickpeas and beans can be cooked in batches and refrigerated or frozen for convenient meals throughout the week.",
    },

    "sandwiches-wraps": {
      intro:
        "Mediterranean sandwiches and wraps turn familiar ingredients such as grilled chicken, falafel, vegetables, herbs, and tahini into practical meals. The best versions balance filling ingredients with freshness and texture.",
      contextTitle: "Sandwiches and wraps in the region",
      context:
        "Flatbreads are an important part of everyday eating across the Eastern Mediterranean. Lebanese and neighboring cuisines use bread to hold grilled meats, falafel, vegetables, pickles, herbs, and sauces, creating meals that are convenient without being complicated.",
      guidanceTitle: "How to build a better wrap",
      guidance:
        "Choose a flavorful filling, add plenty of fresh vegetables or herbs, and use sauces in moderation. A good wrap should have contrast between warm and cool ingredients, soft bread, and crisp components.",
      notesTitle: "Ingredient and preparation notes",
      notes:
        "Warm flatbread briefly before assembling so it bends without breaking. Drain wet vegetables and sauces when necessary, and place juicy ingredients away from the bread to reduce sogginess.",
    },

    snack: {
      intro:
        "Mediterranean-inspired snacks can be simple combinations of nuts, legumes, vegetables, fruit, yogurt, and homemade dips. They are useful when you want something satisfying without turning every snack into a heavily processed food.",
      contextTitle: "Everyday snacking in Mediterranean food culture",
      context:
        "Nuts, fresh produce, yogurt, olives, and legumes are common ingredients across the region. Many traditional foods can be served in smaller portions as snacks or alongside other dishes.",
      guidanceTitle: "How to choose a satisfying snack",
      guidance:
        "Look for a combination of fiber, protein, and healthy fats when you need longer-lasting satiety. Fresh vegetables with a dip, fruit with yogurt, or a measured portion of nuts can all work well.",
      notesTitle: "Ingredient and preparation notes",
      notes:
        "Portion size matters particularly with energy-dense foods such as nuts, seeds, and tahini. Prepare cut vegetables and simple dips in advance so healthier choices are easy to reach for.",
    },

    mezze: {
      intro:
        "Mezze is a social style of eating built around several small dishes served together. Lebanese mezze can include hummus, salads, dips, vegetables, grains, and grilled foods, allowing a meal to offer many flavors and textures.",
      contextTitle: "What makes mezze distinctive",
      context:
        "Mezze is not simply a list of appetizers. It is a way of sharing food and creating variety around the table. Cold dishes may appear alongside warm preparations, with bread used to scoop dips and accompany vegetables, legumes, and other dishes.",
      guidanceTitle: "How to create a balanced mezze table",
      guidance:
        "Combine fresh salads with legumes, dips, vegetables, and one or two more substantial dishes. Offer different textures and use lemon, herbs, garlic, and spices to create contrast without making every dish rich.",
      notesTitle: "Ingredient and preparation notes",
      notes:
        "Many mezze dishes can be prepared ahead, making them practical for gatherings. Keep fresh herbs, crisp vegetables, and bread separate until serving, and refrigerate perishable dishes promptly.",
      guide: {
        label: "Explore our Lebanese Mezze Guide",
        slug: "lebanese-mezze-guide",
      },
    },

    drinks: {
      intro:
        "Traditional and modern Mediterranean drinks range from refreshing fruit-based beverages to yogurt drinks, herbal infusions, coffee, and contemporary recipes. This collection focuses on drinks that complement the food and climate of the region.",
      contextTitle: "Drinks across Egyptian and Lebanese traditions",
      context:
        "Egyptian and Lebanese food cultures include drinks served with breakfast, meals, celebrations, and warm-weather gatherings. Hibiscus, carob, mint, yogurt, coffee, and fresh fruit all appear in different forms.",
      guidanceTitle: "How to make drinks thoughtfully",
      guidance:
        "Let the natural flavor of fruit, herbs, spices, coffee, or yogurt lead the recipe. When sweetness is needed, adjust it gradually rather than allowing added sugar to dominate the drink.",
      notesTitle: "Ingredient and preparation notes",
      notes:
        "Fresh ingredients often have different levels of sweetness and acidity, so tasting before final adjustment is important. For cold drinks, chill ingredients ahead when possible instead of relying entirely on large amounts of ice.",
      guide: {
        label: "Explore the Drink Vlog",
        slug: "drink-vlog",
      },
    },

    desserts: {
      intro:
        "Mediterranean desserts often combine nuts, fruit, semolina, dairy, dates, spices, and floral flavors. This collection focuses on approachable desserts while keeping the broader food tradition in view.",
      contextTitle: "Desserts in Egyptian and Lebanese cooking",
      context:
        "Sweet dishes vary widely across the region, from date- and nut-based preparations to puddings and baked pastries. Ingredients such as orange blossom water, rose water, cinnamon, sesame, and pistachios contribute distinctive aromas.",
      guidanceTitle: "A thoughtful approach to dessert",
      guidance:
        "Dessert does not need to be eliminated from a balanced diet. Focus on portion, ingredient quality, and the role of the dessert within the overall meal rather than treating one food as inherently good or bad.",
      notesTitle: "Ingredient and preparation notes",
      notes:
        "Nuts and seeds can burn quickly, so toast them carefully. Floral waters are concentrated and should be added gradually. When adapting traditional desserts, preserve their defining flavors while making changes practical and clearly explained.",
    },

    "dips-sauces": {
      intro:
        "Dips and sauces are essential to many Mediterranean meals, adding acidity, creaminess, herbs, garlic, spice, and texture to vegetables, bread, grilled foods, and legumes.",
      contextTitle: "Why dips matter in Mediterranean cooking",
      context:
        "Hummus, tahini-based sauces, toum, and other preparations show how a small number of ingredients can create powerful flavors. These foods are often shared at the table and used across several different dishes.",
      guidanceTitle: "How to make flavorful dips",
      guidance:
        "Balance richness with acidity and freshness. Lemon juice, garlic, herbs, spices, and water can help create a lighter-feeling sauce without sacrificing flavor.",
      notesTitle: "Ingredient and preparation notes",
      notes:
        "Tahini can thicken dramatically when lemon juice is added; gradually incorporating cold water can create a smooth consistency. Garlic-based sauces also benefit from careful emulsification and gradual adjustment.",
    },
  },

  ar: {
    breakfast: {
      intro:
        "يمكن أن يكون الإفطار في المطبخين المصري واللبناني بسيطًا ومشبعًا ومبنيًا على مكونات يومية. تجمع هذه المجموعة أطباقًا صباحية مغذية تعتمد على الفول والبيض والخضروات والحبوب والزبادي والأعشاب الطازجة.",
      contextTitle: "الإفطار في المطبخين المصري واللبناني",
      context:
        "تعتمد وجبات الإفطار التقليدية في المنطقة غالبًا على مصدر مشبع للبروتين مع الخضروات أو الخبز أو البقوليات أو منتجات الألبان وزيت الزيتون. ويُعد الفول المصري مثالًا واضحًا على الإفطار القائم على البقوليات، بينما تضم موائد لبنانية كثيرة اللبنة والبيض والخضروات والزيتون والأعشاب.",
      guidanceTitle: "كيف تبني إفطارًا متوازنًا",
      guidance:
        "اجمع بين مصدر غني بالبروتين والخضروات أو الفاكهة مع كمية مناسبة من الحبوب أو الخبز التقليدي. استخدم زيت الزيتون باعتدال وأضف الأعشاب الطازجة واضبط كمية الملح حسب باقي مكونات الوجبة.",
      notesTitle: "ملاحظات حول المكونات والتحضير",
      notes:
        "يمكن تحضير البقوليات مسبقًا وإعادة تسخينها برفق. ويفضل طهي البيض حتى يتماسك فقط، بينما تضاف الخضروات والأعشاب الطازجة قبل التقديم للحفاظ على قوامها ونكهتها.",
      guide: {
        label: "اكتشف دليل الإفطار المصري",
        slug: "egyptian-breakfast-guide",
      },
    },

    salads: {
      intro:
        "السلطات الصحية المتوسطية ليست مجرد أطباق جانبية، بل تجمع بين الخضروات الطازجة والأعشاب والحبوب والبقوليات والحمضيات وزيت الزيتون لتكون مرافقة للوجبة أو وجبة خفيفة بحد ذاتها.",
      contextTitle: "دور السلطات على المائدة المتوسطية",
      context:
        "يعتمد المطبخان اللبناني والمصري على الخضروات والأعشاب الطازجة بشكل كبير. وتبرز التبولة مثالًا على استخدام البقدونس والبرغل، بينما تعتمد سلطات الخيار والطماطم على مكونات موسمية بسيطة.",
      guidanceTitle: "كيف تحضر سلطة مشبعة",
      guidance:
        "ابدأ بمكونات طازجة، وأضف مصدرًا للألياف أو البروتين عندما تكون السلطة وجبة رئيسية، ثم وازن التتبيلة بالحموضة وزيت الزيتون والتوابل.",
      notesTitle: "ملاحظات حول المكونات والتحضير",
      notes:
        "تذوق الخضروات قبل إضافة التوابل لأن مستوى الحلاوة والحموضة يختلف حسب الموسم. وقطّع المكونات بأحجام متقاربة للحفاظ على قوام متناسق.",
    },

    soups: {
      intro:
        "الشوربات المتوسطية أطعمة منزلية دافئة تعتمد على الخضروات والبقوليات والحبوب والأعشاب والتوابل البسيطة. ويمكنها تحويل مكونات متوفرة في المنزل إلى وجبات مشبعة دون الاعتماد على الصلصات الثقيلة.",
      contextTitle: "الشوربات في المطبخين المصري واللبناني",
      context:
        "تظهر العدس والفاصوليا والخضروات والحبوب في العديد من الشوربات الإقليمية. وتُعد شوربة العدس المصرية من أشهر الأمثلة، بينما يقدم المطبخ اللبناني مجموعة واسعة من شوربات الخضروات والبقوليات.",
      guidanceTitle: "كيف تحضر شوربة مغذية",
      guidance:
        "ابنِ النكهة تدريجيًا بطهي المكونات العطرية قبل إضافة السوائل. وتمنح البقوليات والخضروات الشوربة الألياف والقوام، بينما تضيف الأعشاب والليمون والتوابل نكهة دون الحاجة إلى كميات كبيرة من الملح أو الدهون.",
      notesTitle: "ملاحظات حول المكونات والتحضير",
      notes:
        "اغسل العدس والبقوليات المجففة قبل الطهي. وأضف المكونات الحمضية مثل الليمون في النهاية عندما تكون الوصفة مناسبة لذلك، واضبط القوام بالماء أو المرق.",
    },

    "main-dishes": {
      intro:
        "تجمع الأطباق الرئيسية بين عناصر الطبخ المتوسطي اليومية: الخضروات والبقوليات والحبوب والدواجن والأسماك والأعشاب وكميات معتدلة من الدهون الصحية لتكوين وجبات مشبعة ومتوازنة.",
      contextTitle: "بناء طبق رئيسي بطابع متوسطي",
      context:
        "تعتمد الوجبات المصرية واللبنانية كثيرًا على مجموعة من الأطعمة المتكاملة بدلًا من طبق واحد كبير. ويمكن تقديم اللحوم المشوية مع السلطات والحبوب، بينما تعتمد أطباق نباتية عديدة على البقوليات والخضروات والحبوب.",
      guidanceTitle: "كيف تجعل الطبق الرئيسي متوازنًا",
      guidance:
        "امنح الخضروات والبقوليات مساحة مهمة في الطبق واختر الشوي أو التحميص أو الخَبز أو الطهي الهادئ. استخدم الصلصات والزيوت لإضافة النكهة مع الحفاظ على تناسب مكونات الوجبة.",
      notesTitle: "ملاحظات حول المكونات والتحضير",
      notes:
        "يمكن أن يساعد تتبيل الدجاج أو اللحوم مسبقًا في تحسين النكهة قبل الشوي أو التحميص. وفي الأطباق النباتية يمكن الجمع بين البقوليات والحبوب أو تقديمها مع الخضروات والسلطات.",
    },

    vegetarian: {
      intro:
        "يعتمد الطبخ المتوسطي النباتي على الخضروات والبقوليات والحبوب والأعشاب والمكسرات ومنتجات الألبان كعناصر أساسية للوجبة، وليس كمكونات ثانوية.",
      contextTitle: "الطعام النباتي في المطبخ الإقليمي",
      context:
        "توجد أطباق نباتية كثيرة في المطبخين المصري واللبناني. فالعدس والحمص والفول والباذنجان والطماطم والخضروات الورقية والزبادي والحبوب تدخل في وصفات منزلية متنوعة.",
      guidanceTitle: "كيف تجعل الوجبات النباتية مشبعة",
      guidance:
        "اجمع الخضروات مع مكونات غنية بالبروتين والألياف مثل العدس والفاصوليا والحمص والزبادي والمكسرات. واستخدم الأعشاب والتوابل والليمون والثوم وزيت الزيتون لبناء النكهة.",
      notesTitle: "ملاحظات حول المكونات والتحضير",
      notes:
        "يساعد تحميص الخضروات على تركيز نكهتها، بينما تحتاج البقوليات الجافة إلى النقع أو الطهي المناسب. ويمكن إضافة الأعشاب الطازجة والمكونات الحمضية في النهاية لإضفاء الحيوية.",
    },

    vegan: {
      intro:
        "ينسجم الطبخ النباتي الصرف طبيعيًا مع كثير من تقاليد الطعام المتوسطي، حيث تشكل الفاصوليا والحمص والعدس والحبوب والخضروات والفواكه والأعشاب والطحينة وزيت الزيتون أساسًا لأطباق غنية بالنكهة.",
      contextTitle: "التقاليد النباتية في المنطقة",
      context:
        "تضم المطابخ المصرية واللبنانية أطباقًا نباتية بطبيعتها، مثل الفول والفلافل والحمص والسلطات وشوربات العدس وأطباق الحبوب.",
      guidanceTitle: "كيف تبني وجبة نباتية متكاملة",
      guidance:
        "أضف مصدرًا واضحًا للبروتين النباتي والألياف، ثم الخضروات والحبوب والأعشاب والدهون الصحية. ويمكن أن تضيف الطحينة والمكسرات والبذور وزيت الزيتون القوام والغنى.",
      notesTitle: "ملاحظات حول المكونات والتحضير",
      notes:
        "تحقق من مكونات المرق والصلصات والخبز المعبأ عند الالتزام بنظام نباتي صارم. ويمكن طهي الحمص والفاصوليا بكميات كبيرة وحفظها لاستخدامها في وجبات متعددة.",
    },

    "sandwiches-wraps": {
      intro:
        "تحول السندويشات واللفائف المتوسطية مكونات مألوفة مثل الدجاج المشوي والفلافل والخضروات والأعشاب والطحينة إلى وجبات عملية. وتجمع أفضل الوصفات بين الحشوة المشبعة والمكونات الطازجة والقوام المتنوع.",
      contextTitle: "السندويشات واللفائف في المنطقة",
      context:
        "يُعد الخبز المسطح جزءًا مهمًا من الطعام اليومي في شرق المتوسط. وتستخدم المطابخ اللبنانية وغيرها الخبز مع اللحوم المشوية والفلافل والخضروات والمخللات والأعشاب والصلصات.",
      guidanceTitle: "كيف تحضر لفافة أفضل",
      guidance:
        "اختر حشوة غنية بالنكهة، وأضف الخضروات والأعشاب الطازجة، واستخدم الصلصات باعتدال. اللفافة الجيدة تجمع بين المكونات الدافئة والباردة والخبز الطري والعناصر المقرمشة.",
      notesTitle: "ملاحظات حول المكونات والتحضير",
      notes:
        "دفئ الخبز المسطح قليلًا قبل الحشو حتى يصبح مرنًا. وصَفِّ الخضروات والصلصات كثيرة السوائل عند الحاجة لتقليل رطوبة الخبز.",
    },

    snack: {
      intro:
        "يمكن أن تكون الوجبات الخفيفة المستوحاة من المتوسط مزيجًا بسيطًا من المكسرات والبقوليات والخضروات والفواكه والزبادي والغموسات المنزلية، لتمنحك خيارًا مشبعًا دون الاعتماد على الأطعمة شديدة التصنيع.",
      contextTitle: "الوجبات الخفيفة اليومية في ثقافة الطعام المتوسطي",
      context:
        "تظهر المكسرات والخضروات الطازجة والزبادي والزيتون والبقوليات في كثير من أطعمة المنطقة، ويمكن تقديم العديد منها بكميات صغيرة كوجبات خفيفة.",
      guidanceTitle: "كيف تختار وجبة خفيفة مشبعة",
      guidance:
        "ابحث عن مزيج من الألياف والبروتين والدهون الصحية عندما تحتاج إلى شبع أطول. ويمكن أن تكون الخضروات مع الغموس أو الفاكهة مع الزبادي أو كمية محسوبة من المكسرات خيارات مناسبة.",
      notesTitle: "ملاحظات حول المكونات والتحضير",
      notes:
        "انتبه إلى حجم الحصة خصوصًا مع المكسرات والبذور والطحينة لأنها غنية بالطاقة. حضّر الخضروات المقطعة والغموسات البسيطة مسبقًا لتسهيل الاختيارات اليومية.",
    },

    mezze: {
      intro:
        "المزة أسلوب اجتماعي في تناول الطعام يعتمد على تقديم عدة أطباق صغيرة معًا. ويمكن أن تضم المائدة اللبنانية الحمص والسلطات والغموسات والخضروات والحبوب والأطباق المشوية.",
      contextTitle: "ما الذي يميز المزة",
      context:
        "المزة ليست مجرد قائمة من المقبلات، بل طريقة لمشاركة الطعام وإضافة التنوع إلى المائدة. ويمكن تقديم الأطباق الباردة بجانب الأطباق الدافئة، مع الخبز والغموسات والخضروات والبقوليات.",
      guidanceTitle: "كيف تنشئ مائدة مزة متوازنة",
      guidance:
        "اجمع بين السلطات الطازجة والبقوليات والغموسات والخضروات وطبق أو طبقين أكثر إشباعًا. واستخدم الليمون والأعشاب والثوم والتوابل لصنع التنوع دون جعل كل الأطباق ثقيلة.",
      notesTitle: "ملاحظات حول المكونات والتحضير",
      notes:
        "يمكن تحضير كثير من أطباق المزة مسبقًا، مما يجعلها مناسبة للتجمعات. احفظ الأعشاب والخضروات المقرمشة والخبز منفصلة حتى وقت التقديم، واحفظ الأطعمة سريعة التلف في الثلاجة.",
      guide: {
        label: "اكتشف دليل المزة اللبنانية",
        slug: "lebanese-mezze-guide",
      },
    },

    drinks: {
      intro:
        "تتراوح المشروبات المصرية واللبنانية بين مشروبات الفاكهة المنعشة ومشروبات الزبادي والأعشاب والقهوة والوصفات الحديثة. وتركز هذه المجموعة على مشروبات تكمل الطعام وأجواء المنطقة.",
      contextTitle: "المشروبات في التقاليد المصرية واللبنانية",
      context:
        "توجد مشروبات تقدم مع الإفطار والوجبات والمناسبات والتجمعات في الطقس الدافئ. ويظهر الكركديه والخروب والنعناع والزبادي والقهوة والفواكه الطازجة بأشكال مختلفة.",
      guidanceTitle: "كيف تحضر مشروبات متوازنة",
      guidance:
        "دع نكهة الفاكهة أو الأعشاب أو التوابل أو القهوة أو الزبادي تكون هي الأساس. وإذا احتجت إلى التحلية فأضفها تدريجيًا بدلًا من جعل السكر هو النكهة الرئيسية.",
      notesTitle: "ملاحظات حول المكونات والتحضير",
      notes:
        "تختلف حلاوة وحموضة المكونات الطازجة، لذلك من المهم تذوق المشروب قبل ضبطه نهائيًا. وللمشروبات الباردة يمكن تبريد المكونات مسبقًا بدلًا من الاعتماد على كمية كبيرة من الثلج.",
      guide: {
        label: "اكتشف مدونة المشروبات",
        slug: "drink-vlog",
      },
    },

    desserts: {
      intro:
        "تجمع الحلويات المتوسطية بين المكسرات والفواكه والسميد ومنتجات الألبان والتمر والتوابل والنكهات الزهرية. وتركز هذه المجموعة على حلويات سهلة مع الحفاظ على جذورها التقليدية.",
      contextTitle: "الحلويات في المطبخين المصري واللبناني",
      context:
        "تختلف الحلويات كثيرًا في المنطقة، من الوصفات القائمة على التمر والمكسرات إلى المهلبية والحلويات المخبوزة. وتمنح ماء الزهر وماء الورد والقرفة والسمسم والفستق روائح مميزة.",
      guidanceTitle: "نظرة متوازنة إلى الحلويات",
      guidance:
        "لا تحتاج الحلويات إلى الاستبعاد من النظام الغذائي المتوازن. الأهم هو حجم الحصة وجودة المكونات ودور الحلوى ضمن الوجبة الكاملة.",
      notesTitle: "ملاحظات حول المكونات والتحضير",
      notes:
        "يمكن أن تحترق المكسرات والبذور بسرعة لذلك تحتاج إلى مراقبة أثناء التحميص. أضف ماء الزهر أو الورد تدريجيًا لأنه مركز، وعند تعديل وصفة تقليدية حافظ على نكهاتها الأساسية.",
    },

    "dips-sauces": {
      intro:
        "تعد الغموسات والصلصات جزءًا أساسيًا من كثير من الوجبات المتوسطية، فهي تضيف الحموضة والقوام الكريمي والأعشاب والثوم والتوابل إلى الخضروات والخبز والمشاوي والبقوليات.",
      contextTitle: "لماذا تعد الغموسات مهمة",
      context:
        "يوضح الحمص والصلصات القائمة على الطحينة والثوم وغيرها كيف يمكن لعدد قليل من المكونات أن يصنع نكهة قوية. وغالبًا ما تقدم هذه الأطعمة للمشاركة وتستخدم مع عدة أطباق.",
      guidanceTitle: "كيف تحضر غموسات غنية بالنكهة",
      guidance:
        "وازن الغنى بالحموضة والنضارة. ويمكن لليمون والثوم والأعشاب والتوابل والماء أن تساعد في صنع صلصة أخف دون التضحية بالنكهة.",
      notesTitle: "ملاحظات حول المكونات والتحضير",
      notes:
        "قد تصبح الطحينة كثيفة بسرعة عند إضافة الليمون، لذلك يساعد إدخال الماء البارد تدريجيًا في الوصول إلى قوام ناعم. كما تحتاج صلصات الثوم إلى خلط تدريجي للحصول على مستحلب متجانس.",
    },
  },
};
