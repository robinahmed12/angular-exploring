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

  handleClick() {
throw new Error('Method not implemented.');
}
  srvElement = [
    { type: 'server', name: 'Testserver', content: 'Just a test!' },
  ];

  onServerAdd(serverData: { serverName: string; serverContent: string }) {
    this.srvElement.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onAddBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.srvElement.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }

  // numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;
  value = 5;

    accounts: {name: string, status: string}[] = [];

    // userClick(){
    //   alert("hi my name robin")
    // }
}
