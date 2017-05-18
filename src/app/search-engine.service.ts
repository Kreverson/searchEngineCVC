import { Injectable } from '@angular/core';
import { Product } from './Product'

@Injectable()
export class SearchEngineService {

  constructor() { }

  showProducts(product: Product) {
    let address = "";
    if (product.productType == "AIR" && !product.passenger.isSelected) {
      address += "http://www.cvc.com.br/monte-sua-viagem/resultados?";
      address += "fromCityCode=" + product.locale.fromLocaleCode;
      address += "&toCityCode=" + product.locale.toLocaleCode;
      address += "&leaveDate=" + product.schedule.minDate + "T00:00:00-03:00";
      address += "&returnDate=" + product.schedule.maxDate + "T00:00:00-03:00";
      address += "&rooms=" + product.rooms.getAges();
      address += "&oneTrip=" + product.oneTrip;
      address += "&directTrip=" + product.directTrip;
    }
    else if (product.productType == "AIR" && product.passenger.isSelected) {
      address += " http://www.cvc.com.br/passagens-aereas/resultados?";
      address += "fromCityCode=" + product.locale.fromLocaleCode;
      address += "&toCityCode=" + product.locale.toLocaleCode;
      address += "&leaveDate=" + product.schedule.minDate + "T00:00:00-03:00";
      address += "&returnDate=" + product.schedule.maxDate + "T00:00:00-03:00";
      address += "&oneTrip=" + product.oneTrip;
      address += "&directTrip=" + product.directTrip;
      address += "&ADT=" + product.passenger.ADT;
      address += "&CHD=" + product.passenger.CHD;
      address += "&INF=" + product.passenger.INF;

    }
    else if (product.productType == "CAR") {
      address += "http://www.cvc.com.br/carros/resultados?";
      address += "pickUpLocationCode=" + product.locale.fromLocaleCode;
      if (product.locale.carlocaldeliverydif)
        address += "&returnLocationCode=" + product.locale.toLocaleCode;
      address += "&pickUpDate=" + product.schedule.minDate + "T00:00:00-03:00";
      address += "&returnDate=" + product.schedule.maxDate + "T00:00:00-03:00";
      address += "&pickUpHour=" + product.schedule.minHour;
      address += "&returnHour=" + product.schedule.maxDate;

    }
    else if (product.productType == "HOT") {
      address += "http://www.cvc.com.br/hoteis/resultados?";
      address += "cityCode=" + product.locale.toLocaleCode;
      address += "&checkIn=" + product.schedule.minDate + "T00:00:00-03:00";
      address += "&checkOut=" + product.schedule.maxDate + "T00:00:00-03:00";
      address += "&rooms=" + product.rooms.getAges();
    }
    window.location.href = address;
  }
  validateProduct(product: Product): string[] {
    if (product.productType == "AIR") {
      if (product.locale.fromLocaleCode == undefined)
        product.validationMessage.push("Insira a cidade de origem");
      if (product.locale.toLocaleCode == undefined)
        product.validationMessage.push("Insira a cidade de destino");
      if (product.schedule.minDate == undefined)
        product.validationMessage.push("Insira a data de ida");
      if (product.schedule.maxDate == undefined)
        product.validationMessage.push("Insira a data de volta");
    }

    else if (product.productType == "CAR") {
      if (product.locale.fromLocaleCode == undefined)
        product.validationMessage.push("Insira um local de retirada do veículo");
      if (product.locale.carlocaldeliverydif && product.locale.toLocaleCode == undefined)
        product.validationMessage.push("Insira um local de entrega do veículo");
      if (product.schedule.minDate == undefined)
        product.validationMessage.push("Insira a data de início");
      if (product.schedule.maxDate == undefined)
        product.validationMessage.push("Insira a data de término");
      if (product.schedule.minHour == undefined)
        product.validationMessage.push("Insira hora para retirada do veículo");
      if (product.schedule.maxHour == undefined)
        product.validationMessage.push("Insira hora para entrega do veículo");

    }
    else if (product.productType == "HOT") {
      if (product.locale.toLocaleCode == undefined)
        product.validationMessage.push("Insira um destino ou hotel desejado");
      if (product.schedule.minDate == undefined)
        product.validationMessage.push("Insira a data de checkIn");
      if (product.schedule.maxDate == undefined)
        product.validationMessage.push("Insira a data de checkOut");
    }
    return product.validationMessage;
  }



}
