
import { Recipe } from '@/data/recipes/types';
import { allRecipes as recipes } from '@/data/recipes/recipes';

// Re-export the Recipe type
export type { Recipe };

// Re-export the recipes array
export const allRecipes = recipes;

/**
 * Get a recipe by its ID
 * @param id The ID of the recipe to find
 * @returns The recipe object or undefined if not found
 */
export function getRecipeById(id: string): Recipe | undefined {
  return allRecipes.find(recipe => recipe.id === id);
}

/**
 * Get featured recipes for display on the homepage
 * @returns An array of featured recipes
 */
export function getFeaturedRecipes(): Recipe[] {
  return allRecipes.slice(0, 3);
}

/**
 * Get all available recipes (those with valid images)
 * @returns An array of all recipes with valid images
 */
export function getAvailableRecipes(): Recipe[] {
  return allRecipes;
}
