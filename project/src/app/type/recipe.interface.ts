export interface Recipe {
  id?: number
  title: string;
  description: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard' | string; // you can adjust types
  category: string;
  ingredients: Ingredient[];
  instructions: Instruction[];
  tags: string[];
  image: File | null; // or string if you're storing image URL
}

export interface Ingredient {
  name: string;
  quantity: string; // e.g., "2 cups", "1 tbsp"
}

export interface Instruction {
  step: string;
}
