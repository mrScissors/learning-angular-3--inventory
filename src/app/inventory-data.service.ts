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









import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iinventory } from './inventory';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { HttpHeaders} from '@angular/common/http';
//import { AppRoutingModule } from './app-routing.module';


@Injectable({
  providedIn: 'root'
})
export class InventoryDataService {
  
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })};

  private _url: string = " http://localhost:3000/inventory";
  
  public dataStore;
  //private _subjectInventory = new BehaviorSubject<Iinventory[]>(this.dataStore);
  //public roInventory;
  public _subjectInventory = new BehaviorSubject<Iinventory[]>(this.dataStore);


  constructor(private http: HttpClient) { 
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
      this._subjectInventory.next(this.dataStore);});
    //this._subjectInventory( this.http.get(this._url));
  }
  // getInventory():BehaviorSubject<Iinventory[]>{ 
  //   return this._subjectInventory;
  // }
  getInventory():Observable<any>{ 
    return this._subjectInventory;
  }


  

  addData(userdata){
    this.http.post<Iinventory[]>(this._url, userdata).
    subscribe(response => console.log('success', response),  error => console.log('error', error));
    this.dataStore.push(userdata);
    console.log("assigne:: ", this.dataStore);
    this._subjectInventory.next(this.dataStore);
  }


  updateData(data,id){
    console.log("iddd----------->", this._url+'/'+ id);
    console.log("data------------>", data);
    for (var item in this.dataStore){
      if (this.dataStore[item].id == id){
        this.dataStore[item].productname = data.productname;
        this.dataStore[item].category = data.category;
        this.dataStore[item].availableunits = data.availableunits;
        this.dataStore[item].tags = data.tags;
        this.dataStore[item].location = data.location;
        this.dataStore[item].description = data.description;
        this.dataStore[item].lastupdated = data.lastupdated;
        
      }
    }
    this._subjectInventory.next(this.dataStore);
    return this.http.put(this._url+'/'+ id, data, this.httpOptions);
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
}


