import { Component, OnInit } from '@angular/core';

import { MenuItems } from '../../../shared/constants/nav-items.constants';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  menuItems = MenuItems;
  showSideNav = false;
  constructor(private auth: AuthService) {}

  ngOnInit() {}

  navChanged() {
    this.showSideNav = !this.showSideNav;
  }

  logout() {
    this.auth.logout();
  }
}
