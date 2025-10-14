import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recepie.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.scss']
})
export class RecepieListComponent implements OnInit {
  recipe:  Recipe [] = [
 new Recipe ("biriyani","yummy","https://plus.unsplash.com/premium_photo-1661771822467-e516ca075314?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGlzaHxlbnwwfHwwfHx8MA%3D%3D")
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
