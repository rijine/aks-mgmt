import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() menuItems = [];
  showToggle = false;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  toggle() {
    this.showToggle = !this.showToggle;
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
