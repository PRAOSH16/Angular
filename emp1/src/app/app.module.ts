import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { InsertionComponent } from './insertion/insertion.component';
import { DisplayComponent } from './display/display.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    InsertionComponent,
    DisplayComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, FormsModule,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
