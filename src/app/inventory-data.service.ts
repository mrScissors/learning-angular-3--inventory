// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Iinventory } from './inventory';
// import { Observable } from 'rxjs';


// @Injectable({
//   providedIn: 'root'
// })
// export class InventoryDataService {

//   private _url: string = " http://localhost:3000/inventory";

//   constructor(private http: HttpClient) { }

//   getInventory():Observable<Iinventory[]>{
//     return this.http.get<Iinventory[]>(this._url);
//   }

//   addData(userdata){
//     return this.http.post<any>(this._url, userdata);
//   }
// }









import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iinventory } from './inventory';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { HttpHeaders} from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {DialogComponent} from './dialog/dialog.component';
import { disableDebugTools } from '@angular/platform-browser';
//import { DialogComponent } from './dialog/dialog.component';
//import { FormEntryComponent } from './form-entry/form-entry.component';
//import { UpdateFormComponent } from './update-form/update-form.component';

//import { AppRoutingModule } from './app-routing.module';


@Injectable({
  providedIn: 'root'
})
export class InventoryDataService {
 // @ViewChild('modalError') displayErrorRef: ModalComponent;
  
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })};

  private _url: string = " http://localhost:3000/inventory";
  
  public dataStore;
  //private _subjectInventory = new BehaviorSubject<Iinventory[]>(this.dataStore);
  //public roInventory;
  public _subjectInventory = new BehaviorSubject<Iinventory[]>(this.dataStore);


  constructor(private http: HttpClient, public dialog: MatDialog) { 
    this.load();
  }

  // getInventory():Observable<Iinventory[]>{
  //   return this.http.get<Iinventory[]>(this._url);
  // }


  // get roInventory() {
  //   return this._subjectInventory.asObservable();
  // }


  // getInventory():BehaviorSubject<Iinventory[]>{
  //   return this.http.get<Iinventory[]>(this._url);
  // }

  load(){
    this.http.get(this._url).subscribe(data=>{this.dataStore=data;
      this._subjectInventory.next(this.dataStore);},
      error=>{this.openDialog(error)});
    //this._subjectInventory( this.http.get(this._url));
  }
  // getInventory():BehaviorSubject<Iinventory[]>{ 
  //   return this._subjectInventory;
  // }
  getInventory():Observable<any>{ 
    return this._subjectInventory;
  }


  public err=0;

  addData(userdata){
    this.http.post<Iinventory[]>(this._url, userdata).
    subscribe((response => {this.dataStore.push(userdata);
      console.log("assigne:: ", this.dataStore);
      this._subjectInventory.next(this.dataStore);}), 
     (error => this.openDialog(error)
     ))
  }

  // errfun(){
  //   return this.err;
  // }
 


  updateData(data1,id){
  
    
    this.http.put(this._url+'/'+ id, data1, this.httpOptions).subscribe(success=>{
      for (var item in this.dataStore){
        if (this.dataStore[item].id == id){
          this.dataStore[item].productname = data1.productname;
          this.dataStore[item].category = data1.category;
          this.dataStore[item].availableunits = data1.availableunits;
          this.dataStore[item].tags = data1.tags;
          this.dataStore[item].location = data1.location;
          this.dataStore[item].description = data1.description;
          this.dataStore[item].lastupdated = data1.lastupdated;
          
        }
      };
      this._subjectInventory.next(this.dataStore);
    },
    error => {//this.openDialog();
  //alert("connection lost, data not sent!");
  this.openDialog(error)
}
    );
    //this.dataStore.put(id, data);
    //this._subjectInventory.next(this.dataStore);
    // for (var item in this.dataStore){
    //   if (this.dataStore[item].id == id){
    //     this.dataStore[item].productname = data.productname;
    //     this.dataStore[item].category = data.category;
    //     this.dataStore[item].availableunits = data.availableunits;
    //     this.dataStore[item].tags = data.tags;
    //     this.dataStore[item].location = data.location;
    //     this.dataStore[item].description = data.description;
    //     this.dataStore[item].lastupdated = data.lastupdated;
        
    //   }
    // }
  }

//   openDialog(): void {
//     const dialogconfig = new MatDialogConfig();
//     dialogconfig.autoFocus = true;
//     this.dialog.open(FormEntryComponent, {
//       width: '250px',
//       data: "connection lost, data not sent!"    });
//   }

openDialog(error) {
  console.log("matdialogerrror_---------------->", error);
  const dialogconfig = new MatDialogConfig();
  dialogconfig.disableClose = true;
  dialogconfig.width = "50%";
  this.dialog.open(DialogComponent, {data:error});
}
}




