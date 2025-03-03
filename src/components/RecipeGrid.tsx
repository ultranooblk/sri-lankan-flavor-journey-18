
import RecipeCard, { RecipeProps } from './RecipeCard';

interface RecipeGridProps {
  recipes: RecipeProps[];
  className?: string;
}

const RecipeGrid = ({ recipes, className = '' }: RecipeGridProps) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} {...recipe} />
      ))}
    </div>
  );
};

export default RecipeGrid;
