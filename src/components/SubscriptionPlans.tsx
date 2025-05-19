
import { useState } from 'react';
import { Check, Info, ShoppingCart, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCart } from '@/hooks/use-cart';
import { toast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Mock recipe data for selection
const availableRecipes = [
  { id: 'recipe-1', name: 'Spicy Chicken Curry', image: '/placeholder.svg' },
  { id: 'recipe-2', name: 'Coconut Rice', image: '/placeholder.svg' },
  { id: 'recipe-3', name: 'String Hoppers', image: '/placeholder.svg' },
  { id: 'recipe-4', name: 'Vegetable Kottu', image: '/placeholder.svg' },
  { id: 'recipe-5', name: 'Lentil Dal', image: '/placeholder.svg' },
  { id: 'recipe-6', name: 'Egg Hoppers', image: '/placeholder.svg' },
];

const mealKits = [
  {
    id: 'starter-kit',
    name: 'Starter Kit',
    description: 'Perfect for couples or individuals wanting to explore Sri Lankan cuisine',
    price: 3600,
    details: '2 portions, 3 recipes',
    features: [
      'Premium ingredients',
      'Recipe cards included',
      'Free delivery',
      'Full refund if not satisfied'
    ],
    popular: false,
    maxRecipes: 3
  },
  {
    id: 'family-kit',
    name: 'Family Kit',
    description: 'Ideal for families or meal prep enthusiasts',
    price: 6800,
    details: '4 portions, 4 recipes',
    features: [
      'Premium ingredients',
      'Recipe cards included',
      'Free delivery',
      'Full refund if not satisfied',
      'Premium recipe options'
    ],
    popular: true,
    maxRecipes: 4
  },
  {
    id: 'deluxe-kit',
    name: 'Deluxe Explorer Kit',
    description: 'For adventurous eaters who love variety',
    price: 7200,
    details: '4 portions, 5 recipes',
    features: [
      'Premium ingredients',
      'Recipe cards included',
      'Free delivery',
      'Full refund if not satisfied',
      'Premium recipe options',
      'Specialty spice collection'
    ],
    popular: false,
    maxRecipes: 5
  }
];

// Type for recipe in meal kit
type MealKitRecipe = {
  id: string;
  name: string;
  image: string;
  portions: number;
};

const SubscriptionPlans = () => {
  const [selectedPlanId, setSelectedPlanId] = useState('family-kit');
  const { addToCart } = useCart();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedRecipeId, setSelectedRecipeId] = useState('');
  const [portions, setPortions] = useState(2);
  
  // Store recipes added to each meal kit
  const [kitRecipes, setKitRecipes] = useState<Record<string, MealKitRecipe[]>>({
    'starter-kit': [],
    'family-kit': [],
    'deluxe-kit': []
  });

  const selectedPlan = mealKits.find(plan => plan.id === selectedPlanId);
  const selectedKitRecipes = kitRecipes[selectedPlanId] || [];
  
  const handleOpenRecipeDialog = () => {
    if (!selectedPlan) return;
    if (selectedKitRecipes.length >= selectedPlan.maxRecipes) {
      toast({
        title: "Maximum recipes reached",
        description: `You can only add up to ${selectedPlan.maxRecipes} recipes to this kit`,
        variant: "destructive"
      });
      return;
    }
    setDialogOpen(true);
    setSelectedRecipeId(availableRecipes[0].id);
    setPortions(2);
  };

  const handleAddRecipeToKit = () => {
    const recipe = availableRecipes.find(r => r.id === selectedRecipeId);
    if (!recipe || !selectedPlan) return;
    
    // Check if recipe is already in the kit
    const alreadyExists = selectedKitRecipes.some(r => r.id === recipe.id);
    if (alreadyExists) {
      toast({
        title: "Recipe already added",
        description: "This recipe is already in your meal kit",
        variant: "destructive"
      });
      return;
    }
    
    setKitRecipes(prev => ({
      ...prev,
      [selectedPlanId]: [
        ...prev[selectedPlanId],
        {
          id: recipe.id,
          name: recipe.name,
          image: recipe.image,
          portions
        }
      ]
    }));
    
    setDialogOpen(false);
    toast({
      title: "Recipe added",
      description: `${recipe.name} has been added to your ${selectedPlan.name}`,
    });
  };

  const handleRemoveRecipe = (recipeId: string) => {
    setKitRecipes(prev => ({
      ...prev,
      [selectedPlanId]: prev[selectedPlanId].filter(r => r.id !== recipeId)
    }));
    
    toast({
      title: "Recipe removed",
      description: "Recipe has been removed from your meal kit",
    });
  };

  const handleBuyNow = (plan) => {
    // Prepare cart item with selected recipes
    const selectedRecipes = kitRecipes[plan.id] || [];
    
    addToCart({
      id: plan.id,
      title: plan.name,
      image: '/placeholder.svg',
      price: plan.price,
      recipes: selectedRecipes
    });
    
    toast({
      title: "Added to cart",
      description: `${plan.name} has been added to your cart with ${selectedRecipes.length} recipes`,
    });
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-background via-background to-muted/50 dark:from-background dark:to-background/80">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-foreground">Our Meal Kits</h2>
          <p className="text-lg text-foreground/70">
            Discover authentic Sri Lankan flavors with our carefully curated meal kits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {mealKits.map((plan) => (
            <Card 
              key={plan.id}
              className={cn(
                "relative overflow-hidden transition-all border-2",
                selectedPlanId === plan.id 
                  ? "border-primary shadow-lg shadow-primary/10" 
                  : "border-border hover:border-primary/50"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription className="min-h-12">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-2xl sm:text-3xl font-bold text-foreground">LKR {plan.price.toLocaleString()}</span>
                </div>
                <div className="text-sm text-foreground/70 mt-1">{plan.details}</div>
              </CardHeader>
              <CardContent>
                {/* Recipe List */}
                {selectedPlanId === plan.id && (
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-sm font-medium">Selected Recipes</h4>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="h-8 text-xs"
                        onClick={handleOpenRecipeDialog}
                      >
                        <Plus className="h-4 w-4 mr-1" />
                        Add Recipe
                      </Button>
                    </div>

                    {selectedKitRecipes.length > 0 ? (
                      <div className="space-y-2 mb-4">
                        {selectedKitRecipes.map((recipe) => (
                          <div 
                            key={recipe.id} 
                            className="flex items-center justify-between p-2 bg-muted/50 rounded-md"
                          >
                            <div className="flex items-center">
                              <img 
                                src={recipe.image} 
                                alt={recipe.name} 
                                className="w-8 h-8 rounded-md object-cover mr-2" 
                              />
                              <div>
                                <p className="text-xs font-medium line-clamp-1">{recipe.name}</p>
                                <p className="text-xs text-muted-foreground">{recipe.portions} portions</p>
                              </div>
                            </div>
                            <Button 
                              size="icon" 
                              variant="ghost" 
                              className="h-6 w-6"
                              onClick={() => handleRemoveRecipe(recipe.id)}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground italic mb-4">
                        No recipes selected. Add up to {plan.maxRecipes} recipes.
                      </p>
                    )}
                  </div>
                )}
                
                {/* Features List */}
                <ul className="space-y-2 sm:space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <Button 
                  className={cn(
                    "w-full",
                    selectedPlanId === plan.id
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-card hover:bg-muted border border-input text-card-foreground"
                  )}
                  onClick={() => setSelectedPlanId(plan.id)}
                >
                  {selectedPlanId === plan.id ? "Selected" : "Select Kit"}
                </Button>
                
                <Button 
                  onClick={() => handleBuyNow(plan)}
                  className={selectedPlanId === plan.id ? "w-full" : "w-full bg-muted/70 hover:bg-muted text-foreground/70"}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 sm:mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Ready to start your culinary journey?</h3>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white mx-auto group" 
            size="lg"
            onClick={() => {
              const selectedPlan = mealKits.find(plan => plan.id === selectedPlanId);
              if (selectedPlan) {
                handleBuyNow(selectedPlan);
              }
            }}
          >
            Buy Now
            <ShoppingCart className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
          </Button>
          
          <div className="mt-6 sm:mt-8 text-center">
            <p className="flex items-center justify-center text-sm text-foreground/70">
              <Info className="h-4 w-4 mr-2 text-primary" />
              All kits include premium ingredients and recipe instructions.
            </p>
          </div>
        </div>
      </div>
      
      {/* Recipe Selection Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Recipe to Meal Kit</DialogTitle>
            <DialogDescription>
              Choose a recipe and set the number of portions you'd like to include.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="recipe" className="text-right">
                Recipe
              </Label>
              <Select 
                value={selectedRecipeId} 
                onValueChange={setSelectedRecipeId}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select a recipe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Recipes</SelectLabel>
                    {availableRecipes.map(recipe => (
                      <SelectItem key={recipe.id} value={recipe.id}>
                        {recipe.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="portions" className="text-right">
                Portions
              </Label>
              <Input
                id="portions"
                type="number"
                value={portions}
                onChange={(e) => setPortions(Math.max(1, Math.min(8, parseInt(e.target.value) || 1)))}
                min={1}
                max={8}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddRecipeToKit}>
              Add to Kit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default SubscriptionPlans;
