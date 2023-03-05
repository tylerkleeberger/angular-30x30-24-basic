import { TestBed } from '@angular/core/testing';

import { MinorResolverService } from './minor-resolver.service';

describe('MinorResolverService', () => {
  let service: MinorResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinorResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
