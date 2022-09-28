import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from "@angular/material/radio";
import {MatButtonModule} from "@angular/material/button";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker";
import {NgxMatDatetimePickerModule, NgxMatNativeDateModule} from "@angular-material-components/datetime-picker";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatRadioModule,
    MatButtonModule,
    MatDatepickerModule,
    NgxMatNativeDateModule,
    MatNativeDateModule,
    MatInputModule,
    NgxMaterialTimepickerModule,
    NgxMatDatetimePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
