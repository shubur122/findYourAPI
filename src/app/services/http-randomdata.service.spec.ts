import { TestBed } from '@angular/core/testing';

import { HttpRandomdataService } from './http-randomdata.service';

describe('HttpRandomdataService', () => {
  let service: HttpRandomdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpRandomdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
