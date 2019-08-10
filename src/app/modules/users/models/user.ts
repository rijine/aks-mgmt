import { Address } from './address';

export interface User {
  id?: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  address: Address;
}
