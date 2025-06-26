import { TestBed } from '@angular/core/testing';

import { Shortlet.Service.TsService } from './shortlet.service.ts.service';

describe('Shortlet.Service.TsService', () => {
  let service: Shortlet.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Shortlet.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
