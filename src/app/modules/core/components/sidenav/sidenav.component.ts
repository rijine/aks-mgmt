import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() menuItems = [];
  isShow = false;

  @Input() set show(shown: boolean) {
    this.isShow = shown;
  }

  @Output() logout = new EventEmitter();
  @Output() closed = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onSignOut() {
    this.logout.emit();
  }

  onClose() {
    this.closed.emit();
  }
}
