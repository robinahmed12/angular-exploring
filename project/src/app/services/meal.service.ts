import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meal } from '../type/meal.interface';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  // Get meals by name
  searchMeals(name: string): Observable<{ meals: Meal[] }> {
    return this.http.get<{ meals: Meal[] }>(`${this.apiUrl}/search.php?s=${name}`);
  }

  // Get meal by id
  getMealById(id: string): Observable<{ meals: Meal[] }> {
    return this.http.get<{ meals: Meal[] }>(`${this.apiUrl}/lookup.php?i=${id}`);
  }

  // Get random meal
  getRandomMeal(): Observable<{ meals: Meal[] }> {
    return this.http.get<{ meals: Meal[] }>(`${this.apiUrl}/random.php`);
  }

  // List categories
  getCategories(): Observable<{ categories: any[] }> {
    return this.http.get<{ categories: any[] }>(`${this.apiUrl}/categories.php`);
  }
}
