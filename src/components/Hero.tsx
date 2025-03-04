
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, PlayCircle } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

// High-res Sri Lankan food images
const heroImages = [
  'https://images.unsplash.com/photo-1596797038530-2c107dc43d15?auto=format&fit=crop&q=90&w=2000&h=1200', // Rice and curry
  'https://images.unsplash.com/photo-1667489022797-ab608913feeb?auto=format&fit=crop&q=90&w=2000&h=1200', // Sri Lankan spices
  'https://images.unsplash.com/photo-1593854823322-5a737e0c5dd3?auto=format&fit=crop&q=90&w=2000&h=1200',  // Hoppers/string hoppers
  'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=90&w=2000&h=1200', // Colorful curry dishes
  'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=90&w=2000&h=1200', // Spice market
  'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=90&w=2000&h=1200', // Vegetable curry
  'public/lovable-uploads/15b59079-7146-4dbf-b859-8fcafaad882b.png', // Uploaded image
  'public/lovable-uploads/3a4d6bf5-8d85-436d-9e24-b4d7e2a97cdb.png' // New uploaded image
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Full-size image carousel without dark overlays */}
      <div className="absolute inset-0 w-full h-full">
        <Carousel 
          className="w-full h-full" 
          opts={{ loop: true, duration: 50 }} 
          autoplay={true}
          setApi={(api) => {
            if (api) {
              api.on('select', () => {
                setCurrentIndex(api.selectedScrollSnap());
              });
            }
          }}
        >
          <CarouselContent className="h-full">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Show navigation controls with slightly transparent background */}
          <CarouselPrevious className="left-4 z-20 bg-background/40 hover:bg-background/60" />
          <CarouselNext className="right-4 z-20 bg-background/40 hover:bg-background/60" />
          
          {/* Carousel indicators */}
          <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {heroImages.map((_, index) => (
              <button 
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentIndex === index 
                    ? "bg-primary border border-white" 
                    : "bg-white/70 hover:bg-white"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>

      {/* Buttons positioned in the bottom section with subtle background */}
      <div className="absolute bottom-0 inset-x-0 z-20">
        <div className="container mx-auto px-4 pb-16 relative">
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="bg-primary hover:bg-primary/90 text-white shadow-lg relative overflow-hidden group" 
              size="lg"
            >
              <span className="relative z-10 flex items-center">
                Browse Recipes
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white bg-transparent text-white hover:bg-white/20" 
              size="lg"
            >
              How It Works
              <PlayCircle className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Wave decoration with less opacity */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="currentColor" 
            className="text-background/90" 
            d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
