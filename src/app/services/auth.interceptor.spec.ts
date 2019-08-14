import { AuthInterceptor } from './auth.interceptor';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from '../app.module';
import { SharedModule } from '../modules';
import { LocalStorageService } from '../modules/shared/services/local-storage.service';

describe('AuthInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        SharedModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [LocalStorageService]
    })
  );

  it('should create an instance', () => {
    const service: AuthInterceptor = TestBed.get(AuthInterceptor);
    expect(service).toBeTruthy();
  });
});
