import {Component, OnInit} from '@angular/core';
import {Sort} from "@angular/material/sort";
import {ActivatedRoute, Router} from "@angular/router";
import {TickerService} from "../shared/service/server/ticker.service";
import {Ticker} from "../shared/model/Ticker";
import {Page} from "../shared/model/page";
import {TickerItem} from "../shared/model/TickerItem";

const ELEMENT_DATA: any[] = [
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
  {name: 'name', symbol: "symbol", country: 'country', sector: 'sector', industry: "industry"},
];

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.scss']
})
export class TickerComponent implements OnInit {
  displayedColumns: string[] = ['name', 'symbol', 'country', 'sector', 'industry'];

  dataSource: Page<Ticker>;
  filterParams = {
    country: 'all',
    industry: 'all',
    sector: 'all',
    count: 10,
    page: 0,
    sort: 'name',
    direction: 'asc',
  };
  country: TickerItem[] = [];
  sector: TickerItem[] = [];
  industries: TickerItem[] = [];

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router,
              private _tickerService: TickerService) {
    _activatedRoute.queryParams.subscribe(value => {
      if (value['country']) {
        this.filterParams.country = value['country'];
      } else {
        this.setDefaultParams("country", this.filterParams.country);
      }
      if (value['industry']) {
        this.filterParams.industry = value['industry'];
      } else {
        this.setDefaultParams("industry", this.filterParams.industry);
      }
      if (value['sector']) {
        this.filterParams.sector = value['sector'];
      } else {
        this.setDefaultParams("sector", this.filterParams.sector);
      }
      if (value['count']) {
        this.filterParams.count = value['count'];
      } else {
        this.setDefaultParams("count", String(this.filterParams.count));
      }
      if (value['page']) {
        this.filterParams.page = value['page'];
      } else {
        this.setDefaultParams("page", String(this.filterParams.page));
      }
      if (value['sort']) {
        this.filterParams.sort = value['sort'];
      } else {
        this.setDefaultParams("sort", String(this.filterParams.sort));
      }
      if (value['direction']) {
        this.filterParams.direction = value['direction'];
      } else {
        this.setDefaultParams("direction", String(this.filterParams.direction));
      }
      this.filter();
    });
    if (this._router.url.indexOf("?") == -1) {
      this.setDefaultParams("country", this.filterParams.country);
    }
  }

  onPage(o: any) {
    console.log(o);
    this.filterParams.count = o.pageSize;
    this.filterParams.page = o.pageIndex;
    this.setFilter();
  }

  filter() {
    this._tickerService.findAll(this.filterParams).subscribe(value => {
      this.dataSource = value;
    }, error => {
      console.error(error);
    })
  }

  setDefaultParams(key: string, value: string) {
    let url = this._router.url;
    if (url.indexOf("?") == -1) {
      url += "?"
    } else {
      url += `&`;
    }
    url += `${key}=${value}`;
    this._router.navigateByUrl(url);
  }

  setFilter() {
    let url: string = this._router.url.split("?")[0]
    url += `?country=${this.filterParams.country}&industry=${this.filterParams.industry}&sector=${this.filterParams.sector}&count=${this.filterParams.count}&page=${this.filterParams.page}&sort=${this.filterParams.sort}&direction=${this.filterParams.direction}`
    this._router.navigateByUrl(url)
  }

  sortData(sort: Sort) {
    if (sort.direction) {
      this.filterParams.direction = sort.direction;
    } else {
      this.filterParams.direction = 'ASC';
    }
    this.filterParams.sort = sort.active;
    console.log(sort);
    this.setFilter();

  }

  ngOnInit(): void {
  }

}
