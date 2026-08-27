import { Recipe } from "@/types/recipe";

export const healthyOmAli: Recipe = {
  id: 74,

  title: "Healthy Om Ali",

  slug: "healthy-om-ali",

  description:
    "A lighter Egyptian Om Ali made with whole wheat puff pastry, low-fat milk, dates, raisins, almonds, pistachios, walnuts, and warm aromatic spices.",

  longDescription:
    "Om Ali is one of Egypt's best-known traditional desserts: crisp pastry is layered with nuts and dried fruit, soaked with warm sweetened milk, and baked until bubbling, fragrant, and golden on top. This lighter version keeps the comforting character of the classic dessert while using whole wheat puff pastry, low-fat milk, naturally sweet dates, raisins, and a modest amount of honey. Almonds, pistachios, walnuts, cinnamon, cardamom, and vanilla provide the rich aroma and texture that make Om Ali especially satisfying.",

  image: "/images/recipes/healthy-om-ali.webp",

  imageAlt:
    "Healthy Egyptian Om Ali baked until golden with whole wheat pastry, pistachios, almonds, raisins, dates, and cinnamon.",

  cuisine: "Egyptian",

  category: "desserts",

  vegetarian: true,

  prepTime: "20 mins",

  cookTime: "30 mins",

  totalTime: "50 mins",

  servings: 8,

  difficulty: "Easy",

  ingredients: [
    {
      amount: 5,
      unit: "sheets",
      name: "whole wheat puff pastry",
      note: "Bake according to the package directions until fully golden and crisp, then break into bite-sized pieces.",
    },
    {
      amount: 4,
      unit: "cups",
      name: "low-fat milk",
      note: "Warm gently; do not bring to a rolling boil.",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "honey",
      note: "Provides a modest amount of added sweetness alongside the dates and raisins.",
    },
    {
      amount: 5,
      unit: "Medjool",
      name: "dates",
      note: "Remove the pits and chop into small pieces so they distribute evenly through the pastry.",
    },
    {
      amount: 0.25,
      unit: "cup",
      name: "raisins",
      note: "Scatter evenly through the pastry layers.",
    },
    {
      amount: 0.25,
      unit: "cup",
      name: "chopped almonds",
      note: "Use roughly chopped pieces for noticeable crunch.",
    },
    {
      amount: 0.25,
      unit: "cup",
      name: "chopped pistachios",
      note: "Reserve a small amount for an optional finishing garnish if desired.",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "chopped walnuts",
      note: "Chop into small pieces so they distribute evenly.",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "vanilla extract",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "ground cinnamon",
      note: "Adds warm spice to the milk mixture and final dessert.",
    },
    {
      amount: 0.25,
      unit: "tsp",
      name: "ground cardamom",
      note: "Use finely ground cardamom for an even distribution of its aromatic flavor.",
    },
    {
      amount: 1,
      unit: "tbsp",
      name: "unsweetened shredded coconut",
      note: "Optional. Sprinkle over the top before baking.",
    },
  ],

  instructions: [
    "Preheat the oven to 375°F (190°C). Have a medium baking dish ready so the pastry, fruit, nuts, and milk can be assembled without delay.",
    "Bake the 5 sheets of whole wheat puff pastry according to the package directions until fully puffed and golden. Allow the pastry to cool enough to handle safely.",
    "Break the baked pastry into bite-sized pieces. Spread the pieces evenly across the bottom of the baking dish rather than compressing them tightly; loose pieces allow the warm milk to penetrate throughout the dessert.",
    "Remove the pits from the 5 Medjool dates and chop them into small pieces. Scatter the dates, 1/4 cup raisins, 1/4 cup chopped almonds, 1/4 cup chopped pistachios, and 2 tablespoons chopped walnuts evenly over the pastry.",
    "Pour the 4 cups low-fat milk into a saucepan and warm over medium-low to medium heat. Heat until hot and lightly steaming, but do not allow it to reach a rolling boil.",
    "Stir the 2 tablespoons honey, 1 teaspoon vanilla extract, 1 teaspoon ground cinnamon, and 1/4 teaspoon ground cardamom into the warm milk. Stir until the honey is completely dissolved and the mixture is evenly flavored.",
    "Pour the warm spiced milk slowly and evenly over the pastry, fruit, and nuts. Move around the dish as you pour so the milk reaches as much of the pastry as possible.",
    "Let the assembled dessert rest for 10 minutes. This allows the crisp pastry to absorb some of the warm milk while retaining some texture instead of becoming completely soft.",
    "If using the optional 1 tablespoon unsweetened shredded coconut, sprinkle it evenly over the surface.",
    "Bake at 375°F (190°C) for approximately 25–30 minutes, until the milk is bubbling gently around the edges and the top is visibly golden and lightly crisp.",
    "Remove from the oven and allow the Om Ali to rest for several minutes before serving. The center will be very hot immediately after baking and will become slightly more cohesive as it rests.",
    "Serve warm. Add a small amount of extra chopped pistachios on top if desired.",
  ],

  nutrition: {
    calories: 285,
    protein: "9 g",
    carbs: "36 g",
    fat: "11 g",
    fiber: "4 g",
    sugar: "15 g",
    sodium: "170 mg",
  },

  healthBenefits: [
    "Uses low-fat milk as a source of calcium and protein.",
    "Whole wheat pastry can provide more fiber than conventional refined pastry.",
    "Dates and raisins provide naturally occurring sweetness along with fiber and minerals.",
    "Almonds, pistachios, and walnuts provide unsaturated fats and plant-based nutrients.",
    "Uses a modest amount of honey rather than relying entirely on refined added sugar.",
    "The dessert contains fruit, nuts, and dairy while remaining vegetarian.",
    "A lighter alternative to richer traditional Om Ali preparations that may contain more cream, butter, or added sugar.",
  ],

  keywords: [
    "Healthy Om Ali",
    "Om Ali Recipe",
    "Egyptian Bread Pudding",
    "Healthy Egyptian Dessert",
    "Egyptian Dessert",
    "Traditional Om Ali",
    "Middle Eastern Dessert",
    "Mediterranean Dessert",
  ],

  tags: [
    "dessert",
    "Egyptian",
    "Om Ali",
    "healthy",
    "whole wheat",
    "low-fat",
    "dates",
    "nuts",
    "Mediterranean",
    "traditional",
    "vegetarian",
  ],

  featured: true,
};
