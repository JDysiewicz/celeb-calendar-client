import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISOMonthDay, Month } from 'src/app/types';

@Component({
  selector: 'app-calendar-wrapper',
  templateUrl: './calendar-wrapper.component.html',
  styleUrls: ['./calendar-wrapper.component.css'],
})
export class CalendarWrapperComponent {
  @Input() currentMonth: Month;
  @Output() viewCelebs = new EventEmitter<{ month: string; day: string }>();
  constructor() {}

  getCelebs(day: number) {
    // Creates left-padding day
    const formattedDay = day.toString().padStart(2, '0');

    const month = this.currentMonth.shortName;

    this.viewCelebs.emit({ month, day: formattedDay });
  }
}
