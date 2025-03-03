
import { useState } from 'react';
import { Check, Info, Users, Calendar, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PlanSelections {
  portions: number;
  frequency: 'weekly' | 'bi-weekly' | 'monthly';
  recipes: number;
}

const SubscriptionPlans = () => {
  const [selections, setSelections] = useState<PlanSelections>({
    portions: 2,
    frequency: 'weekly',
    recipes: 3
  });

  const handlePortionChange = (portions: number) => {
    setSelections(prev => ({ ...prev, portions }));
  };

  const handleFrequencyChange = (frequency: 'weekly' | 'bi-weekly' | 'monthly') => {
    setSelections(prev => ({ ...prev, frequency }));
  };

  const handleRecipesChange = (recipes: number) => {
    setSelections(prev => ({ ...prev, recipes }));
  };

  // Calculate price based on selections
  const calculatePrice = () => {
    const basePrice = 1200; // Base price per recipe portion
    const portionMultiplier = selections.portions;
    const recipeMultiplier = selections.recipes;
    let frequencyDiscount = 1.0;
    
    // Apply discounts based on frequency
    switch(selections.frequency) {
      case 'bi-weekly': 
        frequencyDiscount = 0.95; // 5% discount
        break;
      case 'monthly':
        frequencyDiscount = 0.9; // 10% discount
        break;
      default:
        frequencyDiscount = 1.0;
    }
    
    return Math.round(basePrice * portionMultiplier * recipeMultiplier * frequencyDiscount);
  };

  const price = calculatePrice();

  return (
    <section className="py-20 bg-gradient-to-br from-white via-white to-hellofresh-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-hellofresh-700">Customize Your Plan</h2>
          <p className="text-lg text-foreground/70">
            Build your perfect meal plan by selecting portions, frequency, and number of recipes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6 md:p-8">
          <div className="grid gap-10 md:gap-12">
            {/* Portion Selection */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Users className="mr-2 h-5 w-5 text-hellofresh-500" />
                How many people are you cooking for?
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {[2, 4, 6].map((option) => (
                  <button
                    key={option}
                    className={cn(
                      "flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all",
                      selections.portions === option
                        ? "border-hellofresh-500 bg-hellofresh-50 text-hellofresh-700"
                        : "border-border hover:border-hellofresh-300"
                    )}
                    onClick={() => handlePortionChange(option)}
                  >
                    <span className="text-2xl font-bold">{option}</span>
                    <span className="text-sm text-foreground/70">portions</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Delivery Frequency */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-hellofresh-500" />
                How often would you like deliveries?
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: 'weekly', label: 'Weekly' },
                  { value: 'bi-weekly', label: 'Bi-Weekly' },
                  { value: 'monthly', label: 'Monthly' }
                ].map((option) => (
                  <button
                    key={option.value}
                    className={cn(
                      "flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all",
                      selections.frequency === option.value
                        ? "border-hellofresh-500 bg-hellofresh-50 text-hellofresh-700"
                        : "border-border hover:border-hellofresh-300"
                    )}
                    onClick={() => handleFrequencyChange(option.value as any)}
                  >
                    <span className="text-lg font-bold">{option.label}</span>
                    {option.value === 'weekly' && <span className="text-xs text-foreground/70">Every week</span>}
                    {option.value === 'bi-weekly' && <span className="text-xs text-foreground/70">Every 2 weeks</span>}
                    {option.value === 'monthly' && <span className="text-xs text-foreground/70">Once a month</span>}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Recipes per Delivery */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Package className="mr-2 h-5 w-5 text-hellofresh-500" />
                How many recipes per delivery?
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {[3, 4, 5].map((option) => (
                  <button
                    key={option}
                    className={cn(
                      "flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all",
                      selections.recipes === option
                        ? "border-hellofresh-500 bg-hellofresh-50 text-hellofresh-700"
                        : "border-border hover:border-hellofresh-300"
                    )}
                    onClick={() => handleRecipesChange(option)}
                  >
                    <span className="text-2xl font-bold">{option}</span>
                    <span className="text-sm text-foreground/70">recipes</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Summary and Pricing */}
            <div className="bg-gradient-to-r from-hellofresh-50 to-white p-6 rounded-xl border border-hellofresh-100">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-hellofresh-700 mb-2">Your Customized Plan</h3>
                  <ul className="space-y-1 mb-4 md:mb-0">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-hellofresh-500 mr-2" />
                      <span>{selections.portions} portions per meal</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-hellofresh-500 mr-2" />
                      <span>{selections.recipes} recipes per delivery</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-hellofresh-500 mr-2" />
                      <span>{selections.frequency === 'weekly' ? 'Weekly' : selections.frequency === 'bi-weekly' ? 'Bi-weekly' : 'Monthly'} delivery</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-hellofresh-500 mr-2" />
                      <span>Free delivery</span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-center md:text-right">
                  <div className="text-hforange-500 mb-1">
                    {selections.frequency === 'bi-weekly' && <span className="text-xs font-semibold px-2 py-1 bg-hellofresh-50 rounded-full">5% OFF</span>}
                    {selections.frequency === 'monthly' && <span className="text-xs font-semibold px-2 py-1 bg-hellofresh-50 rounded-full">10% OFF</span>}
                  </div>
                  <div className="flex items-baseline justify-center md:justify-end">
                    <span className="text-3xl font-bold text-hellofresh-700">LKR {price}</span>
                    <span className="text-sm text-foreground/70 ml-1">
                      /delivery
                    </span>
                  </div>
                  <div className="mt-4">
                    <Button className="bg-hellofresh-500 hover:bg-hellofresh-600 text-white w-full md:w-auto">
                      Subscribe Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="flex items-center justify-center text-sm text-foreground/70">
            <Info className="h-4 w-4 mr-2 text-hellofresh-500" />
            All plans include the option to customize your meal preferences and dietary restrictions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
