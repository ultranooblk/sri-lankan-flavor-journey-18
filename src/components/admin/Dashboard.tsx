
import { BarChart, LineChart, PieChart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  // This is a simplified dashboard with mock data
  // In a real app, this would fetch actual data from an API
  
  const popularRecipes = [
    { id: '1', name: 'Authentic Sri Lankan Rice and Curry', orders: 142 },
    { id: '2', name: 'Coconut Roti with Pol Sambol', orders: 98 },
    { id: '6', name: 'Jaffna Crab Curry', orders: 87 },
    { id: '4', name: 'Hoppers (Appam)', orders: 76 },
  ];

  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Total Orders</CardTitle>
            <CardDescription>Last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">452</div>
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
            <div className="text-3xl font-bold">$8,245</div>
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
            <div className="text-3xl font-bold">218</div>
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
