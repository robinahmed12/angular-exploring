import { Recipe } from './../recepies/recepie.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  loadRecipe(){
    this.router.navigate(["/all-recipe"])
  }

}
