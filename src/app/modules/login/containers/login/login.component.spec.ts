import {
  async,
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync
} from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { LocalStorageService } from '../../../shared/services/local-storage.service';
import { HomeComponent } from '../../../home/containers/home/home.component';
import { HomeModule } from '../../../home/home.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Location } from '@angular/common';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let location: Location;
  let service: AuthService;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthService, LocalStorageService],
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: '',
            component: HomeComponent
          }
        ]),
        HomeModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    location = TestBed.get(Location);
    service = TestBed.get(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('login()', () => {
    beforeEach(() => {});
    it('invalid form', () => {
      component.login();
      expect(component.loginForm.touched).toBeTruthy();
    });

    it('valid form & valid credentials', fakeAsync(() => {
      component.loginForm.patchValue({ email: 'abc@ex.com', pwd: '32323' });
      spy = spyOn(service, 'login').and.returnValue(of(true));
      component.login();
      tick(5);
      expect(location.path()).toBe('/');
      expect(service.login).toHaveBeenCalled();
    }));

    it('valid form & in valid credentials', fakeAsync(() => {
      component.loginForm.patchValue({ email: 'abc@ex.com', pwd: '32323' });
      localStorage.removeItem('user');
      spy = spyOn(service, 'login').and.returnValue(of(false));
      component.login();
      const user = localStorage.getItem('user');
      expect(user).toBeNull();

      tick(5);
      expect(location.path()).toBe('');
      expect(service.login).toHaveBeenCalled();
    }));
  });
});
