import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Lazy load modules; best practice (even if not relevant here)
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/calendar/calendar.module').then(
        (m) => m.CalendarModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/account/account.module').then((m) => m.AccountModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
