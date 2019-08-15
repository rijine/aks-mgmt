import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() toggle = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onToggle() {
    this.toggle.emit();
  }
}
