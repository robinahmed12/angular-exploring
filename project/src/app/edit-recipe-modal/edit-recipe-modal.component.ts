import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Recipe } from '../type/recipe.interface';


@Component({
  selector: 'app-edit-recipe-modal',
  templateUrl: './edit-recipe-modal.component.html',
  styleUrls: ['./edit-recipe-modal.component.scss'],
})
export class EditRecipeModalComponent implements OnInit {
  @Input() recipe!: Recipe;
  @Output() save = new EventEmitter<Recipe>();
  @Output() close = new EventEmitter<void>(); // ✅ fixed

  editForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.editForm = this.fb.group({
      title: [this.recipe?.title || ''],
      description: [this.recipe?.description || ''],
      prepTime: [this.recipe?.prepTime || 0],
      cookTime: [this.recipe?.cookTime || 0],
      servings: [this.recipe?.servings || 1],
    });
  }

  onSave(): void {
    const updated = { ...this.recipe, ...this.editForm.value };
    this.save.emit(updated); // ✅ correct usage
  }

  onClose(): void {
    this.close.emit(); // ✅ no argument needed
  }
}
