import { TestBed } from '@angular/core/testing';

import { CurrentWorldService } from './current-world.service';

describe('CurrentWorldService', () => {
  let service: CurrentWorldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentWorldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
