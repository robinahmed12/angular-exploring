import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-recipe',
  templateUrl: './all-recipe.component.html',
  styleUrls: ['./all-recipe.component.scss']
})
export class AllRecipeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  recipes = [
    {id: 1 , name: "polaw"},
      {id: 2 , name: "teheri"},
        {id: 3 , name: "baji"}
  ]


  onViewDetails(id: number , name:string){
    this.router.navigate(['/all-recipe', id, name])
  }
    

}
