import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TickerComponent} from './ticker/ticker.component';


const routes: Routes = [
  {path: '', redirectTo: 'screener', pathMatch: 'full'},
  {path: 'screener', component: TickerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
