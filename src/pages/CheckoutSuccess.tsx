
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2, Calendar, Package, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/use-auth';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

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
  
  // Generate random order ID for demo purposes
  const orderId = Math.floor(100000 + Math.random() * 900000);
  const orderDate = new Date().toLocaleDateString();
  const estimatedDelivery = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString();

  return (
    <div className="container mx-auto px-4 py-20 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-md mx-auto text-center">
        <div className="mb-8 p-3 rounded-full bg-primary/10 w-24 h-24 flex items-center justify-center mx-auto">
          <CheckCircle2 className="h-12 w-12 text-primary" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4 font-display text-high-contrast">Order Confirmed!</h1>
        
        <Alert className="mb-8 bg-secondary border-primary/20">
          <AlertDescription className="text-lg">
            Thank you for your order. Your fresh ingredients will be delivered soon.
          </AlertDescription>
        </Alert>
        
        <div className="bg-card rounded-xl border border-border p-6 mb-8 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-high-contrast">Order Details</h2>
          
          <div className="space-y-4 text-left">
            <div className="flex items-center justify-between py-2 border-b border-border">
              <div className="flex items-center text-medium-contrast">
                <Tag className="h-4 w-4 mr-2 text-primary" />
                <span>Order ID</span>
              </div>
              <span className="font-mono font-medium text-high-contrast">#{orderId}</span>
            </div>
            
            <div className="flex items-center justify-between py-2 border-b border-border">
              <div className="flex items-center text-medium-contrast">
                <Calendar className="h-4 w-4 mr-2 text-primary" />
                <span>Order Date</span>
              </div>
              <span className="text-high-contrast">{orderDate}</span>
            </div>
            
            <div className="flex items-center justify-between py-2 border-b border-border">
              <div className="flex items-center text-medium-contrast">
                <div className="flex h-2 w-2 rounded-full bg-primary mr-2"></div>
                <span>Status</span>
              </div>
              <span className="text-primary font-medium">Processing</span>
            </div>
            
            <div className="flex items-center justify-between pt-3 mt-2">
              <div className="flex items-center font-medium text-high-contrast">
                <Package className="h-4 w-4 mr-2 text-primary" />
                <span>Estimated Delivery</span>
              </div>
              <span className="font-medium text-high-contrast">
                {estimatedDelivery}
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="flex-1 bg-primary hover:bg-primary/90 text-white" asChild>
            <Link to="/recipes">
              Continue Shopping
            </Link>
          </Button>
          <Button variant="outline" className="flex-1 border-primary/20 hover:bg-primary/5" asChild>
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
