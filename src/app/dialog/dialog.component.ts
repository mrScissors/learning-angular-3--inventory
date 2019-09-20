import { Component, OnInit, Inject } from '@angular/core';
//import {Component, } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { MaterialModule } from '../material/material.module';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  message:string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: Router ) { console.log("dialogcomp--------------------->",this.data)}

  ngOnInit() {
  }

  navigate(){
    location.reload();
    
  }

  

}
