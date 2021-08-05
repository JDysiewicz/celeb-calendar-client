import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Month } from 'src/app/types';

@Component({
  selector: 'app-calendar-header',
  templateUrl: './calendar-header.component.html',
  styleUrls: ['./calendar-header.component.css'],
})
export class CalendarHeaderComponent {
  @Input() currentMonth: Month;
  @Output() changeMonth = new EventEmitter<number>();
  constructor() {}

  emitChangeMonth(step: number) {
    this.changeMonth.emit(step);
  }
}
