import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, OnDestroy {
  //  @Input('srvElement') element: {
  @Input() element: {
    type: string,
    name: string,
    content: string
  }
  @Input() name: string;

  constructor() {
    console.log('constructor was called')
   }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    console.log('ngOnChanges was called')
  }

  ngOnInit(): void {
    console.log('ngOnInit was called')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy was called')
  }
}
