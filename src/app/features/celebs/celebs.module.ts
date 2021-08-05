import { NgModule } from '@angular/core';
import { CelebsPage } from './pages/celebs.page';
import { CelebsRoutingModule } from './celebs-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CelebPageHeaderComponent } from './components/celeb-page-header/celeb-page-header.component';
import { CelebInfoComponent } from './components/celeb-info/celeb-info.component';

@NgModule({
  declarations: [CelebsPage, CelebPageHeaderComponent, CelebInfoComponent],
  imports: [SharedModule, CelebsRoutingModule],
})
export class CelebsModule {}
