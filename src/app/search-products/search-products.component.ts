import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { SearchEngineService } from '../search-engine.service';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css']
})
export class SearchProductsComponent implements OnInit {

  tabSelected: number = 1;
  product: Product
  constructor(private searchEngineService: SearchEngineService) {
  }

  ngOnInit() {
    this.product = new Product("AIR");
  }
  onSearchProduct(event) {
    this.searchEngineService.showProducts(this.product);
  }

  isSelected(tab: number): Boolean {
    if (this.tabSelected == tab)
      return true;
    else
      return false;
  }
  selectTab(tab: number) {
    this.tabSelected = tab;
  }
  setProduct(productType: string) {
    this.product = new Product(productType);    
    if (productType == "CAR") {
      this.product.schedule.options.showHours = true;
    }
    if (productType == "AIR" && this.tabSelected == 2) {
      this.product.passenger.isSelected = true;
    }
  }


}
