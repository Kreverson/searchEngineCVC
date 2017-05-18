import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Product} from '../Product';
import {Schedule} from '../Schedule';

@Component({
  selector: 'app-p-flights',
  templateUrl: './p-flights.component.html',
  styleUrls: ['./p-flights.component.css']
})
export class PFlightsComponent {

  @Input()
  product: Product;

  @Output()
  searchProduct: EventEmitter<Product> = new EventEmitter();

  constructor() { }
  
  onSearchProduct(product: Product){
    this.searchProduct.emit(product);
  }
}
