import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../Product';
import { SearchEngineService } from '../search-engine.service';

@Component({
  selector: 'app-c-btnsearch',
  templateUrl: './c-btnsearch.component.html',
  styleUrls: ['./c-btnsearch.component.css']
})
export class CBtnsearchComponent {

  @Input()
  product: Product;

  @Output()
  searchProduct: EventEmitter<Product> = new EventEmitter();
  errors: string[] = [];

  constructor(private searchEngineService: SearchEngineService) { }

  onClickSearchButton(product: Product) {
    this.errors = [];
    this.product.validationMessage = [];
    this.errors = this.searchEngineService.validateProduct(product);
    if (this.errors.length == 0)
      this.searchProduct.emit(product);
  }

  getErros(): string[] {
    if (this.product != undefined && this.product.validationMessage != undefined)
      return this.product.validationMessage;
    else
      return [];
  }

}
