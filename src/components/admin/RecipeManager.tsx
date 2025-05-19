
import { useState, useEffect } from 'react';
import { Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RecipeTable from '@/components/admin/RecipeTable';
import RecipeForm from '@/components/admin/RecipeForm';
import { Recipe, allRecipes } from '@/data/recipes';

const RecipeManager = () => {
  const [recipes, setRecipes] = useState<Recipe[]>(allRecipes);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    if (searchQuery) {
      const filteredRecipes = allRecipes.filter(recipe => 
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setRecipes(filteredRecipes);
    } else {
      setRecipes(allRecipes);
    }
  }, [searchQuery]);

  const handleCreateRecipe = () => {
    setCurrentRecipe(null);
    setIsFormOpen(true);
  };

  const handleEditRecipe = (recipe: Recipe) => {
    setCurrentRecipe(recipe);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setCurrentRecipe(null);
  };

  const handleSaveRecipe = (recipe: Recipe) => {
    // In a real app, this would make an API call
    if (currentRecipe) {
      // Update existing recipe
      const updatedRecipes = recipes.map(r => 
        r.id === recipe.id ? recipe : r
      );
      setRecipes(updatedRecipes);
    } else {
      // Create new recipe with unique ID
      const newRecipe = {
        ...recipe,
        id: String(Date.now())
      };
      setRecipes([...recipes, newRecipe]);
    }
    setIsFormOpen(false);
    setCurrentRecipe(null);
  };

  const handleDeleteRecipe = (id: string) => {
    // In a real app, this would make an API call
    const updatedRecipes = recipes.filter(recipe => recipe.id !== id);
    setRecipes(updatedRecipes);
  };

  return (
    <div className="space-y-6">
      {isFormOpen ? (
        <RecipeForm 
          recipe={currentRecipe} 
          onSave={handleSaveRecipe} 
          onCancel={handleCloseForm} 
        />
      ) : (
        <>
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search recipes..." 
                className="pl-8"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
            <Button onClick={handleCreateRecipe}>
              <Plus className="mr-2 h-4 w-4" />
              Add Recipe
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recipes</CardTitle>
            </CardHeader>
            <CardContent>
              <RecipeTable 
                recipes={recipes} 
                onEdit={handleEditRecipe} 
                onDelete={handleDeleteRecipe} 
              />
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

export default RecipeManager;
