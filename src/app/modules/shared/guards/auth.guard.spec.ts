import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { LocalStorageService } from '../services/local-storage.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthGuard, LocalStorageService]
    });
  });

  it('should create', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should return of user is null', inject(
    [AuthGuard],
    (guard: AuthGuard) => {
      localStorage.setItem('user', null);
      const result = guard.canActivate(null, null);
      expect(result).toBe(false);
    }
  ));

  it('should redirect if user exists', inject(
    [AuthGuard],
    (guard: AuthGuard) => {
      localStorage.setItem('user', JSON.stringify({ name: 'Something' }));
      const result = guard.canActivate(null, null);
      expect(result).toBe(true);
    }
  ));
});
