import {Pipe} from '@angular/core';
import {isNullOrUndefined} from 'util';


@Pipe({name: 'timeFormat'})
export class TimeFormatPipe {

  transform(value: number, ...args): any {
    if (isNullOrUndefined(value))
      return "-";
    else {
      let ret: string = "";
      if(value==0){
        return "не виконувалось";
      }
      if ((value / (7 * 24 * 60)) >= 1) {
        ret += (value - (value % (7 * 24 * 60))) / (7 * 24 * 60);
        ret += " тижндень ";
        value = value - (value - (value % (7 * 24 * 60)));
      }
      if ((value / (24 * 60)) >= 1) {
        ret += (value - (value % (24 * 60))) / (24 * 60);
        ret += " дня ";
        value = value - (value - (value % (24 * 60)));
      }
      if ((value / (60)) >= 1) {
        let temp = (value - (value % (60))) / (60);
        ret += temp;
        ret += " годин ";
        value = value - (value - (value % (60)));
      }
      if (value > 0) {
        ret += value;
        ret += " хвилин ";
      }
      return ret;
    }
  }

}
