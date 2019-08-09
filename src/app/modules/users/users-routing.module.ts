import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  UsersComponent,
  UserDetailsComponent,
  CreateUserComponent
} from './containers';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'user',
    children: [
      {
        path: 'create',
        component: CreateUserComponent
      },
      {
        path: ':id',
        component: UserDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
