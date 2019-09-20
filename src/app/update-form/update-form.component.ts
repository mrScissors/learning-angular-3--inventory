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
      Validators.minLength(2),
    Validators.pattern('^[a-zA-Z]+$')]),
    category: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
      Validators.pattern('^[a-zA-Z]+$')]),
    availableunits: new FormControl('', 
    [Validators.required,
    Validators.pattern('^[0-9]+$')]),
    unitprice: new FormControl('',
    [Validators.required,
    Validators.pattern('^[0-9]+$')]),
    tags: new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('^[a-zA-Z]+$')]),
    lastupdated: new FormControl('', [
      Validators.required
    ]),
    location: new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('^[a-zA-Z-]+$')]),
    description: new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('^[a-zA-Z0-9 ]+$')])
  });
  
  
  public dataSource;
  public sampleUpdate;
  public formfill;
  public d = new Date();
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
      for (var item in this.dataSource){
        if(this.dataSource[item].id == this.inventoryid){
          this.formfill = this.dataSource[item];
          //this.dataentry1.setValue(this.formfill);
          // this.dataentry1.value.productname = this.formfill.productname;
          // this.dataentry1.value.id = this.formfill.id;
          // this.dataentry1.value.category = this.formfill.id;
          // this.dataentry1.value.availableunits = this.formfill.availableunits;
          // this.dataentry1.value.unitprice = this.formfill.unitprice;
          // this.dataentry1.value.tags  = this.formfill.tags;
          // this.dataentry1.value.lastupdated = this.formfill.lastupdated;
          // this.dataentry1.value.description = this.formfill.description;
          this.dataentry1.setValue({
            productname : this.formfill.productname,
            category : this.formfill.category,
            availableunits : this.formfill.availableunits,
            unitprice : this.formfill.unitprice,
            tags  : this.formfill.tags,
            lastupdated : this.formfill.lastupdated,
            description : this.formfill.description,
            location: this.formfill.location
          })
          //this.d = this.formfill.lastupdated.slice(0,10);
          console.log("formfill--------->",this.formfill.productname);
          console.log("dataentry1--------------------->",this.dataentry1.value);
        }
      }
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
    console.log(this.list);
    this.obj = Object.assign({}, this.list);
    this.obj.time = Date.now();
    
    //return this.http.post<any>(this.url, obj, this.httpOptions);
    this._inventoryService.updateData(this.obj,this.inventoryid);
      
      this.router.navigate(['/home']);
      
    }
    
    
  }
  