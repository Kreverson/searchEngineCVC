import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Ng2CompleterModule } from "ng2-completer";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from 'ng2-datepicker';

import {LocationService} from './location.service';
import {SearchEngineService} from './search-engine.service';
import { AppComponent } from './app.component';
import { PHostelsComponent } from './p-hostels/p-hostels.component';
import { PFlightsComponent } from './p-flights/p-flights.component';
import { PCarsComponent } from './p-cars/p-cars.component';
import { PPackagesComponent } from './p-packages/p-packages.component';
import { PExchangesComponent } from './p-exchanges/p-exchanges.component';
import { CRoomsComponent } from './c-rooms/c-rooms.component';
import { CLocationsComponent } from './c-locations/c-locations.component';
import { SearchProductsComponent } from './search-products/search-products.component';
import { CDatePickerComponent } from './c-date-picker/c-date-picker.component';
import { CPassengersComponent } from './c-passengers/c-passengers.component';
import { CBtnsearchComponent } from './c-btnsearch/c-btnsearch.component';
import { CChkdirectflightsComponent } from './c-chkdirectflights/c-chkdirectflights.component';
import { CChkcarlocaldeliveryComponent } from './c-chkcarlocaldelivery/c-chkcarlocaldelivery.component';
@NgModule({
  declarations: [
    AppComponent,
    PHostelsComponent,
    PFlightsComponent,
    PCarsComponent,
    PPackagesComponent,
    PExchangesComponent,
    CRoomsComponent,
    CLocationsComponent,
    SearchProductsComponent,
    CDatePickerComponent,
    CPassengersComponent,
    CBtnsearchComponent,
    CChkdirectflightsComponent,
    CChkcarlocaldeliveryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Ng2CompleterModule,
    DatePickerModule
  ],
  providers: [LocationService, SearchEngineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
