import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Locale } from '../Locale';

@Component({
  selector: 'app-c-chkcarlocaldelivery',
  templateUrl: './c-chkcarlocaldelivery.component.html',
  styleUrls: ['./c-chkcarlocaldelivery.component.css']
})
export class CChkcarlocaldeliveryComponent {

  @Input()
  locale: Locale
  
  constructor() { }
}
