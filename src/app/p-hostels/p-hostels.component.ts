import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Product} from '../Product';
import {Schedule} from '../Schedule';

@Component({
  selector: 'app-p-hostels',
  templateUrl: './p-hostels.component.html',
  styleUrls: ['./p-hostels.component.css']
})
export class PHostelsComponent {
  
  @Input()
  product: Product;

  @Output()
  searchProduct: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  onSearchProduct(product: Product){
    this.searchProduct.emit(product);
  }
}
