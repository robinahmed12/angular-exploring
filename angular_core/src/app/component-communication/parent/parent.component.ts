import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  currentHero = 'iron man';

  constructor() {}

  ngOnInit(): void {
    
  }

  userClick() {
    alert('my name robin ');
  }
}
