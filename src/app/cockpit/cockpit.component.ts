import { Component, OnInit, EventEmitter, Output } from '@angular/core';

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

  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }
  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      blueprintName: this.newServerName,
      blueprintContent: this.newServerContent
    })
  }

}
