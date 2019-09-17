import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../app-routing.module';

import { InventoryListComponent } from './inventory-list.component';
import { Routes, RouterModule,Router } from '@angular/router';

import { Component, OnInit, ViewChild } from '@angular/core';
import { InventoryDataService } from '../inventory-data.service';
//import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material';
import {PageEvent} from '@angular/material/paginator';
///import {MatPaginatorModule} from '@angular/material/paginator';
import { MaterialModule } from '../material/material.module';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { FormEntryComponent } from '../form-entry/form-entry.component';
import { UpdateFormComponent } from '../update-form/update-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('InventoryListComponent', () => {
  let component: InventoryListComponent;
  let fixture: ComponentFixture<InventoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, HttpClientModule, RouterModule,AppRoutingModule, ReactiveFormsModule, BrowserAnimationsModule ],
      declarations: [ InventoryListComponent, FormEntryComponent, UpdateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
