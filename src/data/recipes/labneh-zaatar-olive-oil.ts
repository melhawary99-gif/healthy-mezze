import { Recipe } from "@/types/recipe";

export const labnehZaatarOliveOil: Recipe = {
  id: 44,

  title: "Labneh with Za'atar & Olive Oil",

  slug: "labneh-zaatar-olive-oil",

  description:
    "Creamy Lebanese labneh topped with fragrant za'atar, extra virgin olive oil, and fresh herbs, served with crisp vegetables, olives, and warm pita for a simple traditional breakfast or mezze spread.",

  longDescription:
    "Labneh with za'atar and olive oil is a classic Lebanese table dish built around thick strained yogurt, aromatic za'atar, and good extra virgin olive oil. It is commonly enjoyed as part of breakfast or a mezze spread alongside warm pita, cucumbers, tomatoes, olives, and fresh herbs. If prepared labneh is unavailable, full-fat plain yogurt can be strained at home until thick and spoonable. The key to a good result is using sufficiently thick labneh, keeping excess liquid away from the serving plate, and adding the olive oil and za'atar just before serving so their flavors remain fresh and distinct.",

  image: "/images/recipes/labneh-zaatar-olive-oil.webp",

  imageAlt:
    "Lebanese labneh spread in a shallow serving plate with za'atar, extra virgin olive oil, fresh mint and parsley, cucumber, tomatoes, olives, and warm pita bread.",

  cuisine: "Lebanese",

  category: "breakfast",

  vegetarian: true,

  vegan: false,

  prepTime: "10 mins",

  cookTime: "0 mins",

  totalTime: "10 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
    {
      amount: 2,
      unit: "cups",
      name: "labneh",
      note:
        "Use thick, cold labneh. If unavailable, make homemade labneh by straining full-fat plain yogurt; see the preparation method below."
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "extra virgin olive oil",
      note:
        "Use a good-quality olive oil because it is added raw and its flavor will be noticeable."
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "za'atar seasoning",
      note:
        "Choose a fragrant Lebanese-style za'atar blend; stir the blend before measuring if its ingredients have separated."
    },
    {
      amount: 1,
      unit: "tbsp",
      name: "chopped fresh mint",
      note: "Finely chop just before serving for the freshest aroma."
    },
    {
      amount: 1,
      unit: "tbsp",
      name: "chopped fresh parsley",
      note: "Pat dry before chopping so excess water does not thin the labneh."
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "sumac",
      note: "Optional; use for a sharper, pleasantly tangy finish."
    },
    {
      amount: 1,
      unit: "",
      name: "fresh cucumber, sliced",
      note: "Serve cold and dry so it does not release excess water onto the labneh."
    },
    {
      amount: 1,
      unit: "",
      name: "cherry tomatoes",
      note: "Halve larger tomatoes if needed and drain away excess juice."
    },
    {
      amount: 1,
      unit: "",
      name: "mixed olives",
      note: "Drain well before serving."
    },
    {
      amount: 1,
      unit: "",
      name: "warm whole wheat pita bread",
      note: "Warm briefly just before serving so it remains soft rather than dry."
    }
  ],

  instructions: [
    "If you are using store-bought labneh, remove it from the refrigerator just before assembling. If labneh is unavailable, make it at home by mixing 4 cups of full-fat plain yogurt with about 1 teaspoon of salt, placing it in a clean cheesecloth-lined strainer over a bowl, covering it, and refrigerating for 12–24 hours until roughly 2 cups of thick labneh remain. The longer it strains, the thicker it becomes.",
    "For homemade labneh, check the texture before using: it should be thick enough to hold soft spoon marks and should not pour like ordinary yogurt. If it is still loose, strain it longer. Keep the collected whey refrigerated if you want to use it in another recipe.",
    "Place the cold labneh on a wide shallow serving plate or bowl. Spread it outward with the back of a spoon, leaving enough thickness that the labneh holds its shape rather than becoming a thin layer.",
    "Use the back of the spoon to make gentle swirls or a shallow well across the surface. This creates places for the olive oil and za'atar to settle without flooding the plate.",
    "Drizzle the extra virgin olive oil evenly over the labneh, concentrating a little in the shallow grooves. Do not add so much oil that the labneh becomes difficult to scoop.",
    "Sprinkle the za'atar evenly over the olive oil and labneh. If your za'atar is strongly salted, start with less and add more at the table rather than making the entire dish too salty.",
    "Scatter the fresh mint and parsley over the top. Add the optional sumac if you want a brighter, more tangy flavor.",
    "Arrange the cucumber, cherry tomatoes, and drained olives around the labneh rather than directly on top. Keeping the watery vegetables around the edge helps the labneh stay thick.",
    "Warm the pita shortly before serving. It should be flexible and soft, not hard or toasted, so it can be torn into pieces and used to scoop the labneh.",
    "Serve immediately for the best contrast between cool creamy labneh, fragrant za'atar, fruity olive oil, and fresh vegetables."
  ],

  nutrition: {
    calories: 250,
    protein: "13 g",
    carbs: "15 g",
    fat: "16 g",
    fiber: "3 g",
    sugar: "5 g",
    sodium: "370 mg"
  },

  healthBenefits: [
    "Provides protein from strained yogurt",
    "Provides calcium from cultured dairy",
    "Contains live cultures when made with yogurt containing active cultures",
    "Extra virgin olive oil provides predominantly monounsaturated fat",
    "Fresh herbs and vegetables contribute vitamins and antioxidant compounds",
    "Pairing labneh with vegetables and whole wheat pita creates a balanced, satisfying meal",
    "Naturally vegetarian and suitable for a Mediterranean-style eating pattern"
  ],

  keywords: [
    "Labneh",
    "Lebanese Labneh",
    "Labneh with Za'atar",
    "Lebanese Breakfast",
    "Lebanese Mezze",
    "Za'atar",
    "Olive Oil",
    "Mediterranean Breakfast",
    "Homemade Labneh"
  ],

  tags: [
    "breakfast",
    "Lebanese",
    "Mediterranean",
    "labneh",
    "zaatar",
    "olive oil",
    "vegetarian",
    "high protein",
    "healthy",
    "mezze"
  ],

  featured: true
};
