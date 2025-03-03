
import { Leaf, Utensils, Video, PackageOpen, RefreshCw, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature = ({ icon, title, description, delay }: FeatureProps) => (
  <div 
    className={cn(
      "p-6 rounded-xl border border-border bg-card shadow-sm hover-lift transition-all",
      "animate-fade-up"
    )}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-medium mb-2 text-card-foreground">{title}</h3>
    <p className="text-card-foreground/70">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Fresh Ingredients",
      description: "We source the freshest local ingredients from Sri Lankan farmers for authentic flavors.",
      delay: 100
    },
    {
      icon: <Utensils className="h-6 w-6" />,
      title: "Customizable Kits",
      description: "Adjust spice levels and ingredients to match your taste preferences and dietary needs.",
      delay: 200
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: "Video Guides",
      description: "Follow along with our step-by-step video tutorials for perfect results every time.",
      delay: 300
    },
    {
      icon: <PackageOpen className="h-6 w-6" />,
      title: "Eco-Friendly Packaging",
      description: "Our sustainable packaging minimizes waste and environmental impact.",
      delay: 400
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Flexible Subscriptions",
      description: "Subscribe weekly, bi-weekly, or monthly with the freedom to pause or cancel anytime.",
      delay: 500
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Community Impact",
      description: "Every purchase supports local Sri Lankan farmers and sustainable farming practices.",
      delay: 600
    }
  ];

  return (
    <section className="py-20 bg-muted/50 dark:bg-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Experience the Cook Me Difference</h2>
          <p className="text-lg text-foreground/70">
            We've reimagined meal kits to bring you the authentic flavors of Sri Lanka with convenience and sustainability in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
