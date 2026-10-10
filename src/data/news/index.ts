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
  }
];
