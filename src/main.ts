
import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';

import {MyDatePickerApp} from './app/mydatepicker-app';


if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(MyDatePickerApp, []).catch(err => console.error(err));
