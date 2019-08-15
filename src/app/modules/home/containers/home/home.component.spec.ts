import {
  async,
  fakeAsync,
  tick,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';
import { CoreModule } from '../../../core/core.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { AuthService } from '../../../shared/services/auth.service';
import { AuthGuard } from '../../../shared/guards/auth.guard';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Location } from '@angular/common';
import { LoginComponent } from '../../../login/containers/login/login.component';
import { LoginModule } from '../../../login/login.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        HttpClientTestingModule,
        LoginModule,
        RouterTestingModule.withRoutes([
          {
            path: 'login',
            component: LoginComponent
          }
        ]),
        CoreModule,
        SharedModule
      ],
      providers: [AuthGuard, AuthService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    location = TestBed.get(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('navChanged', () => {
    const nav = component.showSideNav;
    component.navChanged();
    expect(!nav).toBe(component.showSideNav);
  });

  it('logout', fakeAsync(() => {
    component.logout();
    tick(5);
    expect(location.path()).toBe('/login');
  }));
});
