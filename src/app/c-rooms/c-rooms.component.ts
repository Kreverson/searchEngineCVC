import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Room } from '../Room';

@Component({
  selector: 'app-c-rooms',
  templateUrl: './c-rooms.component.html',
  styleUrls: ['./c-rooms.component.css']
})
export class CRoomsComponent {

  @Input()
  room: Room;

  constructor() { }

}
