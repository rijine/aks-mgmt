import { AuthInterceptor } from './auth.interceptor';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from '../app.module';
import { SharedModule } from '../modules';
import { LocalStorageService } from '../modules/shared/services/local-storage.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from '../modules/shared/services/auth.service';

describe('AuthInterceptor', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        SharedModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        LocalStorageService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
        }
      ]
    })
  );

  beforeEach(() => {
    service = TestBed.get(AuthService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should create an instance', () => {
    const authService: AuthInterceptor = TestBed.get(AuthInterceptor);
    expect(authService).toBeTruthy();
  });

  it('should have a call with interceptor', () => {
    service.login({ email: 'asa@as', pwd: 'as' }).subscribe(response => {
      expect(response).toBeTruthy();
    });
    const httpRequest = httpMock.expectOne(`/assets/data/auth.json`);
    httpRequest.flush({});
    // expect(httpRequest.request.headers.has('Authorization')).toEqual(true);
  });
});
