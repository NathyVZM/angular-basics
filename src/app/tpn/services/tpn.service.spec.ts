import { TestBed } from '@angular/core/testing';

import { TpnService } from './tpn.service';

describe('TpnService', () => {
  let service: TpnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TpnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
