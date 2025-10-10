import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-contnet',
  templateUrl: './child-contnet.component.html',
  styleUrls: ['./child-contnet.component.scss']
})
export class ChildContnetComponent implements OnInit {
    @Input() type!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
