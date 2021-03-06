import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../shared/guards/auth.guard';
import {
  UsersComponent,
  UserDetailsComponent,
  CreateUserComponent
} from './containers';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    canActivate: [AuthGuard],
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
