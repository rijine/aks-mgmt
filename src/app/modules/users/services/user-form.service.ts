import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Injectable()
export class UserFormService {
  constructor(private fb: FormBuilder) {}

  public getUserForm() {
    return this.fb.group({
      firstName: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(20)]
      ],
      lastName: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(20)]
      ],
      dateOfBirth: ['', [Validators.required]],
      address: this.fb.group({
        street: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20)
          ]
        ],
        houseNumber: [
          '',
          [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(20)
          ]
        ],
        city: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20)
          ]
        ],
        postCode: [
          '',
          [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(15)
          ]
        ],
        country: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20)
          ]
        ]
      })
    });
  }

  public markInfoAsDirty(group: FormGroup) {
    Object.keys(group.controls).forEach(key => {
      group.controls[key].markAsDirty();
      group.controls[key].markAsTouched();
    });
  }
}
