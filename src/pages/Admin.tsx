
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from '@/hooks/use-auth';
import RecipeManager from '@/components/admin/RecipeManager';
import Dashboard from '@/components/admin/Dashboard';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Shield, AlertTriangle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Admin = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  
  useEffect(() => {
    // Check if user is authenticated
    if (!isAuthenticated) {
      navigate('/login', { state: { from: '/admin', message: 'You must be logged in to access the admin area' } });
      return;
    }
    
    // In a real app, this would check if the user has admin role
    // For this demo, we'll simulate an admin check with a timeout
    setIsLoading(true);
    const checkAdminStatus = setTimeout(() => {
      // For demo purposes, all authenticated users are considered admins
      // In a real app, you would check the user's role from the backend
      setIsAdmin(true);
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(checkAdminStatus);
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }
  
  if (isLoading) {
    return (
      <div className="container mx-auto py-16 sm:py-20 text-center">
        <div className="flex justify-center">
          <Loader2 className="h-10 w-10 sm:h-12 sm:w-12 animate-spin text-primary" />
        </div>
        <p className="mt-4 text-muted-foreground">Checking credentials...</p>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="container mx-auto py-16 sm:py-20 max-w-md px-4">
        <Alert variant="destructive" className="mb-6">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Access Denied</AlertTitle>
          <AlertDescription>
            You don't have permission to access the admin area.
          </AlertDescription>
        </Alert>
        <Button onClick={() => navigate('/')} className="w-full">
          Return to Homepage
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 sm:py-10 px-4">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
          <h1 className="text-2xl sm:text-3xl font-bold font-display">Admin Dashboard</h1>
        </div>
        <p className="text-muted-foreground text-sm sm:text-base">Manage recipes, track orders, and monitor user insights</p>
        
        {user && (
          <Alert className="mt-4 bg-secondary border-primary/20">
            <AlertDescription>
              Logged in as <span className="font-semibold">{user.name}</span> ({user.email})
            </AlertDescription>
          </Alert>
        )}
      </header>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-6 sm:mb-8 w-full max-w-md bg-card border border-border">
          <TabsTrigger value="dashboard" className="flex-1">Dashboard</TabsTrigger>
          <TabsTrigger value="recipes" className="flex-1">Recipes</TabsTrigger>
        </TabsList>
        
        <TabsContent value="dashboard" className="focus-visible:outline-none focus-visible:ring-0">
          <Dashboard />
        </TabsContent>
        
        <TabsContent value="recipes" className="focus-visible:outline-none focus-visible:ring-0">
          <RecipeManager />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;
