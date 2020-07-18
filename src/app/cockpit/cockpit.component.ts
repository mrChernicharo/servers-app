import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output()
  serverCreated = new EventEmitter<{serverName: string,serverContent: string}>();

  @Output()
  blueprintCreated = new EventEmitter<{blueprintName: string,blueprintContent: string}>();;

  @ViewChild('serverContentInput', { static: true })
  serverContentInput: ElementRef;
  // newServerName = '';
  // newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(nameInput: HTMLInputElement) {
    console.log(nameInput)
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    console.log(this.serverContentInput)
    this.blueprintCreated.emit({
      blueprintName: nameInput.value,
      blueprintContent: this.serverContentInput.nativeElement.value
    })
  }

}
