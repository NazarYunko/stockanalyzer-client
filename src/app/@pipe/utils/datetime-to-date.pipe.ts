import {Pipe} from '@angular/core';
import {isNullOrUndefined} from 'util';
import * as moment from 'moment';
import {configMoment} from "../../shared/function";


@Pipe({name: 'date'})
export class DatetimeToDatePipe {

  transform(value: moment.Moment, ...args): any {
    if ((!isNullOrUndefined(value)) && !moment.isMoment(value)) {
      value = configMoment(moment(value));
    }
    if (isNullOrUndefined(value)) {
      return '-';
    } else {
      return configMoment(value).format('DD.MM.YYYY');
    }
  }

}
