import {Component} from '@angular/core';
import {SampleDatePickerNormal} from './components/sample-date-picker-normal/index';
import {SampleDatePickerInline} from './components/sample-date-picker-inline/index';

declare var require:any;
const styles: string = require('./mydatepicker-app.css');
const template: string = require('./mydatepicker-app.html');

@Component({
  selector: 'mydatepicker-app',
  providers: [],
  pipes: [],
  directives: [SampleDatePickerNormal, SampleDatePickerInline],
  styles: [styles],
  template
})

export class MyDatePickerApp {

  constructor() {
    console.log('constructor: MyDatePickerApp');
  }

}
