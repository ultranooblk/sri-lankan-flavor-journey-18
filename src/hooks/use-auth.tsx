
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from '@/hooks/use-toast';

type User = {
  id: string;
  name: string;
  email: string;
  image?: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is logged in from localStorage on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  // In a real app, this would call an API
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);

      // Simulate API call with basic validation
      if (!email || !password) {
        toast({
          title: "Error",
          description: "Email and password are required",
          variant: "destructive"
        });
        return false;
      }
      
      // For demo purposes, any valid email and password will work
      // In a real app, this would be a proper API call
      const mockUser: User = {
        id: '123456',
        name: email.split('@')[0],
        email: email,
        image: 'https://i.pravatar.cc/150?u=' + email,
      };
      
      // Save to localStorage
      localStorage.setItem('user', JSON.stringify(mockUser));
      setUser(mockUser);
      
      toast({
        title: "Success",
        description: "You have successfully logged in",
      });
      
      return true;
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to login. Please try again.",
        variant: "destructive"
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      
      // Simulate API call with basic validation
      if (!name || !email || !password) {
        toast({
          title: "Error",
          description: "All fields are required",
          variant: "destructive"
        });
        return false;
      }
      
      // For demo purposes, any valid inputs will work
      const mockUser: User = {
        id: '123456',
        name: name,
        email: email,
        image: 'https://i.pravatar.cc/150?u=' + email,
      };
      
      // Save to localStorage
      localStorage.setItem('user', JSON.stringify(mockUser));
      setUser(mockUser);
      
      toast({
        title: "Success",
        description: "Your account has been created successfully",
      });
      
      return true;
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create account. Please try again.",
        variant: "destructive"
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('cart'); // Also clear cart data on logout
    setUser(null);
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
