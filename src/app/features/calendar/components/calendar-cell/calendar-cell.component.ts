import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calendar-cell',
  template: `
    <div (click)="onClick()" class="cell box">
      <b>{{ day }}</b>
    </div>
  `,
  styleUrls: ['./calendar-cell.styles.css'],
})
export class CalendarCellComponent {
  @Input() day: number;
  @Output() viewCelebs = new EventEmitter<number>();
  constructor() {}

  onClick() {
    this.viewCelebs.emit(this.day);
  }
}
