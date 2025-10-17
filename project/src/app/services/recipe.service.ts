import { Injectable } from "@angular/core";
import { Recipe } from "../type/recipe.interface";

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private storageKey = 'recipes';

  getRecipes(): Recipe[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

   saveRecipe(recipe: any): void {
    const recipes = this.getRecipes();
    const index = recipes.findIndex(r => r.id === recipe.id);

    if (index > -1) {
      recipes[index] = recipe; // update
    } else {
      recipes.push(recipe); // add
    }

    localStorage.setItem(this.storageKey, JSON.stringify(recipes));
  }

  addRecipe(recipe: Recipe): void {
    const recipes = this.getRecipes();
    recipes.push(recipe);
    localStorage.setItem(this.storageKey, JSON.stringify(recipes));
  }


 deleteRecipe(id: string): void {
  const recipes = this.getRecipes().filter(r => r.id?.toString() !== id);
  localStorage.setItem('recipes', JSON.stringify(recipes));
}
}
