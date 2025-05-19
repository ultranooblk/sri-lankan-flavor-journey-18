
import { useState, useEffect } from 'react';
import FilterBar from '@/components/FilterBar';
import RecipeGrid from '@/components/RecipeGrid';
import { Button } from '@/components/ui/button';
import { allRecipes } from '@/data/recipes';
import { Loader2 } from "lucide-react";

const Recipes = () => {
  const [recipes, setRecipes] = useState(allRecipes);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const [visibleRecipes, setVisibleRecipes] = useState(6);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate loading state for better UX
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Handle both filters and search together
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      let filteredRecipes = allRecipes;
      
      // Apply search filter if searchTerm exists
      if (searchTerm.trim()) {
        filteredRecipes = filteredRecipes.filter(recipe => 
          recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
          recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        );
      }
      
      // Apply tag filters if any are selected
      const selectedTags = Object.values(selectedFilters).flat();
      if (selectedTags.length > 0) {
        filteredRecipes = filteredRecipes.filter(recipe => 
          selectedTags.some(filter => recipe.tags.includes(filter))
        );
      }
      
      setRecipes(filteredRecipes);
      setVisibleRecipes(6);
      setIsLoading(false);
    }, 300);
  }, [selectedFilters, searchTerm]);

  const handleFilterChange = (filters: Record<string, string[]>) => {
    setSelectedFilters(filters);
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  const loadMore = () => {
    setVisibleRecipes(prev => Math.min(prev + 3, recipes.length));
  };

  return (
    <div className="min-h-screen pt-16 sm:pt-20">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Explore Our Sri Lankan Recipes</h1>
          <p className="text-base sm:text-lg text-foreground/70">
            Discover authentic Sri Lankan dishes with our pre-portioned ingredients and easy-to-follow recipes.
          </p>
        </div>
        
        <FilterBar 
          onFilterChange={handleFilterChange} 
          onSearchChange={handleSearchChange}
          className="mb-6 sm:mb-8"
          recipes={allRecipes} // Pass all recipes to calculate filter counts
        />
        
        {isLoading ? (
          <div className="flex justify-center items-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : recipes.length > 0 ? (
          <>
            <RecipeGrid recipes={recipes.slice(0, visibleRecipes)} />
            
            {visibleRecipes < recipes.length && (
              <div className="mt-8 sm:mt-12 text-center">
                <Button 
                  onClick={loadMore} 
                  variant="outline" 
                  className="px-6 sm:px-8 w-full sm:w-auto"
                >
                  Load More Recipes
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12 sm:py-16">
            <h3 className="text-lg sm:text-xl font-medium mb-2">No recipes found</h3>
            <p className="text-foreground/70">
              Try adjusting your filters or search term to find more recipes.
            </p>
            <Button 
              onClick={() => {
                handleFilterChange({});
                handleSearchChange('');
              }} 
              variant="outline" 
              className="mt-4 w-full sm:w-auto"
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recipes;
