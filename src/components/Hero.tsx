
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Leaf, Clock, ShoppingBag, PlayCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const heroImages = [
  '/assets/hero-1.jpg', 
  '/assets/hero-2.jpg',
  '/assets/hero-3.jpg'
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Placeholder for actual images
  const placeholderImage = 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=1200&h=800';

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background Images Carousel with fade transition */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {heroImages.map((image, index) => (
          <div 
            key={index}
            className={cn(
              "absolute inset-0 bg-cover bg-center transition-opacity duration-1000",
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            )}
            style={{ backgroundImage: `url(${placeholderImage})` }}
          />
        ))}
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      <div className="container mx-auto px-4 pt-16 md:pt-24 lg:pt-32">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full text-xs font-medium bg-primary/10 text-primary">
            <Leaf className="h-3 w-3 mr-1" />
            <span>Locally Sourced Sri Lankan Ingredients</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Bringing Authentic Sri Lankan Flavors to Your Kitchen!
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl">
            Experience the joy of cooking traditional Sri Lankan cuisine with perfectly portioned ingredients and step-by-step recipes delivered to your door.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button className="bg-primary hover:bg-primary/90 text-white" size="lg">
              Browse Recipes
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              How It Works
              <PlayCircle className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3 p-4 rounded-lg bg-white/70 backdrop-blur border border-white/20 shadow-sm">
              <div className="h-10 w-10 rounded-full flex items-center justify-center bg-cookme-100 text-cookme-600">
                <Leaf className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Fresh Ingredients</h3>
                <p className="text-sm text-foreground/70">Locally sourced, perfectly portioned</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-4 rounded-lg bg-white/70 backdrop-blur border border-white/20 shadow-sm">
              <div className="h-10 w-10 rounded-full flex items-center justify-center bg-cookme-100 text-cookme-600">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Ready in 30 Minutes</h3>
                <p className="text-sm text-foreground/70">Quick, easy-to-follow recipes</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-4 rounded-lg bg-white/70 backdrop-blur border border-white/20 shadow-sm">
              <div className="h-10 w-10 rounded-full flex items-center justify-center bg-cookme-100 text-cookme-600">
                <ShoppingBag className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Flexible Plans</h3>
                <p className="text-sm text-foreground/70">Subscribe or order as needed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#F9F5F0" 
            fillOpacity="1" 
            d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
