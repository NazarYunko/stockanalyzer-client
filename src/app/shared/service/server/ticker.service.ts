import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Ticker} from '../../model/Ticker';

@Injectable({
  providedIn: 'root'
})
export class TickerService {

  constructor(private _httpClient: HttpClient) { }

  findAllCountries(): Observable<Ticker[]> {
    return this._httpClient.get<Ticker[]>('/tickers')
      .pipe(map((value: any) => value._embedded.tickers), catchError(err => throwError(err)));
  }
}
