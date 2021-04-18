import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TickerComponent} from './ticker/ticker.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {UrlInterceptor} from "./@interceptor/url.interceptor";
import {MaterialModule} from "./shared/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PipeModule} from "./@pipe/pipe.module";
import { WidgetForexCrossRatesComponent } from './widget-forex-cross-rates/widget-forex-cross-rates.component';
import { CryptoMktScreenerComponent } from './crypto-mkt-screener/crypto-mkt-screener.component';
import { StockInfoComponent } from './stock-info/stock-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TickerComponent,
    WidgetForexCrossRatesComponent,
    CryptoMktScreenerComponent,
    StockInfoComponent
  ],
  imports: [
    PipeModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: UrlInterceptor,
    multi: true
  },],
  bootstrap: [AppComponent]
})
export class AppModule {
}
