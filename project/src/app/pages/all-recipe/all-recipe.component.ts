import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-all-recipe',
  templateUrl: './all-recipe.component.html',
  styleUrls: ['./all-recipe.component.scss'],
})
export class AllRecipeComponent implements OnInit {
  recipes: any[] = [];

  filteredRecipes = this.recipes;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}
  ngOnInit() {
    const stored = localStorage.getItem('recipes');
    this.recipes = stored ? JSON.parse(stored) : [];
  }

  onViewDetails(id: number, title: string) {
    this.router.navigate(['/recipe-details', id, title]);
  }

  selectedRecipe: any = null;

  editRecipe(recipe: any): void {
    this.selectedRecipe = recipe;
  }

  saveEditedRecipe(updated: any): void {
    this.recipeService.saveRecipe(updated);
    this.recipes = this.recipeService.getRecipes();
    this.selectedRecipe = null;
  }

  closeModal(): void {
    this.selectedRecipe = null;
  }
  deleteRecipe(id: string): void {
    const confirmDelete = confirm(
      'Are you sure you want to delete this recipe?'
    );
    if (confirmDelete) {
      this.recipeService.deleteRecipe(id);
      this.recipes = this.recipeService.getRecipes();
      this.filteredRecipes = [...this.recipes];
    }
  }
}
// this.route.queryParams.subscribe((params) => {
//   const maxPrice = +params['maxPrice'];

//   if (!isNaN(maxPrice) && maxPrice > 0) {
//     this.filteredRecipes = this.recipes.filter((r) => r.price <= maxPrice);
//   } else {
//     this.filteredRecipes = this.recipes;
//   }
// });
