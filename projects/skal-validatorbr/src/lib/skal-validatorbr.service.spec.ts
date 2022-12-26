import { TestBed } from '@angular/core/testing';

import { SkalValidatorbrService } from './skal-validatorbr.service';

describe('SkalValidatorbrService', () => {
  let service: SkalValidatorbrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkalValidatorbrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
