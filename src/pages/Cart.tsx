
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Trash2, ShoppingBag, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/hooks/use-cart';
import { useAuth } from '@/hooks/use-auth';
import { cn } from '@/lib/utils';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="max-w-md mx-auto">
          <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">Looks like you haven't added any recipes to your cart yet.</p>
          <Button onClick={() => navigate('/recipes')} className="bg-primary text-white hover:bg-primary/90">
            Browse Recipes
          </Button>
        </div>
      </div>
    );
  }
  
  const handleCheckout = () => {
    if (!isAuthenticated) {
      navigate('/login', { state: { returnTo: '/cart' } });
      return;
    }
    
    setIsCheckingOut(true);
    
    // Simulate checkout process
    setTimeout(() => {
      clearCart();
      navigate('/checkout/success');
    }, 2000);
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <Button 
        variant="ghost" 
        className="mb-6 hover:bg-transparent group" 
        onClick={() => navigate('/recipes')}
      >
        <ChevronLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Continue Shopping
      </Button>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart items - 2 columns */}
        <div className="lg:col-span-2">
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="px-6 py-4 border-b border-border flex justify-between items-center">
              <h2 className="text-xl font-bold">Shopping Cart ({cartItems.length} items)</h2>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-muted-foreground hover:text-destructive" 
                onClick={clearCart}
              >
                <Trash2 className="h-4 w-4 mr-1" />
                Clear Cart
              </Button>
            </div>
            
            <div className="divide-y divide-border">
              {cartItems.map((item) => (
                <div key={item.id} className="p-4 sm:p-6 flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-1/4">
                    <Link to={`/recipes/${item.id}`}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-24 object-cover rounded-md"
                      />
                    </Link>
                  </div>
                  
                  <div className="flex-1 flex flex-col sm:flex-row justify-between">
                    <div>
                      <Link to={`/recipes/${item.id}`}>
                        <h3 className="font-medium hover:text-primary transition-colors">{item.title}</h3>
                      </Link>
                      <p className="text-muted-foreground text-sm mt-1">${item.price.toFixed(2)} per serving</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4 sm:mt-0">
                      <div className="flex items-center">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-r-none"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </Button>
                        <Input
                          className="h-8 w-12 rounded-none text-center"
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-l-none"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </Button>
                      </div>
                      
                      <div className="flex items-center ml-6">
                        <span className="font-semibold mr-4">${(item.price * item.quantity).toFixed(2)}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-muted-foreground hover:text-destructive"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Order summary - 1 column */}
        <div className="lg:col-span-1">
          <div className="bg-card rounded-xl border border-border p-6 shadow-sm sticky top-24">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Delivery</span>
                <span>$4.99</span>
              </div>
              <div className="flex justify-between pt-4 border-t border-border font-bold">
                <span>Total</span>
                <span>${(cartTotal + 4.99).toFixed(2)}</span>
              </div>
            </div>
            
            <Button
              className={cn("w-full bg-primary hover:bg-primary/90", isCheckingOut && "opacity-80 cursor-not-allowed")}
              disabled={isCheckingOut}
              onClick={handleCheckout}
            >
              {isCheckingOut ? (
                <>
                  <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-b-transparent"></span>
                  Processing...
                </>
              ) : (
                <>
                  Checkout (${(cartTotal + 4.99).toFixed(2)})
                </>
              )}
            </Button>
            
            {!isAuthenticated && (
              <p className="mt-4 text-sm text-muted-foreground text-center">
                You'll need to {' '}
                <Link to="/login" className="text-primary hover:underline">
                  sign in
                </Link>
                {' '} before checkout.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
