import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  age = 20;
  @Input() hero!: string;

  @Output() clicked = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log('Received name:', this.hero);
  }

  handClick() {
    this.clicked.emit();
  }


  
}
