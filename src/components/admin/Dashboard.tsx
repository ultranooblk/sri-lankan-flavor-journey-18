
import { useState, useEffect } from "react";
import { BarChart, LineChart, PieChart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { allRecipes } from '@/services/recipeService';

const Dashboard = () => {
  const [metrics, setMetrics] = useState({
    totalOrders: 0,
    revenue: 0,
    activeUsers: 0,
  });
  
  // Calculate real metrics from data
  useEffect(() => {
    // In a real app, this would fetch from an API
    // For now, we'll generate realistic data based on recipes
    const calculateMetrics = () => {
      // Get total number of recipes
      const recipeCount = allRecipes.length;
      
      // Generate somewhat realistic metrics based on recipe count
      const avgOrdersPerRecipe = Math.floor(Math.random() * 20) + 10; // 10-30 orders per recipe
      const totalOrders = recipeCount * avgOrdersPerRecipe;
      
      const avgPricePerOrder = 18.99; // Using default price from RecipeCard
      const revenue = Math.round(totalOrders * avgPricePerOrder);
      
      const activeUsers = Math.floor(totalOrders * 0.7); // Assume 70% of orders are from unique users
      
      setMetrics({
        totalOrders,
        revenue,
        activeUsers,
      });
    };
    
    calculateMetrics();
  }, []);
  
  // Get popular recipes data - sorted by their ID to simulate popularity
  const popularRecipes = allRecipes
    .slice() // create a copy to avoid mutating the original array
    .sort((a, b) => Number(a.id) - Number(b.id))
    .slice(0, 4)
    .map(recipe => ({
      id: recipe.id,
      name: recipe.title,
      orders: Math.floor(Math.random() * 50) + 50, // 50-100 orders
    }));

  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Total Orders</CardTitle>
            <CardDescription>Last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{metrics.totalOrders}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500">↑ 12%</span> from last month
            </p>
            <div className="h-[80px] mt-4 text-primary">
              <LineChart className="w-full h-full stroke-current opacity-50" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Revenue</CardTitle>
            <CardDescription>Last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">${metrics.revenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500">↑ 18%</span> from last month
            </p>
            <div className="h-[80px] mt-4 text-primary">
              <BarChart className="w-full h-full stroke-current opacity-50" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Active Users</CardTitle>
            <CardDescription>Last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{metrics.activeUsers}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500">↑ 5%</span> from last month
            </p>
            <div className="h-[80px] mt-4 text-primary">
              <PieChart className="w-full h-full stroke-current opacity-50" />
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Popular Recipes</CardTitle>
          <CardDescription>Top performing recipes in the last 30 days</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {popularRecipes.map((recipe) => (
              <div key={recipe.id} className="flex items-center justify-between border-b border-border pb-3">
                <div>
                  <p className="font-medium">{recipe.name}</p>
                  <p className="text-sm text-muted-foreground">{recipe.orders} orders</p>
                </div>
                <div className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium">
                  #{recipe.id}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
