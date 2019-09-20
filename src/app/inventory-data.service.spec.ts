import { TestBed } from '@angular/core/testing';

import { InventoryDataService } from './inventory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog, MatDialogModule } from '@angular/material';

describe('InventoryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule,MatDialogModule],
    declarations: []
  }));


  it('should be created', () => {
    const service: InventoryDataService = TestBed.get(InventoryDataService);
    expect(service).toBeTruthy();
  });
});
