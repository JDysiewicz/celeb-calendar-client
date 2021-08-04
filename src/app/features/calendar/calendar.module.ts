import { NgModule } from '@angular/core';
import { CalendarRoutingModule } from './calendar-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CalendarPage } from './calendar.page';

@NgModule({
  declarations: [CalendarPage],
  imports: [CalendarRoutingModule, SharedModule],
  exports: [],
})
export class CalendarModule {}
