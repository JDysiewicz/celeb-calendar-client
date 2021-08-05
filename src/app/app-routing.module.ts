import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Lazy load modules
const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./features/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: 'calendar',
    loadChildren: () =>
      import('./features/calendar/calendar.module').then(
        (m) => m.CalendarModule
      ),
  },
  {
    path: 'celebs',
    loadChildren: () =>
      import('./features/celebs/celebs.module').then((m) => m.CelebsModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
