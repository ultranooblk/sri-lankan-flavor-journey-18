
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, MapPin, Phone, LogOut, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/use-auth';

const Profile = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  
  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);
  
  if (!isAuthenticated || !user) {
    return null;
  }
  
  const handleSaveProfile = () => {
    // In a real app, this would update the user profile via API
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile has been updated successfully",
    });
  };
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  // Mock order history
  const orderHistory = [
    {
      id: 'CM123456',
      date: '2023-12-15',
      status: 'Delivered',
      total: 38.97
    },
    {
      id: 'CM123455',
      date: '2023-11-28',
      status: 'Delivered',
      total: 52.50
    }
  ];
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="h-24 w-24 rounded-full overflow-hidden bg-primary/10 mb-4 flex items-center justify-center">
                {user.image ? (
                  <img 
                    src={user.image} 
                    alt={user.name} 
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <User className="h-12 w-12 text-primary" />
                )}
              </div>
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
            
            <Separator className="my-4" />
            
            <Button 
              variant="destructive" 
              className="w-full mt-4" 
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="lg:col-span-3">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="orders">Order History</TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile">
              <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold">Your Information</h3>
                  <Button 
                    variant={isEditing ? "default" : "outline"} 
                    onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
                  >
                    {isEditing ? "Save Changes" : "Edit Profile"}
                  </Button>
                </div>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="pl-10"
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10"
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="(555) 123-4567"
                          className="pl-10"
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="address">Delivery Address</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="123 Main St, City, ST 12345"
                          className="pl-10"
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="orders">
              <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-6">Order History</h3>
                
                {orderHistory.length > 0 ? (
                  <div className="divide-y divide-border">
                    {orderHistory.map((order) => (
                      <div key={order.id} className="py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <div>
                          <div className="flex items-center">
                            <ShoppingBag className="h-4 w-4 mr-2 text-primary" />
                            <span className="font-medium">Order {order.id}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">Placed on {order.date}</p>
                        </div>
                        
                        <div className="mt-2 sm:mt-0 flex flex-col sm:items-end">
                          <span className={`text-sm font-medium ${
                            order.status === 'Delivered' ? 'text-green-600 dark:text-green-400' :
                            order.status === 'Shipped' ? 'text-blue-600 dark:text-blue-400' :
                            'text-primary'
                          }`}>
                            {order.status}
                          </span>
                          <span className="text-sm font-bold mt-1">
                            ${order.total.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <ShoppingBag className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h4 className="text-lg font-medium mb-2">No orders yet</h4>
                    <p className="text-muted-foreground mb-6">
                      You haven't placed any orders yet. Start shopping!
                    </p>
                    <Button onClick={() => navigate('/recipes')} className="bg-primary hover:bg-primary/90">
                      Browse Recipes
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;
