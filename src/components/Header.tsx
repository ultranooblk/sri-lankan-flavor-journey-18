
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, User, Sun, Moon, Settings } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/use-theme';
import { useCart } from '@/hooks/use-cart';
import { useAuth } from '@/hooks/use-auth';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const { cartItems } = useCart();
  const { user, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Recipes', path: '/recipes' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const adminLink = isAuthenticated ? { name: 'Admin', path: '/admin' } : null;

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
      isScrolled ? 'glass-morphism' : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="relative flex h-10 w-10 overflow-hidden rounded-full bg-primary items-center justify-center">
            <img src="/img/logo.png" alt="Cook Me Logo" className="h-8 w-auto" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight">Cook Me</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary relative py-2',
                location.pathname === link.path 
                  ? 'text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary after:content-[""]' 
                  : 'text-foreground/80'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                  {cartItems.length}
                </span>
              )}
            </Button>
          </Link>
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <Link to="/profile">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
              {adminLink && (
                <Link to={adminLink.path}>
                  <Button variant="ghost" size="icon">
                    <Settings className="h-5 w-5" />
                  </Button>
                </Link>
              )}
              <Button 
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
                onClick={logout}
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <Link to="/login">
              <Button variant="default" className="bg-primary text-white hover:bg-primary/90 transition-colors">
                Sign In
              </Button>
            </Link>
          )}
        </div>

        <div className="md:hidden flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Link to="/cart" className="relative mr-2">
            <ShoppingCart className="h-5 w-5" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                {cartItems.length}
              </span>
            )}
          </Link>
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
                'text-lg font-medium transition-colors hover:text-primary py-2 border-b border-border',
                location.pathname === link.path ? 'text-primary' : 'text-foreground/80'
              )}
            >
              {link.name}
            </Link>
          ))}
          
          {adminLink && (
            <Link
              to={adminLink.path}
              className={cn(
                'text-lg font-medium transition-colors hover:text-primary py-2 border-b border-border',
                location.pathname === adminLink.path ? 'text-primary' : 'text-foreground/80'
              )}
            >
              {adminLink.name}
            </Link>
          )}
          
          <div className="pt-4">
            {isAuthenticated ? (
              <div className="space-y-3">
                <Link to="/profile">
                  <Button variant="outline" className="w-full">
                    <User className="h-5 w-5 mr-2" />
                    My Profile
                  </Button>
                </Link>
                <Button 
                  variant="default" 
                  className="w-full bg-primary text-white"
                  onClick={logout}
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <Link to="/login">
                <Button variant="default" className="w-full bg-primary text-white">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
