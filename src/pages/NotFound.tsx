
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-24 bg-background">
      <div className="text-center">
        <h1 className="text-6xl sm:text-8xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl sm:text-2xl text-foreground mb-8">Oops! We couldn't find that page</p>
        <p className="mb-8 text-muted-foreground max-w-md mx-auto">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
          <Link to="/" className="inline-flex items-center">
            <Home className="mr-2 h-5 w-5" />
            Back to Homepage
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
