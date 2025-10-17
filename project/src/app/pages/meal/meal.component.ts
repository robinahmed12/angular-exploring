import { Component, OnInit } from '@angular/core';
import { MealService } from 'src/app/services/meal.service';
import { Meal } from 'src/app/type/meal.interface';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {
  meals: Meal[] = [];
  searchTerm: string = '';

  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    this.loadRandomMeals();
  }

  loadRandomMeals() {
    this.mealService.getRandomMeal().subscribe(res => {
      this.meals = res.meals;
    });
  }

  searchMeals() {
    if (!this.searchTerm.trim()) return;
    this.mealService.searchMeals(this.searchTerm).subscribe(res => {
      this.meals = res.meals || [];
    });
  }

}
