import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  @Input() user?: any;
  @Output() select = new EventEmitter()

  onSelectUser (id: any){
    this.select.emit(id)
  }
}
