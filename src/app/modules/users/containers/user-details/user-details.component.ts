import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { MenuItems } from '../../../shared/constants/nav-items.constants';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: User;
  menuItems = MenuItems;
  constructor(
    private userSrv: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getUser(params.id);
    });
  }

  getUser(id: string) {
    this.userSrv.getUser(id).subscribe((res: User) => {
      this.user = res;
    });
  }
}
