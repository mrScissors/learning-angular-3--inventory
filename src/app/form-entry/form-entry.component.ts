import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { InventoryDataService } from '../inventory-data.service';
import * as uuid from 'uuid';
import { Router } from '@angular/router';
import { Iinventory } from '../inventory';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-form-entry',
  templateUrl: './form-entry.component.html',
  styleUrls: ['./form-entry.component.css']
})
export class FormEntryComponent implements OnInit {

  dataentry = new FormGroup({
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

  constructor(private _inventoryService: InventoryDataService, 
              private router: Router,
              public dialog: MatDialog
              ) {}

  


  ngOnInit() {
    //console.log(Date.now());
    //console.log('matdialog---------------->',this.data);

  }
  //List: Iinventory[];
  //public list = {};
  //public list = new this.List;
  public obj;
  public list = {} as Iinventory;
  public err;
  // public date;
  onSubmit(){
    console.log(this.dataentry.value);
    
    //const list = this.dataentry.value;
    this.list = this.dataentry.value;

    this.obj = Object.assign({}, this.list);
    this.obj.id = uuid.v4();
    this.obj.time = Date.now();
    // this.date = Date.now();
    // this.obj.lastupdated = this.date.toString("DD-MM-YYYY");
    
    //return this.http.post<any>(this.url, obj, this.httpOptions);
    this._inventoryService.addData(this.obj);
    

    //var err = this._inventoryService.errfun();
  //   console.log('errrr----------------->', this.err); 
  //   if(this.err == 1){
  //     this.openDialog();
     
  //   }

  //   this.openDialog();

    this.router.navigate(['/home']);
    
  // }

  // openDialog(): void {
  // const dialogconfig = new MatDialogConfig();
  // dialogconfig.autoFocus = true;
  // this.dialog.open(DialogComponent,{
  //   width: '250px',
  //   data: "connection lost, data not sent!"
  // });
  // }
}
}





