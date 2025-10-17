import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ingredient } from 'src/app/type/recipe.interface';

@Component({
  selector: 'app-add-ingredients',
  templateUrl: './add-ingredients.component.html',
  styleUrls: ['./add-ingredients.component.scss']
})
export class AddIngredientsComponent implements OnInit {
  ingredientForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.ingredientForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      image: [''],
      description: ['', [Validators.required, Validators.minLength(5)]],
      price: [null, [Validators.required, Validators.min(1)]],
      inStock: [true]
    });
  }

  onSubmit(): void {
    if (this.ingredientForm.valid) {
      const ingredients: Ingredient[] = JSON.parse(localStorage.getItem('ingredients') || '[]');
      const newIngredient: Ingredient = { id: Date.now(), ...this.ingredientForm.value };
      ingredients.push(newIngredient);
      localStorage.setItem('ingredients', JSON.stringify(ingredients));
      alert('✅ Ingredient added successfully!');
      this.ingredientForm.reset({ inStock: true });
    } else {
      alert('⚠️ Please fill all required fields correctly.');
    }
  }
}
