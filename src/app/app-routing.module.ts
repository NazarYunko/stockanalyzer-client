import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TickerComponent} from "./ticker/ticker.component";


const routes: Routes = [
  {path: 'screener', component: TickerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
