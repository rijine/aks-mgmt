import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { MenuItems } from '../../../shared/constants/nav-items.constants';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  menuItems = MenuItems;

  constructor(
    private userSrv: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userSrv.getUsers().subscribe((res: User[]) => {
      this.users = res;
    });
  }

  createUser() {
    this.router.navigate(['../user/create'], { relativeTo: this.route });
  }

  onSelect(id: string) {
    this.router.navigate(['../user', id], { relativeTo: this.route });
  }
}
