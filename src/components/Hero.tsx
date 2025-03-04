
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
        
        {/* Subtle grain texture overlay */}
        <div className="absolute inset-0 opacity-15 mix-blend-overlay"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
             }}
        ></div>
      </div>

      <div className="container mx-auto px-4 pt-16 md:pt-24 lg:pt-28 text-center relative z-10">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full text-xs font-semibold bg-primary/10 text-primary backdrop-blur-sm border border-primary/10">
            <Leaf className="h-3 w-3 mr-1" />
            <span>Locally Sourced Sri Lankan Ingredients</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            <span className="text-primary relative">
              Authentic Sri Lankan
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"></span>
            </span> <br />
            <span className="text-accent relative">
              Flavors Delivered
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent/30 rounded-full"></span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Experience the joy of cooking traditional Sri Lankan cuisine with perfectly portioned ingredients and step-by-step recipes delivered to your door.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg relative overflow-hidden group" size="lg">
              <span className="relative z-10 flex items-center">
                Browse Recipes
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 group" size="lg">
              How It Works
              <PlayCircle className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          {/* Feature boxes - fixed to ensure visibility */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto px-2 relative z-20">
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
