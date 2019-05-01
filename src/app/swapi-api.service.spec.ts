import { TestBed } from '@angular/core/testing';

import { SwapiAPIService } from './swapi-api.service';

describe('SwapiAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwapiAPIService = TestBed.get(SwapiAPIService);
    expect(service).toBeTruthy();
  });
});
