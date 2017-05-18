import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../Product';
import { Schedule } from '../Schedule';

@Component({
  selector: 'app-p-packages',
  templateUrl: './p-packages.component.html',
  styleUrls: ['./p-packages.component.css']
})
export class PPackagesComponent {

  @Input()
  product: Product;

  @Output()
  searchProduct: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  onSearchProduct(product: Product) {
    this.searchProduct.emit(product);
  }
}
