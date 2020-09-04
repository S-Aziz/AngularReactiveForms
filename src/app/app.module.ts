import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, rootingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
// import { CustomerComponent } from './customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    // CustomerComponent,
    rootingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
