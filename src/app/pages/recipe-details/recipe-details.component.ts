import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  recipe!: { id: number; name: string; } 

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipe = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
  }

}
