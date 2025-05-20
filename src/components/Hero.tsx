
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

// Updated to use high-resolution banner images
const heroImages = [
  '/images/Slide-1.png', // Sri Lankan spices and curry
  '/images/Slide-2.png',
  '/images/Slide-3.png',
  '/images/Slide-4.png',
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
          <div className="sm:block hidden">
            <CarouselPrevious className="left-4 z-20 bg-background/40 hover:bg-background/60" />
            <CarouselNext className="right-4 z-20 bg-background/40 hover:bg-background/60" />
          </div>
          
          {/* Carousel indicators */}
          <div className="absolute bottom-24 sm:bottom-28 left-1/2 -translate-x-1/2 z-20 flex gap-2">
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

      {/* Slogan with semi-transparent dark background for better visibility */}
      <div className="absolute top-1/2 inset-x-0 z-20 transform -translate-y-3/4 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-6 backdrop-blur-sm bg-black/40 py-4 sm:py-6 px-3 sm:px-4 rounded-lg">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
                <span className="block">Taste the Authentic</span>
  <span className="block text-primary">Sri Lankan</span>
  <span className="block">Flavors</span>
            </h1>
            <p className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl text-white/90 font-light drop-shadow-md">
              Bringing traditional recipes to your doorstep
            </p>
          </div>
        </div>
      </div>

      {/* Buttons positioned lower with clear separation from text */}
      <div className="absolute bottom-1/4 inset-x-0 z-20">
        <div className="container mx-auto px-4 pb-16 relative">
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="bg-primary hover:bg-primary/90 text-white shadow-lg relative overflow-hidden group w-full sm:w-auto" 
              size="lg"
              asChild
            >
              <Link to="/recipes">
                <span className="relative z-10 flex items-center">
                  Browse Recipes
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Link>
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-primary bg-white/80 text-primary hover:bg-primary/10 shadow-lg w-full sm:w-auto" 
              size="lg"
              asChild
            >
              <Link to="/how-it-works">
                <span className="text-primary font-medium">How It Works</span>
                <PlayCircle className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 text-primary" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Wave decoration with less opacity */}
      <div className="absolute bottom-0 left-0 right-0 z-10 w-full overflow-hidden">
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
