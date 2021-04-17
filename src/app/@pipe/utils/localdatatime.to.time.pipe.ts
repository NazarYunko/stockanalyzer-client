import {isNullOrUndefined} from 'util';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'localtime'})
export class LocaldatatimeToTimePipe implements PipeTransform {


  transform(value: string, ...args): any {
    if (isNullOrUndefined(value))
      return "";
    else
      return value.substring(11,16);
  }
}
