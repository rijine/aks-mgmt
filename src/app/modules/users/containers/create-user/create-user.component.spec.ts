import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CreateUserComponent } from './create-user.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '../../../core/core.module';
import { SharedModule } from '../../../shared/shared.module';
import { UsersService } from '../../services/users.service';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormService } from '../../services/user-form.service';
import { UsersComponent } from '../users/users.component';
import { Location } from '@angular/common';
import { UsersModule } from '../../users.module';

describe('CreateUserComponent', () => {
  let component: CreateUserComponent;
  let fixture: ComponentFixture<CreateUserComponent>;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: 'users',
            component: UsersComponent
          }
        ]),
        FormsModule,
        UsersModule,
        ReactiveFormsModule,
        CoreModule,
        MatDatepickerModule,
        MatNativeDateModule,
        HttpClientTestingModule,
        SharedModule
      ],
      providers: [UsersService, UserFormService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserComponent);
    component = fixture.componentInstance;
    location = TestBed.get(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Save', () => {
    it('invalid form returns', () => {
      component.onSave();
      expect(component.userForm.touched).toBe(true);
    });

    it('valid form', () => {
      const data = {
        id: '1231',
        firstName: 'Steveas',
        lastName: 'Jobs asd',
        dateOfBirth: '8/23/2019',
        address: {
          street: 'Frankfurter',
          houseNumber: '3asda',
          city: 'Berlin',
          postCode: '13123',
          country: 'Germany'
        }
      };

      component.userForm.patchValue(data);
      component.userForm.updateValueAndValidity();
      Object.keys(component.userForm.controls).forEach(key => {
        console.log(
          key,
          component.userForm.controls[key].value,
          component.userForm.controls[key].valid
        );
      });
      component.onSave();
    });
  });

  it('valid form', fakeAsync(() => {
    component.goBack();
    tick(5);
    expect(location.path()).toBe('/users');
  }));
});
