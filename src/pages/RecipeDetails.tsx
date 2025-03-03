
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Clock, 
  Users, 
  ChevronLeft, 
  PlayCircle, 
  Plus, 
  Minus, 
  ShoppingCart,
  Leaf,
  Flame
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';

// Sample recipe data (in a real app, this would come from an API)
const recipeData = {
  id: '1',
  title: 'Authentic Sri Lankan Rice and Curry',
  description: 'A staple in Sri Lankan cuisine, this traditional rice and curry features fragrant rice served with a variety of colorful and flavorful curry dishes. Perfect for a family dinner or special occasion.',
  image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=1200&h=600',
  time: 45,
  servings: '2-4',
  servingsOptions: ['2', '4', '6'],
  calories: 620,
  protein: 15,
  carbs: 80,
  fat: 22,
  spiceLevel: 3,
  tags: ['Non-Vegetarian', 'Classic', 'Dinner'],
  ingredients: [
    { name: 'Basmati Rice', quantity: '1 cup', for: 2 },
    { name: 'Chicken', quantity: '300g', for: 2 },
    { name: 'Coconut Milk', quantity: '200ml', for: 2 },
    { name: 'Red Chili Powder', quantity: '1 tsp', for: 2 },
    { name: 'Curry Leaves', quantity: '10-12 leaves', for: 2 },
    { name: 'Cinnamon Stick', quantity: '1 stick', for: 2 },
    { name: 'Cardamom Pods', quantity: '3 pods', for: 2 },
    { name: 'Cloves', quantity: '3 pieces', for: 2 },
    { name: 'Onion', quantity: '1 medium', for: 2 },
    { name: 'Garlic', quantity: '3 cloves', for: 2 },
    { name: 'Ginger', quantity: '1 inch piece', for: 2 },
    { name: 'Turmeric Powder', quantity: '1/2 tsp', for: 2 },
    { name: 'Cumin Powder', quantity: '1/2 tsp', for: 2 },
    { name: 'Coriander Powder', quantity: '1 tsp', for: 2 },
    { name: 'Salt', quantity: 'to taste', for: 2 },
    { name: 'Vegetable Oil', quantity: '2 tbsp', for: 2 },
  ],
  instructions: [
    {
      title: 'Prepare the Rice',
      steps: [
        'Wash the basmati rice thoroughly until the water runs clear.',
        'Soak the rice in water for 30 minutes, then drain.',
        'In a pot, add the rice with 2 cups of water and a pinch of salt.',
        'Bring to a boil, then reduce heat and simmer covered for 15 minutes.',
        'Once cooked, fluff with a fork and keep warm.'
      ]
    },
    {
      title: 'Make the Curry',
      steps: [
        'Heat oil in a large pan over medium heat.',
        'Add cinnamon, cardamom, and cloves, and sauté for 30 seconds.',
        'Add chopped onions and sauté until golden brown.',
        'Add minced garlic and ginger, and sauté for another minute.',
        'Add curry leaves and stir well.',
        'Add chicken pieces and brown them for 5 minutes.',
        'Add all the spice powders (turmeric, chili, cumin, coriander) and salt, mix well.',
        'Pour in coconut milk, bring to a simmer, and cook covered for 20 minutes.',
        'Adjust salt to taste and garnish with fresh coriander.'
      ]
    },
    {
      title: 'Serve',
      steps: [
        'Place a portion of rice on a plate.',
        'Serve the chicken curry alongside the rice.',
        'Enjoy with additional condiments like coconut sambol if desired.'
      ]
    }
  ],
  videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
};

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(recipeData);
  const [servingSize, setServingSize] = useState('2');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // In a real app, you'd fetch the recipe data based on the ID
    console.log(`Fetching recipe with ID: ${id}`);
    // For this demo, we'll just use the sample data
  }, [id]);

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity(prev => Math.max(1, prev - 1));
  };

  const calculateIngredientAmount = (baseAmount: string, baseServings: number, targetServings: number) => {
    if (baseAmount.includes('to taste') || baseAmount.includes('leaves') || baseAmount.includes('piece') || baseAmount.includes('cloves') || baseAmount.includes('stick') || baseAmount.includes('pods')) {
      return baseAmount;
    }
    
    // Extract the numeric part and the unit
    const match = baseAmount.match(/^([\d.]+)\s*(.*)$/);
    if (!match) return baseAmount;
    
    const [, amountStr, unit] = match;
    const amount = parseFloat(amountStr);
    const ratio = targetServings / baseServings;
    const newAmount = (amount * ratio).toFixed(1).replace(/\.0$/, '');
    
    return `${newAmount} ${unit}`;
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative">
        <div className="h-[40vh] md:h-[50vh] w-full bg-cover bg-center" style={{ backgroundImage: `url(${recipe.image})` }}>
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="relative -mt-20 bg-white rounded-t-3xl p-6 md:p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {recipe.tags.map((tag, i) => (
                <Badge key={i} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <div className="flex justify-between items-start">
              <h1 className="text-3xl md:text-4xl font-bold">{recipe.title}</h1>
              
              <div className="hidden md:flex items-center gap-1">
                <div className="text-sm font-medium">Spice Level:</div>
                <div className="spice-indicator level-{recipe.spiceLevel}">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            
            <p className="text-foreground/70 mt-2 mb-6">{recipe.description}</p>
            
            <div className="flex flex-wrap gap-6 md:gap-8 text-sm text-foreground/70 mb-6">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-primary" />
                <span>{recipe.time} minutes</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-primary" />
                <span>Serves {recipe.servings}</span>
              </div>
              <div className="flex items-center">
                <Flame className="h-5 w-5 mr-2 text-primary" />
                <span>{recipe.calories} calories</span>
              </div>
              <div className="md:hidden flex items-center">
                <div className="text-sm mr-2">Spice Level:</div>
                <div className="spice-indicator level-{recipe.spiceLevel}">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-lg bg-cookme-50 text-center">
                <div className="text-lg font-medium">{recipe.protein}g</div>
                <div className="text-sm text-foreground/70">Protein</div>
              </div>
              <div className="p-4 rounded-lg bg-cookme-50 text-center">
                <div className="text-lg font-medium">{recipe.carbs}g</div>
                <div className="text-sm text-foreground/70">Carbohydrates</div>
              </div>
              <div className="p-4 rounded-lg bg-cookme-50 text-center">
                <div className="text-lg font-medium">{recipe.fat}g</div>
                <div className="text-sm text-foreground/70">Fat</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recipe Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="instructions" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="instructions">Instructions</TabsTrigger>
            <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
            <TabsTrigger value="video">Video Guide</TabsTrigger>
          </TabsList>
          
          {/* Instructions Tab */}
          <TabsContent value="instructions" className="mt-0">
            <div className="space-y-8">
              {recipe.instructions.map((section, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-medium mb-4">{section.title}</h3>
                  <ol className="space-y-4">
                    {section.steps.map((step, j) => (
                      <li key={j} className="flex">
                        <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5 text-sm font-medium">
                          {j + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </TabsContent>
          
          {/* Ingredients Tab */}
          <TabsContent value="ingredients" className="mt-0">
            <div className="bg-white p-6 rounded-xl border border-border">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-medium">Ingredients</h3>
                <div className="flex items-center">
                  <span className="text-sm mr-2">Servings:</span>
                  <select 
                    value={servingSize} 
                    onChange={(e) => setServingSize(e.target.value)}
                    className="px-2 py-1 border border-border rounded"
                  >
                    {recipe.servingsOptions.map(option => (
                      <option key={option} value={option}>{option} people</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, i) => (
                  <li key={i} className="flex justify-between pb-2 border-b border-border last:border-0">
                    <span>{ingredient.name}</span>
                    <span className="text-foreground/70">
                      {calculateIngredientAmount(ingredient.quantity, ingredient.for, parseInt(servingSize))}
                    </span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 text-sm text-foreground/70 flex items-center">
                <Leaf className="h-4 w-4 mr-2 text-green-500" />
                <span>All ingredients are locally sourced from Sri Lankan farmers.</span>
              </div>
            </div>
          </TabsContent>
          
          {/* Video Tab */}
          <TabsContent value="video" className="mt-0">
            <div className="bg-white p-6 rounded-xl border border-border">
              <h3 className="text-xl font-medium mb-4">Video Guide</h3>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={recipe.videoUrl}
                  title="Recipe Video Guide"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="mt-4 text-foreground/70">
                Follow along with our chef as they prepare this authentic Sri Lankan dish step-by-step.
              </p>
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Order Section */}
        <div className="mt-12 bg-cookme-50 p-6 md:p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Order Ingredients for This Recipe</h3>
          <p className="text-foreground/70 mb-6">
            Get all the pre-portioned ingredients delivered to your door with our easy-to-follow recipe card.
          </p>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
            <div className="flex flex-col">
              <span className="text-sm text-foreground/70 mb-1">Select quantity:</span>
              <div className="flex items-center">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={handleDecrement}
                  disabled={quantity <= 1}
                  className="h-10 w-10"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <div className="h-10 w-12 flex items-center justify-center text-lg font-medium">
                  {quantity}
                </div>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={handleIncrement}
                  className="h-10 w-10"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-sm text-foreground/70 mb-1">Select servings:</span>
              <select 
                value={servingSize} 
                onChange={(e) => setServingSize(e.target.value)}
                className="h-10 px-4 py-2 border border-border rounded bg-white"
              >
                {recipe.servingsOptions.map(option => (
                  <option key={option} value={option}>For {option} people</option>
                ))}
              </select>
            </div>
            
            <div className="flex flex-col">
              <span className="text-sm text-foreground/70 mb-1">Total price:</span>
              <div className="text-2xl font-bold">₹{(parseInt(servingSize) * 299 * quantity).toFixed(2)}</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-white flex-1 h-12" size="lg">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
            <Button variant="outline" className="flex-1 h-12" size="lg">
              Subscribe & Save 10%
            </Button>
          </div>
        </div>
        
        {/* Back button */}
        <div className="mt-12">
          <Link to="/recipes">
            <Button variant="ghost" className="flex items-center">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Recipes
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
