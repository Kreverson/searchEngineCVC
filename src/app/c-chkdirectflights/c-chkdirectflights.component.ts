import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-c-chkdirectflights',
  templateUrl: './c-chkdirectflights.component.html',
  styleUrls: ['./c-chkdirectflights.component.css']
})
export class CChkdirectflightsComponent {

  @Input()
  product: Product

  constructor() { }

}
