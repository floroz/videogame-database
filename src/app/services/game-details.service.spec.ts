import { TestBed } from '@angular/core/testing';

import { GameDetailsService } from './game-details.service';

xdescribe('GameDetailsService', () => {
  let service: GameDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
