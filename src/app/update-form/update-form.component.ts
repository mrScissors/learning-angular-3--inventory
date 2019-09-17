import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { InventoryDataService } from '../inventory-data.service';
import * as uuid from 'uuid';
import { Router,ActivatedRoute } from '@angular/router';
import { Iinventory } from '../inventory';
import { DataSource } from '@angular/cdk/table';
import { keyframes } from '@angular/animations';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

  dataentry1 = new FormGroup({
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


  public dataSource;
  public sampleUpdate;

  constructor(private _inventoryService: InventoryDataService, private router: Router, private route: ActivatedRoute) { }
public inventoryid;
  ngOnInit() {

    this.route.url.subscribe(p =>{
      //console.log("restuarnlist:; ",typeof p);
      this.inventoryid = p;
      console.log(this.inventoryid);
    });

    this._inventoryService.getInventory()
      .subscribe(data=>{this.dataSource = data;
       
        // this.sampleUpdate = this.dataSource.filter(obj => {
        //   return obj.id === this.inventoryid;
        // });

        // this.dataentry.value.productname = this.dataSource[0].productname;
      });

  }
 //List: Iinventory[];
  //public list = {};
  //public list = new this.List;
  public obj;
  public list = {} as Iinventory;

 
  onSubmit1(){
    console.log(this.dataentry1.value);
    
    //const list = this.dataentry.value;
    this.list = this.dataentry1.value;

    this.obj = Object.assign({}, this.list);
    this.obj.lastupated = Date.now();
    
    //return this.http.post<any>(this.url, obj, this.httpOptions);
    this._inventoryService.updateData(this.obj,this.inventoryid).subscribe(
      response=>console.log('success :: ', response),
      error=>console.log('error :: ', error));

    this.router.navigate(['/home']);

  }

  
}
