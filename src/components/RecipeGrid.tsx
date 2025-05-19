
import RecipeCard, { RecipeProps } from './RecipeCard';

interface RecipeGridProps {
  recipes: RecipeProps[];
  className?: string;
}

const RecipeGrid = ({ recipes, className = '' }: RecipeGridProps) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 ${className}`}>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))
      ) : (
        <div className="col-span-full text-center py-12 sm:py-16">
          <h3 className="text-lg sm:text-xl font-medium mb-2">No recipes available</h3>
          <p className="text-foreground/70">
            Try again later or adjust your search filters.
          </p>
        </div>
      )}
    </div>
  );
};

export default RecipeGrid;
