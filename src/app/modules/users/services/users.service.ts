import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '../models/user';
import { LocalStorageService } from '../../shared/services/local-storage.service';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient, private storage: LocalStorageService) {}

  getUsers() {
    const users = this.storage.getUsers();
    if (users) {
      return of(users);
    } else {
      return this.http.get('assets/data/users.json').pipe(
        map((res: any) => {
          this.storage.setAllUsers(res.users);
          return res.users;
        }),
        catchError(err => of(err))
      );
    }
  }

  getUser(id: string) {
    // This api calls always fails
    return this.http.get('api/users/' + id).pipe(
      catchError(() => {
        const users: User[] = this.storage.getUsers();
        let user = {};
        if (users) {
          user = users.find(usr => usr.id === id);
        }
        return of(user);
      })
    );
  }

  createUser(user: User) {
    // This api calls always fails
    return this.http.post('api/users', user).pipe(
      catchError(err => {
        const users = this.storage.getUsers();
        this.storage.addUser({ ...user, id: (users.length + 1).toString() });
        return of(true);
      })
    );
  }
}
