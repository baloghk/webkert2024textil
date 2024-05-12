import { TestBed } from '@angular/core/testing';

import { TextilService } from './textil.service';

describe('TextilService', () => {
  let service: TextilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
