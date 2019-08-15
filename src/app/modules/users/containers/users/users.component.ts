import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  users: User[] = [];
  users$: Subscription;

  constructor(
    private userSrv: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getUsers();
  }

  ngOnDestroy() {
    this.users$.unsubscribe();
  }

  getUsers() {
    this.users$ = this.userSrv.getUsers().subscribe((res: User[]) => {
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
