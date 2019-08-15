import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';
import { SharedModule } from '../shared.module';

describe('LocalStorageService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [SharedModule]
    })
  );

  it('should be created', () => {
    const service: LocalStorageService = TestBed.get(LocalStorageService);
    expect(service).toBeTruthy();
  });

  describe('getUser', () => {
    it('if user exists', () => {
      const service: LocalStorageService = TestBed.get(LocalStorageService);
      const data = {
        name: 'Rij',
        token: 'a',
        email: 'abc@a',
        imageUrl: 'http://...'
      };
      service.user = data;

      expect(service.getUser()).toEqual(data);
    });

    it('if local storage user is null', () => {
      const service: LocalStorageService = TestBed.get(LocalStorageService);
      localStorage.removeItem('user');
      expect(service.getUser()).toEqual(null);
    });
  });

  it('getUsers()', () => {
    const service: LocalStorageService = TestBed.get(LocalStorageService);
    localStorage.removeItem('users');
    expect(service.getUsers()).toEqual(null);
  });

  describe('addUser', () => {
    it('if local storage users is not null', () => {
      const service: LocalStorageService = TestBed.get(LocalStorageService);
      const data = {
        id: '1',
        firstName: 'Steve',
        lastName: 'Jobs',
        dateOfBirth: '21/2/1992',
        address: {
          street: 'Frankfurter Allee',
          houseNumber: '3',
          city: 'Berlin',
          postCode: '13123',
          country: 'Germany'
        }
      };

      localStorage.setItem('users', JSON.stringify([ data ]));
      service.addUser(data);

      const users = JSON.parse(localStorage.getItem('users'));
      expect(users.length).toEqual(2);
    });

    it('if local storage users are null', () => {
      const service: LocalStorageService = TestBed.get(LocalStorageService);
      localStorage.removeItem('users');
      service.addUser({
        id: '1',
        firstName: 'Steve',
        lastName: 'Jobs',
        dateOfBirth: '21/2/1992',
        address: {
          street: 'Frankfurter Allee',
          houseNumber: '3',
          city: 'Berlin',
          postCode: '13123',
          country: 'Germany'
        }
      });

      const users = JSON.parse(localStorage.getItem('users'));
      expect(users.length).toBeGreaterThanOrEqual(1);
    });
  });
});
