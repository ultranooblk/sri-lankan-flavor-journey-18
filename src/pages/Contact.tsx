
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-hellofresh-50">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            Have questions about our meal kits or interested in partnering with us? 
            We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-hellofresh-500">Contact Information</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-lg bg-hellofresh-100 flex items-center justify-center text-hellofresh-500 mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Our Location</h3>
                    <p className="text-foreground/70">
                      123 Spice Market Lane<br />
                      Colombo 05<br />
                      Sri Lanka
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-lg bg-hellofresh-100 flex items-center justify-center text-hellofresh-500 mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone Number</h3>
                    <p className="text-foreground/70">+94 11 234 5678</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-lg bg-hellofresh-100 flex items-center justify-center text-hellofresh-500 mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email Address</h3>
                    <p className="text-foreground/70">hello@cookme.com</p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden h-64 md:h-80">
                {/* Placeholder for a map - in a real app, use Google Maps or similar */}
                <div className="h-full w-full bg-hellofresh-100 flex items-center justify-center">
                  <span className="text-hellofresh-500 font-medium">Map Location</span>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-hellofresh-500">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
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
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message here..."
                    rows={5}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-hellofresh-500 hover:bg-hellofresh-600 text-white"
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
