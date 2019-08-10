import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/shared.module';
import {
  UsersComponent,
  UserDetailsComponent,
  CreateUserComponent
} from './containers';
import { UserItemComponent, UserListComponent } from './components';
import { UserFormService } from './services';

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
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    SharedModule
  ],
  providers: [UserFormService]
})
export class UsersModule {}
