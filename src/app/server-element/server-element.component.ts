import {
  Component,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
OnInit,
OnChanges,
OnDestroy,
DoCheck ,
AfterContentInit ,
AfterContentChecked,
AfterViewInit,
AfterViewChecked {
  //  @Input('srvElement') element: {
  @Input() element: {
    type: string,
    name: string,
    content: string
  }
  @Input() name: string;
  @ViewChild('heading', { static: true })
  header: ElementRef;

  constructor() {
    console.log('constructor was called')
   }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    console.log('ngOnChanges was called')
  }

  ngOnInit(): void {
    console.log('ngOnInit was called')
    console.log('-> textContext: ' + this.header.nativeElement.textContent)
  }

  ngDoCheck () {
    console.log('ngDoCheck was called')

  }
  ngAfterContentInit () {
    console.log('ngAfterContentInit was called')

  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked was called')

  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit was called')
    console.log('-> textContext: ' + this.header.nativeElement.textContent)

  }
  ngAfterViewChecked () {
    console.log('ngAfterViewChecked was called')

  }
  ngOnDestroy() {
    console.log('ngOnDestroy was called')
  }
}
