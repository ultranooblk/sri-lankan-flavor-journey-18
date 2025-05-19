
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

// Sample data for all recipes with high-resolution images
export const allRecipes: Recipe[] = [
  {
    id: '1',
    title: 'Home-Style Rice & Curry',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=2071',
    time: 45,
    servings: '2-4',
    spiceLevel: 2,
    tags: ['Combo Meal Kit', 'Non-Vegetarian'],
    description: 'Enjoy the taste of a classic Sri Lankan lunch with this comforting combo featuring steamed white basmati rice paired with a rich chicken curry infused with coconut milk, creamy dhal curry, spicy brinjal moju, and tangy pol sambol.',
    ingredients: [
      'White basmati rice',
      'Chicken pieces',
      'Coconut milk',
      'Red lentils',
      'Eggplant/brinjal',
      'Fresh coconut',
      'Red chili powder',
      'Curry powder',
      'Turmeric',
      'Onions',
      'Garlic',
      'Ginger',
      'Curry leaves',
      'Pandan leaves',
      'Lime juice',
      'Vinegar for brinjal moju'
    ],
    instructions: [
      'Start by washing the basmati rice and cooking it according to package instructions.',
      'For the chicken curry, heat coconut oil in a pot and sauté onions, garlic, and ginger.',
      'Add curry leaves, pandan leaves, and spices, then cook until fragrant.',
      'Add chicken pieces and stir to coat with spices.',
      'Pour in coconut milk, bring to a simmer, and cook until chicken is tender.',
      'For dhal curry, cook red lentils with turmeric and salt until soft.',
      'Add a tempering of onions, curry leaves, and spices.',
      'Prepare brinjal moju by frying eggplant slices and mixing with onions, turmeric, and vinegar.',
      'For pol sambol, combine freshly grated coconut with red chili powder, onions, and lime juice.',
      'Serve all components with steaming rice.'
    ],
    nutrition: {
      calories: 450,
      protein: 28,
      carbs: 50,
      fat: 16
    },
    chefNotes: 'Use coconut oil and let the curry simmer for deeper flavor.',
    price: 18.99
  },
  {
    id: '2',
    title: 'Vegetarian Feast',
    image: 'https://images.unsplash.com/photo-1656048612927-33201fa60fff?auto=format&fit=crop&q=80&w=2070',
    time: 40,
    servings: '2-4',
    spiceLevel: 1,
    tags: ['Combo Meal Kit', 'Vegetarian', 'Vegan-Friendly'],
    description: 'This wholesome vegetarian set brings together earthy red rice, silky dhal curry (parippu), vibrant beetroot curry, refreshing gotukola sambol, and crispy papadam.',
    ingredients: [
      'Red rice',
      'Red lentils',
      'Fresh beetroot',
      'Gotukola leaves (Asian pennywort)',
      'Papadam',
      'Coconut milk',
      'Onions',
      'Garlic',
      'Ginger',
      'Curry leaves',
      'Mustard seeds',
      'Turmeric powder',
      'Cumin powder',
      'Freshly grated coconut',
      'Lime juice',
      'Green chilies'
    ],
    instructions: [
      'Wash and cook red rice until tender but still with a slight bite.',
      'For the dhal curry, cook red lentils with turmeric until soft.',
      'Add a tempering of mustard seeds, curry leaves, and onions.',
      'For beetroot curry, sauté diced beetroot with spices and simmer in coconut milk.',
      'Prepare gotukola sambol by mixing finely chopped gotukola leaves with grated coconut, lime juice, onions, and green chilies.',
      'Fry papadams just before serving until crisp and bubbly.',
      'Arrange all components for a colorful, plant-based feast.'
    ],
    nutrition: {
      calories: 380,
      protein: 12,
      carbs: 65,
      fat: 8
    },
    chefNotes: 'Rich in nutrients and perfect for clean, plant-based eating.',
    price: 17.99
  },
  {
    id: '3',
    title: 'Fish Lover\'s Meal',
    image: 'https://images.unsplash.com/photo-1609436132203-a76dc854141a?auto=format&fit=crop&q=80&w=1974',
    time: 50,
    servings: '2-4',
    spiceLevel: 3,
    tags: ['Combo Meal Kit', 'Seafood'],
    description: 'Dive into Sri Lanka\'s coastal soul with this zesty meal featuring fish ambul thiyal (sour tuna curry), dhal curry, steamed rice, a light greens mallung, and pol sambol.',
    ingredients: [
      'Fresh tuna steaks',
      'Steamed white rice',
      'Red lentils',
      'Green leafy vegetables',
      'Freshly grated coconut',
      'Goraka (garcinia cambogia) paste',
      'Black pepper',
      'Curry powder',
      'Turmeric',
      'Pandan leaves',
      'Curry leaves',
      'Red onions',
      'Garlic',
      'Ginger',
      'Green chilies',
      'Lime juice'
    ],
    instructions: [
      'Cut tuna into cubes and marinate with goraka paste and spices for 15 minutes.',
      'Cook the marinated fish in a clay pot with minimal water until the moisture evaporates and fish is coated with thick spices.',
      'Prepare dhal curry by cooking red lentils until soft and adding a tempering of spices.',
      'Cook white rice until fluffy.',
      'For greens mallung, quickly stir-fry chopped greens with grated coconut, turmeric, and green chilies.',
      'Mix freshly grated coconut with red chili powder, lime juice, and onions for pol sambol.',
      'Serve all components together for a complete Sri Lankan fish meal.'
    ],
    nutrition: {
      calories: 420,
      protein: 32,
      carbs: 45,
      fat: 12
    },
    chefNotes: 'Marinate the fish first for best results.',
    price: 21.99
  },
  {
    id: '4',
    title: 'Chicken Kottu Roti',
    image: 'https://images.unsplash.com/photo-1631292784640-2b24d91b7580?auto=format&fit=crop&q=80&w=2070',
    time: 30,
    servings: '2',
    spiceLevel: 2,
    tags: ['Hero Dish Kit', 'Street Food', 'Non-Vegetarian'],
    description: 'A beloved Lankan street food reimagined for your home, this spicy stir-fry combines chopped godamba roti, tender chicken, vegetables, egg, soy sauce, and a fiery chili paste.',
    ingredients: [
      'Godamba roti (flat bread)',
      'Chicken breast strips',
      'Eggs',
      'Cabbage, shredded',
      'Carrots, julienned',
      'Bell peppers, sliced',
      'Onions, sliced',
      'Garlic, minced',
      'Ginger, minced',
      'Soy sauce',
      'Chili paste',
      'Curry powder',
      'Vegetable oil',
      'Spring onions',
      'Lime wedges'
    ],
    instructions: [
      'Cut the godamba roti into small pieces using scissors or tear by hand.',
      'Heat oil in a wok or large pan over high heat.',
      'Add chicken strips and stir-fry until nearly cooked.',
      'Add onions, garlic, and ginger, cooking until fragrant.',
      'Introduce vegetables and stir-fry until slightly softened.',
      'Push everything to one side and scramble eggs on the other side.',
      'Add chili paste, soy sauce, and curry powder, mixing well.',
      'Toss in the chopped roti and stir vigorously to mix everything together.',
      'Continue cooking for 3-5 minutes until everything is well integrated.',
      'Garnish with spring onions and serve with lime wedges.'
    ],
    nutrition: {
      calories: 520,
      protein: 30,
      carbs: 45,
      fat: 25
    },
    chefNotes: 'Cook everything on high heat for the best kottu-style aroma.',
    price: 16.99
  },
  {
    id: '5',
    title: 'Lamprais',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=2074',
    time: 90,
    servings: '2',
    spiceLevel: 2,
    tags: ['Hero Dish Kit', 'Special', 'Non-Vegetarian'],
    description: 'An iconic Burgher-inspired meal, lamprais includes ghee-flavored yellow rice, Dutch-style meat curry, ash plantain moju, boiled egg, shrimp blachan, all wrapped in a banana leaf and baked to perfection.',
    ingredients: [
      'Basmati rice',
      'Ghee',
      'Turmeric powder',
      'Mixed meat (chicken, beef, pork)',
      'Ash plantains',
      'Boiled eggs',
      'Shrimp paste (blachan)',
      'Banana leaves',
      'Onions',
      'Garlic',
      'Ginger',
      'Cinnamon',
      'Cardamom',
      'Cloves',
      'Curry powder',
      'Coconut milk'
    ],
    instructions: [
      'Prepare yellow rice by cooking basmati with ghee and turmeric.',
      'Cook Dutch-style meat curry with a rich blend of spices until tender.',
      'Prepare ash plantain moju by frying and mixing with spices and vinegar.',
      'Boil eggs and cut in half.',
      'Cook shrimp blachan.',
      'Soften banana leaves by heating briefly over a flame.',
      'Place a portion of rice on each leaf, and arrange meat curry, plantain moju, egg, and blachan on top.',
      'Fold leaves to create a parcel and secure with string or toothpicks.',
      'Bake parcels at 350°F for 20 minutes.',
      'Serve hot, allowing diners to unwrap their own lamprais.'
    ],
    nutrition: {
      calories: 650,
      protein: 35,
      carbs: 60,
      fat: 30
    },
    chefNotes: 'Medium spice and intense depth of flavor make it a weekend favorite.',
    price: 22.99
  },
  {
    id: '6',
    title: 'Hoppers & Lunu Miris',
    image: 'https://images.unsplash.com/photo-1651117128577-5c368764d5ed?auto=format&fit=crop&q=80&w=2070',
    time: 45,
    servings: '2',
    spiceLevel: 3,
    tags: ['Hero Dish Kit', 'Breakfast'],
    description: 'Get that perfect crispy-edged hopper with our fermented batter kit, served with fiery lunu miris and sweet onion seeni sambol.',
    ingredients: [
      'Rice flour',
      'Coconut milk',
      'Active dry yeast',
      'Sugar',
      'Salt',
      'Red onions',
      'Dried red chilies',
      'Fresh green chilies',
      'Maldive fish (optional)',
      'Lime juice',
      'Cinnamon sticks',
      'Cardamom pods',
      'Cloves',
      'Sugar',
      'Tamarind paste',
      'Vegetable oil'
    ],
    instructions: [
      'Mix rice flour, coconut milk, yeast, sugar, and salt to create a batter.',
      'Allow the batter to ferment for at least 6 hours or overnight.',
      'Heat a hopper pan and add a ladle of batter.',
      'Swirl to coat the sides and cover to cook for 2-3 minutes until edges are crispy.',
      'For lunu miris, grind together red chilies, onions, lime juice, and Maldive fish.',
      'For seeni sambol, slowly caramelize onions with spices, tamarind, and sugar until dark and sweet.',
      'Serve hoppers hot with both condiments on the side.'
    ],
    nutrition: {
      calories: 280,
      protein: 6,
      carbs: 45,
      fat: 9
    },
    chefNotes: 'Ferment the batter in advance for best results.',
    price: 15.99
  },
  {
    id: '7',
    title: 'Pittu & Coconut Sambol',
    image: 'https://images.unsplash.com/photo-1560963805-6c64417e3413?auto=format&fit=crop&q=80&w=2070',
    time: 35,
    servings: '2',
    spiceLevel: 1,
    tags: ['Hero Dish Kit', 'Vegetarian'],
    description: 'This rustic staple includes soft, steamed pittu, creamy kiri hodi (coconut gravy), and fresh pol sambol.',
    ingredients: [
      'Rice flour',
      'Freshly grated coconut',
      'Salt',
      'Water',
      'Coconut milk',
      'Onions',
      'Green chilies',
      'Curry leaves',
      'Pandan leaves',
      'Turmeric powder',
      'Fenugreek seeds',
      'Red chili powder',
      'Lime juice',
      'Maldive fish (optional)'
    ],
    instructions: [
      'Mix rice flour with salt and enough water to make a crumbly mixture.',
      'Layer rice flour mixture and grated coconut in a pittu mold.',
      'Steam for 15-20 minutes until cooked through.',
      'For kiri hodi, simmer coconut milk with fenugreek, turmeric, curry leaves, pandan, and green chilies.',
      'Prepare pol sambol by mixing grated coconut with red chili powder, onions, lime juice, and Maldive fish (if using).',
      'Serve steamed pittu with kiri hodi poured over and pol sambol on the side.'
    ],
    nutrition: {
      calories: 310,
      protein: 7,
      carbs: 40,
      fat: 15
    },
    chefNotes: 'Mild and grounding, perfect for a balanced vegetarian meal.',
    price: 14.99
  },
  {
    id: '8',
    title: 'String Hoppers & Kiri Hodi',
    image: 'https://images.unsplash.com/photo-1560963805-6c64417e3413?auto=format&fit=crop&q=80&w=2070',
    time: 40,
    servings: '2',
    spiceLevel: 1,
    tags: ['Hero Dish Kit', 'Vegetarian', 'Breakfast'],
    description: 'Delicate rice flour string hoppers meet silky kiri hodi and spicy lunu miris in this elegant, traditional breakfast or dinner kit.',
    ingredients: [
      'Rice flour',
      'Hot water',
      'Salt',
      'Coconut milk',
      'Onions',
      'Green chilies',
      'Curry leaves',
      'Pandan leaves',
      'Fenugreek seeds',
      'Turmeric powder',
      'Red chilies',
      'Lime juice',
      'Maldive fish (optional)'
    ],
    instructions: [
      'Mix rice flour with salt and hot water to form a stiff dough.',
      'Press the dough through a string hopper press onto circular mats.',
      'Steam for 5-7 minutes until cooked.',
      'For kiri hodi, simmer coconut milk with fenugreek, turmeric, curry leaves, pandan leaves, and green chilies.',
      'Prepare lunu miris by grinding dried red chilies with onions, lime juice, and Maldive fish if using.',
      'Serve string hoppers with kiri hodi poured over and lunu miris on the side.'
    ],
    nutrition: {
      calories: 290,
      protein: 6,
      carbs: 42,
      fat: 12
    },
    chefNotes: 'A gentle spice level makes it great for all palates.',
    price: 15.99
  },
  {
    id: '9',
    title: 'Beef Curry & Yellow Rice',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=2074',
    time: 60,
    servings: '2',
    spiceLevel: 3,
    tags: ['Hero Dish Kit', 'Non-Vegetarian'],
    description: 'Slow-cooked spiced beef curry meets golden turmeric rice in this high-protein, high-flavor dish. Balanced with carrot sambol and coconut chutney.',
    ingredients: [
      'Beef, cubed',
      'Basmati rice',
      'Turmeric powder',
      'Ghee',
      'Onions',
      'Garlic',
      'Ginger',
      'Curry leaves',
      'Pandan leaves',
      'Roasted curry powder',
      'Chili powder',
      'Cinnamon sticks',
      'Cardamom pods',
      'Cloves',
      'Coconut milk',
      'Carrots',
      'Fresh coconut',
      'Lime juice'
    ],
    instructions: [
      'Marinate beef with curry powder, chili powder, and salt for 30 minutes.',
      'In a pot, sauté onions, garlic, ginger, and spices until fragrant.',
      'Add marinated beef and brown on all sides.',
      'Pour in coconut milk and simmer covered for 45 minutes until beef is tender.',
      'Prepare yellow rice by cooking basmati with turmeric, ghee, and aromatics.',
      'Make carrot sambol by mixing grated carrots with lime juice and coconut.',
      'Prepare fresh coconut chutney with herbs and green chilies.',
      'Serve beef curry over yellow rice with sambols on the side.'
    ],
    nutrition: {
      calories: 580,
      protein: 40,
      carbs: 45,
      fat: 25
    },
    chefNotes: 'This bold set fills the kitchen with heavenly aromas.',
    price: 19.99
  },
  {
    id: '10',
    title: 'Egg Curry with Coconut Roti',
    image: 'https://images.unsplash.com/photo-1611578658829-719723ac9fc9?auto=format&fit=crop&q=80&w=2070',
    time: 35,
    servings: '2',
    spiceLevel: 2,
    tags: ['Hero Dish Kit', 'Vegetarian'],
    description: 'Creamy, spicy egg curry comes paired with chewy, pan-cooked coconut roti and a fresh mint sambol.',
    ingredients: [
      'Eggs',
      'Wheat flour',
      'Freshly grated coconut',
      'Coconut milk',
      'Onions',
      'Tomatoes',
      'Green chilies',
      'Curry leaves',
      'Curry powder',
      'Turmeric powder',
      'Fresh mint leaves',
      'Lime juice',
      'Green chilies',
      'Salt',
      'Oil'
    ],
    instructions: [
      'Hard boil eggs, peel, and make small incisions all over.',
      'In a pan, sauté onions, green chilies, curry leaves until golden.',
      'Add spices, tomatoes, and cook until oil separates.',
      'Pour in coconut milk and simmer to thicken slightly.',
      'Add boiled eggs and cook for another 5 minutes.',
      'For coconut roti, mix flour, grated coconut, salt, and water to form a dough.',
      'Cook roti on a hot pan until golden brown on both sides.',
      'Prepare mint sambol by mixing chopped mint leaves with green chilies, onions, and lime juice.',
      'Serve egg curry with coconut roti and mint sambol.'
    ],
    nutrition: {
      calories: 380,
      protein: 18,
      carbs: 35,
      fat: 20
    },
    chefNotes: 'Toast the roti on a clay pan for the best flavor.',
    price: 16.99
  },
  {
    id: '11',
    title: 'Sri Lankan Brunch Delight',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2070',
    time: 45,
    servings: '2-4',
    spiceLevel: 2,
    tags: ['Combo Meal Kit', 'Brunch', 'Non-Vegetarian'],
    description: 'A well-balanced brunch feast with steamed string hoppers, creamy kiri hodi, soft egg curry, pol sambol, and banana slices.',
    ingredients: [
      'Rice flour',
      'Eggs',
      'Coconut milk',
      'Onions',
      'Green chilies',
      'Curry leaves',
      'Pandan leaves',
      'Turmeric powder',
      'Fenugreek seeds',
      'Curry powder',
      'Freshly grated coconut',
      'Red chili powder',
      'Lime juice',
      'Ripe bananas',
      'Maldive fish (optional)'
    ],
    instructions: [
      'Prepare string hoppers by pressing rice flour dough through a mold and steaming.',
      'Make kiri hodi by simmering coconut milk with fenugreek, curry leaves, and spices.',
      'Prepare egg curry with boiled eggs in a fragrant coconut gravy.',
      'Mix pol sambol using freshly grated coconut, red chili powder, lime juice, and Maldive fish if using.',
      'Slice ripe bananas just before serving.',
      'Arrange all components for a balanced Sri Lankan brunch experience.'
    ],
    nutrition: {
      calories: 410,
      protein: 15,
      carbs: 55,
      fat: 18
    },
    chefNotes: 'This is a meal the whole family can enjoy.',
    price: 20.99
  },
  {
    id: '12',
    title: 'Jackfruit Curry & Red Rice Set',
    image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&q=80&w=2070',
    time: 50,
    servings: '2-4',
    spiceLevel: 3,
    tags: ['Combo Meal Kit', 'Vegan', 'Vegetarian'],
    description: 'This vegan-friendly kit features red rice, hearty polos (young jackfruit curry), tempered green beans, cucumber raita, and chili-onion sambol.',
    ingredients: [
      'Young green jackfruit (polos)',
      'Red rice',
      'Green beans',
      'Cucumber',
      'Plant-based yogurt',
      'Red onions',
      'Green chilies',
      'Curry leaves',
      'Pandan leaves',
      'Mustard seeds',
      'Curry powder',
      'Turmeric powder',
      'Roasted curry powder',
      'Coconut milk',
      'Goraka paste',
      'Lime juice'
    ],
    instructions: [
      'Cook red rice until tender but still with a slight bite.',
      'For jackfruit curry, sauté spices and aromatics, then add chopped jackfruit.',
      'Add goraka paste and coconut milk, then simmer until jackfruit is tender and flavorful.',
      'Temper green beans with mustard seeds, curry leaves, and turmeric.',
      'Prepare cucumber raita by mixing diced cucumber with plant-based yogurt and spices.',
      'Make chili-onion sambol with finely chopped onions, green chilies, and lime juice.',
      'Serve all components together for a balanced vegan Sri Lankan meal.'
    ],
    nutrition: {
      calories: 360,
      protein: 10,
      carbs: 65,
      fat: 8
    },
    chefNotes: 'Packed with fiber and flavor, it\'s a nutritious and satisfying meat-free option.',
    price: 18.99
  }
];

export function getRecipeById(id: string): Recipe | undefined {
  return allRecipes.find(recipe => recipe.id === id);
}

export function getFeaturedRecipes(): Recipe[] {
  return allRecipes.slice(0, 3);
}
