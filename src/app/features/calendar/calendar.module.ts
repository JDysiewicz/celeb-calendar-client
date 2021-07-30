import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [CalendarComponent, HomeComponent],
  imports: [CommonModule, CalendarRoutingModule],
  exports: [CalendarComponent],
})
export class CalendarModule {}
