import {Component, OnInit} from '@angular/core';
import {IMyOptions, IMyDateModel, IMyInputFieldChanged, IMyCalendarViewChanged} from 'mydatepicker';

declare var require:any;
const normalSampleTpl: string = require('./sample-date-picker-normal.html');

@Component({
    selector: 'sample-date-picker-normal',
    template: normalSampleTpl
})

export class SampleDatePickerNormal implements OnInit {

    private myDatePickerNormalOptions: IMyOptions = {
        todayBtnTxt: 'Today',
        dateFormat: 'dd mmm yyyy',
        firstDayOfWeek: 'mo',
        sunHighlight: true,
        height: '34px',
        width: '210px',
        selectionTxtFontSize: '18px',
        alignSelectorRight: false,
        componentDisabled: false,
        showClearDateBtn: true,
        openSelectorTopOfInput: false,
        showSelectorArrow: true,
        openSelectorOnInputClick: false,
        inputAutoFill: true,
        showWeekNumbers: false
    };
    private selectedDateNormal:string = '';

    private selectedTextNormal: string = '';
    private border: string = 'none';

    private placeholderTxt:string = 'Select a date';

    private dateFormats:Array<string> = new Array('dd mmm yyyy', 'yyyy-mm-dd', 'dd.mm.yyyy', 'dd/mm/yyyy', 'mm/dd/yyyy');

    constructor() {
        let date = new Date();
    }

    onClearDate() {
        this.selectedDateNormal = '';
    }

    onDisableComponent(checked: boolean) {
        let copy = this.getCopyOfOptions();
        copy.componentDisabled = checked;
        this.myDatePickerNormalOptions = copy;
    }

    onEditableDateField(checked: boolean) {
        let copy = this.getCopyOfOptions();
        copy.editableDateField = checked;
        copy.openSelectorOnInputClick = !checked;
        this.myDatePickerNormalOptions = copy;
    }

    onShowClearDateButton(checked: boolean) {
        let copy = this.getCopyOfOptions();
        copy.showClearDateBtn = checked;
        this.myDatePickerNormalOptions = copy;
    }

    onShowInputField(checked: boolean) {
        let copy = this.getCopyOfOptions();
        copy.showInputField = checked;
        this.myDatePickerNormalOptions = copy;
    }

    onAlignSelectorRight(checked: boolean) {
        let copy = this.getCopyOfOptions();
        copy.alignSelectorRight = checked;
        this.myDatePickerNormalOptions = copy;
    }

    onOpenSelectorTopOfInput(checked: boolean) {
        let copy = this.getCopyOfOptions();
        copy.openSelectorTopOfInput = checked;
        this.myDatePickerNormalOptions = copy;
    }

    onShowSelectorArrow(checked: boolean) {
        let copy = this.getCopyOfOptions();
        copy.showSelectorArrow = checked;
        this.myDatePickerNormalOptions = copy;
    }

    onInputAutoFill(checked: boolean) {
        let copy = this.getCopyOfOptions();
        copy.inputAutoFill = checked;
        this.myDatePickerNormalOptions = copy;
    }

    onChangeDateFormat(format: string) {
        let copy = this.getCopyOfOptions();
        copy.dateFormat = format;
        this.myDatePickerNormalOptions = copy;
        this.selectedDateNormal = '';
    }

    onShowWeekNumbers(checked: boolean) {
        let copy = this.getCopyOfOptions();
        copy.showWeekNumbers = checked;
        this.myDatePickerNormalOptions = copy;
    }

    ngOnInit() {
        console.log('onInit(): SampleDatePickerNormal');
    }

    onDateChanged(event: IMyDateModel) {
        console.log('onDateChanged(): ', event.date, ' - jsdate: ', new Date(event.jsdate).toLocaleDateString(), ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
        if(event.formatted !== '') {
            this.selectedTextNormal = 'Formatted: ' + event.formatted + ' - epoc: ' + event.epoc;
            this.border = '1px solid #CCC';

            this.selectedDateNormal = event.formatted;
        }
        else {
            this.selectedTextNormal = '';
            this.border = 'none';
        }
    }

    onInputFieldChanged(event: IMyInputFieldChanged) {
        console.log('onInputFieldChanged(): Value: ', event.value, ' - dateFormat: ', event.dateFormat, ' - valid: ', event.valid);
    }

    onCalendarViewChanged(event: IMyCalendarViewChanged) {
        console.log('onCalendarViewChanged(): Year: ', event.year, ' - month: ', event.month, ' - first: ', event.first, ' - last: ', event.last);
    }

    onCalendarToggle(event: number) {
        console.log('onCalendarToggle(): Reason: ', event);
    }

    onInputFocusBlur(event: number) {
        console.log('onInputFocusBlur(): Reason: ', event);
    }

    getCopyOfOptions() {
        return JSON.parse(JSON.stringify(this.myDatePickerNormalOptions));
    }
}