import { Component, OnInit } from '@angular/core';
import { ingredient } from 'src/app/shared/app.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  listIngredient: ingredient[]= [
    new ingredient ("chili", 5)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
