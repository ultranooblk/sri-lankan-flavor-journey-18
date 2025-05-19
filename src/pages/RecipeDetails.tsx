
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Clock, Users, ChevronLeft, Info, ShoppingCart, Heart, Share2, Video } from 'lucide-react';
import { getRecipeById, Recipe } from '@/services/recipeService';
import { useCart } from '@/hooks/use-cart';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';

const RecipeDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [servingCount, setServingCount] = useState(2);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const { addToCart } = useCart();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (id) {
      const foundRecipe = getRecipeById(id);
      if (foundRecipe) {
        setRecipe(foundRecipe);
        // Set initial serving count from recipe if available
        if (foundRecipe.servings) {
          const initialServings = parseInt(foundRecipe.servings);
          if (!isNaN(initialServings)) {
            setServingCount(initialServings);
          }
        }
      }
    }
    setLoading(false);
    
    // Check if recipe is in favorites
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (id && favorites.includes(id)) {
      setIsFavorite(true);
    }
  }, [id]);

  const handleAddToCart = () => {
    if (recipe) {
      addToCart({
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
        price: (recipe.price || 6500) * servingCount / parseInt(recipe.servings || '2')
      });
      
      toast({
        title: "Added to cart",
        description: `${recipe.title} (${servingCount} servings) has been added to your cart`,
      });
    }
  };
  
  const handleToggleFavorite = () => {
    if (!recipe) return;
    
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    let updatedFavorites;
    
    if (isFavorite) {
      updatedFavorites = favorites.filter((favId: string) => favId !== recipe.id);
      toast({
        title: "Removed from favorites",
        description: `${recipe.title} has been removed from your favorites`,
      });
    } else {
      updatedFavorites = [...favorites, recipe.id];
      toast({
        title: "Added to favorites",
        description: `${recipe.title} has been added to your favorites`,
      });
    }
    
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Recipe Not Found</h2>
        <p className="mb-6">The recipe you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => navigate('/recipes')}>Back to Recipes</Button>
      </div>
    );
  }

  // Calculate adjusted price based on serving count
  const basePrice = recipe.price || 6500; // Default to 6500 LKR if price is not specified
  const pricePerServing = basePrice / parseInt(recipe.servings || '2');
  const adjustedPrice = (pricePerServing * servingCount).toFixed(0);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <Button 
        variant="ghost" 
        className="mb-4 md:mb-6 hover:bg-transparent group" 
        onClick={() => navigate('/recipes')}
      >
        <ChevronLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to Recipes
      </Button>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-3">
          {/* Recipe Title and Tags */}
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 font-display">{recipe.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {recipe.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="font-medium">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <p className="text-foreground/80 text-base md:text-lg mb-4 md:mb-6">{recipe.description}</p>
            
            <div className="flex flex-wrap gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="flex items-center">
                <Clock className="h-4 w-4 md:h-5 md:w-5 mr-2 text-primary" />
                <span><strong>{recipe.time}</strong> min</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 md:h-5 md:w-5 mr-2 text-primary" />
                <span><strong>{recipe.servings}</strong> servings</span>
              </div>
              <div className="flex items-center">
                <Info className="h-4 w-4 md:h-5 md:w-5 mr-2 text-primary" />
                <span>Spice Level: <strong>{recipe.spiceLevel}/5</strong></span>
              </div>
            </div>
          </div>
          
          {/* Recipe Image */}
          <div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden mb-6 md:mb-8">
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute top-4 right-4 flex space-x-2">
              <Button 
                size="icon" 
                className={cn(
                  "rounded-full hover:bg-white", 
                  isFavorite 
                    ? "bg-white text-red-500" 
                    : "bg-white/80 text-primary"
                )}
                onClick={handleToggleFavorite}
                aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
              >
                <Heart className="h-5 w-5" fill={isFavorite ? "currentColor" : "none"} />
              </Button>
              <Button 
                size="icon" 
                className="rounded-full bg-white/80 hover:bg-white text-primary"
                aria-label="Share recipe"
              >
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Video Tutorial */}
          <div className="mb-6 md:mb-8 rounded-xl overflow-hidden border border-border">
            <div className="aspect-video relative bg-muted flex items-center justify-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/5 dark:bg-white/5">
                <Video className="h-12 w-12 md:h-16 md:w-16 text-primary opacity-80" />
                <p className="mt-4 text-base md:text-lg font-medium">Video Tutorial Coming Soon</p>
                <p className="text-xs md:text-sm text-foreground/70">Watch how to prepare this recipe step by step</p>
              </div>
            </div>
          </div>
          
          {/* Spice Level Indicator */}
          <div className="mb-6 md:mb-8">
            <h3 className="text-base md:text-lg font-semibold mb-2">Spice Level</h3>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((level) => (
                <div 
                  key={level}
                  className={cn(
                    "h-2 md:h-3 flex-1 rounded-full",
                    level <= recipe.spiceLevel ? "bg-primary" : "bg-muted"
                  )}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Ingredients */}
          <div className="mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Ingredients</h2>
            <ul className="space-y-2">
              {recipe.ingredients?.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block h-2 w-2 mt-2 mr-3 rounded-full bg-primary"></span>
                  <span className="text-sm md:text-base">{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Instructions */}
          <div className="mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Instructions</h2>
            <ol className="space-y-4">
              {recipe.instructions?.map((instruction, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center h-5 w-5 md:h-6 md:w-6 rounded-full bg-primary text-white text-xs md:text-sm font-bold mr-3 shrink-0">
                    {index + 1}
                  </span>
                  <span className="flex-1 text-sm md:text-base">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
          
          {/* Chef Notes */}
          {recipe.chefNotes && (
            <div className="mb-6 md:mb-8 p-3 md:p-4 border border-primary/20 bg-primary/5 rounded-lg">
              <h3 className="text-base md:text-lg font-semibold mb-2">Chef's Notes</h3>
              <p className="italic text-foreground/80 text-sm md:text-base">{recipe.chefNotes}</p>
            </div>
          )}
        </div>
        
        {/* Sidebar */}
        <div className="lg:col-span-2">
          <div className="sticky top-24">
            {/* Add to Cart Card */}
            <div className="bg-card rounded-xl border border-border p-4 md:p-6 shadow-sm mb-6">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Ready to Cook?</h3>
              <p className="text-card-foreground/70 mb-4 md:mb-6 text-sm md:text-base">
                Get all ingredients for this recipe delivered straight to your door.
              </p>
              
              {/* Serving Size Slider with NEW label */}
              <div className="mb-5 md:mb-6 relative">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-sm md:text-base">Customize Serving Size</span>
                  <div className="flex items-center">
                    <span className="bg-primary/10 text-primary text-xs font-medium px-1.5 py-0.5 rounded mr-2">
                      NEW
                    </span>
                    <span className="font-semibold text-sm md:text-base">{servingCount} servings</span>
                  </div>
                </div>
                <Slider 
                  value={[servingCount]} 
                  min={1} 
                  max={8} 
                  step={1}
                  className="mb-6"
                  onValueChange={(value) => setServingCount(value[0])}
                  aria-label="Set serving size"
                />
                <p className="text-xs text-muted-foreground">
                  Adjust portions to match your needs before adding to cart
                </p>
              </div>
              
              {/* Price Info */}
              <div className="space-y-3 mb-5 md:mb-6 text-sm md:text-base">
                <div className="flex justify-between items-center">
                  <span>Price ({servingCount} servings)</span>
                  <span className="font-semibold">LKR {adjustedPrice}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-border">
                  <span className="font-bold">Total</span>
                  <span className="font-bold">LKR {adjustedPrice}</span>
                </div>
              </div>
              
              {/* Action Buttons */}
              <Button 
                className="w-full mb-3 text-sm md:text-base"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
              <Button 
                variant="outline" 
                className={cn(
                  "w-full text-sm md:text-base", 
                  isFavorite && "bg-primary/5 border-primary/20 text-primary"
                )}
                onClick={handleToggleFavorite}
              >
                <Heart className="mr-2 h-4 w-4" fill={isFavorite ? "currentColor" : "none"} />
                {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
              </Button>
            </div>
            
            {/* Nutrition Facts */}
            {recipe?.nutrition && (
              <div className="bg-card rounded-xl border border-border p-4 md:p-6 shadow-sm">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">Nutrition Facts</h3>
                <p className="text-xs md:text-sm text-card-foreground/70 mb-3 md:mb-4">Per serving</p>
                
                <div className="space-y-3 text-sm md:text-base">
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span>Calories</span>
                    <span className="font-semibold">{recipe.nutrition.calories} kcal</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span>Protein</span>
                    <span className="font-semibold">{recipe.nutrition.protein}g</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span>Carbohydrates</span>
                    <span className="font-semibold">{recipe.nutrition.carbs}g</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Fat</span>
                    <span className="font-semibold">{recipe.nutrition.fat}g</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
