
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, User, Sun, Moon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/use-theme';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Recipes', path: '/recipes' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
      isScrolled ? 'glass-morphism' : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="relative flex h-10 w-10 overflow-hidden rounded-full bg-hellofresh-500 items-center justify-center">
            <span className="text-white font-display text-lg">CM</span>
          </span>
          <span className="font-display text-xl font-bold tracking-tight">Cook Me</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-hellofresh-500 relative py-2',
                location.pathname === link.path 
                  ? 'text-hellofresh-500 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-hellofresh-500 after:content-[""]' 
                  : 'text-foreground/80'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-hellofresh-500 text-[10px] font-bold text-white">
              0
            </span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="default" className="bg-hellofresh-500 text-white hover:bg-hellofresh-600 transition-colors">
            Sign In
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 top-16 bg-background transition-transform duration-300 ease-in-out md:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-lg font-medium transition-colors hover:text-hellofresh-500 py-2 border-b border-border',
                location.pathname === link.path ? 'text-hellofresh-500' : 'text-foreground/80'
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 flex items-center justify-between">
            <Button variant="outline" className="flex-1 mr-2" size="lg">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Cart
            </Button>
            <Button variant="default" className="flex-1 ml-2 bg-hellofresh-500 text-white" size="lg">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
