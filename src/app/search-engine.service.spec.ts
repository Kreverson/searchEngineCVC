import { TestBed, inject } from '@angular/core/testing';

import { SearchEngineService } from './search-engine.service';

describe('SearchEngineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchEngineService]
    });
  });

  it('should ...', inject([SearchEngineService], (service: SearchEngineService) => {
    expect(service).toBeTruthy();
  }));
});
