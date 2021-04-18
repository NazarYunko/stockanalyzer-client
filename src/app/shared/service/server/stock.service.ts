import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Ticker} from '../../model/Ticker';
import {Page} from "../../model/page";

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private _httpClient: HttpClient) {
  }

  find(ticker: string): Observable<Page<Ticker>> {
    let params: HttpParams = new HttpParams();

    params = params.set("interval", "DAILY")
      .set("from", "")
      .set("to", "");

    return this._httpClient.get<Page<Ticker>>('/stocks/' + ticker, {
      params: params
    })
      .pipe(catchError(err => throwError(err)));
  }

}
