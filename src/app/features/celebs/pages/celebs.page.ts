import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CelebService } from 'src/app/core/services/celeb.service';
import { months } from 'src/app/shared/utils/months.util';
import { Celeb, Month } from 'src/app/types';
@Component({
  selector: 'app-celebs',
  templateUrl: './celebs.page.html',
})
export class CelebsPage implements OnInit {
  celebs$: Observable<Celeb[]>;
  month: string;
  day: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private celebService: CelebService
  ) {}

  ngOnInit() {
    const monthStr = this.route.snapshot.paramMap.get('month')!;
    const dayStr = this.route.snapshot.paramMap.get('day')!;
    if (!monthStr || !dayStr) return this.router.navigate(['/']);

    const formattedDay = dayStr.padStart(2, '0');
    const month = this.findMonth(monthStr);
    this.month = month.name;
    this.day = dayStr;

    const formattedMonth = this.formatMonthStr(month);
    const isoMonthDay = `-${formattedMonth}-${formattedDay}`;
    return (this.celebs$ =
      this.celebService.getCelebsByMonthDayString(isoMonthDay));
  }

  private findMonth(monthName: string) {
    return months.find((month) => month.shortName === monthName)!;
  }

  private formatMonthStr(month: Month) {
    return (parseInt(month.idx) + 1).toString().padStart(2, '0');
  }

  private buildTitle(monthName: string, dayStr: string) {
    return `Celebrities born on ${dayStr} of ${monthName}`;
  }
  // GET DATA OUT OF PARAMS, THEN MAKE NETWORK REQUEST FROM THIS USING CELEBSERVICE
}
