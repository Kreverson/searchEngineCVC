import { Component, EventEmitter, Input, Output, Injectable } from '@angular/core';
import { CompleterService, CompleterData } from 'ng2-completer';
import { Http, Response } from '@angular/http';
import { Subject } from "rxjs/Subject";
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import { LocationService } from '../location.service';
import { Product } from '../Product';

@Injectable()
@Component({
  selector: 'app-c-locations',
  templateUrl: './c-locations.component.html',
  styleUrls: ['./c-locations.component.css']
})
export class CLocationsComponent {
  public placeholder: string = "Digite o nome da cidade"
  public textNoResults: string = "Nenhum local encontrado"
  public textSearching: string = "Procurando..."
  public inputClass: string = "form-control"
  public locationService: LocationService;

  @Input()
  product: Product;
  @Input()
  labelLocation: any[];

  constructor(private http: Http) {
    this.locationService = new LocationService(http);
  }

  setWidthStyle(): string {
    if (this.product.productType != "AIR")
      return "col-md-12 col-sm-12 col-xs-12";
    else
      return "col-md-6 col-sm-6 col-xs-12";
  }
  setProductType() {
    this.locationService.productType = this.product.productType;
  }
  showFromLocale(): Boolean {
    if (this.product.productType != "HOT")
      return true;
    else
      return false;
  }
  showToLocale(): Boolean {
    if (this.product.locale.carlocaldeliverydif || this.product.productType != "CAR")
      return true;
    else
      return false;
  }
  onFromLocaleSelected(data) {
    if (typeof (data) == 'object')
      if (data.originalObject != null)
        this.product.locale.fromLocaleCode = data.originalObject.id;

  }
  onToLocaleSelected(data) {
    if (typeof (data) == 'object')
      if (data.originalObject != null)
        this.product.locale.toLocaleCode = data.originalObject.id;

  }
}
