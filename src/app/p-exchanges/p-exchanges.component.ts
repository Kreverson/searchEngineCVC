import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Product} from '../Product';

@Component({
  selector: 'app-p-exchanges',
  templateUrl: './p-exchanges.component.html',
  styleUrls: ['./p-exchanges.component.css']
})
export class PExchangesComponent {

  @Input()
  product: Product;

  @Output()
  searchProduct: EventEmitter<Product> = new EventEmitter();

  constructor() { }
  
  onSearchProduct(product: Product){
    this.searchProduct.emit(product);
  }

}
