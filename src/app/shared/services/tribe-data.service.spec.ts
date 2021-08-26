import { TestBed } from '@angular/core/testing';

import { TribeDataService } from './tribe-data.service';

describe('TribeDataService', () => {
  let service: TribeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TribeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
