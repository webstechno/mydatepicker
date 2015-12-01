var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var mydatepicker_1 = require('./mydatepicker');
var SampleDatePicker = (function () {
    function SampleDatePicker() {
        this.myDatePickerOptions = {
            dateFormat: 'dd.mm.yyyy',
            firstDayOfWeek: 'mo',
            sunHighlight: true,
            height: '34px',
            width: '260px'
        };
    }
    SampleDatePicker.prototype.onInit = function () {
        console.log('onInit(): SampleDatePicker');
    };
    SampleDatePicker.prototype.onDateChanged = function (event) {
        console.log('onDateChanged(): ', event.date, ' - formatted: ', event.formatted);
    };
    SampleDatePicker = __decorate([
        angular2_1.Component({
            selector: 'sample-date-picker',
            template: "<my-date-picker [(options)]=\"myDatePickerOptions\" (date-changed)=\"onDateChanged($event)\"></my-date-picker>",
            directives: [mydatepicker_1.MyDatePicker]
        }), 
        __metadata('design:paramtypes', [])
    ], SampleDatePicker);
    return SampleDatePicker;
})();
angular2_1.bootstrap(SampleDatePicker);
//# sourceMappingURL=sampleapp.js.map