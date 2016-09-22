///<reference path="../node_modules/typescript/lib/lib.es6.d.ts"/>
///<reference path="../node_modules/@types/node/index.d.ts"/>

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SampleDatePickerModule } from './app/sample-date-picker-module';

platformBrowserDynamic().bootstrapModule(SampleDatePickerModule);
