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
    "slug": "lebanon-culture-heritage",
    "category": "culture-heritage",
    "image": "/images/news/lebanon-heritage/lebanon-hero.webp",
    "imageAlt": {
      "en": "Historic Lebanese coastal town of Byblos overlooking the Mediterranean Sea at sunset",
      "ar": "مدينة جبيل اللبنانية التاريخية المطلة على البحر الأبيض المتوسط عند الغروب"
    },
    "publishedAt": "2026-10-10",

    "en": {
      "title": "Lebanon: A Culture Told Through Food, Family & the Land",
      "excerpt": "From ancient coastal cities and mountain villages to olive groves, family kitchens and generous mezze tables, Lebanese heritage is deeply connected to the way people grow, prepare, share and remember food.",
      "sections": [
        {
          "heading": "A Table Tells a Story",
          "paragraphs": [
            "You can learn a surprising amount about Lebanon by sitting down at a Lebanese table. There might be a bowl of hummus in the middle, a plate of tabbouleh bright with parsley and lemon, warm bread passed from one person to another, olives, pickles, labneh and several more dishes arriving before anyone has finished the first.",
            "The table feels generous because Lebanese food has always been about more than feeding yourself. It is about feeding other people. A meal can be an invitation to stay, a way of welcoming a guest, a reason for relatives to gather and a chance to pass familiar flavors from one generation to another.",
            "That is one of the best places to begin understanding Lebanese heritage. The culture is not preserved only in ancient ruins or museums. It also lives in family kitchens, village bakeries, olive groves, celebrations and the recipes people remember because someone they loved used to make them."
          ]
        },
        {
          "heading": "Lebanon at the Crossroads of Civilizations",
          "paragraphs": [
            "Lebanon occupies a relatively small area along the eastern Mediterranean, but its location has placed it in contact with many different civilizations throughout history. The coast connected communities to Mediterranean trade, while the mountains and valleys created their own local environments and traditions.",
            "Ancient Phoenician cities along the coast became important centers of maritime trade. Later periods brought Greek, Roman, Byzantine, Arab, Crusader and Ottoman influences, among others. Each period left traces in the country's archaeology, architecture, language, religious landscape and cultural memory.",
            "The result is not a single, simple historical identity. Lebanese heritage is layered. Looking at the country through one period alone misses the way different communities and generations have continued to build on what came before them."
          ]
        },
        {
          "heading": "Byblos, Tyre and Sidon: The Mediterranean Connection",
          "image": "/images/news/lebanon-heritage/lebanon-hero.webp",
          "imageAlt": "Historic harbour of Byblos on the Mediterranean coast",
          "paragraphs": [
            "Byblos, known today as جبيل, is one of the places that makes Lebanon's long history particularly visible. Its archaeological remains show a settlement with thousands of years of occupation and an important connection to the ancient Mediterranean world.",
            "Tyre and Sidon were also major coastal cities. Their histories are closely connected to maritime trade and the movement of goods, people and ideas around the Mediterranean. These cities remind us that the sea was not simply a border for ancient Lebanon. It was a route connecting communities.",
            "That Mediterranean connection can still be felt in Lebanese food. Olive oil, herbs, vegetables, grains, seafood, citrus and other ingredients belong to a food culture that shares many characteristics with the wider Mediterranean while retaining its own Lebanese character."
          ]
        },
        {
          "heading": "The Mountains, Valleys and the Cedar",
          "image": "/images/news/lebanon-heritage/cedar-forest.webp",
          "imageAlt": "Cedar forest in the mountains of Lebanon",
          "paragraphs": [
            "Lebanon's geography changes quickly. A short journey can take you from the Mediterranean coast into mountain villages, fertile agricultural areas and highland landscapes. This variety has influenced what people grow, what they eat and how communities have developed.",
            "The cedar is perhaps the most recognizable natural symbol of Lebanon. Cedar trees have been associated with the country's landscape and cultural identity for centuries, and the tree appears on the Lebanese national flag.",
            "In northern Lebanon, the Qadisha Valley and the Forest of the Cedars of God form a UNESCO World Heritage property. The landscape combines dramatic mountains, historic monasteries and ancient cedar groves, showing how natural and cultural heritage can exist together.",
            "The mountains also helped preserve local traditions. Villages developed distinctive food practices and ways of making use of what was available locally, from grains and legumes to fruit, herbs, dairy and olive products."
          ]
        },
        {
          "heading": "Family Is at the Heart of Lebanese Life",
          "paragraphs": [
            "Family is an important part of Lebanese social life, and food often provides the setting where family relationships become visible. A meal can bring several generations around the same table, with older relatives preparing familiar dishes and younger family members learning simply by watching.",
            "Some recipes are written down. Many are not. A person may remember how their grandmother prepared something without ever having measured the ingredients. A little more lemon, a different amount of garlic or a particular way of browning onions becomes part of the family's version.",
            "This is why there can be many perfectly recognizable versions of the same Lebanese dish. Variation does not necessarily mean that one family is doing it incorrectly. It can reflect geography, household preference and the way recipes naturally change as they move between generations."
          ]
        },
        {
          "heading": "Lebanese Hospitality",
          "paragraphs": [
            "Hospitality is one of the qualities most often associated with Lebanese culture, and food is one of its clearest expressions. Guests may be offered coffee, tea, fruit, sweets or a full meal, sometimes with much more food prepared than anyone originally expected to eat.",
            "The generosity is not only about quantity. It is about making someone feel welcome. Bringing another plate to the table, encouraging a guest to try something, or insisting that there is room for one more person can all become part of the social ritual of eating.",
            "That spirit helps explain why shared dishes are so important. When food is placed in the middle of the table, the meal becomes something people participate in together rather than something each person consumes separately."
          ]
        },
        {
          "heading": "The Tradition of Mezze",
          "image": "/images/recipes/labneh-zaatar-olive-oil.webp",
          "imageAlt": "Lebanese-style labneh with zaatar and olive oil",
          "paragraphs": [
            "Mezze is one of the most recognizable features of Lebanese cuisine. A mezze table may include hummus, baba ghanoush, tabbouleh, fattoush, labneh, olives, pickles, vegetables, stuffed vine leaves and many other dishes depending on the meal.",
            "The important thing is not that every Lebanese table contains exactly the same collection. Mezze changes with the household, region, season and occasion. A family lunch may be quite different from a large celebration.",
            "What stays recognizable is the idea of variety and sharing. Small plates allow people to taste different flavors, pass food around the table and spend time together. It is a style of eating that naturally turns a meal into a social occasion."
          ]
        },
        {
          "heading": "Hummus, Tabbouleh and the Lebanese Table",
          "image": "/images/recipes/tabbouleh-salad.webp",
          "imageAlt": "Fresh tabbouleh, a familiar dish on Lebanese tables",
          "paragraphs": [
            "Hummus is made from chickpeas and tahini, with lemon and garlic commonly contributing brightness and flavor. It is simple in its ingredient list, but the balance of texture, acidity, sesame and seasoning can vary significantly between households and restaurants.",
            "Tabbouleh offers a completely different expression of the table. Parsley is central, joined by tomato, mint, bulgur, lemon juice and olive oil. The result is fresh, herb-forward and bright.",
            "Kibbeh, in its many forms, shows another side of Lebanese cooking. Bulgur and meat can be combined into mixtures that are shaped, filled, baked or fried, with regional and family variations. Vegetarian versions and other preparations also exist.",
            "Together, these dishes show why Lebanese cuisine cannot be reduced to one flavor profile. Fresh herbs, grains, legumes, vegetables, meat, dairy, nuts, spices, citrus and olive oil can all appear on the same table."
          ]
        },
        {
          "heading": "Olive Oil and the Agricultural Calendar",
          "image": "/images/recipes/herb-marinated-olives.webp",
          "imageAlt": "Olives prepared with herbs and olive oil",
          "paragraphs": [
            "Olive oil is one of the most important ingredients in Lebanese cooking and part of a much wider Mediterranean agricultural tradition. Olive trees grow across different parts of Lebanon, and the harvest can become an important seasonal activity for families and communities.",
            "The olive harvest is about more than producing oil. For families connected to the land, it can mean returning to villages, working together and sharing the rhythm of a season that has been repeated for generations.",
            "Olive oil then finds its way into everyday cooking: drizzled over labneh, mixed into salads, used in marinades, added to dips or simply served with bread. Its importance comes partly from its versatility and partly from its connection to the landscape."
          ]
        },
        {
          "heading": "Bread, Grains and Everyday Food",
          "image": "/images/recipes/lebanese-mujadara.webp",
          "imageAlt": "Lebanese mujadara with lentils, rice and onions",
          "paragraphs": [
            "Bread has long been central to everyday eating across the Levant. It can accompany dips, wrap fillings, carry grilled foods or simply be torn into pieces and shared at the table.",
            "Grains and legumes are equally important. Bulgur, wheat, rice, lentils, chickpeas and beans can provide the foundation of meals that are practical, filling and adaptable.",
            "These foods also make sense in a traditional household context because many can be stored and used throughout the year. Before modern food distribution made almost everything available all the time, preservation and storage were essential parts of managing a household kitchen."
          ]
        },
        {
          "heading": "Man’oushe and the Bakery Tradition",
          "image": "/images/news/lebanon-heritage/zaatar-manoushe.webp",
          "imageAlt": "Traditional Lebanese zaatar manoushe",
          "paragraphs": [
            "Some Lebanese food traditions are especially closely connected to everyday life outside the home kitchen. Man’oushe is a familiar example: a flatbread commonly topped with za’atar and olive oil and baked until fragrant.",
            "It can be breakfast, a quick meal, something bought from a neighborhood bakery or a food shared with family. Its simplicity is part of its appeal.",
            "UNESCO has recognized al-Man’ouché as an emblematic culinary practice in Lebanon's intangible cultural heritage. The recognition is significant because it highlights not only a food but also the knowledge, preparation and social practices surrounding it."
          ]
        },
        {
          "heading": "Coffee, Mint Tea and Conversation",
          "image": "/images/recipes/authentic-lebanese-mint-tea.webp",
          "imageAlt": "Lebanese mint tea served for sharing",
          "paragraphs": [
            "Drinks can carry cultural meaning too. Coffee and tea are commonly associated with welcoming guests and making time for conversation, although preparation and serving customs vary between families and communities.",
            "Lebanese mint tea, for example, combines black tea with fresh mint and can be served after a meal or when guests visit. The mint gives the drink a bright aroma that makes it particularly refreshing.",
            "These drinks demonstrate something easy to overlook when thinking about culinary heritage: culture is not only found in elaborate celebration dishes. It also exists in the ordinary routines that happen every day."
          ]
        },
        {
          "heading": "Music, Dabke and Celebration",
          "image": "/images/news/lebanon-heritage/lebanese-dabke.webp",
          "imageAlt": "Traditional Lebanese dabke folk dancing",
          "paragraphs": [
            "Lebanese cultural life extends far beyond food. Music, poetry, crafts, religious traditions, festivals and dance all contribute to the country's cultural identity.",
            "Dabke is perhaps the most recognizable traditional group dance associated with the Levant. Participants join hands or link together and move through coordinated steps. Different communities and regions have their own styles, and the dance is particularly associated with weddings and celebrations.",
            "The communal character of dabke mirrors the communal character of the Lebanese table. Both are activities in which participation matters. They bring people together rather than simply presenting something for an audience to observe."
          ]
        },
        {
          "heading": "Villages, Regions and Local Identity",
          "paragraphs": [
            "Lebanon's regional differences are important when talking about its food. Coastal communities have their own relationship with seafood and Mediterranean trade. Mountain villages have traditions shaped by altitude, agriculture and seasonal preservation. The Bekaa Valley has long been important for agriculture and vineyards.",
            "This means there is no single dish or ingredient that can tell the entire story of Lebanese cooking. A recipe may have one version in a mountain village and another in a coastal city, while families living abroad may develop yet another version using ingredients available to them.",
            "Rather than making Lebanese cuisine less authentic, these differences show how food traditions survive. They adapt to geography, migration, availability and family life."
          ]
        },
        {
          "heading": "Religious and Cultural Diversity",
          "paragraphs": [
            "Lebanon is home to a diverse range of religious and cultural communities. Christian and Muslim communities, among others, have contributed to the country's cultural landscape, and traditions can differ considerably between communities and regions.",
            "Celebrations, fasting periods, religious holidays, family customs and everyday food practices can therefore vary. Some dishes are associated strongly with particular communities, while others are shared widely across the country and the wider Levant.",
            "Recognizing this diversity is important when discussing Lebanese heritage. There is no single experience that represents every Lebanese person. The country's cultural story is better understood as a collection of overlapping traditions."
          ]
        },
        {
          "heading": "Preserving Heritage Through Food",
          "paragraphs": [
            "Perhaps the most interesting thing about Lebanese heritage is how much of it survives through ordinary actions. Someone plants mint in a garden. A family gathers olives. A grandmother teaches a child how to shape kibbeh. Someone makes tabbouleh without measuring anything because they have made it hundreds of times.",
            "These moments may not look historic, but they preserve knowledge. They connect younger generations to people and places they may otherwise know only through stories.",
            "Food becomes a kind of living archive. A recipe can carry the memory of a village, a season, a relative or a family gathering. When the recipe is prepared again, part of that memory is carried forward."
          ]
        },
        {
          "heading": "Lebanese Cuisine in the Modern World",
          "paragraphs": [
            "Lebanese cuisine has traveled far beyond Lebanon. Lebanese restaurants, bakeries and family kitchens can now be found in many parts of the world, and recipes continue to change as cooks work with new ingredients and modern techniques.",
            "That evolution does not necessarily erase tradition. A dish can be prepared in a contemporary kitchen while still retaining the ingredients, flavors or social meaning that connect it to Lebanese food culture.",
            "For modern home cooks, Lebanese cuisine also offers a practical approach to everyday food. Vegetables, herbs, legumes, grains, yogurt, olive oil and spices can create satisfying meals without requiring complicated equipment or elaborate preparation."
          ]
        },
        {
          "heading": "The Heritage Behind the Table",
          "paragraphs": [
            "Lebanon's heritage cannot be separated from its food. The ancient cities, mountains, cedar forests, agricultural valleys, family kitchens, bakeries and gathering places all form part of the story.",
            "A bowl of hummus tells one small part of that story. Tabbouleh tells another. A loaf of man’oushe, a glass of mint tea, a bottle of olive oil from the harvest or a family plate of mujaddara can each connect food to a place and a memory.",
            "The most meaningful way to understand culinary heritage is therefore not to treat traditional food as something frozen in time. It is to see how people continue to cook it, adapt it, share it and teach it to someone else."
          ]
        },
        {
          "heading": "A Taste of Lebanon at Healthy Mezze",
          "paragraphs": [
            "At Healthy Mezze, we see Lebanese cuisine as part of the wider Eastern Mediterranean food tradition: generous, vegetable-rich, built around grains and legumes, brightened with herbs and lemon, and deeply connected to the idea of sharing.",
            "Exploring a Lebanese recipe is only the beginning. Behind the ingredients are landscapes, agricultural traditions, family memories and centuries of cultural exchange.",
            "So when you sit down to a Lebanese-inspired meal, take a moment to look beyond the plate. The food is carrying a story—and that story is still being written."
          ]
        }
      ]
    },

    "ar": {
      "title": "لبنان: ثقافة تحكيها المائدة والعائلة والأرض",
      "excerpt": "من المدن الساحلية القديمة والقرى الجبلية إلى بساتين الزيتون والمطابخ العائلية وموائد المزّة، يرتبط التراث اللبناني ارتباطاً عميقاً بالطريقة التي يزرع بها الناس الطعام ويحضّرونه ويتشاركونه ويتذكرونه.",
      "sections": [
        {
          "heading": "المائدة تحكي حكاية",
          "paragraphs": [
            "يمكن أن نتعرّف إلى الكثير عن لبنان بمجرد الجلوس إلى مائدة لبنانية. قد نجد طبقاً من الحمص في الوسط، وتبولة مليئة بالبقدونس والليمون، وخبزاً دافئاً ينتقل بين أفراد المائدة، إلى جانب الزيتون والمخللات واللبنة وأطباق أخرى تصل قبل أن ينتهي الجميع من الطبق الأول.",
            "تبدو المائدة سخية لأن الطعام اللبناني لم يكن مجرد وسيلة لإشباع الجوع. فهو مرتبط بإطعام الآخرين. وقد تكون الوجبة دعوة للبقاء، أو طريقة للترحيب بالضيف، أو فرصة لاجتماع الأقارب، أو وسيلة لانتقال النكهات المألوفة من جيل إلى آخر.",
            "ولهذا يمكن أن تكون المائدة مدخلاً جميلاً لفهم التراث اللبناني. فالثقافة لا تُحفظ في الآثار والمتاحف فقط، بل تعيش أيضاً في المطابخ العائلية والمخابز والحقول والاحتفالات والوصفات التي يتذكرها الناس لأن شخصاً عزيزاً كان يحضّرها."
          ]
        },
        {
          "heading": "لبنان على ملتقى الحضارات",
          "paragraphs": [
            "يقع لبنان على الساحل الشرقي للبحر المتوسط، وقد وضعه موقعه الجغرافي على اتصال بحضارات وشعوب متعددة عبر التاريخ. ربط الساحل اللبناني المنطقة بالتجارة المتوسطية، بينما كوّنت الجبال والوديان بيئات محلية لها تقاليدها الخاصة.",
            "كانت المدن الفينيقية القديمة على الساحل مراكز مهمة للتجارة البحرية. ثم تعاقبت فترات وتأثيرات يونانية ورومانية وبيزنطية وعربية وصليبية وعثمانية وغيرها. وتركت كل مرحلة آثاراً في العمارة والآثار واللغة والمشهد الديني والذاكرة الثقافية.",
            "ولهذا لا يمكن اختزال الهوية التاريخية اللبنانية في فترة واحدة. فالتراث اللبناني طبقات متراكمة، وفهمه يحتاج إلى النظر في الطريقة التي تفاعلت بها الأجيال والمجتمعات مع ما سبقها."
          ]
        },
        {
          "heading": "جبيل وصور وصيدا والبحر المتوسط",
          "image": "/images/news/lebanon-heritage/byblos-harbor.webp",
          "imageAlt": "المرفأ التاريخي في جبيل على ساحل البحر المتوسط",
          "paragraphs": [
            "تُعدّ جبيل، المعروفة اليوم باسم جبيل، من الأماكن التي تجعل التاريخ الطويل للبنان واضحاً أمام العين. وتكشف آثارها عن استيطان يعود إلى آلاف السنين وعن ارتباط مهم بالعالم المتوسطي القديم.",
            "كما كانت صور وصيدا مدينتين ساحليتين مهمتين، وارتبط تاريخهما بالتجارة البحرية وحركة السلع والناس والأفكار حول البحر المتوسط. وتذكّرنا هذه المدن بأن البحر لم يكن حدوداً للبنان القديم، بل كان طريقاً يصل مجتمعات مختلفة ببعضها.",
            "ويمكن الشعور بهذا الارتباط المتوسطي في الطعام اللبناني أيضاً. فالزيتون وزيت الزيتون والأعشاب والخضروات والحبوب والمأكولات البحرية والحمضيات كلها جزء من ثقافة غذائية تشترك مع منطقة المتوسط في بعض الملامح مع احتفاظها بطابع لبناني خاص."
          ]
        },
        {
          "heading": "الجبال والوديان والأرز",
          "image": "/images/news/lebanon-heritage/cedar-forest.webp",
          "imageAlt": "غابة أرز في جبال لبنان",
          "paragraphs": [
            "تتغيّر جغرافية لبنان بسرعة. فقد ينتقل الإنسان خلال مسافة قصيرة من الساحل المتوسطي إلى القرى الجبلية والمناطق الزراعية والمرتفعات. وقد أثّر هذا التنوع في الزراعة والطعام وطريقة تطور المجتمعات.",
            "وتُعدّ شجرة الأرز من أشهر الرموز الطبيعية للبنان. ارتبطت أشجار الأرز بالمناظر الطبيعية والهوية الثقافية للبلاد منذ قرون، كما تظهر الشجرة على العلم اللبناني.",
            "وفي شمال لبنان، يشكّل وادي قاديشا وغابة أرز الرب موقعاً مدرجاً على قائمة التراث العالمي لليونسكو. ويجمع المكان بين الجبال والأديرة التاريخية وبقايا غابات الأرز، موضحاً العلاقة القوية بين التراث الطبيعي والثقافي.",
            "كما ساعدت البيئة الجبلية في الحفاظ على تقاليد محلية. فقد طوّرت القرى طرقاً مختلفة للاستفادة من المنتجات المتوفرة حولها، من الحبوب والبقول إلى الفواكه والأعشاب ومنتجات الألبان والزيتون."
          ]
        },
        {
          "heading": "العائلة في قلب الحياة اللبنانية",
          "paragraphs": [
            "تحتل العائلة مكانة مهمة في الحياة الاجتماعية اللبنانية، وغالباً ما يكون الطعام هو المساحة التي تظهر فيها العلاقات العائلية بوضوح. فقد تجمع الوجبة عدة أجيال حول المائدة، بينما يتعلم الأصغر سناً من الأكبر بمجرد المشاهدة والمشاركة.",
            "بعض الوصفات مكتوبة، وكثير منها ليس كذلك. قد يتذكر الشخص طريقة إعداد جدته لطبق معين من دون أن يعرف مقداراً دقيقاً لكل مكوّن. القليل الإضافي من الليمون أو الثوم، أو طريقة تحمير البصل، قد يصبح جزءاً من نسخة العائلة الخاصة.",
            "ولهذا نجد نسخاً متعددة من الطبق اللبناني نفسه. اختلاف الوصفة لا يعني بالضرورة أن إحدى العائلات تطهو بطريقة خاطئة؛ فقد يكون الاختلاف نتيجة المنطقة أو تفضيلات البيت أو انتقال الوصفة بين الأجيال."
          ]
        },
        {
          "heading": "الضيافة اللبنانية",
          "paragraphs": [
            "تُعدّ الضيافة من الصفات المرتبطة بقوة بالثقافة اللبنانية، والطعام أحد أوضح تعبيراتها. قد يُقدَّم للضيف القهوة أو الشاي أو الفاكهة أو الحلويات أو وجبة كاملة، وأحياناً يكون الطعام أكثر بكثير مما كان متوقعاً.",
            "لكن الكرم لا يتعلق بالكمية وحدها. إنه يتعلق بجعل الضيف يشعر بأنه مرحب به. قد يكون إحضار طبق إضافي أو دعوة الضيف لتذوق شيء معين أو إفساح مكان لشخص آخر جزءاً من طقوس الطعام اليومية.",
            "وهذا يساعد على فهم أهمية الأطباق المشتركة. فعندما توضع الأطباق في وسط المائدة تصبح الوجبة تجربة يشارك فيها الجميع بدلاً من أن يأكل كل شخص بشكل منفصل."
          ]
        },
        {
          "heading": "تقليد المزّة",
          "image": "/images/recipes/labneh-zaatar-olive-oil.webp",
          "imageAlt": "لبنة بالزعتر وزيت الزيتون",
          "paragraphs": [
            "المزّة من أكثر ملامح المطبخ اللبناني شهرة. وقد تضم المائدة الحمص وبابا غنوج والتبولة والفتوش واللبنة والزيتون والمخللات والخضروات وورق العنب وأطباقاً أخرى كثيرة بحسب الوجبة.",
            "لكن المهم ليس أن تحتوي كل مائدة لبنانية على القائمة نفسها. فالمزّة تختلف بحسب البيت والمنطقة والموسم والمناسبة. وقد تكون وجبة العائلة اليومية مختلفة تماماً عن مائدة احتفال كبير.",
            "ما يبقى واضحاً هو فكرة التنوع والمشاركة. تسمح الأطباق الصغيرة للجميع بتجربة نكهات مختلفة وتمرير الطعام وقضاء وقت أطول معاً. ولهذا تتحول الوجبة بسهولة إلى مناسبة اجتماعية."
          ]
        },
        {
          "heading": "الحمص والتبولة والمائدة اللبنانية",
          "image": "/images/recipes/tabbouleh-salad.webp",
          "imageAlt": "تبولة طازجة من أطباق المائدة اللبنانية",
          "paragraphs": [
            "يتكوّن الحمص من الحمص والطحينة، وغالباً ما يضيف الليمون والثوم نكهة وحيوية. ورغم بساطة مكوّناته، يمكن أن تختلف قواماته وتوازنه بين الحموضة والطحينة والتتبيل من بيت إلى آخر.",
            "أما التبولة فتقدم صورة مختلفة تماماً. فالبقدونس هو أحد مكوناتها الأساسية، وينضم إليه الطماطم والنعناع والبرغل وعصير الليمون وزيت الزيتون، لتصبح السلطة غنية بالأعشاب ومنعشة وواضحة النكهة.",
            "ويقدم الكبة، بأشكالها المتعددة، جانباً آخر من المطبخ اللبناني. يمكن الجمع بين البرغل واللحم وتشكيل الخليط وحشوه أو خبزه أو قليه، مع اختلافات محلية وعائلية عديدة. كما توجد تحضيرات نباتية وغيرها.",
            "وتوضح هذه الأطباق مجتمعة أن المطبخ اللبناني لا يعتمد على نكهة واحدة. فقد تجتمع الأعشاب والحبوب والبقول والخضروات واللحوم والألبان والمكسرات والتوابل والحمضيات وزيت الزيتون على المائدة نفسها."
          ]
        },
        {
          "heading": "زيت الزيتون ودورة الزراعة",
          "image": "/images/recipes/herb-marinated-olives.webp",
          "imageAlt": "زيتون متبل بالأعشاب وزيت الزيتون",
          "paragraphs": [
            "يُعد زيت الزيتون من أهم مكونات الطبخ اللبناني، وهو جزء من تقليد زراعي متوسطي أوسع. تنمو أشجار الزيتون في مناطق مختلفة من لبنان، ويمكن أن يتحول موسم القطاف إلى نشاط مهم للعائلات والمجتمعات.",
            "ولا يتعلق قطاف الزيتون بإنتاج الزيت فقط. فبالنسبة للعائلات المرتبطة بالأرض، قد يعني العودة إلى القرية والعمل مع الأقارب ومشاركة إيقاع موسم يتكرر منذ أجيال.",
            "ثم يدخل زيت الزيتون في تفاصيل كثيرة من المطبخ اليومي: فوق اللبنة، وفي السلطات والتتبيلات والصلصات، أو ببساطة مع الخبز. وترتبط أهميته بمرونته وبعلاقته المباشرة بالأرض."
          ]
        },
        {
          "heading": "الخبز والحبوب والطعام اليومي",
          "image": "/images/recipes/lebanese-mujadara.webp",
          "imageAlt": "مجدرة لبنانية بالعدس والأرز والبصل",
          "paragraphs": [
            "كان الخبز جزءاً أساسياً من الطعام اليومي في بلاد الشام. يمكن تقديمه مع المقبلات، أو استخدامه في اللفائف، أو مع المشويات، أو تمزيقه ومشاركته حول المائدة.",
            "وتحتل الحبوب والبقول مكانة مهمة أيضاً. فالبرغل والقمح والأرز والعدس والحمص والفاصوليا يمكن أن تكون أساس وجبات مشبعة وعملية ومتنوعة.",
            "وتنسجم هذه الأطعمة أيضاً مع احتياجات المطبخ التقليدي، لأن كثيراً منها يمكن تخزينه واستخدامه طوال العام. وقبل أن يصبح الوصول إلى معظم الأطعمة متاحاً في كل وقت، كان الحفظ والتخزين جزءاً أساسياً من إدارة المطبخ."
          ]
        },
        {
          "heading": "المناقيش وتقليد المخبز",
          "image": "/images/news/lebanon-heritage/zaatar-manoushe.webp",
          "imageAlt": "منقوشة زعتر لبنانية تقليدية",
          "paragraphs": [
            "تعيش بعض التقاليد اللبنانية في تفاصيل الحياة اليومية خارج المطبخ المنزلي. والمناقيش مثال واضح على ذلك؛ فهي خبز مسطح يُغطى غالباً بالزعتر وزيت الزيتون ثم يُخبز حتى تفوح رائحته.",
            "قد تكون وجبة فطور أو طعاماً سريعاً أو شيئاً يُشترى من مخبز الحي أو يُشارك مع العائلة. وبساطتها جزء من جاذبيتها.",
            "وقد اعترفت اليونسكو بالمناقيش بوصفها ممارسة غذائية رمزية في لبنان ضمن التراث الثقافي غير المادي. وهذا الاعتراف لا يتعلق بالخبز وحده، بل بالمعرفة والتحضير والممارسات الاجتماعية المرتبطة به."
          ]
        },
        {
          "heading": "القهوة وشاي النعناع والحديث",
          "image": "/images/recipes/authentic-lebanese-mint-tea.webp",
          "imageAlt": "شاي النعناع اللبناني للتقديم والمشاركة",
          "paragraphs": [
            "يمكن للمشروبات أن تحمل معنى ثقافياً أيضاً. وترتبط القهوة والشاي بالترحيب بالضيوف وإتاحة الوقت للحديث، مع اختلاف طرق التحضير والتقديم بين العائلات والمجتمعات.",
            "ويُعد شاي النعناع اللبناني مثالاً مألوفاً؛ إذ يجمع الشاي الأسود مع النعناع الطازج ويمكن تقديمه بعد الوجبات أو عند استقبال الضيوف. ويمنحه النعناع رائحة منعشة ومميزة.",
            "وتوضح هذه المشروبات جانباً قد يغيب عند التفكير في التراث الغذائي: فالثقافة لا توجد فقط في أطباق المناسبات الكبيرة، بل أيضاً في العادات اليومية البسيطة التي تتكرر كل يوم."
          ]
        },
        {
          "heading": "الموسيقى والدبكة والاحتفال",
          "image": "/images/news/lebanon-heritage/lebanese-dabke.webp",
          "imageAlt": "رقصة الدبكة اللبنانية التقليدية",
          "paragraphs": [
            "تمتد الثقافة اللبنانية إلى ما هو أبعد من الطعام. فالموسيقى والشعر والحرف والتقاليد الدينية والمهرجانات والرقص كلها تشكل أجزاء مهمة من الهوية الثقافية.",
            "وتُعد الدبكة من أشهر الرقصات الجماعية المرتبطة ببلاد الشام. يقف المشاركون في صف واحد أو يتشابكون بالأيدي ويتحركون بخطوات منسقة. وتوجد أساليب مختلفة بحسب المناطق والمجتمعات، وترتبط الدبكة كثيراً بالأعراس والاحتفالات.",
            "وتشبه طبيعة الدبكة الجماعية طبيعة المائدة اللبنانية. ففي الحالتين تكون المشاركة مهمة. فالغرض ليس مجرد تقديم شيء أمام الجمهور، بل جمع الناس في تجربة مشتركة."
          ]
        },
        {
          "heading": "القرى والمناطق والهوية المحلية",
          "paragraphs": [
            "تُعد الاختلافات بين مناطق لبنان مهمة عند الحديث عن الطعام. فللمجتمعات الساحلية علاقتها الخاصة بالمأكولات البحرية والتجارة المتوسطية، بينما تأثرت القرى الجبلية بالزراعة والارتفاع وأساليب حفظ الطعام الموسمية. أما سهل البقاع فله أهمية زراعية كبيرة وتقاليد مرتبطة بالمحاصيل والكروم.",
            "ولهذا لا يوجد طبق واحد أو مكوّن واحد يستطيع أن يروي قصة المطبخ اللبناني بأكملها. قد تكون للوصفة نسخة في قرية جبلية وأخرى في مدينة ساحلية، بينما قد تطوّر العائلات التي تعيش خارج لبنان نسخة جديدة باستخدام ما يتوفر لديها.",
            "ولا تجعل هذه الاختلافات الطعام أقل أصالة. بل توضح كيف تستمر التقاليد الغذائية من خلال التكيف مع المكان والهجرة وتوفر المكونات وحياة العائلة."
          ]
        },
        {
          "heading": "التنوع الديني والثقافي",
          "paragraphs": [
            "يضم لبنان مجموعة متنوعة من المجتمعات الدينية والثقافية. وقد أسهمت المجتمعات المسيحية والإسلامية وغيرها في تشكيل المشهد الثقافي للبلاد، وتختلف العادات بشكل واضح بين بعض المناطق والمجتمعات.",
            "لذلك تختلف الاحتفالات وفترات الصيام والأعياد والممارسات العائلية والطعام اليومي. بعض الأطباق ترتبط بقوة بمجتمعات معينة، بينما تشترك مجتمعات مختلفة في أطباق أخرى داخل لبنان وبلاد الشام.",
            "ومن المهم الاعتراف بهذا التنوع عند الحديث عن التراث اللبناني. فلا توجد تجربة واحدة تمثل كل لبناني، بل توجد مجموعة من التقاليد المتداخلة التي تشكل الصورة الأوسع للبلاد."
          ]
        },
        {
          "heading": "حفظ التراث من خلال الطعام",
          "paragraphs": [
            "ربما يكون أجمل ما في التراث اللبناني أن جزءاً كبيراً منه يستمر من خلال أفعال يومية عادية. شخص يزرع النعناع، عائلة تقطف الزيتون، جدة تعلم حفيدها تشكيل الكبة، أو شخص يحضّر التبولة من دون قياس لأنه اعتاد عليها مئات المرات.",
            "قد لا تبدو هذه اللحظات تاريخية، لكنها تحفظ المعرفة. فهي تربط الأجيال الأصغر بأشخاص وأماكن ربما لا يعرفونها إلا من خلال الحكايات.",
            "ويصبح الطعام نوعاً من الذاكرة الحية. قد تحمل الوصفة ذكرى قرية أو موسم أو قريب أو اجتماع عائلي. وعندما تُحضّر الوصفة من جديد، تنتقل قطعة من تلك الذاكرة إلى المستقبل."
          ]
        },
        {
          "heading": "المطبخ اللبناني في العالم الحديث",
          "paragraphs": [
            "انتشر المطبخ اللبناني بعيداً عن لبنان. وأصبحت المطاعم والمخابز والمطابخ العائلية اللبنانية موجودة في أجزاء كثيرة من العالم، كما تستمر الوصفات في التغير مع استخدام مكونات جديدة وتقنيات حديثة.",
            "ولا يعني التطور بالضرورة فقدان التقليد. يمكن إعداد الطبق في مطبخ عصري مع الحفاظ على المكونات أو النكهات أو المعنى الاجتماعي الذي يربطه بالمطبخ اللبناني.",
            "وبالنسبة للطاهي المنزلي اليوم، يقدم المطبخ اللبناني أيضاً طريقة عملية للطعام اليومي. فالخضروات والأعشاب والبقول والحبوب واللبن وزيت الزيتون والتوابل قادرة على تكوين وجبات مشبعة ولذيذة من دون معدات معقدة أو تحضير مبالغ فيه."
          ]
        },
        {
          "heading": "التراث الذي تقف وراءه المائدة",
          "paragraphs": [
            "لا يمكن فصل تراث لبنان عن طعامه. فالمدن القديمة والجبال وغابات الأرز والوديان الزراعية والمطابخ العائلية والمخابز وأماكن التجمع كلها أجزاء من القصة.",
            "طبق من الحمص يحكي جزءاً صغيراً منها. والتبولة تحكي جزءاً آخر. ورغيف منقوشة أو كوب شاي بالنعناع أو زجاجة زيت زيتون من موسم القطاف أو طبق مجدرة عائلي يمكن أن يربط الطعام بالمكان والذاكرة.",
            "ولعل الطريقة الأجمل لفهم التراث الغذائي ليست التعامل مع الطعام التقليدي على أنه شيء متجمد في الماضي، بل رؤيته كما هو في الحياة: طعام يطبخه الناس ويطوّرونه ويتشاركونه ويعلّمونه لشخص آخر."
          ]
        },
        {
          "heading": "طعم لبنان في Healthy Mezze",
          "paragraphs": [
            "في Healthy Mezze، نرى المطبخ اللبناني جزءاً من تقليد أوسع في شرق المتوسط: طعاماً سخياً وغنياً بالخضروات، يعتمد على الحبوب والبقول، وتنعشه الأعشاب والليمون، وترتبط كثير من أطباقه بفكرة المشاركة.",
            "استكشاف وصفة لبنانية هو مجرد بداية. فخلف المكونات توجد المناظر الطبيعية والتقاليد الزراعية وذكريات العائلة وقرون من التبادل الثقافي.",
            "لذلك عندما تجلس إلى وجبة لبنانية، حاول أن تنظر إلى ما وراء الطبق. فالطعام يحمل قصة، وهذه القصة ما زالت تُكتب."
          ]
        }
      ]
    },

    "relatedRecipes": [
      "labneh-zaatar-olive-oil",
      "classic-hummus",
      "tabbouleh-salad",
      "baked-kibbeh",
      "herb-marinated-olives",
      "lebanese-mujadara",
      "zaatar-pita-chips",
      "authentic-lebanese-mint-tea",
      "authentic-arabic-coffee",
      "fattoush"
    ],

    "sources": [
      {
        "title": "UNESCO — Byblos",
        "url": "https://whc.unesco.org/en/list/295",
        "description": "UNESCO documentation on the archaeological site of Byblos and its long history."
      },
      {
        "title": "UNESCO — Baalbek",
        "url": "https://whc.unesco.org/en/list/294",
        "description": "UNESCO documentation on the ancient monumental complex of Baalbek."
      },
      {
        "title": "UNESCO — Qadisha Valley and the Forest of the Cedars of God",
        "url": "https://whc.unesco.org/en/list/850",
        "description": "UNESCO documentation on the cultural and natural heritage of the Qadisha Valley and cedar forest."
      },
      {
        "title": "UNESCO — Lebanon",
        "url": "https://www.unesco.org/en/countries/lb",
        "description": "UNESCO country information and cultural heritage resources for Lebanon."
      }
    ]
  },
  {
  "slug": "palestine-culture-heritage",
  "category": "culture-heritage",
  "image": "/images/news/palestine-heritage/jerusalem-old-city.webp",
  "imageAlt": {
    "en": "A panoramic view of Jerusalem's Old City from the Mount of Olives",
    "ar": "إطلالة بانورامية على البلدة القديمة في القدس من جبل الزيتون"
  },
  "publishedAt": "2026-10-10",
  "en": {
    "title": "Palestine: A Heritage of Food, Family, Olive Trees and Resilience",
    "excerpt": "From olive harvests and freshly baked bread to embroidered dresses and meals shared around the family table, Palestinian heritage lives in everyday traditions passed from one generation to the next.",
    "sections": [
      {
        "heading": "A Table Filled with Memories",
        "image": "/images/news/palestine-heritage/palestinian-food-culture.webp",
        "imageAlt": "Traditional Palestinian food served for a shared family meal",
        "paragraphs": [
          "To understand Palestinian food, start with an ordinary family table. There might be warm bread in the middle, small bowls of olive oil and za'atar, fresh vegetables, olives and a dish everyone keeps reaching for. The meal does not need to be elaborate to feel generous.",
          "Food carries memories of people and places. A recipe may come from a grandparent, a village, a particular season or a family habit that nobody thinks to write down. That is part of what makes traditional cooking worth preserving: the recipe is only one part of the story."
        ]
      },
      {
        "heading": "Palestine: A Land of Deep Roots",
        "paragraphs": [
          "Palestinian culture has grown across towns, villages, hills, valleys and coastal areas, each with its own landscape and daily rhythms. Agriculture, local markets, family life, crafts and food have all helped shape the traditions people carry with them.",
          "There is no single experience that represents every Palestinian family. Customs vary by region, religion, generation and personal history. That variety is not a weakness in the story; it is an important part of it."
        ]
      },
      {
        "heading": "Jerusalem, Nablus, Hebron and the Old Cities",
        "image": "/images/news/palestine-heritage/bethlehem-old-city.webp",
        "imageAlt": "Historic streets and traditional stone architecture in Bethlehem, Palestine",
        "paragraphs": [
          "Palestinian cities and historic towns have distinctive identities. Jerusalem is known for its layered religious and cultural history, while Nablus, Hebron, Bethlehem, Gaza and other places have their own stories, markets, crafts and food traditions.",
          "Old streets, stone buildings, workshops and market stalls are more than attractive scenery. They are places where people have worked, traded, cooked and met one another. Heritage is not only something preserved behind glass; it is also part of how communities live."
        ]
      },
      {
        "heading": "The Olive Tree: A Symbol of Connection",
        "image": "/images/news/palestine-heritage/palestinian-olive-harvest-new.webp",
        "imageAlt": "Palestinian farmers harvesting olives from an olive tree",
"paragraphs": [
          "Olive trees are deeply connected with Palestinian land and family life. For many families, the harvest is a seasonal event that brings relatives and neighbours together to gather olives, sort them and take them for pressing.",
          "Olive oil appears throughout the kitchen: poured over hummus, used in cooking, mixed with za'atar or served with bread. The trees also carry meaning beyond the kitchen, connecting families to land, memory and the work of earlier generations."
        ]
      },
      {
        "heading": "Family, Neighbours and Community",
        "paragraphs": [
          "In many Palestinian households, preparing a meal is shared work. Someone washes the vegetables, someone kneads the dough, another person sets the table, and a relative arrives with something they have made. Not every household follows the same routine, of course, but food often creates opportunities to spend time together.",
          "Neighbours and extended family can be an important part of celebrations and everyday life. A dish sent next door or an extra place made at the table may seem like a small gesture, but these are the kinds of details through which traditions continue."
        ]
      },
      {
        "heading": "Palestinian Hospitality",
        "image": "/images/news/palestine-heritage/palestinian-market.webp",
        "imageAlt": "A traditional Palestinian market reflecting local food and community life",
        "paragraphs": [
          "Hospitality can begin with something simple: coffee, tea, dates, fruit or a plate of food offered to a visitor. The point is not always to prepare a grand feast. It is to make a guest feel welcome and give them time to settle in.",
          "Arabic coffee and tea are familiar parts of hospitality in many Palestinian homes, although the details differ between families and regions. What matters is the care behind the gesture, whether a visit lasts ten minutes or turns into a long conversation around the table."
        ]
      },
      {
        "heading": "The Tradition of Sharing Food",
        "paragraphs": [
          "Many Palestinian meals are designed to be shared. Bread is used to scoop up dips and sauces, salads sit alongside the main dish, and several people may eat from a large serving platter. The arrangement encourages conversation and makes the meal feel communal.",
          "Sharing does not mean every family eats in exactly the same way. Modern schedules, different households and life abroad all influence how people cook and gather. Still, the idea of making enough to share remains a familiar thread in Palestinian food culture."
        ]
      },
      {
        "heading": "Musakhan: Olive Oil, Sumac and Warm Bread",
        "image": "/images/news/palestine-heritage/musakhan.webp",
        "imageAlt": "Traditional Palestinian musakhan with bread, chicken and onions",
        "paragraphs": [
          "Musakhan is one of the best-known dishes associated with Palestinian cooking. It is commonly made with chicken, onions, sumac and generous olive oil, served over taboon-style bread that absorbs the flavourful juices.",
          "The ingredients are straightforward, but the result is memorable: sweet, softened onions, the tang of sumac and the richness of olive oil against warm bread. Musakhan is often served for family gatherings, and its ingredients reflect the close relationship between Palestinian cooking and local produce."
        ]
      },
      {
        "heading": "Maqluba: The Dish Turned Upside Down",
        "paragraphs": [
          "Maqluba means 'upside down', and the name describes the moment the pot is turned over onto a serving platter. Rice, vegetables and meat are layered and cooked together, then revealed as a single dish when the pot is lifted.",
          "That final turn can be a little dramatic, especially when everyone is waiting to see whether the layers hold. Recipes vary from household to household, with different vegetables, spices and proportions. Like many home-cooked dishes, maqluba is as much about a family's way of making it as it is about a fixed recipe."
        ]
      },
      {
        "heading": "Maftoul, Lentils and Everyday Grains",
        "paragraphs": [
          "Not every important dish is prepared for a celebration. Grains, lentils and pulses have long been useful ingredients for filling, practical meals. Maftoul, often described as Palestinian couscous, is made from rolled grains and appears in dishes with chickpeas, onions, broth or seasonal ingredients.",
          "Lentils and rice also make satisfying everyday food. These ingredients are affordable, adaptable and easy to combine with herbs, vegetables and olive oil. They show another side of culinary heritage: the everyday cooking that feeds a household week after week."
        ]
      },
      {
        "heading": "Za'atar, Thyme and the Palestinian Pantry",
        "paragraphs": [
          "Za'atar is a familiar presence in Palestinian kitchens. The word can refer to a local herb or to a seasoning blend, often combining thyme or related herbs with sesame seeds, sumac and salt. Recipes and proportions differ, so there is no single mixture used by everyone.",
          "Sprinkled over bread with olive oil, added to a simple breakfast or served alongside other small dishes, za'atar brings an earthy, aromatic flavour. Olive oil, legumes, grains, seasonal vegetables and preserved foods also help form the practical foundation of many home kitchens."
        ]
      },
      {
        "heading": "Taboon Bread and Traditional Baking",
        "paragraphs": [
          "Bread is central to many Palestinian meals, and taboon bread is especially associated with traditional baking. Historically, taboon ovens have been used to bake flatbreads with a distinctive texture, although the equipment and methods found today vary.",
          "Bread can accompany dips, wrap fillings, collect the juices from a main dish or become part of the dish itself. Freshly baked bread has a way of drawing people into the kitchen before the meal is even ready."
        ]
      },
      {
        "heading": "Seasonal Produce and the Agricultural Calendar",
        "image": "/images/news/palestine-heritage/palestinian-seasonal-produce.webp",
        "imageAlt": "Fresh seasonal produce displayed at a Palestinian vegetable market",
"paragraphs": [
          "Seasonality shapes Palestinian cooking. Olives, citrus, grapes, figs, almonds and other fruits and vegetables appear at different times of year, depending on the region and growing conditions. Markets and home kitchens reflect what is available locally.",
          "Preserving food is another way to make the most of a harvest. Families may pickle vegetables, cure olives, dry herbs or prepare ingredients for later use. These practices are practical, but they also keep familiar flavours available beyond their natural season."
        ]
      },
      {
        "heading": "Embroidery, Tatreez and Cultural Identity",
        "image": "/images/news/palestine-heritage/palestinian-tatreez.webp",
        "imageAlt": "Traditional Palestinian tatreez embroidery and colorful stitching",
        "paragraphs": [
          "Palestinian tatreez, or traditional embroidery, is a skilled craft with deep cultural significance. Patterns, colours and stitching styles can be associated with particular regions and communities, though designs also change over time and through individual creativity.",
          "Embroidered dresses and other textiles can carry family knowledge as well as artistic expression. The craft has been passed between generations, and it continues today through makers who preserve traditional techniques while creating new work."
        ]
      },
      {
        "heading": "Weddings, Music and Dabke",
        "image": "/images/news/palestine-heritage/palestinian-thobe.webp",
        "imageAlt": "Traditional Palestinian thobe with embroidered details",
        "paragraphs": [
          "Celebrations in Palestinian communities can bring together food, music, dancing and relatives from near and far. Dabke, a group line dance found in several parts of the Levant, is a familiar feature at many Palestinian weddings and gatherings.",
          "The steps and music can vary, and celebrations are not identical across every community. Still, the shared rhythm of a dance, the sound of people singing and the preparation of a large meal can turn an occasion into a memory people talk about for years."
        ]
      },
      {
        "heading": "Ramadan, Eid and Shared Meals",
        "paragraphs": [
          "For Muslim Palestinian families, Ramadan changes the rhythm of the day and brings particular importance to iftar, the meal that breaks the fast, and suhoor before dawn. Dishes differ between households, but soups, breads, rice dishes, dates and sweets may all find a place on the table.",
          "Eid brings its own visits, hospitality and celebratory foods. Palestinian Christians and other communities have different religious calendars and customs, and family traditions vary widely. The important point is to recognise this diversity rather than assume that one set of practices represents everyone."
        ]
      },
      {
        "heading": "Regional Food Traditions Across Palestine",
        "paragraphs": [
          "Palestinian food is not one unchanging menu. Local ingredients, access to the sea, farming conditions, town and village life, and family histories all influence what people cook. Dishes and techniques can differ between the north and south, the coast and inland areas, and individual households.",
          "Migration has added more layers. Families who move to another country may adapt a recipe to the ingredients they can find, while keeping the flavours and habits that make it recognisable. A living cuisine changes without losing every connection to its roots."
        ]
      },
      {
        "heading": "Preserving Heritage Across Generations",
        "image": "/images/news/palestine-heritage/palestinian-embroidery-detail.webp",
        "imageAlt": "Detailed traditional Palestinian embroidery representing inherited craftsmanship",
        "paragraphs": [
          "A tradition survives when someone keeps practising it. It may be a parent showing a child how to season a dish, a relative teaching embroidery, or an older family member explaining when to add an ingredient without measuring it.",
          "Writing recipes down, recording family stories and teaching traditional crafts can help preserve knowledge that might otherwise remain unspoken. These efforts matter because cultural heritage is not only a record of the past; it is something people continue to make and share."
        ]
      },
      {
        "heading": "Palestinian Cuisine Around the World",
        "paragraphs": [
          "Palestinian communities around the world have carried their food traditions with them. Family kitchens and restaurants keep dishes familiar to one generation alive for the next, while new ingredients and circumstances sometimes lead to different versions.",
          "Eating Palestinian food abroad can be a way to reconnect with family and place, or a chance for someone new to learn about a cuisine through its ingredients and stories. It is worth naming dishes accurately and recognising the communities whose knowledge has kept them alive."
        ]
      },
      {
        "heading": "A Taste of Palestine at Healthy Mezze",
        "paragraphs": [
          "At Healthy Mezze, we want to explore the food of the Eastern Mediterranean with care for the people and places behind it. Palestinian cooking deserves to be understood on its own terms, not folded into a generic description of regional food.",
          "Start with the ingredients: olive oil, herbs, legumes, grains, fresh vegetables and warm bread. Then look beyond the plate to the seasonal work, family knowledge and local traditions that give these foods meaning. A recipe can be a good starting point, but the story around it makes the experience richer."
        ]
      }
    ]
  },
  "ar": {
    "title": "فلسطين: تراث من الطعام والعائلة والزيتون والصمود",
    "excerpt": "من موسم قطف الزيتون والخبز الطازج إلى التطريز والوجبات العائلية، يعيش التراث الفلسطيني في تفاصيل يومية تنتقل من جيل إلى آخر.",
    "sections": [
      {
        "heading": "مائدة مليئة بالذكريات",
        "paragraphs": [
          "لفهم الطعام الفلسطيني، يمكن أن نبدأ بمائدة عائلية عادية. قد نجد في وسطها خبزاً دافئاً، وأطباقاً صغيرة من زيت الزيتون والزعتر، وخضروات طازجة وزيتوناً وطبقاً يعود إليه الجميع مرة بعد أخرى. لا تحتاج الوجبة إلى تكلف حتى تعبّر عن الكرم.",
          "يحمل الطعام ذكريات الأشخاص والأماكن. قد تأتي الوصفة من أحد الأجداد، أو من قرية، أو من موسم معين، أو من عادة عائلية لم يفكر أحد في تدوينها. ولهذا يستحق الطبخ التقليدي أن نحافظ عليه؛ فالوصفة ليست سوى جزء من الحكاية."
        ]
      },
      {
        "heading": "فلسطين: أرض ذات جذور عميقة",
        "paragraphs": [
          "تشكّلت الثقافة الفلسطينية عبر المدن والقرى والتلال والوديان والمناطق الساحلية، ولكل مكان طبيعته وإيقاع حياته. وأسهمت الزراعة والأسواق والحياة العائلية والحرف والطعام في تكوين التقاليد التي يحملها الناس معهم.",
          "لا توجد تجربة واحدة تمثل كل العائلات الفلسطينية. فالعادات تختلف باختلاف المنطقة والدين والجيل والتجربة الشخصية. وهذا التنوع ليس نقصاً في الحكاية، بل جزء مهم منها."
        ]
      },
      {
        "heading": "القدس ونابلس والخليل والمدن القديمة",
        "paragraphs": [
          "للمدن والبلدات التاريخية الفلسطينية هويات مميزة. فالقدس معروفة بتاريخها الديني والثقافي المتعدد الطبقات، بينما تحمل نابلس والخليل وبيت لحم وغزة وغيرها حكاياتها الخاصة وأسواقها وحرفها وتقاليدها الغذائية.",
          "الأزقة القديمة والمباني الحجرية والورش وأكشاك الأسواق ليست مجرد مناظر جميلة؛ إنها أماكن عمل الناس وتبادلهم التجاري وطبخهم ولقائهم. فالتراث ليس شيئاً محفوظاً خلف الزجاج فحسب، بل جزء من حياة المجتمعات."
        ]
      },
      {
        "heading": "شجرة الزيتون: صلة بالأرض والذاكرة",
        "image": "/images/news/palestine-heritage/palestinian-olive-harvest-new.webp",
        "imageAlt": "مزارعون فلسطينيون يقطفون الزيتون من الأشجار",
"paragraphs": [
          "ترتبط أشجار الزيتون ارتباطاً عميقاً بالأرض والحياة العائلية في فلسطين. وبالنسبة إلى كثير من العائلات، يشكّل موسم القطاف مناسبة يجتمع فيها الأقارب والجيران لجمع الزيتون وفرزه ونقله إلى المعصرة.",
          "يحضر زيت الزيتون في أطباق كثيرة؛ يُسكب فوق الحمص، ويُستخدم في الطهي، ويُمزج بالزعتر أو يُقدّم مع الخبز. وتحمل الأشجار أيضاً معنى يتجاوز المطبخ، إذ تربط العائلات بالأرض والذاكرة وعمل الأجيال السابقة."
        ]
      },
      {
        "heading": "العائلة والجيران والمجتمع",
        "paragraphs": [
          "في بيوت فلسطينية كثيرة، يتوزع تحضير الطعام بين أفراد العائلة. شخص يغسل الخضروات، وآخر يعجن، وثالث يرتب المائدة، ثم يصل قريب ومعه طبق أعدّه. لا تسير كل البيوت بالطريقة نفسها، لكن الطعام كثيراً ما يفتح المجال لقضاء الوقت معاً.",
          "وقد يكون للأقارب والجيران دور مهم في المناسبات والحياة اليومية. إرسال طبق إلى الجيران أو إعداد مكان إضافي على المائدة تصرفان بسيطان، لكن مثل هذه التفاصيل تساعد التقاليد على الاستمرار."
        ]
      },
      {
        "heading": "الضيافة الفلسطينية",
        "paragraphs": [
          "قد تبدأ الضيافة بشيء بسيط: قهوة أو شاي أو تمر أو فاكهة أو طبق يُقدّم للضيف. ليس المطلوب دائماً إعداد وليمة كبيرة، بل أن يشعر الزائر بالترحيب وأن يجد وقتاً للراحة والحديث.",
          "تُعد القهوة العربية والشاي من مظاهر الضيافة المعروفة في بيوت فلسطينية كثيرة، مع اختلاف التفاصيل بين العائلات والمناطق. والأهم هو الاهتمام الذي تحمله هذه اللفتة، سواء كانت الزيارة قصيرة أم تحولت إلى جلسة طويلة حول المائدة."
        ]
      },
      {
        "heading": "تقليد مشاركة الطعام",
        "paragraphs": [
          "تُحضّر أطباق فلسطينية كثيرة لتُشارك بين أفراد العائلة والضيوف. يوضع الخبز إلى جانب المقبلات والصلصات، وتُقدّم السلطات مع الطبق الرئيسي، وقد يتناول عدة أشخاص الطعام من طبق تقديم كبير. وتمنح هذه الطريقة الوجبة مساحة للحوار والمشاركة.",
          "ولا يعني ذلك أن كل العائلات تأكل بالطريقة نفسها. فمواعيد العمل والحياة الحديثة والعيش في بلدان أخرى كلها تؤثر في أساليب الطبخ والاجتماع. ومع ذلك، تبقى فكرة إعداد ما يكفي للمشاركة حاضرة في ثقافة الطعام الفلسطينية."
        ]
      },
      {
        "heading": "المسخّن: زيت الزيتون والسماق والخبز الدافئ",
        "image": "/images/news/palestine-heritage/musakhan.webp",
        "imageAlt": "طبق المسخن الفلسطيني التقليدي مع الخبز والدجاج والبصل",
        "paragraphs": [
          "المسخّن من أشهر الأطباق المرتبطة بالمطبخ الفلسطيني. ويُحضّر عادة بالدجاج والبصل والسماق وكمية سخية من زيت الزيتون، ثم يُقدّم فوق خبز الطابون الذي يتشرّب نكهة المكونات.",
          "مكوناته بسيطة، لكن مذاقه مميز: بصل طري يميل إلى الحلاوة، وحموضة السماق، وغنى زيت الزيتون مع الخبز الدافئ. ويُقدّم المسخّن كثيراً في التجمعات العائلية، كما تعكس مكوناته الصلة الوثيقة بين المطبخ الفلسطيني والمنتجات المحلية."
        ]
      },
      {
        "heading": "المقلوبة: الطبق الذي يُقلب رأساً على عقب",
        "paragraphs": [
          "يعني اسم المقلوبة أنها تُقلب عند التقديم. تُرتّب طبقات من الأرز والخضروات واللحم في القدر وتُطهى معاً، ثم يُقلب القدر فوق طبق التقديم وتُرفع عنه لتظهر الطبقات.",
          "قد تكون لحظة قلب القدر مثيرة بعض الشيء، خصوصاً عندما ينتظر الجميع رؤية النتيجة. وتختلف الوصفات من بيت إلى آخر بحسب الخضروات والتوابل والنسب المستخدمة. وكثيراً ما ترتبط هوية الطبق بالطريقة التي تعدّه بها العائلة، لا بوصفة واحدة ثابتة."
        ]
      },
      {
        "heading": "المفتول والعدس والحبوب اليومية",
        "paragraphs": [
          "ليست كل الأطباق المهمة مخصصة للمناسبات. فالحبوب والعدس والبقول مكونات عملية تُستخدم في إعداد وجبات مشبعة. والمفتول، الذي يُوصف أحياناً بأنه كسكس فلسطيني، يُحضّر من حبيبات ملفوفة ويُقدّم مع الحمص والبصل والمرق أو مكونات موسمية.",
          "كما يشكل العدس والأرز وجبة يومية مناسبة. فهذه المكونات عملية ويمكن جمعها مع الأعشاب والخضروات وزيت الزيتون. وهي تذكّرنا بجانب آخر من التراث الغذائي: الطعام البسيط الذي يطعم العائلة أسبوعاً بعد آخر."
        ]
      },
      {
        "heading": "الزعتر والأعشاب ومكونات المطبخ الفلسطيني",
        "paragraphs": [
          "للزعتر مكان مألوف في المطابخ الفلسطينية. وقد تشير الكلمة إلى عشبة محلية أو إلى خليط من التوابل، غالباً ما يجمع الزعتر أو أعشاباً قريبة منه مع السمسم والسماق والملح. وتختلف الخلطات ونسب مكوناتها من بيت إلى آخر.",
          "يُرش الزعتر على الخبز مع زيت الزيتون، ويُقدّم في وجبات الفطور أو إلى جانب أطباق أخرى، فيمنحها نكهة عشبية غنية. كما يشكل زيت الزيتون والبقول والحبوب والخضروات الموسمية والأطعمة المحفوظة جزءاً عملياً من كثير من المطابخ المنزلية."
        ]
      },
      {
        "heading": "خبز الطابون والخبز التقليدي",
        "paragraphs": [
          "يشكل الخبز جزءاً أساسياً من موائد كثيرة في فلسطين، ويرتبط خبز الطابون خصوصاً بأساليب الخَبز التقليدية. وقد استُخدمت أفران الطابون تاريخياً لإعداد الخبز المسطح ذي القوام المميز، مع اختلاف المعدات والطرق المستخدمة اليوم.",
          "يمكن تناول الخبز مع المقبلات، أو لف الحشوات به، أو استخدامه لالتقاط الصلصات ومرق الطعام، بل قد يصبح جزءاً من الطبق نفسه. وللخبز الطازج قدرة خاصة على جذب الناس إلى المطبخ قبل أن تجهز الوجبة."
        ]
      },
      {
        "heading": "المواسم والمنتجات الزراعية",
        "image": "/images/news/palestine-heritage/palestinian-seasonal-produce.webp",
        "imageAlt": "منتجات موسمية طازجة معروضة في سوق خضار فلسطيني",
        "paragraphs": [
          "تؤثر المواسم في المطبخ الفلسطيني. فالزيتون والحمضيات والعنب والتين واللوز وغيرها من الفواكه والخضروات تظهر في أوقات مختلفة من السنة بحسب المنطقة وظروف الزراعة. وتعكس الأسواق والمطابخ المنزلية ما يتوفر محلياً.",
          "ويُعد حفظ الطعام طريقة أخرى للاستفادة من المحصول. فقد تُخلّل الخضروات، أو يُحفظ الزيتون، أو تُجفف الأعشاب، أو تُجهز بعض المكونات لاستخدامها لاحقاً. لهذه الممارسات فائدة عملية، كما أنها تساعد على بقاء النكهات المألوفة متاحة بعد انتهاء الموسم."
        ]
      },
      {
        "heading": "التطريز والثوب الفلسطيني والهوية الثقافية",
        "paragraphs": [
          "يُعد التطريز الفلسطيني، أو التطريز التقليدي المعروف باسم «تطريز»، حرفة ماهرة ذات أهمية ثقافية عميقة. وقد ترتبط النقوش والألوان وأساليب الغرز بمناطق ومجتمعات معينة، مع استمرار التصاميم في التطور بفعل الإبداع الفردي والتغيرات عبر الزمن.",
          "تحمل الأثواب المطرزة والمنسوجات الأخرى معرفة عائلية إلى جانب قيمتها الفنية. وقد انتقلت هذه الحرفة بين الأجيال، وما زالت مستمرة على أيدي حرفيين وحرفيات يحافظون على التقنيات التقليدية ويبتكرون أعمالاً جديدة."
        ]
      },
      {
        "heading": "الأعراس والموسيقى والدبكة",
        "image": "/images/news/palestine-heritage/palestinian-thobe.webp",
        "imageAlt": "ثوب فلسطيني تقليدي بتطريز تراثي",
        "paragraphs": [
          "تجمع المناسبات في المجتمعات الفلسطينية الطعام والموسيقى والرقص والأقارب القادمين من أماكن مختلفة. وتُعد الدبكة، وهي رقصة جماعية معروفة في مناطق من بلاد الشام، جزءاً مألوفاً من كثير من الأعراس والتجمعات الفلسطينية.",
          "تختلف الخطوات والموسيقى من مكان إلى آخر، كما تختلف الاحتفالات بين المجتمعات. لكن إيقاع الرقصة وأصوات الغناء وإعداد وجبة كبيرة قد تتحول إلى ذكرى يتحدث عنها الناس لسنوات."
        ]
      },
      {
        "heading": "رمضان والعيد والوجبات المشتركة",
        "paragraphs": [
          "بالنسبة إلى العائلات الفلسطينية المسلمة، يغيّر رمضان إيقاع اليوم ويمنح وجبة الإفطار، التي تنهي الصيام، والسحور قبل الفجر أهمية خاصة. وتختلف الأطباق من بيت إلى آخر، وقد تشمل الشوربات والخبز وأطباق الأرز والتمر والحلويات.",
          "وللعيد زياراته وضيافته وأطعمتُه الاحتفالية. أما العائلات الفلسطينية المسيحية وغيرها من المجتمعات فلها تقاويم دينية وعادات مختلفة، كما تتنوع التقاليد العائلية على نطاق واسع. ومن المهم الاعتراف بهذا التنوع بدلاً من افتراض أن ممارسة واحدة تمثل الجميع."
        ]
      },
      {
        "heading": "تنوع تقاليد الطعام بين المناطق الفلسطينية",
        "paragraphs": [
          "لا يتكون المطبخ الفلسطيني من قائمة واحدة ثابتة. فالمكونات المحلية والقرب من البحر والظروف الزراعية والحياة في المدن والقرى وتاريخ العائلة كلها تؤثر في ما يُطهى. وقد تختلف الأطباق وأساليب إعدادها بين الشمال والجنوب والساحل والمناطق الداخلية، وحتى بين بيت وآخر.",
          "وأضافت الهجرة طبقات جديدة إلى هذه التقاليد. فقد تعدّل العائلات التي تنتقل إلى بلد آخر الوصفة بحسب المكونات المتاحة، مع الاحتفاظ بالنكهات والعادات التي تجعلها مألوفة. يتغير المطبخ الحي من دون أن يفقد بالضرورة صلته بجذوره."
        ]
      },
      {
        "heading": "حفظ التراث ونقله بين الأجيال",
        "paragraphs": [
          "تستمر التقاليد عندما يواصل الناس ممارستها. فقد يكون ذلك أباً أو أماً يعلّمان طفلاً طريقة تتبيل طبق، أو قريباً يشرح أسلوب التطريز، أو فرداً أكبر سناً يوضح متى تُضاف إحدى المكونات من دون الحاجة إلى قياسها.",
          "يمكن أن يساعد تدوين الوصفات وتسجيل الحكايات العائلية وتعليم الحرف التقليدية في حفظ معرفة قد تبقى شفوية لولا ذلك. فهذه الجهود مهمة لأن التراث ليس سجلاً للماضي فقط، بل شيء يواصل الناس صنعه ومشاركته."
        ]
      },
      {
        "heading": "المطبخ الفلسطيني حول العالم",
        "paragraphs": [
          "حملت المجتمعات الفلسطينية حول العالم تقاليدها الغذائية معها. وتحافظ المطابخ العائلية والمطاعم على أطباق مألوفة للأجيال الجديدة، بينما تؤدي المكونات والظروف المختلفة أحياناً إلى ظهور نسخ جديدة من الوصفات.",
          "قد يكون تناول الطعام الفلسطيني خارج الوطن وسيلة للاتصال بالعائلة والمكان، وقد يكون فرصة لشخص آخر للتعرف إلى هذا المطبخ من خلال مكوناته وحكاياته. ومن المهم تسمية الأطباق بدقة والاعتراف بالمجتمعات التي حافظت على هذه المعارف."
        ]
      },
      {
        "heading": "طعم فلسطين في Healthy Mezze",
        "paragraphs": [
          "في Healthy Mezze، نريد استكشاف مطابخ شرق المتوسط مع الاهتمام بالأشخاص والأماكن التي تقف وراءها. ويستحق المطبخ الفلسطيني أن يُفهم من خلال خصوصيته، لا أن يُختزل في وصف عام للطعام الإقليمي.",
          "ابدأ بالمكونات: زيت الزيتون والأعشاب والبقول والحبوب والخضروات الطازجة والخبز الدافئ. ثم انظر إلى ما وراء الطبق، إلى العمل الموسمي والمعرفة العائلية والتقاليد المحلية التي تمنح الطعام معناه. قد تكون الوصفة بداية جيدة، لكن الحكاية المحيطة بها تجعل التجربة أعمق."
        ]
      }
    ]
  },
  "relatedRecipes": [
    "classic-hummus",
    "chicken-shawarma",
    "chicken-pita-wrap"
  ],
  "sources": [
    {
      "title": "UNESCO — Arts of embroidery in Palestine, practices, skills and knowledge",
      "url": "https://ich.unesco.org/en/RL/arts-of-embroidery-in-palestine-practices-skills-and-knowledge-01722",
      "description": "UNESCO documentation on Palestinian embroidery traditions."
    },
    {
      "title": "Wikimedia Commons — Jerusalem panorama from Mount of Olives",
      "url": "https://commons.wikimedia.org/wiki/File:Jerusalem_panorama_from_Mount_of_Olives.jpg",
      "description": "Hero photograph by Daniel Case, licensed under CC BY-SA 3.0."
    }
  ]
},

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
  }
];
