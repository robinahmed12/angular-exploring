import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  // styleUrls: ['./add-recipe.component.css'],
})
export class AddRecipeComponent {
  @Output() recipeSubmitted = new EventEmitter<any>();

  recipeForm: FormGroup;
  difficultyLevels = ['Easy', 'Medium', 'Hard'];
  categories = [
    'Breakfast',
    'Lunch',
    'Dinner',
    'Dessert',
    'Snack',
    'Vegetarian',
    'Vegan',
  ];

  constructor(private fb: FormBuilder, private recipeService: RecipeService) {
    this.recipeForm = this.createForm();
  }

  createForm(): FormGroup {
    return this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      prepTime: ['', [Validators.required, Validators.min(1)]],
      cookTime: ['', [Validators.required, Validators.min(1)]],
      servings: ['', [Validators.required, Validators.min(1)]],
      difficulty: ['', Validators.required],
      category: ['', Validators.required],
      ingredients: this.fb.array([this.createIngredient()]),
      instructions: this.fb.array([this.createInstruction()]),
      tags: this.fb.array([]),
      image: [],
    });
  }

  // Ingredients FormArray methods
  get ingredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  createIngredient(): FormGroup {
    return this.fb.group({
      amount: ['', Validators.required],
      unit: [''],
      name: ['', Validators.required],
    });
  }

  addIngredient(): void {
    this.ingredients.push(this.createIngredient());
  }

  removeIngredient(index: number): void {
    this.ingredients.removeAt(index);
  }

  // Instructions FormArray methods
  get instructions(): FormArray {
    return this.recipeForm.get('instructions') as FormArray;
  }

  createInstruction(): FormGroup {
    return this.fb.group({
      step: ['', Validators.required],
    });
  }

  addInstruction(): void {
    this.instructions.push(this.createInstruction());
  }

  removeInstruction(index: number): void {
    this.instructions.removeAt(index);
  }

  // Tags FormArray methods
  get tags(): FormArray {
    return this.recipeForm.get('tags') as FormArray;
  }

  addTag(event: any): void {
    const value = event.target.value.trim();
    if (value && !this.tags.controls.some((tag) => tag.value === value)) {
      this.tags.push(this.fb.control(value));
      event.target.value = '';
    }
  }

  removeTag(index: number): void {
    this.tags.removeAt(index);
  }

  // Image upload handler
  onImageSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.recipeForm.patchValue({ image: file });

      // Preview image
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const preview = document.getElementById(
          'imagePreview'
        ) as HTMLImageElement;
        if (preview) {
          preview.src = e.target.result;
          preview.classList.remove('hidden');
        }
      };
      reader.readAsDataURL(file);
    }
  }

  // Form submission
  onSubmit(): void {
    if (this.recipeForm.valid) {
      const formData = this.recipeForm.value;
      formData.id = formData.id || Date.now().toString()

      const imageFile = formData.image;
      if (imageFile) {
        const reader = new FileReader();
        reader.onload = () => {
          const base64Image = reader.result as string;
          formData.image = base64Image;

          this.saveToLocalStorage(formData);
        };
        reader.readAsDataURL(imageFile);
      } else {
        this.saveToLocalStorage(formData);
      }
    } else {
      this.markFormGroupTouched(this.recipeForm);
    }
  }

  saveToLocalStorage(recipe: any): void {
    const existing = localStorage.getItem('recipes');
    const recipes = existing ? JSON.parse(existing) : [];

    recipes.push(recipe);
    localStorage.setItem('recipes', JSON.stringify(recipes));

    alert('Recipe saved locally!');
    this.recipeSubmitted.emit(recipe);
    this.resetForm();
  }

  resetForm() {
    throw new Error('Method not implemented.');
  }

  // Helper to mark all form controls as touched
  markFormGroupTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((key) => {
      const control = formGroup.get(key);
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      } else if (control instanceof FormArray) {
        control.controls.forEach((arrayControl: any) => {
          if (arrayControl instanceof FormGroup) {
            this.markFormGroupTouched(arrayControl);
          } else {
            arrayControl.markAsTouched();
          }
        });
      } else {
        control?.markAsTouched();
      }
    });
  }
}
