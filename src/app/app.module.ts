import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MyDatePickerApp } from './app.component';

import {SampleDatePickerNormal} from './sample-date-picker-normal/index';
import {SampleDatePickerInline} from './sample-date-picker-inline/index';
import {MyDatePickerModule} from 'mydatepicker';

@NgModule({
  declarations: [
    MyDatePickerApp, SampleDatePickerNormal, SampleDatePickerInline
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MyDatePickerModule
  ],
  providers: [],
  bootstrap: [MyDatePickerApp]
})
export class AppModule { }
