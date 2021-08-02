import { NgModule } from '@angular/core';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [CalendarComponent, HomeComponent],
  imports: [CalendarRoutingModule, SharedModule],
  exports: [],
})
export class CalendarModule {}
