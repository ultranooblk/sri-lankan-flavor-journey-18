
import { useState } from 'react';
import { Check, Info, ArrowRight, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCart } from '@/hooks/use-cart';
import { toast } from '@/hooks/use-toast';

const mealKits = [
  {
    id: 'starter-kit',
    name: 'Starter Kit',
    description: 'Perfect for couples or individuals wanting to explore Sri Lankan cuisine',
    price: 3600,
    details: '2 portions, 3 recipes',
    features: [
      'Premium ingredients',
      'Recipe cards included',
      'Free delivery',
      'Full refund if not satisfied'
    ],
    popular: false
  },
  {
    id: 'family-kit',
    name: 'Family Kit',
    description: 'Ideal for families or meal prep enthusiasts',
    price: 6800,
    details: '4 portions, 4 recipes',
    features: [
      'Premium ingredients',
      'Recipe cards included',
      'Free delivery',
      'Full refund if not satisfied',
      'Premium recipe options'
    ],
    popular: true
  },
  {
    id: 'deluxe-kit',
    name: 'Deluxe Explorer Kit',
    description: 'For adventurous eaters who love variety',
    price: 7200,
    details: '4 portions, 5 recipes',
    features: [
      'Premium ingredients',
      'Recipe cards included',
      'Free delivery',
      'Full refund if not satisfied',
      'Premium recipe options',
      'Specialty spice collection'
    ],
    popular: false
  }
];

const SubscriptionPlans = () => {
  const [selectedPlanId, setSelectedPlanId] = useState('family-kit');
  const { addToCart } = useCart();

  const handleBuyNow = (plan) => {
    addToCart({
      id: plan.id,
      title: plan.name,
      image: '/placeholder.svg',
      price: plan.price
    });
    
    toast({
      title: "Added to cart",
      description: `${plan.name} has been added to your cart`,
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-muted/50 dark:from-background dark:to-background/80">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Meal Kits</h2>
          <p className="text-lg text-foreground/70">
            Discover authentic Sri Lankan flavors with our carefully curated meal kits
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {mealKits.map((plan) => (
            <Card 
              key={plan.id}
              className={cn(
                "relative overflow-hidden transition-all border-2",
                selectedPlanId === plan.id 
                  ? "border-primary shadow-lg shadow-primary/10" 
                  : "border-border hover:border-primary/50"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription className="min-h-12">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-foreground">LKR {plan.price.toLocaleString()}</span>
                </div>
                <div className="text-sm text-foreground/70 mt-1">{plan.details}</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <Button 
                  className={cn(
                    "w-full",
                    selectedPlanId === plan.id
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-card hover:bg-muted border border-input text-card-foreground"
                  )}
                  onClick={() => setSelectedPlanId(plan.id)}
                >
                  {selectedPlanId === plan.id ? "Selected" : "Select Kit"}
                </Button>
                
                <Button 
                  onClick={() => handleBuyNow(plan)}
                  className={selectedPlanId === plan.id ? "w-full" : "w-full bg-muted/70 hover:bg-muted text-foreground/70"}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Ready to start your culinary journey?</h3>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white mx-auto group" 
            size="lg"
            onClick={() => {
              const selectedPlan = mealKits.find(plan => plan.id === selectedPlanId);
              if (selectedPlan) {
                handleBuyNow(selectedPlan);
              }
            }}
          >
            Buy Now
            <ShoppingCart className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
          </Button>
          
          <div className="mt-8 text-center">
            <p className="flex items-center justify-center text-sm text-foreground/70">
              <Info className="h-4 w-4 mr-2 text-primary" />
              All kits include premium ingredients and recipe instructions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
