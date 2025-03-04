
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from '@/hooks/use-auth';
import RecipeManager from '@/components/admin/RecipeManager';
import Dashboard from '@/components/admin/Dashboard';
import { Alert, AlertDescription } from '@/components/ui/alert';

const Admin = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  
  useEffect(() => {
    // In a real app, this would check if the user has admin role
    // For this demo, we'll assume all authenticated users can access admin
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      setIsAdmin(true);
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold font-display mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage recipes, track orders, and monitor user insights</p>
        
        {user && (
          <Alert className="mt-4 bg-secondary border-primary/20">
            <AlertDescription>
              Logged in as <span className="font-semibold">{user.name}</span> ({user.email})
            </AlertDescription>
          </Alert>
        )}
      </header>

      <Tabs defaultValue="recipes" className="w-full">
        <TabsList className="mb-8 w-full max-w-md bg-card border border-border">
          <TabsTrigger value="dashboard" className="flex-1">Dashboard</TabsTrigger>
          <TabsTrigger value="recipes" className="flex-1">Recipes</TabsTrigger>
        </TabsList>
        
        <TabsContent value="dashboard">
          <Dashboard />
        </TabsContent>
        
        <TabsContent value="recipes">
          <RecipeManager />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;
