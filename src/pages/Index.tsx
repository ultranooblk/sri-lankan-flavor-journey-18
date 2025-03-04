
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import RecipeGrid from '@/components/RecipeGrid';
import SubscriptionPlans from '@/components/SubscriptionPlans';
import { Button } from '@/components/ui/button';
import { ChevronRight, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getFeaturedRecipes } from '@/services/recipeService';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredRecipes = getFeaturedRecipes();

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      <Features />
      
      <section className="section bg-background">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Featured Recipes</h2>
              <p className="text-lg text-foreground/70 max-w-2xl font-light">
                Discover our most popular authentic Sri Lankan dishes, each with pre-measured ingredients and step-by-step instructions.
              </p>
            </div>
            <Link to="/recipes">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                View All Recipes
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <RecipeGrid recipes={featuredRecipes} />
        </div>
      </section>
      
      <section className="section bg-muted/50 dark:bg-background/30 relative overflow-hidden">
        <div className="section-container relative z-10">
          <div className="mx-auto text-center md:max-w-2xl mb-8">
            <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full text-xs font-semibold bg-primary/10 text-primary">
              <Leaf className="h-3 w-3 mr-1" />
              <span>Sustainable Sourcing</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">From Farm to Your Doorstep</h2>
            <p className="text-lg text-foreground/70 mb-6 font-light">
              We partner directly with local Sri Lankan farmers to bring you the freshest, most authentic ingredients while supporting sustainable farming practices.
            </p>
            <Link to="/sustainability">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Learn About Our Impact
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
        <div 
          className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center opacity-25 md:opacity-50"
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1596797038530-2c107dc43d15?auto=format&fit=crop&w=800&h=600)`,
            clipPath: 'polygon(100px 0, 100% 0, 100% 100%, 0 100%)' 
          }}
        ></div>
      </section>
      
      <SubscriptionPlans />
      
      <section className="py-16 bg-hellofresh-500 dark:bg-hellofresh-700 text-white text-center">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display tracking-tight">Ready to Get Started?</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 font-light">
            Join thousands of Sri Lankan food enthusiasts who are already enjoying our authentic meal kits delivered to their doorstep.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-hellofresh-500 hover:bg-hellofresh-50 dark:hover:bg-white/90" size="lg">
              Browse Recipes
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-hellofresh-600 dark:hover:bg-hellofresh-600/80" size="lg">
              View Subscription Plans
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
