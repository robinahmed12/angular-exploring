import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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

  title = 'angular_core';
}
