import { Component, OnInit, ViewChild } from '@angular/core';
import { InventoryDataService } from '../inventory-data.service';
import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material';
import {PageEvent} from '@angular/material/paginator';
import {MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {
  public sortedInventory=[];
  public dataSource;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private _inventoryService: InventoryDataService) { }

  ngOnInit() {
    // this._inventoryService.getInventory()
    //   .subscribe(data=>{this.dataSource = new MatTableDataSource(data);this.dataSource.sort = this.sort;
    //   this.dataSource.paginator = this.paginator;
    //   });
      //this.dataSource = this.inventory;

      //console.log(this.inventory);
    

    // this.dataSource = this._inventoryService.getInventory();
    // this.dataSource = new MatTableDataSource(this.dataSource);this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;

    //this._inventoryService.getInventory();
    //this._inventoryService.load();
    console.log("inside inventory");
    this._inventoryService.getInventory()
      .subscribe(data=>{this.dataSource = new MatTableDataSource(data);this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator; 
      });

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 
  displayedColumns: string[] = ['productname', 'category', 'availableunits', 'unitprice', 'tags', 'lastupdated', 'location', 'description'];
  
}
