
import { useState, useEffect } from 'react';
import FilterBar from '@/components/FilterBar';
import RecipeGrid from '@/components/RecipeGrid';
import { Button } from '@/components/ui/button';

// Sample data for recipes
const allRecipes = [
  {
    id: '1',
    title: 'Authentic Sri Lankan Rice and Curry',
    image: '/assets/recipe-1.jpg',
    time: 45,
    servings: '2-4',
    spiceLevel: 3,
    tags: ['Non-Vegetarian', 'Classic'],
    description: 'A staple in Sri Lankan cuisine with fragrant rice served with a variety of flavorful curry dishes.',
  },
  {
    id: '2',
    title: 'Coconut Roti with Pol Sambol',
    image: '/assets/recipe-2.jpg',
    time: 30,
    servings: '2',
    spiceLevel: 2,
    tags: ['Vegetarian', 'Breakfast'],
    description: 'Delicious coconut flatbread served with a spicy coconut relish that's bursting with flavor.',
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
  },
];

const Recipes = () => {
  const [recipes, setRecipes] = useState(allRecipes);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const [visibleRecipes, setVisibleRecipes] = useState(6);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFilterChange = (filters: Record<string, string[]>) => {
    setSelectedFilters(filters);
    
    // In a real app, you would filter based on the selected filters
    // This is just a simple implementation for demonstration
    if (Object.values(filters).flat().length === 0) {
      setRecipes(allRecipes);
    } else {
      // Simple filtering logic (would be more complex in a real app)
      const filtered = allRecipes.filter(recipe => {
        // Check if any of the recipe's tags match any of the selected filters
        return Object.values(filters).flat().some(filter => 
          recipe.tags.includes(filter)
        );
      });
      setRecipes(filtered);
    }
    
    // Reset visible recipes count when filters change
    setVisibleRecipes(6);
  };

  const loadMore = () => {
    setVisibleRecipes(prev => Math.min(prev + 3, recipes.length));
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Our Sri Lankan Recipes</h1>
          <p className="text-lg text-foreground/70">
            Discover authentic Sri Lankan dishes with our pre-portioned ingredients and easy-to-follow recipes.
          </p>
        </div>
        
        <FilterBar onFilterChange={handleFilterChange} className="mb-8" />
        
        {recipes.length > 0 ? (
          <>
            <RecipeGrid recipes={recipes.slice(0, visibleRecipes)} />
            
            {visibleRecipes < recipes.length && (
              <div className="mt-12 text-center">
                <Button 
                  onClick={loadMore} 
                  variant="outline" 
                  className="px-8"
                >
                  Load More Recipes
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-2">No recipes found</h3>
            <p className="text-foreground/70">
              Try adjusting your filters to find more recipes.
            </p>
            <Button 
              onClick={() => handleFilterChange({})} 
              variant="outline" 
              className="mt-4"
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
