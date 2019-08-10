import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable()
export class UserFormService {
  constructor(private fb: FormBuilder) {}

  public getUserForm() {
    return this.fb.group({
      firstName: [],
      lastName: [],
      dateOfBirth: [],
      address: this.fb.group({
        street: [],
        houseNumber: [],
        city: [],
        postCode: [],
        country: []
      })
    });
  }
}
