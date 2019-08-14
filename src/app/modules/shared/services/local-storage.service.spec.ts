import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';
import { SharedModule } from '../shared.module';

describe('LocalStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [SharedModule]
  }));

  it('should be created', () => {
    const service: LocalStorageService = TestBed.get(LocalStorageService);
    expect(service).toBeTruthy();
  });
});
