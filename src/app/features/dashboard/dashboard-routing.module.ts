import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes: Route[] = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
