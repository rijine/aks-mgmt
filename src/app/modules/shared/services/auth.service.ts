import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { LocalStorageService } from './local-storage.service';
import { UserInfo } from '../models/user-info';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private storage: LocalStorageService) {}

  login({ email, pwd }: { email: string; pwd: string }) {
    // return this.http.post('/assets/data/auth.json', { email, pwd });
    return this.http.get('/assets/data/auth.json').pipe(
      map((res: UserInfo) => {
        if (res) {
          this.storage.setUser(res);
        }
        return true;
      }),
      catchError(() => of(false))
    );
  }
}
