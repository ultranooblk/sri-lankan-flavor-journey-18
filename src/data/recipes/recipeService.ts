
import { Recipe } from './types';
import { allRecipes } from './recipes';

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
