import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { IconComponent } from './components/icon/icon.component';
import { FormLayoutComponent } from './components/form-layout/form-layout.component';
import { FormErrorsComponent } from './components/form-errors/form-errors.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import { DaySuffix } from './pipes/day-suffix.pipe';

@NgModule({
  declarations: [
    IconComponent,
    FormLayoutComponent,
    FormErrorsComponent,
    PageTitleComponent,
    PageLayoutComponent,
    DaySuffix,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FontAwesomeModule],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    IconComponent,
    FormLayoutComponent,
    FormErrorsComponent,
    PageTitleComponent,
    PageLayoutComponent,
    DaySuffix,
  ],
})
export class SharedModule {}
