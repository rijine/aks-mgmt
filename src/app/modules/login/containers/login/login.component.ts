import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: [],
      pwd: []
    });
  }

  ngOnInit() {}

  public login() {
    this.auth.login(this.loginForm.value).subscribe(isAuthorized => {
      if (isAuthorized) {
        this.router.navigate(['']);
      }
    });
  }
}
