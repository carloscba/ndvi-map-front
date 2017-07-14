/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LotesService } from './lotes.service';

describe('LotesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LotesService]
    });
  });

  it('should ...', inject([LotesService], (service: LotesService) => {
    expect(service).toBeTruthy();
  }));
});
