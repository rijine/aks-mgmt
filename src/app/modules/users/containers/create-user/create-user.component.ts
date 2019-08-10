import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserFormService } from '../../services/user-form.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  userForm: FormGroup;

  constructor(private ufs: UserFormService) {
    this.userForm = this.ufs.getUserForm();
  }

  ngOnInit() {}
}
