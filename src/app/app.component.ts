import {Component} from '@angular/core';

@Component({
  selector: 'mydatepicker-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  moduleId: module.id,
})

export class MyDatePickerApp {

  constructor() {
    console.log('constructor: MyDatePickerApp');
  }

  toNgxMyDatePicker(): void {
    window.open('http://kekeh.github.io/ngx-mydatepicker', '_self');
  }

  toDateRangePicker(): void {
    window.open('http://kekeh.github.io/mydaterangepicker', '_self');
  }

}
