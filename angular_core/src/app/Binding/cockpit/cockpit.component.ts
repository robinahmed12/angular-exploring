import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss'],
})
export class CockpitComponent implements OnInit {

  isActive = false
  selectedItem = "home"
  isLoading = true
  location = 'b.baria';
  items = ["home", "about", "contact"]
  // @Output() clicked = EventEmitter
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() bluePrintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  newServerName = '';
  newServerContent = '';

  constructor() {}

  ngOnInit(): void {}

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }

  onAddBluePrint() {
    this.bluePrintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }

  toggleActive (){
    this.isActive = !this.isActive
  }

  selectedItems(item: string){
    this.selectedItem = item 
  }
}
