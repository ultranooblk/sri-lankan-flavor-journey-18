
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/use-auth';

const CheckoutSuccess = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  // If not authenticated, redirect to home
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);
  
  if (!isAuthenticated) {
    return null;
  }
  
  return (
    <div className="container mx-auto px-4 py-20 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-md mx-auto text-center">
        <CheckCircle2 className="h-20 w-20 text-primary mx-auto mb-6" />
        
        <h1 className="text-3xl font-bold mb-4 font-display">Order Confirmed!</h1>
        
        <p className="text-lg mb-8">
          Thank you for your order. Your fresh ingredients will be delivered soon.
        </p>
        
        <div className="bg-card rounded-xl border border-border p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Order Details</h2>
          
          <div className="space-y-3 text-left">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Order ID</span>
              <span className="font-mono">#CM{Math.floor(100000 + Math.random() * 900000)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Date</span>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Status</span>
              <span className="text-primary font-medium">Processing</span>
            </div>
            <div className="flex justify-between pt-3 border-t border-border font-bold">
              <span>Estimated Delivery</span>
              <span>
                {new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="flex-1 bg-primary hover:bg-primary/90" asChild>
            <Link to="/recipes">
              Continue Shopping
            </Link>
          </Button>
          <Button variant="outline" className="flex-1" asChild>
            <Link to="/">
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
