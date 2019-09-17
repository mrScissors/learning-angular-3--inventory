import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFormComponent } from './update-form.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { InventoryDataService } from '../inventory-data.service';
import * as uuid from 'uuid';
import { Router,ActivatedRoute, RouterModule, provideRoutes } from '@angular/router';
import { Iinventory } from '../inventory';
import { DataSource } from '@angular/cdk/table';
import { keyframes } from '@angular/animations';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { InventoryListComponent } from '../inventory-list/inventory-list.component';
import { FormEntryComponent } from '../form-entry/form-entry.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



describe('UpdateFormComponent', () => {
  let component: UpdateFormComponent;
  let fixture: ComponentFixture<UpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule, ReactiveFormsModule,
        HttpClientModule, AppRoutingModule, BrowserAnimationsModule ],
      declarations: [ UpdateFormComponent, InventoryListComponent, FormEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
