import * as moment from 'moment';

export function configMoment(moment: moment.Moment) {
  return moment.utc(true);
}

export function clearTimeZone(str: string) {
  let index = str.indexOf('+');
  if (index == -1) {
    return str;
  }
  return str.substr(0, index);
}

