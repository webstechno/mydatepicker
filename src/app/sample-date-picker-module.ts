import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyDatePickerApp }  from './sample-date-picker-app';
import { SampleDatePickerNormal }  from './components/sample-date-picker-normal';
import { SampleDatePickerInline }  from './components/sample-date-picker-inline';
import { MyDatePicker }  from './components/my-date-picker/my-date-picker.component';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ MyDatePickerApp, SampleDatePickerNormal, SampleDatePickerInline, MyDatePicker ],
    bootstrap:    [ MyDatePickerApp ]
})
export class SampleDatePickerModule { }