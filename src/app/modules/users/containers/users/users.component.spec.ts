import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { SharedModule } from '../../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '../../../core/core.module';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersService } from '../../services/users.service';
import { UserListComponent } from '../../components/user-list/user-list.component';
import { UserItemComponent } from '../../components/user-item/user-item.component';
import { CreateUserComponent } from '../create-user/create-user.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { Location } from '@angular/common';
import { UsersModule } from '../../users.module';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: 'user/create',
            component: CreateUserComponent
          },
          {
            path: 'user/:id',
            component: UserDetailsComponent
          }
        ]),
        CoreModule,
        UsersModule,
        HttpClientModule,
        SharedModule
      ],
      providers: [UsersService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    location = TestBed.get(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('createUser', fakeAsync(() => {
    component.createUser();
    tick(5);
    expect(location.path()).toBe('/user/create');
  }));

  it('onSelect', fakeAsync(() => {
    component.onSelect('123');
    tick(5);
    expect(location.path()).toBe('/user/123');
  }));
});
