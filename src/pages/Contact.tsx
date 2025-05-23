
import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section - Optimized for all screen sizes */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-24 bg-hellofresh-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-foreground">Get In Touch</h1>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto px-4 sm:px-0">
            Have questions about our meal kits or interested in partnering with us? 
            We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Form & Info - Optimized layout for responsive design */}
      <section className="py-8 sm:py-12 md:py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-hellofresh-500 dark:text-cookme-400">Contact Information</h2>
              
              <div className="space-y-6 mb-8 sm:mb-12">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-lg bg-hellofresh-100 dark:bg-hellofresh-950/50 flex items-center justify-center text-hellofresh-500 dark:text-cookme-400 mr-4 shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-foreground">Our Location</h3>
                    <p className="text-foreground/70">
                      123 Spice Market Lane<br />
                      Colombo 05<br />
                      Sri Lanka
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-lg bg-hellofresh-100 dark:bg-hellofresh-950/50 flex items-center justify-center text-hellofresh-500 dark:text-cookme-400 mr-4 shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-foreground">Phone Number</h3>
                    <p className="text-foreground/70">+94 11 234 5678</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-lg bg-hellofresh-100 dark:bg-hellofresh-950/50 flex items-center justify-center text-hellofresh-500 dark:text-cookme-400 mr-4 shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-foreground">Email Address</h3>
                    <p className="text-foreground/70">hello@cookme.com</p>
                  </div>
                </div>
              </div>
              
              {/* Map - Responsive height */}
              <div className="rounded-lg overflow-hidden h-48 sm:h-56 md:h-64 lg:h-72">
                {/* Placeholder for a map - in a real app, use Google Maps or similar */}
                <div className="h-full w-full bg-hellofresh-100 dark:bg-hellofresh-950/30 flex items-center justify-center">
                  <span className="text-hellofresh-500 dark:text-cookme-400 font-medium">Map Location</span>
                </div>
              </div>
            </div>
            
            {/* Contact Form - Moved up on mobile */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-hellofresh-500 dark:text-cookme-400">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 sm:mb-2 text-foreground">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="dark:border-gray-700 w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 sm:mb-2 text-foreground">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="dark:border-gray-700 w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1 sm:mb-2 text-foreground">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
                    className="dark:border-gray-700 w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1 sm:mb-2 text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message here..."
                    rows={4}
                    className="dark:border-gray-700 w-full"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-hellofresh-500 hover:bg-hellofresh-600 text-white dark:bg-cookme-500 dark:hover:bg-cookme-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
