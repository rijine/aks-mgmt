import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { UserFormService } from '../../services/user-form.service';
import { UsersService } from '../../services/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  userForm: FormGroup;
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
    const createUser$: Subscription = this.userSrv
      .createUser({
        ...this.userForm.value
      })
      .subscribe(res => {
        this.saving = false;
        this.saved = true;
        this.userForm.reset();
        createUser$.unsubscribe();
      });
  }

  goBack() {
    this.router.navigate(['../../users'], { relativeTo: this.route });
  }
}
