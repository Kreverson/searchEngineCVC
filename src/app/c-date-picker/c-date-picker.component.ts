import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Schedule } from '../Schedule';

@Component({
  selector: 'app-c-date-picker',
  templateUrl: './c-date-picker.component.html',
  styleUrls: ['./c-date-picker.component.css']
})
export class CDatePickerComponent {

  @Input()
  schedule: Schedule;
  @Input()
  labelDateType: any[];

  constructor() { }

}
