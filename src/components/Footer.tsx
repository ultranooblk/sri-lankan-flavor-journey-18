
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-cookme-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative flex h-10 w-10 overflow-hidden rounded-full bg-cookme-500 items-center justify-center">
                <span className="text-white font-display text-lg">CM</span>
              </div>
              <span className="font-display text-xl font-bold tracking-tight">Cook Me</span>
            </div>
            <p className="text-cookme-200 text-sm">
              Bringing authentic Sri Lankan flavors to your kitchen with fresh, pre-portioned ingredients and easy-to-follow recipes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cookme-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-cookme-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-cookme-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-cookme-300 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-cookme-200 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/recipes" className="text-cookme-200 hover:text-white transition-colors text-sm">
                  Recipes
                </Link>
              </li>
              <li>
                <Link to="/subscribe" className="text-cookme-200 hover:text-white transition-colors text-sm">
                  Subscription Plans
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-cookme-200 hover:text-white transition-colors text-sm">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-cookme-200 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-medium">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-cookme-200">
                <Mail className="h-4 w-4 mr-2 text-cookme-300" />
                <a href="mailto:hello@cookme.lk" className="hover:text-white transition-colors">
                  hello@cookme.lk
                </a>
              </li>
              <li className="flex items-center text-sm text-cookme-200">
                <Phone className="h-4 w-4 mr-2 text-cookme-300" />
                <a href="tel:+94112345678" className="hover:text-white transition-colors">
                  +94 11 234 5678
                </a>
              </li>
            </ul>
            <div className="pt-2">
              <Button variant="outline" className="border-cookme-700 text-white hover:bg-cookme-800">
                Contact Support
              </Button>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-medium">Stay Updated</h3>
            <p className="text-cookme-200 text-sm">
              Subscribe to our newsletter for exclusive recipes, offers, and updates.
            </p>
            <div className="flex">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="rounded-r-none bg-cookme-900 border-cookme-700 text-white" 
              />
              <Button className="rounded-l-none bg-cookme-500 hover:bg-cookme-600">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cookme-800 text-center text-cookme-300 text-sm">
          <p>© {new Date().getFullYear()} Cook Me. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/faq" className="hover:text-white transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
