import { TestBed } from '@angular/core/testing';

import { InventoryDataService } from './inventory-data.service';
import { HttpClientModule } from '@angular/common/http';

describe('InventoryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));


  it('should be created', () => {
    const service: InventoryDataService = TestBed.get(InventoryDataService);
    expect(service).toBeTruthy();
  });
});
