import { Component, OnInit } from '@angular/core';
import { MonthString } from 'src/app/types';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.css'],
})
export class CalendarPage implements OnInit {
  // Month wil Date.getMonth() will always be 0-11, so casting is fine here
  month: MonthString;

  monthObj = {
    '0': { name: 'January', shortName: 'Jan', days: 31 },
    '1': { name: 'February', shortName: 'Feb', days: 29 },
    '2': { name: 'March', shortName: 'Mar', days: 31 },
    '3': { name: 'April', shortName: 'Apr', days: 30 },
    '4': { name: 'May', shortName: 'May', days: 31 },
    '5': { name: 'June', shortName: 'Jun', days: 30 },
    '6': { name: 'July', shortName: 'Jul', days: 31 },
    '7': { name: 'August', shortName: 'Aug', days: 31 },
    '8': { name: 'September', shortName: 'Sep', days: 30 },
    '9': { name: 'October', shortName: 'Oct', days: 31 },
    '10': { name: 'November', shortName: 'Nov', days: 30 },
    '11': { name: 'December', shortName: 'Dev', days: 31 },
  };
  constructor() {
    // current month as initial value
    this.month = new Date().getMonth().toString() as MonthString;
  }

  ngOnInit(): void {}

  // ((x +/- 1 ) + k) % k ensures will wrap around
  // will always be 0-11; going from 11 to 12 will loop back to 0, going from 0 to -1 will loop back to 11.
  changeMonth(step: number) {
    this.month = (
      (parseInt(this.month) + step + 12) %
      12
    ).toString() as MonthString;
  }
}
