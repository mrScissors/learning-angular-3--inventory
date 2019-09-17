import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { InventoryDataService } from '../inventory-data.service';
import * as uuid from 'uuid';
import { Router } from '@angular/router';
import { Iinventory } from '../inventory';

@Component({
  selector: 'app-form-entry',
  templateUrl: './form-entry.component.html',
  styleUrls: ['./form-entry.component.css']
})
export class FormEntryComponent implements OnInit {

  dataentry = new FormGroup({
    productname: new FormControl('',[
      Validators.required,
      Validators.minLength(4)]),
    category: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3)]),
    availableunits: new FormControl(),
    unitprice: new FormControl(),
    tags: new FormControl('',[
      Validators.required,
      Validators.minLength(4)]),
    lastupated: new FormControl(),
    location: new FormControl('',[
      Validators.required,
      Validators.minLength(4)]),
    description: new FormControl('',[
      Validators.required,
      Validators.minLength(4)])
  });

  constructor(private _inventoryService: InventoryDataService, private router: Router) {}

  


  ngOnInit() {}
  //List: Iinventory[];
  //public list = {};
  //public list = new this.List;
  public obj;
  public list = {} as Iinventory;
 
  onSubmit(){
    console.log(this.dataentry.value);
    
    //const list = this.dataentry.value;
    this.list = this.dataentry.value;

    this.obj = Object.assign({}, this.list);
    this.obj.id = uuid.v4();
    this.obj.lastupated = Date.now();
    
    //return this.http.post<any>(this.url, obj, this.httpOptions);
    this._inventoryService.addData(this.obj);

    this.router.navigate(['/home']);

  }
}
