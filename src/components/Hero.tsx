
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Leaf, Clock, ShoppingBag, PlayCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

// High-res Sri Lankan food images
const heroImages = [
  'https://images.unsplash.com/photo-1596797038530-2c107dc43d15?auto=format&fit=crop&q=90&w=2000&h=1200', // Rice and curry
  'https://images.unsplash.com/photo-1667489022797-ab608913feeb?auto=format&fit=crop&q=90&w=2000&h=1200', // Sri Lankan spices
  'https://images.unsplash.com/photo-1593854823322-5a737e0c5dd3?auto=format&fit=crop&q=90&w=2000&h=1200'  // Hoppers/string hoppers
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] pt-20 overflow-hidden">
      {/* Background Images Carousel with fade transition */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {heroImages.map((image, index) => (
          <div 
            key={index}
            className={cn(
              "absolute inset-0 bg-cover bg-center transition-opacity duration-1000",
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            )}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-white/40 dark:bg-black/50" />
      </div>

      <div className="container mx-auto px-4 pt-16 md:pt-24 lg:pt-28 text-center">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full text-xs font-semibold bg-primary/10 text-primary">
            <Leaf className="h-3 w-3 mr-1" />
            <span>Locally Sourced Sri Lankan Ingredients</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            <span className="text-primary">Authentic Sri Lankan</span> <br />
            <span className="text-accent">Flavors Delivered</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Experience the joy of cooking traditional Sri Lankan cuisine with perfectly portioned ingredients and step-by-step recipes delivered to your door.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg" size="lg">
              Browse Recipes
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/5" size="lg">
              How It Works
              <PlayCircle className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          {/* Feature boxes - fixed to ensure visibility */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto px-2">
            <div className="flex items-center justify-center flex-col p-4 sm:p-6 rounded-lg glass-morphism hover-lift transition-all text-center">
              <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full flex items-center justify-center bg-primary/10 text-primary mb-3">
                <Leaf className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h3 className="font-medium text-base sm:text-lg mb-1">Fresh Ingredients</h3>
                <p className="text-sm sm:text-base text-foreground/70">Locally sourced, portioned</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center flex-col p-4 sm:p-6 rounded-lg glass-morphism hover-lift transition-all text-center">
              <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full flex items-center justify-center bg-primary/10 text-primary mb-3">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h3 className="font-medium text-base sm:text-lg mb-1">Ready in 30 Minutes</h3>
                <p className="text-sm sm:text-base text-foreground/70">Easy-to-follow recipes</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center flex-col p-4 sm:p-6 rounded-lg glass-morphism hover-lift transition-all text-center">
              <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full flex items-center justify-center bg-primary/10 text-primary mb-3">
                <ShoppingBag className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h3 className="font-medium text-base sm:text-lg mb-1">Flexible Plans</h3>
                <p className="text-sm sm:text-base text-foreground/70">Subscribe or order</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="currentColor" 
            className="text-background"
            d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
