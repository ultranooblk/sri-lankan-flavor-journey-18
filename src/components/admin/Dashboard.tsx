
import { useState, useEffect } from "react";
import { Package } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { allRecipes } from '@/services/recipeService';

const Dashboard = () => {
  const [metrics, setMetrics] = useState({
    totalRecipes: 0,
    availableRecipes: 0,
  });
  
  // Calculate real metrics from actual data
  useEffect(() => {
    const calculateMetrics = () => {
      // Use real recipe data
      const totalRecipes = allRecipes.length;
      
      // In a real app, you'd filter recipes based on availability
      const availableRecipes = allRecipes.length;
      
      setMetrics({
        totalRecipes,
        availableRecipes
      });
    };
    
    calculateMetrics();
  }, []);
  
  // Get popular recipes based on their actual data - sorted by ID for now
  // In a real app, this would be based on actual popularity metrics
  const popularRecipes = allRecipes
    .slice()
    .sort((a, b) => Number(a.id) - Number(b.id))
    .slice(0, 4)
    .map(recipe => ({
      id: recipe.id,
      name: recipe.title,
    }));

  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Total Recipes</CardTitle>
            <CardDescription>In system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{metrics.totalRecipes}</div>
            <p className="text-xs text-muted-foreground mt-1">
              All recipes in the database
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Available Recipes</CardTitle>
            <CardDescription>Ready to order</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{metrics.availableRecipes}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Recipes available for customers
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Popular Recipes</CardTitle>
          <CardDescription>Most viewed recipes</CardDescription>
        </CardHeader>
        <CardContent>
          {popularRecipes.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No recipe data available
            </div>
          ) : (
            <div className="space-y-4">
              {popularRecipes.map((recipe) => (
                <div key={recipe.id} className="flex items-center justify-between border-b border-border pb-3">
                  <div>
                    <p className="font-medium">{recipe.name}</p>
                    <p className="text-sm text-muted-foreground">Recipe ID: {recipe.id}</p>
                  </div>
                  <div className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium">
                    #{recipe.id}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
