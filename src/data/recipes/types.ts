
// Define types for recipe data
export interface Recipe {
  id: string;
  title: string;
  image: string;
  time: number;
  servings: string;
  spiceLevel: number;
  tags: string[];
  description: string;
  ingredients?: string[];
  instructions?: string[];
  nutrition?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  chefNotes?: string;
  price?: number;
}
