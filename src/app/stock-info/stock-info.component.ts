import {AfterViewInit, Component, OnInit} from '@angular/core';
import {StockService} from '../shared/service/server/stock.service';
import {ActivatedRoute} from '@angular/router';
import {Stock} from '../shared/model/Stock';

declare const TradingView: any;

@Component({
  selector: 'app-stock-info',
  templateUrl: './stock-info.component.html',
  styleUrls: ['./stock-info.component.scss']
})
export class StockInfoComponent implements OnInit, AfterViewInit {
  key: string = 'NASDAQ:AAPL';
  stock: Stock;

  constructor(private _activatedRoute: ActivatedRoute, private _stockService: StockService) {

  }

  load(id_stock: string) {
    this._stockService.find(id_stock).subscribe(value => {
      this.stock = value;
      new TradingView.widget({
        'container_id': 'technical-analysis',
        'autosize': true,
        'width': 980,
        'height': 610,
        'symbol': `${this.stock.stockExchange}:${this.stock.symbol}`,
        'interval': 'D',
        'timezone': 'Etc/UTC',
        'theme': 'light',
        'style': '1',
        'locale': 'en',
        'toolbar_bg': '#f1f3f6',
        'enable_publishing': false,
        'hide_legend': true,
        'save_image': false,
      });
    }, error => {
      console.error(error);
    });
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this._activatedRoute.params.subscribe(value => {
      this.load(value['id_stock']);
    });
  }

}
