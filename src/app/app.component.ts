import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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

}
