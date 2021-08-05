import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CelebService } from 'src/app/core/services/celeb.service';
import { months } from 'src/app/shared/utils/months.util';
import { ISOMonthDay, Month } from 'src/app/types';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.css'],
})
export class CalendarPage {
  currentMonth: Month;

  constructor(private celebService: CelebService, private router: Router) {
    // current month as initial value
    const monthNowIdx = new Date().getMonth().toString();
    this.currentMonth = this.findMonth(monthNowIdx);
  }

  // ((x +/- 1 ) + k) % k ensures will wrap around
  // will always be 0-11; going from 11 to 12 will loop back to 0, going from 0 to -1 will loop back to 11.
  changeMonth(step: number) {
    const currentMonthIdx = this.currentMonth.idx;
    const newMonthIdx = (
      (parseInt(currentMonthIdx) + step + 12) %
      12
    ).toString();
    this.currentMonth = this.findMonth(newMonthIdx);
  }

  findMonth(idx: string): Month {
    return months.find((m) => m.idx === idx)!;
  }

  redirectToCelebs({ month, day }: { month: string; day: string }) {
    return this.router.navigate([`/celebs/${month}/${day}`]);
  }
}
