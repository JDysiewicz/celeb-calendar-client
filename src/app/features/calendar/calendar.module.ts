import { NgModule } from '@angular/core';
import { CalendarRoutingModule } from './calendar-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CalendarPage } from './calendar.page';
import { CalendarHeaderComponent } from './components/calendar-header/calendar-header.component';
import { CalendarWrapperComponent } from './components/calendar-wrapper/calendar-wrapper.component';
import { CalendarCellComponent } from './components/calendar-cell/calendar-cell.component';

@NgModule({
  declarations: [CalendarPage, CalendarHeaderComponent, CalendarWrapperComponent, CalendarCellComponent],
  imports: [CalendarRoutingModule, SharedModule],
  exports: [],
})
export class CalendarModule {}
