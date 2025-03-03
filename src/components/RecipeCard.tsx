
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface RecipeProps {
  id: string;
  title: string;
  image: string;
  time: number;
  servings: string;
  spiceLevel: number;
  tags: string[];
  description: string;
}

const RecipeCard = ({
  id,
  title,
  image,
  time,
  servings,
  spiceLevel,
  tags,
  description
}: RecipeProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group rounded-xl overflow-hidden bg-card border border-border shadow-sm hover-lift"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/recipes/${id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className={cn(
              "w-full h-full object-cover transition-transform duration-700",
              isHovered ? "scale-110" : "scale-100"
            )}
          />
          <div className="absolute inset-0 recipe-gradient opacity-60" />
          
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 2).map((tag, i) => (
                <Badge key={i} variant="secondary" className="bg-white/80 dark:bg-black/50 text-xs font-medium text-foreground dark:text-gray-200">
                  {tag}
                </Badge>
              ))}
              {tags.length > 2 && (
                <Badge variant="secondary" className="bg-white/80 dark:bg-black/50 text-xs font-medium text-foreground dark:text-gray-200">
                  +{tags.length - 2}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </Link>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display text-lg font-medium line-clamp-1 text-card-foreground">
            <Link to={`/recipes/${id}`} className="hover:text-hellofresh-500 dark:hover:text-hellofresh-400 transition-colors">
              {title}
            </Link>
          </h3>
          
          <div className={`spice-indicator level-${spiceLevel}`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <p className="text-card-foreground/70 text-sm line-clamp-2 mb-4">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex space-x-3 text-sm text-card-foreground/70">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{time} min</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>{servings}</span>
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-hellofresh-500 hover:text-hellofresh-600 hover:bg-hellofresh-50 dark:text-hellofresh-400 dark:hover:text-hellofresh-300 dark:hover:bg-hellofresh-950/30"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
