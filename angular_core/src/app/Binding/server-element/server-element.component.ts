import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss']
})
export class ServerElementComponent implements OnInit {
  fontsize = 30
  isHovered = false

  @Input()
  element!: { type: string; name: string; content: string; };
  constructor() {

   }

  ngOnInit(): void {
  }

}
