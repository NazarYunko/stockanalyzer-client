import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TickerComponent} from './ticker/ticker.component';
import {WidgetForexCrossRatesComponent} from './widget-forex-cross-rates/widget-forex-cross-rates.component';
import {CryptoMktScreenerComponent} from './crypto-mkt-screener/crypto-mkt-screener.component';
import {StockInfoComponent} from './stock-info/stock-info.component';


const routes: Routes = [
  {path: '', redirectTo: 'screener', pathMatch: 'full'},
  {path: 'screener', component: TickerComponent},
  {path: 'widget-forex-cross-rates', component: WidgetForexCrossRatesComponent},
  {path: 'crypto-mkt-screener', component: CryptoMktScreenerComponent},
  {path: 'stock-info/:id_stock', component: StockInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
