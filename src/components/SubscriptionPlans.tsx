
import { useState } from 'react';
import { Check, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PlanProps {
  name: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
  onClick: () => void;
}

const Plan = ({ name, price, description, features, popular = false, onClick }: PlanProps) => (
  <div 
    className={cn(
      "rounded-xl p-6 transition-all duration-300 hover-lift",
      popular 
        ? "border-2 border-primary relative bg-primary/5" 
        : "border border-border bg-white"
    )}
  >
    {popular && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full px-3 py-1 text-xs font-medium">
        Most Popular
      </div>
    )}

    <div className="mb-4">
      <h3 className="text-xl font-display font-bold">{name}</h3>
      <p className="text-foreground/70 text-sm mt-1">{description}</p>
    </div>
    
    <div className="mb-6">
      <div className="flex items-baseline">
        <span className="text-3xl font-bold">₹{price}</span>
        <span className="text-foreground/70 ml-2 text-sm">/week</span>
      </div>
    </div>
    
    <ul className="space-y-3 mb-6">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start">
          <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
            <Check className="h-3 w-3" />
          </div>
          <span className="text-sm">{feature}</span>
        </li>
      ))}
    </ul>
    
    <Button 
      onClick={onClick}
      className={cn(
        "w-full",
        popular ? "bg-primary hover:bg-primary/90" : "bg-primary/80 hover:bg-primary"
      )}
    >
      Subscribe Now
    </Button>
  </div>
);

const SubscriptionPlans = () => {
  const plans = [
    {
      name: "Weekly",
      price: 1299,
      description: "Perfect for regular home cooking",
      features: [
        "3 meals per week for 2 people",
        "Free delivery",
        "Weekly menu selection",
        "Easy recipe swapping",
        "Cancel anytime"
      ]
    },
    {
      name: "Bi-Weekly",
      price: 1199,
      description: "Our most popular plan",
      features: [
        "3 meals every 2 weeks for 2 people",
        "Free delivery",
        "Early menu access",
        "Recipe customization",
        "Exclusive recipes",
        "Cancel anytime"
      ],
      popular: true
    },
    {
      name: "Monthly",
      price: 1099,
      description: "Most flexible option",
      features: [
        "4 meals per month for 2 people",
        "Free delivery",
        "Complete flexibility",
        "Premium recipe access",
        "Recipe archive access",
        "Cancel anytime"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Perfect Plan</h2>
          <p className="text-lg text-foreground/70">
            Flexible subscription options to fit your lifestyle. Pause, skip, or cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Plan
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              popular={plan.popular}
              onClick={() => console.log(`Selected ${plan.name} plan`)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="flex items-center justify-center text-sm text-foreground/70">
            <Info className="h-4 w-4 mr-2" />
            All plans include the option to customize your meal preferences and dietary restrictions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
