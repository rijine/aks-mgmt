import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable()
export class UserFormService {
  constructor(private fb: FormBuilder) {}

  public getUserForm() {
    return this.fb.group({
      firstName: [
        '',
        [Validators.required, Validators.min(3), Validators.max(20)]
      ],
      lastName: [
        '',
        [Validators.required, Validators.min(3), Validators.max(20)]
      ],
      dateOfBirth: ['', [Validators.required]],
      address: this.fb.group({
        street: [
          '',
          [Validators.required, Validators.min(3), Validators.max(20)]
        ],
        houseNumber: [
          '',
          [Validators.required, Validators.min(1), Validators.max(20)]
        ],
        city: [
          '',
          [Validators.required, Validators.min(3), Validators.max(20)]
        ],
        postCode: [
          '',
          [Validators.required, Validators.min(1), Validators.max(15)]
        ],
        country: [
          '',
          [Validators.required, Validators.min(3), Validators.max(20)]
        ]
      })
    });
  }
}
