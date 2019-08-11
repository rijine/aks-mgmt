import { Injectable } from '@angular/core';

import { UserInfo } from '../models/user-info';
import { User } from '../../users/models/user';

@Injectable()
export class LocalStorageService {
  user: UserInfo;
  constructor() {}

  getUser(): UserInfo {
    if (!this.user) {
      const fromStorage = localStorage.getItem('user');
      this.user = fromStorage ? JSON.parse(fromStorage) : null;
    }
    return this.user;
  }

  setUser(user: UserInfo) {
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
  }

  clearUser() {
    localStorage.setItem('user', null);
    this.user = null;
  }

  setAllUsers(users: User[]) {
    localStorage.setItem('users', JSON.stringify(users));
  }

  getUsers() {
    const usersJson = localStorage.getItem('users');
    return usersJson ? JSON.parse(usersJson) : null;
  }

  addUser(user: User) {
    const usersJson = localStorage.getItem('users');
    let users = usersJson ? JSON.parse(usersJson) : [];
    users = [...users, user];
    localStorage.setItem('users', JSON.stringify(users));
  }
}
