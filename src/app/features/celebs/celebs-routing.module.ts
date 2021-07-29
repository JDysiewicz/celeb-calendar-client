import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CelebsRoutingModule {}
