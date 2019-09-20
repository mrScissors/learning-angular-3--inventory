import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEntryComponent } from './form-entry.component';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { InventoryDataService } from '../inventory-data.service';
import * as uuid from 'uuid';
import { Router, RouterModule } from '@angular/router';
import { Iinventory } from '../inventory';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InventoryListComponent } from '../inventory-list/inventory-list.component';
import { UpdateFormComponent } from '../update-form/update-form.component';
import { MaterialModule } from '../material/material.module';


describe('FormEntryComponent', () => {
  let component: FormEntryComponent;
  let fixture: ComponentFixture<FormEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [  ReactiveFormsModule, HttpClientModule, RouterModule, AppRoutingModule,
      BrowserAnimationsModule, MaterialModule ],
      declarations:[ FormEntryComponent , InventoryListComponent, UpdateFormComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.dataentry.valid).toBeFalsy();
  });

  it('productname field', () => {
    let productname = component.dataentry.controls['productname'];
    expect(productname.valid).toBeFalsy();
  });

  it('productname field error', () => {
    let errors = {};
    let productname = component.dataentry.controls['productname'];
    errors = productname.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('productname field length less than 2 error', () => {
    let errors = {};
    let productname = component.dataentry.controls['productname'];
    productname.setValue("a");
    errors = productname.errors || {};
    expect(errors['minlength']).toBeTruthy();
  });




  it('category field', () => {
    let category = component.dataentry.controls['category'];
    expect(category.valid).toBeFalsy();
  });

  it('category field error', () => {
    let errors = {};
    let category = component.dataentry.controls['category'];
    errors = category.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('category field length equal to 3 error-1', () => {
    let errors = {};
    let category = component.dataentry.controls['category'];
    category.setValue("aa");
    errors = category.errors || {};
    expect(errors['minlength']).toBeTruthy();
  });

  it('category field length equal to 3 error-2', () => {
    let errors = {};
    let category = component.dataentry.controls['category'];
    category.setValue("aaaa");
    errors = category.errors || {};
    expect(errors['maxlength']).toBeTruthy();
  });

  it('tags field', () => {
    let tags = component.dataentry.controls['tags'];
    expect(tags.valid).toBeFalsy();
  });

  it('tags field error', () => {
    let errors = {};
    let tags = component.dataentry.controls['tags'];
    errors = tags.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('tags field length less than 2 error', () => {
    let errors = {};
    let tags=component.dataentry.controls['tags'];
    tags.setValue("a");
    errors = tags.errors || {};
    expect(errors['minlength']).toBeTruthy(); 
  });


  it('lastupdated field', () => {
    let tags = component.dataentry.controls['lastupdated'];
    expect(tags.valid).toBeFalsy();
  });

  it('lastupdated field error', () => {
    let errors = {};
    let tags = component.dataentry.controls['lastupdated'];
    errors = tags.errors || {};
    expect(errors['required']).toBeTruthy();
  });




  it('location field', () => {
    let location = component.dataentry.controls['location'];
    expect(location.valid).toBeFalsy();
  });

  it('location field error', () => {
    let errors = {};
    let location = component.dataentry.controls['location'];
    errors = location.errors || {};
    expect(errors['required']).toBeTruthy();
  });


  it('location field length less than 2 error', () => {
    let errors = {};
    let location = component.dataentry.controls['location'];
    location.setValue("a");
    errors = location.errors || {};
    expect(errors['minlength']).toBeTruthy();
  });



  it('description field ', () => {
    let description = component.dataentry.controls['description'];
    expect(description.valid).toBeFalsy();
  });

  it('description field error', () => {
    let errors = {};
    let description = component.dataentry.controls['description'];
    errors = description.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('description field less than 2 error', () => {
    let errors = {};
    let description = component.dataentry.controls['description'];
    description.setValue("a");
    errors = description.errors || {};
    expect(errors['minlength']).toBeTruthy();
  });



  it('productname field test case', () => {
    let errors = {};
    let productname = component.dataentry.controls['productname'];
    productname.setValue("Donald Duck");
    errors = productname.errors || {};
    expect(errors['minlength']).toBeFalsy();
  });
  
  it('category field test case1', () => {
    let errors = {};
    let category = component.dataentry.controls['category'];
    category.setValue("CCC");
    errors = category.errors || {};
    expect(errors['minlength']).toBeFalsy();
  });

  it('category field test case2', () => {
    let errors = {};
    let category = component.dataentry.controls['category'];
    category.setValue("CCC");
    errors = category.errors || {};
    expect(errors['maxlength']).toBeFalsy();
  });

  it('tags field test case', () => {
    let errors = {};
    let tags=component.dataentry.controls['tags'];
    tags.setValue("aaaa");
    errors = tags.errors || {};
    expect(errors['minlength']).toBeFalsy(); 
  });


  it('location field test case', () => {
    let errors = {};
    let location = component.dataentry.controls['location'];
    location.setValue("aaaa");
    errors = location.errors || {};
    expect(errors['minlength']).toBeFalsy();
  });

  it('description field test case', () => {
    let errors = {};
    let description = component.dataentry.controls['description'];
    description.setValue("aaaa");
    errors = description.errors || {};
    expect(errors['minlength']).toBeFalsy();
  });





  // it('test case', () => {
  //   expect(component.dataentry.valid).toBeFalsy();
  //   component.dataentry.controls['productname'].setValue("Donald Duck");
  //   component.dataentry.controls['category'].setValue("ccc");
  //   expect(component.dataentry.valid).toBeTruthy();

  //   let user: User;
  //   // Subscribe to the Observable and store the user in a local variable.
  //   component.loggedIn.subscribe((value) => user = value);

  //   // Trigger the login function
  //   component.login();

  //   // Now we can check to make sure the emitted value is correct
  //   expect(user.email).toBe("test@test.com");
  //   expect(user.password).toBe("123456789");
  // });




  // it('Add data button validity', () => {
  //   let errors = {};
  //   let productname = component.dataentry.controls['productname'];
  //   errors = productname.errors || {};
  //   expect(errors['required']).toBeTruthy(); (1)
  // });

  // it('submitting a form emits a user', () => {
  //   expect(component.form.valid).toBeFalsy();
  //   component.form.controls['email'].setValue("test@test.com");
  //   component.form.controls['password'].setValue("123456789");
  //   expect(component.form.valid).toBeTruthy();

  //   let user: User;
  //   // Subscribe to the Observable and store the user in a local variable.
  //   component.loggedIn.subscribe((value) => user = value);

  //   // Trigger the login function
  //   component.login();

  //   // Now we can check to make sure the emitted value is correct
  //   expect(user.email).toBe("test@test.com");
  //   expect(user.password).toBe("123456789");
  // });
});
