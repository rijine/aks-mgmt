import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class FakeBackendService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const users = [
      {
        id: 1,
        firstName: 'Steve',
        lastName: 'Jobs',
        dateOfBirth: '21/2/1992',
        address: {
          street: 'Frankfurter Allee',
          houseNumber: '10',
          city: 'Berlin',
          postCode: '13123',
          country: 'Germany'
        }
      }
    ];

    return {
      users
    };
  }
}
