
import { useState, useEffect } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Recipe } from '@/services/recipeService';

interface FilterOption {
  label: string;
  value: string;
  count?: number;
}

interface FilterGroup {
  name: string;
  options: FilterOption[];
}

interface FilterBarProps {
  onFilterChange: (filters: Record<string, string[]>) => void;
  onSearchChange: (searchTerm: string) => void;
  className?: string;
  recipes: Recipe[]; // Add recipes prop
}

const FilterBar = ({ onFilterChange, onSearchChange, className = '', recipes }: FilterBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({
    meal: [],
    dietary: [],
    allergens: [],
  });
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filterGroups, setFilterGroups] = useState<FilterGroup[]>([
    {
      name: 'meal',
      options: [
        { label: 'Breakfast', value: 'breakfast', count: 0 },
        { label: 'Lunch', value: 'lunch', count: 0 },
        { label: 'Dinner', value: 'dinner', count: 0 },
        { label: 'Dessert', value: 'dessert', count: 0 },
      ],
    },
    {
      name: 'dietary',
      options: [
        { label: 'Vegetarian', value: 'vegetarian', count: 0 },
        { label: 'Eggitarian', value: 'eggitarian', count: 0 },
        { label: 'Non-Vegetarian', value: 'non-vegetarian', count: 0 },
        { label: 'Vegan', value: 'vegan', count: 0 },
      ],
    },
    {
      name: 'allergens',
      options: [
        { label: 'Gluten-Free', value: 'gluten-free', count: 0 },
        { label: 'Nut-Free', value: 'nut-free', count: 0 },
        { label: 'Dairy-Free', value: 'dairy-free', count: 0 },
        { label: 'Shellfish-Free', value: 'shellfish-free', count: 0 },
      ],
    },
  ]);

  // Calculate filter counts based on actual recipe data
  useEffect(() => {
    if (recipes.length > 0) {
      setFilterGroups(prevGroups => {
        return prevGroups.map(group => {
          const updatedOptions = group.options.map(option => {
            // Count recipes that contain this tag
            const count = recipes.filter(recipe => 
              recipe.tags.includes(option.value)
            ).length;
            return { ...option, count };
          });
          return { ...group, options: updatedOptions };
        });
      });
    }
  }, [recipes]);

  // Handle search term changes with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearchChange(searchTerm);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [searchTerm, onSearchChange]);

  const handleFilterSelect = (group: string, value: string) => {
    setSelectedFilters((prev) => {
      const newFilters = { ...prev };
      
      if (newFilters[group].includes(value)) {
        newFilters[group] = newFilters[group].filter((item) => item !== value);
      } else {
        newFilters[group] = [...newFilters[group], value];
      }
      
      return newFilters;
    });
  };

  const handleClearFilters = () => {
    setSelectedFilters({
      meal: [],
      dietary: [],
      allergens: [],
    });
    setSearchTerm('');
    onFilterChange({});
    onSearchChange('');
  };

  const handleApplyFilters = () => {
    onFilterChange(selectedFilters);
    setIsFiltersOpen(false);
  };

  const countSelectedFilters = () => {
    return Object.values(selectedFilters).flat().length;
  };

  const removeFilter = (group: string, value: string) => {
    setSelectedFilters((prev) => {
      const newFilters = { ...prev };
      newFilters[group] = newFilters[group].filter((item) => item !== value);
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  return (
    <div className={`${className}`}>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search recipes..."
            className="pl-9 bg-background border-border"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
        >
          <Filter className="h-4 w-4" />
          <span>Filters</span>
          {countSelectedFilters() > 0 && (
            <Badge variant="secondary" className="ml-1 h-5 w-5 p-0 flex items-center justify-center">
              {countSelectedFilters()}
            </Badge>
          )}
        </Button>
      </div>

      {/* Selected filters display */}
      {countSelectedFilters() > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {Object.entries(selectedFilters).map(([group, values]) =>
            values.map((value) => {
              const label = filterGroups
                .find((g) => g.name === group)
                ?.options.find((o) => o.value === value)?.label;
              return (
                <Badge
                  key={`${group}-${value}`}
                  variant="outline"
                  className="py-1 px-2 gap-1"
                >
                  {label}
                  <button 
                    onClick={() => removeFilter(group, value)}
                    className="ml-1 h-4 w-4 rounded-full inline-flex items-center justify-center hover:bg-muted"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              );
            })
          )}
          {countSelectedFilters() > 0 && (
            <Button
              variant="ghost"
              size="sm"
              className="h-7 text-muted-foreground"
              onClick={handleClearFilters}
            >
              Clear all
            </Button>
          )}
        </div>
      )}

      {/* Filters Panel */}
      <div
        className={cn(
          'glass-morphism rounded-lg px-6 py-4 transition-all duration-300 overflow-hidden',
          isFiltersOpen ? 'max-h-[800px] opacity-100 mb-6' : 'max-h-0 opacity-0 pointer-events-none p-0'
        )}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filterGroups.map((group) => (
            <div key={group.name} className="space-y-2">
              <h3 className="font-medium text-lg capitalize">{group.name}</h3>
              <div className="space-y-1">
                {group.options.map((option) => (
                  <div key={option.value} className="flex items-center">
                    <input
                      type="checkbox"
                      id={option.value}
                      checked={selectedFilters[group.name].includes(option.value)}
                      onChange={() => handleFilterSelect(group.name, option.value)}
                      className="mr-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor={option.value} className="text-sm flex-grow">
                      {option.label}
                    </label>
                    {option.count !== undefined && (
                      <span className="text-xs text-muted-foreground">({option.count})</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-4 pt-4 border-t border-border">
          <Button variant="outline" className="mr-2" onClick={() => setIsFiltersOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleApplyFilters}>Apply Filters</Button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
