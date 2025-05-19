
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import RecipeGrid from '@/components/RecipeGrid';
import SubscriptionPlans from '@/components/SubscriptionPlans';
import TextureOverlay from '@/components/TextureOverlay';
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
    <div className="min-h-screen bg-background relative overflow-hidden">
      <TextureOverlay />
      
      <div className="absolute top-0 left-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 -translate-x-1/2 -translate-y-1/2 opacity-25 pointer-events-none z-0">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="hsl(var(--primary) / 0.1)" d="M44.7,-76.4C58.8,-69.2,71.8,-58.8,79.6,-45.2C87.4,-31.7,90,-15.8,88.6,-0.8C87.3,14.2,82,28.3,74.2,42C66.3,55.7,55.9,68.9,42.2,75.9C28.4,82.9,11.2,83.6,-3.9,89.5C-19,95.5,-38,106.6,-54.8,104.9C-71.5,103.1,-85.9,88.4,-93.2,71.3C-100.6,54.2,-100.8,34.6,-100.9,16.9C-101,0.8,-101,-17.6,-93.5,-36.6C-86,-55.7,-71,-75.3,-53.2,-80.7C-35.3,-86.2,-14.7,-77.6,0.9,-79.2C16.6,-80.8,33.2,-92.5,45.2,-89.1C57.3,-85.8,70.8,-67.3,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 translate-x-1/3 translate-y-1/4 opacity-15 pointer-events-none z-0">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="hsl(var(--accent) / 0.15)" d="M48.2,-75.3C61.1,-69,69.4,-53.3,74.9,-37.5C80.5,-21.7,83.2,-5.9,81.9,9.7C80.5,25.4,75,40.8,65.4,54.1C55.8,67.4,42,78.5,26.5,83.2C11,87.8,-6.1,86.1,-19.7,79.4C-33.4,72.6,-43.6,60.9,-53.8,48.8C-63.9,36.8,-73.9,24.4,-78.3,9.9C-82.7,-4.7,-81.3,-21.3,-73.9,-34.4C-66.5,-47.4,-53,-57,-39.7,-62.7C-26.3,-68.3,-13.1,-70,-0.7,-68.9C11.8,-67.7,23.5,-64,35.5,-63.8C47.6,-63.6,60,-63.9,48.2,-75.3Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <Hero />
      
      <Features />
      
      <section className="section bg-background relative z-10">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 md:mb-12">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-foreground">Our Featured Recipes</h2>
              <p className="text-base sm:text-lg text-foreground/70 max-w-2xl font-light">
                Discover our most popular authentic Sri Lankan dishes, each with pre-measured ingredients and step-by-step instructions.
              </p>
            </div>
            <Link to="/recipes" className="w-full md:w-auto flex justify-center">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 w-full md:w-auto">
                View All Recipes
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <RecipeGrid recipes={featuredRecipes} />
        </div>
      </section>
      
      <section className="section bg-muted/50 dark:bg-background/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-noise-pattern mix-blend-overlay pointer-events-none z-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
        ></div>
        
        <div className="section-container relative z-10">
          <div className="mx-auto text-center md:max-w-2xl mb-8">
            <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full text-xs font-semibold bg-primary/10 text-primary">
              <Leaf className="h-3 w-3 mr-1" />
              <span>Sustainable Sourcing</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">From Farm to Your Doorstep</h2>
            <p className="text-base sm:text-lg text-foreground/70 mb-6 font-light">
              We partner directly with local Sri Lankan farmers to bring you the freshest, most authentic ingredients while supporting sustainable farming practices.
            </p>
            <Link to="/sustainability" className="inline-block w-full sm:w-auto">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg w-full sm:w-auto">
                Learn About Our Impact
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
        <div 
          className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center opacity-25 md:opacity-50 hidden md:block"
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1596797038530-2c107dc43d15?auto=format&fit=crop&w=800&h=600)`,
            clipPath: 'polygon(100px 0, 100% 0, 100% 100%, 0 100%)' 
          }}
        ></div>
      </section>
      
      <SubscriptionPlans />
      
      <section className="py-12 sm:py-16 bg-primary dark:bg-primary/90 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none z-0"
             style={{
               backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%, transparent)`,
               backgroundSize: '50px 50px'
             }}
        ></div>
        
        <div className="section-container relative z-10 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 font-display tracking-tight">Ready to Get Started?</h2>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto mb-6 sm:mb-8 font-light">
            Join thousands of Sri Lankan food enthusiasts who are already enjoying our authentic meal kits delivered to their doorstep.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-white text-primary hover:bg-secondary dark:hover:bg-white/90 shadow-lg w-full sm:w-auto" 
              size="lg"
              asChild
            >
              <Link to="/recipes">Browse Recipes</Link>
            </Button>
            <Button 
              variant="outline" 
              className="border-white border-2 text-white bg-transparent hover:bg-white/20 dark:hover:bg-white/10 w-full sm:w-auto" 
              size="lg"
              asChild
            >
              <Link to="/subscription-plans">
                <span className="text-white font-medium">View Subscription Plans</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
