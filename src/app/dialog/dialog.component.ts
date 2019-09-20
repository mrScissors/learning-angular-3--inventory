import { Component, OnInit, Inject } from '@angular/core';
//import {Component, } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MaterialModule } from '../material/material.module';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  message:string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any ) { console.log("dialogcomp--------------------->",this.data)}

  ngOnInit() {
  }

  

}
