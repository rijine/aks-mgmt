import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { UsersModule } from '../users.module';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { SharedModule } from '../../shared/shared.module';
import { LocalStorageService } from '../../shared/services/local-storage.service';

describe('UsersService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [UsersModule, SharedModule, HttpClientTestingModule],
      providers: [LocalStorageService]
    })
  );

  it('should be created', () => {
    const service: UsersService = TestBed.get(UsersService);
    expect(service).toBeTruthy();
  });

  describe('getUsers()', () => {
    it('default case', () => {
      const expected = [
        {
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
        }
      ];
      const service: UsersService = TestBed.get(UsersService);

      service.getUsers().subscribe(res => {
        expect(res).toEqual(expected);
      });
    });
  });
});
