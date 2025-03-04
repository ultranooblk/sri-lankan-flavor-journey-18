export interface Recipe {
  id: string;
  title: string;
  image: string;
  time: number;
  servings: string;
  spiceLevel: number;
  tags: string[];
  description: string;
  ingredients?: string[];
  instructions?: string[];
  nutrition?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  chefNotes?: string;
  price?: number;
}

// Sample data for all recipes
export const allRecipes: Recipe[] = [
  {
    id: '1',
    title: 'Authentic Sri Lankan Rice and Curry',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&h=400',
    time: 45,
    servings: '2-4',
    spiceLevel: 3,
    tags: ['Non-Vegetarian', 'Classic'],
    description: 'A staple in Sri Lankan cuisine with fragrant rice served with a variety of flavorful curry dishes.',
    ingredients: [
      '2 cups basmati rice',
      '1 lb chicken, cut into pieces',
      '1 onion, sliced',
      '3 cloves garlic, minced',
      '1 inch ginger, grated',
      '2 green chilies, sliced',
      '1 tsp turmeric powder',
      '1 tbsp curry powder',
      '1 tsp chili powder',
      '1 cinnamon stick',
      '3 cardamom pods',
      '2 cups coconut milk',
      'Salt to taste',
      'Fresh curry leaves',
      'Oil for cooking'
    ],
    instructions: [
      'Wash rice and cook with water in a 1:2 ratio until fluffy.',
      'Heat oil in a pan and add cinnamon, cardamom, and curry leaves.',
      'Add onions and sauté until translucent.',
      'Add garlic, ginger, and green chilies. Sauté for 2 minutes.',
      'Add chicken pieces and stir well.',
      'Add turmeric, curry powder, and chili powder. Mix thoroughly.',
      'Pour in coconut milk and bring to a simmer.',
      'Cover and cook for 25-30 minutes until chicken is tender.',
      'Season with salt and garnish with fresh curry leaves.',
      'Serve hot with rice and side dishes.'
    ],
    nutrition: {
      calories: 450,
      protein: 28,
      carbs: 42,
      fat: 18
    },
    chefNotes: 'For an authentic experience, serve with papadum, coconut sambol, and a side of cucumber raita. Adjust the spice level according to your preference.'
  },
  {
    id: '2',
    title: 'Coconut Roti with Pol Sambol',
    image: 'https://images.unsplash.com/photo-1619057883606-0faad403da2a?auto=format&fit=crop&w=600&h=400',
    time: 30,
    servings: '2',
    spiceLevel: 2,
    tags: ['Vegetarian', 'Breakfast'],
    description: "Delicious coconut flatbread served with a spicy coconut relish that's bursting with flavor.",
    ingredients: [
      '2 cups all-purpose flour',
      '1 cup freshly grated coconut',
      '1 small onion, finely chopped',
      '2 green chilies, finely chopped',
      '1/2 tsp salt',
      '1/2 cup water',
      'For Pol Sambol:',
      '1 cup freshly grated coconut',
      '1 small onion, finely chopped',
      '2 red chilies',
      '1 lime, juiced',
      '1 tsp chili powder',
      'Salt to taste'
    ],
    instructions: [
      'In a large bowl, mix flour, grated coconut, chopped onion, green chilies, and salt.',
      'Add water gradually and knead to form a soft dough.',
      'Divide the dough into 6 equal portions and shape into balls.',
      'Roll each ball into a flat round disc about 1/4 inch thick.',
      'Heat a flat pan or griddle and cook the roti on both sides until golden brown spots appear.',
      'For Pol Sambol, mix all ingredients in a bowl. Use a mortar and pestle for a more authentic texture.',
      'Adjust salt and lime juice according to taste.',
      'Serve hot roti with pol sambol on the side.'
    ],
    nutrition: {
      calories: 320,
      protein: 6,
      carbs: 34,
      fat: 16
    },
    chefNotes: 'For a healthier version, you can substitute half the all-purpose flour with whole wheat flour. The roti is best enjoyed fresh off the griddle.'
  },
  {
    id: '3',
    title: 'Lamprais (Dutch-Burgher Influenced)',
    image: '/assets/recipe-3.jpg',
    time: 60,
    servings: '2',
    spiceLevel: 3,
    tags: ['Non-Vegetarian', 'Special'],
    description: 'Rice and accompaniments wrapped in a banana leaf and baked, infusing the contents with a unique aroma.',
    ingredients: [
      '2 cups short-grain rice',
      '1/2 lb chicken, cubed',
      '1/4 lb beef, cubed',
      '1 onion, sliced',
      '2 cloves garlic, minced',
      '1 tsp turmeric powder',
      '1 tbsp roasted curry powder',
      '1/2 cup coconut milk',
      'Banana leaves for wrapping',
      'For Brinjal Moju:',
      '1 eggplant, cut into strips',
      '1 onion, sliced',
      '2 green chilies',
      '1 tsp turmeric',
      '2 tbsp vinegar',
      'Salt and sugar to taste'
    ],
    instructions: [
      'Cook rice with coconut milk, water, and a pinch of salt until just cooked.',
      'In a separate pan, cook meat with spices until tender.',
      'Prepare brinjal moju by frying eggplant strips and mixing with onions, chilies, and seasoning.',
      'Soften banana leaves by running them quickly over a flame.',
      'Place a portion of rice on each leaf, top with meat curry and brinjal moju.',
      'Fold leaves to make a neat package and secure with string or toothpicks.',
      'Bake the parcels at 350°F for 15-20 minutes.',
      'Serve hot, allowing diners to unwrap their own parcels.'
    ],
    nutrition: {
      calories: 520,
      protein: 32,
      carbs: 48,
      fat: 22
    },
    chefNotes: 'Traditional lamprais includes frikkadels (Dutch-style meatballs) and seeni sambol (caramelized onion relish). Add these if you want to make it even more authentic.'
  },
  {
    id: '4',
    title: 'Hoppers (Appam)',
    image: '/assets/recipe-4.jpg',
    time: 40,
    servings: '2',
    spiceLevel: 1,
    tags: ['Vegetarian', 'Breakfast'],
    description: 'Bowl-shaped pancakes made from fermented rice flour, with crispy edges and a soft center.',
    ingredients: [
      '2 cups rice flour',
      '1/2 cup coconut milk',
      '1/2 tsp sugar',
      '1/2 tsp active dry yeast',
      '1/4 tsp baking powder',
      'Salt to taste',
      'Water as needed',
      'For egg hoppers:',
      '4 eggs'
    ],
    instructions: [
      'Mix yeast with warm water and sugar. Let it stand for 5 minutes until frothy.',
      'In a large bowl, combine rice flour, salt, and baking powder.',
      'Add yeast mixture and coconut milk. Mix well to form a smooth batter.',
      'Cover and let ferment for at least 4 hours or overnight.',
      'Heat a hopper pan and add a ladle of batter.',
      'Swirl the pan to spread the batter up the sides of the pan.',
      'Cover and cook for 2-3 minutes until edges turn crispy.',
      'For egg hoppers, crack an egg into the center before covering.',
      'Serve hot with sambol or curry.'
    ],
    nutrition: {
      calories: 280,
      protein: 8,
      carbs: 36,
      fat: 12
    },
    chefNotes: 'If you don\'t have a traditional hopper pan, a small wok or a curved skillet can work as an alternative. The batter should be the consistency of crepe batter.'
  },
  {
    id: '5',
    title: 'String Hoppers with Curry',
    image: '/assets/recipe-5.jpg',
    time: 50,
    servings: '2-3',
    spiceLevel: 2,
    tags: ['Vegetarian', 'Dinner'],
    description: 'Steamed rice noodles served with rich coconut curry and sambol for a satisfying meal.',
    ingredients: [
      '2 cups rice flour',
      'Hot water as needed',
      'Salt to taste',
      'For curry:',
      '1 can coconut milk',
      '1 onion, sliced',
      '2 cloves garlic, minced',
      '1 tsp turmeric',
      '1 tsp curry powder',
      'Fresh curry leaves',
      'Salt to taste'
    ],
    instructions: [
      'Mix rice flour with salt and enough hot water to form a stiff dough.',
      'Knead well until smooth and pliable.',
      'Press portions of dough through a string hopper press onto small mats.',
      'Steam the string hoppers for about 5-7 minutes until cooked.',
      'For the curry, sauté onions, garlic, and curry leaves until fragrant.',
      'Add spices and cook for a minute.',
      'Pour in coconut milk and simmer for 10-15 minutes until slightly thickened.',
      'Season with salt to taste.',
      'Serve string hoppers with curry and coconut sambol.'
    ],
    nutrition: {
      calories: 380,
      protein: 5,
      carbs: 52,
      fat: 18
    },
    chefNotes: 'If you don\'t have a string hopper press, you can use a piping bag with a small round tip. The key is to get the consistency of the dough right - it should be firm but pliable.'
  },
  {
    id: '6',
    title: 'Jaffna Crab Curry',
    image: '/assets/recipe-6.jpg',
    time: 55,
    servings: '2',
    spiceLevel: 4,
    tags: ['Non-Vegetarian', 'Seafood'],
    description: 'A fiery and tangy curry from Northern Sri Lanka featuring fresh crab and aromatic spices.',
    ingredients: [
      '2 lbs fresh crab, cleaned and broken into pieces',
      '1 large onion, finely chopped',
      '3 cloves garlic, minced',
      '1 inch ginger, minced',
      '2-3 green chilies, slit',
      '1 sprig curry leaves',
      '1 tsp fenugreek seeds',
      '1 tsp mustard seeds',
      '2 tsp chili powder',
      '1 tsp turmeric powder',
      '1 tsp curry powder',
      '1 cup thick coconut milk',
      '1 cup thin coconut milk',
      '1 tomato, chopped',
      '1 lime, juiced',
      'Salt to taste',
      'Oil for cooking'
    ],
    instructions: [
      'Heat oil in a large pan and add fenugreek seeds, mustard seeds, and curry leaves.',
      'Add onions, garlic, ginger, and green chilies. Sauté until onions are translucent.',
      'Add all the spice powders and sauté for a minute.',
      'Add the thin coconut milk and bring to a simmer.',
      'Add crab pieces and cook covered for about 10 minutes.',
      'Add thick coconut milk and tomatoes. Simmer for another 10 minutes.',
      'Add lime juice and adjust seasoning.',
      'Serve hot with rice or bread.'
    ],
    nutrition: {
      calories: 420,
      protein: 36,
      carbs: 14,
      fat: 24
    },
    chefNotes: 'This curry is traditionally very spicy. Adjust the chili powder to your preference. The curry tastes even better when made a day ahead, allowing the flavors to meld.'
  },
  {
    id: '7',
    title: 'Vegetable Kottu Roti',
    image: '/assets/recipe-7.jpg',
    time: 35,
    servings: '2',
    spiceLevel: 3,
    tags: ['Vegetarian', 'Street Food'],
    description: 'Chopped flatbread stir-fried with vegetables, eggs, and spices - a popular Sri Lankan street food.',
    ingredients: [
      '4 godamba rotis or paratha, chopped into small pieces',
      '2 eggs, beaten',
      '1 carrot, julienned',
      '1 bell pepper, julienned',
      '1 onion, sliced',
      '2 green chilies, chopped',
      '2 cloves garlic, minced',
      '1 tsp ginger, minced',
      '1 tsp curry powder',
      '1/2 tsp turmeric',
      '1/2 cup vegetable stock or water',
      'Fresh curry leaves',
      'Salt to taste',
      'Oil for cooking',
      'Lime wedges for serving'
    ],
    instructions: [
      'Heat oil in a large wok or pan over high heat.',
      'Add onions, garlic, ginger, green chilies, and curry leaves. Stir-fry until fragrant.',
      'Add carrots and bell peppers. Stir-fry for 2-3 minutes.',
      'Push vegetables to one side and add beaten eggs to the other side.',
      'Scramble eggs until just set, then mix with vegetables.',
      'Add spices and salt. Mix well.',
      'Add chopped roti pieces and mix thoroughly.',
      'Pour in stock or water and continue to stir-fry until liquid is absorbed.',
      'Serve hot with lime wedges on the side.'
    ],
    nutrition: {
      calories: 380,
      protein: 12,
      carbs: 46,
      fat: 16
    },
    chefNotes: 'Traditional kottu is made by chopping the ingredients on a flat griddle using two metal cleavers, creating a rhythmic sound. For an authentic touch, try to chop and mix vigorously to replicate this experience.'
  },
  {
    id: '8',
    title: 'Cashew Curry',
    image: '/assets/recipe-8.jpg',
    time: 40,
    servings: '4',
    spiceLevel: 2,
    tags: ['Vegetarian', 'Special'],
    description: 'Creamy coconut curry with cashews as the star ingredient, perfect for special occasions.',
    ingredients: [
      '2 cups raw cashews, soaked for 30 minutes',
      '1 onion, finely chopped',
      '2 green chilies, slit',
      '2 cloves garlic, minced',
      '1 inch ginger, minced',
      '1 sprig curry leaves',
      '1 cinnamon stick',
      '1 tsp turmeric powder',
      '1 tsp roasted curry powder',
      '1/2 tsp fenugreek seeds',
      '2 cups coconut milk',
      '1 tomato, chopped',
      'Salt to taste',
      'Oil for cooking'
    ],
    instructions: [
      'Drain and rinse the soaked cashews.',
      'Heat oil in a pan and add fenugreek seeds, cinnamon, and curry leaves.',
      'Add onions, garlic, ginger, and green chilies. Sauté until onions are translucent.',
      'Add cashews and stir well to coat with the spices.',
      'Add turmeric and curry powder. Mix thoroughly.',
      'Pour in coconut milk and bring to a gentle simmer.',
      'Add chopped tomatoes and salt. Simmer for 15-20 minutes until cashews are tender and sauce has thickened.',
      'Serve hot with rice or bread.'
    ],
    nutrition: {
      calories: 460,
      protein: 10,
      carbs: 22,
      fat: 38
    },
    chefNotes: 'This curry is traditionally served at special occasions and celebrations. For a richer flavor, you can lightly roast the cashews before soaking them.'
  },
  {
    id: '9',
    title: 'Watalappan (Coconut Custard)',
    image: '/assets/recipe-9.jpg',
    time: 60,
    servings: '6',
    spiceLevel: 1,
    tags: ['Vegetarian', 'Dessert'],
    description: 'A rich coconut custard pudding sweetened with jaggery and flavored with cardamom and nuts.',
    ingredients: [
      '2 cups thick coconut milk',
      '1 cup jaggery, grated',
      '5 eggs',
      '1/2 tsp ground cardamom',
      '1/4 tsp ground nutmeg',
      '1/4 tsp ground cloves',
      'Pinch of salt',
      '1/4 cup cashews, chopped',
      '1/4 cup raisins'
    ],
    instructions: [
      'Preheat oven to 325°F (165°C).',
      'In a saucepan, melt jaggery with 2 tablespoons of water over low heat.',
      'Allow jaggery syrup to cool slightly.',
      'Beat eggs in a large bowl until frothy.',
      'Gradually add coconut milk, jaggery syrup, spices, and salt. Mix well.',
      'Strain the mixture to remove any solids.',
      'Pour into ramekins or a large baking dish.',
      'Sprinkle chopped cashews and raisins on top.',
      'Place ramekins in a water bath (bain-marie).',
      'Bake for 45-50 minutes until set but still slightly wobbly in the center.',
      'Allow to cool completely before refrigerating for at least 2 hours.',
      'Serve chilled.'
    ],
    nutrition: {
      calories: 320,
      protein: 6,
      carbs: 32,
      fat: 20
    },
    chefNotes: 'Watalappan is traditionally steamed, but baking works just as well. The custard should be firm but with a slight wobble. Overcooking will make it rubbery.'
  },
];

export function getRecipeById(id: string): Recipe | undefined {
  return allRecipes.find(recipe => recipe.id === id);
}

export function getFeaturedRecipes(): Recipe[] {
  return allRecipes.slice(0, 3);
}
