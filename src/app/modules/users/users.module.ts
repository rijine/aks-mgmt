import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/shared.module';
import {
  UsersComponent,
  UserDetailsComponent,
  CreateUserComponent
} from './containers';
import { UserItemComponent, UserListComponent } from './components';
import { UserFormService, UsersService } from './services';

@NgModule({
  declarations: [
    UserDetailsComponent,
    UsersComponent,
    UserItemComponent,
    UserListComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    SharedModule
  ],
  providers: [UserFormService, UsersService]
})
export class UsersModule {}
