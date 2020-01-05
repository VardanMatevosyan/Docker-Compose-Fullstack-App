import { TestBed } from '@angular/core/testing';

import { HttpRequest.ServiceService } from './http-request.service.service';

describe('HttpRequest.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpRequest.ServiceService = TestBed.get(HttpRequest.ServiceService);
    expect(service).toBeTruthy();
  });
});
