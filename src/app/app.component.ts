import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [
    {
      type: 'server',
      name: 'test1',
      content: 'bla bla blah',
    },
    {
      type: 'server',
      name: 'test2',
      content: 'bla bla blahhhhh',
    },
    {
      type: 'blueprint',
      name: 'test3',
      content: 'bla bla blahhhhh',
    },
  ];

    onServerAdded(serverData: {
      serverName: string,
      serverContent: string
    }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(bluePrintData: {
    blueprintName: string,
    blueprintContent: string
  }) {
  this.serverElements.push({
    type: 'blueprint',
    name: bluePrintData.blueprintName,
    content: bluePrintData.blueprintContent
  });
}

}
