
import { useEffect } from 'react';
import { Leaf, Heart, Users } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-hellofresh-50">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            At Cook Me, we're passionate about bringing the authentic flavors of Sri Lanka
            to your kitchen, making it easy to prepare delicious meals at home.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-hellofresh-500">Our Mission</h2>
              <p className="text-lg text-foreground/70 mb-6">
                We believe everyone should be able to enjoy authentic Sri Lankan cuisine, 
                regardless of their cooking experience. Our mission is to provide 
                high-quality meal kits that make cooking Sri Lankan food accessible, 
                enjoyable, and sustainable.
              </p>
              <p className="text-lg text-foreground/70">
                Every recipe we create is tested extensively to ensure it's both authentic 
                and adaptable to home kitchens, with clear instructions that make even complex 
                dishes feel approachable.
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

      {/* Values Section */}
      <section className="py-16 bg-hellofresh-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-hellofresh-100 flex items-center justify-center text-hellofresh-500 mb-4">
                <Leaf className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
              <p className="text-foreground/70">
                We work directly with local farmers to reduce our carbon footprint and 
                use eco-friendly packaging to minimize waste.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-hellofresh-100 flex items-center justify-center text-hellofresh-500 mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Authenticity</h3>
              <p className="text-foreground/70">
                Every recipe stays true to traditional Sri Lankan flavors while making 
                adaptations that work for modern home kitchens.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-hellofresh-100 flex items-center justify-center text-hellofresh-500 mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p className="text-foreground/70">
                We support the livelihoods of Sri Lankan farmers and create a community 
                of food lovers who share our passion for authentic cuisine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div key={member} className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                  <img 
                    src={`https://i.pravatar.cc/300?img=${20 + member}`} 
                    alt={`Team member ${member}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">Team Member {member}</h3>
                <p className="text-hellofresh-500 mb-3">Co-Founder</p>
                <p className="text-foreground/70 max-w-md mx-auto">
                  Passionate about sharing the authentic flavors of Sri Lanka with the world.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
