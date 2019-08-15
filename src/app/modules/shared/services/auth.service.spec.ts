import { TestBed, getTestBed, fakeAsync, tick } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { LocalStorageService } from './local-storage.service';
import { SharedModule } from '../shared.module';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('AuthService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, SharedModule],
      providers: []
    })
  );

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  describe('login', () => {
    let httpMock: HttpTestingController;

    beforeEach(() => {
      httpMock = TestBed.get(HttpTestingController);
    });

    it('login with valid creds', () => {
      const service: AuthService = TestBed.get(AuthService);
      service.login({ email: 'abc@123', pwd: '13' }).subscribe(res => {
        expect(res).toBeTruthy();
      });
    });

    it('login with valid creds', fakeAsync(() => {
      const testBed = getTestBed();
      const service = testBed.get(AuthService);
      httpMock = testBed.get(HttpTestingController);
      let authUser;

      service.login({ email: 'abc@123', pwd: '13' }).subscribe(res => {
        authUser = res;
      });

      httpMock
        .expectOne({
          url: `/assets/data/auth.json`,
          method: 'GET'
        })
        .flush(null);
      tick(4);
      httpMock.verify();
    }));

    it('login with valid creds and with response', fakeAsync(() => {
      const testBed = getTestBed();
      const service = testBed.get(AuthService);
      httpMock = testBed.get(HttpTestingController);
      let authUser;
      const data = { name: 'Rij' };

      service.login({ email: 'abc@123', pwd: '13' }).subscribe(res => {
        authUser = res;
      });

      httpMock
        .expectOne({
          url: `/assets/data/auth.json`,
          method: 'GET'
        })
        .flush(data);
      tick(4);
      httpMock.verify();
      const user = JSON.parse(localStorage.getItem('user'));
      expect(data).toEqual(user);
    }));
  });
});
