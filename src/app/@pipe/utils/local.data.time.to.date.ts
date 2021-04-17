import {isNullOrUndefined} from 'util';
import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({name: 'localDateTime'})
export class LocalDataTimeToDate implements PipeTransform {


  transform(value: moment.Moment, ...args): any {
    if (isNullOrUndefined(value))
      return "-";
    else{
      return value.format("DD.MM.YYYY hh:mm");
    }
  }
}
