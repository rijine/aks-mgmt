import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {
  UsersComponent,
  UserDetailsComponent,
  CreateUserComponent
} from './containers';
import { UserItemComponent, UserListComponent } from './components';

@NgModule({
  declarations: [
    UserDetailsComponent,
    UsersComponent,
    UserItemComponent,
    UserListComponent,
    CreateUserComponent
  ],
  imports: [CommonModule, UsersRoutingModule]
})
export class UsersModule {}
