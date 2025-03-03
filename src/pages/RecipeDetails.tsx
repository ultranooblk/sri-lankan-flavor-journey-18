
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, ChevronLeft, Info, ShoppingCart, Heart, Share2 } from 'lucide-react';
import { getRecipeById, Recipe } from '@/services/recipeService';
import { cn } from '@/lib/utils';

const RecipeDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (id) {
      const foundRecipe = getRecipeById(id);
      if (foundRecipe) {
        setRecipe(foundRecipe);
      }
    }
    setLoading(false);
  }, [id]);

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

  return (
    <div className="container mx-auto px-4 py-12">
      <Button 
        variant="ghost" 
        className="mb-6 hover:bg-transparent group" 
        onClick={() => navigate('/recipes')}
      >
        <ChevronLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to Recipes
      </Button>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Main Content - 3 columns */}
        <div className="lg:col-span-3">
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-display">{recipe.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {recipe.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="font-medium">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <p className="text-foreground/80 text-lg mb-6">{recipe.description}</p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-primary" />
                <span><strong>{recipe.time}</strong> min</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-primary" />
                <span><strong>{recipe.servings}</strong> servings</span>
              </div>
              <div className="flex items-center">
                <Info className="h-5 w-5 mr-2 text-primary" />
                <span>Spice Level: <strong>{recipe.spiceLevel}/5</strong></span>
              </div>
            </div>
          </div>
          
          <div className="relative h-96 rounded-xl overflow-hidden mb-8">
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute top-4 right-4 flex space-x-2">
              <Button size="icon" className="rounded-full bg-white/80 hover:bg-white text-primary">
                <Heart className="h-5 w-5" />
              </Button>
              <Button size="icon" className="rounded-full bg-white/80 hover:bg-white text-primary">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="spice-indicator-full mb-8">
            <h3 className="text-lg font-semibold mb-2">Spice Level</h3>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((level) => (
                <div 
                  key={level}
                  className={cn(
                    "h-3 flex-1 rounded-full",
                    level <= recipe.spiceLevel ? "bg-primary" : "bg-muted"
                  )}
                ></div>
              ))}
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
            <ul className="space-y-2">
              {recipe.ingredients?.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block h-2 w-2 mt-2 mr-3 rounded-full bg-primary"></span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Instructions</h2>
            <ol className="space-y-4">
              {recipe.instructions?.map((instruction, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary text-white text-sm font-bold mr-3">
                    {index + 1}
                  </span>
                  <span className="flex-1">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
          
          {recipe.chefNotes && (
            <div className="mb-8 p-4 border border-primary/20 bg-primary/5 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Chef's Notes</h3>
              <p className="italic text-foreground/80">{recipe.chefNotes}</p>
            </div>
          )}
        </div>
        
        {/* Sidebar - 2 columns */}
        <div className="lg:col-span-2">
          <div className="sticky top-24">
            <div className="bg-card rounded-xl border border-border p-6 shadow-sm mb-6">
              <h3 className="text-xl font-bold mb-4">Ready to Cook?</h3>
              <p className="text-card-foreground/70 mb-6">
                Get all ingredients for this recipe delivered straight to your door.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span>Base price ({recipe.servings})</span>
                  <span className="font-semibold">$18.99</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Delivery</span>
                  <span className="font-semibold">$4.99</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-border">
                  <span className="font-bold">Total</span>
                  <span className="font-bold">$23.98</span>
                </div>
              </div>
              
              <Button className="w-full mb-3">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
              <Button variant="outline" className="w-full">
                Add to Favorites
              </Button>
            </div>
            
            {recipe.nutrition && (
              <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Nutrition Facts</h3>
                <p className="text-sm text-card-foreground/70 mb-4">Per serving</p>
                
                <div className="space-y-3">
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
