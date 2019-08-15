import { TestBed } from '@angular/core/testing';

import { UserFormService } from './user-form.service';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { UsersModule } from '../users.module';

describe('UserFormService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [FormsModule, UsersModule, ReactiveFormsModule]
    })
  );

  it('should be created', () => {
    const service: UserFormService = TestBed.get(UserFormService);
    expect(service).toBeTruthy();
  });
});
