import { NgModule } from '@angular/core';
import { Routes, RouterModule,Router } from '@angular/router';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { FormEntryComponent } from './form-entry/form-entry.component';
import { UpdateFormComponent } from './update-form/update-form.component';


const routes: Routes = [
 {path:'', redirectTo:'/home', pathMatch: 'full'},
 {path:'home', component: InventoryListComponent},
 {path:'home/data-entry', component:FormEntryComponent},
 {path:':id', component:UpdateFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
