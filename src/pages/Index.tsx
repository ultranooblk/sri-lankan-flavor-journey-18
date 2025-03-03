
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import RecipeGrid from '@/components/RecipeGrid';
import SubscriptionPlans from '@/components/SubscriptionPlans';
import { Button } from '@/components/ui/button';
import { ChevronRight, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample data for featured recipes
const featuredRecipes = [
  {
    id: '1',
    title: 'Authentic Sri Lankan Rice and Curry',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107dc43d15?auto=format&fit=crop&w=600&h=400',
    time: 45,
    servings: '2-4',
    spiceLevel: 3,
    tags: ['Non-Vegetarian', 'Classic'],
    description: 'A staple in Sri Lankan cuisine with fragrant rice served with a variety of flavorful curry dishes.',
  },
  {
    id: '2',
    title: 'Coconut Roti with Pol Sambol',
    image: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?auto=format&fit=crop&w=600&h=400',
    time: 30,
    servings: '2',
    spiceLevel: 2,
    tags: ['Vegetarian', 'Breakfast'],
    description: "Delicious coconut flatbread served with a spicy coconut relish that's bursting with flavor.",
  },
  {
    id: '3',
    title: 'Lamprais (Dutch-Burgher Influenced)',
    image: 'https://images.unsplash.com/photo-1593854823322-5a737e0c5dd3?auto=format&fit=crop&w=600&h=400',
    time: 60,
    servings: '2',
    spiceLevel: 3,
    tags: ['Non-Vegetarian', 'Special'],
    description: 'Rice and accompaniments wrapped in a banana leaf and baked, infusing the contents with a unique aroma.',
  }
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      <Features />
      
      <section className="section bg-background">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Featured Recipes</h2>
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
      
      <section className="section bg-muted/50 relative overflow-hidden">
        <div className="section-container relative z-10">
          <div className="md:max-w-lg lg:max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full text-xs font-semibold bg-primary/10 text-primary">
              <Leaf className="h-3 w-3 mr-1" />
              <span>Sustainable Sourcing</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">From Farm to Your Doorstep</h2>
            <p className="text-lg text-foreground/70 mb-6 font-light">
              We partner directly with local Sri Lankan farmers to bring you the freshest, most authentic ingredients while supporting sustainable farming practices.
            </p>
            <Link to="/sustainability">
              <Button className="bg-primary hover:bg-primary/90 text-white">
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
      
      <section className="py-16 bg-primary text-white text-center">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display tracking-tight">Ready to Get Started?</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 font-light">
            Join thousands of Sri Lankan food enthusiasts who are already enjoying our authentic meal kits delivered to their doorstep.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-primary hover:bg-accent" size="lg">
              Browse Recipes
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-primary/80" size="lg">
              View Subscription Plans
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
