
import { useState, useEffect } from "react";
import { BarChart, LineChart, PieChart, Package } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { allRecipes } from '@/services/recipeService';

// Define types for our data structures
interface OrderData {
  id: string;
  customer: string;
  date: string;
  items: number;
  status: 'delivered' | 'processing' | 'shipped';
  total: number;
}

const Dashboard = () => {
  const [metrics, setMetrics] = useState({
    totalOrders: 0,
    revenue: 0,
    activeUsers: 0,
  });
  
  const [orders, setOrders] = useState<OrderData[]>([]);
  
  // Calculate real metrics from data
  useEffect(() => {
    // In a real app, this would fetch from an API
    // For now, we'll generate realistic order data
    const calculateMetrics = () => {
      // Create realistic order data
      const orderData: OrderData[] = [
        {
          id: "ORD-7924",
          customer: "Sarah Johnson",
          date: "2025-05-18",
          items: 3,
          status: "delivered",
          total: 2899
        },
        {
          id: "ORD-7823",
          customer: "Michael Chen",
          date: "2025-05-17",
          items: 2,
          status: "shipped",
          total: 1799
        },
        {
          id: "ORD-7731",
          customer: "Emma Watson",
          date: "2025-05-16",
          items: 4,
          status: "processing",
          total: 3499
        },
        {
          id: "ORD-7645",
          customer: "David Kim",
          date: "2025-05-15",
          items: 1,
          status: "delivered",
          total: 999
        },
        {
          id: "ORD-7542",
          customer: "Lisa Rodriguez",
          date: "2025-05-14",
          items: 2,
          status: "delivered",
          total: 1899
        }
      ];
      
      setOrders(orderData);
      
      // Calculate metrics based on the order data
      const totalOrders = orderData.length;
      const revenue = orderData.reduce((sum, order) => sum + order.total, 0);
      const activeUsers = new Set(orderData.map(order => order.customer)).size;
      
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

  // Helper function to get status color
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'delivered': return 'text-green-500';
      case 'processing': return 'text-amber-500';
      case 'shipped': return 'text-blue-500';
      default: return 'text-gray-500';
    }
  };

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
            <div className="text-3xl font-bold">LKR {metrics.revenue.toLocaleString()}</div>
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
          <CardTitle>Recent Orders</CardTitle>
          <CardDescription>Latest customer orders from the past week</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.items}</TableCell>
                  <TableCell>
                    <span className={`font-medium ${getStatusColor(order.status)}`}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">LKR {order.total.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
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
