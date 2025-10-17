import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/type/recipe.interface';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  recipe!: Recipe
   

  constructor(private route: ActivatedRoute , router: Router) {}

  ngOnInit(): void {
    // this.recipe = {
    //   id: this.route.snapshot.params['id'],
    //   title: this.route.snapshot.params['title'],
    // };
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    this.recipe = recipes.find((r: any) => r.id === id);
  }

  // goBack(): void {
  //   this.router.navigate(['/recipes']);
  // }

  //  this.route.fragment.subscribe(fragment => {
  //   if (fragment) {
  //     setTimeout(() => {
  //       document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
  //     }, 100);
  //   }
  // });
}
