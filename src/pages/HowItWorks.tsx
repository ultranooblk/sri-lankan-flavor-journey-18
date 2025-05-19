
import { useEffect } from 'react';
import { Check, Video, Clock, Package, Heart, Calendar, Users } from 'lucide-react';

// Problem and solution component
const ProblemSolution = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
    <div className="bg-card p-6 sm:p-8 rounded-xl border border-border shadow">
      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">The Problem</h3>
      <ul className="space-y-4">
        {[
          'Lack of time or skills to cook Sri Lankan meals',
          'Difficulty in finding fresh, high-quality ingredients',
          'Hassle of meal planning, portioning, and grocery shopping',
          'Busy lifestyles demanding convenience without sacrificing health'
        ].map((item, i) => (
          <li key={i} className="flex items-start">
            <span className="bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-1 rounded-full mr-3 flex-shrink-0">
              🚫
            </span>
            <span className="text-foreground/80">{item}</span>
          </li>
        ))}
      </ul>
    </div>
    
    <div className="bg-card p-6 sm:p-8 rounded-xl border-primary border shadow">
      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">Our Solution</h3>
      <ul className="space-y-4">
        {[
          'No food waste, no hassle – pre-portioned ingredients',
          'Step-by-step cooking handbook & video tutorials',
          'Traditional Sri Lankan flavors made easy',
          'Flexible plans for individuals, couples, and families',
          'Supporting local farmers with fresh, sustainable ingredients'
        ].map((item, i) => (
          <li key={i} className="flex items-start">
            <span className="bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 p-1 rounded-full mr-3 flex-shrink-0">
              <Check className="h-4 w-4" />
            </span>
            <span className="text-foreground/80">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// Target audience component
const TargetAudience = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
    {[
      { icon: <Users className="h-6 w-6" />, title: 'Busy Professionals', description: 'Quick, convenient meals for those with little time to cook' },
      { icon: <Heart className="h-6 w-6" />, title: 'Health-conscious Individuals', description: 'Fresh ingredients with nutrition facts for balanced meals' },
      { icon: <Clock className="h-6 w-6" />, title: 'Food Enthusiasts', description: 'Authentic recipes for those who love exploring new cuisines' },
      { icon: <Package className="h-6 w-6" />, title: 'Expatriates & Tourists', description: 'A taste of Sri Lanka for those missing home or wanting to explore' }
    ].map((item, i) => (
      <div key={i} className="bg-card p-6 rounded-xl border border-border shadow-sm hover-lift transition-all text-center">
        <div className="h-12 w-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
          {item.icon}
        </div>
        <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
        <p className="text-foreground/70 text-sm">{item.description}</p>
      </div>
    ))}
  </div>
);

// Key features component
const KeyFeatures = () => {
  const features = [
    {
      title: "Flexible Ordering",
      description: "Choose your meals based on serving size and frequency",
      items: [
        "Order by serving size (1, 2, 4+ people)",
        "One-time purchase or subscription plans",
        "Swap out ingredients & customize"
      ]
    },
    {
      title: "Smart Recipe Library",
      description: "Browse our extensive collection of authentic recipes",
      items: [
        "40+ Authentic Sri Lankan recipes",
        "Filters: Vegetarian, Eggitarian, Non-Vegetarian",
        "Allergy filters: Gluten-free, Nut-free, Dairy-free, etc."
      ]
    },
    {
      title: "Detailed Recipe Support",
      description: "Everything you need to cook with confidence",
      items: [
        "High-quality images & descriptions",
        "Ingredient list with measurements",
        "Calories & nutrition facts",
        "Step-by-step instructions & spice level indicator",
        "Video tutorials for easy learning"
      ]
    },
    {
      title: "Personalized Experience",
      description: "A meal service that learns your preferences",
      items: [
        "Save favorite recipes",
        "Custom meal planning",
        "Smart recommendations based on past orders"
      ]
    },
    {
      title: "Subscription & Flexibility",
      description: "Plans that adapt to your changing needs",
      items: [
        "Weekly, bi-weekly, or monthly plans",
        "Modify, pause, or cancel anytime",
        "Swap meal kits before processing"
      ]
    },
    {
      title: "Easy Delivery & Payment",
      description: "Convenient options to receive and pay for your meals",
      items: [
        "Fast & fresh delivery across Sri Lanka",
        "Multiple payment options (COD, Bank Transfer, Card)"
      ]
    },
    {
      title: "Sustainable & Ethical Approach",
      description: "Good for you, good for Sri Lanka",
      items: [
        "Fresh & locally sourced ingredients",
        "Eco-friendly packaging to reduce waste",
        "Supporting Sri Lankan farmers"
      ]
    }
  ];

  return (
    <div className="space-y-8 md:space-y-12">
      {features.map((feature, index) => (
        <div key={index} className="bg-card p-6 sm:p-8 rounded-xl border border-border shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
              <span className="text-lg font-bold">{index + 1}</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
              <p className="text-foreground/70 mt-1">{feature.description}</p>
            </div>
          </div>
          <ul className="space-y-3 pl-4">
            {feature.items.map((item, i) => (
              <li key={i} className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

// USP component
const USP = () => (
  <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 sm:p-8 rounded-xl border border-primary/20">
    <h3 className="text-xl md:text-2xl font-bold text-center mb-8">What Makes Us Unique</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        "Authentic Sri Lankan flavors – Traditional recipes made easy",
        "Fresh & locally sourced ingredients – Supporting sustainable agriculture",
        "Flexible meal plans – Options for individuals, couples, and families",
        "Step-by-step video tutorials – Making cooking accessible for all",
        "Eco-friendly packaging – Reducing environmental impact"
      ].map((item, i) => (
        <div key={i} className="flex items-start">
          <div className="bg-primary text-white p-1 rounded-full mr-3 flex-shrink-0">
            <Check className="h-4 w-4" />
          </div>
          <span className="text-foreground/80 text-sm md:text-base">{item}</span>
        </div>
      ))}
    </div>
  </div>
);

// Brand tone component
const BrandTone = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {[
      { emoji: "🤝", text: "Friendly & professional – making cooking simple & fun" },
      { emoji: "💡", text: "Engaging & informative – helping users cook confidently" },
      { emoji: "🛡️", text: "Trustworthy & reliable – ensuring top quality & service" }
    ].map((item, i) => (
      <div key={i} className="bg-card p-5 rounded-xl border border-border flex items-center">
        <span className="text-2xl mr-3">{item.emoji}</span>
        <span className="text-foreground/80 text-sm">{item.text}</span>
      </div>
    ))}
  </div>
);

// Steps component
const HowItWorksSteps = () => (
  <div className="relative">
    {/* Connecting line */}
    <div className="absolute left-[26px] top-10 bottom-10 w-1 bg-primary/20 hidden sm:block"></div>
    
    <div className="space-y-12">
      {[
        { 
          number: 1, 
          title: "Choose Your Recipes", 
          description: "Browse our authentic Sri Lankan recipe collection and select what appeals to you based on your dietary preferences and tastes.",
          image: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&q=80&w=600"
        },
        { 
          number: 2, 
          title: "Select Your Plan", 
          description: "Pick a flexible plan that suits your needs - from individual portions to family-sized meals, one-time orders or recurring subscriptions.",
          image: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?auto=format&fit=crop&q=80&w=600"
        },
        { 
          number: 3, 
          title: "Receive Your Ingredients", 
          description: "We deliver fresh, pre-portioned ingredients right to your doorstep in eco-friendly packaging.",
          image: "https://images.unsplash.com/photo-1584473457493-87c449408b81?auto=format&fit=crop&q=80&w=600"
        },
        { 
          number: 4, 
          title: "Cook & Enjoy", 
          description: "Follow our easy step-by-step instructions or video tutorials to prepare authentic Sri Lankan meals in your own kitchen.",
          image: "https://images.unsplash.com/photo-1513135467880-6c41603bfdd8?auto=format&fit=crop&q=80&w=600"
        }
      ].map((step, i) => (
        <div key={i} className="flex flex-col sm:flex-row gap-8">
          <div className="flex items-start sm:items-center">
            <div className="h-14 w-14 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold z-10">
              {step.number}
            </div>
          </div>
          <div className="flex-1 bg-card rounded-xl overflow-hidden border border-border shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-2">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="p-6 md:col-span-3">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-foreground/70">{step.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const HowItWorks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-16 pb-20">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">How Cook Me Works</h1>
            <p className="text-xl text-white/90">
              Experience authentic Sri Lankan cuisine in just a few simple steps
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Your Journey to Sri Lankan Flavors</h2>
            <HowItWorksSteps />
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-16 bg-muted/50 dark:bg-background/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">The Problem & Our Solution</h2>
          <ProblemSolution />
        </div>
      </section>
      
      {/* Target Audience */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Who Cook Me Is For</h2>
          <TargetAudience />
        </div>
      </section>
      
      {/* Key Features */}
      <section className="py-16 bg-muted/50 dark:bg-background/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Key Features</h2>
          <KeyFeatures />
        </div>
      </section>
      
      {/* USP */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <USP />
        </div>
      </section>
      
      {/* Brand Tone */}
      <section className="py-16 bg-muted/50 dark:bg-background/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Brand Values</h2>
          <BrandTone />
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
