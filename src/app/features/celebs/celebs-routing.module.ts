import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelebsPage } from './pages/celebs.page';

const routes: Routes = [{ path: ':month/:day', component: CelebsPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class CelebsRoutingModule {}
