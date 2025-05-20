
import { useEffect } from 'react';
import { Leaf, Heart, Users, GraduationCap, Book, Rocket } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Improved responsiveness */}
      <section className="py-12 md:py-20 bg-muted/50 dark:bg-background/30">
        <div className="container mx-auto text-center px-4 sm:px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-foreground">Our Story</h1>
          <p className="text-base md:text-xl text-foreground/70 max-w-3xl mx-auto">
            We are a group of university students turning our academic project into reality through Cook Me, 
            bringing authentic Sri Lankan flavors to your kitchen.
          </p>
        </div>
      </section>

      {/* Mission Section - Better spacing and layout */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-primary">Our Mission</h2>
              <p className="text-base md:text-lg text-foreground/70 mb-4 md:mb-6">
                As university students, we're working to expand this idea into reality. Our mission is to make authentic Sri Lankan 
                cuisine accessible to everyone through high-quality meal kits that are easy to prepare.
              </p>
              <p className="text-base md:text-lg text-foreground/70">
                We're taking our academic project to the next level, bringing the rich culinary traditions 
                of Sri Lanka to kitchens everywhere.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1605522561233-768ad7a8fabf?auto=format&fit=crop&w=800&h=600" 
                alt="Team cooking together" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Grid improvements for all screen sizes */}
      <section className="py-12 md:py-16 bg-muted/50 dark:bg-background/30">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-foreground">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-card p-6 md:p-8 rounded-xl shadow-sm border border-border">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Leaf className="h-6 w-6" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-card-foreground">Sustainability</h3>
              <p className="text-card-foreground/70 text-sm md:text-base">
                We work directly with local farmers to reduce our carbon footprint and 
                use eco-friendly packaging to minimize waste.
              </p>
            </div>
            <div className="bg-card p-6 md:p-8 rounded-xl shadow-sm border border-border">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-card-foreground">Authenticity</h3>
              <p className="text-card-foreground/70 text-sm md:text-base">
                Every recipe stays true to traditional Sri Lankan flavors while making 
                adaptations that work for modern home kitchens.
              </p>
            </div>
            <div className="bg-card p-6 md:p-8 rounded-xl shadow-sm border border-border sm:col-span-2 md:col-span-1">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Rocket className="h-6 w-6" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-card-foreground">Innovation</h3>
              <p className="text-card-foreground/70 text-sm md:text-base">
                As students, we approach problems with fresh perspectives, constantly 
                seeking innovative solutions to make Sri Lankan cuisine more accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Improved card grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-foreground">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {/* Team cards optimized for all screen sizes */}
            <div className="text-center bg-card p-6 rounded-xl border border-border shadow-sm hover-lift transition">
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 md:mb-6 rounded-full overflow-hidden">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D5603AQGyv4Cwf-tktw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726231524011?e=2147483647&v=beta&t=rCPJ1HYHWx38wp3nexe-fK-uRLK5MLK6fuAsXU1jAgg" 
                  alt="Ashen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-1 text-foreground">Ashen</h3>
              <p className="text-primary mb-2 md:mb-3 text-sm md:text-base">Co-Founder</p>
              <p className="text-foreground/70 max-w-md mx-auto text-sm md:text-base">
                Computer Science student passionate about bringing tech solutions to traditional cuisine.
              </p>
            </div>
            
            <div className="text-center bg-card p-6 rounded-xl border border-border shadow-sm hover-lift transition">
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 md:mb-6 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&h=300" 
                  alt="Akila" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-1 text-foreground">Akila</h3>
              <p className="text-primary mb-2 md:mb-3 text-sm md:text-base">Co-Founder</p>
              <p className="text-foreground/70 max-w-md mx-auto text-sm md:text-base">
                Food Science major with expertise in Sri Lankan culinary traditions and meal kit development.
              </p>
            </div>
            
            <div className="text-center bg-card p-6 rounded-xl border border-border shadow-sm hover-lift transition sm:col-span-2 md:col-span-1">
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 md:mb-6 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300" 
                  alt="Dinodh" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-1 text-foreground">Dinodh</h3>
              <p className="text-primary mb-2 md:mb-3 text-sm md:text-base">Co-Founder</p>
              <p className="text-foreground/70 max-w-md mx-auto text-sm md:text-base">
                Business student focused on sustainable supply chains and ethical sourcing practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Journey Section - Improved layout for mobile and tablet */}
      <section className="py-12 md:py-16 bg-muted/50 dark:bg-background/30">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center text-foreground">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <Book className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-foreground">From Classroom to Kitchen</h3>
                <p className="text-foreground/70 text-sm md:text-base">
                  Cook Me began as a university project, where we identified the lack of accessible
                  Sri Lankan cuisine as a market opportunity. What started as an academic exercise
                  has evolved into our passion project.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8 p-6 bg-card rounded-xl border border-border shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-foreground">Academic Roots</h3>
                <p className="text-foreground/70 text-sm md:text-base">
                  Our diverse academic backgrounds in computer science, food science, and business
                  give us a unique perspective on solving the challenges of bringing authentic
                  Sri Lankan cuisine to a wider audience.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-6 bg-card rounded-xl border border-border shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-foreground">Growing Community</h3>
                <p className="text-foreground/70 text-sm md:text-base">
                  We're building more than just a business—we're creating a community that
                  celebrates Sri Lankan culinary heritage and makes it accessible to everyone,
                  regardless of their cooking experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
