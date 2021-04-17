import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Ticker} from '../../model/Ticker';
import {TickerItem} from "../../model/TickerItem";

@Injectable({
  providedIn: 'root'
})
export class TickerService {

  constructor(private _httpClient: HttpClient) { }

  findAll(country: string, industry: string, sector: string, page: number, size: number): Observable<Ticker[]> {
    return this._httpClient.get<Ticker[]>('/tickers', {
      params: new HttpParams().set("country", country)
        .set("industry", industry)
        .set("sector", sector)
        .set("page", String(page))
        .set("size", String(size))
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
