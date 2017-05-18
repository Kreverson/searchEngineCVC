import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Product} from '../Product';
import {Schedule} from '../Schedule';

@Component({
  selector: 'app-p-cars',
  templateUrl: './p-cars.component.html',
  styleUrls: ['./p-cars.component.css']
})
export class PCarsComponent {

  @Input()
  product: Product

  @Output()
  searchProduct: EventEmitter<Product> = new EventEmitter();

  constructor() { }
  onSearchProduct(product: Product){
    this.searchProduct.emit(product);
  }
}
