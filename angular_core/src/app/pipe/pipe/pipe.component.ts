import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }
  shoppingList =[
  {
    "id": 1,
    "product": "Gold",
    "price": 1200,
    "quantity": 1,
    "purchaseDate":""
  },
  {
    "id": 2,
    "product": "Silver",
    "price": 800,
    "quantity": 2,
    "purchaseDate": "today"
  },
  {
    "id": 3,
    "product": "Diamond",
    "price": 5000,
    "quantity": 1,
    "purchaseDate": ""
  }
]

filterProduct= ""

}
