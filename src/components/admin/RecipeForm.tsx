
import { useState, useEffect } from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Recipe } from '@/services/recipeService';

interface RecipeFormProps {
  recipe: Recipe | null;
  onSave: (recipe: Recipe) => void;
  onCancel: () => void;
}

const RecipeForm = ({ recipe, onSave, onCancel }: RecipeFormProps) => {
  const [formData, setFormData] = useState<Partial<Recipe>>({
    id: '',
    title: '',
    image: '',
    time: 30,
    servings: '2-4',
    spiceLevel: 1,
    tags: [''],
    description: '',
    ingredients: [''],
    instructions: [''],
    nutrition: {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0
    },
    chefNotes: '',
    price: 18.99
  });

  useEffect(() => {
    if (recipe) {
      setFormData({
        ...recipe,
        // Ensure all array fields exist
        tags: recipe.tags || [''],
        ingredients: recipe.ingredients || [''],
        instructions: recipe.instructions || [''],
        nutrition: recipe.nutrition || {
          calories: 0,
          protein: 0,
          carbs: 0,
          fat: 0
        },
        price: recipe.price || 18.99
      });
    }
  }, [recipe]);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: Number(value) });
  };

  const handleNutritionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      nutrition: {
        ...formData.nutrition!,
        [name]: Number(value)
      }
    });
  };

  const handleArrayItemChange = (type: 'tags' | 'ingredients' | 'instructions', index: number, value: string) => {
    const newArray = [...(formData[type] || [])];
    newArray[index] = value;
    setFormData({ ...formData, [type]: newArray });
  };

  const addArrayItem = (type: 'tags' | 'ingredients' | 'instructions') => {
    const newArray = [...(formData[type] || []), ''];
    setFormData({ ...formData, [type]: newArray });
  };

  const removeArrayItem = (type: 'tags' | 'ingredients' | 'instructions', index: number) => {
    const newArray = [...(formData[type] || [])];
    if (newArray.length > 1) {
      newArray.splice(index, 1);
      setFormData({ ...formData, [type]: newArray });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Remove empty items from arrays
    const cleanedData = {
      ...formData,
      tags: formData.tags?.filter(tag => tag.trim() !== '') || [],
      ingredients: formData.ingredients?.filter(item => item.trim() !== '') || [],
      instructions: formData.instructions?.filter(item => item.trim() !== '') || []
    } as Recipe;
    
    onSave(cleanedData);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{recipe ? 'Edit Recipe' : 'Create New Recipe'}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Recipe Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleTextChange}
                  required
                />
              </div>

              <div>
                <Label htmlFor="image">Image URL</Label>
                <Input
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleTextChange}
                  placeholder="https://example.com/image.jpg"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="time">Cooking Time (minutes)</Label>
                  <Input
                    id="time"
                    name="time"
                    type="number"
                    min="1"
                    value={formData.time}
                    onChange={handleNumberChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="servings">Servings</Label>
                  <Input
                    id="servings"
                    name="servings"
                    value={formData.servings}
                    onChange={handleTextChange}
                    placeholder="2-4"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="spiceLevel">Spice Level (1-5)</Label>
                  <Input
                    id="spiceLevel"
                    name="spiceLevel"
                    type="number"
                    min="1"
                    max="5"
                    value={formData.spiceLevel}
                    onChange={handleNumberChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="price">Price ($)</Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.price}
                    onChange={handleNumberChange}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleTextChange}
                  rows={3}
                  required
                />
              </div>

              <div>
                <Label htmlFor="chefNotes">Chef Notes</Label>
                <Textarea
                  id="chefNotes"
                  name="chefNotes"
                  value={formData.chefNotes}
                  onChange={handleTextChange}
                  rows={3}
                />
              </div>
            </div>

            {/* Tags, Ingredients, Instructions */}
            <div className="space-y-6">
              {/* Tags Section */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <Label>Tags</Label>
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm" 
                    onClick={() => addArrayItem('tags')}
                    className="h-8 px-2"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Add Tag
                  </Button>
                </div>
                {formData.tags?.map((tag, index) => (
                  <div key={`tag-${index}`} className="flex gap-2 mb-2">
                    <Input
                      value={tag}
                      onChange={(e) => handleArrayItemChange('tags', index, e.target.value)}
                      placeholder="Tag name"
                    />
                    <Button 
                      type="button" 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => removeArrayItem('tags', index)}
                      disabled={formData.tags?.length === 1}
                      className="h-10 w-10"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>

              {/* Nutrition Information */}
              <div>
                <Label className="mb-2 block">Nutrition Information</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="calories">Calories</Label>
                    <Input
                      id="calories"
                      name="calories"
                      type="number"
                      min="0"
                      value={formData.nutrition?.calories}
                      onChange={handleNutritionChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="protein">Protein (g)</Label>
                    <Input
                      id="protein"
                      name="protein"
                      type="number"
                      min="0"
                      value={formData.nutrition?.protein}
                      onChange={handleNutritionChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="carbs">Carbs (g)</Label>
                    <Input
                      id="carbs"
                      name="carbs"
                      type="number"
                      min="0"
                      value={formData.nutrition?.carbs}
                      onChange={handleNutritionChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="fat">Fat (g)</Label>
                    <Input
                      id="fat"
                      name="fat"
                      type="number"
                      min="0"
                      value={formData.nutrition?.fat}
                      onChange={handleNutritionChange}
                    />
                  </div>
                </div>
              </div>

              {/* Ingredients Section */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <Label>Ingredients</Label>
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm" 
                    onClick={() => addArrayItem('ingredients')}
                    className="h-8 px-2"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Add Ingredient
                  </Button>
                </div>
                {formData.ingredients?.map((ingredient, index) => (
                  <div key={`ingredient-${index}`} className="flex gap-2 mb-2">
                    <Input
                      value={ingredient}
                      onChange={(e) => handleArrayItemChange('ingredients', index, e.target.value)}
                      placeholder="1 cup flour"
                    />
                    <Button 
                      type="button" 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => removeArrayItem('ingredients', index)}
                      disabled={formData.ingredients?.length === 1}
                      className="h-10 w-10"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>

              {/* Instructions Section */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <Label>Instructions</Label>
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm" 
                    onClick={() => addArrayItem('instructions')}
                    className="h-8 px-2"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Add Step
                  </Button>
                </div>
                {formData.instructions?.map((instruction, index) => (
                  <div key={`instruction-${index}`} className="flex gap-2 mb-2">
                    <div className="flex-none pt-2 px-2 text-sm font-medium text-muted-foreground">
                      {index + 1}.
                    </div>
                    <Textarea
                      value={instruction}
                      onChange={(e) => handleArrayItemChange('instructions', index, e.target.value)}
                      placeholder={`Step ${index + 1}`}
                      className="flex-1"
                    />
                    <Button 
                      type="button" 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => removeArrayItem('instructions', index)}
                      disabled={formData.instructions?.length === 1}
                      className="h-10 w-10 mt-1"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit">
              {recipe ? 'Update Recipe' : 'Create Recipe'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default RecipeForm;
