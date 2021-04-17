import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Ticker} from '../../model/Ticker';
import {TickerItem} from "../../model/TickerItem";
import {Page} from "../../model/page";

@Injectable({
  providedIn: 'root'
})
export class TickerService {

  constructor(private _httpClient: HttpClient) {
  }

  findAll(filterParams: any): Observable<Page<Ticker>> {
    let params: HttpParams = new HttpParams();

    if (filterParams.country != 'all') {
      params = params.set("country", filterParams.country);
    }
    if (filterParams.industry != 'all') {
      params = params.set("industry", filterParams.industry);
    }
    if (filterParams.sector != 'all') {
      params = params.set("sector", filterParams.sector);
    }
    if (filterParams.sector && filterParams.direction) {
      params = params.set("sort", `${filterParams.sort},${filterParams.direction}`);
    }
    params = params.set("page", String(filterParams.page)).set("size", String(filterParams.size));

    return this._httpClient.get<Page<Ticker>>('/tickers', {
      params: params
    })
      .pipe(catchError(err => throwError(err)));
  }

  findAllCountries(): Observable<TickerItem[]> {
    return this._httpClient.get<TickerItem[]>('/tickers/countries')
      .pipe(catchError(err => throwError(err)));
  }

  findAllSectors(): Observable<TickerItem[]> {
    return this._httpClient.get<TickerItem[]>('/tickers/sectors')
      .pipe(catchError(err => throwError(err)));
  }

  findAllIndustries(): Observable<TickerItem[]> {
    return this._httpClient.get<TickerItem[]>('/tickers/industries')
      .pipe(catchError(err => throwError(err)));
  }

}
