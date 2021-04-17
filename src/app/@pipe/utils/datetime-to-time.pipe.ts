import {Pipe} from '@angular/core';
import {isNullOrUndefined} from 'util';
import * as moment from 'moment';


@Pipe({name: 'time'})
export class DatetimeToTimePipe {

  transform(value: moment.Moment, ...args): any {
    if ((!isNullOrUndefined(value)) && !moment.isMoment(value)) {
      value = moment(value,"HH:mm:ss");
    }
    if (isNullOrUndefined(value)) {
      return '-';
    } else {
      return value.format("HH:mm");
    }
  }

}
