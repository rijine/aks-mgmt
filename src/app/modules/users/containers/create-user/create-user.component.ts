import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { UserFormService } from '../../services/user-form.service';
import { UsersService } from '../../services/users.service';
import { MenuItems } from '../../../shared/constants/nav-items.constants';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  userForm: FormGroup;
  menuItems = MenuItems;
  saving = false;
  saved = false;

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
    if (!this.userForm.valid) {
      this.ufs.markInfoAsDirty(this.userForm);
      return;
    }

    this.saving = true;
    this.userSrv
      .createUser({
        ...this.userForm.value,
        id: new Date().getTime().toString()
      })
      .subscribe(res => {
        this.saving = false;
        this.saved = true;
        this.userForm.reset();
      });
  }

  goBack() {
    this.router.navigate(['../../users'], { relativeTo: this.route });
  }
}
