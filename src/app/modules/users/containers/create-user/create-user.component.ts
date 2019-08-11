import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { UserFormService } from '../../services/user-form.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private ufs: UserFormService,
    private userSrv: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.userForm = this.ufs.getUserForm();
  }
  ngOnInit() {}

  onSave() {
    this.userSrv
      .createUser({
        ...this.userForm.value,
        id: new Date().getTime()
      })
      .subscribe(res => {
        console.log(res);
      });
  }

  goBack() {
    this.router.navigate(['../../users'], { relativeTo: this.route });
  }
}
