import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';


const routes: Routes = [
  {path: '', redirectTo: 'customer', pathMatch: 'full' },
  {path: 'customer', component : CustomerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rootingComponents = [
  CustomerComponent]
