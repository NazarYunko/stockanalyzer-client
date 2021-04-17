import {Pipe, PipeTransform} from '@angular/core';


@Pipe({name: 'timer'})
export class TimerPipe implements PipeTransform {
  constructor() {
  }

  transform(value: number, ...args): any {
    value=parseInt((value/1000).toFixed(0));
    if (!value) {
      return '';
    }
    if (value < 60) {
      if (value < 10) {
        return '0:0' + value;
      }
      return '0:' + value;
    } else {
      if (value % 60 < 10) {
        return parseInt(((value - value % 60) / 60).toFixed(0)) + ':0' + (value % 60).toFixed(0);
      }
      return (((value - value % 60) / 60)).toFixed(0) + ":" + (value % 60).toFixed(0);
    }
  }
}
