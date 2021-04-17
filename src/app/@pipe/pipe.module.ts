import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TimerPipe} from './utils/timer.pipe';
import {LocalDataTimeToDate} from './utils/local.data.time.to.date';
import {LocaldatatimeToTimePipe} from './utils/localdatatime.to.time.pipe';
import {TimeFormatPipe} from './utils/time-format.pipe';
import {DatetimeToDatePipe} from './utils/datetime-to-date.pipe';
import {DatetimeToTimePipe} from './utils/datetime-to-time.pipe';


@NgModule({
  declarations: [
    TimerPipe,
    LocalDataTimeToDate,
    LocaldatatimeToTimePipe,
    TimeFormatPipe,
    DatetimeToDatePipe,
    DatetimeToTimePipe
  ],
  imports: [CommonModule],
  exports: [
    TimerPipe,
    LocalDataTimeToDate,
    LocaldatatimeToTimePipe,
    TimeFormatPipe,
    DatetimeToDatePipe,
    DatetimeToTimePipe
  ]
})


export class PipeModule {
}
