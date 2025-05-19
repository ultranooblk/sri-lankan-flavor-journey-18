
import { useState } from 'react';
import { Check, Info, ArrowRight } from 'lucide-react';
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

const popularPlans = [
  {
    id: 'weekly-2p',
    name: 'Starter Experience',
    description: 'Perfect for couples or individuals wanting to explore Sri Lankan cuisine',
    price: 3600,
    details: '2 portions, 3 recipes per week',
    features: [
      'Free delivery',
      'Weekly recipe rotation',
      'Skip or cancel anytime',
      'Recipe cards included'
    ],
    popular: false
  },
  {
    id: 'weekly-4p',
    name: 'Family Feast',
    description: 'Ideal for families or meal prep enthusiasts',
    price: 6800,
    details: '4 portions, 4 recipes per week',
    features: [
      'Free delivery',
      'Weekly recipe rotation',
      'Skip or cancel anytime',
      'Recipe cards included',
      'Premium recipe options'
    ],
    popular: true
  },
  {
    id: 'monthly-4p',
    name: 'Monthly Explorer',
    description: 'For adventurous eaters who love variety',
    price: 7200,
    details: '4 portions, 5 recipes monthly',
    features: [
      'Free delivery',
      'Monthly curated box',
      'Skip or cancel anytime',
      'Recipe cards included',
      'Premium recipe options',
      '10% discount on total price'
    ],
    popular: false
  }
];

const SubscriptionPlans = () => {
  const [selectedPlanId, setSelectedPlanId] = useState('weekly-4p');

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-muted/50 dark:from-background dark:to-background/80">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Choose Your Perfect Plan</h2>
          <p className="text-lg text-foreground/70">
            Discover authentic Sri Lankan flavors with our carefully curated meal plans
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {popularPlans.map((plan) => (
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
                  <span className="text-sm text-foreground/70 ml-1">/delivery</span>
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
              <CardFooter>
                <Button 
                  className={cn(
                    "w-full",
                    selectedPlanId === plan.id
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-card hover:bg-muted border border-input text-card-foreground"
                  )}
                  onClick={() => setSelectedPlanId(plan.id)}
                >
                  {selectedPlanId === plan.id ? "Selected" : "Select Plan"}
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
          >
            Subscribe Now
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <div className="mt-8 text-center">
            <p className="flex items-center justify-center text-sm text-foreground/70">
              <Info className="h-4 w-4 mr-2 text-primary" />
              All plans include the option to customize your meal preferences and dietary restrictions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
