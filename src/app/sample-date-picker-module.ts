import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyDatePickerApp }  from './sample-date-picker-app';
import { SampleDatePickerNormal }  from './components/sample-date-picker-normal';
import { SampleDatePickerInline }  from './components/sample-date-picker-inline';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
    imports:      [ BrowserModule, MyDatePickerModule ],
    declarations: [ MyDatePickerApp, SampleDatePickerNormal, SampleDatePickerInline ],
    bootstrap:    [ MyDatePickerApp ]
})
export class SampleDatePickerModule { }