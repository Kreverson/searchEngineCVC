import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Passenger } from '../Passenger';
@Component({
  selector: 'app-c-passengers',
  templateUrl: './c-passengers.component.html',
  styleUrls: ['./c-passengers.component.css']
})
export class CPassengersComponent {

  @Input()
  passenger: Passenger;
  
  constructor() { }

}
