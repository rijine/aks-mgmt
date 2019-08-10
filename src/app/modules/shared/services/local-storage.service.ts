import { Injectable } from '@angular/core';

import { UserInfo } from '../models/user-info';

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
}
