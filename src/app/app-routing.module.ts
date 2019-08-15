import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/home/containers/home/home.component';
import { AuthGuard } from './modules/shared/guards/auth.guard';
import { CreateUserComponent } from './modules/users/containers/create-user/create-user.component';
import { UsersComponent } from './modules/users/containers/users/users.component';
import { UserDetailsComponent } from './modules/users/containers/user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/users'
      },
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
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
